import { useI18n } from "@/i18n/I18nProvider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ() {
  const { t } = useI18n();
  return (
    <section id="faq" className="container py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 flex flex-col gap-3">
          <span className="text-[11px] font-semibold tracking-[0.2em] text-olive uppercase">{t.faq.eyebrow}</span>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-adriatic text-balance">
            {t.faq.title}
          </h2>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((it, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-adriatic/15">
                <AccordionTrigger className="font-display text-lg md:text-xl text-adriatic text-left hover:no-underline py-5">
                  {it.q}
                </AccordionTrigger>
                <AccordionContent className="text-adriatic/75 text-base leading-relaxed pb-6">
                  {it.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
