import { business, hasPhone, hasWhatsApp, telLink, waLink } from "@/lib/business";
import { useI18n } from "@/i18n/I18nContext";
import { localizedPath } from "@/i18n/locales";

type FooterLink = {
  label: "tours" | "included" | "route" | "gallery" | "faq";
  href: string;
};

const footerNavigation: FooterLink[] = [
  { label: "tours", href: "#tours" },
  { label: "included", href: "#included" },
  { label: "route", href: "#route" },
  { label: "gallery", href: "#gallery" },
  { label: "faq", href: "#faq" },
];

export function Footer() {
  const { lang, t } = useI18n();
  const currentYear = new Date().getFullYear();
  const bookingHref = waLink(t.whatsapp.general);
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
            target={hasWhatsApp ? "_blank" : undefined}
            rel={hasWhatsApp ? "noopener noreferrer" : undefined}
          >
            {hasWhatsApp ? t.cta.whatsapp : t.footer.bookFallback}
          </a>
        </div>

        <div className="site-footer__column">
          <span className="footer-label">{t.footer.explore}</span>

          {footerNavigation.map((item) => (
            <a key={item.href} href={localizedPath(lang, item.href)}>
              {footerLabelByKey[item.label]}
            </a>
          ))}
        </div>
      </div>

      <div className="site-footer__wordmark" aria-hidden="true">
        Hidden Cove Adventures
      </div>

      <div className="site-footer__bottom">
        <span>&copy; {currentYear} Hidden Cove Adventures</span>
        <span>{t.footer.bottomTagline}</span>
        <span>{t.footer.bottomPlaces}</span>
      </div>
    </footer>
  );
}
