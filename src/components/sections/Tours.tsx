import type { CSSProperties } from "react";
import { useI18n } from "@/i18n/I18nContext";
import { formatWhatsAppMessage, hasWhatsApp, waLink } from "@/lib/business";
import hiddenImg from "@/assets/tour-hidden-beach.jpg";
import sunsetImg from "@/assets/tour-sunset-bbq.jpg";
import sunsetTourImg from "@/assets/gallery-oldtown.jpg";
import moonImg from "@/assets/tour-moonlight.jpg";
import { ArrowUpRight, Clock, Users } from "@/components/icons/HandDrawn";

export function Tours() {
  const { t } = useI18n();
  const tours = t.tours;
  const tourHref = (tourName: string) =>
    waLink(formatWhatsAppMessage(t.whatsapp.tourInfo, { tourName }));

  return (
    <section id="tours" className="container py-20 md:py-28">
      <div className="flex flex-col gap-3 mb-12 max-w-2xl">
        <span className="text-[11px] font-semibold tracking-[0.2em] text-olive uppercase">
          {t.toursSection.eyebrow}
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-adriatic text-balance">
          {t.toursSection.title}
        </h2>
        <p className="text-[15px] leading-relaxed text-adriatic/70 md:text-lg">{t.toursSection.sub}</p>
      </div>

      <div className="tours-grid grid grid-cols-1 gap-5">
        {/* Classic Tour */}
        <a
          href={tourHref(tours.hidden.name)}
          target={hasWhatsApp ? "_blank" : undefined}
          rel={hasWhatsApp ? "noopener noreferrer" : undefined}
          className="tour-card tour-card--classic group photo-frame flex flex-col hover:-translate-y-1 transition-transform duration-500"
        >
          <div className="tour-card__media photo-frame-inner relative aspect-[4/3] w-full mb-5">
            <img src={hiddenImg} alt={tours.hidden.imageAlt} loading="lazy" width={1024} height={768}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-4 left-4 bg-stone/90 backdrop-blur px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wide text-adriatic">
              {tours.hidden.tagline}
            </div>
            <div className="absolute top-4 right-4 size-10 rounded-full bg-stone/90 backdrop-blur flex items-center justify-center text-adriatic group-hover:bg-apricot transition-colors">
              <ArrowUpRight className="size-4" />
            </div>
          </div>
          <div className="tour-card__content px-5 pb-5 flex flex-col gap-3 flex-1">
            <h3 className="font-display text-3xl md:text-4xl font-medium text-adriatic text-balance">
              {tours.hidden.name}
            </h3>
            <p className="max-w-[52ch] text-[15px] leading-relaxed text-adriatic/70 md:text-base">{tours.hidden.desc}</p>
            <IncludedList items={tours.hidden.included} />
            {tours.hidden.note && (
              <p className="text-sm italic leading-relaxed text-adriatic/65">{tours.hidden.note}</p>
            )}
            <TourMeta duration={tours.hidden.duration} group={tours.hidden.group} price={tours.hidden.price} />
          </div>
        </a>

        {/* BBQ Tour — wide */}
        <a
          href={tourHref(tours.sunset.name)}
          target={hasWhatsApp ? "_blank" : undefined}
          rel={hasWhatsApp ? "noopener noreferrer" : undefined}
          className="tour-card tour-card--bbq group photo-frame flex flex-col gap-5 hover:-translate-y-1 transition-transform duration-500"
        >
          <div className="tour-card__media tour-card__media--bbq photo-frame-inner aspect-[4/3] shrink-0">
            <img src={sunsetImg} alt={tours.sunset.imageAlt} loading="lazy" width={1024} height={1024}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="tour-card__content min-w-0 flex-1 px-5 pb-5 lg:py-6 lg:pr-6 flex flex-col gap-3 justify-center">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-apricot uppercase">{tours.sunset.tagline}</span>
            <h3 className="font-display text-2xl md:text-3xl font-medium text-adriatic">{tours.sunset.name}</h3>
            <p className="line-clamp-3 text-sm leading-relaxed text-adriatic/75">{tours.sunset.desc}</p>
            <IncludedList items={tours.sunset.included} compact />
            {tours.sunset.note && (
              <p className="text-sm italic leading-relaxed text-adriatic/65">{tours.sunset.note}</p>
            )}
            <TourMeta duration={tours.sunset.duration} group={tours.sunset.group} price={tours.sunset.price} compact />
          </div>
        </a>

        {/* Sunset Tour */}
        <a
          href={tourHref(tours.moonlight.name)}
          target={hasWhatsApp ? "_blank" : undefined}
          rel={hasWhatsApp ? "noopener noreferrer" : undefined}
          className="tour-card tour-card--sunset group photo-frame flex flex-col hover:-translate-y-1 transition-transform duration-500"
        >
          <div className="tour-card__media photo-frame-inner aspect-[4/3] w-full mb-4">
            <img src={sunsetTourImg} alt={tours.moonlight.imageAlt} loading="lazy" width={1024} height={768}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="tour-card__content px-4 pb-4 flex flex-col flex-1 gap-2">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-sea uppercase">{tours.moonlight.tagline}</span>
            <h3 className="font-display text-xl font-medium text-adriatic">{tours.moonlight.name}</h3>
            <p className="line-clamp-2 text-sm leading-relaxed text-adriatic/75">{tours.moonlight.desc}</p>
            <IncludedList items={tours.moonlight.included} compact />
            {tours.moonlight.note && (
              <p className="text-sm italic leading-relaxed text-adriatic/65">{tours.moonlight.note}</p>
            )}
            <div className="mt-auto pt-3 flex items-baseline justify-between border-t border-adriatic/10">
              {tours.moonlight.duration && (
                <span className="text-sm uppercase tracking-widest text-adriatic/65 font-semibold">{tours.moonlight.duration}</span>
              )}
              <span className="text-sm font-semibold text-olive tabular-nums ml-auto">{tours.moonlight.price}</span>
            </div>
          </div>
        </a>

        {/* Moonlight Tour — Coming Soon */}
        <div
          className="tour-card tour-card--moonlight moonlight-tour-card group relative rounded-[2rem] border border-stone/15 p-2.5 shadow-card transition-transform duration-500 hover:-translate-y-1"
          style={{ "--moonlight-image": `url(${moonImg})` } as CSSProperties}
        >
          <div className="relative z-10 flex h-full flex-col rounded-[1.5rem] p-4 outline outline-1 -outline-offset-1 outline-stone/20 md:p-5">
            <div className="mb-3 flex size-9 items-center justify-center rounded-full border border-apricot/35 bg-adriatic/55 shadow-soft backdrop-blur">
              <div className="size-3 rounded-full border-2 border-apricot bg-apricot/25" />
            </div>
            <span className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-apricot">{tours.private.tagline}</span>
            <h3 className="mb-2 font-display text-[23px] font-medium leading-tight text-stone">{tours.private.name}</h3>
            <p className="mb-4 max-w-[30ch] text-sm leading-relaxed text-stone/85">{tours.private.desc}</p>
            <div className="mt-auto">
              <span className="inline-block rounded-full border border-apricot/35 bg-adriatic/55 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-stone backdrop-blur">
                {tours.private.tagline}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IncludedList({ items, compact = false }: { items: string[]; compact?: boolean }) {
  if (items.length === 0) return null;
  return (
    <ul className={`grid gap-1 mt-1 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"} gap-x-4`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-1.5 text-sm text-adriatic/75">
          <span className="mt-1.5 size-1 rounded-full bg-apricot shrink-0" />
          <span className="leading-[1.45]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TourMeta({ duration, group, price, compact = false }: { duration: string; group: string; price: string; compact?: boolean }) {
  return (
    <div className={`flex items-center gap-5 ${compact ? "mt-2" : "mt-4 border-t border-adriatic/10 pt-4"}`}>
      <div className="flex items-center gap-1.5 text-adriatic/70">
        <Clock className="size-3.5" />
        <span className="text-sm font-medium tabular-nums">{duration}</span>
      </div>
      <div className="flex items-center gap-1.5 text-adriatic/70">
        <Users className="size-3.5" />
        <span className="text-sm font-medium tabular-nums">{group}</span>
      </div>
      <div className="ml-auto text-right">
        <span className="text-sm md:text-base font-semibold text-olive tabular-nums">{price}</span>
      </div>
    </div>
  );
}
