import hiddenImg from "@/assets/tour-hidden-beach.webp";
import valdanosTourImg from "@/assets/old_town.webp";
import oldTownTourImg from "@/assets/swim.webp";
import customTourImg from "@/assets/tour-private.webp";
import bbqTourImg from "@/assets/tour-sunset-bbq.webp";
import sunsetTourImg from "@/assets/sunset_boat.webp";
import moonImg from "@/assets/tour-moonlight.webp";
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
    pageId: "bbqTour",
    tourKey: "sunset",
    image: bbqTourImg,
    cardClassName: "tour-card--bbq",
    status: "available",
    whatsappMessageKey: "bbqTour",
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
