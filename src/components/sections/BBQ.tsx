import { WhatsAppLink } from "@/components/actions/WhatsAppLink";
import { useI18n } from "@/i18n/I18nContext";
import drinksImg from "@/assets/beer_beach.webp";
import { ArrowRight, Check } from "@/components/icons/HandDrawn";

export function BBQ() {
  const { lang, t } = useI18n();
  return (
    <section
      id="barbecue"
      className="bg-adriatic text-stone py-20 md:py-28 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='40' viewBox='0 0 240 40'%3E%3Cpath fill='none' stroke='%23F4E6C8' stroke-width='1.2' stroke-linecap='round' d='M0 24 Q 30 8, 60 24 T 120 24 T 180 24 T 240 24'/%3E%3C/svg%3E\")",
          backgroundSize: "240px 40px",
        }}
      />
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative">
        <div className="order-2 lg:order-1">
          <span className="text-[11px] font-semibold tracking-[0.2em] text-apricot uppercase">
            {t.bbq.eyebrow}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-stone text-balance leading-[1.05] mt-3 mb-6">
            {t.bbq.title}
          </h2>
          <p className="text-stone/75 text-lg leading-relaxed mb-8 max-w-[52ch]">
            {t.bbq.body}
          </p>
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
          <div className="mt-8">
            <WhatsAppLink
              locale={lang}
              messageKey="bbqTour"
              variables={{ price: t.tours.sunset.price }}
              ariaLabel={t.cta.bookBbqTour}
              className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-apricot px-7 py-4 text-sm font-semibold text-adriatic shadow-warm transition-transform hover:-translate-y-0.5"
            >
              {t.cta.bookBbqTour}
              <ArrowRight className="size-4" />
            </WhatsAppLink>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative">
          <div className="bg-stone/5 p-2.5 rounded-[2rem] border border-stone/10 -rotate-[1.5deg] hover:rotate-0 transition-transform duration-700">
            <div className="rounded-[1.5rem] overflow-hidden aspect-[4/5]">
              <img
                src={drinksImg}
                alt={t.bbq.imageAlt}
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
