import { localeEntries } from "./locales";

const languageShortLabels = {
  en: "EN",
  de: "DE",
  sq: "SQ",
  me: "CG",
} as const;

export const LANGS = localeEntries.map((locale) => ({
  code: locale.key,
  label: locale.nativeName,
  shortLabel: languageShortLabels[locale.key],
  htmlLang: locale.htmlLang,
  hreflang: locale.hreflang,
}));
