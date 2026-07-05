import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { pageContent } from "@/i18n/pageContent";
import { translations } from "@/i18n/translations";
import { TourFactCards } from "./TourFactCards";
import { createTourFacts } from "./tourFacts";

const labels = pageContent.en.common;
const tours = translations.en.tours;

describe("TourFactCards", () => {
  it("renders Classic duration, group size and price from central tour data", () => {
    const facts = createTourFacts({
      tour: tours.hidden,
      labels,
      pageId: "classicTour",
      status: "available",
    });

    render(<TourFactCards facts={facts} />);

    expect(screen.getByText("Duration")).toBeInTheDocument();
    expect(screen.getByText("approx. 4 hours")).toBeInTheDocument();
    expect(screen.getByText("Group size")).toBeInTheDocument();
    expect(screen.getByText("Up to 8 guests")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
    expect(screen.getByText("€50 per person")).toBeInTheDocument();
  });

  it("uses Time for Sunset and does not invent a duration label", () => {
    const facts = createTourFacts({
      tour: tours.moonlight,
      labels,
      pageId: "sunsetTour",
      status: "available",
    });

    render(<TourFactCards facts={facts} />);

    expect(screen.getByText("Time")).toBeInTheDocument();
    expect(screen.getByText("Evening")).toBeInTheDocument();
    expect(screen.queryByText("Duration")).not.toBeInTheDocument();
  });

  it("renders Moonlight as coming soon without price", () => {
    const facts = createTourFacts({
      tour: tours.private,
      labels,
      pageId: "moonlightTour",
      status: "coming-soon",
    });

    render(<TourFactCards facts={facts} />);

    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("Coming soon")).toBeInTheDocument();
    expect(screen.queryByText("Price")).not.toBeInTheDocument();
  });

  it("marks icons as decorative and supports one, two or three facts", () => {
    const classicFacts = createTourFacts({
      tour: tours.hidden,
      labels,
      pageId: "classicTour",
      status: "available",
    });

    const { container, rerender } = render(<TourFactCards facts={classicFacts} />);
    expect(container.querySelectorAll("svg[aria-hidden='true']")).toHaveLength(3);

    rerender(<TourFactCards facts={classicFacts.slice(0, 2)} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(2);

    rerender(<TourFactCards facts={classicFacts.slice(0, 1)} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
  });
});
