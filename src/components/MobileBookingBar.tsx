import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/I18nContext";
import { createWhatsAppUrl } from "@/lib/business";
import { Calendar } from "@/components/icons/HandDrawn";

export function MobileBookingBar() {
  const { lang, t } = useI18n();
  const [show, setShow] = useState(false);
  const bookingHref = createWhatsAppUrl({
    locale: lang,
    messageKey: "generalBooking",
  });

  useEffect(() => {
    const compute = () => {
      const hero = document.getElementById("hero");
      const threshold = hero
        ? hero.getBoundingClientRect().bottom + window.scrollY - 80
        : window.innerHeight * 0.8;
      setShow(window.scrollY > threshold);
    };
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-50 bg-stone/95 backdrop-blur-xl border-t border-adriatic/10 safe-bottom transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
      aria-hidden={!show}
    >
      <div className="p-3">
        <a
          href={bookingHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.aria.bookTrip}
          className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-adriatic px-5 py-3 text-sm font-semibold tracking-wide text-stone"
        >
          <Calendar className="size-5" />
          {t.cta.book}
        </a>
      </div>
    </div>
  );
}
