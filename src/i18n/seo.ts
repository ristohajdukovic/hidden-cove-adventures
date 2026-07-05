import { absoluteUrl } from "@/config/site";
import {
  DEFAULT_LOCALE,
  localeEntries,
  supportedLocales,
  type Lang,
} from "./locales";
import { translations } from "./translations";

export type AlternateLink = {
  hreflang: string;
  href: string;
};

export function getCanonicalPath(locale: Lang): string {
  return `/${supportedLocales[locale].routeSlug}/`;
}

export function getCanonicalUrl(locale: Lang): string {
  return absoluteUrl(getCanonicalPath(locale));
}

export function getAlternateLinks(): AlternateLink[] {
  return [
    ...localeEntries.map((locale) => ({
      hreflang: locale.hreflang,
      href: absoluteUrl(`/${locale.routeSlug}/`),
    })),
    {
      hreflang: "x-default",
      href: absoluteUrl(`/${supportedLocales[DEFAULT_LOCALE].routeSlug}/`),
    },
  ];
}

export function getPageMetadata(locale: Lang) {
  const t = translations[locale];
  const localeConfig = supportedLocales[locale];
  const alternateLocales = localeEntries
    .filter((entry) => entry.key !== locale)
    .map((entry) => entry.ogLocale);

  return {
    title: t.seo.title,
    description: t.seo.description,
    ogTitle: t.seo.ogTitle,
    ogDescription: t.seo.ogDescription,
    canonicalUrl: getCanonicalUrl(locale),
    htmlLang: localeConfig.htmlLang,
    hreflang: localeConfig.hreflang,
    ogLocale: localeConfig.ogLocale,
    alternateLocales,
    alternates: getAlternateLinks(),
  };
}
