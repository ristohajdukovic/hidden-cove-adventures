import { useI18n } from "@/i18n/I18nProvider";
import sunsetImg from "@/assets/tour-sunset-bbq.jpg";
import moonImg from "@/assets/tour-moonlight.jpg";
import { Sun, Moon } from "lucide-react";

export function Evening() {
  const { t } = useI18n();
  return (
    <section className="container py-20 md:py-28">
      <div className="flex flex-col gap-3 mb-12 max-w-2xl">
        <span className="text-[11px] font-semibold tracking-[0.2em] text-olive uppercase">{t.evening.eyebrow}</span>
        <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-adriatic text-balance">
          {t.evening.title}
        </h2>
        <p className="text-adriatic/70 text-lg">{t.evening.body}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="photo-frame flex flex-col">
          <div className="photo-frame-inner aspect-[5/4] mb-5">
            <img src={sunsetImg} alt="Sunset cove" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
          </div>
          <div className="px-5 pb-5 flex items-start gap-4">
            <div className="size-10 rounded-full bg-apricot/20 text-apricot flex items-center justify-center shrink-0">
              <Sun className="size-5" />
            </div>
            <p className="text-adriatic/80 leading-relaxed">{t.evening.sunset}</p>
          </div>
        </div>
        <div className="photo-frame flex flex-col">
          <div className="photo-frame-inner aspect-[5/4] mb-5">
            <img src={moonImg} alt="Moonlight bonfire" loading="lazy" width={1024} height={768} className="w-full h-full object-cover" />
          </div>
          <div className="px-5 pb-5 flex items-start gap-4">
            <div className="size-10 rounded-full bg-sea/15 text-sea flex items-center justify-center shrink-0">
              <Moon className="size-5" />
            </div>
            <p className="text-adriatic/80 leading-relaxed">{t.evening.moon}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
