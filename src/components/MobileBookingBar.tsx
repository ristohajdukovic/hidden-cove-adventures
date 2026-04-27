import { useI18n } from "@/i18n/I18nProvider";
import { waLink, telLink } from "@/lib/business";
import { MessageCircle, Phone, Calendar } from "lucide-react";

export function MobileBookingBar() {
  const { t } = useI18n();
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-stone/95 backdrop-blur-xl border-t border-adriatic/10 safe-bottom">
      <div className="grid grid-cols-3 gap-2 p-3">
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2.5 rounded-2xl bg-olive text-stone text-[11px] font-semibold tracking-wide"
        >
          <MessageCircle className="size-5" />
          WhatsApp
        </a>
        <a
          href={telLink()}
          className="flex flex-col items-center justify-center gap-1 py-2.5 rounded-2xl bg-stone border border-adriatic/15 text-adriatic text-[11px] font-semibold tracking-wide"
        >
          <Phone className="size-5" />
          {t.cta.call}
        </a>
        <a
          href={waLink("Hi! I'd like to book a boat tour.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2.5 rounded-2xl bg-apricot text-adriatic text-[11px] font-semibold tracking-wide"
        >
          <Calendar className="size-5" />
          {t.cta.book}
        </a>
      </div>
    </div>
  );
}
