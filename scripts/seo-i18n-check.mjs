import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");
const ssrEntry = path.join(rootDir, "dist-ssr", "entry-server.js");
const { localeEntries, getPageMetadata, translations } = await import(
  pathToFileURL(ssrEntry).href
);

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

const sitemapPath = path.join(distDir, "sitemap.xml");
const sitemap = await fs.readFile(sitemapPath, "utf8");

for (const locale of localeEntries) {
  const localePath = path.join(distDir, locale.routeSlug, "index.html");
  const html = await fs.readFile(localePath, "utf8");
  const metadata = getPageMetadata(locale.key);
  const h1Segments = [
    translations[locale.key].hero.titleA,
    translations[locale.key].hero.titleItalic,
    translations[locale.key].hero.titleB,
  ];

  assert(
    new RegExp(`<html\\s+lang=["']${escapeRegExp(metadata.htmlLang)}["']`, "i").test(html),
    `${locale.key}: missing html lang ${metadata.htmlLang}`,
  );
  assert(
    html.includes(`<title>${escapeHtml(metadata.title)}</title>`),
    `${locale.key}: missing localized title`,
  );
  assert(
    html.includes(`content="${escapeHtml(metadata.description)}"`),
    `${locale.key}: missing meta description`,
  );
  assert(html.includes(`href="${metadata.canonicalUrl}"`), `${locale.key}: missing canonical`);
  assert(!html.includes("localhost"), `${locale.key}: contains localhost`);
  assert(!/lovable|preview/i.test(html), `${locale.key}: contains preview-domain text`);
  assert(!/noindex/i.test(html), `${locale.key}: contains noindex`);
  h1Segments.forEach((segment) => {
    assert(
      html.includes(escapeHtml(segment)),
      `${locale.key}: localized H1 segment missing in raw HTML: ${segment}`,
    );
  });
  assert(sitemap.includes(`<loc>${metadata.canonicalUrl}</loc>`), `${locale.key}: sitemap missing URL`);

  metadata.alternates.forEach((alternate) => {
    assert(
      html.includes(`hreflang="${alternate.hreflang}"`) &&
        html.includes(`href="${alternate.href}"`),
      `${locale.key}: missing alternate ${alternate.hreflang}`,
    );
    assert(
      sitemap.includes(`hreflang="${alternate.hreflang}"`) &&
        sitemap.includes(`href="${alternate.href}"`),
      `${locale.key}: sitemap missing alternate ${alternate.hreflang}`,
    );
  });

  const jsonLdBlocks = scriptJsonLdBlocks(html);

  assert(jsonLdBlocks.length > 0, `${locale.key}: JSON-LD missing`);

  jsonLdBlocks.forEach((block, index) => {
    try {
      JSON.parse(block);
    } catch (error) {
      errors.push(`${locale.key}: JSON-LD block ${index + 1} is invalid JSON`);
    }
  });

  assert(!/{{[^}]+}}/.test(html), `${locale.key}: contains unreplaced placeholder`);
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`SEO/i18n generated-output check passed for ${localeEntries.length} localized pages.`);
