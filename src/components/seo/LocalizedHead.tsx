import { useEffect } from "react";
import { useI18n } from "@/i18n/I18nContext";
import { getPageMetadata } from "@/i18n/seo";

function setMeta(selector: string, create: () => HTMLMetaElement, content: string) {
  let element = document.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = create();
    document.head.append(element);
  }

  element.content = content;
}

function setLink(
  selector: string,
  create: () => HTMLLinkElement,
  href: string,
) {
  let element = document.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = create();
    document.head.append(element);
  }

  element.href = href;
}

export function LocalizedHead() {
  const { lang, pageId } = useI18n();

  useEffect(() => {
    const metadata = getPageMetadata(lang, pageId);

    document.title = metadata.title;
    document.documentElement.lang = metadata.htmlLang;

    setMeta(
      'meta[name="description"]',
      () => {
        const meta = document.createElement("meta");
        meta.name = "description";
        return meta;
      },
      metadata.description,
    );
    setMeta(
      'meta[name="robots"]',
      () => {
        const meta = document.createElement("meta");
        meta.name = "robots";
        return meta;
      },
      "index, follow",
    );
    setMeta(
      'meta[property="og:title"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:title");
        return meta;
      },
      metadata.ogTitle,
    );
    setMeta(
      'meta[property="og:description"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:description");
        return meta;
      },
      metadata.ogDescription,
    );
    setMeta(
      'meta[property="og:locale"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:locale");
        return meta;
      },
      metadata.ogLocale,
    );
    setMeta(
      'meta[name="twitter:title"]',
      () => {
        const meta = document.createElement("meta");
        meta.name = "twitter:title";
        return meta;
      },
      metadata.title,
    );
    setMeta(
      'meta[name="twitter:description"]',
      () => {
        const meta = document.createElement("meta");
        meta.name = "twitter:description";
        return meta;
      },
      metadata.description,
    );
    setLink(
      'link[rel="canonical"]',
      () => {
        const link = document.createElement("link");
        link.rel = "canonical";
        return link;
      },
      metadata.canonicalUrl,
    );

    document
      .querySelectorAll('link[rel="alternate"]')
      .forEach((element) => element.remove());

    metadata.alternates.forEach((alternate) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = alternate.hreflang;
      link.href = alternate.href;
      link.dataset.hreflangManaged = "true";
      document.head.append(link);
    });
  }, [lang, pageId]);

  return null;
}
