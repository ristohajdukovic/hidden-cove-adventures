import { useI18n } from "@/i18n/I18nProvider";
import { waLink } from "@/lib/business";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  const { t } = useI18n();
  return (
    <section className="container pb-20 md:pb-28">
      <div className="relative rounded-[2rem] overflow-hidden bg-gradient-sea text-stone p-10 md:p-16 lg:p-20 text-center">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(hsl(var(--stone)) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight text-balance leading-[1.05] mb-5">
            {t.finalCta.title}
          </h2>
          <p className="text-stone/80 text-lg mb-8">{t.finalCta.sub}</p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-apricot text-adriatic px-8 py-4 rounded-full font-semibold text-sm shadow-warm hover:-translate-y-0.5 transition-transform"
          >
            {t.cta.whatsapp}
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
