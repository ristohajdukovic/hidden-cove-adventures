import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");
const ssrEntry = path.join(rootDir, "dist-ssr", "entry-server.js");

const {
  DEFAULT_LOCALE,
  localizedRouteEntries,
  renderPage,
  getPageMetadata,
  translations,
} = await import(pathToFileURL(ssrEntry).href);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeXml(value) {
  return escapeHtml(value).replaceAll("'", "&apos;");
}

function upsertTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
}

function upsertMetaName(html, name, content) {
  const tag = `<meta name="${name}" content="${escapeHtml(content)}" />`;
  const pattern = new RegExp(`<meta\\s+name=["']${name}["'][^>]*>`, "i");

  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `    ${tag}\n  </head>`);
}

function upsertMetaProperty(html, property, content) {
  const tag = `<meta property="${property}" content="${escapeHtml(content)}" />`;
  const pattern = new RegExp(`<meta\\s+property=["']${property}["'][^>]*>`, "i");

  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `    ${tag}\n  </head>`);
}

function upsertCanonicalAndAlternates(html, metadata) {
  const alternates = metadata.alternates
    .map(
      (alternate) =>
        `    <link rel="alternate" hreflang="${escapeHtml(alternate.hreflang)}" href="${escapeHtml(alternate.href)}" />`,
    )
    .join("\n");
  const canonicalCluster = [
    `    <link rel="canonical" href="${escapeHtml(metadata.canonicalUrl)}" />`,
    alternates,
  ].join("\n");
  let nextHtml = html
    .replace(/\s*<link\s+rel=["']canonical["'][^>]*>\s*/i, "\n")
    .replace(/\s*<link\s+rel=["']alternate["'][^>]*>\s*/gi, "\n");

  nextHtml = nextHtml.replace("</head>", `${canonicalCluster}\n  </head>`);

  return nextHtml;
}

function applyHead(template, locale, pageId) {
  const metadata = getPageMetadata(locale, pageId);
  const translation = translations[locale];
  let html = template.replace(/<html lang="[^"]*">/i, `<html lang="${metadata.htmlLang}">`);

  html = upsertTitle(html, metadata.title);
  html = upsertMetaName(html, "description", metadata.description);
  html = upsertMetaName(html, "robots", "index, follow");
  html = upsertMetaName(html, "twitter:title", metadata.title);
  html = upsertMetaName(html, "twitter:description", metadata.description);
  html = upsertMetaProperty(html, "og:title", metadata.ogTitle);
  html = upsertMetaProperty(html, "og:description", metadata.ogDescription);
  html = upsertMetaProperty(html, "og:url", metadata.canonicalUrl);
  html = upsertMetaProperty(html, "og:locale", metadata.ogLocale);
  html = upsertCanonicalAndAlternates(html, metadata);

  metadata.alternateLocales.forEach((alternateLocale) => {
    html = html.replace(
      "</head>",
      `    <meta property="og:locale:alternate" content="${escapeHtml(alternateLocale)}" />\n  </head>`,
    );
  });

  html = html.replace(
    /<noscript>[\s\S]*?<\/noscript>/i,
    `<noscript><div style="margin:24px auto;max-width:720px;padding:20px;font-family:system-ui,sans-serif;line-height:1.5;">${escapeHtml(
      translation.seo.noscript,
    )}</div></noscript>`,
  );

  return html;
}

function outputFileForRoute(routePath) {
  const cleanPath = routePath.replace(/^\/+|\/+$/g, "");

  if (!cleanPath) {
    return path.join(distDir, "index.html");
  }

  return path.join(distDir, cleanPath, "index.html");
}

function createLegacyEnglishRedirect() {
  const metadata = getPageMetadata(DEFAULT_LOCALE, "home");
  const targetPath = "../";

  return `<!doctype html>
<html lang="${metadata.htmlLang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="refresh" content="0; url=${targetPath}" />
    <meta name="robots" content="noindex, follow" />
    <title>${escapeHtml(metadata.title)}</title>
    <meta name="description" content="${escapeHtml(metadata.description)}" />
    <link rel="canonical" href="${escapeHtml(metadata.canonicalUrl)}" />
${metadata.alternates
  .map(
    (alternate) =>
      `    <link rel="alternate" hreflang="${escapeHtml(alternate.hreflang)}" href="${escapeHtml(alternate.href)}" />`,
  )
  .join("\n")}
  </head>
  <body>
    <p><a href="${targetPath}">Continue to Hidden Cove Ulcinj</a></p>
  </body>
</html>
`;
}

function createSitemap() {
  const urls = localizedRouteEntries
    .map((entry) => {
      const metadata = getPageMetadata(entry.locale, entry.pageId);
      const alternates = metadata.alternates
        .map(
          (alternate) =>
            `    <xhtml:link rel="alternate" hreflang="${escapeXml(alternate.hreflang)}" href="${escapeXml(alternate.href)}" />`,
        )
        .join("\n");

      return `  <url>
    <loc>${escapeXml(metadata.canonicalUrl)}</loc>
${alternates}
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}

const template = await fs.readFile(path.join(distDir, "index.html"), "utf8");

await Promise.all(
  localizedRouteEntries.map(async (entry) => {
    const appHtml = renderPage(entry.locale, entry.pageId);
    const localizedHtml = applyHead(
      template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`),
      entry.locale,
      entry.pageId,
    );
    const outputFile = outputFileForRoute(entry.path);

    await fs.mkdir(path.dirname(outputFile), { recursive: true });
    await fs.writeFile(outputFile, localizedHtml);
  }),
);

await fs.mkdir(path.join(distDir, "en"), { recursive: true });
await fs.writeFile(path.join(distDir, "en", "index.html"), createLegacyEnglishRedirect());
await fs.writeFile(path.join(distDir, "sitemap.xml"), createSitemap());
await fs.writeFile(
  path.join(distDir, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${getPageMetadata(DEFAULT_LOCALE, "home").canonicalUrl.replace(/\/$/, "/sitemap.xml")}\n`,
);
