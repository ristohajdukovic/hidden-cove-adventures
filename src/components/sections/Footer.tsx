import { BRAND_NAME, business, createWhatsAppUrl, hasPhone, hasWhatsApp, telLink } from "@/lib/business";
import { useI18n } from "@/i18n/I18nContext";
import type { Lang } from "@/i18n/locales";
import { getHomeSectionHref, getLocalizedHref } from "@/i18n/routes";

type FooterLink = {
  label: "tours" | "included" | "route" | "gallery" | "faq";
  href: (lang: Lang) => string;
};

const footerNavigation: FooterLink[] = [
  { label: "tours", href: (lang) => getLocalizedHref("tours", lang) },
  { label: "included", href: (lang) => getHomeSectionHref(lang, "#included") },
  { label: "route", href: (lang) => getHomeSectionHref(lang, "#route") },
  { label: "gallery", href: (lang) => getHomeSectionHref(lang, "#gallery") },
  { label: "faq", href: (lang) => getHomeSectionHref(lang, "#faq") },
];

export function Footer() {
  const { lang, t } = useI18n();
  const currentYear = new Date().getFullYear();
  const bookingHref = createWhatsAppUrl({
    locale: lang,
    messageKey: "generalBooking",
  });
  const phoneHref = hasPhone ? telLink() : "";
  const footerLabelByKey = {
    tours: t.nav.tours,
    included: t.nav.included,
    route: t.nav.route,
    gallery: t.nav.gallery,
    faq: t.nav.faq,
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <p className="site-footer__pitch">
          {t.footer.pitch} <em>{t.footer.pitchEmphasis}</em>
        </p>

        <div className="site-footer__column">
          <span className="footer-label">{t.footer.findUs}</span>

          <p>
            Valdanos
            <br />
            {t.footer.city}
          </p>

          {business.email ? <a href={`mailto:${business.email}`}>{business.email}</a> : null}

          {phoneHref ? <a href={phoneHref}>{business.phone}</a> : null}

          <a
            href={bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.aria.bookTrip}
          >
            {hasWhatsApp ? t.cta.whatsapp : t.footer.bookFallback}
          </a>
        </div>

        <div className="site-footer__column">
          <span className="footer-label">{t.footer.explore}</span>

          {footerNavigation.map((item) => (
            <a key={item.label} href={item.href(lang)}>
              {footerLabelByKey[item.label]}
            </a>
          ))}
        </div>
      </div>

      <div className="site-footer__wordmark" aria-hidden="true">
        {BRAND_NAME}
      </div>

      <div className="site-footer__bottom">
        <span>&copy; {currentYear} {BRAND_NAME}</span>
        <span>{t.footer.bottomTagline}</span>
        <span>{t.footer.bottomPlaces}</span>
      </div>
    </footer>
  );
}
