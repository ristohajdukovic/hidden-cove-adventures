import { useI18n } from "@/i18n/I18nProvider";
import { waLink } from "@/lib/business";
import hiddenImg from "@/assets/tour-hidden-beach.jpg";
import sunsetImg from "@/assets/tour-sunset-bbq.jpg";
import moonImg from "@/assets/tour-moonlight.jpg";
import privateImg from "@/assets/tour-private.jpg";
import { ArrowUpRight, Clock, Users } from "@/components/icons/HandDrawn";

export function Tours() {
  const { t } = useI18n();
  const tours = t.tours;

  return (
    <section id="tours" className="container py-20 md:py-28">
      <div className="flex flex-col gap-3 mb-12 max-w-2xl">
        <span className="text-[11px] font-semibold tracking-[0.2em] text-olive uppercase">
          {t.toursSection.eyebrow}
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-adriatic text-balance">
          {t.toursSection.title}
        </h2>
        <p className="text-adriatic/70 text-lg">{t.toursSection.sub}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:auto-rows-fr">
        {/* Feature: Classic Tour 2x2 */}
        <a
          href={waLink(`Hi! I'd like to know more about: ${tours.hidden.name}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="group md:col-span-2 md:row-span-2 photo-frame flex flex-col hover:-translate-y-1 transition-transform duration-500"
        >
          <div className="photo-frame-inner relative aspect-[4/3] md:aspect-auto md:h-[28rem] w-full mb-5">
            <img src={hiddenImg} alt={tours.hidden.name} loading="lazy" width={1024} height={768}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-4 left-4 bg-stone/90 backdrop-blur px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wide text-adriatic">
              {tours.hidden.tagline}
            </div>
            <div className="absolute top-4 right-4 size-10 rounded-full bg-stone/90 backdrop-blur flex items-center justify-center text-adriatic group-hover:bg-apricot transition-colors">
              <ArrowUpRight className="size-4" />
            </div>
          </div>
          <div className="px-5 pb-5 flex flex-col gap-3 flex-1 justify-end">
            <h3 className="font-display text-3xl md:text-4xl font-medium text-adriatic text-balance">
              {tours.hidden.name}
            </h3>
            <p className="text-adriatic/70 leading-relaxed max-w-[52ch]">{tours.hidden.desc}</p>
            <IncludedList items={tours.hidden.included} />
            {tours.hidden.note && (
              <p className="text-[11px] italic text-adriatic/50">{tours.hidden.note}</p>
            )}
            <TourMeta duration={tours.hidden.duration} group={tours.hidden.group} price={tours.hidden.price} />
          </div>
        </a>

        {/* BBQ Tour — wide */}
        <a
          href={waLink(`Hi! I'd like to know more about: ${tours.sunset.name}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="group md:col-span-2 photo-frame flex flex-col md:flex-row gap-5 hover:-translate-y-1 transition-transform duration-500"
        >
          <div className="photo-frame-inner aspect-[4/3] md:aspect-square md:w-2/5 shrink-0">
            <img src={sunsetImg} alt={tours.sunset.name} loading="lazy" width={1024} height={1024}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="flex-1 px-5 pb-5 md:py-6 md:pr-6 flex flex-col gap-3 justify-center">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-apricot uppercase">{tours.sunset.tagline}</span>
            <h3 className="font-display text-2xl md:text-3xl font-medium text-adriatic">{tours.sunset.name}</h3>
            <p className="text-sm text-adriatic/70 leading-relaxed line-clamp-3">{tours.sunset.desc}</p>
            <IncludedList items={tours.sunset.included} compact />
            {tours.sunset.note && (
              <p className="text-[11px] italic text-adriatic/50">{tours.sunset.note}</p>
            )}
            <TourMeta duration={tours.sunset.duration} group={tours.sunset.group} price={tours.sunset.price} compact />
          </div>
        </a>

        {/* Sunset Tour */}
        <a
          href={waLink(`Hi! I'd like to know more about: ${tours.moonlight.name}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="group photo-frame flex flex-col hover:-translate-y-1 transition-transform duration-500"
        >
          <div className="photo-frame-inner aspect-[4/3] w-full mb-4">
            <img src={moonImg} alt={tours.moonlight.name} loading="lazy" width={1024} height={768}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="px-4 pb-4 flex flex-col flex-1 gap-2">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-sea uppercase">{tours.moonlight.tagline}</span>
            <h3 className="font-display text-xl font-medium text-adriatic">{tours.moonlight.name}</h3>
            <p className="text-xs text-adriatic/70 leading-relaxed line-clamp-2">{tours.moonlight.desc}</p>
            <IncludedList items={tours.moonlight.included} compact />
            {tours.moonlight.note && (
              <p className="text-[11px] italic text-adriatic/50">{tours.moonlight.note}</p>
            )}
            <div className="mt-auto pt-3 flex items-baseline justify-between border-t border-adriatic/10">
              {tours.moonlight.duration && (
                <span className="text-[10px] uppercase tracking-widest text-adriatic/40 font-semibold">{tours.moonlight.duration}</span>
              )}
              <span className="text-sm font-semibold text-olive tabular-nums ml-auto">{tours.moonlight.price}</span>
            </div>
          </div>
        </a>

        {/* Moonlight Tour — Coming Soon */}
        <div className="group relative rounded-[2rem] p-2.5 border border-adriatic/10 shadow-card overflow-hidden hover:-translate-y-1 transition-transform duration-500 bg-sand-deep">
          <div className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none">
            <img src={privateImg} alt="" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 flex flex-col h-full bg-stone/70 backdrop-blur-md rounded-[1.5rem] p-5 outline outline-1 outline-white/40 -outline-offset-1">
            <div className="size-10 rounded-full bg-stone border border-adriatic/10 flex items-center justify-center mb-4 shadow-soft">
              <div className="size-3 border-2 border-sea rounded-full" />
            </div>
            <span className="text-[11px] font-semibold tracking-[0.2em] text-olive uppercase mb-1">{tours.private.tagline}</span>
            <h3 className="font-display text-xl font-medium text-adriatic mb-2">{tours.private.name}</h3>
            <p className="text-xs text-adriatic/80 leading-relaxed mb-4 line-clamp-3">{tours.private.desc}</p>
            <div className="mt-auto">
              <span className="inline-block text-xs font-semibold text-olive tabular-nums bg-stone/60 backdrop-blur px-3 py-1.5 rounded-full">
                {tours.private.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IncludedList({ items, compact = false }: { items: string[]; compact?: boolean }) {
  if (items.length === 0) return null;
  return (
    <ul className={`grid gap-1 mt-1 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"} gap-x-4`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-1.5 text-xs text-adriatic/70">
          <span className="mt-1.5 size-1 rounded-full bg-apricot shrink-0" />
          <span className="leading-snug">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TourMeta({ duration, group, price, compact = false }: { duration: string; group: string; price: string; compact?: boolean }) {
  return (
    <div className={`flex items-center gap-5 ${compact ? "mt-2" : "mt-4 border-t border-adriatic/10 pt-4"}`}>
      <div className="flex items-center gap-1.5 text-adriatic/70">
        <Clock className="size-3.5" />
        <span className="text-xs font-medium tabular-nums">{duration}</span>
      </div>
      <div className="flex items-center gap-1.5 text-adriatic/70">
        <Users className="size-3.5" />
        <span className="text-xs font-medium tabular-nums">{group}</span>
      </div>
      <div className="ml-auto text-right">
        <span className="text-sm md:text-base font-semibold text-olive tabular-nums">{price}</span>
      </div>
    </div>
  );
}
