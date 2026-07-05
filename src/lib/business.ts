// Central business config - easy to edit.
export const BRAND_NAME = "Hidden Cove Ulcinj";

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
  body = "Hello, I'm interested in booking a boat trip with Hidden Cove Ulcinj. Preferred date: ____. Number of guests: ____.",
) =>
  `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export function createWhatsAppUrl(message: string): string {
  if (!whatsappNumber) {
    return "#";
  }

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function formatWhatsAppMessage(
  template: string,
  variables: Record<string, string>,
): string {
  return Object.entries(variables).reduce(
    (message, [key, value]) => message.replaceAll(`{{${key}}}`, value),
    template,
  );
}

export const waLink = (
  msg = "Hello, I'm interested in booking a boat trip with Hidden Cove Ulcinj. Preferred date: ____. Number of guests: ____.",
) =>
  hasWhatsApp
    ? createWhatsAppUrl(msg)
    : emailLink("Boat tour enquiry", msg);

export const telLink = () => (hasPhone ? `tel:${business.phone}` : "");
