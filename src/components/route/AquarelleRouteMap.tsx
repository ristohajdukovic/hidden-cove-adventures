import * as React from "react";
import {
  config,
  getWebGLSupportError,
  Language,
  LngLatBounds,
  Map,
  MapMouseEvent,
  MapStyle,
  MaptilerAnimation,
  Marker,
  NavigationControl,
} from "@maptiler/sdk";
import type { AnimationEvent, Keyframe, LanguageInfo } from "@maptiler/sdk";
import type { Feature, FeatureCollection, LineString, Point } from "geojson";

import {
  animatedSeaRouteCoordinates,
  routeStops,
  seaRouteCoordinates,
  type LngLat,
  type RouteStop,
} from "@/data/boatRoute";
import { hasMapTilerApiKey, mapTilerApiKey } from "@/config/mapTiler";
import { useI18n } from "@/i18n/I18nContext";
import type { Lang } from "@/i18n/locales";
import type { TranslationKeys } from "@/i18n/translations";

type AquarelleRouteMapProps = {
  className?: string;
};

type RouteStopCopy = TranslationKeys["route"]["stops"][number];

type RouteSegment = {
  start: LngLat;
  end: LngLat;
  startDistance: number;
  length: number;
  bearing: number;
};

type RouteMetrics = {
  segments: RouteSegment[];
  totalDistance: number;
};

const ROUTE_SOURCE_ID = "boat-route";
const ROUTE_SHADOW_LAYER_ID = "boat-route-shadow";
const ROUTE_LINE_LAYER_ID = "boat-route-line";
const DRAFT_ROUTE_SOURCE_ID = "draft-sea-route";
const DRAFT_ROUTE_LINE_LAYER_ID = "draft-sea-route-line";
const DRAFT_ROUTE_POINTS_SOURCE_ID = "draft-sea-route-points";
const DRAFT_ROUTE_POINTS_LAYER_ID = "draft-sea-route-points";
const FORWARD_JOURNEY_MS = 55_000;
const STOP_TWO_PAUSE_MS = 2_500;
const STOP_THREE_PAUSE_MS = 4_000;
const STOP_ONE_PAUSE_MS = 3_000;
const ANIMATION_DURATION_MS =
  FORWARD_JOURNEY_MS * 2 +
  STOP_TWO_PAUSE_MS * 2 +
  STOP_THREE_PAUSE_MS +
  STOP_ONE_PAUSE_MS;
const ENABLE_ROUTE_EDITOR = false;

const mapLanguageByLocale: Record<Lang, LanguageInfo> = {
  en: Language.ENGLISH,
  de: Language.GERMAN,
  sq: Language.ALBANIAN,
  me: Language.SERBIAN_LATIN,
};

const mapControlLocaleByLocale: Record<Lang, Record<string, string>> = {
  en: {
    "NavigationControl.ZoomIn": "Zoom in",
    "NavigationControl.ZoomOut": "Zoom out",
    "NavigationControl.ResetBearing": "Reset bearing",
  },
  de: {
    "NavigationControl.ZoomIn": "Vergrößern",
    "NavigationControl.ZoomOut": "Verkleinern",
    "NavigationControl.ResetBearing": "Ausrichtung zurücksetzen",
  },
  sq: {
    "NavigationControl.ZoomIn": "Zmadho",
    "NavigationControl.ZoomOut": "Zvogëlo",
    "NavigationControl.ResetBearing": "Rivendos drejtimin",
  },
  me: {
    "NavigationControl.ZoomIn": "Uvećaj",
    "NavigationControl.ZoomOut": "Umanji",
    "NavigationControl.ResetBearing": "Resetuj pravac",
  },
};

function toLngLat(coordinates: LngLat): [number, number] {
  return [coordinates[0], coordinates[1]];
}

function createBounds(coordinates: readonly LngLat[]): LngLatBounds {
  const bounds = new LngLatBounds();

  coordinates.forEach((coordinate) => {
    bounds.extend(toLngLat(coordinate));
  });

  return bounds;
}

function getFitOptions(duration = 0) {
  const isMobile = window.innerWidth < 640;

  return {
    padding: isMobile
      ? { top: 56, right: 44, bottom: 70, left: 44 }
      : { top: 84, right: 100, bottom: 100, left: 100 },
    maxZoom: isMobile ? 12.8 : 13.3,
    duration,
  };
}

function getCameraInfluence(): number {
  if (window.innerWidth < 640) {
    return 0;
  }

  if (window.innerWidth < 1024) {
    return 0.06;
  }

  return 0.1;
}

function interpolateCameraCenter(
  baseCenter: LngLat,
  boatPosition: LngLat,
  influence: number,
): [number, number] {
  return [
    baseCenter[0] + (boatPosition[0] - baseCenter[0]) * influence,
    baseCenter[1] + (boatPosition[1] - baseCenter[1]) * influence,
  ];
}

function isValidCoordinate(coordinates: LngLat): boolean {
  const [longitude, latitude] = coordinates;

  return (
    Number.isFinite(longitude) &&
    Number.isFinite(latitude) &&
    longitude >= -180 &&
    longitude <= 180 &&
    latitude >= -90 &&
    latitude <= 90
  );
}

function sanitizeMapTilerDiagnostic(message: string): string {
  return message.replace(
    /([?&](?:key|apiKey|api_key)=)[^&\s]+/gi,
    "$1[redacted]",
  );
}

function getMapTilerDiagnostic(value: unknown): string {
  if (value instanceof Error) {
    return `${value.name}: ${sanitizeMapTilerDiagnostic(value.message)}`;
  }

  if (typeof value === "object" && value !== null && "error" in value) {
    return getMapTilerDiagnostic(
      (value as { error?: unknown }).error,
    );
  }

  if (typeof value === "object" && value !== null && "message" in value) {
    const message = (value as { message?: unknown }).message;

    if (typeof message === "string") {
      return sanitizeMapTilerDiagnostic(message);
    }
  }

  return typeof value;
}

function logMapTilerDevelopmentDiagnostic(
  context: string,
  detail: unknown,
): void {
  if (!import.meta.env.DEV) {
    return;
  }

  console.warn(
    `MapTiler ${context}: ${getMapTilerDiagnostic(detail)}`,
  );
}

function coordinatesEqual(first: LngLat, second: LngLat): boolean {
  return first[0] === second[0] && first[1] === second[1];
}

function roundCoordinate(coordinates: LngLat): LngLat {
  return [
    Number(coordinates[0].toFixed(6)),
    Number(coordinates[1].toFixed(6)),
  ];
}

function degreesToRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

function radiansToDegrees(radians: number): number {
  return (radians * 180) / Math.PI;
}

function getDistanceMeters(start: LngLat, end: LngLat): number {
  const radius = 6_371_000;
  const deltaLatitude = degreesToRadians(end[1] - start[1]);
  const deltaLongitude = degreesToRadians(end[0] - start[0]);
  const startLatitude = degreesToRadians(start[1]);
  const endLatitude = degreesToRadians(end[1]);
  const a =
    Math.sin(deltaLatitude / 2) ** 2 +
    Math.cos(startLatitude) *
      Math.cos(endLatitude) *
      Math.sin(deltaLongitude / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return radius * c;
}

function getBearingDegrees(start: LngLat, end: LngLat): number {
  const startLatitude = degreesToRadians(start[1]);
  const endLatitude = degreesToRadians(end[1]);
  const deltaLongitude = degreesToRadians(end[0] - start[0]);
  const y = Math.sin(deltaLongitude) * Math.cos(endLatitude);
  const x =
    Math.cos(startLatitude) * Math.sin(endLatitude) -
    Math.sin(startLatitude) *
      Math.cos(endLatitude) *
      Math.cos(deltaLongitude);

  return (radiansToDegrees(Math.atan2(y, x)) + 360) % 360;
}

function createRouteMetrics(coordinates: readonly LngLat[]): RouteMetrics {
  const segments: RouteSegment[] = [];
  let totalDistance = 0;

  for (let index = 0; index < coordinates.length - 1; index += 1) {
    const start = coordinates[index];
    const end = coordinates[index + 1];

    if (!start || !end) {
      continue;
    }

    const length = getDistanceMeters(start, end);

    segments.push({
      start,
      end,
      startDistance: totalDistance,
      length,
      bearing: getBearingDegrees(start, end),
    });

    totalDistance += length;
  }

  return { segments, totalDistance };
}

const forwardRouteMetrics = createRouteMetrics(seaRouteCoordinates);
const animatedRouteMetrics = createRouteMetrics(animatedSeaRouteCoordinates);

function getCoordinatesAtDistance(metrics: RouteMetrics, distance: number): LngLat {
  const clampedDistance = Math.min(
    Math.max(distance, 0),
    metrics.totalDistance,
  );
  const fallbackSegment = metrics.segments[metrics.segments.length - 1];

  for (const segment of metrics.segments) {
    const segmentEndDistance = segment.startDistance + segment.length;

    if (clampedDistance <= segmentEndDistance || segment === fallbackSegment) {
      const progress =
        segment.length === 0
          ? 0
          : (clampedDistance - segment.startDistance) / segment.length;

      return [
        segment.start[0] + (segment.end[0] - segment.start[0]) * progress,
        segment.start[1] + (segment.end[1] - segment.start[1]) * progress,
      ];
    }
  }

  return animatedSeaRouteCoordinates[0];
}

function getDistanceAtCoordinate(
  metrics: RouteMetrics,
  coordinates: LngLat,
): number {
  for (const segment of metrics.segments) {
    if (coordinatesEqual(segment.start, coordinates)) {
      return segment.startDistance;
    }

    if (coordinatesEqual(segment.end, coordinates)) {
      return segment.startDistance + segment.length;
    }
  }

  return metrics.totalDistance;
}

function getBearingAtDistance(metrics: RouteMetrics, distance: number): number {
  const sampleDistance = Math.min(45, Math.max(metrics.totalDistance / 120, 12));
  const current = getCoordinatesAtDistance(metrics, distance);
  const aheadDistance = Math.min(distance + sampleDistance, metrics.totalDistance);

  if (aheadDistance > distance) {
    return getBearingDegrees(
      current,
      getCoordinatesAtDistance(metrics, aheadDistance),
    );
  }

  const behindDistance = Math.max(distance - sampleDistance, 0);

  return getBearingDegrees(
    getCoordinatesAtDistance(metrics, behindDistance),
    current,
  );
}

function getSmoothedBearing(previousBearing: number, nextBearing: number): number {
  let adjustedBearing = nextBearing;

  while (adjustedBearing - previousBearing > 180) {
    adjustedBearing -= 360;
  }

  while (adjustedBearing - previousBearing < -180) {
    adjustedBearing += 360;
  }

  return adjustedBearing;
}

function getPositionAtDistance(
  metrics: RouteMetrics,
  distance: number,
): { coordinates: LngLat; bearing: number } {
  return {
    coordinates: getCoordinatesAtDistance(metrics, distance),
    bearing: getBearingAtDistance(metrics, distance),
  };
}

function buildAnimationKeyframes(): Keyframe[] {
  const stopTwoDistance = getDistanceAtCoordinate(
    forwardRouteMetrics,
    routeStops[1].coordinates,
  );
  const finalStopDistance = forwardRouteMetrics.totalDistance;

  if (stopTwoDistance <= 0 || forwardRouteMetrics.totalDistance <= 0) {
    return [
      {
        delta: 0,
        props: { routeDistance: 0 },
        easing: "Linear",
      },
      {
        delta: 1,
        props: { routeDistance: 0 },
        easing: "Linear",
      },
    ];
  }

  const firstSegmentDuration =
    (stopTwoDistance / forwardRouteMetrics.totalDistance) * FORWARD_JOURNEY_MS;
  const secondSegmentDuration =
    ((forwardRouteMetrics.totalDistance - stopTwoDistance) /
      forwardRouteMetrics.totalDistance) *
    FORWARD_JOURNEY_MS;
  const returnSecondStopDistance =
    finalStopDistance + (finalStopDistance - stopTwoDistance);
  const returnStartDistance = animatedRouteMetrics.totalDistance;
  const timeline = [
    { time: 0, distance: 0 },
    { time: firstSegmentDuration, distance: stopTwoDistance },
    {
      time: firstSegmentDuration + STOP_TWO_PAUSE_MS,
      distance: stopTwoDistance,
    },
    {
      time: firstSegmentDuration + STOP_TWO_PAUSE_MS + secondSegmentDuration,
      distance: finalStopDistance,
    },
    {
      time:
        firstSegmentDuration +
        STOP_TWO_PAUSE_MS +
        secondSegmentDuration +
        STOP_THREE_PAUSE_MS,
      distance: finalStopDistance,
    },
    {
      time:
        firstSegmentDuration +
        STOP_TWO_PAUSE_MS +
        secondSegmentDuration +
        STOP_THREE_PAUSE_MS +
        secondSegmentDuration,
      distance: returnSecondStopDistance,
    },
    {
      time:
        firstSegmentDuration +
        STOP_TWO_PAUSE_MS +
        secondSegmentDuration +
        STOP_THREE_PAUSE_MS +
        secondSegmentDuration +
        STOP_TWO_PAUSE_MS,
      distance: returnSecondStopDistance,
    },
    {
      time:
        firstSegmentDuration +
        STOP_TWO_PAUSE_MS +
        secondSegmentDuration +
        STOP_THREE_PAUSE_MS +
        secondSegmentDuration +
        STOP_TWO_PAUSE_MS +
        firstSegmentDuration,
      distance: returnStartDistance,
    },
    {
      time: ANIMATION_DURATION_MS,
      distance: returnStartDistance,
    },
  ];

  return timeline.map((keyframe) => ({
    delta: keyframe.time / ANIMATION_DURATION_MS,
    props: { routeDistance: keyframe.distance },
    easing: "Linear",
  }));
}

function createBoatElement(): HTMLDivElement {
  const element = document.createElement("div");

  element.className = "animated-route-boat";
  element.setAttribute("aria-hidden", "true");
  element.innerHTML = `
    <div class="animated-route-boat__shape">
      <svg viewBox="0 0 48 48" focusable="false" aria-hidden="true">
        <path
          d="M24 5v24M24 8 10 27h14V8Zm2 4v15h13L26 12ZM7 31c4 4 8 5 12 2 4 3 8 3 12 0 4 3 8 2 11-1-2 8-8 12-18 12S9 40 7 31Z"
          fill="currentColor"
          stroke="var(--paper)"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  `;

  return element;
}

function createMarkerElement(
  stop: RouteStop,
  copy: RouteStopCopy,
  onSelect: (id: string) => void,
): HTMLButtonElement {
  const element = document.createElement("button");

  element.type = "button";
  element.className = [
    "route-map-marker",
    `route-map-marker--${stop.markerVariant}`,
  ].join(" ");
  element.setAttribute("aria-label", copy.markerAriaLabel);

  const circle = document.createElement("span");
  circle.className = "route-map-marker__circle";

  const number = document.createElement("span");
  number.className = "route-map-marker__number";
  number.textContent = String(stop.number);
  circle.append(number);

  const label = document.createElement("span");
  label.className = "route-map-marker__label";
  label.textContent = copy.shortLabel;

  element.append(circle, label);
  element.addEventListener("click", (event) => {
    event.stopPropagation();
    onSelect(stop.id);
  });

  return element;
}

function findStopCopy(
  routeCopy: TranslationKeys["route"],
  id: string,
): RouteStopCopy {
  return (
    routeCopy.stops.find((stop) => stop.id === id) ?? routeCopy.stops[0]
  );
}

function createLineFeature(coordinates: readonly LngLat[]): Feature<LineString> {
  return {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: coordinates.map(toLngLat),
    },
  };
}

function createLineFeatureCollection(
  coordinates: readonly LngLat[],
): FeatureCollection<LineString> {
  return {
    type: "FeatureCollection",
    features: coordinates.length >= 2 ? [createLineFeature(coordinates)] : [],
  };
}

function createPointFeatureCollection(
  coordinates: readonly LngLat[],
): FeatureCollection<Point> {
  return {
    type: "FeatureCollection",
    features: coordinates.map((coordinate) => ({
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: toLngLat(coordinate),
      },
    })),
  };
}

function setGeoJsonSourceData(
  map: Map,
  sourceId: string,
  data: FeatureCollection<LineString> | FeatureCollection<Point>,
): void {
  const source = map.getSource(sourceId);

  if (
    source &&
    typeof source === "object" &&
    "setData" in source &&
    typeof source.setData === "function"
  ) {
    source.setData(data);
  }
}

function updateDraftRouteSources(
  map: Map,
  coordinates: readonly LngLat[],
): void {
  setGeoJsonSourceData(
    map,
    DRAFT_ROUTE_SOURCE_ID,
    createLineFeatureCollection(coordinates),
  );
  setGeoJsonSourceData(
    map,
    DRAFT_ROUTE_POINTS_SOURCE_ID,
    createPointFeatureCollection(coordinates),
  );
}

function getDistanceForDraftSplit(coordinates: LngLat, stop: LngLat): number {
  return getDistanceMeters(coordinates, stop);
}

function findDraftSplitIndex(draft: readonly LngLat[]): number {
  const stopTwo = routeStops[1].coordinates;
  const exactStopIndex = draft.findIndex((coordinate) =>
    coordinatesEqual(coordinate, stopTwo),
  );

  if (exactStopIndex >= 0) {
    return exactStopIndex;
  }

  let closestIndex = 0;
  let closestDistance = Number.POSITIVE_INFINITY;

  draft.forEach((coordinate, index) => {
    const distance = getDistanceForDraftSplit(coordinate, stopTwo);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  return closestIndex;
}

function isStopCoordinate(coordinate: LngLat): boolean {
  return routeStops.some((stop) => coordinatesEqual(stop.coordinates, coordinate));
}

function pushUniqueCoordinate(target: LngLat[], coordinate: LngLat): void {
  const lastCoordinate = target[target.length - 1];

  if (!lastCoordinate || !coordinatesEqual(lastCoordinate, coordinate)) {
    target.push(coordinate);
  }
}

function normalizeDraftRoute(draft: readonly LngLat[]): LngLat[] {
  const start = routeStops[0].coordinates;
  const stopTwo = routeStops[1].coordinates;
  const end = routeStops[2].coordinates;
  const roundedDraft = draft.map(roundCoordinate);
  const splitIndex = findDraftSplitIndex(roundedDraft);
  const normalized: LngLat[] = [];

  pushUniqueCoordinate(normalized, start);

  roundedDraft.slice(0, splitIndex + 1).forEach((coordinate) => {
    if (!isStopCoordinate(coordinate)) {
      pushUniqueCoordinate(normalized, coordinate);
    }
  });

  pushUniqueCoordinate(normalized, stopTwo);

  roundedDraft.slice(splitIndex + 1).forEach((coordinate) => {
    if (!isStopCoordinate(coordinate)) {
      pushUniqueCoordinate(normalized, coordinate);
    }
  });

  pushUniqueCoordinate(normalized, end);

  return normalized;
}

function formatCoordinateArray(coordinates: readonly LngLat[]): string {
  const lines = coordinates.map(
    ([longitude, latitude]) => `  [${longitude}, ${latitude}],`,
  );

  return `[\n${lines.join("\n")}\n] as const;`;
}

function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  return prefersReducedMotion;
}

function RouteMapFallback({
  className = "",
  reason,
  routeCopy,
}: {
  className?: string;
  reason?: string;
  routeCopy: TranslationKeys["route"];
}) {
  return (
    <div
      className={[
        "aquarelle-route-map",
        "aquarelle-route-map--fallback",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className="route-map-fallback"
        role="region"
        aria-label={routeCopy.controls.mapLabel}
      >
        <p>{routeCopy.controls.fallbackTitle}</p>
        {import.meta.env.DEV && reason ? <small>{reason}</small> : null}
        <ol>
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
      </div>
    </div>
  );
}

function RouteLegend({ routeCopy }: { routeCopy: TranslationKeys["route"] }) {
  return (
    <div
      className="aquarelle-route-map__legend"
      aria-label={routeCopy.controls.routeLocations}
    >
      {routeCopy.stops.map((stop) => (
        <span key={stop.id}>
          <b>{stop.number}</b>
          {stop.shortLabel}
        </span>
      ))}
    </div>
  );
}

function RouteStoryCard({
  routeCopy,
  selectedStop,
  onClose,
  onSelectStop,
}: {
  routeCopy: TranslationKeys["route"];
  selectedStop: RouteStopCopy;
  onClose: () => void;
  onSelectStop: (id: string) => void;
}) {
  const currentIndex = routeCopy.stops.findIndex(
    (stop) => stop.id === selectedStop.id,
  );
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const previousStop =
    routeCopy.stops[
      (safeIndex - 1 + routeCopy.stops.length) % routeCopy.stops.length
    ];
  const nextStop =
    routeCopy.stops[(safeIndex + 1) % routeCopy.stops.length];

  return (
    <article className="route-story-card" aria-live="polite">
      <div className="route-story-card__header">
        <span>
          {routeCopy.controls.stopLabel} {selectedStop.number}{" "}
          {routeCopy.controls.stopOfLabel} {routeCopy.stops.length}
        </span>

        <button
          type="button"
          className="route-story-card__close"
          aria-label={routeCopy.controls.closeStory}
          onClick={onClose}
        >
          ×
        </button>
      </div>

      <h3>{selectedStop.title}</h3>
      <p className="route-story-card__subtitle">{selectedStop.subtitle}</p>

      {selectedStop.story.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <div className="route-story-card__actions">
        <button
          type="button"
          onClick={() => onSelectStop(previousStop.id)}
        >
          {routeCopy.controls.previousStop}
        </button>
        <button type="button" onClick={() => onSelectStop(nextStop.id)}>
          {routeCopy.controls.nextStop}
        </button>
      </div>
    </article>
  );
}

export function AquarelleRouteMap({
  className = "",
}: AquarelleRouteMapProps) {
  const { lang, t } = useI18n();
  const routeCopy = t.route;
  const mapLanguage = mapLanguageByLocale[lang];
  const mapControlLocale = mapControlLocaleByLocale[lang];
  const prefersReducedMotion = usePrefersReducedMotion();
  const mapContainerRef = React.useRef<HTMLDivElement | null>(null);
  const mapShellRef = React.useRef<HTMLDivElement | null>(null);
  const mapRef = React.useRef<Map | null>(null);
  const boundsRef = React.useRef<LngLatBounds | null>(null);
  const baseCenterRef = React.useRef<LngLat>(animatedSeaRouteCoordinates[0]);
  const animationRef = React.useRef<MaptilerAnimation | null>(null);
  const boatMarkerRef = React.useRef<Marker | null>(null);
  const boatBearingRef = React.useRef(0);
  const resizeObserverRef = React.useRef<ResizeObserver | null>(null);
  const intersectionObserverRef =
    React.useRef<IntersectionObserver | null>(null);
  const programmaticCameraTimerRef = React.useRef<number | null>(null);
  const isProgrammaticCameraRef = React.useRef(false);
  const markersRef = React.useRef<Marker[]>([]);
  const isVisibleRef = React.useRef(false);
  const isManualPausedRef = React.useRef(false);
  const isMapLoadedRef = React.useRef(false);
  const isRouteEditingRef = React.useRef(false);
  const draftRouteCoordinatesRef = React.useRef<LngLat[]>([]);
  const prefersReducedMotionRef = React.useRef(prefersReducedMotion);
  const routeCopyRef = React.useRef(routeCopy);
  const mapLanguageRef = React.useRef(mapLanguage);
  const mapControlLocaleRef = React.useRef(mapControlLocale);
  const [mapError, setMapError] = React.useState<string | null>(null);
  const [selectedStopId, setSelectedStopId] = React.useState<string | null>(
    null,
  );
  const [isRouteEditing, setIsRouteEditing] = React.useState(false);
  const [draftRouteCoordinates, setDraftRouteCoordinates] = React.useState<
    LngLat[]
  >([]);
  const [draftStatus, setDraftStatus] = React.useState<string | null>(null);

  React.useEffect(() => {
    routeCopyRef.current = routeCopy;
  }, [routeCopy]);

  React.useEffect(() => {
    mapRef.current?.setLanguage(mapLanguage);
    mapLanguageRef.current = mapLanguage;
    mapControlLocaleRef.current = mapControlLocale;
  }, [mapControlLocale, mapLanguage]);

  React.useEffect(() => {
    if (!ENABLE_ROUTE_EDITOR || !import.meta.env.DEV) {
      return;
    }

    isRouteEditingRef.current = isRouteEditing;

    if (isRouteEditing && draftRouteCoordinates.length === 0) {
      setDraftRouteCoordinates([routeStops[0].coordinates]);
    }
  }, [draftRouteCoordinates.length, isRouteEditing]);

  React.useEffect(() => {
    if (!ENABLE_ROUTE_EDITOR || !import.meta.env.DEV) {
      return;
    }

    const map = mapRef.current;
    draftRouteCoordinatesRef.current = draftRouteCoordinates;

    if (map) {
      updateDraftRouteSources(map, draftRouteCoordinates);
    }
  }, [draftRouteCoordinates]);

  const pauseJourneyManually = React.useCallback(() => {
    isManualPausedRef.current = true;
    animationRef.current?.pause();
  }, []);

  const playJourneyIfAllowed = React.useCallback(() => {
    if (
      !isMapLoadedRef.current ||
      !isVisibleRef.current ||
      isManualPausedRef.current ||
      prefersReducedMotionRef.current ||
      document.visibilityState === "hidden"
    ) {
      return;
    }

    animationRef.current?.play();
  }, []);

  const fitCompleteRoute = React.useCallback((duration = 0) => {
    const map = mapRef.current;
    const bounds = boundsRef.current;

    if (!map || !bounds) {
      return;
    }

    isProgrammaticCameraRef.current = true;
    if (programmaticCameraTimerRef.current) {
      window.clearTimeout(programmaticCameraTimerRef.current);
    }

    map.fitBounds(bounds, getFitOptions(duration));
    programmaticCameraTimerRef.current = window.setTimeout(() => {
      isProgrammaticCameraRef.current = false;
      programmaticCameraTimerRef.current = null;
    }, duration + 80);
  }, []);

  const updateBoatPosition = React.useCallback((routeDistance: number) => {
    const map = mapRef.current;
    const boatMarker = boatMarkerRef.current;

    if (!map || !boatMarker) {
      return;
    }

    const { coordinates, bearing } = getPositionAtDistance(
      animatedRouteMetrics,
      routeDistance,
    );
    const boatElement = boatMarker.getElement();
    const smoothedBearing = getSmoothedBearing(boatBearingRef.current, bearing);

    boatBearingRef.current = smoothedBearing;
    boatMarker.setLngLat(toLngLat(coordinates));
    boatElement.style.setProperty("--boat-bearing", `${smoothedBearing}deg`);

    if (!isManualPausedRef.current && !prefersReducedMotionRef.current) {
      const influence = getCameraInfluence();

      if (influence > 0) {
        isProgrammaticCameraRef.current = true;
        map.jumpTo({
          center: interpolateCameraCenter(
            baseCenterRef.current,
            coordinates,
            influence,
          ),
        });
        isProgrammaticCameraRef.current = false;
      }
    }
  }, []);

  const selectStoryStop = React.useCallback(
    (id: string) => {
      setSelectedStopId(id);
      pauseJourneyManually();
    },
    [pauseJourneyManually],
  );

  const resumeJourney = React.useCallback(() => {
    setSelectedStopId(null);
    isManualPausedRef.current = false;
    fitCompleteRoute(prefersReducedMotionRef.current ? 0 : 700);
    playJourneyIfAllowed();
  }, [fitCompleteRoute, playJourneyIfAllowed]);

  const handleCloseStory = React.useCallback(() => {
    resumeJourney();
  }, [resumeJourney]);

  const handleStartRouteEditing = React.useCallback(() => {
    if (!ENABLE_ROUTE_EDITOR || !import.meta.env.DEV) {
      return;
    }

    setDraftRouteCoordinates((currentDraft) =>
      currentDraft.length > 0 ? currentDraft : [routeStops[0].coordinates],
    );
    setDraftStatus("Route editing active.");
    setIsRouteEditing(true);
  }, []);

  const handleStopRouteEditing = React.useCallback(() => {
    setIsRouteEditing(false);
    setDraftStatus("Route editing stopped.");
  }, []);

  const handleUndoDraftPoint = React.useCallback(() => {
    setDraftRouteCoordinates((currentDraft) => {
      if (currentDraft.length <= 1) {
        return currentDraft;
      }

      return currentDraft.slice(0, -1);
    });
  }, []);

  const handleClearDraft = React.useCallback(() => {
    if (!window.confirm(routeCopyRef.current.controls.clearDraftConfirm)) {
      return;
    }

    setDraftRouteCoordinates([routeStops[0].coordinates]);
    setDraftStatus("Draft route cleared.");
  }, []);

  const handleCopyDraftRoute = React.useCallback(async () => {
    const normalizedRoute = normalizeDraftRoute(draftRouteCoordinates);
    const output = formatCoordinateArray(normalizedRoute);

    try {
      await navigator.clipboard.writeText(output);
      setDraftStatus(
        `Copied ${normalizedRoute.length} coordinates in [longitude, latitude] order.`,
      );
    } catch {
      setDraftStatus("Clipboard access was unavailable.");
    }
  }, [draftRouteCoordinates]);

  React.useEffect(() => {
    prefersReducedMotionRef.current = prefersReducedMotion;

    if (prefersReducedMotion) {
      animationRef.current?.pause();
      return;
    }

    playJourneyIfAllowed();
  }, [playJourneyIfAllowed, prefersReducedMotion]);

  React.useEffect(() => {
    if (!hasMapTilerApiKey && import.meta.env.DEV) {
      console.warn(
        "MapTiler configuration: VITE_MAPTILER_API_KEY is not configured.",
      );
    }
  }, []);

  React.useEffect(() => {
    const container = mapContainerRef.current;
    const shell = mapShellRef.current;

    if (!container || !shell || !hasMapTilerApiKey || mapRef.current || mapError) {
      return undefined;
    }

    const webGlError = getWebGLSupportError();

    if (webGlError) {
      logMapTilerDevelopmentDiagnostic("WebGL support check failed", webGlError);
      setMapError(routeCopyRef.current.controls.webGlUnavailable);
      return undefined;
    }

    const validStops = routeStops.filter((stop) =>
      isValidCoordinate(stop.coordinates),
    );

    if (validStops.length !== 3) {
      logMapTilerDevelopmentDiagnostic(
        "route configuration is invalid",
        "expected three valid route stops",
      );
      setMapError(routeCopyRef.current.controls.noValidCoordinates);
      return undefined;
    }

    const hiddenBeachStop = routeStops.find(
      (stop) => stop.id === "our-hidden-beach",
    );

    if (!hiddenBeachStop) {
      logMapTilerDevelopmentDiagnostic(
        "route configuration is invalid",
        "hidden beach stop is missing",
      );
      setMapError(routeCopyRef.current.controls.noValidCoordinates);
      return undefined;
    }

    config.apiKey = mapTilerApiKey;

    const bounds = createBounds(seaRouteCoordinates);
    const boundsCenter = bounds.getCenter();
    boundsRef.current = bounds;
    baseCenterRef.current = [boundsCenter.lng, boundsCenter.lat];

    const map = new Map({
      container,
      style: MapStyle.AQUARELLE,
      apiKey: mapTilerApiKey,
      language: mapLanguageRef.current,
      locale: mapControlLocaleRef.current,
      bounds,
      fitBoundsOptions: getFitOptions(),
      attributionControl: { compact: true },
      navigationControl: false,
      geolocateControl: false,
      scaleControl: false,
      fullscreenControl: false,
      terrainControl: false,
      projectionControl: false,
      scrollZoom: false,
      doubleClickZoom: true,
      dragRotate: false,
      pitchWithRotate: false,
      touchPitch: false,
      cooperativeGestures: true,
    });

    mapRef.current = map;
    map.scrollZoom.disable();
    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();
    map.keyboard.enable();
    map.keyboard.disableRotation();
    map.addControl(
      new NavigationControl({
        showCompass: false,
      }),
      "top-right",
    );

    const pauseFromManualMapInteraction = () => {
      if (isProgrammaticCameraRef.current) {
        return;
      }

      animationRef.current?.pause();
    };

    const resumeAfterManualMapInteraction = () => {
      if (isProgrammaticCameraRef.current) {
        return;
      }

      playJourneyIfAllowed();
    };

    map.on("dragstart", pauseFromManualMapInteraction);
    map.on("zoomstart", pauseFromManualMapInteraction);
    map.on("rotatestart", pauseFromManualMapInteraction);
    map.on("pitchstart", pauseFromManualMapInteraction);
    map.on("moveend", resumeAfterManualMapInteraction);
    map.on("zoomend", resumeAfterManualMapInteraction);
    map
      .getCanvasContainer()
      .addEventListener("touchstart", pauseFromManualMapInteraction, {
        passive: true,
      });

    const handleDraftRouteClick = (event: MapMouseEvent) => {
      if (
        !ENABLE_ROUTE_EDITOR ||
        !import.meta.env.DEV ||
        !isRouteEditingRef.current
      ) {
        return;
      }

      const draftCoordinate: LngLat = roundCoordinate([
        event.lngLat.lng,
        event.lngLat.lat,
      ]);

      setDraftRouteCoordinates((currentDraft) => [
        ...currentDraft,
        draftCoordinate,
      ]);
      setDraftStatus(
        `Added waypoint ${draftCoordinate[0]}, ${draftCoordinate[1]}.`,
      );
    };

    if (ENABLE_ROUTE_EDITOR && import.meta.env.DEV) {
      map.on("click", handleDraftRouteClick);
    }

    const addRouteLineMarkersAndBoat = () => {
      if (!map.getSource(ROUTE_SOURCE_ID)) {
        map.addSource(ROUTE_SOURCE_ID, {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: seaRouteCoordinates.map(toLngLat),
            },
          },
        });

        map.addLayer({
          id: ROUTE_SHADOW_LAYER_ID,
          type: "line",
          source: ROUTE_SOURCE_ID,
          layout: {
            "line-cap": "round",
            "line-join": "round",
          },
          paint: {
            "line-color": "#faf1dd",
            "line-width": 8,
            "line-opacity": 0.7,
            "line-blur": 1,
          },
        });

        map.addLayer({
          id: ROUTE_LINE_LAYER_ID,
          type: "line",
          source: ROUTE_SOURCE_ID,
          layout: {
            "line-cap": "round",
            "line-join": "round",
          },
          paint: {
            "line-color": "#123d4d",
            "line-width": 3.5,
            "line-opacity": 0.88,
            "line-dasharray": [1.2, 1.7],
          },
        });
      }

      if (
        ENABLE_ROUTE_EDITOR &&
        import.meta.env.DEV &&
        !map.getSource(DRAFT_ROUTE_SOURCE_ID)
      ) {
        map.addSource(DRAFT_ROUTE_SOURCE_ID, {
          type: "geojson",
          data: createLineFeatureCollection(draftRouteCoordinatesRef.current),
        });

        map.addLayer({
          id: DRAFT_ROUTE_LINE_LAYER_ID,
          type: "line",
          source: DRAFT_ROUTE_SOURCE_ID,
          layout: {
            "line-cap": "round",
            "line-join": "round",
          },
          paint: {
            "line-color": "#d87a3f",
            "line-width": 2.5,
            "line-opacity": 0.9,
            "line-dasharray": [0.7, 1.1],
          },
        });

        map.addSource(DRAFT_ROUTE_POINTS_SOURCE_ID, {
          type: "geojson",
          data: createPointFeatureCollection(draftRouteCoordinatesRef.current),
        });

        map.addLayer({
          id: DRAFT_ROUTE_POINTS_LAYER_ID,
          type: "circle",
          source: DRAFT_ROUTE_POINTS_SOURCE_ID,
          paint: {
            "circle-radius": 4,
            "circle-color": "#d87a3f",
            "circle-stroke-color": "#faf1dd",
            "circle-stroke-width": 1.5,
          },
        });
      }

      const markerCopies = routeCopyRef.current.stops;
      const markerEntries = validStops.map((stop) => {
        const markerElement = createMarkerElement(
          stop,
          findStopCopy(routeCopyRef.current, stop.id),
          selectStoryStop,
        );

        const marker = new Marker({
          element: markerElement,
          anchor: "center",
          offset: [0, 0],
        })
          .setLngLat(toLngLat(stop.coordinates))
          .addTo(map);

        return { stop, marker };
      });
      markersRef.current = markerEntries.map((entry) => entry.marker);

      const hiddenBeachMarker = markerEntries.find(
        (entry) => entry.stop.id === hiddenBeachStop.id,
      )?.marker;

      const verifyHiddenBeachMarkerAlignment = () => {
        if (!import.meta.env.DEV || !hiddenBeachMarker) {
          return;
        }

        const expectedPoint = map.project(toLngLat(hiddenBeachStop.coordinates));
        const circle = hiddenBeachMarker
          .getElement()
          .querySelector(".route-map-marker__circle");

        if (!(circle instanceof HTMLElement)) {
          return;
        }

        const mapRect = map.getContainer().getBoundingClientRect();
        const circleRect = circle.getBoundingClientRect();
        const actualPoint = {
          x: circleRect.left - mapRect.left + circleRect.width / 2,
          y: circleRect.top - mapRect.top + circleRect.height / 2,
        };
        const displacement = Math.hypot(
          actualPoint.x - expectedPoint.x,
          actualPoint.y - expectedPoint.y,
        );

        if (displacement > 3) {
          console.warn(
            `Hidden beach marker centre is ${displacement.toFixed(
              1,
            )}px from its MapTiler coordinate.`,
          );
        }
      };

      if (import.meta.env.DEV) {
        map.on("moveend", verifyHiddenBeachMarkerAlignment);
        window.requestAnimationFrame(verifyHiddenBeachMarkerAlignment);
      }

      if (markerCopies.length !== 3) {
        setMapError(routeCopyRef.current.controls.noValidCoordinates);
        return;
      }

      const boatMarker = new Marker({
        element: createBoatElement(),
        anchor: "center",
      })
        .setLngLat(toLngLat(animatedSeaRouteCoordinates[0]))
        .addTo(map);

      boatMarkerRef.current = boatMarker;

      const animation = new MaptilerAnimation({
        keyframes: buildAnimationKeyframes(),
        duration: ANIMATION_DURATION_MS,
        iterations: Infinity,
      });
      const handleAnimationFrame = (event: AnimationEvent) => {
        updateBoatPosition(event.props.routeDistance ?? 0);
      };

      animation.addEventListener("timeupdate", handleAnimationFrame);
      animationRef.current = animation;
      updateBoatPosition(0);
      isMapLoadedRef.current = true;
      fitCompleteRoute();
      playJourneyIfAllowed();
    };

    map.once("load", () => {
      addRouteLineMarkersAndBoat();
    });

    map.once("error", (event) => {
      logMapTilerDevelopmentDiagnostic("map request failed", event);
      if (!map.loaded()) {
        setMapError(routeCopyRef.current.controls.mapUnavailable);
      }
    });

    const resizeObserver = new ResizeObserver(() => {
      window.requestAnimationFrame(() => {
        map.resize();
        if (!isManualPausedRef.current) {
          fitCompleteRoute();
        }
      });
    });

    resizeObserver.observe(container);
    resizeObserverRef.current = resizeObserver;

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        const isVisible =
          Boolean(entry) && entry.intersectionRatio >= 0.35;
        isVisibleRef.current = isVisible;

        if (isVisible) {
          playJourneyIfAllowed();
          return;
        }

        animationRef.current?.pause();
      },
      { threshold: [0, 0.35, 0.7] },
    );

    intersectionObserver.observe(shell);
    intersectionObserverRef.current = intersectionObserver;

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        animationRef.current?.pause();
        return;
      }

      playJourneyIfAllowed();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      intersectionObserverRef.current?.disconnect();
      intersectionObserverRef.current = null;
      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = null;
      map.off("dragstart", pauseFromManualMapInteraction);
      map.off("zoomstart", pauseFromManualMapInteraction);
      map.off("rotatestart", pauseFromManualMapInteraction);
      map.off("pitchstart", pauseFromManualMapInteraction);
      map.off("moveend", resumeAfterManualMapInteraction);
      map.off("zoomend", resumeAfterManualMapInteraction);
      map
        .getCanvasContainer()
        .removeEventListener("touchstart", pauseFromManualMapInteraction);
      if (ENABLE_ROUTE_EDITOR && import.meta.env.DEV) {
        map.off("click", handleDraftRouteClick);
      }
      animationRef.current?.destroy();
      animationRef.current = null;
      if (programmaticCameraTimerRef.current) {
        window.clearTimeout(programmaticCameraTimerRef.current);
        programmaticCameraTimerRef.current = null;
      }
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
      boatMarkerRef.current?.remove();
      boatMarkerRef.current = null;
      map.remove();
      mapRef.current = null;
      isMapLoadedRef.current = false;
    };
  }, [
    fitCompleteRoute,
    mapError,
    pauseJourneyManually,
    playJourneyIfAllowed,
    selectStoryStop,
    updateBoatPosition,
  ]);

  if (!hasMapTilerApiKey) {
    return (
      <RouteMapFallback
        className={className}
        reason={routeCopy.controls.missingKey}
        routeCopy={routeCopy}
      />
    );
  }

  if (mapError) {
    return (
      <RouteMapFallback
        className={className}
        reason={mapError}
        routeCopy={routeCopy}
      />
    );
  }

  const selectedStop = selectedStopId
    ? routeCopy.stops.find((stop) => stop.id === selectedStopId) ?? null
    : null;

  return (
    <div
      ref={mapShellRef}
      className={[
        "aquarelle-route-map",
        selectedStop ? "aquarelle-route-map--has-story" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {ENABLE_ROUTE_EDITOR && import.meta.env.DEV ? (
        <div className="route-dev-toolbar">
          <div className="route-dev-toolbar__actions">
            <button
              type="button"
              onClick={handleStartRouteEditing}
              disabled={isRouteEditing}
            >
              Start route editing
            </button>
            <button
              type="button"
              onClick={handleUndoDraftPoint}
              disabled={!isRouteEditing || draftRouteCoordinates.length <= 1}
            >
              Undo point
            </button>
            <button
              type="button"
              onClick={handleClearDraft}
              disabled={!isRouteEditing || draftRouteCoordinates.length <= 1}
            >
              Clear draft
            </button>
            <button
              type="button"
              onClick={handleCopyDraftRoute}
              disabled={draftRouteCoordinates.length <= 1}
            >
              Copy route
            </button>
            <button
              type="button"
              onClick={handleStopRouteEditing}
              disabled={!isRouteEditing}
            >
              Stop route editing
            </button>
          </div>
          <p>
            {isRouteEditing ? "Editing route" : "Route editor idle"} ·{" "}
            {draftRouteCoordinates.length} point
            {draftRouteCoordinates.length === 1 ? "" : "s"}
            {draftStatus ? ` · ${draftStatus}` : ""}
          </p>
        </div>
      ) : null}

      <div
        ref={mapContainerRef}
        className="aquarelle-route-map__canvas"
        role="img"
        aria-label={routeCopy.controls.mapLabel}
      />

      {selectedStop ? (
        <RouteStoryCard
          routeCopy={routeCopy}
          selectedStop={selectedStop}
          onClose={handleCloseStory}
          onSelectStop={selectStoryStop}
        />
      ) : null}

      <RouteLegend routeCopy={routeCopy} />
    </div>
  );
}
