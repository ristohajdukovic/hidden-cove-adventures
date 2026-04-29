import { useI18n } from "@/i18n/I18nProvider";
import { waLink } from "@/lib/business";
import heroImg from "@/assets/hero-cove.jpg";
import { ArrowRight } from "@/components/icons/HandDrawn";

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="hero" className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 flex flex-col gap-7 anim-fade-up">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-olive/40" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-olive uppercase">
              {t.hero.eyebrow}
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-[5.25rem] xl:text-[6rem] font-medium leading-[0.95] tracking-tight text-adriatic text-balance">
            {t.hero.titleA}
            <span className="italic font-light text-olive">{t.hero.titleItalic}</span>
            {t.hero.titleB}
          </h1>

          <p className="text-base md:text-lg text-adriatic/70 max-w-[52ch] leading-relaxed">
            {t.hero.sub}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-apricot text-adriatic px-7 py-4 rounded-full font-semibold text-sm shadow-warm hover:shadow-card hover:-translate-y-0.5 transition-all"
            >
              {t.cta.whatsapp}
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#tours"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-sm text-adriatic bg-stone/80 border border-adriatic/10 hover:bg-stone hover:border-adriatic/30 transition-all"
            >
              {t.cta.viewTours}
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="photo-frame rotate-[1.5deg] hover:rotate-0 transition-transform duration-700">
            <div className="photo-frame-inner aspect-[4/5] w-full">
              <img
                src={heroImg}
                alt="Hidden Adriatic cove near Ulcinj with anchored wooden boat"
                width={1024}
                height={1280}
                className="w-full h-full object-cover"
                fetchPriority="high"
              />
            </div>
          </div>

          <div className="absolute -bottom-5 -left-4 md:-left-8 bg-stone p-4 rounded-full border border-adriatic/10 shadow-soft anim-float">
            <div className="size-14 rounded-full border border-dashed border-olive/50 flex items-center justify-center">
              <span className="font-display text-xs italic text-olive text-center leading-tight">
                Est.<br/>2018
              </span>
            </div>
          </div>

          <div className="hidden md:block absolute -top-4 -right-4 bg-adriatic text-stone px-4 py-2 rounded-full text-[11px] font-semibold tracking-widest uppercase rotate-3">
            Small groups · max 8
          </div>
        </div>
      </div>
    </section>
  );
}
