import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { WhatsAppLink } from "@/components/actions/WhatsAppLink";
import { useI18n } from "@/i18n/I18nContext";
import type { TranslationKeys } from "@/i18n/translations";

const AquarelleRouteMap = lazy(() =>
  import("@/components/route/AquarelleRouteMap").then((module) => ({
    default: module.AquarelleRouteMap,
  })),
);

function RouteMapSkeleton({ routeCopy }: { routeCopy: TranslationKeys["route"] }) {
  return (
    <div
      className="aquarelle-route-map route-map-skeleton"
      role="region"
      aria-label={routeCopy.controls.mapLabel}
    >
      <div className="route-map-skeleton__wash" />
    </div>
  );
}

function DeferredRouteMap({ routeCopy }: { routeCopy: TranslationKeys["route"] }) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper || shouldLoadMap) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      setShouldLoadMap(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "420px 0px" },
    );

    observer.observe(wrapper);

    return () => {
      observer.disconnect();
    };
  }, [shouldLoadMap]);

  return (
    <div ref={wrapperRef}>
      {shouldLoadMap ? (
        <Suspense fallback={<RouteMapSkeleton routeCopy={routeCopy} />}>
          <AquarelleRouteMap />
        </Suspense>
      ) : (
        <RouteMapSkeleton routeCopy={routeCopy} />
      )}
    </div>
  );
}

function RouteLocationSummary({
  routeCopy,
}: {
  routeCopy: TranslationKeys["route"];
}) {
  return (
    <ol className="route-location-summary" aria-label={routeCopy.controls.routeLocations}>
      {routeCopy.stops.map((stop) => (
        <li key={stop.id}>
          <b>{stop.number}</b>
          <span>
            <strong>{stop.title}</strong>
            <small>{stop.subtitle}</small>
          </span>
        </li>
      ))}
    </ol>
  );
}

export function Route() {
  const { lang, t } = useI18n();

  return (
    <section id="route" className="container py-20 md:py-28">
      <div className="mb-14 flex max-w-3xl flex-col gap-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-olive">
          {t.route.eyebrow}
        </span>
        <h2 className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-adriatic text-balance md:text-5xl">
          {t.route.title}
        </h2>
        <p className="text-[15px] leading-relaxed text-adriatic/75 md:text-lg">
          {t.route.sub}
        </p>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-olive/85">
          {t.route.instruction}
        </p>
      </div>

      <DeferredRouteMap routeCopy={t.route} />
      <RouteLocationSummary routeCopy={t.route} />
      <div className="section-cta section-cta--route">
        <WhatsAppLink
          locale={lang}
          messageKey="generalBooking"
          ariaLabel={t.cta.checkAvailabilityOnWhatsApp}
          className="section-cta__primary"
        >
          {t.cta.checkAvailabilityOnWhatsApp}
        </WhatsAppLink>
      </div>
    </section>
  );
}
