import { useI18n } from "@/i18n/I18nProvider";

export function Route() {
  const { t } = useI18n();
  return (
    <section id="route" className="container py-20 md:py-28">
      <div className="flex flex-col gap-3 mb-14 max-w-3xl">
        <span className="text-[11px] font-semibold tracking-[0.2em] text-olive uppercase">{t.route.eyebrow}</span>
        <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-adriatic text-balance leading-[1.1]">
          {t.route.title}
        </h2>
        <p className="text-adriatic/70 text-lg">{t.route.sub}</p>
      </div>

      <div className="relative">
        {/* Dashed line */}
        <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px border-t border-dashed border-olive/40" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
          {t.route.stops.map((s, i) => (
            <div key={i} className="flex flex-col items-start md:items-center md:text-center">
              <div className="size-14 rounded-full bg-stone border border-adriatic/10 flex items-center justify-center mb-5 shadow-soft relative z-10">
                <span className="font-display italic text-olive text-lg">{i + 1}</span>
              </div>
              <h3 className="font-display text-xl text-adriatic mb-2">{s.title}</h3>
              <p className="text-sm text-adriatic/70 leading-relaxed max-w-[28ch]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
