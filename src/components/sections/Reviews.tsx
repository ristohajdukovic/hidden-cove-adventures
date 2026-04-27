import { useI18n } from "@/i18n/I18nProvider";
import { Star } from "lucide-react";

export function Reviews() {
  const { t } = useI18n();
  return (
    <section id="reviews" className="bg-sand-deep/50 py-20 md:py-28 texture-stone">
      <div className="container">
        <div className="flex flex-col gap-3 mb-12 max-w-2xl">
          <span className="text-[11px] font-semibold tracking-[0.2em] text-olive uppercase">{t.reviews.eyebrow}</span>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-adriatic text-balance">
            {t.reviews.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {t.reviews.items.map((r, i) => (
            <article key={i} className="bg-stone rounded-[1.75rem] p-7 md:p-8 border border-adriatic/5 shadow-soft">
              <div className="flex gap-0.5 mb-4 text-apricot">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="size-4 fill-current" />
                ))}
              </div>
              <p className="font-display text-lg md:text-xl text-adriatic leading-snug mb-6 text-pretty">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-adriatic/10">
                <div className="size-10 rounded-full bg-sand flex items-center justify-center font-display text-olive">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-adriatic">{r.name}</div>
                  <div className="text-xs text-adriatic/60">{r.from}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
