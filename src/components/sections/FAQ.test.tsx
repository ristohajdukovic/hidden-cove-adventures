import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FAQ } from "./FAQ";
import { I18nProvider } from "@/i18n/I18nProvider";
import { translations } from "@/i18n/translations";

function renderFaq() {
  render(
    <I18nProvider locale="en" pageId="home">
      <FAQ />
    </I18nProvider>,
  );
}

describe("FAQ accordion", () => {
  it("opens only the first answer initially and remains single collapsible", () => {
    const [firstItem, secondItem] = translations.en.faq.items;

    renderFaq();

    const firstQuestion = screen.getByRole("button", {
      name: firstItem.question,
    });
    const secondQuestion = screen.getByRole("button", {
      name: secondItem.question,
    });

    expect(screen.getByText(firstItem.answer)).toBeVisible();
    expect(screen.queryByText(secondItem.answer)).not.toBeInTheDocument();
    expect(firstQuestion).toHaveAttribute("aria-expanded", "true");
    expect(secondQuestion).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(secondQuestion);

    expect(screen.queryByText(firstItem.answer)).not.toBeInTheDocument();
    expect(screen.getByText(secondItem.answer)).toBeVisible();
    expect(firstQuestion).toHaveAttribute("aria-expanded", "false");
    expect(secondQuestion).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(secondQuestion);

    expect(screen.queryByText(firstItem.answer)).not.toBeInTheDocument();
    expect(screen.queryByText(secondItem.answer)).not.toBeInTheDocument();
    expect(secondQuestion).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(firstQuestion);

    expect(screen.getByText(firstItem.answer)).toBeVisible();
    expect(firstQuestion).toHaveAttribute("aria-expanded", "true");
  });
});
