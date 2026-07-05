import { createContext, useContext } from "react";
import type { Lang } from "./locales";
import type { PageId } from "./routes";
import type { TranslationKeys } from "./translations";

export type I18nContextType = {
  lang: Lang;
  pageId: PageId;
  t: TranslationKeys;
};

export const I18nContext = createContext<I18nContextType | undefined>(
  undefined,
);

export function useI18n() {
  const ctx = useContext(I18nContext);

  if (!ctx) {
    throw new Error("useI18n must be inside I18nProvider");
  }

  return ctx;
}
