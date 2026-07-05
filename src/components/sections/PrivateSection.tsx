import { useI18n } from "@/i18n/I18nContext";
import { createWhatsAppUrl } from "@/lib/business";
import privateImg from "@/assets/tour-private.jpg";
import { ArrowRight } from "@/components/icons/HandDrawn";

export function PrivateSection() {
  const { lang, t } = useI18n();
  const bookingHref = createWhatsAppUrl({
    locale: lang,
    messageKey: "privateTour",
  });

  return (
    <section className="bg-stone py-20 md:py-28">
      <div className="container">
        <div className="rounded-[2rem] overflow-hidden bg-sand grid grid-cols-1 lg:grid-cols-2 gap-0 border border-adriatic/10">
          <div className="aspect-[4/3] lg:aspect-auto">
            <img src={privateImg} alt={t.privateSec.imageAlt} loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
          </div>
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-olive uppercase">{t.privateSec.eyebrow}</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-adriatic mt-3 mb-5 text-balance leading-[1.05]">
              {t.privateSec.title}
            </h2>
            <p className="text-adriatic/70 text-lg leading-relaxed mb-8 max-w-[48ch]">{t.privateSec.body}</p>
            <a
              href={bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.privateSec.cta}
              className="self-start inline-flex items-center gap-2 bg-adriatic text-stone px-7 py-4 rounded-full font-semibold text-sm hover:bg-olive transition-colors"
            >
              {t.privateSec.cta}
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
