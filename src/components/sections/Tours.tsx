import type { CSSProperties } from "react";
import { WhatsAppLink } from "@/components/actions/WhatsAppLink";
import { ArrowUpRight } from "@/components/icons/HandDrawn";
import { TourFactCards } from "@/components/tours/TourFactCards";
import { createTourFacts } from "@/components/tours/tourFacts";
import { tourDefinitions, type TourDefinition } from "@/data/tourPages";
import { useI18n } from "@/i18n/I18nContext";
import { pageContent } from "@/i18n/pageContent";
import { getLocalizedHref } from "@/i18n/routes";
import type { TranslationKeys } from "@/i18n/translations";
import { getWhatsAppIntentForTourDefinition } from "@/lib/whatsappIntent";

function getBookingLabel(definition: TourDefinition, t: TranslationKeys): string {
  if (definition.pageId === "classicTour") {
    return t.cta.bookClassicTour;
  }

  if (
    definition.pageId === "valdanosTour" ||
    definition.pageId === "oldTownTour" ||
    definition.pageId === "customTour"
  ) {
    return t.cta.bookThisTour;
  }

  if (definition.pageId === "sunsetTour") {
    return t.cta.bookSunsetTour;
  }

  return t.cta.askAboutMoonlight;
}

export function Tours() {
  const { lang, t } = useI18n();
  const copy = pageContent[lang];

  return (
    <section id="tours" className="container py-20 md:py-28">
      <div className="mb-12 flex max-w-2xl flex-col gap-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-olive">
          {t.toursSection.eyebrow}
        </span>
        <h2 className="font-display text-4xl font-medium tracking-tight text-adriatic text-balance md:text-5xl lg:text-6xl">
          {t.toursSection.title}
        </h2>
        <p className="text-[15px] leading-relaxed text-adriatic/70 md:text-lg">
          {t.toursSection.sub}
        </p>
      </div>

      <div className="home-tours-grid tours-grid grid grid-cols-1 gap-5">
        {tourDefinitions.map((definition) => {
          const tour = t.tours[definition.tourKey];
          const href = getLocalizedHref(definition.pageId, lang);
          const isMoonlight = definition.pageId === "moonlightTour";
          const isSunset = definition.pageId === "sunsetTour";
          const intent = getWhatsAppIntentForTourDefinition(definition, t);
          const facts = createTourFacts({
            tour,
            labels: copy.common,
            pageId: definition.pageId,
            status: definition.status,
          });
          const articleClassName = [
            "home-tour-card",
            `home-tour-card--${definition.pageId.replace("Tour", "")}`,
            "tour-card",
            definition.cardClassName,
            "group",
            isMoonlight
              ? "moonlight-tour-card relative rounded-[2rem] border border-stone/15 p-2.5 shadow-card transition-transform duration-500 hover:-translate-y-1"
              : "photo-frame flex flex-col transition-transform duration-500 hover:-translate-y-1",
          ]
            .filter(Boolean)
            .join(" ");

          if (isMoonlight) {
            return (
              <article
                key={definition.pageId}
                className={articleClassName}
                style={{ "--moonlight-image": `url(${definition.image})` } as CSSProperties}
              >
                <div className="relative z-10 flex h-full flex-col rounded-[1.5rem] p-4 outline outline-1 -outline-offset-1 outline-stone/20 md:p-5">
                  <div className="mb-3 flex size-9 items-center justify-center rounded-full border border-apricot/35 bg-adriatic/55 shadow-soft backdrop-blur">
                    <div className="size-3 rounded-full border-2 border-apricot bg-apricot/25" />
                  </div>
                  <span className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-apricot">
                    {tour.tagline}
                  </span>
                  <h3 className="mb-2 font-display text-[23px] font-medium leading-tight text-stone">
                    {tour.name}
                  </h3>
                  <p className="mb-4 max-w-[30ch] text-sm leading-relaxed text-stone/85">
                    {tour.desc}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-block rounded-full border border-apricot/35 bg-adriatic/55 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-stone backdrop-blur">
                      {tour.tagline}
                    </span>
                    <div className="tour-card__actions tour-card__actions--light">
                      <WhatsAppLink
                        locale={lang}
                        messageKey={intent.messageKey}
                        variables={intent.variables}
                        ariaLabel={getBookingLabel(definition, t)}
                        className="tour-card__action tour-card__action--primary tour-card__action--light-primary"
                      >
                        {getBookingLabel(definition, t)}
                      </WhatsAppLink>
                      <a
                        href={href}
                        className="tour-card__action tour-card__action--secondary tour-card__action--light-secondary"
                      >
                        {t.cta.viewDetails}
                        <ArrowUpRight className="size-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          }

          return (
            <article key={definition.pageId} className={articleClassName}>
              <div
                className={[
                  "tour-card__media",
                  "photo-frame-inner",
                  "relative",
                  isSunset ? "aspect-[4/3] w-full mb-4" : "aspect-[4/3] w-full mb-5",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <img
                  src={definition.image}
                  alt={tour.imageAlt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className={[
                    "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
                    isSunset ? "object-center" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                />
                {definition.pageId === "classicTour" ? (
                  <>
                    <div className="absolute left-4 top-4 rounded-full bg-stone/90 px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-adriatic backdrop-blur">
                      {tour.tagline}
                    </div>
                    <div className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-stone/90 text-adriatic backdrop-blur transition-colors group-hover:bg-apricot">
                      <ArrowUpRight className="size-4" />
                    </div>
                  </>
                ) : null}
              </div>

              <div
                className={[
                  "tour-card__content flex flex-1 flex-col",
                  isSunset ? "gap-2 px-4 pb-4" : "gap-3 px-5 pb-5",
                ].join(" ")}
              >
                {isSunset ? (
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sea">
                    {tour.tagline}
                  </span>
                ) : null}
                <h3
                  className={[
                    "font-display font-medium text-adriatic",
                    isSunset ? "text-xl" : "text-3xl text-balance md:text-4xl",
                  ].join(" ")}
                >
                  {tour.name}
                </h3>
                <p
                  className={[
                    "leading-relaxed text-adriatic/75",
                    isSunset ? "text-sm" : "max-w-[52ch] text-[15px] md:text-base",
                  ].join(" ")}
                >
                  {tour.desc}
                </p>
                <IncludedList items={tour.included} compact={isSunset} />
                {tour.note ? (
                  <p className="text-sm italic leading-relaxed text-adriatic/65">
                    {tour.note}
                  </p>
                ) : null}
                <TourFactCards
                  facts={facts}
                  className={isSunset ? "tour-facts--compact" : undefined}
                />
                <div className="tour-card__actions">
                  <WhatsAppLink
                    locale={lang}
                    messageKey={intent.messageKey}
                    variables={intent.variables}
                    ariaLabel={getBookingLabel(definition, t)}
                    className="tour-card__action tour-card__action--primary"
                  >
                    {t.cta.bookOnWhatsApp}
                  </WhatsAppLink>
                  <a href={href} className="tour-card__action tour-card__action--secondary">
                    {t.cta.viewDetails}
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function IncludedList({
  items,
  compact = false,
}: {
  items: string[];
  compact?: boolean;
}) {
  if (items.length === 0) return null;
  return (
    <ul className={`mt-1 grid gap-1 ${compact ? "grid-cols-1" : "grid-cols-1 gap-x-4 sm:grid-cols-2"}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-1.5 text-sm text-adriatic/75">
          <span className="mt-1.5 size-1 shrink-0 rounded-full bg-apricot" />
          <span className="leading-[1.45]">{item}</span>
        </li>
      ))}
    </ul>
  );
}
