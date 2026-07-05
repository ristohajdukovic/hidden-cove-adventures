import hiddenImg from "@/assets/tour-hidden-beach.jpg";
import sunsetImg from "@/assets/tour-sunset-bbq.jpg";
import sunsetTourImg from "@/assets/gallery-oldtown.jpg";
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
    pageId: "barbecueTour",
    tourKey: "sunset",
    image: sunsetImg,
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
