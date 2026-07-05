import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "@/i18n/I18nContext";
import { getHomeSectionHref, getLocalizedHref } from "@/i18n/routes";
import { BRAND_NAME, hasWhatsApp, waLink } from "@/lib/business";

type NavigationItem = {
  label: string;
  href: string;
  hash?: string;
};

export function Header() {
  const { lang, t } = useI18n();
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const bookingHref = waLink(t.whatsapp.general);
  const navigationItems: NavigationItem[] = [
    { label: t.nav.tours, href: getLocalizedHref("tours", lang) },
    { label: t.nav.included, href: getHomeSectionHref(lang, "#included"), hash: "#included" },
    { label: t.nav.route, href: getHomeSectionHref(lang, "#route"), hash: "#route" },
    { label: t.nav.gallery, href: getHomeSectionHref(lang, "#gallery"), hash: "#gallery" },
    { label: t.nav.faq, href: getHomeSectionHref(lang, "#faq"), hash: "#faq" },
  ];

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setVisible(true);
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleEscape);
    handleScroll();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleAnchorClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
    hash?: string,
  ) => {
    if (!hash) {
      setMenuOpen(false);
      return;
    }

    const linkUrl = new URL(href, window.location.href);

    if (linkUrl.pathname !== window.location.pathname) {
      setMenuOpen(false);
      return;
    }

    const target = document.querySelector(hash);

    if (!target) {
      return;
    }

    event.preventDefault();
    setMenuOpen(false);

    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <>
      <header
        className={[
          "site-header",
          visible ? "is-visible" : "",
          scrolled ? "is-scrolled" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="header-pill">
          <a
            className="header-brand"
            href={getHomeSectionHref(lang, "#top")}
            aria-label={t.aria.home}
            onClick={(event) => handleAnchorClick(event, getHomeSectionHref(lang, "#top"), "#top")}
          >
            <img src="/favicon.ico" alt="" width={40} height={40} />
            <span>{BRAND_NAME}</span>
          </a>

          <nav className="desktop-navigation" aria-label={t.aria.mainNavigation}>
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleAnchorClick(event, item.href, item.hash)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <LanguageSwitcher className="header-language-switcher" />
            <a
              className="header-booking-button"
              href={bookingHref}
              target={hasWhatsApp ? "_blank" : undefined}
              rel={hasWhatsApp ? "noopener noreferrer" : undefined}
              aria-label={
                hasWhatsApp ? `${t.aria.bookTrip} ${t.cta.whatsapp}` : t.aria.bookTrip
              }
            >
              <span className="sliding-label">
                <span>{t.cta.bookTrip}</span>
                <span aria-hidden="true">{t.cta.bookTrip}</span>
              </span>

              <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M1 11 11 1M4 1h7v7" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </a>

            <button
              ref={menuButtonRef}
              className="mobile-menu-button"
              type="button"
              aria-label={menuOpen ? t.aria.closeMenu : t.aria.openMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((current) => !current)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-navigation"
        className={["mobile-navigation", menuOpen ? "is-open" : ""].filter(Boolean).join(" ")}
        aria-hidden={!menuOpen}
      >
        <nav aria-label={t.aria.mobileNavigation}>
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={(event) => handleAnchorClick(event, item.href, item.hash)}
            >
              {item.label}
            </a>
          ))}

          <a
            className="mobile-navigation__book"
            href={bookingHref}
            target={hasWhatsApp ? "_blank" : undefined}
            rel={hasWhatsApp ? "noopener noreferrer" : undefined}
            tabIndex={menuOpen ? 0 : -1}
          >
            {t.cta.book}
          </a>

          <LanguageSwitcher className="mobile-language-switcher" />
        </nav>
      </div>
    </>
  );
}
