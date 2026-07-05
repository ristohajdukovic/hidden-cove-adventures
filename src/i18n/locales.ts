export const DEFAULT_LOCALE = "en";

export const supportedLocales = {
  en: {
    key: "en",
    routeSlug: "en",
    htmlLang: "en",
    hreflang: "en",
    nativeName: "English",
    englishName: "English",
    mapTilerLanguage: "ENGLISH",
    ogLocale: "en_US",
  },
  de: {
    key: "de",
    routeSlug: "de",
    htmlLang: "de",
    hreflang: "de",
    nativeName: "Deutsch",
    englishName: "German",
    mapTilerLanguage: "GERMAN",
    ogLocale: "de_DE",
  },
  sq: {
    key: "sq",
    routeSlug: "sq",
    htmlLang: "sq",
    hreflang: "sq",
    nativeName: "Shqip",
    englishName: "Albanian",
    mapTilerLanguage: "ALBANIAN",
    ogLocale: "sq_AL",
  },
  me: {
    key: "me",
    routeSlug: "me",
    htmlLang: "sr-Latn-ME",
    hreflang: "sr-Latn-ME",
    nativeName: "Crnogorski",
    englishName: "Montenegrin Latin",
    mapTilerLanguage: "SERBIAN_LATIN",
    ogLocale: "sr_ME",
  },
} as const;

export type Lang = keyof typeof supportedLocales;
export type SupportedLocale = (typeof supportedLocales)[Lang];

export const localeEntries = Object.values(supportedLocales);
export const supportedLocaleKeys = Object.keys(supportedLocales) as Lang[];
const appBasePath = import.meta.env.BASE_URL ?? "/";

function normalizeAppBasePath(pathname: string): string {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return `/${pathname.replace(/^\/+|\/+$/g, "")}/`;
}

export function isSupportedLocale(value: string | undefined): value is Lang {
  return Boolean(value && value in supportedLocales);
}

export function getLocaleFromRouteSlug(
  routeSlug: string | undefined,
): SupportedLocale | null {
  if (!routeSlug) {
    return null;
  }

  const match = localeEntries.find((locale) => locale.routeSlug === routeSlug);

  return match ?? null;
}

export function getLocaleFromPath(pathname: string): SupportedLocale | null {
  const [, firstSegment] = pathname.split("/");

  return getLocaleFromRouteSlug(firstSegment);
}

export function localizedPath(
  locale: Lang,
  hashOrPath = "",
): string {
  const basePath = normalizeAppBasePath(appBasePath);
  const localePath = `${basePath}${supportedLocales[locale].routeSlug}/`;

  if (!hashOrPath) {
    return localePath;
  }

  if (hashOrPath.startsWith("#")) {
    return `${localePath}${hashOrPath}`;
  }

  return `${localePath}${hashOrPath.replace(/^\/+/, "")}`;
}

export function normalizeHash(hash: string): string {
  return hash.startsWith("#") ? hash : `#${hash}`;
}
