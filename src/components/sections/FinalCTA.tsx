import { useI18n } from "@/i18n/I18nContext";
import { hasWhatsApp, waLink } from "@/lib/business";
import { ArrowRight } from "@/components/icons/HandDrawn";

export function FinalCTA() {
  const { t } = useI18n();
  return (
    <section className="container pb-20 md:pb-28">
      <div className="relative rounded-[2rem] overflow-hidden bg-gradient-sea text-stone p-10 md:p-16 lg:p-20 text-center">
        <div className="absolute inset-0 opacity-[0.14] pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='40' viewBox='0 0 240 40'%3E%3Cpath fill='none' stroke='%23F4E6C8' stroke-width='1.2' stroke-linecap='round' d='M0 24 Q 30 8, 60 24 T 120 24 T 180 24 T 240 24'/%3E%3C/svg%3E\")",
            backgroundSize: "240px 40px",
          }} />
        <div className="relative max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight text-balance leading-[1.05] mb-5">
            {t.finalCta.title}
          </h2>
          <p className="text-stone/80 text-lg mb-8">{t.finalCta.sub}</p>
          <a
            href={waLink(t.whatsapp.general)}
            target={hasWhatsApp ? "_blank" : undefined}
            rel={hasWhatsApp ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 bg-apricot text-adriatic px-8 py-4 rounded-full font-semibold text-sm shadow-warm hover:-translate-y-0.5 transition-transform"
          >
            {hasWhatsApp ? t.cta.whatsapp : t.cta.contact}
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
