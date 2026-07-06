import { getHomeSectionHref, getLocalizedHref } from "@/i18n/routes";
import type { Lang } from "@/i18n/locales";
import type { FaqLinkTarget, TranslationKeys } from "@/i18n/translations";

export type FaqLink = {
  label: string;
  href: string;
  target: FaqLinkTarget;
  external?: boolean;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  links?: FaqLink[];
};

function getLinkHref(target: FaqLinkTarget, locale: Lang): string {
  if (target === "booking" || target === "private") {
    return "";
  }

  return target === "route"
    ? getHomeSectionHref(locale, "#route")
    : getLocalizedHref("tours", locale);
}

export function createFaqItems(
  t: TranslationKeys,
  locale: Lang,
): FaqItem[] {
  return t.faq.items.map((item) => ({
    id: item.id,
    question: item.question,
    answer: item.answer,
    links: item.links?.map((link) => {
      const href = getLinkHref(link.target, locale);

      return {
        label: link.label,
        target: link.target,
        href,
        external: href.startsWith("http"),
      };
    }),
  }));
}

export function createFaqStructuredData(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
