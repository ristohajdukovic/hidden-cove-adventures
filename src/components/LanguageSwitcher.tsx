import { useI18n, LANGS } from "@/i18n/I18nProvider";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className, compact = false }: { className?: string; compact?: boolean }) {
  const { lang, setLang } = useI18n();
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.2em] text-adriatic/40",
        className
      )}
      aria-label="Language"
    >
      {LANGS.map((l, i) => (
        <div key={l.code} className="flex items-center gap-1.5">
          <button
            onClick={() => setLang(l.code)}
            className={cn(
              "transition-colors hover:text-adriatic",
              lang === l.code && "text-adriatic"
            )}
            aria-current={lang === l.code}
          >
            {l.label}
          </button>
          {i < LANGS.length - 1 && <span className="text-adriatic/20">/</span>}
        </div>
      ))}
    </div>
  );
}
