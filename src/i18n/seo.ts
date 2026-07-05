import { absoluteUrl } from "@/config/site";
import {
  DEFAULT_LOCALE,
  localeEntries,
  supportedLocales,
  type Lang,
} from "./locales";
import { pageContent } from "./pageContent";
import {
  getLocalizedPath,
  localizedRoutePaths,
  type PageId,
} from "./routes";
import { translations } from "./translations";

export type AlternateLink = {
  hreflang: string;
  href: string;
};

export function getCanonicalPath(locale: Lang, pageId: PageId = "home"): string {
  return getLocalizedPath(pageId, locale);
}

export function getCanonicalUrl(
  locale: Lang,
  pageId: PageId = "home",
): string {
  return absoluteUrl(getCanonicalPath(locale, pageId));
}

export function getAlternateLinks(pageId: PageId = "home"): AlternateLink[] {
  return [
    ...localeEntries.map((locale) => ({
      hreflang: locale.hreflang,
      href: absoluteUrl(localizedRoutePaths[pageId][locale.key]),
    })),
    {
      hreflang: "x-default",
      href: absoluteUrl(localizedRoutePaths[pageId][DEFAULT_LOCALE]),
    },
  ];
}

export function getPageMetadata(locale: Lang, pageId: PageId = "home") {
  const t = translations[locale];
  const localeConfig = supportedLocales[locale];
  const pageSeo =
    pageId === "home" ? pageContent[locale].seo.home : pageContent[locale].seo[pageId];
  const alternateLocales = localeEntries
    .filter((entry) => entry.key !== locale)
    .map((entry) => entry.ogLocale);

  return {
    title: pageSeo.title,
    description: pageSeo.description,
    ogTitle: pageSeo.ogTitle,
    ogDescription: pageSeo.ogDescription,
    canonicalUrl: getCanonicalUrl(locale, pageId),
    htmlLang: localeConfig.htmlLang,
    hreflang: localeConfig.hreflang,
    ogLocale: localeConfig.ogLocale,
    alternateLocales,
    alternates: getAlternateLinks(pageId),
    serviceName: t.seo.serviceName,
    serviceType: t.seo.serviceType,
  };
}
