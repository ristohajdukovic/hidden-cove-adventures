import { CalendarClock, Clock3, Euro, Info, Users } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import type { PageContent } from "@/i18n/pageContent";
import type { TourPageId } from "@/i18n/routes";
import type { TourKey, TranslationKeys } from "@/i18n/translations";

type TourFactIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type TourFact = {
  id: string;
  label: string;
  value: string;
  icon: TourFactIcon;
  tone?: "default" | "price" | "status";
};

type TourFactLabels = Pick<
  PageContent["common"],
  "duration" | "groupSize" | "price" | "time" | "status" | "comingSoon"
>;

type TourCopy = TranslationKeys["tours"][TourKey];

type CreateTourFactsOptions = {
  tour: TourCopy;
  labels: TourFactLabels;
  pageId: TourPageId;
  status: "available" | "coming-soon";
};

export function createTourFacts({
  tour,
  labels,
  pageId,
  status,
}: CreateTourFactsOptions): TourFact[] {
  if (status === "coming-soon") {
    return [
      {
        id: "status",
        label: labels.status,
        value: labels.comingSoon,
        icon: Info,
        tone: "status",
      },
    ];
  }

  const facts: TourFact[] = [];
  const durationLabel = pageId === "sunsetTour" ? labels.time : labels.duration;
  const durationIcon = pageId === "sunsetTour" ? CalendarClock : Clock3;

  if (tour.duration) {
    facts.push({
      id: "duration",
      label: durationLabel,
      value: tour.duration,
      icon: durationIcon,
    });
  }

  if (tour.group) {
    facts.push({
      id: "group-size",
      label: labels.groupSize,
      value: tour.group,
      icon: Users,
    });
  }

  if (tour.price && tour.price !== labels.comingSoon) {
    facts.push({
      id: "price",
      label: labels.price,
      value: tour.price,
      icon: Euro,
      tone: "price",
    });
  }

  return facts;
}
