import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/I18nContext";
import { LANGS } from "@/i18n/languages";
import { localizedPath } from "@/i18n/locales";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  className,
}: {
  className?: string;
}) {
  const { lang, t } = useI18n();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => {
      setHash(window.location.hash);
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.06em] text-adriatic/65",
        className
      )}
      aria-label={t.aria.languageSelection}
    >
      {LANGS.map((l, i) => (
        <div key={l.code} className="flex items-center gap-1.5">
          <a
            href={localizedPath(l.code, hash)}
            hrefLang={l.hreflang}
            lang={l.htmlLang}
            title={l.label}
            aria-label={l.label}
            className={cn(
              "transition-colors hover:text-adriatic",
              lang === l.code && "text-adriatic"
            )}
            aria-current={lang === l.code ? "page" : undefined}
          >
            {l.shortLabel}
          </a>
          {i < LANGS.length - 1 && <span className="text-adriatic/35">/</span>}
        </div>
      ))}
    </div>
  );
}
