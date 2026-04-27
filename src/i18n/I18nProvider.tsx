import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, Lang, TranslationKeys } from "./translations";

type I18nContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: TranslationKeys;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const LANG_KEY = "hco-lang";
const SUPPORTED: Lang[] = ["en", "de", "sr", "sq"];

function detect(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem(LANG_KEY) as Lang | null;
  if (stored && SUPPORTED.includes(stored)) return stored;
  const nav = navigator.language.slice(0, 2).toLowerCase();
  if (nav === "de") return "de";
  if (["sr", "bs", "hr", "me"].includes(nav)) return "sr";
  if (nav === "sq") return "sq";
  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    setLangState(detect());
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(LANG_KEY, l); } catch {}
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be inside I18nProvider");
  return ctx;
}

export const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "sr", label: "SR" },
  { code: "sq", label: "SQ" },
];
