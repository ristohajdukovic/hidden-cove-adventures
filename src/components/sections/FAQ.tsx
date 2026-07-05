import { useI18n } from "@/i18n/I18nContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { createFaqItems, type FaqItem } from "@/data/faq";
import { waLink } from "@/lib/business";

function renderAnswer(item: FaqItem, highlightPhrase: string) {
  if (item.id !== "bbq-food") {
    return item.answer;
  }

  const index = item.answer.lastIndexOf(highlightPhrase);

  if (index === -1) {
    return item.answer;
  }

  return (
    <>
      {item.answer.slice(0, index)}
      <strong className="font-semibold text-adriatic">{highlightPhrase}</strong>
      {item.answer.slice(index + highlightPhrase.length)}
    </>
  );
}

export function FAQ() {
  const { lang, t } = useI18n();
  const faqItems = createFaqItems(t, waLink(t.whatsapp.general), lang);

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
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-b border-adriatic/15">
                <AccordionTrigger
                  id={`faq-question-${item.id}`}
                  aria-controls={`faq-answer-${item.id}`}
                  className="min-h-[52px] py-5 text-left font-display text-[clamp(18px,5vw,23px)] leading-[1.2] text-adriatic hover:no-underline"
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent
                  forceMount
                  id={`faq-answer-${item.id}`}
                  aria-labelledby={`faq-question-${item.id}`}
                  className="pb-6 text-[clamp(15px,3.8vw,17px)] leading-[1.65] text-adriatic/75"
                >
                  <p>{renderAnswer(item, t.faq.highlightPhrase)}</p>

                  {item.links?.length ? (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {item.links.map((link) => (
                        <a
                          key={`${item.id}-${link.label}`}
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noopener noreferrer" : undefined}
                          className="inline-flex min-h-11 items-center rounded-full border border-adriatic/20 px-4 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-adriatic transition-colors hover:border-adriatic/45 hover:bg-adriatic/5"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
