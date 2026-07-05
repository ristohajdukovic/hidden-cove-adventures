import { business } from "@/lib/business";
import { pageContent } from "@/i18n/pageContent";
import { getCanonicalUrl } from "@/i18n/seo";
import { type PageId, type TourPageId } from "@/i18n/routes";
import { supportedLocales, type Lang } from "@/i18n/locales";
import { useI18n } from "@/i18n/I18nContext";
import { tourDefinitionsByPageId } from "@/data/tourPages";

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

function breadcrumbItems(lang: Lang, pageId: PageId) {
  const copy = pageContent[lang];
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: copy.breadcrumbs.home,
      item: getCanonicalUrl(lang, "home"),
    },
  ];

  if (pageId !== "home") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: copy.breadcrumbs.tours,
      item: getCanonicalUrl(lang, "tours"),
    });
  }

  if (pageId !== "home" && pageId !== "tours") {
    items.push({
      "@type": "ListItem",
      position: 3,
      name: copy.tourDetails[pageId as TourPageId].eyebrow,
      item: getCanonicalUrl(lang, pageId),
    });
  }

  return items;
}

export function PageStructuredData({ pageId }: { pageId: PageId }) {
  const { lang, t } = useI18n();
  const metadataUrl = getCanonicalUrl(lang, pageId);
  const inLanguage = supportedLocales[lang].htmlLang;
  const pageSeo = pageContent[lang].seo[pageId];
  const graph: unknown[] = [
    {
      "@type": "Organization",
      "@id": `${getCanonicalUrl(lang, "home")}#organization`,
      name: business.name,
      url: getCanonicalUrl(lang, "home"),
      email: business.email,
      areaServed: ["Valdanos", "Ulcinj", "Montenegro"],
    },
    {
      "@type": "WebPage",
      "@id": `${metadataUrl}#webpage`,
      url: metadataUrl,
      name: pageSeo.title,
      description: pageSeo.description,
      inLanguage,
      isPartOf: {
        "@type": "WebSite",
        "@id": `${getCanonicalUrl(lang, "home")}#website`,
        name: business.name,
        url: getCanonicalUrl(lang, "home"),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${metadataUrl}#breadcrumb`,
      itemListElement: breadcrumbItems(lang, pageId),
    },
  ];

  if (pageId === "tours") {
    graph.push({
      "@type": "ItemList",
      "@id": `${metadataUrl}#tours`,
      name: pageContent[lang].toursOverview.title,
      itemListElement: Object.values(tourDefinitionsByPageId).map((definition, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: getCanonicalUrl(lang, definition.pageId),
        name: t.tours[definition.tourKey].name,
      })),
    });
  }

  if (pageId !== "home" && pageId !== "tours") {
    const definition = tourDefinitionsByPageId[pageId as TourPageId];
    const tour = t.tours[definition.tourKey];

    graph.push({
      "@type": "TouristTrip",
      "@id": `${metadataUrl}#tour`,
      name: tour.name,
      description: tour.desc,
      url: metadataUrl,
      inLanguage,
      provider: {
        "@id": `${getCanonicalUrl(lang, "home")}#organization`,
      },
      touristType: "Small group boat tour",
      itinerary: getCanonicalUrl(lang, "home"),
    });
  }

  const structuredData = removeUndefined({
    "@context": "https://schema.org",
    "@graph": graph,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
