import { useI18n, LANGS } from "@/i18n/I18nProvider";
import { business, waLink, telLink } from "@/lib/business";
import { Instagram, Facebook, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const { t, setLang, lang } = useI18n();
  return (
    <footer className="bg-adriatic text-stone pt-16 pb-28 md:pb-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2 max-w-md">
          <div className="flex items-center gap-2 mb-4">
            <span className="size-8 rounded-full bg-stone/10 flex items-center justify-center">
              <span className="size-3 rounded-full bg-apricot" />
            </span>
            <span className="font-display text-2xl text-stone font-medium">
              Hidden Cove <span className="italic font-light text-apricot">Ulcinj</span>
            </span>
          </div>
          <p className="text-stone/70 text-sm leading-relaxed">{t.footer.tagline}</p>
          <div className="flex gap-3 mt-6">
            <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="size-10 rounded-full bg-stone/5 hover:bg-apricot hover:text-adriatic flex items-center justify-center transition-colors">
              <Instagram className="size-4" />
            </a>
            <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="size-10 rounded-full bg-stone/5 hover:bg-apricot hover:text-adriatic flex items-center justify-center transition-colors">
              <Facebook className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[11px] font-semibold tracking-[0.2em] text-apricot uppercase mb-5">{t.footer.contact}</h4>
          <ul className="space-y-3 text-sm">
            <li><a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-stone/80 hover:text-apricot transition-colors"><MessageCircle className="size-4" /> WhatsApp</a></li>
            <li><a href={telLink()} className="flex items-center gap-2 text-stone/80 hover:text-apricot transition-colors"><Phone className="size-4" /> {business.phone}</a></li>
            <li><a href={`mailto:${business.email}`} className="flex items-center gap-2 text-stone/80 hover:text-apricot transition-colors"><Mail className="size-4" /> {business.email}</a></li>
            <li className="flex items-center gap-2 text-stone/80"><MapPin className="size-4" /> {business.city}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-semibold tracking-[0.2em] text-apricot uppercase mb-5">{t.footer.languages}</h4>
          <ul className="space-y-2 text-sm">
            {LANGS.map((l) => (
              <li key={l.code}>
                <button
                  onClick={() => setLang(l.code)}
                  className={`text-stone/80 hover:text-apricot transition-colors ${lang === l.code ? "text-apricot" : ""}`}
                >
                  {l.code === "en" && "English"}
                  {l.code === "de" && "Deutsch"}
                  {l.code === "sr" && "Srpski / Bosanski / Crnogorski"}
                  {l.code === "sq" && "Shqip"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t border-stone/10 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-stone/50">
        <span>© {new Date().getFullYear()} {business.name}. {t.footer.rights}</span>
        <span>Ulcinj · Valdanos · Adriatic</span>
      </div>
    </footer>
  );
}
