import {
  DEFAULT_LOCALE,
  supportedLocaleKeys,
  supportedLocales,
  type Lang,
} from "./locales";

export type HomePageId = "home";
export type ToursOverviewPageId = "tours";
export type TourPageId =
  | "classicTour"
  | "barbecueTour"
  | "sunsetTour"
  | "moonlightTour";
export type PageId = HomePageId | ToursOverviewPageId | TourPageId;

export const pageIds = [
  "home",
  "tours",
  "classicTour",
  "barbecueTour",
  "sunsetTour",
  "moonlightTour",
] as const satisfies readonly PageId[];

export const tourPageIds = [
  "classicTour",
  "barbecueTour",
  "sunsetTour",
  "moonlightTour",
] as const satisfies readonly TourPageId[];

export const localizedRoutePaths = {
  home: {
    en: "/",
    de: "/de/",
    sq: "/sq/",
    me: "/me/",
  },
  tours: {
    en: "/tours/",
    de: "/de/bootstouren/",
    sq: "/sq/ture-me-varke/",
    me: "/me/ture-brodom/",
  },
  classicTour: {
    en: "/tours/classic-tour/",
    de: "/de/bootstouren/classic-tour/",
    sq: "/sq/ture-me-varke/classic-tour/",
    me: "/me/ture-brodom/classic-tour/",
  },
  barbecueTour: {
    en: "/tours/beach-bbq-tour/",
    de: "/de/bootstouren/strand-bbq-tour/",
    sq: "/sq/ture-me-varke/tur-bbq-ne-plazh/",
    me: "/me/ture-brodom/plazni-rostilj-tura/",
  },
  sunsetTour: {
    en: "/tours/sunset-tour/",
    de: "/de/bootstouren/sonnenuntergangstour/",
    sq: "/sq/ture-me-varke/tur-ne-perendim/",
    me: "/me/ture-brodom/tura-zalaska-sunca/",
  },
  moonlightTour: {
    en: "/tours/moonlight-tour/",
    de: "/de/bootstouren/mondscheintour/",
    sq: "/sq/ture-me-varke/tur-nen-hene/",
    me: "/me/ture-brodom/mjeseceva-tura/",
  },
} as const satisfies Record<PageId, Record<Lang, string>>;

const appBasePath = import.meta.env.BASE_URL ?? "/";

function normalizeAppBasePath(pathname: string): string {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return `/${pathname.replace(/^\/+|\/+$/g, "")}/`;
}

export function withBasePath(pathname: string): string {
  const basePath = normalizeAppBasePath(appBasePath);
  const cleanPath = pathname.startsWith("/") ? pathname.slice(1) : pathname;

  if (basePath === "/") {
    return `/${cleanPath}`.replace(/\/{2,}/g, "/");
  }

  return `${basePath}${cleanPath}`.replace(/\/{2,}/g, "/");
}

export function getLocalizedPath(pageId: PageId, locale: Lang): string {
  return localizedRoutePaths[pageId][locale];
}

export function getLocalizedHref(
  pageId: PageId,
  locale: Lang,
  hash = "",
): string {
  const path = withBasePath(getLocalizedPath(pageId, locale));

  if (!hash) {
    return path;
  }

  return `${path}${hash.startsWith("#") ? hash : `#${hash}`}`;
}

export function getHomeSectionHref(locale: Lang, hash: string): string {
  return getLocalizedHref("home", locale, hash);
}

export type LocalizedRouteEntry = {
  pageId: PageId;
  locale: Lang;
  path: string;
};

export const localizedRouteEntries: LocalizedRouteEntry[] = pageIds.flatMap(
  (pageId) =>
    supportedLocaleKeys.map((locale) => ({
      pageId,
      locale,
      path: localizedRoutePaths[pageId][locale],
    })),
);

const normalizedPathMap = new Map<string, LocalizedRouteEntry>();

localizedRouteEntries.forEach((entry) => {
  normalizedPathMap.set(normalizePath(entry.path), entry);
});

export function normalizePath(pathname: string): string {
  const withoutBase = pathname.startsWith(normalizeAppBasePath(appBasePath))
    ? pathname.slice(normalizeAppBasePath(appBasePath).length - 1)
    : pathname;
  const noQuery = withoutBase.split(/[?#]/)[0] || "/";
  const normalized = `/${noQuery.replace(/^\/+|\/+$/g, "")}`;

  return normalized === "/" ? "/" : `${normalized}/`;
}

export function getRouteEntryFromPath(
  pathname: string,
): LocalizedRouteEntry | null {
  return normalizedPathMap.get(normalizePath(pathname)) ?? null;
}

export function getLocaleFromPathname(pathname: string): Lang {
  const routeEntry = getRouteEntryFromPath(pathname);

  if (routeEntry) {
    return routeEntry.locale;
  }

  const firstSegment = normalizePath(pathname).split("/").filter(Boolean)[0];
  const locale = supportedLocaleKeys.find(
    (key) => supportedLocales[key].routeSlug === firstSegment,
  );

  return locale ?? DEFAULT_LOCALE;
}

export function isLegacyEnglishPath(pathname: string): boolean {
  return normalizePath(pathname).startsWith("/en/");
}
