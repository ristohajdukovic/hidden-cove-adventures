import { renderToString } from "react-dom/server";
import Index from "./pages/Index";
import TourDetail from "./pages/TourDetail";
import ToursOverview from "./pages/ToursOverview";
import { getPageMetadata } from "./i18n/seo";
import {
  DEFAULT_LOCALE,
  localeEntries,
  supportedLocales,
  type Lang,
} from "./i18n/locales";
import {
  localizedRouteEntries,
  pageIds,
  tourPageIds,
  type PageId,
  type TourPageId,
} from "./i18n/routes";
import { translations } from "./i18n/translations";
import { pageContent } from "./i18n/pageContent";

export {
  DEFAULT_LOCALE,
  localeEntries,
  localizedRouteEntries,
  pageContent,
  pageIds,
  supportedLocales,
  tourPageIds,
  translations,
};
export type { Lang, PageId };
export { getPageMetadata };

export function renderPage(locale: Lang, pageId: PageId): string {
  if (pageId === "home") {
    return renderToString(<Index initialLocale={locale} />);
  }

  if (pageId === "tours") {
    return renderToString(<ToursOverview initialLocale={locale} />);
  }

  return renderToString(
    <TourDetail initialLocale={locale} pageId={pageId as TourPageId} />,
  );
}
