import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");
const ssrEntry = path.join(rootDir, "dist-ssr", "entry-server.js");
const {
  localizedRouteEntries,
  getPageMetadata,
  translations,
} = await import(pathToFileURL(ssrEntry).href);

const errors = [];

function assert(condition, message) {
  if (!condition) {
    errors.push(message);
  }
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function scriptJsonLdBlocks(html) {
  return [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map(
    (match) => match[1],
  );
}

function fileForRoute(routePath) {
  const cleanPath = routePath.replace(/^\/+|\/+$/g, "");

  return cleanPath
    ? path.join(distDir, cleanPath, "index.html")
    : path.join(distDir, "index.html");
}

const sitemap = await fs.readFile(path.join(distDir, "sitemap.xml"), "utf8");

for (const entry of localizedRouteEntries) {
  const html = await fs.readFile(fileForRoute(entry.path), "utf8");
  const metadata = getPageMetadata(entry.locale, entry.pageId);

  assert(
    new RegExp(`<html\\s+lang=["']${escapeRegExp(metadata.htmlLang)}["']`, "i").test(html),
    `${entry.locale}:${entry.pageId}: missing html lang ${metadata.htmlLang}`,
  );
  assert(
    html.includes(`<title>${escapeHtml(metadata.title)}</title>`),
    `${entry.locale}:${entry.pageId}: missing localized title`,
  );
  assert(
    html.includes(`content="${escapeHtml(metadata.description)}"`),
    `${entry.locale}:${entry.pageId}: missing meta description`,
  );
  assert(
    html.includes(`href="${metadata.canonicalUrl}"`),
    `${entry.locale}:${entry.pageId}: missing canonical`,
  );
  assert(!html.includes("localhost"), `${entry.locale}:${entry.pageId}: contains localhost`);
  assert(!/lovable|preview/i.test(html), `${entry.locale}:${entry.pageId}: contains preview-domain text`);
  assert(!/noindex/i.test(html), `${entry.locale}:${entry.pageId}: contains noindex`);
  assert(
    sitemap.includes(`<loc>${metadata.canonicalUrl}</loc>`),
    `${entry.locale}:${entry.pageId}: sitemap missing URL`,
  );

  metadata.alternates.forEach((alternate) => {
    assert(
      html.includes(`hreflang="${alternate.hreflang}"`) &&
        html.includes(`href="${alternate.href}"`),
      `${entry.locale}:${entry.pageId}: missing alternate ${alternate.hreflang}`,
    );
    assert(
      sitemap.includes(`hreflang="${alternate.hreflang}"`) &&
        sitemap.includes(`href="${alternate.href}"`),
      `${entry.locale}:${entry.pageId}: sitemap missing alternate ${alternate.hreflang}`,
    );
  });

  const jsonLdBlocks = scriptJsonLdBlocks(html);

  assert(jsonLdBlocks.length > 0, `${entry.locale}:${entry.pageId}: JSON-LD missing`);

  jsonLdBlocks.forEach((block, index) => {
    try {
      JSON.parse(block);
    } catch {
      errors.push(`${entry.locale}:${entry.pageId}: JSON-LD block ${index + 1} is invalid JSON`);
    }
  });

  assert(!/{{[^}]+}}/.test(html), `${entry.locale}:${entry.pageId}: contains unreplaced placeholder`);

  if (entry.pageId === "home") {
    [
      translations[entry.locale].hero.titleA,
      translations[entry.locale].hero.titleItalic,
      translations[entry.locale].hero.titleB,
    ].forEach((segment) => {
      assert(
        html.includes(escapeHtml(segment)),
        `${entry.locale}: localized H1 segment missing in raw HTML: ${segment}`,
      );
    });
  }
}

const legacyEnglish = await fs.readFile(path.join(distDir, "en", "index.html"), "utf8");
assert(/noindex/i.test(legacyEnglish), "legacy /en/ redirect should be noindex");
assert(!sitemap.includes("/en/"), "sitemap must not include legacy /en/ URLs");

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`SEO/i18n generated-output check passed for ${localizedRouteEntries.length} localized pages.`);
