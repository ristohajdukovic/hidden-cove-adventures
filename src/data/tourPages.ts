import hiddenImg from "@/assets/tour-hidden-beach.jpg";
import valdanosTourImg from "@/assets/old_town.jpg";
import oldTownTourImg from "@/assets/swim.jpg";
import customTourImg from "@/assets/tour-private.jpg";
import sunsetTourImg from "@/assets/sunset_boat.jpg";
import moonImg from "@/assets/tour-moonlight.jpg";
import type { TourKey } from "@/i18n/translations";
import type { TourPageId } from "@/i18n/routes";
import type { WhatsAppMessageKey } from "@/lib/business";

export type TourDefinition = {
  pageId: TourPageId;
  tourKey: TourKey;
  image: string;
  cardClassName: string;
  status: "available" | "coming-soon";
  whatsappMessageKey: WhatsAppMessageKey;
};

export const tourDefinitions = [
  {
    pageId: "classicTour",
    tourKey: "hidden",
    image: hiddenImg,
    cardClassName: "tour-card--classic",
    status: "available",
    whatsappMessageKey: "classicTour",
  },
  {
    pageId: "valdanosTour",
    tourKey: "valdanos",
    image: valdanosTourImg,
    cardClassName: "tour-card--valdanos",
    status: "available",
    whatsappMessageKey: "valdanosTour",
  },
  {
    pageId: "oldTownTour",
    tourKey: "oldtown",
    image: oldTownTourImg,
    cardClassName: "tour-card--oldtown",
    status: "available",
    whatsappMessageKey: "oldTownTour",
  },
  {
    pageId: "customTour",
    tourKey: "custom",
    image: customTourImg,
    cardClassName: "tour-card--custom",
    status: "available",
    whatsappMessageKey: "customTour",
  },
  {
    pageId: "sunsetTour",
    tourKey: "moonlight",
    image: sunsetTourImg,
    cardClassName: "tour-card--sunset",
    status: "available",
    whatsappMessageKey: "sunsetTour",
  },
  {
    pageId: "moonlightTour",
    tourKey: "private",
    image: moonImg,
    cardClassName: "tour-card--moonlight",
    status: "coming-soon",
    whatsappMessageKey: "moonlightTour",
  },
] as const satisfies readonly TourDefinition[];

export const tourDefinitionsByPageId = Object.fromEntries(
  tourDefinitions.map((definition) => [definition.pageId, definition]),
) as Record<TourPageId, TourDefinition>;
