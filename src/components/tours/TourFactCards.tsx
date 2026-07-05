import type { TourFact } from "./tourFacts";

type TourFactCardsProps = {
  facts: TourFact[];
  className?: string;
};

export function TourFactCards({
  facts,
  className = "",
}: TourFactCardsProps) {
  if (facts.length === 0) {
    return null;
  }

  return (
    <div className={["tour-facts", className].filter(Boolean).join(" ")} role="list">
      {facts.map((fact) => {
        const Icon = fact.icon;

        return (
          <div
            key={fact.id}
            className={[
              "tour-fact-card",
              `tour-fact-card--${fact.tone ?? "default"}`,
            ].join(" ")}
            role="listitem"
          >
            <span className="tour-fact-card__icon">
              <Icon aria-hidden="true" />
            </span>

            <span className="tour-fact-card__copy">
              <span className="tour-fact-card__label">{fact.label}</span>
              <strong className="tour-fact-card__value">{fact.value}</strong>
            </span>
          </div>
        );
      })}
    </div>
  );
}
