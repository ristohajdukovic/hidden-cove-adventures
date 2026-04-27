import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { waLink } from "@/lib/business";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#tours", label: t.nav.tours },
    { href: "#route", label: t.nav.route },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-sand/85 backdrop-blur-xl border-b border-adriatic/10" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between py-4 md:py-5">
        <a href="#" className="flex items-center gap-2 group">
          <span className="size-8 rounded-full bg-adriatic flex items-center justify-center">
            <span className="size-3 rounded-full bg-apricot" />
          </span>
          <span className="font-display text-xl md:text-2xl text-adriatic font-medium tracking-tight">
            Hidden Cove <span className="italic font-light text-olive">Ulcinj</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium tracking-wide text-adriatic/80 hover:text-apricot transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <LanguageSwitcher className="hidden md:flex" />
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex bg-adriatic text-stone px-5 py-2.5 rounded-full text-sm font-medium hover:bg-olive transition-colors"
          >
            {t.cta.whatsapp}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden size-10 rounded-full bg-stone border border-adriatic/10 flex items-center justify-center text-adriatic"
            aria-label="Menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-stone border-t border-adriatic/10">
          <div className="container py-6 flex flex-col gap-4">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-adriatic"
              >
                {n.label}
              </a>
            ))}
            <div className="pt-4 border-t border-adriatic/10 flex items-center justify-between">
              <LanguageSwitcher />
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-adriatic text-stone px-5 py-2.5 rounded-full text-sm font-medium"
              >
                {t.cta.whatsapp}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
