import type { Lang } from "./locales";
import type { PageId, TourPageId } from "./routes";

type SeoCopy = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
};

type TourDetailCopy = {
  eyebrow: string;
  intro: string;
  highlightsTitle: string;
  highlights: readonly string[];
  practicalTitle: string;
  ctaTitle: string;
  ctaBody: string;
  bookingLabel: string;
  statusLabel?: string;
};

export type PageContent = {
  breadcrumbs: {
    home: string;
    tours: string;
  };
  common: {
    backToTours: string;
    viewDetails: string;
    included: string;
    duration: string;
    groupSize: string;
    price: string;
    time: string;
    status: string;
    comingSoon: string;
    available: string;
    relatedTours: string;
  };
  seo: Record<PageId, SeoCopy>;
  toursOverview: {
    eyebrow: string;
    title: string;
    sub: string;
    introTitle: string;
    intro: string;
  };
  experienceTeasers: {
    title: string;
    items: readonly {
      title: string;
      body: string;
      badge: string;
    }[];
  };
  tourDetails: Record<TourPageId, TourDetailCopy>;
};

export const pageContent: Record<Lang, PageContent> = {
  en: {
    breadcrumbs: {
      home: "Home",
      tours: "Tours",
    },
    common: {
      backToTours: "Back to all tours",
      viewDetails: "View details",
      included: "Included",
      duration: "Duration",
      groupSize: "Group size",
      price: "Price",
      time: "Time",
      status: "Status",
      comingSoon: "Coming soon",
      available: "Available",
      relatedTours: "More ways to see the coast",
    },
    seo: {
      home: {
        title: "Boat Tours in Ulcinj & Valdanos | Hidden Cove Boat Tours",
        description:
          "Small-group boat tours from Valdanos near Ulcinj, with hidden coves, a secluded beach, sunset trips and an optional beach barbecue.",
        ogTitle: "Boat Tours in Ulcinj & Valdanos | Hidden Cove Boat Tours",
        ogDescription:
          "Explore hidden coves near Ulcinj by boat, with small groups, local hospitality, sunset trips and a secluded beach stop.",
      },
      tours: {
        title: "Boat Tours from Valdanos | Hidden Cove Boat Tours",
        description:
          "Compare Classic, Beach BBQ, Sunset and coming-soon Moonlight boat tours along the Ulcinj and Valdanos coast.",
        ogTitle: "Boat Tours from Valdanos | Hidden Cove Boat Tours",
        ogDescription:
          "Choose the boat tour that fits your day on the Adriatic.",
      },
      classicTour: {
        title: "Classic Boat Tour | Hidden Cove Boat Tours",
        description:
          "A relaxed four-hour boat trip from Valdanos with coastal cruising, drinks, sandwiches, sun loungers and a secluded beach stop.",
        ogTitle: "Classic Boat Tour | Hidden Cove Boat Tours",
        ogDescription:
          "The essential day trip for swimming, coastal views and easy time at the beach.",
      },
      barbecueTour: {
        title: "Beach BBQ Boat Tour | Hidden Cove Boat Tours",
        description:
          "A four-hour coastal boat tour with a beach barbecue, relaxed sea time and a quiet beach setting.",
        ogTitle: "Beach BBQ Boat Tour | Hidden Cove Boat Tours",
        ogDescription:
          "Add a simple Mediterranean beach barbecue to the coastal boat route.",
      },
      sunsetTour: {
        title: "Sunset Boat Tour | Hidden Cove Boat Tours",
        description:
          "An evening boat ride along the Ulcinj coast with sunset views from the Adriatic Sea.",
        ogTitle: "Sunset Boat Tour | Hidden Cove Boat Tours",
        ogDescription:
          "See the Ulcinj coast from the water during the quieter evening light.",
      },
      moonlightTour: {
        title: "Moonlight Tour | Hidden Cove Boat Tours",
        description:
          "A coming-soon night boat experience for moonlit sea views and quiet time on the Ulcinj coast.",
        ogTitle: "Moonlight Tour | Hidden Cove Boat Tours",
        ogDescription:
          "The upcoming night tour, planned for a softer evening at sea.",
      },
    },
    toursOverview: {
      eyebrow: "Boat tours",
      title: "Choose your day on the Ulcinj coast.",
      sub: "From an easy classic day trip to sunset light and a beach barbecue, each tour keeps the group small and the route close to the coast.",
      introTitle: "Small-group coastal tours from Valdanos",
      intro:
        "All tours are built around the same local rhythm: a skipper who knows the coastline, time to swim, and a secluded beach stop reached from the sea.",
    },
    experienceTeasers: {
      title: "More about the experience",
      items: [
        {
          title: "Meet the skippers",
          body: "We are preparing a closer introduction to the local people behind each trip. More stories and photographs will be added soon.",
          badge: "Coming soon",
        },
        {
          title: "Our boat",
          body: "A dedicated overview of the boat, its layout and what to expect on board will be added soon.",
          badge: "Coming soon",
        },
      ],
    },
    tourDetails: {
      classicTour: {
        eyebrow: "Classic day trip",
        intro:
          "The Classic Tour is the easiest way to experience the Hidden Cove route: a relaxed boat ride from Valdanos, time along the coast, and several hours at the beach.",
        highlightsTitle: "Why choose it",
        highlights: [
          "Best first choice for families and small groups.",
          "Includes drinks, sandwiches, and use of sun loungers.",
          "Balanced between coastal cruising and beach time.",
        ],
        practicalTitle: "Tour details",
        ctaTitle: "Ask about the Classic Tour",
        ctaBody:
          "Send your preferred date and guest count and we will confirm current availability by WhatsApp.",
        bookingLabel: "Book this tour",
      },
      barbecueTour: {
        eyebrow: "Beach barbecue",
        intro:
          "The BBQ Tour keeps the coastal route and beach stop, then adds a simple Mediterranean barbecue served in the beach setting.",
        highlightsTitle: "Why choose it",
        highlights: [
          "A fuller beach day with food included.",
          "Good for groups who want more time to settle in.",
          "Combines the boat transfer, swim stop, and relaxed lunch rhythm.",
        ],
        practicalTitle: "Tour details",
        ctaTitle: "Ask about the BBQ Tour",
        ctaBody:
          "Tell us your date and guest count so we can confirm barbecue availability and timing.",
        bookingLabel: "Book this tour",
      },
      sunsetTour: {
        eyebrow: "Evening light",
        intro:
          "The Sunset Tour focuses on the quieter end of the day, with a boat ride along the coast as the light changes over the Adriatic.",
        highlightsTitle: "Why choose it",
        highlights: [
          "Shorter evening format.",
          "Designed around sea views and sunset light.",
          "A good option after a beach day or city walk.",
        ],
        practicalTitle: "Tour details",
        ctaTitle: "Ask about the Sunset Tour",
        ctaBody:
          "Send your preferred evening and guest count and we will reply with current sunset timing.",
        bookingLabel: "Book this tour",
      },
      moonlightTour: {
        eyebrow: "Night experience",
        intro:
          "The Moonlight Tour is planned as a calmer night experience on the coast. It is not currently presented as an active bookable tour.",
        highlightsTitle: "Planned atmosphere",
        highlights: [
          "Moonlit sea views and a softer night setting.",
          "Designed for slower, quieter time by the water.",
          "Coming soon while final details are confirmed.",
        ],
        practicalTitle: "Tour status",
        ctaTitle: "Ask about Moonlight plans",
        ctaBody:
          "We can share updates when the Moonlight Tour becomes available.",
        bookingLabel: "Ask about this tour",
        statusLabel: "Coming soon",
      },
    },
  },
  de: {
    breadcrumbs: {
      home: "Startseite",
      tours: "Touren",
    },
    common: {
      backToTours: "Zurueck zu allen Touren",
      viewDetails: "Details ansehen",
      included: "Inklusive",
      duration: "Dauer",
      groupSize: "Gruppengroesse",
      price: "Preis",
      time: "Zeit",
      status: "Status",
      comingSoon: "Demnaechst",
      available: "Verfuegbar",
      relatedTours: "Weitere Wege an die Kueste",
    },
    seo: {
      home: {
        title: "Bootstouren in Ulcinj & Valdanos | Hidden Cove Boat Tours",
        description:
          "Bootstouren in kleinen Gruppen ab Valdanos bei Ulcinj: versteckte Buchten, ein abgeschiedener Strand, Sonnenuntergangstouren und optionales Strand-BBQ.",
        ogTitle: "Bootstouren in Ulcinj & Valdanos | Hidden Cove Boat Tours",
        ogDescription:
          "Entdecke versteckte Buchten bei Ulcinj per Boot, mit kleinen Gruppen, lokaler Gastfreundschaft, Sonnenuntergangstouren und einem Strandstopp.",
      },
      tours: {
        title: "Bootstouren ab Valdanos | Hidden Cove Boat Tours",
        description:
          "Vergleiche Classic Tour, Strand-BBQ, Sunset Tour und die geplante Moonlight Tour entlang der Kueste von Ulcinj und Valdanos.",
        ogTitle: "Bootstouren ab Valdanos | Hidden Cove Boat Tours",
        ogDescription:
          "Waehle die Bootstour, die zu deinem Tag an der Adria passt.",
      },
      classicTour: {
        title: "Classic Bootstour | Hidden Cove Boat Tours",
        description:
          "Eine entspannte vierstuendige Bootstour ab Valdanos mit Kuestenfahrt, Getraenken, Sandwiches, Liegen und Strandstopp.",
        ogTitle: "Classic Bootstour | Hidden Cove Boat Tours",
        ogDescription:
          "Der einfache Tagesausflug zum Schwimmen, fuer Kuestenblicke und Zeit am Strand.",
      },
      barbecueTour: {
        title: "Strand-BBQ Bootstour | Hidden Cove Boat Tours",
        description:
          "Eine vierstuendige Kuestentour mit Strand-BBQ, entspannter Zeit am Meer und dem Hidden Cove Boat Tours Strandbereich.",
        ogTitle: "Strand-BBQ Bootstour | Hidden Cove Boat Tours",
        ogDescription:
          "Ergaenze die Kuestentour um ein einfaches mediterranes Strand-BBQ.",
      },
      sunsetTour: {
        title: "Sunset Bootstour | Hidden Cove Boat Tours",
        description:
          "Eine abendliche Bootsfahrt entlang der Kueste von Ulcinj mit Sonnenuntergang vom Meer.",
        ogTitle: "Sunset Bootstour | Hidden Cove Boat Tours",
        ogDescription:
          "Erlebe die Kueste von Ulcinj vom Wasser aus im ruhigeren Abendlicht.",
      },
      moonlightTour: {
        title: "Moonlight Tour | Hidden Cove Boat Tours",
        description:
          "Eine geplante Nacht-Bootstour fuer Mondlicht, ruhige Meeresblicke und die Kueste von Ulcinj.",
        ogTitle: "Moonlight Tour | Hidden Cove Boat Tours",
        ogDescription:
          "Die kommende Hidden Cove Boat Tours Nachtour fuer einen sanfteren Abend auf dem Meer.",
      },
    },
    toursOverview: {
      eyebrow: "Bootstouren",
      title: "Waehle deinen Tag an der Kueste von Ulcinj.",
      sub: "Vom einfachen Tagesausflug bis zu Sonnenuntergang und Strand-BBQ bleiben die Gruppen klein und die Route nah an der Kueste.",
      introTitle: "Kleine Kuestentouren ab Valdanos",
      intro:
        "Alle Touren folgen demselben lokalen Rhythmus: ein Skipper mit Kuestenkenntnis, Zeit zum Schwimmen und ein Strandstopp, der vom Meer aus erreicht wird.",
    },
    experienceTeasers: {
      title: "Mehr ueber das Erlebnis",
      items: [
        {
          title: "Lernt die Skipper kennen",
          body: "Wir bereiten eine naehere Vorstellung der lokalen Menschen hinter jeder Tour vor. Weitere Geschichten und Fotos werden bald ergaenzt.",
          badge: "Demnaechst",
        },
        {
          title: "Unser Boot",
          body: "Eine eigene Uebersicht zum Boot, seinem Layout und dazu, was euch an Bord erwartet, wird bald ergaenzt.",
          badge: "Demnaechst",
        },
      ],
    },
    tourDetails: {
      classicTour: {
        eyebrow: "Klassischer Tagesausflug",
        intro:
          "Die Classic Tour ist der einfachste Einstieg in die Hidden-Cove-Route: entspannte Fahrt ab Valdanos, Zeit entlang der Kueste und mehrere Stunden am Strand.",
        highlightsTitle: "Warum diese Tour",
        highlights: [
          "Beste erste Wahl fuer Familien und kleine Gruppen.",
          "Getraenke, Sandwiches und Liegen sind inklusive.",
          "Gute Balance aus Kuestenfahrt und Strandzeit.",
        ],
        practicalTitle: "Tourdetails",
        ctaTitle: "Zur Classic Tour anfragen",
        ctaBody:
          "Sende dein Wunschdatum und die Anzahl der Gaeste, dann bestaetigen wir die aktuelle Verfuegbarkeit per WhatsApp.",
        bookingLabel: "Diese Tour buchen",
      },
      barbecueTour: {
        eyebrow: "Strand-BBQ",
        intro:
          "Die BBQ Tour kombiniert Kuestenroute und Strandstopp mit einem einfachen mediterranen Barbecue im Strandbereich.",
        highlightsTitle: "Warum diese Tour",
        highlights: [
          "Ein vollerer Strandtag mit Essen inklusive.",
          "Gut fuer Gruppen, die mehr Zeit vor Ort moechten.",
          "Bootstransfer, Schwimmstopp und entspannter Lunch-Rhythmus.",
        ],
        practicalTitle: "Tourdetails",
        ctaTitle: "Zur BBQ Tour anfragen",
        ctaBody:
          "Nenne Datum und Gaestezahl, damit wir Verfuegbarkeit und Timing fuer das Barbecue bestaetigen koennen.",
        bookingLabel: "Diese Tour buchen",
      },
      sunsetTour: {
        eyebrow: "Abendlicht",
        intro:
          "Die Sunset Tour konzentriert sich auf das ruhigere Tagesende, mit einer Bootsfahrt entlang der Kueste im wechselnden Licht der Adria.",
        highlightsTitle: "Warum diese Tour",
        highlights: [
          "Kuerzeres Abendformat.",
          "Ausgerichtet auf Meerblick und Sonnenuntergang.",
          "Passt gut nach einem Strandtag oder Stadtspaziergang.",
        ],
        practicalTitle: "Tourdetails",
        ctaTitle: "Zur Sunset Tour anfragen",
        ctaBody:
          "Sende deinen Wunschtermin am Abend und die Gaestezahl, dann antworten wir mit der aktuellen Sonnenuntergangszeit.",
        bookingLabel: "Diese Tour buchen",
      },
      moonlightTour: {
        eyebrow: "Nachterlebnis",
        intro:
          "Die Moonlight Tour ist als ruhigere Nacht-Erfahrung an der Kueste geplant. Sie wird derzeit nicht als aktiv buchbare Tour gezeigt.",
        highlightsTitle: "Geplante Stimmung",
        highlights: [
          "Mondlicht auf dem Meer und eine ruhigere Nachtkulisse.",
          "Fuer langsamere, stillere Zeit am Wasser gedacht.",
          "Demnaechst, waehrend finale Details bestaetigt werden.",
        ],
        practicalTitle: "Tourstatus",
        ctaTitle: "Nach Moonlight Plaenen fragen",
        ctaBody:
          "Wir koennen Updates teilen, sobald die Moonlight Tour verfuegbar wird.",
        bookingLabel: "Zu dieser Tour fragen",
        statusLabel: "Demnaechst",
      },
    },
  },
  sq: {
    breadcrumbs: {
      home: "Kryefaqja",
      tours: "Turet",
    },
    common: {
      backToTours: "Kthehu te te gjitha turet",
      viewDetails: "Shiko detajet",
      included: "Perfshire",
      duration: "Kohezgjatja",
      groupSize: "Madhesia e grupit",
      price: "Cmimi",
      time: "Koha",
      status: "Statusi",
      comingSoon: "Se shpejti",
      available: "I disponueshem",
      relatedTours: "Menyra te tjera per te pare bregdetin",
    },
    seo: {
      home: {
        title: "Ture me varke ne Ulqin & Valdanos | Hidden Cove Boat Tours",
        description:
          "Ture me varke ne grupe te vogla nga Valdanosi afer Ulqinit, me gjire te fshehura, plazh te qete, perendim dielli dhe BBQ ne plazh.",
        ogTitle: "Ture me varke ne Ulqin & Valdanos | Hidden Cove Boat Tours",
        ogDescription:
          "Eksploro gjire te fshehura afer Ulqinit me varke, ne grupe te vogla, me mikpritje lokale dhe ndalese ne plazh.",
      },
      tours: {
        title: "Ture me varke nga Valdanosi | Hidden Cove Boat Tours",
        description:
          "Krahaso Classic Tour, Beach BBQ, Sunset Tour dhe Moonlight Tour qe vjen se shpejti pergjate bregdetit te Ulqinit dhe Valdanosit.",
        ogTitle: "Ture me varke nga Valdanosi | Hidden Cove Boat Tours",
        ogDescription:
          "Zgjidh turin Hidden Cove Boat Tours qe i pershtatet dites tende ne Adriatik.",
      },
      classicTour: {
        title: "Classic Tour me varke | Hidden Cove Boat Tours",
        description:
          "Tur i qete kater-oreshe nga Valdanosi me lundrim bregdetar, pije, sanduice, shezllone dhe ndalese ne plazh.",
        ogTitle: "Classic Tour me varke | Hidden Cove Boat Tours",
        ogDescription:
          "Udhetimi i thjeshte ditor Hidden Cove Boat Tours per not, pamje bregdetare dhe kohe ne plazh.",
      },
      barbecueTour: {
        title: "Beach BBQ Tour | Hidden Cove Boat Tours",
        description:
          "Tur kater-oreshe me varke, BBQ ne plazh, kohe te qete prane detit dhe ambientin e plazhit Hidden Cove Boat Tours.",
        ogTitle: "Beach BBQ Tour | Hidden Cove Boat Tours",
        ogDescription:
          "Shto nje BBQ te thjeshte mesdhetare ne turin bregdetar Hidden Cove Boat Tours.",
      },
      sunsetTour: {
        title: "Sunset Tour me varke | Hidden Cove Boat Tours",
        description:
          "Lundrim mbremjeje pergjate bregdetit te Ulqinit me pamje te perendimit nga deti Adriatik.",
        ogTitle: "Sunset Tour me varke | Hidden Cove Boat Tours",
        ogDescription:
          "Shiko bregdetin e Ulqinit nga uji ne driten me te qete te mbremjes.",
      },
      moonlightTour: {
        title: "Moonlight Tour | Hidden Cove Boat Tours",
        description:
          "Eksperience nate qe vjen se shpejti per pamje deti nen hene dhe qetesi ne bregdetin Hidden Cove Boat Tours.",
        ogTitle: "Moonlight Tour | Hidden Cove Boat Tours",
        ogDescription:
          "Turi i ardhshem i nates Hidden Cove Boat Tours, i planifikuar per nje mbremje me te bute ne det.",
      },
    },
    toursOverview: {
      eyebrow: "Ture me varke",
      title: "Zgjidh diten tende ne bregdetin e Ulqinit.",
      sub: "Nga nje dite e thjeshte klasike deri te perendimi dhe BBQ ne plazh, grupet mbeten te vogla dhe itinerari qendron prane bregdetit.",
      introTitle: "Ture bregdetare ne grupe te vogla nga Valdanosi",
      intro:
        "Te gjitha turet ndjekin te njejtin ritmin lokal: kapiten qe njeh bregdetin, kohe per not dhe ndalese ne nje plazh qe arrihet nga deti.",
    },
    experienceTeasers: {
      title: "Me shume rreth pervojes",
      items: [
        {
          title: "Njihuni me kapitenet",
          body: "Po pergatisim nje prezantim me te afert te njerezve vendas pas cdo udhetimi. Me shume histori dhe fotografi do te shtohen se shpejti.",
          badge: "Se shpejti",
        },
        {
          title: "Varka jone",
          body: "Nje permbledhje e vecante per varken, planin e saj dhe cfare te presesh ne bord do te shtohet se shpejti.",
          badge: "Se shpejti",
        },
      ],
    },
    tourDetails: {
      classicTour: {
        eyebrow: "Udhetim klasik ditor",
        intro:
          "Classic Tour eshte menyra me e lehte per te perjetuar itinerarin Hidden Cove: nisje nga Valdanosi, kohe pergjate bregdetit dhe disa ore ne plazh.",
        highlightsTitle: "Pse ta zgjedhesh",
        highlights: [
          "Zgjedhje e mire e pare per familje dhe grupe te vogla.",
          "Perfshin pije, sanduice dhe perdorim te shezlloneve.",
          "Balancim mes lundrimit bregdetar dhe kohes ne plazh.",
        ],
        practicalTitle: "Detajet e turit",
        ctaTitle: "Pyet per Classic Tour",
        ctaBody:
          "Dergo daten e deshiruar dhe numrin e mysafireve, dhe ne do te konfirmojme disponueshmerine ne WhatsApp.",
        bookingLabel: "Rezervo kete tur",
      },
      barbecueTour: {
        eyebrow: "BBQ ne plazh",
        intro:
          "BBQ Tour mban itinerarin bregdetar dhe ndalesen ne plazh, pastaj shton nje BBQ te thjeshte mesdhetare ne ambientin e plazhit.",
        highlightsTitle: "Pse ta zgjedhesh",
        highlights: [
          "Dite me e plote ne plazh me ushqim te perfshire.",
          "E pershtatshme per grupe qe duan me shume kohe ne vend.",
          "Kombinon transferimin me varke, notin dhe ritmin e qete te drekes.",
        ],
        practicalTitle: "Detajet e turit",
        ctaTitle: "Pyet per BBQ Tour",
        ctaBody:
          "Na trego daten dhe numrin e mysafireve qe te konfirmojme disponueshmerine dhe orarin e BBQ-se.",
        bookingLabel: "Rezervo kete tur",
      },
      sunsetTour: {
        eyebrow: "Drita e mbremjes",
        intro:
          "Sunset Tour perqendrohet ne fundin me te qete te dites, me lundrim pergjate bregdetit ndersa drita ndryshon mbi Adriatik.",
        highlightsTitle: "Pse ta zgjedhesh",
        highlights: [
          "Format me i shkurter mbremjeje.",
          "I menduar per pamje deti dhe perendim dielli.",
          "Opsion i mire pas nje dite ne plazh ose shetitjeje ne qytet.",
        ],
        practicalTitle: "Detajet e turit",
        ctaTitle: "Pyet per Sunset Tour",
        ctaBody:
          "Dergo mbremjen e deshiruar dhe numrin e mysafireve, dhe ne do te pergjigjemi me orarin aktual te perendimit.",
        bookingLabel: "Rezervo kete tur",
      },
      moonlightTour: {
        eyebrow: "Eksperience nate",
        intro:
          "Moonlight Tour planifikohet si nje eksperience me e qete nate ne bregdet. Aktualisht nuk paraqitet si tur aktiv per rezervim.",
        highlightsTitle: "Atmosfera e planifikuar",
        highlights: [
          "Pamje deti nen hene dhe ambient me i qete nate.",
          "E menduar per kohe me te ngadalte dhe te qete prane ujit.",
          "Se shpejti, ndersa detajet perfundimtare po konfirmohen.",
        ],
        practicalTitle: "Statusi i turit",
        ctaTitle: "Pyet per planet Moonlight",
        ctaBody:
          "Mund te ndajme perditesime kur Moonlight Tour te behet i disponueshem.",
        bookingLabel: "Pyet per kete tur",
        statusLabel: "Se shpejti",
      },
    },
  },
  me: {
    breadcrumbs: {
      home: "Pocetna",
      tours: "Ture",
    },
    common: {
      backToTours: "Nazad na sve ture",
      viewDetails: "Pogledaj detalje",
      included: "Ukljuceno",
      duration: "Trajanje",
      groupSize: "Velicina grupe",
      price: "Cijena",
      time: "Vrijeme",
      status: "Status",
      comingSoon: "Uskoro",
      available: "Dostupno",
      relatedTours: "Jos nacina da vidis obalu",
    },
    seo: {
      home: {
        title: "Ture brodom u Ulcinju i Valdanosu | Hidden Cove Boat Tours",
        description:
          "Ture brodom u malim grupama iz Valdanosa kod Ulcinja, sa skrivenim uvalama, mirnom plazom, turama za zalazak sunca i opcionim rostiljem na plazi.",
        ogTitle: "Ture brodom u Ulcinju i Valdanosu | Hidden Cove Boat Tours",
        ogDescription:
          "Istrazite skrivene uvale kod Ulcinja brodom, u maloj grupi, uz lokalno gostoprimstvo i zaustavljanje na plazi.",
      },
      tours: {
        title: "Ture brodom iz Valdanosa | Hidden Cove Boat Tours",
        description:
          "Uporedi Classic Tour, Beach BBQ, Sunset Tour i Moonlight Tour koja dolazi uskoro duz obale Ulcinja i Valdanosa.",
        ogTitle: "Ture brodom iz Valdanosa | Hidden Cove Boat Tours",
        ogDescription:
          "Izaberi turu brodom koja odgovara tvom danu na Jadranu.",
      },
      classicTour: {
        title: "Classic Tour brodom | Hidden Cove Boat Tours",
        description:
          "Opustena cetvorosatna voznja brodom iz Valdanosa sa obalnom rutom, picem, sendvicima, lezaljkama i zaustavljanjem na plazi.",
        ogTitle: "Classic Tour brodom | Hidden Cove Boat Tours",
        ogDescription:
          "Osnovni Hidden Cove Boat Tours dnevni izlet za kupanje, pogled na obalu i vrijeme na plazi.",
      },
      barbecueTour: {
        title: "Beach BBQ Tour | Hidden Cove Boat Tours",
        description:
          "Cetvorosatna obalna tura brodom sa rostiljem na plazi, opustenim vremenom uz more i Hidden Cove Boat Tours ambijentom.",
        ogTitle: "Beach BBQ Tour | Hidden Cove Boat Tours",
        ogDescription:
          "Dodaj jednostavan mediteranski rostilj na plazi obalnoj turi.",
      },
      sunsetTour: {
        title: "Sunset Tour brodom | Hidden Cove Boat Tours",
        description:
          "Vecernja voznja brodom duz obale Ulcinja sa pogledom na zalazak sunca sa Jadranskog mora.",
        ogTitle: "Sunset Tour brodom | Hidden Cove Boat Tours",
        ogDescription:
          "Pogledaj obalu Ulcinja sa vode u mirnijem vecernjem svjetlu.",
      },
      moonlightTour: {
        title: "Moonlight Tour | Hidden Cove Boat Tours",
        description:
          "Nocna tura koja dolazi uskoro, za pogled na more pod mjesecom i mirnu Hidden Cove Boat Tours obalu.",
        ogTitle: "Moonlight Tour | Hidden Cove Boat Tours",
        ogDescription:
          "Nadolazeca nocna tura, planirana za mirnije vece na moru.",
      },
    },
    toursOverview: {
      eyebrow: "Ture brodom",
      title: "Izaberi svoj dan na obali Ulcinja.",
      sub: "Od lagane klasicne ture do zalaska sunca i rostilja na plazi, grupa ostaje mala, a ruta blizu obale.",
      introTitle: "Male obalne ture iz Valdanosa",
      intro:
        "Sve ture imaju isti lokalni ritam: skiper koji poznaje obalu, vrijeme za kupanje i zaustavljanje na plazi do koje se dolazi sa mora.",
    },
    experienceTeasers: {
      title: "Vise o iskustvu",
      items: [
        {
          title: "Upoznaj skipere",
          body: "Pripremamo blize predstavljanje lokalnih ljudi iza svake ture. Jos prica i fotografija bice dodato uskoro.",
          badge: "Uskoro",
        },
        {
          title: "Nas brod",
          body: "Poseban pregled broda, njegovog rasporeda i onoga sto mozes ocekivati na brodu bice dodat uskoro.",
          badge: "Uskoro",
        },
      ],
    },
    tourDetails: {
      classicTour: {
        eyebrow: "Klasicni dnevni izlet",
        intro:
          "Classic Tour je najlaksi nacin da dozivis Hidden Cove rutu: opustena voznja iz Valdanosa, vrijeme duz obale i nekoliko sati na plazi.",
        highlightsTitle: "Zasto izabrati",
        highlights: [
          "Najbolji prvi izbor za porodice i male grupe.",
          "Ukljucuje pice, sendvice i koriscenje lezaljki.",
          "Dobra ravnoteza izmedju voznje uz obalu i vremena na plazi.",
        ],
        practicalTitle: "Detalji ture",
        ctaTitle: "Pitaj za Classic Tour",
        ctaBody:
          "Posalji zeljeni datum i broj gostiju, a mi cemo potvrditi dostupnost preko WhatsApp-a.",
        bookingLabel: "Rezervisi ovu turu",
      },
      barbecueTour: {
        eyebrow: "Rostilj na plazi",
        intro:
          "BBQ Tour zadrzava obalnu rutu i zaustavljanje na plazi, zatim dodaje jednostavan mediteranski rostilj u plaznom ambijentu.",
        highlightsTitle: "Zasto izabrati",
        highlights: [
          "Puniji dan na plazi sa hranom ukljucenom.",
          "Dobro za grupe koje zele vise vremena na lokaciji.",
          "Kombinuje transfer brodom, kupanje i opusten ritam rucka.",
        ],
        practicalTitle: "Detalji ture",
        ctaTitle: "Pitaj za BBQ Tour",
        ctaBody:
          "Reci nam datum i broj gostiju da potvrdimo dostupnost i vrijeme rostilja.",
        bookingLabel: "Rezervisi ovu turu",
      },
      sunsetTour: {
        eyebrow: "Vecernje svjetlo",
        intro:
          "Sunset Tour je fokusirana na mirniji kraj dana, sa voznjom duz obale dok se svjetlo mijenja nad Jadranom.",
        highlightsTitle: "Zasto izabrati",
        highlights: [
          "Kraci vecernji format.",
          "Osnovana oko pogleda na more i zalaska sunca.",
          "Dobra opcija poslije dana na plazi ili setnje gradom.",
        ],
        practicalTitle: "Detalji ture",
        ctaTitle: "Pitaj za Sunset Tour",
        ctaBody:
          "Posalji zeljeno vece i broj gostiju, a mi cemo odgovoriti sa aktuelnim vremenom zalaska.",
        bookingLabel: "Rezervisi ovu turu",
      },
      moonlightTour: {
        eyebrow: "Nocno iskustvo",
        intro:
          "Moonlight Tour je planirana kao mirnije nocno iskustvo na obali. Trenutno nije prikazana kao aktivna tura za rezervaciju.",
        highlightsTitle: "Planirana atmosfera",
        highlights: [
          "More pod mjesecom i mirniji nocni ambijent.",
          "Zamisljeno za sporije, tise vrijeme uz vodu.",
          "Uskoro, dok se finalni detalji potvrdjuju.",
        ],
        practicalTitle: "Status ture",
        ctaTitle: "Pitaj za Moonlight planove",
        ctaBody:
          "Mozemo podijeliti novosti kada Moonlight Tour postane dostupna.",
        bookingLabel: "Pitaj za ovu turu",
        statusLabel: "Uskoro",
      },
    },
  },
};
