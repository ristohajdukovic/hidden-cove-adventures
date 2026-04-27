import { useI18n } from "@/i18n/I18nProvider";
import { Anchor, Users, Heart, MessageCircle } from "@/components/icons/HandDrawn";

const ICONS = [Users, Anchor, Heart, MessageCircle];

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
            const Icon = ICONS[i] ?? Users;
            return (
              <div key={i} className="bg-sand rounded-[1.75rem] p-6 border border-adriatic/5 hover:border-adriatic/15 transition-colors">
                <div className="size-11 rounded-full bg-stone border border-adriatic/10 flex items-center justify-center mb-5 text-olive">
                  <Icon className="size-5" />
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
