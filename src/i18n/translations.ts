export type Lang = "en" | "de" | "sr" | "sq";

export type TourKey = "hidden" | "sunset" | "moonlight" | "private";

export type TranslationKeys = {
  nav: { tours: string; route: string; gallery: string; reviews: string; faq: string };
  cta: { whatsapp: string; viewTours: string; call: string; book: string; bookNow: string };
  hero: {
    eyebrow: string;
    titleA: string;
    titleItalic: string;
    titleB: string;
    sub: string;
  };
  toursSection: { eyebrow: string; title: string; sub: string };
  tours: Record<TourKey, { name: string; tagline: string; desc: string; duration: string; group: string; price: string }>;
  why: {
    eyebrow: string; title: string;
    items: { title: string; body: string }[];
  };
  route: {
    eyebrow: string; title: string; sub: string;
    stops: { title: string; body: string }[];
  };
  bbq: { eyebrow: string; title: string; body: string; bullets: string[] };
  evening: { eyebrow: string; title: string; body: string; sunset: string; moon: string };
  privateSec: { eyebrow: string; title: string; body: string; cta: string };
  gallery: { eyebrow: string; title: string };
  reviews: { eyebrow: string; title: string; items: { name: string; from: string; text: string }[] };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  finalCta: { title: string; sub: string };
  footer: { tagline: string; contact: string; languages: string; rights: string };
};

const en: TranslationKeys = {
  nav: { tours: "Tours", route: "Route", gallery: "Gallery", reviews: "Reviews", faq: "FAQ" },
  cta: { whatsapp: "Book on WhatsApp", viewTours: "View Tours", call: "Call", book: "Book", bookNow: "Book now" },
  hero: {
    eyebrow: "N 41° 55' · E 19° 12' · Ulcinj, Montenegro",
    titleA: "Boat tours from Ulcinj to ",
    titleItalic: "hidden coves",
    titleB: " and Valdanos.",
    sub: "Swim at a hidden beach, enjoy cold drinks, simple beach BBQ, sunset views, and moonlight nights by the sea.",
  },
  toursSection: { eyebrow: "Curated journeys", title: "Choose your day on the water", sub: "Small groups. Local skipper. Real coves." },
  tours: {
    hidden: { name: "Hidden Beach Day Escape", tagline: "Full day", desc: "Sail past the Old Town walls and drop anchor at a cove only reachable by sea. Swim, snorkel, and rest on quiet pebbles.", duration: "6–7 hours", group: "Up to 8", price: "from €45 / person" },
    sunset: { name: "Sunset BBQ Cove Tour", tagline: "Late afternoon", desc: "Cruise toward Valdanos as the light turns gold. Anchor in a quiet bay, fresh grill on the beach, cold drinks in hand.", duration: "4 hours", group: "Up to 8", price: "from €55 / person" },
    moonlight: { name: "Moonlight Bonfire Tour", tagline: "Evening", desc: "Sail under the stars to a private cove. A small driftwood bonfire, local wine, the sound of the tide.", duration: "3–4 hours", group: "Up to 8", price: "from €50 / person" },
    private: { name: "Private Boat Tour", tagline: "Just your group", desc: "The boat is entirely yours. Pick the coves, the pace and the playlist. Perfect for couples, families and small groups.", duration: "Flexible", group: "Up to 8", price: "from €280 / boat" },
  },
  why: {
    eyebrow: "Why this is different",
    title: "Local skipper, small groups, real places.",
    items: [
      { title: "Small groups only", body: "Maximum 8 guests. No crowded party boats — just space to breathe, swim and talk." },
      { title: "Coves locals know", body: "We grew up on this coastline. We take you where the buses and big tours can't go." },
      { title: "Simple, honest hospitality", body: "Cold drinks, a beach BBQ, fresh fruit. Nothing fancy — exactly how summer should taste." },
      { title: "Easy WhatsApp booking", body: "No long forms. Message us, we reply fast, you show up at the harbour." },
    ],
  },
  route: {
    eyebrow: "Our route",
    title: "Ulcinj Old Town → hidden coves → Valdanos → hidden beach",
    sub: "A slow line along the most beautiful stretch of the southern Adriatic.",
    stops: [
      { title: "Ulcinj Old Town", body: "We leave the harbour and sail under the ancient stone walls." },
      { title: "Hidden coves", body: "Quiet bays carved into the cliffs, only reachable from the sea." },
      { title: "Valdanos", body: "A protected bay framed by one of Europe's oldest olive groves." },
      { title: "Hidden beach", body: "Anchor, swim, eat, repeat. Your private stop of the day." },
    ],
  },
  bbq: {
    eyebrow: "BBQ & cold drinks",
    title: "A simple beach BBQ, the way the coast does it.",
    body: "We light a small fire on the pebbles, grill what's fresh, slice some watermelon. Cold local beer, water, soft drinks and homemade lemonade are always on board.",
    bullets: [
      "Fresh local catch & vegetables on the grill",
      "Cold beer, water, soft drinks, lemonade",
      "Vegetarian options on request",
      "Bring your own bottle of wine — we bring the ice",
    ],
  },
  evening: {
    eyebrow: "Sunset & moonlight",
    title: "The coast is at its best after 6pm.",
    body: "Two ways to spend an evening on the water with us.",
    sunset: "Watch the sun drop behind the Adriatic horizon with a cold drink in hand and the smell of grill on the breeze.",
    moon: "Sail by moonlight to a quiet cove, light a small bonfire, and stay until the stars come out.",
  },
  privateSec: {
    eyebrow: "Private charter",
    title: "Make the day entirely yours.",
    body: "Couples, families, friends, small celebrations. Tell us what you're dreaming of and we'll design the route around it.",
    cta: "Plan a private tour",
  },
  gallery: { eyebrow: "Postcards", title: "From the boat." },
  reviews: {
    eyebrow: "Guests",
    title: "What people say after a day with us.",
    items: [
      { name: "Anna & Markus", from: "Berlin, Germany", text: "Best day of our entire holiday in Montenegro. The hidden beach was unreal and the BBQ at sunset — we still talk about it." },
      { name: "Erion", from: "Tirana, Albania", text: "Punë profesionale, kapiteni shumë i sjellshëm. The cove they took us to was paradise." },
      { name: "The Kovač family", from: "Belgrade, Serbia", text: "Mali brod, mala grupa, sjajan dan. Deca nisu htela da idu kući. Highly recommended." },
      { name: "Sophie", from: "London, UK", text: "Booked on WhatsApp the night before, easy and friendly. Felt like being shown around by a local friend." },
    ],
  },
  faq: {
    eyebrow: "Good to know",
    title: "Frequently asked",
    items: [
      { q: "Where do we meet?", a: "At the small harbour in Ulcinj. We send you the exact pin on WhatsApp once your tour is confirmed." },
      { q: "What's included?", a: "Boat, skipper, fuel, snorkelling masks, cold water and soft drinks. BBQ tours include the food and grill setup." },
      { q: "Is it suitable for kids?", a: "Yes. Children are very welcome. We carry life jackets in all sizes." },
      { q: "What if the weather is bad?", a: "If the sea is unsafe we move your tour to another day or refund you in full. Your call." },
      { q: "How do we pay?", a: "Cash on the day, or bank transfer in advance. No deposit needed for small groups." },
      { q: "Do you speak my language?", a: "Yes — English, German, Serbian/Bosnian/Croatian/Montenegrin and Albanian." },
    ],
  },
  finalCta: { title: "Ready for your day on the water?", sub: "Message us on WhatsApp — we usually reply within minutes." },
  footer: { tagline: "Small-group boat tours from Ulcinj, Montenegro.", contact: "Contact", languages: "Languages", rights: "All rights reserved." },
};

const de: TranslationKeys = {
  nav: { tours: "Touren", route: "Route", gallery: "Galerie", reviews: "Bewertungen", faq: "FAQ" },
  cta: { whatsapp: "Auf WhatsApp buchen", viewTours: "Touren ansehen", call: "Anrufen", book: "Buchen", bookNow: "Jetzt buchen" },
  hero: {
    eyebrow: "N 41° 55' · E 19° 12' · Ulcinj, Montenegro",
    titleA: "Bootstouren von Ulcinj zu ",
    titleItalic: "versteckten Buchten",
    titleB: " und Valdanos.",
    sub: "Schwimmen an einem versteckten Strand, kalte Getränke, einfaches Strand-BBQ, Sonnenuntergänge und Mondlichtnächte am Meer.",
  },
  toursSection: { eyebrow: "Unsere Touren", title: "Wähle deinen Tag auf dem Wasser", sub: "Kleine Gruppen. Lokaler Skipper. Echte Buchten." },
  tours: {
    hidden: { name: "Versteckter Strand – Tagesausflug", tagline: "Ganzer Tag", desc: "Vorbei an der Altstadt, Anker werfen in einer Bucht, die nur vom Meer aus erreichbar ist. Schwimmen, schnorcheln, ausruhen.", duration: "6–7 Stunden", group: "Bis zu 8", price: "ab €45 / Person" },
    sunset: { name: "Sonnenuntergang & BBQ", tagline: "Spätnachmittag", desc: "Richtung Valdanos im goldenen Licht. Anker in einer ruhigen Bucht, frischer Grill am Strand, kalte Getränke.", duration: "4 Stunden", group: "Bis zu 8", price: "ab €55 / Person" },
    moonlight: { name: "Mondlicht-Lagerfeuer", tagline: "Abend", desc: "Unter den Sternen zu einer privaten Bucht. Ein kleines Treibholzfeuer, lokaler Wein, das Geräusch der Wellen.", duration: "3–4 Stunden", group: "Bis zu 8", price: "ab €50 / Person" },
    private: { name: "Privater Bootsausflug", tagline: "Nur eure Gruppe", desc: "Das Boot gehört euch. Wählt die Buchten, das Tempo, die Musik. Perfekt für Paare und Familien.", duration: "Flexibel", group: "Bis zu 8", price: "ab €280 / Boot" },
  },
  why: {
    eyebrow: "Was uns anders macht",
    title: "Lokaler Skipper, kleine Gruppen, echte Orte.",
    items: [
      { title: "Nur kleine Gruppen", body: "Maximal 8 Gäste. Keine überfüllten Partyboote — Platz zum Atmen und Schwimmen." },
      { title: "Buchten der Einheimischen", body: "Wir sind an dieser Küste aufgewachsen und kennen Orte, die kein großer Anbieter erreicht." },
      { title: "Ehrliche Gastfreundschaft", body: "Kalte Getränke, BBQ, frische Früchte. Genau so soll der Sommer schmecken." },
      { title: "Einfache WhatsApp-Buchung", body: "Keine langen Formulare. Schreib uns, wir antworten schnell." },
    ],
  },
  route: {
    eyebrow: "Unsere Route",
    title: "Altstadt Ulcinj → versteckte Buchten → Valdanos → versteckter Strand",
    sub: "Eine entspannte Linie entlang des schönsten Abschnitts der südlichen Adria.",
    stops: [
      { title: "Altstadt Ulcinj", body: "Wir verlassen den Hafen und segeln unter den alten Steinmauern entlang." },
      { title: "Versteckte Buchten", body: "Stille Buchten in den Klippen, nur vom Meer aus erreichbar." },
      { title: "Valdanos", body: "Geschützte Bucht, eingerahmt von einem der ältesten Olivenhaine Europas." },
      { title: "Versteckter Strand", body: "Anker, Schwimmen, Essen, wiederholen. Euer privater Stopp des Tages." },
    ],
  },
  bbq: {
    eyebrow: "BBQ & kalte Getränke",
    title: "Ein einfaches Strand-BBQ, wie es die Küste macht.",
    body: "Wir machen ein kleines Feuer auf den Kieseln, grillen, was frisch ist, schneiden Wassermelone. Kaltes lokales Bier, Wasser und Limonade sind immer an Bord.",
    bullets: [
      "Frischer Fisch & Gemüse vom Grill",
      "Kaltes Bier, Wasser, Softdrinks, Limonade",
      "Vegetarische Optionen auf Anfrage",
      "Eigene Weinflasche willkommen — wir bringen das Eis",
    ],
  },
  evening: {
    eyebrow: "Sonnenuntergang & Mondlicht",
    title: "Die Küste ist nach 18 Uhr am schönsten.",
    body: "Zwei Wege, einen Abend auf dem Wasser mit uns zu verbringen.",
    sunset: "Sieh zu, wie die Sonne hinter dem Adria-Horizont versinkt — mit kaltem Getränk und Grillduft im Wind.",
    moon: "Bei Mondlicht zu einer ruhigen Bucht segeln, ein kleines Lagerfeuer, bleiben bis die Sterne kommen.",
  },
  privateSec: {
    eyebrow: "Private Charter",
    title: "Macht den Tag ganz zu eurem.",
    body: "Paare, Familien, Freunde, kleine Feiern. Sagt uns, was ihr euch vorstellt — wir planen die Route.",
    cta: "Private Tour planen",
  },
  gallery: { eyebrow: "Postkarten", title: "Vom Boot." },
  reviews: {
    eyebrow: "Gäste",
    title: "Was Gäste nach einem Tag mit uns sagen.",
    items: [
      { name: "Anna & Markus", from: "Berlin, Deutschland", text: "Bester Tag unseres gesamten Urlaubs in Montenegro. Der versteckte Strand war unwirklich." },
      { name: "Erion", from: "Tirana, Albanien", text: "Sehr professionell, der Kapitän war fantastisch. Die Bucht war das Paradies." },
      { name: "Familie Kovač", from: "Belgrad, Serbien", text: "Kleines Boot, kleine Gruppe, großartiger Tag. Die Kinder wollten nicht heim." },
      { name: "Sophie", from: "London, UK", text: "Am Vorabend per WhatsApp gebucht, einfach und freundlich. Wie mit einem Einheimischen unterwegs." },
    ],
  },
  faq: {
    eyebrow: "Gut zu wissen",
    title: "Häufig gefragt",
    items: [
      { q: "Wo treffen wir uns?", a: "Am kleinen Hafen in Ulcinj. Wir senden den genauen Pin per WhatsApp." },
      { q: "Was ist inklusive?", a: "Boot, Skipper, Treibstoff, Schnorchelmasken, kaltes Wasser, Softdrinks. BBQ-Touren inkl. Essen und Grill." },
      { q: "Geeignet für Kinder?", a: "Ja. Kinder sind sehr willkommen. Schwimmwesten in allen Größen an Bord." },
      { q: "Was bei schlechtem Wetter?", a: "Wenn das Meer unsicher ist, verschieben wir oder erstatten den vollen Betrag." },
      { q: "Wie zahlen wir?", a: "Bar am Tag oder Überweisung im Voraus. Keine Anzahlung nötig." },
      { q: "Sprecht ihr meine Sprache?", a: "Ja — Englisch, Deutsch, Serbisch/Bosnisch/Kroatisch/Montenegrinisch und Albanisch." },
    ],
  },
  finalCta: { title: "Bereit für deinen Tag auf dem Wasser?", sub: "Schreib uns auf WhatsApp — meist antworten wir in Minuten." },
  footer: { tagline: "Kleine Bootstouren ab Ulcinj, Montenegro.", contact: "Kontakt", languages: "Sprachen", rights: "Alle Rechte vorbehalten." },
};

const sr: TranslationKeys = {
  nav: { tours: "Ture", route: "Ruta", gallery: "Galerija", reviews: "Utisci", faq: "Pitanja" },
  cta: { whatsapp: "Rezerviši na WhatsApp", viewTours: "Pogledaj ture", call: "Pozovi", book: "Rezerviši", bookNow: "Rezerviši odmah" },
  hero: {
    eyebrow: "N 41° 55' · E 19° 12' · Ulcinj, Crna Gora",
    titleA: "Vožnje brodom iz Ulcinja do ",
    titleItalic: "skrivenih uvala",
    titleB: " i Valdanosa.",
    sub: "Kupanje na skrivenoj plaži, hladna pića, jednostavan roštilj, zalasci sunca i mesečinom obasjane noći na moru.",
  },
  toursSection: { eyebrow: "Naše ture", title: "Izaberi svoj dan na moru", sub: "Male grupe. Lokalni skiper. Prave uvale." },
  tours: {
    hidden: { name: "Skrivena plaža – ceo dan", tagline: "Ceo dan", desc: "Plovimo pored zidina Starog Grada do uvale dostupne samo s mora. Kupanje, ronjenje, odmor.", duration: "6–7 sati", group: "Do 8 osoba", price: "od €45 / osoba" },
    sunset: { name: "Zalazak & roštilj", tagline: "Popodne", desc: "Krećemo ka Valdanosu dok svetlo postaje zlatno. Sidro u tihoj uvali, svež roštilj na plaži.", duration: "4 sata", group: "Do 8 osoba", price: "od €55 / osoba" },
    moonlight: { name: "Mesečina & vatra", tagline: "Veče", desc: "Plovidba pod zvezdama do privatne uvale. Mala vatra, lokalno vino, zvuk talasa.", duration: "3–4 sata", group: "Do 8 osoba", price: "od €50 / osoba" },
    private: { name: "Privatni izlet brodom", tagline: "Samo vaša grupa", desc: "Brod je samo vaš. Birate uvale, tempo i muziku. Idealno za parove i porodice.", duration: "Fleksibilno", group: "Do 8 osoba", price: "od €280 / brod" },
  },
  why: {
    eyebrow: "Zašto je ovo drugačije",
    title: "Lokalni skiper, male grupe, prava mesta.",
    items: [
      { title: "Samo male grupe", body: "Maksimalno 8 gostiju. Bez prepunih zabavnih brodova — samo prostor za disanje i kupanje." },
      { title: "Uvale koje znaju lokalci", body: "Odrasli smo na ovoj obali. Vodimo vas tamo gde veliki ne mogu." },
      { title: "Iskreno gostoprimstvo", body: "Hladna pića, roštilj, sveže voće. Tako leto treba da izgleda." },
      { title: "Jednostavna WhatsApp rezervacija", body: "Bez dugačkih formulara. Pišete nam, brzo odgovaramo." },
    ],
  },
  route: {
    eyebrow: "Naša ruta",
    title: "Stari Grad Ulcinj → skrivene uvale → Valdanos → skrivena plaža",
    sub: "Lagana linija duž najlepšeg dela južnog Jadrana.",
    stops: [
      { title: "Stari Grad Ulcinj", body: "Krećemo iz luke i plovimo ispod drevnih zidina." },
      { title: "Skrivene uvale", body: "Tihe uvale uklesane u stene, dostupne samo s mora." },
      { title: "Valdanos", body: "Zaštićena uvala u jednom od najstarijih maslinjaka u Evropi." },
      { title: "Skrivena plaža", body: "Sidro, kupanje, hrana, ponovo. Vaš privatni stop dana." },
    ],
  },
  bbq: {
    eyebrow: "Roštilj & hladna pića",
    title: "Jednostavan roštilj na plaži, kako se to radi ovde.",
    body: "Pravimo malu vatru na šljunku, pečemo sveže, sečemo lubenicu. Hladno pivo, voda i limunada uvek na brodu.",
    bullets: [
      "Sveža riba i povrće s roštilja",
      "Hladno pivo, voda, sokovi, limunada",
      "Vegetarijanske opcije na zahtev",
      "Donesite svoje vino — mi donosimo led",
    ],
  },
  evening: {
    eyebrow: "Zalazak & mesečina",
    title: "Obala je najlepša posle 18h.",
    body: "Dva načina da provedete veče na vodi sa nama.",
    sunset: "Gledajte kako sunce zalazi iza Jadrana, hladno piće u ruci, miris roštilja u vetru.",
    moon: "Plovidba na mesečini do tihe uvale, mala vatra, ostajemo dok ne izađu zvezde.",
  },
  privateSec: {
    eyebrow: "Privatni najam",
    title: "Neka dan bude potpuno vaš.",
    body: "Parovi, porodice, prijatelji, male proslave. Kažite nam šta želite — kreiramo rutu.",
    cta: "Isplaniraj privatnu turu",
  },
  gallery: { eyebrow: "Razglednice", title: "S broda." },
  reviews: {
    eyebrow: "Gosti",
    title: "Šta gosti kažu posle dana s nama.",
    items: [
      { name: "Anna & Markus", from: "Berlin, Nemačka", text: "Najbolji dan celog odmora u Crnoj Gori. Skrivena plaža je nestvarna." },
      { name: "Erion", from: "Tirana, Albanija", text: "Vrlo profesionalno, kapetan sjajan. Uvala — pravi raj." },
      { name: "Porodica Kovač", from: "Beograd, Srbija", text: "Mali brod, mala grupa, sjajan dan. Deca nisu htela kući." },
      { name: "Sophie", from: "London, UK", text: "Rezervacija preko WhatsAppa veče pre — lako i prijateljski." },
    ],
  },
  faq: {
    eyebrow: "Korisno",
    title: "Često postavljana pitanja",
    items: [
      { q: "Gde se nalazimo?", a: "U maloj luci u Ulcinju. Tačnu lokaciju šaljemo na WhatsApp." },
      { q: "Šta je uključeno?", a: "Brod, skiper, gorivo, maske za ronjenje, hladna voda i sokovi. Roštilj ture uključuju hranu." },
      { q: "Pogodno za decu?", a: "Da. Deca su dobrodošla. Imamo prsluke svih veličina." },
      { q: "Šta ako je loše vreme?", a: "Ako more nije bezbedno, prebacujemo turu ili vraćamo novac." },
      { q: "Kako se plaća?", a: "Gotovinom na dan ili uplatom unapred. Nema depozita." },
      { q: "Govorite li moj jezik?", a: "Da — engleski, nemački, srpski/bosanski/hrvatski/crnogorski i albanski." },
    ],
  },
  finalCta: { title: "Spremni za dan na moru?", sub: "Pišite nam na WhatsApp — odgovaramo brzo." },
  footer: { tagline: "Vožnje brodom u malim grupama iz Ulcinja, Crna Gora.", contact: "Kontakt", languages: "Jezici", rights: "Sva prava zadržana." },
};

const sq: TranslationKeys = {
  nav: { tours: "Turet", route: "Itinerari", gallery: "Galeria", reviews: "Vlerësime", faq: "Pyetje" },
  cta: { whatsapp: "Rezervo në WhatsApp", viewTours: "Shiko turet", call: "Telefono", book: "Rezervo", bookNow: "Rezervo tani" },
  hero: {
    eyebrow: "N 41° 55' · E 19° 12' · Ulqin, Mali i Zi",
    titleA: "Udhëtime me varkë nga Ulqini drejt ",
    titleItalic: "gjireve të fshehur",
    titleB: " dhe Valdanosit.",
    sub: "Not në një plazh të fshehur, pije të ftohta, BBQ në breg, perëndim dielli dhe netë me hënë në det.",
  },
  toursSection: { eyebrow: "Turet tona", title: "Zgjidh ditën tënde në det", sub: "Grupe të vogla. Kapiten vendas. Gjire të vërtetë." },
  tours: {
    hidden: { name: "Plazhi i fshehur – ditë e plotë", tagline: "Ditë e plotë", desc: "Lundrojmë pranë mureve të Qytetit të Vjetër deri në një gji të arritshëm vetëm nga deti.", duration: "6–7 orë", group: "Deri në 8", price: "nga €45 / person" },
    sunset: { name: "Perëndim & BBQ", tagline: "Pasdite", desc: "Drejt Valdanosit ndërsa drita bëhet e artë. Spirancë në një gji të qetë, BBQ i freskët në breg.", duration: "4 orë", group: "Deri në 8", price: "nga €55 / person" },
    moonlight: { name: "Hëna & zjarri", tagline: "Mbrëmje", desc: "Lundrim nën yje drejt një gjiri privat. Zjarr i vogël, verë vendase, zhurma e dallgëve.", duration: "3–4 orë", group: "Deri në 8", price: "nga €50 / person" },
    private: { name: "Udhëtim privat me varkë", tagline: "Vetëm grupi juaj", desc: "Varka është e juaja. Zgjidhni gjiret, ritmin, muzikën. Ideale për çifte dhe familje.", duration: "Fleksibël", group: "Deri në 8", price: "nga €280 / varkë" },
  },
  why: {
    eyebrow: "Pse jemi të ndryshëm",
    title: "Kapiten vendas, grupe të vogla, vende të vërteta.",
    items: [
      { title: "Vetëm grupe të vogla", body: "Maksimumi 8 mysafirë. Pa varka të mbushura — vetëm hapësirë për të frymuar dhe notuar." },
      { title: "Gjire që njohin vendasit", body: "Jemi rritur në këtë bregdet. Ju çojmë atje ku të mëdhenjtë nuk mund të shkojnë." },
      { title: "Mikpritje e thjeshtë", body: "Pije të ftohta, BBQ, fruta të freskëta. Pikërisht ashtu si duhet të jetë vera." },
      { title: "Rezervim i lehtë në WhatsApp", body: "Pa formularë të gjatë. Na shkruani, përgjigjemi shpejt." },
    ],
  },
  route: {
    eyebrow: "Itinerari ynë",
    title: "Qyteti i Vjetër i Ulqinit → gjire të fshehur → Valdanos → plazh i fshehur",
    sub: "Një vijë e ngadaltë përgjatë pjesës më të bukur të Adriatikut jugor.",
    stops: [
      { title: "Qyteti i Vjetër i Ulqinit", body: "Largohemi nga porti dhe lundrojmë nën muret e lashta." },
      { title: "Gjire të fshehur", body: "Gjire të qeta të gdhendur në shkëmbinj, të arritshëm vetëm nga deti." },
      { title: "Valdanos", body: "Gji i mbrojtur brenda njërit prej ullishteve më të vjetra në Evropë." },
      { title: "Plazh i fshehur", body: "Spirancë, not, ushqim, përsëri. Ndalesa juaj private e ditës." },
    ],
  },
  bbq: {
    eyebrow: "BBQ & pije të ftohta",
    title: "Një BBQ i thjeshtë në plazh, ashtu si bëhet këtu.",
    body: "Ndezim një zjarr të vogël në guralecë, pjekim atë që është i freskët, presim shalqi. Birrë vendase e ftohtë, ujë dhe limonadë gjithmonë në bord.",
    bullets: [
      "Peshk i freskët dhe perime në skarë",
      "Birrë e ftohtë, ujë, pije, limonadë",
      "Opsione vegjetariane me kërkesë",
      "Sillni shishen tuaj të verës — ne sjellim akullin",
    ],
  },
  evening: {
    eyebrow: "Perëndim & hënë",
    title: "Bregdeti është më i bukuri pas orës 18.",
    body: "Dy mënyra për të kaluar një mbrëmje me ne në det.",
    sunset: "Shihni diellin që zhytet pas horizontit të Adriatikut, me një pije të ftohtë në dorë.",
    moon: "Lundroni në dritën e hënës drejt një gjiri të qetë, ndizni një zjarr të vogël, qëndroni deri sa të dalin yjet.",
  },
  privateSec: {
    eyebrow: "Qira private",
    title: "Bëjeni ditën plotësisht tuajën.",
    body: "Çifte, familje, miq, festa të vogla. Na thoni çfarë ëndërroni — ne projektojmë itinerarin.",
    cta: "Planifikoni një turne privat",
  },
  gallery: { eyebrow: "Kartolina", title: "Nga varka." },
  reviews: {
    eyebrow: "Mysafirët",
    title: "Çfarë thonë njerëzit pas një dite me ne.",
    items: [
      { name: "Anna & Markus", from: "Berlin, Gjermani", text: "Dita më e mirë e gjithë pushimeve tona në Mal të Zi. Plazhi i fshehur ishte i pabesueshëm." },
      { name: "Erion", from: "Tiranë, Shqipëri", text: "Punë profesionale, kapiteni shumë i sjellshëm. Gjiri ishte parajsë." },
      { name: "Familja Kovač", from: "Beograd, Serbi", text: "Varkë e vogël, grup i vogël, ditë e shkëlqyer. Fëmijët nuk donin të iknin." },
      { name: "Sophie", from: "London, MB", text: "Rezervova në WhatsApp natën më parë, e lehtë dhe miqësore." },
    ],
  },
  faq: {
    eyebrow: "Mirë të dish",
    title: "Pyetje të shpeshta",
    items: [
      { q: "Ku takohemi?", a: "Në portin e vogël të Ulqinit. Vendndodhjen e saktë e dërgojmë në WhatsApp." },
      { q: "Çfarë përfshihet?", a: "Varka, kapiteni, karburanti, maska për not, ujë i ftohtë dhe pije. Turet me BBQ përfshijnë ushqimin." },
      { q: "A është për fëmijë?", a: "Po. Fëmijët janë të mirëpritur. Kemi jelekë në të gjitha madhësitë." },
      { q: "Po nëse moti është i keq?", a: "Nëse deti nuk është i sigurt, e shtyjmë turin ose ju kthejmë paratë." },
      { q: "Si paguajmë?", a: "Cash në ditën e turit ose transfertë bankare. Pa depozitë." },
      { q: "A flisni gjuhën time?", a: "Po — anglisht, gjermanisht, serbisht/boshnjakisht/kroatisht/malazisht dhe shqip." },
    ],
  },
  finalCta: { title: "Gati për ditën tuaj në det?", sub: "Na shkruani në WhatsApp — zakonisht përgjigjemi brenda minutash." },
  footer: { tagline: "Udhëtime me varkë në grupe të vogla nga Ulqini, Mal i Zi.", contact: "Kontakt", languages: "Gjuhët", rights: "Të gjitha të drejtat e rezervuara." },
};

export const translations: Record<Lang, TranslationKeys> = { en, de, sr, sq };
