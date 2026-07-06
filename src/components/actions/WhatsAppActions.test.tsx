import { render, screen, within } from "@testing-library/react";
import type { ReactNode } from "react";
import { describe, expect, it } from "vitest";
import { Header } from "@/components/Header";
import { MobileBookingBar } from "@/components/MobileBookingBar";
import { Tours } from "@/components/sections/Tours";
import { I18nProvider } from "@/i18n/I18nProvider";
import { translations } from "@/i18n/translations";
import TourDetail from "@/pages/TourDetail";
import ToursOverview from "@/pages/ToursOverview";
import type { PageId } from "@/i18n/routes";

function renderWithProvider(ui: ReactNode, pageId: PageId = "home") {
  return render(
    <I18nProvider locale="en" pageId={pageId}>
      {ui}
    </I18nProvider>,
  );
}

function whatsappLinks(container: HTMLElement) {
  return Array.from(container.querySelectorAll<HTMLAnchorElement>("a")).filter((link) =>
    link.href.startsWith("https://wa.me/"),
  );
}

function decodedWhatsAppText(link: HTMLAnchorElement) {
  return new URL(link.href).searchParams.get("text") ?? "";
}

describe("WhatsApp booking actions", () => {
  it("renders separate homepage tour actions without nested anchors", () => {
    const { container } = renderWithProvider(<Tours />);

    expect(container.querySelectorAll("a a")).toHaveLength(0);

    ["Classic Tour", "BBQ Tour", "Sunset Tour"].forEach((name) => {
      const heading = screen.getByRole("heading", { name });
      const card = heading.closest("article");

      expect(card).not.toBeNull();
      expect(
        within(card as HTMLElement).getByRole("link", { name: /view details/i }),
      ).toHaveAttribute("href", expect.stringContaining("/tours/"));

      const bookingLink = whatsappLinks(card as HTMLElement);
      expect(bookingLink).toHaveLength(1);
      expect(bookingLink[0]).toHaveAttribute("target", "_blank");
      expect(bookingLink[0]).toHaveAttribute("rel", "noopener noreferrer");
      expect(decodedWhatsAppText(bookingLink[0])).toContain(name);
    });
  });

  it("keeps Moonlight informational on homepage cards", () => {
    const { container } = renderWithProvider(<Tours />);
    const heading = screen.getByRole("heading", { name: "Moonlight Tour" });
    const card = heading.closest("article") as HTMLElement;

    expect(within(card).getByRole("link", { name: /view details/i })).toBeInTheDocument();
    expect(within(card).getByRole("link", { name: /ask about moonlight/i })).toBeInTheDocument();
    expect(within(card).queryByRole("link", { name: /book/i })).not.toBeInTheDocument();
    expect(container.querySelectorAll("a a")).toHaveLength(0);
  });

  it("renders tours overview cards without nested anchors", () => {
    const { container } = render(<ToursOverview initialLocale="en" />);

    expect(container.querySelectorAll("a a")).toHaveLength(0);
    expect(screen.getAllByRole("link", { name: /view details/i }).length).toBeGreaterThanOrEqual(4);
    expect(whatsappLinks(container).length).toBeGreaterThanOrEqual(4);
  });

  it("uses tour-specific messages in header and mobile sticky actions", () => {
    const { container } = renderWithProvider(
      <>
        <Header />
        <MobileBookingBar />
      </>,
      "barbecueTour",
    );

    const texts = whatsappLinks(container).map(decodedWhatsAppText);

    expect(texts.some((text) => text.includes("BBQ Tour"))).toBe(true);
    expect(texts.every((text) => !text.includes("Classic Tour"))).toBe(true);
  });

  it("uses Moonlight information-request copy on detail pages and sticky action", () => {
    const { container } = render(<TourDetail initialLocale="en" pageId="moonlightTour" />);
    const askLinks = screen.getAllByRole("link", { name: /ask about this tour/i });
    const texts = askLinks.map((link) => decodedWhatsAppText(link as HTMLAnchorElement));

    expect(screen.getAllByText(translations.en.tours.private.tagline).length).toBeGreaterThan(0);
    expect(texts.length).toBeGreaterThan(0);
    expect(texts.every((text) => text.includes("Moonlight Tour"))).toBe(true);
    expect(texts.every((text) => !/book|booking/i.test(text))).toBe(true);
    expect(whatsappLinks(container).length).toBeGreaterThan(texts.length);
  });

  it("does not hardcode a phone number in source components", async () => {
    const { readdir, readFile } = await import("node:fs/promises");
    const { join } = await import("node:path");
    const root = join(process.cwd(), "src");
    const offenders: string[] = [];

    async function walk(directory: string) {
      const entries = await readdir(directory, { withFileTypes: true });

      await Promise.all(
        entries.map(async (entry) => {
          const fullPath = join(directory, entry.name);

          if (entry.isDirectory()) {
            await walk(fullPath);
            return;
          }

          if (!/\.(tsx?|ts)$/.test(entry.name) || /\.test\./.test(entry.name)) {
            return;
          }

          const source = await readFile(fullPath, "utf8");

          if (/382\d{8,}/.test(source)) {
            offenders.push(fullPath);
          }
        }),
      );
    }

    await walk(root);

    expect(offenders).toEqual([]);
  });
});
