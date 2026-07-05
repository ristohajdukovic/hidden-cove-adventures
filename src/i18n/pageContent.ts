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
      comingSoon: "Coming soon",
      available: "Available",
      relatedTours: "More ways to see the coast",
    },
    seo: {
      home: {
        title: "Boat Tours in Ulcinj & Valdanos | Hidden Cove Ulcinj",
        description:
          "Small-group boat tours from Valdanos near Ulcinj, with hidden coves, a secluded beach, sunset trips and an optional beach barbecue.",
        ogTitle: "Boat Tours in Ulcinj & Valdanos | Hidden Cove Ulcinj",
        ogDescription:
          "Explore hidden coves near Ulcinj by boat, with small groups, local hospitality, sunset trips and a secluded beach stop.",
      },
      tours: {
        title: "Boat Tours from Valdanos | Hidden Cove Ulcinj",
        description:
          "Compare Classic, Beach BBQ, Sunset and coming-soon Moonlight boat tours along the Ulcinj and Valdanos coast.",
        ogTitle: "Boat Tours from Valdanos | Hidden Cove Ulcinj",
        ogDescription:
          "Choose the Hidden Cove Ulcinj boat tour that fits your day on the Adriatic.",
      },
      classicTour: {
        title: "Classic Boat Tour | Hidden Cove Ulcinj",
        description:
          "A relaxed four-hour boat trip from Valdanos with coastal cruising, drinks, sandwiches, sun loungers and a secluded beach stop.",
        ogTitle: "Classic Boat Tour | Hidden Cove Ulcinj",
        ogDescription:
          "The essential Hidden Cove Ulcinj day trip for swimming, coastal views and easy time at the beach.",
      },
      barbecueTour: {
        title: "Beach BBQ Boat Tour | Hidden Cove Ulcinj",
        description:
          "A four-hour coastal boat tour with a beach barbecue, relaxed sea time and the Hidden Cove Ulcinj beach setting.",
        ogTitle: "Beach BBQ Boat Tour | Hidden Cove Ulcinj",
        ogDescription:
          "Add a simple Mediterranean beach barbecue to the Hidden Cove Ulcinj coastal boat route.",
      },
      sunsetTour: {
        title: "Sunset Boat Tour | Hidden Cove Ulcinj",
        description:
          "An evening boat ride along the Ulcinj coast with sunset views from the Adriatic Sea.",
        ogTitle: "Sunset Boat Tour | Hidden Cove Ulcinj",
        ogDescription:
          "See the Ulcinj coast from the water during the quieter evening light.",
      },
      moonlightTour: {
        title: "Moonlight Tour | Hidden Cove Ulcinj",
        description:
          "A coming-soon night boat experience for moonlit sea views and quiet time on the Hidden Cove Ulcinj coast.",
        ogTitle: "Moonlight Tour | Hidden Cove Ulcinj",
        ogDescription:
          "The upcoming Hidden Cove Ulcinj night tour, planned for a softer evening at sea.",
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
        bookingLabel: "Enquire on WhatsApp",
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
        bookingLabel: "Enquire on WhatsApp",
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
        bookingLabel: "Enquire on WhatsApp",
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
        bookingLabel: "Ask for updates",
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
      comingSoon: "Demnaechst",
      available: "Verfuegbar",
      relatedTours: "Weitere Wege an die Kueste",
    },
    seo: {
      home: {
        title: "Bootstouren in Ulcinj & Valdanos | Hidden Cove Ulcinj",
        description:
          "Bootstouren in kleinen Gruppen ab Valdanos bei Ulcinj: versteckte Buchten, ein abgeschiedener Strand, Sonnenuntergangstouren und optionales Strand-BBQ.",
        ogTitle: "Bootstouren in Ulcinj & Valdanos | Hidden Cove Ulcinj",
        ogDescription:
          "Entdecke versteckte Buchten bei Ulcinj per Boot, mit kleinen Gruppen, lokaler Gastfreundschaft, Sonnenuntergangstouren und einem Strandstopp.",
      },
      tours: {
        title: "Bootstouren ab Valdanos | Hidden Cove Ulcinj",
        description:
          "Vergleiche Classic Tour, Strand-BBQ, Sunset Tour und die geplante Moonlight Tour entlang der Kueste von Ulcinj und Valdanos.",
        ogTitle: "Bootstouren ab Valdanos | Hidden Cove Ulcinj",
        ogDescription:
          "Waehle die Hidden Cove Ulcinj Bootstour, die zu deinem Tag an der Adria passt.",
      },
      classicTour: {
        title: "Classic Bootstour | Hidden Cove Ulcinj",
        description:
          "Eine entspannte vierstuendige Bootstour ab Valdanos mit Kuestenfahrt, Getraenken, Sandwiches, Liegen und Strandstopp.",
        ogTitle: "Classic Bootstour | Hidden Cove Ulcinj",
        ogDescription:
          "Der einfache Hidden Cove Ulcinj Tagesausflug zum Schwimmen, fuer Kuestenblicke und Zeit am Strand.",
      },
      barbecueTour: {
        title: "Strand-BBQ Bootstour | Hidden Cove Ulcinj",
        description:
          "Eine vierstuendige Kuestentour mit Strand-BBQ, entspannter Zeit am Meer und dem Hidden Cove Ulcinj Strandbereich.",
        ogTitle: "Strand-BBQ Bootstour | Hidden Cove Ulcinj",
        ogDescription:
          "Ergaenze die Hidden Cove Ulcinj Kuestentour um ein einfaches mediterranes Strand-BBQ.",
      },
      sunsetTour: {
        title: "Sunset Bootstour | Hidden Cove Ulcinj",
        description:
          "Eine abendliche Bootsfahrt entlang der Kueste von Ulcinj mit Sonnenuntergang vom Meer.",
        ogTitle: "Sunset Bootstour | Hidden Cove Ulcinj",
        ogDescription:
          "Erlebe die Kueste von Ulcinj vom Wasser aus im ruhigeren Abendlicht.",
      },
      moonlightTour: {
        title: "Moonlight Tour | Hidden Cove Ulcinj",
        description:
          "Eine geplante Nacht-Bootstour fuer Mondlicht, ruhige Meeresblicke und die Hidden Cove Ulcinj Kueste.",
        ogTitle: "Moonlight Tour | Hidden Cove Ulcinj",
        ogDescription:
          "Die kommende Hidden Cove Ulcinj Nachtour fuer einen sanfteren Abend auf dem Meer.",
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
        bookingLabel: "Auf WhatsApp anfragen",
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
        bookingLabel: "Auf WhatsApp anfragen",
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
        bookingLabel: "Auf WhatsApp anfragen",
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
        bookingLabel: "Updates anfragen",
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
      comingSoon: "Se shpejti",
      available: "I disponueshem",
      relatedTours: "Menyra te tjera per te pare bregdetin",
    },
    seo: {
      home: {
        title: "Ture me varke ne Ulqin & Valdanos | Hidden Cove Ulcinj",
        description:
          "Ture me varke ne grupe te vogla nga Valdanosi afer Ulqinit, me gjire te fshehura, plazh te qete, perendim dielli dhe BBQ ne plazh.",
        ogTitle: "Ture me varke ne Ulqin & Valdanos | Hidden Cove Ulcinj",
        ogDescription:
          "Eksploro gjire te fshehura afer Ulqinit me varke, ne grupe te vogla, me mikpritje lokale dhe ndalese ne plazh.",
      },
      tours: {
        title: "Ture me varke nga Valdanosi | Hidden Cove Ulcinj",
        description:
          "Krahaso Classic Tour, Beach BBQ, Sunset Tour dhe Moonlight Tour qe vjen se shpejti pergjate bregdetit te Ulqinit dhe Valdanosit.",
        ogTitle: "Ture me varke nga Valdanosi | Hidden Cove Ulcinj",
        ogDescription:
          "Zgjidh turin Hidden Cove Ulcinj qe i pershtatet dites tende ne Adriatik.",
      },
      classicTour: {
        title: "Classic Tour me varke | Hidden Cove Ulcinj",
        description:
          "Tur i qete kater-oreshe nga Valdanosi me lundrim bregdetar, pije, sanduice, shezllone dhe ndalese ne plazh.",
        ogTitle: "Classic Tour me varke | Hidden Cove Ulcinj",
        ogDescription:
          "Udhetimi i thjeshte ditor Hidden Cove Ulcinj per not, pamje bregdetare dhe kohe ne plazh.",
      },
      barbecueTour: {
        title: "Beach BBQ Tour | Hidden Cove Ulcinj",
        description:
          "Tur kater-oreshe me varke, BBQ ne plazh, kohe te qete prane detit dhe ambientin e plazhit Hidden Cove Ulcinj.",
        ogTitle: "Beach BBQ Tour | Hidden Cove Ulcinj",
        ogDescription:
          "Shto nje BBQ te thjeshte mesdhetare ne turin bregdetar Hidden Cove Ulcinj.",
      },
      sunsetTour: {
        title: "Sunset Tour me varke | Hidden Cove Ulcinj",
        description:
          "Lundrim mbremjeje pergjate bregdetit te Ulqinit me pamje te perendimit nga deti Adriatik.",
        ogTitle: "Sunset Tour me varke | Hidden Cove Ulcinj",
        ogDescription:
          "Shiko bregdetin e Ulqinit nga uji ne driten me te qete te mbremjes.",
      },
      moonlightTour: {
        title: "Moonlight Tour | Hidden Cove Ulcinj",
        description:
          "Eksperience nate qe vjen se shpejti per pamje deti nen hene dhe qetesi ne bregdetin Hidden Cove Ulcinj.",
        ogTitle: "Moonlight Tour | Hidden Cove Ulcinj",
        ogDescription:
          "Turi i ardhshem i nates Hidden Cove Ulcinj, i planifikuar per nje mbremje me te bute ne det.",
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
        bookingLabel: "Pyet ne WhatsApp",
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
        bookingLabel: "Pyet ne WhatsApp",
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
        bookingLabel: "Pyet ne WhatsApp",
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
        bookingLabel: "Pyet per perditesime",
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
      comingSoon: "Uskoro",
      available: "Dostupno",
      relatedTours: "Jos nacina da vidis obalu",
    },
    seo: {
      home: {
        title: "Ture brodom u Ulcinju i Valdanosu | Hidden Cove Ulcinj",
        description:
          "Ture brodom u malim grupama iz Valdanosa kod Ulcinja, sa skrivenim uvalama, mirnom plazom, turama za zalazak sunca i opcionim rostiljem na plazi.",
        ogTitle: "Ture brodom u Ulcinju i Valdanosu | Hidden Cove Ulcinj",
        ogDescription:
          "Istrazite skrivene uvale kod Ulcinja brodom, u maloj grupi, uz lokalno gostoprimstvo i zaustavljanje na plazi.",
      },
      tours: {
        title: "Ture brodom iz Valdanosa | Hidden Cove Ulcinj",
        description:
          "Uporedi Classic Tour, Beach BBQ, Sunset Tour i Moonlight Tour koja dolazi uskoro duz obale Ulcinja i Valdanosa.",
        ogTitle: "Ture brodom iz Valdanosa | Hidden Cove Ulcinj",
        ogDescription:
          "Izaberi Hidden Cove Ulcinj turu brodom koja odgovara tvom danu na Jadranu.",
      },
      classicTour: {
        title: "Classic Tour brodom | Hidden Cove Ulcinj",
        description:
          "Opustena cetvorosatna voznja brodom iz Valdanosa sa obalnom rutom, picem, sendvicima, lezaljkama i zaustavljanjem na plazi.",
        ogTitle: "Classic Tour brodom | Hidden Cove Ulcinj",
        ogDescription:
          "Osnovni Hidden Cove Ulcinj dnevni izlet za kupanje, pogled na obalu i vrijeme na plazi.",
      },
      barbecueTour: {
        title: "Beach BBQ Tour | Hidden Cove Ulcinj",
        description:
          "Cetvorosatna obalna tura brodom sa rostiljem na plazi, opustenim vremenom uz more i Hidden Cove Ulcinj ambijentom.",
        ogTitle: "Beach BBQ Tour | Hidden Cove Ulcinj",
        ogDescription:
          "Dodaj jednostavan mediteranski rostilj na plazi Hidden Cove Ulcinj obalnoj turi.",
      },
      sunsetTour: {
        title: "Sunset Tour brodom | Hidden Cove Ulcinj",
        description:
          "Vecernja voznja brodom duz obale Ulcinja sa pogledom na zalazak sunca sa Jadranskog mora.",
        ogTitle: "Sunset Tour brodom | Hidden Cove Ulcinj",
        ogDescription:
          "Pogledaj obalu Ulcinja sa vode u mirnijem vecernjem svjetlu.",
      },
      moonlightTour: {
        title: "Moonlight Tour | Hidden Cove Ulcinj",
        description:
          "Nocna tura koja dolazi uskoro, za pogled na more pod mjesecom i mirnu Hidden Cove Ulcinj obalu.",
        ogTitle: "Moonlight Tour | Hidden Cove Ulcinj",
        ogDescription:
          "Nadolazeca Hidden Cove Ulcinj nocna tura, planirana za mirnije vece na moru.",
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
        bookingLabel: "Pitaj na WhatsApp",
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
        bookingLabel: "Pitaj na WhatsApp",
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
        bookingLabel: "Pitaj na WhatsApp",
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
        bookingLabel: "Pitaj za novosti",
        statusLabel: "Uskoro",
      },
    },
  },
};
