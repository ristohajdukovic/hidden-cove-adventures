import { useEffect, ReactNode } from "react";
import { translations } from "./translations";
import { I18nContext } from "./I18nContext";
import {
  DEFAULT_LOCALE,
  supportedLocales,
  type Lang,
} from "./locales";
import type { PageId } from "./routes";

const LANG_KEY = "hco-lang";

export function I18nProvider({
  children,
  locale = DEFAULT_LOCALE,
  pageId = "home",
}: {
  children: ReactNode;
  locale?: Lang;
  pageId?: PageId;
}) {
  const lang = locale;

  useEffect(() => {
    document.documentElement.lang = supportedLocales[lang].htmlLang;
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      // localStorage can be unavailable in private browsing or embedded contexts.
    }
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, pageId, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}
