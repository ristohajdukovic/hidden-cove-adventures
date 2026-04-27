import { useI18n } from "@/i18n/I18nProvider";
import drinksImg from "@/assets/gallery-drinks.jpg";
import { Check } from "lucide-react";

export function BBQ() {
  const { t } = useI18n();
  return (
    <section className="bg-adriatic text-stone py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(hsl(var(--stone)) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative">
        <div className="order-2 lg:order-1">
          <span className="text-[11px] font-semibold tracking-[0.2em] text-apricot uppercase">{t.bbq.eyebrow}</span>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-stone text-balance leading-[1.05] mt-3 mb-6">
            {t.bbq.title}
          </h2>
          <p className="text-stone/75 text-lg leading-relaxed mb-8 max-w-[52ch]">{t.bbq.body}</p>
          <ul className="space-y-3">
            {t.bbq.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 size-5 rounded-full bg-apricot/20 text-apricot flex items-center justify-center shrink-0">
                  <Check className="size-3" />
                </span>
                <span className="text-stone/85">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 lg:order-2 relative">
          <div className="bg-stone/5 p-2.5 rounded-[2rem] border border-stone/10 -rotate-[1.5deg] hover:rotate-0 transition-transform duration-700">
            <div className="rounded-[1.5rem] overflow-hidden aspect-[4/5]">
              <img src={drinksImg} alt="Cold local drinks served on board" loading="lazy" width={1024} height={1024}
                className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
