export type LngLat = readonly [longitude: number, latitude: number];

export type RouteStop = {
  id: string;
  number: 1 | 2 | 3;
  title: string;
  subtitle: string;
  shortLabel: string;
  coordinates: LngLat;
  story: readonly string[];
  markerVariant: "start" | "cave" | "hidden-beach";
};

export const routeStops: readonly RouteStop[] = [
  {
    id: "valdanos-bay",
    number: 1,
    title: "Valdanos Bay",
    subtitle: "Where the journey begins",
    shortLabel: "Valdanos",
    coordinates: [19.163874349724836, 41.95051840479012],
    markerVariant: "start",
    story: [
      "Valdanos opens like a narrow horseshoe beneath olive-covered slopes. The sheltered bay has long belonged to the maritime world of Ulcinj, serving sailors, trading vessels and, according to local histories, the ships associated with Ulcinj's pirate era.",
      "In 1833, a brigantine arriving from Alexandria was ordered to remain here in quarantine for forty days. Much later, during the Yugoslav period, Valdanos became a military-tourism complex. The abandoned structures behind the shore still add another layer to the bay's history.",
    ],
  },
  {
    id: "vucja-jazbina",
    number: 2,
    title: "Vučja jazbina",
    subtitle: "The Wolf's Cave",
    shortLabel: "Wolf's Cave",
    coordinates: [19.143437439885325, 41.972053583017896],
    markerVariant: "cave",
    story: [
      "Between Valdanos and Kruče, the coast folds into a shadowed sea inlet known locally as Shpella e Ujkut or Vučja Vala - the Wolf's Cave. Its dark rock walls, concealed entrance and reflected blue water give it the atmosphere of a natural chamber carved into the coast.",
      "The surrounding underwater landscape is known for a rich coralligenous habitat - a marine garden formed by algae, sponges and other sea life. Some visitors describe it simply as the Blue Cave, but the local name remains the more distinctive one.",
    ],
  },
  {
    id: "our-hidden-beach",
    number: 3,
    title: "Our Hidden Beach",
    subtitle: "A shore approached from the sea",
    shortLabel: "Hidden Beach",
    coordinates: [19.180465515311795, 41.93445378475054],
    markerVariant: "hidden-beach",
    story: [
      "There is no road leading down to this beach. It can be reached by a demanding hike beneath the olive-covered hills, but from the sea it appears naturally: a quiet strip of coast hidden behind the headland.",
      "Like many secluded coves along the Ulcinj coast, the beach has gathered stories of pirates hiding treasure beyond the reach of roads and old maps. It is local folklore rather than documented history - but in a place this concealed, the story is easy to understand.",
    ],
  },
] as const;

export const seaRouteCoordinates = [
  routeStops[0].coordinates,

  // Storytelling sea waypoints from Valdanos Bay to Vucja jazbina.
  [19.16245, 41.95225],
  [19.1602, 41.95355],
  [19.15645, 41.9542],
  [19.152, 41.9554],
  [19.14735, 41.95875],
  [19.1432, 41.9641],
  [19.1406, 41.969],
  [19.14125, 41.97122],

  routeStops[1].coordinates,

  // Storytelling sea waypoints from Vucja jazbina to Our Hidden Beach.
  [19.1401, 41.97045],
  [19.1379, 41.9652],
  [19.13875, 41.95845],
  [19.14275, 41.95135],
  [19.14955, 41.9444],
  [19.15865, 41.93815],
  [19.16865, 41.93375],
  [19.17655, 41.93285],

  routeStops[2].coordinates,
] as const satisfies readonly LngLat[];

export const returnSeaRouteCoordinates = [...seaRouteCoordinates]
  .reverse()
  .slice(1);

export const animatedSeaRouteCoordinates = [
  ...seaRouteCoordinates,
  ...returnSeaRouteCoordinates,
] as const;
