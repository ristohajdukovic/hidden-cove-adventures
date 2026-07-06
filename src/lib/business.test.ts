import { describe, expect, it } from "vitest";
import { supportedLocaleKeys } from "@/i18n/locales";
import { translations } from "@/i18n/translations";
import {
  createWhatsAppMessage,
  createWhatsAppUrl,
  type WhatsAppMessageKey,
} from "./business";

const testPhoneNumber = "38200000000";

function decodedText(url: string) {
  const parsed = new URL(url);

  return parsed.searchParams.get("text") ?? "";
}

describe("WhatsApp helper", () => {
  it("builds encoded URLs from configured phone-number input", () => {
    const url = createWhatsAppUrl({
      locale: "en",
      messageKey: "generalBooking",
      phoneNumber: "+382 00 000 000",
    });

    expect(url).toMatch(/^https:\/\/wa\.me\/38200000000\?text=/);
    expect(url).not.toContain(" ");
    expect(decodedText(url)).toContain("booking a boat tour");
  });

  it("builds URLs from the configured public number when no override is supplied", () => {
    const url = createWhatsAppUrl("Hello from a configured booking action");

    expect(url).toMatch(/^https:\/\/wa\.me\/\d+\?text=/);
    expect(url).not.toContain(" ");
    expect(decodedText(url)).toBe("Hello from a configured booking action");
  });

  it.each([
    ["contact", "question"],
    ["classicTour", "Classic Tour"],
    ["bbqTour", "BBQ Tour"],
    ["sunsetTour", "Sunset Tour"],
    ["moonlightTour", "upcoming Moonlight Tour"],
    ["privateTour", "private boat tour"],
  ] satisfies [WhatsAppMessageKey, string][])(
    "creates the %s message",
    (messageKey, expectedText) => {
      const url = createWhatsAppUrl({
        locale: "en",
        messageKey,
        variables: { price: "€50 per person" },
        phoneNumber: testPhoneNumber,
      });

      expect(decodedText(url)).toContain(expectedText);
    },
  );

  it("keeps Moonlight informational instead of claiming booking", () => {
    supportedLocaleKeys.forEach((locale) => {
      const message = createWhatsAppMessage({
        locale,
        messageKey: "moonlightTour",
      });

      expect(message).not.toMatch(/book|booking|rezerv|buchen/i);
    });
  });

  it("returns nonempty localized messages for every supported locale", () => {
    const messageKeys: WhatsAppMessageKey[] = [
      "generalBooking",
      "contact",
      "classicTour",
      "bbqTour",
      "sunsetTour",
      "moonlightTour",
      "privateTour",
    ];

    supportedLocaleKeys.forEach((locale) => {
      messageKeys.forEach((messageKey) => {
        expect(
          createWhatsAppMessage({
            locale,
            messageKey,
            variables: { price: "€50 per person" },
          }).trim().length,
        ).toBeGreaterThan(0);
      });
    });
  });

  it("includes localized prices for active tour messages", () => {
    supportedLocaleKeys.forEach((locale) => {
      expect(
        createWhatsAppMessage({
          locale,
          messageKey: "classicTour",
          variables: { price: translations[locale].tours.hidden.price },
        }),
      ).toContain(translations[locale].tours.hidden.price);

      expect(
        createWhatsAppMessage({
          locale,
          messageKey: "bbqTour",
          variables: { price: translations[locale].tours.sunset.price },
        }),
      ).toContain(translations[locale].tours.sunset.price);

      expect(
        createWhatsAppMessage({
          locale,
          messageKey: "sunsetTour",
          variables: { price: translations[locale].tours.moonlight.price },
        }),
      ).toContain(translations[locale].tours.moonlight.price);
    });
  });

  it("returns a nonbroken fallback when no phone number is configured", () => {
    expect(
      createWhatsAppUrl({
        locale: "en",
        messageKey: "contact",
        phoneNumber: "",
      }),
    ).toBe("#");
  });
});
