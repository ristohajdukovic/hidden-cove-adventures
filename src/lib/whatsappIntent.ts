import { tourDefinitionsByPageId, type TourDefinition } from "@/data/tourPages";
import type { PageId, TourPageId } from "@/i18n/routes";
import type { TranslationKeys } from "@/i18n/translations";
import type { WhatsAppMessageKey } from "@/lib/business";

export type WhatsAppIntent = {
  messageKey: WhatsAppMessageKey;
  variables?: Record<string, string>;
};

function getTourPriceVariables(
  definition: TourDefinition,
  t: TranslationKeys,
): Record<string, string> | undefined {
  if (
    definition.status !== "available" ||
    definition.whatsappMessageKey === "moonlightTour"
  ) {
    return undefined;
  }

  return {
    price: t.tours[definition.tourKey].price,
  };
}

export function getWhatsAppIntentForTourDefinition(
  definition: TourDefinition,
  t: TranslationKeys,
): WhatsAppIntent {
  return {
    messageKey: definition.whatsappMessageKey,
    variables: getTourPriceVariables(definition, t),
  };
}

export function getWhatsAppIntentForPage(
  pageId: PageId,
  t: TranslationKeys,
): WhatsAppIntent {
  if (pageId === "home" || pageId === "tours") {
    return {
      messageKey: "generalBooking",
    };
  }

  return getWhatsAppIntentForTourDefinition(
    tourDefinitionsByPageId[pageId],
    t,
  );
}

export function getMobileBookingLabelForPage(
  pageId: PageId,
  t: TranslationKeys,
): string {
  if (pageId === "moonlightTour") {
    return t.cta.askAboutThisTour;
  }

  if (pageId === "bbqTour") {
    return t.cta.bookBbqTour;
  }

  if (
    pageId === "classicTour" ||
    pageId === "valdanosTour" ||
    pageId === "oldTownTour" ||
    pageId === "customTour" ||
    pageId === "sunsetTour"
  ) {
    return t.cta.bookThisTour;
  }

  return t.cta.book;
}

export function isTourPageId(pageId: PageId): pageId is TourPageId {
  return pageId !== "home" && pageId !== "tours";
}
