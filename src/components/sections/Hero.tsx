import { useI18n } from "@/i18n/I18nContext";
import { getLocalizedHref } from "@/i18n/routes";
import { WhatsAppLink } from "@/components/actions/WhatsAppLink";
import heroImg from "@/assets/hero-cove.jpg";
import { ArrowRight } from "@/components/icons/HandDrawn";
import { cn } from "@/lib/utils";

const WORD_STAGGER_S = 0.05;

function splitWords(text: string) {
  return text.trim().split(/\s+/);
}

export function Hero() {
  const { lang, t } = useI18n();

  const titleWords = [
    ...splitWords(t.hero.titleA).map((word) => ({ word, italic: false })),
    ...splitWords(t.hero.titleItalic).map((word) => ({ word, italic: true })),
    ...splitWords(t.hero.titleB).map((word) => ({ word, italic: false })),
  ];

  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28 lg:min-h-[calc(100svh-2rem)]"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 flex flex-col gap-7">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-[5.25rem] xl:text-[6rem] font-medium leading-[0.95] tracking-tight text-adriatic text-balance">
            {titleWords.map(({ word, italic }, i) => (
              <span key={i}>
                <span
                  className={cn("inline-block anim-word", italic && "italic font-light text-olive")}
                  style={{ animationDelay: `${i * WORD_STAGGER_S}s` }}
                >
                  {word}
                </span>
                {i < titleWords.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>

          <div
            className="flex flex-col gap-7 anim-fade-up"
            style={{ animationDelay: `${titleWords.length * WORD_STAGGER_S + 0.15}s` }}
          >
            <p className="text-base md:text-lg text-adriatic/70 max-w-[52ch] leading-relaxed">
              {t.hero.sub}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <WhatsAppLink
                locale={lang}
                messageKey="generalBooking"
                ariaLabel={t.aria.bookTrip}
                className="inline-flex items-center gap-2 bg-apricot text-adriatic px-7 py-4 rounded-full font-semibold text-sm shadow-warm hover:shadow-card hover:-translate-y-0.5 transition-all"
              >
                {t.cta.whatsapp}
                <ArrowRight className="size-4" />
              </WhatsAppLink>
              <a
                href={getLocalizedHref("tours", lang)}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-sm text-adriatic bg-stone/80 border border-adriatic/10 hover:bg-stone hover:border-adriatic/30 transition-all"
              >
                {t.cta.viewTours}
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="photo-frame rotate-[1.5deg] hover:rotate-0 transition-transform duration-700">
            <div className="photo-frame-inner aspect-[4/5] w-full">
              <img
                src={heroImg}
                alt={t.hero.imageAlt}
                width={1024}
                height={1280}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="absolute -bottom-5 left-3 lg:-left-8 bg-stone p-4 rounded-full border border-adriatic/10 shadow-soft anim-float">
            <div className="size-14 rounded-full border border-dashed border-olive/50 flex items-center justify-center">
              <span className="font-display text-xs italic text-olive text-center leading-tight">
                {t.hero.established}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
