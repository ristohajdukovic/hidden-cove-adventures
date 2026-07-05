import { business } from "@/lib/business";
import { createFaqItems, createFaqStructuredData } from "@/data/faq";
import { useI18n } from "@/i18n/I18nContext";
import { supportedLocales } from "@/i18n/locales";
import { getCanonicalUrl } from "@/i18n/seo";

function removeUndefined(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(removeUndefined);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([, entryValue]) => entryValue !== undefined && entryValue !== "")
        .map(([key, entryValue]) => [key, removeUndefined(entryValue)]),
    );
  }

  return value;
}

export function HomeStructuredData() {
  const { lang, t } = useI18n();
  const canonicalUrl = getCanonicalUrl(lang);
  const inLanguage = supportedLocales[lang].htmlLang;
  const faqItems = createFaqItems(t, "", lang);
  const structuredData = removeUndefined({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${canonicalUrl}#organization`,
        name: business.name,
        url: canonicalUrl,
        email: business.email,
        areaServed: ["Valdanos", "Ulcinj", "Montenegro"],
      },
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: t.seo.serviceName,
        description: t.seo.description,
        serviceType: t.seo.serviceType,
        url: canonicalUrl,
        inLanguage,
        provider: {
          "@type": "Organization",
          "@id": `${canonicalUrl}#organization`,
          name: business.name,
        },
        areaServed: ["Valdanos", "Ulcinj", "Montenegro"],
      },
      {
        ...createFaqStructuredData(faqItems),
        "@id": `${canonicalUrl}#faq`,
        inLanguage,
      },
    ],
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
