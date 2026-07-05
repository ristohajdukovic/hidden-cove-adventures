import { renderToString } from "react-dom/server";
import Index from "./pages/Index";
import { getPageMetadata } from "./i18n/seo";
import {
  DEFAULT_LOCALE,
  localeEntries,
  supportedLocales,
  type Lang,
} from "./i18n/locales";
import { translations } from "./i18n/translations";

export { DEFAULT_LOCALE, localeEntries, supportedLocales, translations };
export type { Lang };
export { getPageMetadata };

export function render(locale: Lang): string {
  return renderToString(<Index initialLocale={locale} />);
}
