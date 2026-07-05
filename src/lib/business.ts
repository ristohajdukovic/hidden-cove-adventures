import type { Lang } from "@/i18n/locales";
import { translations } from "@/i18n/translations";

// Central business config - easy to edit.
export const BRAND_NAME = "Hidden Cove Boat Tours";

export const business = {
  name: BRAND_NAME,
  // Optional public display phone number. WhatsApp is configured via VITE_WHATSAPP_NUMBER.
  phone: "",
  email: "hello@hiddencoveulcinj.com",
  city: "Ulcinj, Montenegro",
  instagram: "",
  social: {
    instagram: "",
    facebook: "",
  },
};

const rawWhatsAppNumber = import.meta.env.VITE_WHATSAPP_NUMBER ?? "";

export const whatsappNumber = rawWhatsAppNumber.replace(/\D/g, "");
export const hasPhone = Boolean(business.phone);
export const hasWhatsApp = Boolean(whatsappNumber);

export const emailLink = (
  subject = "Boat tour enquiry",
  body = "Hello, I'm interested in booking a boat trip with Hidden Cove Boat Tours. Preferred date: ____. Number of guests: ____.",
) =>
  `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export type WhatsAppMessageKey =
  | "generalBooking"
  | "contact"
  | "classicTour"
  | "bbqTour"
  | "sunsetTour"
  | "moonlightTour"
  | "privateTour";

export type WhatsAppUrlOptions = {
  locale: Lang;
  messageKey: WhatsAppMessageKey;
  variables?: Record<string, string>;
  phoneNumber?: string;
};

export function interpolateMessage(
  template: string,
  variables: Record<string, string>,
): string {
  return Object.entries(variables).reduce(
    (message, [key, value]) => message.replaceAll(`{{${key}}}`, value),
    template,
  );
}

export function createWhatsAppMessage({
  locale,
  messageKey,
  variables = {},
}: Omit<WhatsAppUrlOptions, "phoneNumber">): string {
  const template = translations[locale].whatsapp[messageKey];

  return interpolateMessage(template, variables);
}

export function createWhatsAppUrl(options: WhatsAppUrlOptions | string): string {
  const configuredNumber =
    typeof options === "string" ? whatsappNumber : options.phoneNumber ?? whatsappNumber;

  if (!configuredNumber) {
    return "#";
  }

  const message =
    typeof options === "string"
      ? options
      : createWhatsAppMessage({
          locale: options.locale,
          messageKey: options.messageKey,
          variables: options.variables,
        });

  return `https://wa.me/${configuredNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}

export function formatWhatsAppMessage(
  template: string,
  variables: Record<string, string>,
): string {
  return interpolateMessage(template, variables);
}

export const telLink = () => (hasPhone ? `tel:${business.phone}` : "");
