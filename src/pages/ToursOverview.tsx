import { Header } from "@/components/Header";
import { MobileBookingBar } from "@/components/MobileBookingBar";
import { Footer } from "@/components/sections/Footer";
import { WaveDivider } from "@/components/sections/WaveDivider";
import { LocalizedHead } from "@/components/seo/LocalizedHead";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { I18nProvider } from "@/i18n/I18nProvider";
import { useI18n } from "@/i18n/I18nContext";
import { pageContent } from "@/i18n/pageContent";
import { getLocalizedHref } from "@/i18n/routes";
import type { Lang } from "@/i18n/locales";
import { tourDefinitions } from "@/data/tourPages";
import { ArrowUpRight } from "@/components/icons/HandDrawn";
import { TourFactCards } from "@/components/tours/TourFactCards";
import { createTourFacts } from "@/components/tours/tourFacts";

type ToursOverviewProps = {
  initialLocale?: Lang;
};

function ToursOverviewContent() {
  const { lang, t } = useI18n();
  const copy = pageContent[lang];

  return (
    <main>
      <section className="tour-page-hero container">
        <nav className="page-breadcrumbs" aria-label="Breadcrumb">
          <a href={getLocalizedHref("home", lang)}>{copy.breadcrumbs.home}</a>
          <span aria-hidden="true">/</span>
          <span>{copy.breadcrumbs.tours}</span>
        </nav>

        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-olive">
          {copy.toursOverview.eyebrow}
        </span>
        <h1 className="max-w-4xl font-display text-5xl font-medium leading-[0.98] tracking-tight text-adriatic text-balance md:text-7xl">
          {copy.toursOverview.title}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-adriatic/72 md:text-lg">
          {copy.toursOverview.sub}
        </p>
      </section>

      <section className="container pb-20 md:pb-28">
        <div className="mb-10 max-w-3xl">
          <h2 className="font-display text-3xl font-medium text-adriatic md:text-4xl">
            {copy.toursOverview.introTitle}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-adriatic/72 md:text-lg">
            {copy.toursOverview.intro}
          </p>
        </div>

        <div className="tours-overview-grid">
          {tourDefinitions.map((definition) => {
            const tour = t.tours[definition.tourKey];
            const href = getLocalizedHref(definition.pageId, lang);
            const isComingSoon = definition.status === "coming-soon";
            const facts = createTourFacts({
              tour,
              labels: copy.common,
              pageId: definition.pageId,
              status: definition.status,
            });

            return (
              <a
                key={definition.pageId}
                href={href}
                className={[
                  "tour-overview-card",
                  definition.cardClassName,
                  isComingSoon ? "tour-overview-card--coming-soon" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="tour-overview-card__media">
                  <img
                    src={definition.image}
                    alt={tour.imageAlt}
                    width={1024}
                    height={768}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="tour-overview-card__content">
                  <span>{isComingSoon ? copy.common.comingSoon : tour.tagline}</span>
                  <h3>{tour.name}</h3>
                  <p>{tour.desc}</p>
                  <TourFactCards facts={facts} className="tour-facts--overview" />
                  <div className="tour-overview-card__actions">
                    <strong className="tour-overview-card__link">
                      {copy.common.viewDetails}
                      <ArrowUpRight className="size-4" />
                    </strong>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <section className="experience-teaser-section" aria-labelledby="experience-teasers-title">
          <h2 id="experience-teasers-title">{copy.experienceTeasers.title}</h2>
          <div className="experience-teasers">
            {copy.experienceTeasers.items.map((item) => (
              <article key={item.title} className="experience-teaser-card">
                <span>{item.badge}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default function ToursOverview({
  initialLocale = "en",
}: ToursOverviewProps) {
  return (
    <I18nProvider locale={initialLocale} pageId="tours">
      <div id="top" className="min-h-screen bg-sand text-adriatic">
        <LocalizedHead />
        <PageStructuredData pageId="tours" />
        <Header />
        <ToursOverviewContent />
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
