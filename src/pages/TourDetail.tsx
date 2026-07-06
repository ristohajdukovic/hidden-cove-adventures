import { Header } from "@/components/Header";
import { MobileBookingBar } from "@/components/MobileBookingBar";
import { Footer } from "@/components/sections/Footer";
import { WaveDivider } from "@/components/sections/WaveDivider";
import { LocalizedHead } from "@/components/seo/LocalizedHead";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { I18nProvider } from "@/i18n/I18nProvider";
import { useI18n } from "@/i18n/I18nContext";
import { pageContent } from "@/i18n/pageContent";
import { getLocalizedHref, tourPageIds, type TourPageId } from "@/i18n/routes";
import type { Lang } from "@/i18n/locales";
import { tourDefinitionsByPageId } from "@/data/tourPages";
import { WhatsAppLink } from "@/components/actions/WhatsAppLink";
import { getWhatsAppIntentForPage } from "@/lib/whatsappIntent";
import { TourFactCards } from "@/components/tours/TourFactCards";
import { createTourFacts } from "@/components/tours/tourFacts";
import { ArrowRight, Clock, Users } from "@/components/icons/HandDrawn";

type TourDetailProps = {
  initialLocale?: Lang;
  pageId: TourPageId;
};

function TourDetailContent({ pageId }: { pageId: TourPageId }) {
  const { lang, t } = useI18n();
  const copy = pageContent[lang];
  const definition = tourDefinitionsByPageId[pageId];
  const tour = t.tours[definition.tourKey];
  const detail = copy.tourDetails[pageId];
  const isComingSoon = definition.status === "coming-soon";
  const facts = createTourFacts({
    tour,
    labels: copy.common,
    pageId,
    status: definition.status,
  });
  const whatsappIntent = getWhatsAppIntentForPage(pageId, t);

  return (
    <main>
      <section className="tour-detail-hero container">
        <nav className="page-breadcrumbs" aria-label="Breadcrumb">
          <a href={getLocalizedHref("home", lang)}>{copy.breadcrumbs.home}</a>
          <span aria-hidden="true">/</span>
          <a href={getLocalizedHref("tours", lang)}>{copy.breadcrumbs.tours}</a>
          <span aria-hidden="true">/</span>
          <span>{tour.name}</span>
        </nav>

        <div className="tour-detail-hero__grid">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-olive">
              {isComingSoon ? detail.statusLabel ?? copy.common.comingSoon : detail.eyebrow}
            </span>
            <h1 className="mt-4 font-display text-5xl font-medium leading-[0.98] tracking-tight text-adriatic text-balance md:text-7xl">
              {tour.name}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-adriatic/72 md:text-lg">
              {detail.intro}
            </p>

            <div className="tour-detail-actions">
              <WhatsAppLink
                locale={lang}
                messageKey={whatsappIntent.messageKey}
                variables={whatsappIntent.variables}
                ariaLabel={detail.bookingLabel}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-adriatic px-7 py-4 text-sm font-semibold text-stone transition-colors hover:bg-olive"
              >
                {detail.bookingLabel}
                <ArrowRight className="size-4" />
              </WhatsAppLink>
              <a
                href={getLocalizedHref("tours", lang)}
                className="inline-flex min-h-[52px] items-center rounded-full border border-adriatic/15 bg-stone/80 px-7 py-4 text-sm font-semibold text-adriatic transition-colors hover:border-adriatic/35 hover:bg-stone"
              >
                {copy.common.backToTours}
              </a>
            </div>
          </div>

          <div className="photo-frame">
            <div className="photo-frame-inner aspect-[4/5] w-full">
              <img
                src={definition.image}
                alt={tour.imageAlt}
                width={1024}
                height={1280}
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-20 md:pb-28">
        <div className="tour-detail-panel">
          <div>
            <h2>{detail.highlightsTitle}</h2>
            <ul>
              {detail.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2>{detail.practicalTitle}</h2>
            <TourFactCards facts={facts} className="tour-facts--detail" />

            <h3>{copy.common.included}</h3>
            <ul className="tour-detail-included">
              {tour.included.map((item) => (
                <li key={item}>
                  <Clock className="size-4" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {tour.note ? <p className="tour-detail-note">{tour.note}</p> : null}
          </div>
        </div>
      </section>

      <section className="container pb-20 md:pb-28">
        <div className="tour-detail-cta">
          <div>
            <h2>{detail.ctaTitle}</h2>
            <p>{detail.ctaBody}</p>
          </div>
          <WhatsAppLink
            locale={lang}
            messageKey={whatsappIntent.messageKey}
            variables={whatsappIntent.variables}
            ariaLabel={detail.bookingLabel}
          >
            {detail.bookingLabel}
            <Users className="size-4" />
          </WhatsAppLink>
        </div>
      </section>

      <section className="container pb-20 md:pb-28">
        <h2 className="mb-6 font-display text-3xl font-medium text-adriatic">
          {copy.common.relatedTours}
        </h2>
        <div className="tour-detail-related">
          {tourPageIds
            .filter((relatedPageId) => relatedPageId !== pageId)
            .map((relatedPageId) => {
              const relatedDefinition = tourDefinitionsByPageId[relatedPageId];
              const relatedTour = t.tours[relatedDefinition.tourKey];

              return (
                <a key={relatedPageId} href={getLocalizedHref(relatedPageId, lang)}>
                  <span>
                    {relatedDefinition.status === "coming-soon"
                      ? copy.common.comingSoon
                      : relatedTour.tagline}
                  </span>
                  <strong>{relatedTour.name}</strong>
                </a>
              );
            })}
        </div>
      </section>
    </main>
  );
}

export default function TourDetail({
  initialLocale = "en",
  pageId,
}: TourDetailProps) {
  return (
    <I18nProvider locale={initialLocale} pageId={pageId}>
      <div id="top" className="min-h-screen bg-sand text-adriatic">
        <LocalizedHead />
        <PageStructuredData pageId={pageId} />
        <Header />
        <TourDetailContent pageId={pageId} />
        <WaveDivider
          backgroundColor="hsl(var(--sand))"
          backColor="hsl(var(--sea))"
          frontColor="hsl(var(--adriatic))"
        />
        <Footer />
        <MobileBookingBar />
      </div>
    </I18nProvider>
  );
}
