import { useI18n } from "@/i18n/I18nProvider";
import iconCove from "@/assets/icon-cove.png";
import iconBoat from "@/assets/icon-boat.png";
import iconBbq from "@/assets/icon-bbq.png";
import iconBonfire from "@/assets/icon-bonfire.png";

// Index aligns with translations.ts why.items order:
// 0: Small groups → boat, 1: Coves locals know → cove,
// 2: Simple honest hospitality → bbq, 3: Easy WhatsApp booking → bonfire (with chat bubble)
const ICONS = [iconBoat, iconCove, iconBbq, iconBonfire];

export function Why() {
  const { t } = useI18n();
  return (
    <section className="bg-stone py-20 md:py-28 texture-stone">
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
              <div className="h-28 -mx-2 mb-4 flex items-end justify-start">
                <img
                  src={icon}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-full w-auto object-contain mix-blend-multiply select-none"
                  draggable={false}
                />
                </div>
                <h3 className="font-display text-xl text-adriatic mb-2">{item.title}</h3>
                <p className="text-sm text-adriatic/70 leading-relaxed">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
