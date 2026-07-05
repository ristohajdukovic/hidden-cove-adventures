import { useI18n } from "@/i18n/I18nContext";
import smallBoatIcon from "@/assets/icons/mediterranean/01-small-boat-transparent.png";
import hiddenCoveIcon from "@/assets/icons/mediterranean/02-hidden-cove-transparent.png";
import mediterraneanHospitalityIcon from "@/assets/icons/mediterranean/03-mediterranean-hospitality-transparent.png";
import easyBookingIcon from "@/assets/icons/mediterranean/04-easy-boat-tour-booking-transparent.png";

// Index aligns with translations.ts why.items order:
// 0: Small groups, 1: Coves locals know,
// 2: Simple honest hospitality, 3: Easy WhatsApp booking.
const ICONS = [
  { src: smallBoatIcon, className: "feature-card__icon--boat" },
  { src: hiddenCoveIcon, className: "feature-card__icon--cove" },
  {
    src: mediterraneanHospitalityIcon,
    className: "feature-card__icon--hospitality",
  },
  { src: easyBookingIcon, className: "feature-card__icon--booking" },
];

export function Why() {
  const { t } = useI18n();
  return (
    <section id="included" className="bg-stone py-20 md:py-28 texture-stone">
      <div className="container">
        <div className="flex flex-col gap-3 mb-12 max-w-2xl">
          <span className="text-[11px] font-semibold tracking-[0.2em] text-olive uppercase">{t.why.eyebrow}</span>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-adriatic text-balance">
            {t.why.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.why.items.map((item, i) => {
            const icon = ICONS[i] ?? ICONS[0];
            return (
              <div key={i} className="bg-sand rounded-[1.75rem] p-6 border border-adriatic/5 hover:border-adriatic/15 transition-colors">
                <div
                  className={`feature-card__icon ${icon.className}`}
                  aria-hidden="true"
                >
                  <img
                    src={icon.src}
                    alt=""
                    aria-hidden="true"
                    width={1254}
                    height={1254}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                </div>
                <h3 className="font-display text-xl text-adriatic mb-2">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-adriatic/75">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
