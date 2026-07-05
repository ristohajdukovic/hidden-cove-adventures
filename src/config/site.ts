const fallbackSiteUrl = "https://hiddencoveulcinj.com";

function normalizeSiteUrl(value: string): string {
  return value.replace(/\/+$/, "");
}

const rawSiteUrl = import.meta.env.VITE_SITE_URL?.trim() || fallbackSiteUrl;

export const siteOrigin = normalizeSiteUrl(rawSiteUrl);

export function absoluteUrl(pathname: string): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;

  return `${siteOrigin}${path}`;
}
