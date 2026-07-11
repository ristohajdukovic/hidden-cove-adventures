import { WhatsAppLink } from "@/components/actions/WhatsAppLink";
import { Anchor } from "@/components/icons/HandDrawn";
import { Clock3, Euro, Users } from "lucide-react";
import { partnerTripDefinitions } from "@/data/partnerTours";
import { useI18n } from "@/i18n/I18nContext";

export function PartnerTours() {
  const { lang, t } = useI18n();
  const section = t.partnerSection;

  return (
    <section id="valdanos-boat-trip" className="container py-16 md:py-20">
      <div className="mb-10 flex max-w-2xl flex-col gap-3">
        <span className="partner-badge">
          <Anchor className="size-3.5" />
          {section.badge}
        </span>
        <h2 className="font-display text-3xl font-medium tracking-tight text-adriatic text-balance md:text-4xl">
          {section.title}
        </h2>
        <p className="text-[15px] leading-relaxed text-adriatic/70 md:text-base">
          {section.sub}
        </p>
      </div>

      <div className="partner-tours-grid grid grid-cols-1 gap-5">
        {partnerTripDefinitions.map((definition) => {
          const trip = t.partnerTours[definition.tripKey];

          return (
            <article key={definition.tripKey} className="partner-tour-card group">
              <div className="partner-tour-card__media">
                <img
                  src={definition.image}
                  alt={trip.imageAlt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="partner-tour-card__content">
                <h3 className="font-display text-2xl font-medium text-adriatic text-balance">
                  {trip.name}
                </h3>
                <p className="text-sm leading-relaxed text-adriatic/75">
                  {trip.desc}
                </p>

                <div className="tour-facts tour-facts--compact">
                  <div className="tour-fact-card">
                    <span className="tour-fact-card__icon">
                      <Clock3 aria-hidden="true" />
                    </span>
                    <span className="tour-fact-card__copy">
                      <strong className="tour-fact-card__value">{trip.duration}</strong>
                    </span>
                  </div>
                  <div className="tour-fact-card">
                    <span className="tour-fact-card__icon">
                      <Users aria-hidden="true" />
                    </span>
                    <span className="tour-fact-card__copy">
                      <strong className="tour-fact-card__value">{trip.group}</strong>
                    </span>
                  </div>
                  <div className="tour-fact-card tour-fact-card--price">
                    <span className="tour-fact-card__icon">
                      <Euro aria-hidden="true" />
                    </span>
                    <span className="tour-fact-card__copy">
                      <strong className="tour-fact-card__value">{trip.price}</strong>
                    </span>
                  </div>
                </div>

                <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                  {trip.included.map((item) => (
                    <li key={item} className="flex items-center gap-1.5 text-sm text-adriatic/75">
                      <span className="size-1 shrink-0 rounded-full bg-sea" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="tour-card__actions">
                  <WhatsAppLink
                    locale={lang}
                    messageKey={definition.whatsappMessageKey}
                    variables={{ price: trip.price }}
                    ariaLabel={`${trip.name} — ${t.cta.bookOnWhatsApp}`}
                    className="tour-card__action tour-card__action--primary partner-tour-card__action"
                  >
                    {t.cta.bookOnWhatsApp}
                  </WhatsAppLink>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
