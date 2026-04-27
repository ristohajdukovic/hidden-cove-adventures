import { useI18n } from "@/i18n/I18nProvider";
import oldtown from "@/assets/gallery-oldtown.jpg";
import valdanos from "@/assets/gallery-valdanos.jpg";
import swim from "@/assets/gallery-swim.jpg";
import drinks from "@/assets/gallery-drinks.jpg";
import hidden from "@/assets/tour-hidden-beach.jpg";
import sunset from "@/assets/tour-sunset-bbq.jpg";

export function Gallery() {
  const { t } = useI18n();
  const items = [
    { src: oldtown, alt: "Ulcinj Old Town walls", w: 1024, h: 768, span: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" },
    { src: swim, alt: "Underwater Adriatic", w: 1024, h: 768, span: "aspect-square" },
    { src: valdanos, alt: "Valdanos bay", w: 1024, h: 1024, span: "aspect-square" },
    { src: hidden, alt: "Hidden beach", w: 1024, h: 768, span: "md:col-span-2 aspect-[2/1]" },
    { src: sunset, alt: "Sunset BBQ on the beach", w: 1024, h: 1024, span: "aspect-square" },
    { src: drinks, alt: "Cold drinks on board", w: 1024, h: 1024, span: "aspect-square" },
  ];
  return (
    <section id="gallery" className="container py-20 md:py-28">
      <div className="flex flex-col gap-3 mb-12 max-w-2xl">
        <span className="text-[11px] font-semibold tracking-[0.2em] text-olive uppercase">{t.gallery.eyebrow}</span>
        <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-adriatic">
          {t.gallery.title}
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {items.map((it, i) => (
          <div key={i} className={`${it.span} rounded-2xl overflow-hidden bg-sand-deep relative group`}>
            <img src={it.src} alt={it.alt} loading="lazy" width={it.w} height={it.h}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        ))}
      </div>
    </section>
  );
}
