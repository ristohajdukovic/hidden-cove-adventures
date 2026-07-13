import { useI18n } from "@/i18n/I18nContext";
import oldtown from "@/assets/ulcinj_old_town_sunset.webp";
import valdanos from "@/assets/old_town.jpg";
import swim from "@/assets/swim.jpg";
import drinks from "@/assets/beer_beach.jpg";
import hidden from "@/assets/tour-hidden-beach.jpg";
import sunset from "@/assets/sunset_boat.jpg";

export function Gallery() {
  const { t } = useI18n();
  const items = [
    {
      src: oldtown,
      alt: t.gallery.items[0].alt,
      w: 1024,
      h: 768,
      span: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto",
    },
    {
      src: swim,
      alt: t.gallery.items[1].alt,
      w: 1024,
      h: 768,
      span: "aspect-square",
    },
    {
      src: valdanos,
      alt: t.gallery.items[2].alt,
      w: 1024,
      h: 1024,
      span: "aspect-square",
    },
    {
      src: hidden,
      alt: t.gallery.items[3].alt,
      w: 1024,
      h: 768,
      span: "md:col-span-2 aspect-[2/1]",
    },
    {
      src: sunset,
      alt: t.gallery.items[4].alt,
      w: 1024,
      h: 1024,
      span: "aspect-square",
    },
    {
      src: drinks,
      alt: t.gallery.items[5].alt,
      w: 1024,
      h: 1024,
      span: "aspect-square",
    },
  ];
  return (
    <section id="gallery" className="container py-20 md:py-28">
      <div className="flex flex-col gap-3 mb-12 max-w-2xl">
        <span className="text-[11px] font-semibold tracking-[0.2em] text-olive uppercase">
          {t.gallery.eyebrow}
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-adriatic">
          {t.gallery.title}
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {items.map((it, i) => (
          <div
            key={i}
            className={`${it.span} rounded-2xl overflow-hidden bg-sand-deep relative group`}
          >
            <img
              src={it.src}
              alt={it.alt}
              loading="lazy"
              width={it.w}
              height={it.h}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
