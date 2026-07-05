import type { Lang } from "./locales";

export type TourKey = "hidden" | "sunset" | "moonlight" | "private";

export type FaqLinkTarget = "route" | "tours" | "booking" | "private";

export type FaqTranslation = {
  id: string;
  question: string;
  answer: string;
  links?: readonly {
    label: string;
    target: FaqLinkTarget;
  }[];
};

export type TranslationKeys = {
  nav: {
    tours: string;
    included: string;
    route: string;
    gallery: string;
    reviews: string;
    faq: string;
  };
  aria: {
    languageSelection: string;
    home: string;
    mainNavigation: string;
    mobileNavigation: string;
    bookTrip: string;
    openMenu: string;
    closeMenu: string;
  };
  cta: {
    whatsapp: string;
    contact: string;
    viewTours: string;
    call: string;
    book: string;
    bookTrip: string;
    bookNow: string;
  };
  whatsapp: {
    generalBooking: string;
    contact: string;
    classicTour: string;
    bbqTour: string;
    sunsetTour: string;
    moonlightTour: string;
    privateTour: string;
  };
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    serviceName: string;
    serviceType: string;
    noscript: string;
  };
  hero: {
    eyebrow: string;
    titleA: string;
    titleItalic: string;
    titleB: string;
    sub: string;
    imageAlt: string;
    established: string;
  };
  toursSection: { eyebrow: string; title: string; sub: string };
  tours: Record<
    TourKey,
    {
      name: string;
      tagline: string;
      desc: string;
      duration: string;
      group: string;
      price: string;
      included: string[];
      note?: string;
      imageAlt: string;
    }
  >;
  why: {
    eyebrow: string;
    title: string;
    items: { title: string; body: string }[];
  };
  route: {
    eyebrow: string;
    title: string;
    sub: string;
    instruction: string;
    controls: {
      exploreMap: string;
      lockMap: string;
      resumeJourney: string;
      playJourney: string;
      closeStory: string;
      previousStop: string;
      nextStop: string;
      routeLocations: string;
      mapLabel: string;
      fallbackTitle: string;
      missingKey: string;
      webGlUnavailable: string;
      mapUnavailable: string;
      noValidCoordinates: string;
      stopLabel: string;
      stopOfLabel: string;
      clearDraftConfirm: string;
      routeEditorIdle: string;
      routeEditing: string;
    };
    stops: readonly {
      id: string;
      number: 1 | 2 | 3;
      title: string;
      subtitle: string;
      shortLabel: string;
      markerAriaLabel: string;
      story: readonly string[];
    }[];
  };
  bbq: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: string[];
    imageAlt: string;
  };
  evening: {
    eyebrow: string;
    title: string;
    body: string;
    sunset: string;
    moon: string;
    sunsetAlt: string;
    moonAlt: string;
  };
  privateSec: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    imageAlt: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    items: readonly {
      alt: string;
    }[];
  };
  reviews: {
    eyebrow: string;
    title: string;
    ratingLabel: string;
    items: { name: string; from: string; text: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    highlightPhrase: string;
    items: readonly FaqTranslation[];
  };
  finalCta: { title: string; sub: string };
  footer: {
    pitch: string;
    pitchEmphasis: string;
    findUs: string;
    explore: string;
    bookFallback: string;
    city: string;
    bottomTagline: string;
    bottomPlaces: string;
    contact: string;
    languages: string;
    rights: string;
  };
  notFound: {
    title: string;
    body: string;
    home: string;
  };
};

const en: TranslationKeys = {
  nav: {
    tours: "Tours",
    included: "Included",
    route: "Route",
    gallery: "Gallery",
    reviews: "Reviews",
    faq: "FAQ",
  },
  aria: {
    languageSelection: "Language selection",
    home: "Hidden Cove Boat Tours home",
    mainNavigation: "Main navigation",
    mobileNavigation: "Mobile navigation",
    bookTrip: "Book a Hidden Cove Boat Tours trip",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
  },
  cta: {
    whatsapp: "Book on WhatsApp",
    contact: "Contact us",
    viewTours: "View tours",
    call: "Call",
    book: "Book",
    bookTrip: "Book a trip",
    bookNow: "Book now",
  },
  whatsapp: {
    generalBooking:
      "Hello, I'm interested in booking a boat tour with Hidden Cove Boat Tours. Preferred date: ____. Number of guests: ____. Please let me know which tours are available.",
    contact: "Hello, I have a question about Hidden Cove Boat Tours.",
    classicTour:
      "Hello, I'm interested in the Classic Tour for {{price}}. Preferred date: ____. Number of guests: ____.",
    bbqTour:
      "Hello, I'm interested in the BBQ Tour for {{price}}. Preferred date: ____. Number of guests: ____.",
    sunsetTour:
      "Hello, I'm interested in the Sunset Tour for {{price}}. Preferred date: ____. Number of guests: ____.",
    moonlightTour:
      "Hello, I would like more information about the upcoming Moonlight Tour.",
    privateTour:
      "Hello, I would like to inquire about a private boat tour. Preferred date: ____. Number of guests: ____. Please let me know what options are available.",
  },
  seo: {
    title: "Boat Tours in Ulcinj & Valdanos | Hidden Cove Boat Tours",
    description:
      "Small-group boat tours from Valdanos near Ulcinj, with hidden coves, a secluded beach, sunset trips and an optional beach barbecue.",
    ogTitle: "Boat Tours in Ulcinj & Valdanos | Hidden Cove Boat Tours",
    ogDescription:
      "Explore hidden coves near Ulcinj by boat, with small groups, local hospitality, sunset trips and a secluded beach stop.",
    serviceName: "Boat tours from Valdanos near Ulcinj",
    serviceType: "Boat tour",
    noscript:
      "Hidden Cove Boat Tours route locations: 1 Valdanos Bay, 2 Vucja jazbina, 3 Our Hidden Beach.",
  },
  hero: {
    eyebrow: "Ulcinj, Montenegro",
    titleA: "Boat tours from Ulcinj to ",
    titleItalic: "hidden coves",
    titleB: " and Valdanos.",
    sub: "Swim at a hidden beach, enjoy cold drinks, simple beach BBQ, sunset views, and moonlight nights by the sea.",
    imageAlt: "Hidden Adriatic cove near Ulcinj with an anchored wooden boat",
    established: "Est. 2018",
  },
  toursSection: {
    eyebrow: "Curated journeys",
    title: "Choose your day on the water",
    sub: "Small groups. Local skipper. Real coves.",
  },
  tours: {
    hidden: {
      name: "Classic Tour",
      tagline: "Day trip",
      desc: "Enjoy a relaxing boat trip along the Ulcinj coast, followed by several hours at a private beach area.",
      duration: "approx. 4 hours",
      group: "Up to 8 guests",
      price: "€50 per person",
      included: [
        "Boat transfer from Valdanos to Old Ulcinj and the beach",
        "Approximately 1 hour of boat cruising in total",
        "Two drinks per person",
        "Traditional Montenegrin sandwiches",
        "Use of sun loungers",
        "Kayaks",
        "Dërrasa SUP",
        "Snorkelling masks",
        "Water volleyball",
      ],
      note: "Additional drinks can be purchased during the tour.",
      imageAlt: "Classic Tour beach stop on the Ulcinj coast",
    },
    sunset: {
      name: "BBQ Tour",
      tagline: "Day trip",
      desc: "The same coastal boat and beach experience as the Classic Tour, with a freshly prepared barbecue meal instead of sandwiches.",
      duration: "approx. 4 hours",
      group: "Up to 8 guests",
      price: "€60 per person",
      included: [
        "Boat transfer from Valdanos to Old Ulcinj and the beach",
        "Approximately 1 hour of boat cruising in total",
        "Two drinks per person",
        "Barbecue meal",
        "Use of sun loungers",
        "Kayaks",
        "Dërrasa SUP",
        "Snorkelling masks",
        "Water volleyball",
      ],
      note: "Additional drinks can be purchased during the tour.",
      imageAlt: "BBQ Tour beach meal by the Adriatic",
    },
    moonlight: {
      name: "Sunset Tour",
      tagline: "Evening",
      desc: "Enjoy an evening boat ride along the Ulcinj coast and watch the sunset from the sea.",
      duration: "Evening",
      group: "Up to 8 guests",
      price: "€25 per person",
      included: [
        "Boat trip from Valdanos towards Old Ulcinj and the nearby beach",
        "Sunset views from the boat",
        "Use of the beach facilities and available water equipment",
      ],
      note: "Food and barbecue are not included. Additional drinks can be purchased during the tour.",
      imageAlt: "Sunset over the Adriatic Sea near Ulcinj",
    },
    private: {
      name: "Moonlight Tour",
      tagline: "Coming soon",
      desc: "A late-evening boat experience under the moonlight, with more details to be announced.",
      duration: "",
      group: "Up to 8 guests",
      price: "Coming soon",
      included: [],
      imageAlt: "Moonlit beach fire near the sea",
    },
  },
  why: {
    eyebrow: "Why this is different",
    title: "Local skipper, small groups, real places.",
    items: [
      {
        title: "Small groups only",
        body: "Maximum 8 guests. No crowded party boats - just space to breathe, swim and talk.",
      },
      {
        title: "Coves locals know",
        body: "We grew up on this coastline. We take you where the buses and big tours cannot go.",
      },
      {
        title: "Simple, honest hospitality",
        body: "Cold drinks, beach food, fresh fruit. Nothing fancy - exactly how summer should taste.",
      },
      {
        title: "Easy WhatsApp booking",
        body: "No long forms. Message us, we reply fast, you show up at the harbour.",
      },
    ],
  },
  route: {
    eyebrow: "Our route",
    title: "Three hidden points along the coast.",
    sub: "From the sheltered bay of Valdanos, the route follows the rocky coast to the Wolf's Cave and then to our secluded beach - a shore best approached from the sea.",
    instruction: "The route moves slowly. Select a number to explore its story.",
    controls: {
      exploreMap: "Explore map",
      lockMap: "Lock map",
      resumeJourney: "Resume journey",
      playJourney: "Play journey",
      closeStory: "Close route story",
      previousStop: "Previous stop",
      nextStop: "Next stop",
      routeLocations: "Route locations",
      mapLabel:
        "MapTiler Aquarelle map showing the Hidden Cove Boat Tours coastal route from Valdanos Bay to Vucja jazbina and Our Hidden Beach",
      fallbackTitle: "Map preview unavailable.",
      missingKey: "Add the public MapTiler API key to the local environment file.",
      webGlUnavailable: "WebGL is unavailable in this browser.",
      mapUnavailable: "MapTiler could not load the map preview.",
      noValidCoordinates: "No valid route coordinates are configured.",
      stopLabel: "Stop",
      stopOfLabel: "of",
      clearDraftConfirm: "Clear the draft sea route?",
      routeEditorIdle: "Route editor idle",
      routeEditing: "Editing route",
    },
    stops: [
      {
        id: "valdanos-bay",
        number: 1,
        title: "Valdanos Bay",
        subtitle: "Where the journey begins",
        shortLabel: "Valdanos",
        markerAriaLabel: "1. Valdanos Bay",
        story: [
          "Valdanos opens like a narrow horseshoe beneath olive-covered slopes. The sheltered bay has long belonged to the maritime world of Ulcinj, serving sailors, trading vessels and, according to local histories, the ships associated with Ulcinj's pirate era.",
          "In 1833, a brigantine arriving from Alexandria was ordered to remain here in quarantine for forty days. Much later, during the Yugoslav period, Valdanos became a military-tourism complex. The abandoned structures behind the shore still add another layer to the bay's history.",
        ],
      },
      {
        id: "vucja-jazbina",
        number: 2,
        title: "Vucja jazbina",
        subtitle: "The Wolf's Cave",
        shortLabel: "Wolf's Cave",
        markerAriaLabel: "2. Vucja jazbina, the Wolf's Cave",
        story: [
          "Between Valdanos and Kruce, the coast folds into a shadowed sea inlet known locally as Shpella e Ujkut or Vucja Vala - the Wolf's Cave. Its dark rock walls, concealed entrance and reflected blue water give it the atmosphere of a natural chamber carved into the coast.",
          "The surrounding underwater landscape is known for a rich coralligenous habitat - a marine garden formed by algae, sponges and other sea life. Some visitors describe it simply as the Blue Cave, but the local name remains the more distinctive one.",
        ],
      },
      {
        id: "our-hidden-beach",
        number: 3,
        title: "Our Hidden Beach",
        subtitle: "A shore approached from the sea",
        shortLabel: "Hidden Beach",
        markerAriaLabel: "3. Our Hidden Beach",
        story: [
          "There is no road leading directly down to this beach. It can be reached by a demanding hike beneath the olive-covered hills, but from the sea it appears naturally: a quiet strip of coast hidden behind the headland.",
          "Like many secluded coves along the Ulcinj coast, the beach has gathered stories of pirates hiding treasure beyond the reach of roads and old maps. It is local folklore rather than documented history - but in a place this concealed, the story is easy to understand.",
        ],
      },
    ],
  },
  bbq: {
    eyebrow: "BBQ & cold drinks",
    title: "A simple beach BBQ, the way the coast does it.",
    body: "We light a small fire on the pebbles, grill what is fresh, slice some watermelon. Cold local beer, water, soft drinks and homemade lemonade are always on board.",
    bullets: [
      "Fresh local catch and vegetables on the grill",
      "Cold beer, water, soft drinks, lemonade",
      "Vegetarian options on request",
      "Bring your own bottle of wine - we bring the ice",
    ],
    imageAlt: "Cold local drinks served on board",
  },
  evening: {
    eyebrow: "Sunset & moonlight",
    title: "The coast is at its best after 6pm.",
    body: "Two ways to spend an evening on the water with us.",
    sunset:
      "Watch the sun drop behind the Adriatic horizon with a cold drink in hand and the smell of grill on the breeze.",
    moon: "Sail by moonlight to a quiet cove, light a small fire, and stay until the stars come out.",
    sunsetAlt: "Sunset over a cove on the Ulcinj coast",
    moonAlt: "Small beach fire by the sea at night",
  },
  privateSec: {
    eyebrow: "Private charter",
    title: "Make the day entirely yours.",
    body: "Couples, families, friends, small celebrations. Tell us what you are dreaming of and we will design the route around it.",
    cta: "Enquire about a private tour",
    imageAlt: "Private boat tour along the Ulcinj coast",
  },
  gallery: {
    eyebrow: "Postcards",
    title: "From the boat.",
    items: [
      { alt: "Ulcinj Old Town walls seen from the sea" },
      { alt: "Clear Adriatic water below the boat" },
      { alt: "Valdanos Bay on the Montenegro coast" },
      { alt: "Hidden beach reached by boat" },
      { alt: "Sunset barbecue on the beach" },
      { alt: "Cold drinks on board" },
    ],
  },
  reviews: {
    eyebrow: "Guests",
    title: "What people say after a day with us.",
    ratingLabel: "Five star guest review",
    items: [
      {
        name: "Anna & Markus",
        from: "Berlin, Germany",
        text: "Best day of our entire holiday in Montenegro. The hidden beach was unreal and the BBQ at sunset - we still talk about it.",
      },
      {
        name: "Erion",
        from: "Tirana, Albania",
        text: "Professional work, a very kind skipper. The cove they took us to was paradise.",
      },
      {
        name: "The Kovac family",
        from: "Belgrade, Serbia",
        text: "Small boat, small group, brilliant day. The children did not want to go home. Highly recommended.",
      },
      {
        name: "Sophie",
        from: "London, UK",
        text: "Booked on WhatsApp the night before, easy and friendly. Felt like being shown around by a local friend.",
      },
    ],
  },
  faq: {
    eyebrow: "Good to know",
    title: "Frequently asked",
    highlightPhrase: "on request",
    items: [
      {
        id: "departure",
        question: "Where do your boat tours in Ulcinj depart from?",
        answer:
          "Our boat trips depart from Valdanos, near Ulcinj, Montenegro. The exact meeting point and departure details are confirmed with you on WhatsApp before the tour, so you have the current local instructions for your chosen date.",
        links: [{ label: "see the coastal route", target: "route" }],
      },
      {
        id: "available-tours",
        question: "Which boat tours do you offer?",
        answer:
          "The tours currently shown on the website are Classic Tour, BBQ Tour, Sunset Tour and Moonlight Tour. The Classic and BBQ tours are daytime boat trips, the Sunset Tour is an evening option, and Moonlight Tour remains marked as Coming soon until more details are published.",
        links: [{ label: "compare the tours", target: "tours" }],
      },
      {
        id: "prices",
        question: "How much does a boat tour in Ulcinj cost?",
        answer:
          "Current prices from the tour cards are: Classic Tour: €50 per person; BBQ Tour: €60 per person; Sunset Tour: €25 per person; Moonlight Tour: Coming soon. Availability can change by date and sea conditions, so please confirm your preferred tour and number of guests before planning around the price.",
        links: [{ label: "book through WhatsApp", target: "booking" }],
      },
      {
        id: "duration",
        question: "How long does the boat trip last?",
        answer:
          "Classic Tour and BBQ Tour are listed as approx. 4 hours, with approximately 1 hour of boat cruising in total. The Sunset Tour is an evening boat trip; exact timing is confirmed when you book. Moonlight Tour is still marked Coming soon.",
      },
      {
        id: "included",
        question: "What is included in the Hidden Cove boat tour?",
        answer:
          "Inclusions vary by selected tour. The Classic Tour includes boat transport, time at the beach, about 1 hour of total cruising, two drinks, Montenegrin sandwiches, loungers, kayaks, SUP boards, snorkelling masks and water volleyball. The BBQ Tour keeps the core experience and adds a barbecue meal instead of sandwiches.",
        links: [{ label: "compare the tours", target: "tours" }],
      },
      {
        id: "bbq-food",
        question: "What is served on the BBQ Tour?",
        answer:
          "We light a small fire on the pebbles, grill the fresh local catch and seasonal vegetables, slice some watermelon, and keep cold local beer, water, and homemade lemonade on board. A vegetarian option is available on request.",
      },
      {
        id: "hidden-beach-road",
        question: "Can the hidden beach be reached by road?",
        answer:
          "There is no road leading directly to the beach. It can be reached by a demanding hike through the surrounding hills, but arriving by boat is the easiest and most natural way to reach it.",
        links: [{ label: "see the coastal route", target: "route" }],
      },
      {
        id: "booking",
        question: "How do I book a boat tour?",
        answer:
          "Select your preferred tour and contact us through WhatsApp. Include your preferred date and number of guests, and we will confirm availability and the meeting details. If WhatsApp is not configured on the site, the booking action falls back to email.",
        links: [{ label: "book through WhatsApp", target: "booking" }],
      },
      {
        id: "private-tour",
        question: "Can I book a private boat tour from Ulcinj?",
        answer:
          "Yes. The site includes a private charter option for couples, families, friends and small celebrations. Send the date, group size and the kind of experience you have in mind, and the route can be discussed directly before confirmation.",
        links: [{ label: "ask about a private trip", target: "private" }],
      },
      {
        id: "weather",
        question: "What happens if the weather or sea conditions are unsuitable?",
        answer:
          "Safety comes first. If sea or weather conditions are unsuitable, we will contact you to discuss rescheduling or the options that apply to your booking. The website does not currently publish a separate automatic refund or cancellation policy.",
      },
    ],
  },
  finalCta: {
    title: "Ready for your day on the water?",
    sub: "Message us on WhatsApp - we usually reply within minutes.",
  },
  footer: {
    pitch: "A small boat, a hidden beach, and the kind of day",
    pitchEmphasis: "you cannot screenshot.",
    findUs: "Find us",
    explore: "Explore",
    bookFallback: "Book a trip",
    city: "Ulcinj, Montenegro",
    bottomTagline: "Sail slow / swim far",
    bottomPlaces: "Valdanos / Ulcinj / Montenegro",
    contact: "Contact",
    languages: "Languages",
    rights: "All rights reserved.",
  },
  notFound: {
    title: "Page not found",
    body: "This page is not available in the selected language.",
    home: "Return to the English homepage",
  },
};

const de: TranslationKeys = {
  nav: {
    tours: "Touren",
    included: "Inklusive",
    route: "Route",
    gallery: "Galerie",
    reviews: "Bewertungen",
    faq: "FAQ",
  },
  aria: {
    languageSelection: "Sprachauswahl",
    home: "Startseite von Hidden Cove Boat Tours",
    mainNavigation: "Hauptnavigation",
    mobileNavigation: "Mobile Navigation",
    bookTrip: "Eine Tour mit Hidden Cove Boat Tours buchen",
    openMenu: "Navigationsmenü öffnen",
    closeMenu: "Navigationsmenü schließen",
  },
  cta: {
    whatsapp: "Auf WhatsApp buchen",
    contact: "Kontakt",
    viewTours: "Touren ansehen",
    call: "Anrufen",
    book: "Buchen",
    bookTrip: "Tour buchen",
    bookNow: "Jetzt buchen",
  },
  whatsapp: {
    generalBooking:
      "Hallo, ich interessiere mich fuer eine Bootstour mit Hidden Cove Boat Tours. Wunschtermin: ____. Anzahl der Gaeste: ____. Bitte sagt mir, welche Touren verfuegbar sind.",
    contact: "Hallo, ich habe eine Frage zu Hidden Cove Boat Tours.",
    classicTour:
      "Hallo, ich interessiere mich fuer die Classic Tour fuer {{price}}. Wunschtermin: ____. Anzahl der Gaeste: ____.",
    bbqTour:
      "Hallo, ich interessiere mich fuer die BBQ Tour fuer {{price}}. Wunschtermin: ____. Anzahl der Gaeste: ____.",
    sunsetTour:
      "Hallo, ich interessiere mich fuer die Sunset Tour fuer {{price}}. Wunschtermin: ____. Anzahl der Gaeste: ____.",
    moonlightTour:
      "Hallo, ich moechte mehr Informationen zur kommenden Moonlight Tour.",
    privateTour:
      "Hallo, ich moechte eine private Bootstour anfragen. Wunschtermin: ____. Anzahl der Gaeste: ____. Bitte sagt mir, welche Optionen verfuegbar sind.",
  },
  seo: {
    title: "Bootstouren in Ulcinj & Valdanos | Hidden Cove Boat Tours",
    description:
      "Bootstouren in kleinen Gruppen ab Valdanos bei Ulcinj: versteckte Buchten, ein abgeschiedener Strand, Sonnenuntergangstouren und optionales Strand-BBQ.",
    ogTitle: "Bootstouren in Ulcinj & Valdanos | Hidden Cove Boat Tours",
    ogDescription:
      "Entdecke versteckte Buchten bei Ulcinj per Boot, mit kleinen Gruppen, lokaler Gastfreundschaft, Sonnenuntergangstouren und einem Strandstopp.",
    serviceName: "Bootstouren ab Valdanos bei Ulcinj",
    serviceType: "Bootstour",
    noscript:
      "Hidden Cove Boat Tours Routenpunkte: 1 Valdanos Bay, 2 Vucja jazbina, 3 Our Hidden Beach.",
  },
  hero: {
    eyebrow: "Ulcinj, Montenegro",
    titleA: "Bootstouren von Ulcinj zu ",
    titleItalic: "versteckten Buchten",
    titleB: " und Valdanos.",
    sub: "Schwimme an einem versteckten Strand, genieße kalte Getränke, einfaches Strand-BBQ, Sonnenuntergänge und Mondlichtnächte am Meer.",
    imageAlt: "Versteckte Adriabucht bei Ulcinj mit einem verankerten Holzboot",
    established: "Seit 2018",
  },
  toursSection: {
    eyebrow: "Ausgewählte Erlebnisse",
    title: "Wähle deinen Tag auf dem Wasser",
    sub: "Kleine Gruppen. Lokaler Skipper. Echte Buchten.",
  },
  tours: {
    hidden: {
      name: "Classic Tour",
      tagline: "Tagestour",
      desc: "Genieße eine entspannte Bootsfahrt entlang der Küste von Ulcinj und danach mehrere Stunden in einem privaten Strandbereich.",
      duration: "ca. 4 Stunden",
      group: "Bis zu 8 Gaeste",
      price: "50 € pro Person",
      included: [
        "Bootstransfer von Valdanos nach Alt-Ulcinj und zum Strand",
        "Insgesamt etwa 1 Stunde Bootsfahrt",
        "Zwei Getränke pro Person",
        "Traditionelle montenegrinische Sandwiches",
        "Nutzung der Sonnenliegen",
        "Kajaks",
        "Stand-up-Paddleboards",
        "Schnorchelmasken",
        "Wasservolleyball",
      ],
      note: "Zusätzliche Getränke können während der Tour gekauft werden.",
      imageAlt: "Strandstopp der Classic Tour an der Küste von Ulcinj",
    },
    sunset: {
      name: "BBQ Tour",
      tagline: "Tagestour",
      desc: "Das gleiche Boot- und Stranderlebnis wie bei der Classic Tour, mit frisch zubereitetem Grillessen statt Sandwiches.",
      duration: "ca. 4 Stunden",
      group: "Bis zu 8 Gaeste",
      price: "60 € pro Person",
      included: [
        "Bootstransfer von Valdanos nach Alt-Ulcinj und zum Strand",
        "Insgesamt etwa 1 Stunde Bootsfahrt",
        "Zwei Getränke pro Person",
        "Grillessen",
        "Nutzung der Sonnenliegen",
        "Kajaks",
        "Stand-up-Paddleboards",
        "Schnorchelmasken",
        "Wasservolleyball",
      ],
      note: "Zusätzliche Getränke können während der Tour gekauft werden.",
      imageAlt: "Grillessen der BBQ Tour am Adriastrand",
    },
    moonlight: {
      name: "Sunset Tour",
      tagline: "Abend",
      desc: "Genieße eine abendliche Bootsfahrt entlang der Küste von Ulcinj und sieh den Sonnenuntergang vom Meer aus.",
      duration: "Abends",
      group: "Bis zu 8 Gaeste",
      price: "25 € pro Person",
      included: [
        "Bootsfahrt von Valdanos in Richtung Alt-Ulcinj und nahegelegener Strand",
        "Sonnenuntergang vom Boot aus",
        "Nutzung der Strandanlage und der verfügbaren Wasserausrüstung",
      ],
      note: "Essen und BBQ sind nicht inklusive. Zusätzliche Getränke können während der Tour gekauft werden.",
      imageAlt: "Sonnenuntergang über der Adria bei Ulcinj",
    },
    private: {
      name: "Moonlight Tour",
      tagline: "Demnächst",
      desc: "Ein spätes Bootserlebnis im Mondlicht. Weitere Details werden noch bekannt gegeben.",
      duration: "",
      group: "Bis zu 8 Gaeste",
      price: "Demnächst",
      included: [],
      imageAlt: "Kleines Strandfeuer bei Nacht am Meer",
    },
  },
  why: {
    eyebrow: "Was uns anders macht",
    title: "Lokaler Skipper, kleine Gruppen, echte Orte.",
    items: [
      {
        title: "Nur kleine Gruppen",
        body: "Maximal 8 Gäste. Keine überfüllten Partyboote - nur Platz zum Atmen, Schwimmen und Reden.",
      },
      {
        title: "Buchten, die Einheimische kennen",
        body: "Wir sind an dieser Küste aufgewachsen. Wir bringen dich dorthin, wo Busse und große Touren nicht hinkommen.",
      },
      {
        title: "Einfache, ehrliche Gastfreundschaft",
        body: "Kalte Getränke, Strandessen, frisches Obst. Nichts Übertriebenes - genau so schmeckt Sommer.",
      },
      {
        title: "Einfache WhatsApp-Buchung",
        body: "Keine langen Formulare. Schreib uns, wir antworten schnell, du kommst zum Hafen.",
      },
    ],
  },
  route: {
    eyebrow: "Unsere Route",
    title: "Drei versteckte Punkte entlang der Küste.",
    sub: "Von der geschützten Bucht Valdanos folgt die Route der felsigen Küste zur Wolfshöhle und weiter zu unserem abgeschiedenen Strand - einem Ufer, das man am besten vom Meer aus erreicht.",
    instruction: "Die Route bewegt sich langsam. Wähle eine Nummer, um die Geschichte zu öffnen.",
    controls: {
      exploreMap: "Karte erkunden",
      lockMap: "Karte sperren",
      resumeJourney: "Route fortsetzen",
      playJourney: "Route abspielen",
      closeStory: "Routengeschichte schließen",
      previousStop: "Vorheriger Stopp",
      nextStop: "Nächster Stopp",
      routeLocations: "Routenpunkte",
      mapLabel:
        "MapTiler-Aquarelle-Karte der Hidden Cove Boat Tours Küstenroute von Valdanos Bay über Vucja jazbina zu Our Hidden Beach",
      fallbackTitle: "Kartenvorschau nicht verfügbar.",
      missingKey: "Füge den öffentlichen MapTiler API-Schlüssel zur lokalen Umgebungsdatei hinzu.",
      webGlUnavailable: "WebGL ist in diesem Browser nicht verfügbar.",
      mapUnavailable: "MapTiler konnte die Kartenvorschau nicht laden.",
      noValidCoordinates: "Es sind keine gültigen Routenkoordinaten konfiguriert.",
      stopLabel: "Stopp",
      stopOfLabel: "von",
      clearDraftConfirm: "Entwurf der Seeroute löschen?",
      routeEditorIdle: "Routeneditor inaktiv",
      routeEditing: "Route wird bearbeitet",
    },
    stops: [
      {
        id: "valdanos-bay",
        number: 1,
        title: "Valdanos Bay",
        subtitle: "Wo die Fahrt beginnt",
        shortLabel: "Valdanos",
        markerAriaLabel: "1. Valdanos Bay",
        story: [
          "Valdanos öffnet sich wie ein schmales Hufeisen unter olivenbewachsenen Hängen. Die geschützte Bucht gehört seit Langem zur maritimen Welt von Ulcinj - mit Seeleuten, Handelsschiffen und, laut lokalen Geschichten, Schiffen aus der Piratenzeit von Ulcinj.",
          "1833 musste eine aus Alexandria kommende Brigantine hier vierzig Tage in Quarantäne bleiben. Später, in der jugoslawischen Zeit, wurde Valdanos zu einem militärisch-touristischen Komplex. Die verlassenen Gebäude hinter dem Ufer erzählen noch eine weitere Schicht der Geschichte.",
        ],
      },
      {
        id: "vucja-jazbina",
        number: 2,
        title: "Vucja jazbina",
        subtitle: "Die Wolfshöhle",
        shortLabel: "Wolfshöhle",
        markerAriaLabel: "2. Vucja jazbina, die Wolfshöhle",
        story: [
          "Zwischen Valdanos und Kruce faltet sich die Küste zu einer schattigen Meeresbucht, die lokal Shpella e Ujkut oder Vucja Vala genannt wird - die Wolfshöhle. Dunkle Felswände, ein versteckter Eingang und blaues Spiegelwasser geben ihr die Wirkung einer natürlichen Kammer in der Küste.",
          "Die Unterwasserlandschaft rundherum ist für reiche koralligene Lebensräume bekannt - ein mariner Garten aus Algen, Schwämmen und anderem Meeresleben. Manche Besucher nennen sie einfach Blue Cave, doch der lokale Name bleibt der prägnantere.",
        ],
      },
      {
        id: "our-hidden-beach",
        number: 3,
        title: "Our Hidden Beach",
        subtitle: "Ein Ufer vom Meer aus",
        shortLabel: "Hidden Beach",
        markerAriaLabel: "3. Our Hidden Beach",
        story: [
          "Es führt keine Straße direkt hinunter zu diesem Strand. Man kann ihn über eine anspruchsvolle Wanderung unter den Olivenhügeln erreichen, doch vom Meer aus erscheint er ganz natürlich: ein ruhiger Küstenstreifen hinter der Landzunge.",
          "Wie viele abgelegene Buchten an der Küste von Ulcinj hat auch dieser Strand Geschichten von Piraten gesammelt, die Schätze jenseits von Straßen und alten Karten versteckten. Das ist lokale Folklore, keine dokumentierte Geschichte - aber an einem so verborgenen Ort versteht man sie sofort.",
        ],
      },
    ],
  },
  bbq: {
    eyebrow: "BBQ & kalte Getränke",
    title: "Ein einfaches Strand-BBQ, wie es die Küste macht.",
    body: "Wir machen ein kleines Feuer auf den Kieseln, grillen, was frisch ist, und schneiden Wassermelone. Kaltes lokales Bier, Wasser, Softdrinks und hausgemachte Limonade sind immer an Bord.",
    bullets: [
      "Frischer lokaler Fang und Gemüse vom Grill",
      "Kaltes Bier, Wasser, Softdrinks, Limonade",
      "Vegetarische Optionen auf Anfrage",
      "Bring deine eigene Flasche Wein mit - wir bringen das Eis",
    ],
    imageAlt: "Kalte lokale Getränke an Bord",
  },
  evening: {
    eyebrow: "Sonnenuntergang & Mondlicht",
    title: "Die Küste ist nach 18 Uhr am schönsten.",
    body: "Zwei Möglichkeiten, einen Abend mit uns auf dem Wasser zu verbringen.",
    sunset:
      "Sieh zu, wie die Sonne hinter dem Horizont der Adria verschwindet - mit einem kalten Getränk in der Hand und Grillduft in der Brise.",
    moon: "Fahre bei Mondlicht zu einer ruhigen Bucht, entzünde ein kleines Feuer und bleib, bis die Sterne erscheinen.",
    sunsetAlt: "Sonnenuntergang über einer Bucht an der Küste von Ulcinj",
    moonAlt: "Kleines Strandfeuer bei Nacht am Meer",
  },
  privateSec: {
    eyebrow: "Private Charter",
    title: "Macht den Tag ganz zu eurem.",
    body: "Paare, Familien, Freunde, kleine Feiern. Erzählt uns, wovon ihr träumt, und wir planen die Route passend dazu.",
    cta: "Private Tour anfragen",
    imageAlt: "Private Bootstour entlang der Küste von Ulcinj",
  },
  gallery: {
    eyebrow: "Postkarten",
    title: "Vom Boot.",
    items: [
      { alt: "Mauern der Altstadt von Ulcinj vom Meer aus" },
      { alt: "Klares Adri Wasser unter dem Boot" },
      { alt: "Valdanos Bay an der Küste Montenegros" },
      { alt: "Versteckter Strand, der per Boot erreicht wird" },
      { alt: "Strand-BBQ bei Sonnenuntergang" },
      { alt: "Kalte Getränke an Bord" },
    ],
  },
  reviews: {
    eyebrow: "Gäste",
    title: "Was Gäste nach einem Tag mit uns sagen.",
    ratingLabel: "Fünf-Sterne-Gästebewertung",
    items: [
      {
        name: "Anna & Markus",
        from: "Berlin, Deutschland",
        text: "Der beste Tag unseres gesamten Urlaubs in Montenegro. Der versteckte Strand war unglaublich und vom BBQ bei Sonnenuntergang sprechen wir immer noch.",
      },
      {
        name: "Erion",
        from: "Tirana, Albanien",
        text: "Sehr professionell, der Skipper war unglaublich freundlich. Die Bucht, zu der sie uns gebracht haben, war ein Paradies.",
      },
      {
        name: "Familie Kovac",
        from: "Belgrad, Serbien",
        text: "Kleines Boot, kleine Gruppe, großartiger Tag. Die Kinder wollten nicht nach Hause. Sehr empfehlenswert.",
      },
      {
        name: "Sophie",
        from: "London, UK",
        text: "Am Vorabend über WhatsApp gebucht, einfach und freundlich. Es fühlte sich an, als würde uns ein lokaler Freund herumführen.",
      },
    ],
  },
  faq: {
    eyebrow: "Gut zu wissen",
    title: "Häufig gefragt",
    highlightPhrase: "auf Anfrage",
    items: [
      {
        id: "departure",
        question: "Wo starten eure Bootstouren in Ulcinj?",
        answer:
          "Unsere Bootsausflüge starten in Valdanos, nahe Ulcinj in Montenegro. Den genauen Treffpunkt und die aktuellen Abfahrtsdetails bestätigen wir vor der Tour per WhatsApp, passend zu deinem Datum.",
        links: [{ label: "Küstenroute ansehen", target: "route" }],
      },
      {
        id: "available-tours",
        question: "Welche Bootstouren bietet ihr an?",
        answer:
          "Auf der Website zeigen wir aktuell Classic Tour, BBQ Tour, Sunset Tour und Moonlight Tour. Classic und BBQ sind Tagestouren, die Sunset Tour ist eine Abendoption, und die Moonlight Tour bleibt als Demnächst markiert, bis weitere Details veröffentlicht sind.",
        links: [{ label: "Touren vergleichen", target: "tours" }],
      },
      {
        id: "prices",
        question: "Was kostet eine Bootstour in Ulcinj?",
        answer:
          "Die aktuellen Preise aus den Tourkarten sind: Classic Tour: 50 € pro Person; BBQ Tour: 60 € pro Person; Sunset Tour: 25 € pro Person; Moonlight Tour: Demnächst. Verfügbarkeit kann sich je nach Datum und Seebedingungen ändern, bitte bestätige deine gewünschte Tour und Gruppengröße vor der Planung.",
        links: [{ label: "über WhatsApp buchen", target: "booking" }],
      },
      {
        id: "duration",
        question: "Wie lange dauert die Bootsfahrt?",
        answer:
          "Classic Tour und BBQ Tour sind mit ca. 4 Stunden angegeben, inklusive insgesamt etwa 1 Stunde Bootsfahrt. Die Sunset Tour ist eine Abendfahrt; die genaue Uhrzeit bestätigen wir bei der Buchung. Die Moonlight Tour ist weiterhin als Demnächst markiert.",
      },
      {
        id: "included",
        question: "Was ist in der Hidden-Cove-Bootstour enthalten?",
        answer:
          "Die Leistungen unterscheiden sich je nach Tour. Die Classic Tour umfasst Bootstransfer, Zeit am Strand, etwa 1 Stunde Fahrt insgesamt, zwei Getränke, montenegrinische Sandwiches, Sonnenliegen, Kajaks, SUP-Boards, Schnorchelmasken und Wasservolleyball. Die BBQ Tour übernimmt das Kernerlebnis und ersetzt die Sandwiches durch ein Grillessen.",
        links: [{ label: "Touren vergleichen", target: "tours" }],
      },
      {
        id: "bbq-food",
        question: "Was gibt es auf der BBQ Tour zu essen?",
        answer:
          "Wir machen ein kleines Feuer auf den Kieseln, grillen frischen lokalen Fang und saisonales Gemüse, schneiden Wassermelone und haben kaltes lokales Bier, Wasser und hausgemachte Limonade an Bord. Eine vegetarische Option ist auf Anfrage möglich.",
      },
      {
        id: "hidden-beach-road",
        question: "Kann man den versteckten Strand über eine Straße erreichen?",
        answer:
          "Es führt keine Straße direkt zum Strand. Eine anspruchsvolle Wanderung durch die umliegenden Hügel ist möglich, aber die Ankunft per Boot ist der einfachste und natürlichste Weg.",
        links: [{ label: "Küstenroute ansehen", target: "route" }],
      },
      {
        id: "booking",
        question: "Wie buche ich eine Bootstour?",
        answer:
          "Wähle deine bevorzugte Tour und kontaktiere uns über WhatsApp. Nenne deinen Wunschtermin und die Anzahl der Gäste, dann bestätigen wir Verfügbarkeit und Treffpunkt. Falls WhatsApp auf der Website nicht eingerichtet ist, fällt die Buchungsaktion auf E-Mail zurück.",
        links: [{ label: "über WhatsApp buchen", target: "booking" }],
      },
      {
        id: "private-tour",
        question: "Kann ich eine private Bootstour ab Ulcinj buchen?",
        answer:
          "Ja. Die Website enthält eine private Charter-Option für Paare, Familien, Freunde und kleine Feiern. Schick uns Datum, Gruppengröße und die Art von Erlebnis, die du dir vorstellst, dann besprechen wir die Route direkt vor der Bestätigung.",
        links: [{ label: "private Tour anfragen", target: "private" }],
      },
      {
        id: "weather",
        question: "Was passiert bei ungeeignetem Wetter oder Seegang?",
        answer:
          "Sicherheit geht vor. Wenn Wetter oder Seebedingungen ungeeignet sind, kontaktieren wir dich, um eine Verschiebung oder die für deine Buchung geltenden Optionen zu besprechen. Die Website veröffentlicht derzeit keine separate automatische Rückerstattungs- oder Stornierungsregel.",
      },
    ],
  },
  finalCta: {
    title: "Bereit für deinen Tag auf dem Wasser?",
    sub: "Schreib uns auf WhatsApp - wir antworten meist innerhalb weniger Minuten.",
  },
  footer: {
    pitch: "Ein kleines Boot, ein versteckter Strand und ein Tag, den",
    pitchEmphasis: "kein Screenshot festhalten kann.",
    findUs: "Finde uns",
    explore: "Entdecken",
    bookFallback: "Tour buchen",
    city: "Ulcinj, Montenegro",
    bottomTagline: "Langsam segeln / weit schwimmen",
    bottomPlaces: "Valdanos / Ulcinj / Montenegro",
    contact: "Kontakt",
    languages: "Sprachen",
    rights: "Alle Rechte vorbehalten.",
  },
  notFound: {
    title: "Seite nicht gefunden",
    body: "Diese Seite ist in der ausgewählten Sprache nicht verfügbar.",
    home: "Zur englischen Startseite",
  },
};

const sq: TranslationKeys = {
  nav: {
    tours: "Turet",
    included: "Përfshihet",
    route: "Itinerari",
    gallery: "Galeria",
    reviews: "Vlerësime",
    faq: "Pyetje",
  },
  aria: {
    languageSelection: "Zgjedhja e gjuhës",
    home: "Faqja kryesore e Hidden Cove Boat Tours",
    mainNavigation: "Navigimi kryesor",
    mobileNavigation: "Navigimi në celular",
    bookTrip: "Rezervo një udhëtim me Hidden Cove Boat Tours",
    openMenu: "Hap menynë e navigimit",
    closeMenu: "Mbyll menynë e navigimit",
  },
  cta: {
    whatsapp: "Rezervo në WhatsApp",
    contact: "Na kontakto",
    viewTours: "Shiko turet",
    call: "Telefono",
    book: "Rezervo",
    bookTrip: "Rezervo turin",
    bookNow: "Rezervo tani",
  },
  whatsapp: {
    generalBooking:
      "Pershendetje, jam i/e interesuar te rezervoj nje tur me varke me Hidden Cove Boat Tours. Data e deshiruar: ____. Numri i mysafireve: ____. Ju lutem me tregoni cilat ture jane te disponueshme.",
    contact: "Pershendetje, kam nje pyetje per Hidden Cove Boat Tours.",
    classicTour:
      "Pershendetje, jam i/e interesuar per Classic Tour per {{price}}. Data e deshiruar: ____. Numri i mysafireve: ____.",
    bbqTour:
      "Pershendetje, jam i/e interesuar per BBQ Tour per {{price}}. Data e deshiruar: ____. Numri i mysafireve: ____.",
    sunsetTour:
      "Pershendetje, jam i/e interesuar per Sunset Tour per {{price}}. Data e deshiruar: ____. Numri i mysafireve: ____.",
    moonlightTour:
      "Pershendetje, dua me shume informacion per Moonlight Tour qe vjen se shpejti.",
    privateTour:
      "Pershendetje, dua te pyes per nje tur privat me varke. Data e deshiruar: ____. Numri i mysafireve: ____. Ju lutem me tregoni cilat opsione jane te disponueshme.",
  },
  seo: {
    title: "Ture me varkë në Ulqin & Valdanos | Hidden Cove Boat Tours",
    description:
      "Ture me varkë në grupe të vogla nga Valdanosi pranë Ulqinit, me gjire të fshehura, plazh të qetë, udhëtime në perëndim dielli dhe BBQ opsional në plazh.",
    ogTitle: "Ture me varkë në Ulqin & Valdanos | Hidden Cove Boat Tours",
    ogDescription:
      "Zbulo gjire të fshehura pranë Ulqinit me varkë, në grupe të vogla, me mikpritje vendase, perëndim dielli dhe ndalesë në plazh.",
    serviceName: "Ture me varkë nga Valdanosi pranë Ulqinit",
    serviceType: "Tur me varkë",
    noscript:
      "Pikat e itinerarit Hidden Cove Boat Tours: 1 Valdanos Bay, 2 Vucja jazbina, 3 Our Hidden Beach.",
  },
  hero: {
    eyebrow: "Ulqin, Mali i Zi",
    titleA: "Udhëtime me varkë nga Ulqini drejt ",
    titleItalic: "gjireve të fshehura",
    titleB: " dhe Valdanosit.",
    sub: "Not në një plazh të fshehur, pije të ftohta, BBQ i thjeshtë në breg, perëndime dielli dhe net me hënë pranë detit.",
    imageAlt: "Gji i fshehur i Adriatikut pranë Ulqinit me një varkë druri të ankoruar",
    established: "Që nga 2018",
  },
  toursSection: {
    eyebrow: "Udhëtime të zgjedhura",
    title: "Zgjidh ditën tënde në det",
    sub: "Grupe të vogla. Skiper vendas. Gjire të vërteta.",
  },
  tours: {
    hidden: {
      name: "Classic Tour",
      tagline: "Tur ditor",
      desc: "Shijo një udhëtim të qetë me varkë përgjatë bregut të Ulqinit, pastaj disa orë në një zonë private plazhi.",
      duration: "rreth 4 orë",
      group: "Deri në 8 mysafirë",
      price: "50 € për person",
      included: [
        "Transfer me varkë nga Valdanosi drejt Ulqinit të Vjetër dhe plazhit",
        "Rreth 1 orë lundrim gjithsej",
        "Dy pije për person",
        "Sanduiçe tradicionale malazeze",
        "Përdorimi i shezlongëve",
        "Kajakë",
        "Stand-up paddleboards",
        "Maska për snorkelling",
        "Volejboll në ujë",
      ],
      note: "Pije shtesë mund të blihen gjatë turit.",
      imageAlt: "Ndalesë në plazh gjatë Classic Tour në bregun e Ulqinit",
    },
    sunset: {
      name: "BBQ Tour",
      tagline: "Tur ditor",
      desc: "E njëjta përvojë me varkë dhe plazh si Classic Tour, me një vakt BBQ të përgatitur në vend në vend të sanduiçeve.",
      duration: "rreth 4 orë",
      group: "Deri në 8 mysafirë",
      price: "60 € për person",
      included: [
        "Transfer me varkë nga Valdanosi drejt Ulqinit të Vjetër dhe plazhit",
        "Rreth 1 orë lundrim gjithsej",
        "Dy pije për person",
        "Vakt BBQ",
        "Përdorimi i shezlongëve",
        "Kajakë",
        "Stand-up paddleboards",
        "Maska për snorkelling",
        "Volejboll në ujë",
      ],
      note: "Pije shtesë mund të blihen gjatë turit.",
      imageAlt: "Vakt BBQ në plazh pranë Adriatikut",
    },
    moonlight: {
      name: "Sunset Tour",
      tagline: "Mbrëmje",
      desc: "Shijo një udhëtim mbrëmjeje me varkë përgjatë bregut të Ulqinit dhe shiko perëndimin e diellit nga deti.",
      duration: "Mbrëmje",
      group: "Deri në 8 mysafirë",
      price: "25 € për person",
      included: [
        "Udhëtim me varkë nga Valdanosi drejt Ulqinit të Vjetër dhe plazhit afër",
        "Pamje të perëndimit të diellit nga varka",
        "Përdorimi i pajisjeve të plazhit dhe ujit kur janë në dispozicion",
      ],
      note: "Ushqimi dhe BBQ nuk përfshihen. Pije shtesë mund të blihen gjatë turit.",
      imageAlt: "Perëndim dielli mbi Detin Adriatik pranë Ulqinit",
    },
    private: {
      name: "Moonlight Tour",
      tagline: "Së shpejti",
      desc: "Një përvojë e vonë në mbrëmje me varkë nën dritën e hënës; detajet do të publikohen më vonë.",
      duration: "",
      group: "Deri në 8 mysafirë",
      price: "Së shpejti",
      included: [],
      imageAlt: "Zjarr i vogël në plazh natën pranë detit",
    },
  },
  why: {
    eyebrow: "Pse është ndryshe",
    title: "Skiper vendas, grupe të vogla, vende të vërteta.",
    items: [
      {
        title: "Vetëm grupe të vogla",
        body: "Maksimumi 8 mysafirë. Jo varka të mbushura për festa - vetëm hapësirë për frymëmarrje, not dhe bisedë.",
      },
      {
        title: "Gjire që i njohin vendasit",
        body: "Jemi rritur në këtë bregdet. Ju çojmë atje ku autobusët dhe turet e mëdha nuk mund të shkojnë.",
      },
      {
        title: "Mikpritje e thjeshtë dhe e sinqertë",
        body: "Pije të ftohta, ushqim në plazh, fruta të freskëta. Asgjë e tepruar - pikërisht shija e verës.",
      },
      {
        title: "Rezervim i lehtë në WhatsApp",
        body: "Pa formularë të gjatë. Na shkruani, përgjigjemi shpejt, ju vini në port.",
      },
    ],
  },
  route: {
    eyebrow: "Itinerari ynë",
    title: "Tre pika të fshehura përgjatë bregut.",
    sub: "Nga gjiri i mbrojtur i Valdanosit, itinerari ndjek bregun shkëmbor drejt Shpellës së Ujkut dhe më pas te plazhi ynë i qetë - një breg që afrohet më natyrshëm nga deti.",
    instruction: "Itinerari lëviz ngadalë. Zgjidh një numër për të hapur historinë.",
    controls: {
      exploreMap: "Eksploro hartën",
      lockMap: "Blloko hartën",
      resumeJourney: "Vazhdo udhëtimin",
      playJourney: "Luaj udhëtimin",
      closeStory: "Mbyll historinë e itinerarit",
      previousStop: "Ndalesa e mëparshme",
      nextStop: "Ndalesa tjetër",
      routeLocations: "Pikat e itinerarit",
      mapLabel:
        "Hartë MapTiler Aquarelle që tregon itinerarin bregdetar të Hidden Cove Boat Tours nga Valdanos Bay te Vucja jazbina dhe Our Hidden Beach",
      fallbackTitle: "Pamja e hartës nuk është e disponueshme.",
      missingKey: "Shto çelësin publik MapTiler API në skedarin lokal të mjedisit.",
      webGlUnavailable: "WebGL nuk është i disponueshëm në këtë shfletues.",
      mapUnavailable: "MapTiler nuk mundi të ngarkojë pamjen e hartës.",
      noValidCoordinates: "Nuk janë konfiguruar koordinata të vlefshme të itinerarit.",
      stopLabel: "Ndalesa",
      stopOfLabel: "nga",
      clearDraftConfirm: "Të fshihet skica e itinerarit detar?",
      routeEditorIdle: "Editori i itinerarit është joaktiv",
      routeEditing: "Po redaktohet itinerari",
    },
    stops: [
      {
        id: "valdanos-bay",
        number: 1,
        title: "Valdanos Bay",
        subtitle: "Aty ku fillon udhëtimi",
        shortLabel: "Valdanos",
        markerAriaLabel: "1. Valdanos Bay",
        story: [
          "Valdanosi hapet si një patkua e ngushtë nën shpatet me ullinj. Gjiri i mbrojtur ka qenë prej kohësh pjesë e botës detare të Ulqinit, me detarë, anije tregtare dhe, sipas historive lokale, anije të lidhura me epokën e piratëve të Ulqinit.",
          "Në vitin 1833, një brigantinë që vinte nga Aleksandria u urdhërua të qëndronte këtu në karantinë për dyzet ditë. Më vonë, në periudhën jugosllave, Valdanosi u bë kompleks ushtarak-turistik. Strukturat e braktisura pas bregut i shtojnë gjirit një shtresë tjetër historie.",
        ],
      },
      {
        id: "vucja-jazbina",
        number: 2,
        title: "Vucja jazbina",
        subtitle: "Shpella e Ujkut",
        shortLabel: "Shpella e Ujkut",
        markerAriaLabel: "2. Vucja jazbina, Shpella e Ujkut",
        story: [
          "Mes Valdanosit dhe Kruces, bregu paloset në një hyrje detare me hije, e njohur lokalisht si Shpella e Ujkut ose Vucja Vala. Muret e errëta shkëmbore, hyrja e fshehur dhe uji blu i reflektuar i japin atmosferën e një dhome natyrore të gdhendur në breg.",
          "Peizazhi nënujor përreth njihet për habitat të pasur koraligjen - një kopsht detar i formuar nga alga, sfungjerë dhe jetë tjetër detare. Disa vizitorë e quajnë thjesht Blue Cave, por emri lokal mbetet më i veçanti.",
        ],
      },
      {
        id: "our-hidden-beach",
        number: 3,
        title: "Our Hidden Beach",
        subtitle: "Një breg që afrohet nga deti",
        shortLabel: "Hidden Beach",
        markerAriaLabel: "3. Our Hidden Beach",
        story: [
          "Nuk ka rrugë që zbret drejtpërdrejt në këtë plazh. Mund të arrihet me një ecje të vështirë poshtë kodrave me ullinj, por nga deti shfaqet natyrshëm: një rrip i qetë bregu i fshehur pas kepit.",
          "Si shumë gjire të izoluara në bregun e Ulqinit, edhe ky plazh ka mbledhur tregime për piratë që fshehnin thesare jashtë rrugëve dhe hartave të vjetra. Është folklor lokal, jo histori e dokumentuar - por në një vend kaq të fshehur, tregimi kuptohet lehtë.",
        ],
      },
    ],
  },
  bbq: {
    eyebrow: "BBQ & pije të ftohta",
    title: "Një BBQ i thjeshtë në plazh, siç e bën bregu.",
    body: "Ndezim një zjarr të vogël mbi guralecë, pjekim atë që është e freskët dhe presim shalqi. Birrë lokale e ftohtë, ujë, pije freskuese dhe limonadë shtëpie janë gjithmonë në bord.",
    bullets: [
      "Peshk lokal i freskët dhe perime në skarë",
      "Birrë e ftohtë, ujë, pije freskuese, limonadë",
      "Opsione vegjetariane me kërkesë",
      "Sillni shishen tuaj të verës - ne sjellim akullin",
    ],
    imageAlt: "Pije të ftohta lokale të shërbyera në bord",
  },
  evening: {
    eyebrow: "Perëndim & hënë",
    title: "Bregdeti është më i bukur pas orës 18.",
    body: "Dy mënyra për të kaluar një mbrëmje në ujë me ne.",
    sunset:
      "Shiko diellin që ulet pas horizontit të Adriatikut, me një pije të ftohtë në dorë dhe aromën e skarës në fllad.",
    moon: "Lundro nën dritën e hënës drejt një gjiri të qetë, ndiz një zjarr të vogël dhe qëndro derisa të dalin yjet.",
    sunsetAlt: "Perëndim dielli mbi një gji në bregun e Ulqinit",
    moonAlt: "Zjarr i vogël në plazh natën pranë detit",
  },
  privateSec: {
    eyebrow: "Qira private",
    title: "Bëje ditën krejtësisht tënden.",
    body: "Çifte, familje, miq, festa të vogla. Na trego çfarë ëndërron dhe ne e ndërtojmë itinerarin rreth saj.",
    cta: "Pyet për tur privat",
    imageAlt: "Tur privat me varkë përgjatë bregut të Ulqinit",
  },
  gallery: {
    eyebrow: "Kartolina",
    title: "Nga varka.",
    items: [
      { alt: "Muret e Kalasë së Ulqinit të parë nga deti" },
      { alt: "Ujë i kthjellët i Adriatikut poshtë varkës" },
      { alt: "Valdanos Bay në bregun e Malit të Zi" },
      { alt: "Plazh i fshehur që arrihet me varkë" },
      { alt: "BBQ në plazh në perëndim dielli" },
      { alt: "Pije të ftohta në bord" },
    ],
  },
  reviews: {
    eyebrow: "Mysafirët",
    title: "Çfarë thonë njerëzit pas një dite me ne.",
    ratingLabel: "Vlerësim me pesë yje nga mysafiri",
    items: [
      {
        name: "Anna & Markus",
        from: "Berlin, Gjermani",
        text: "Dita më e mirë e gjithë pushimeve tona në Mal të Zi. Plazhi i fshehur ishte i pabesueshëm dhe ende flasim për BBQ-në në perëndim.",
      },
      {
        name: "Erion",
        from: "Tiranë, Shqipëri",
        text: "Punë profesionale, skiperi shumë i sjellshëm. Gjiri ku na çuan ishte parajsë.",
      },
      {
        name: "Familja Kovac",
        from: "Beograd, Serbi",
        text: "Varkë e vogël, grup i vogël, ditë e shkëlqyer. Fëmijët nuk donin të ktheheshin në shtëpi.",
      },
      {
        name: "Sophie",
        from: "London, MB",
        text: "Rezervova në WhatsApp një natë më parë, lehtë dhe miqësisht. Si të të tregojë vendin një mik vendas.",
      },
    ],
  },
  faq: {
    eyebrow: "Mirë të dish",
    title: "Pyetje të shpeshta",
    highlightPhrase: "me kërkesë",
    items: [
      {
        id: "departure",
        question: "Nga nisen turet me varkë në Ulqin?",
        answer:
          "Udhëtimet tona me varkë nisen nga Valdanosi, pranë Ulqinit, Mali i Zi. Pikën e saktë të takimit dhe detajet e nisjes i konfirmojmë në WhatsApp para turit, sipas datës suaj.",
        links: [{ label: "shiko itinerarin bregdetar", target: "route" }],
      },
      {
        id: "available-tours",
        question: "Cilat ture me varkë ofroni?",
        answer:
          "Turet që shfaqen aktualisht në faqe janë Classic Tour, BBQ Tour, Sunset Tour dhe Moonlight Tour. Classic dhe BBQ janë ture ditore, Sunset Tour është opsion mbrëmjeje, ndërsa Moonlight Tour mbetet e shënuar si Së shpejti deri sa të publikohen më shumë detaje.",
        links: [{ label: "krahaso turet", target: "tours" }],
      },
      {
        id: "prices",
        question: "Sa kushton një tur me varkë në Ulqin?",
        answer:
          "Çmimet aktuale nga kartat e tureve janë: Classic Tour: 50 € për person; BBQ Tour: 60 € për person; Sunset Tour: 25 € për person; Moonlight Tour: Së shpejti. Disponueshmëria mund të ndryshojë sipas datës dhe kushteve të detit, prandaj konfirmoni turin dhe numrin e mysafirëve para planifikimit.",
        links: [{ label: "rezervo në WhatsApp", target: "booking" }],
      },
      {
        id: "duration",
        question: "Sa zgjat udhëtimi me varkë?",
        answer:
          "Classic Tour dhe BBQ Tour janë të listuara si rreth 4 orë, me rreth 1 orë lundrim gjithsej. Sunset Tour është udhëtim mbrëmjeje; orari i saktë konfirmohet gjatë rezervimit. Moonlight Tour ende është shënuar Së shpejti.",
      },
      {
        id: "included",
        question: "Çfarë përfshihet në turin Hidden Cove?",
        answer:
          "Përfshirjet ndryshojnë sipas turit. Classic Tour përfshin transfer me varkë, kohë në plazh, rreth 1 orë lundrim gjithsej, dy pije, sanduiçe malazeze, shezlongë, kajakë, SUP boards, maska snorkelling dhe volejboll në ujë. BBQ Tour mban përvojën kryesore dhe shton një vakt BBQ në vend të sanduiçeve.",
        links: [{ label: "krahaso turet", target: "tours" }],
      },
      {
        id: "bbq-food",
        question: "Çfarë shërbehet në BBQ Tour?",
        answer:
          "Ndezim një zjarr të vogël mbi guralecë, pjekim peshk lokal të freskët dhe perime sezonale, presim shalqi dhe mbajmë në bord birrë lokale të ftohtë, ujë dhe limonadë shtëpie. Opsioni vegjetarian është i mundur me kërkesë.",
      },
      {
        id: "hidden-beach-road",
        question: "A mund të arrihet plazhi i fshehur me rrugë?",
        answer:
          "Nuk ka rrugë që të çon drejtpërdrejt në plazh. Mund të arrihet me një ecje të vështirë nëpër kodrat përreth, por mbërritja me varkë është mënyra më e lehtë dhe më natyrale.",
        links: [{ label: "shiko itinerarin bregdetar", target: "route" }],
      },
      {
        id: "booking",
        question: "Si mund të rezervoj një tur me varkë?",
        answer:
          "Zgjidhni turin e dëshiruar dhe na kontaktoni në WhatsApp. Përfshini datën e preferuar dhe numrin e mysafirëve, dhe ne konfirmojmë disponueshmërinë dhe detajet e takimit. Nëse WhatsApp nuk është konfiguruar në faqe, veprimi i rezervimit kalon në email.",
        links: [{ label: "rezervo në WhatsApp", target: "booking" }],
      },
      {
        id: "private-tour",
        question: "A mund të rezervoj një tur privat me varkë nga Ulqini?",
        answer:
          "Po. Faqja përfshin një opsion privat për çifte, familje, miq dhe festa të vogla. Dërgoni datën, madhësinë e grupit dhe përvojën që keni në mendje, dhe itinerari mund të diskutohet drejtpërdrejt para konfirmimit.",
        links: [{ label: "pyet për tur privat", target: "private" }],
      },
      {
        id: "weather",
        question: "Çfarë ndodh nëse moti ose deti nuk janë të përshtatshëm?",
        answer:
          "Siguria është e para. Nëse kushtet e detit ose motit nuk janë të përshtatshme, do t'ju kontaktojmë për të diskutuar zhvendosjen e datës ose opsionet që vlejnë për rezervimin tuaj. Faqja aktualisht nuk publikon një politikë të veçantë automatike rimbursimi ose anulimi.",
      },
    ],
  },
  finalCta: {
    title: "Gati për ditën tënde në det?",
    sub: "Na shkruaj në WhatsApp - zakonisht përgjigjemi brenda pak minutash.",
  },
  footer: {
    pitch: "Një varkë e vogël, një plazh i fshehur dhe një ditë që",
    pitchEmphasis: "nuk kapet dot në screenshot.",
    findUs: "Na gjeni",
    explore: "Eksploro",
    bookFallback: "Rezervo turin",
    city: "Ulqin, Mali i Zi",
    bottomTagline: "Lundro ngadalë / noto larg",
    bottomPlaces: "Valdanos / Ulqin / Mali i Zi",
    contact: "Kontakt",
    languages: "Gjuhët",
    rights: "Të gjitha të drejtat e rezervuara.",
  },
  notFound: {
    title: "Faqja nuk u gjet",
    body: "Kjo faqe nuk është e disponueshme në gjuhën e zgjedhur.",
    home: "Kthehu te faqja kryesore në anglisht",
  },
};

const me: TranslationKeys = {
  nav: {
    tours: "Ture",
    included: "Uključeno",
    route: "Ruta",
    gallery: "Galerija",
    reviews: "Utisci",
    faq: "Pitanja",
  },
  aria: {
    languageSelection: "Izbor jezika",
    home: "Početna stranica Hidden Cove Boat Tours",
    mainNavigation: "Glavna navigacija",
    mobileNavigation: "Mobilna navigacija",
    bookTrip: "Rezerviši turu sa Hidden Cove Boat Tours",
    openMenu: "Otvori navigacioni meni",
    closeMenu: "Zatvori navigacioni meni",
  },
  cta: {
    whatsapp: "Rezerviši na WhatsApp",
    contact: "Kontakt",
    viewTours: "Pogledaj ture",
    call: "Pozovi",
    book: "Rezerviši",
    bookTrip: "Rezerviši turu",
    bookNow: "Rezerviši odmah",
  },
  whatsapp: {
    generalBooking:
      "Zdravo, zainteresovan/a sam za rezervaciju ture brodom sa Hidden Cove Boat Tours. Zeljeni datum: ____. Broj gostiju: ____. Javite mi koje su ture dostupne.",
    contact: "Zdravo, imam pitanje za Hidden Cove Boat Tours.",
    classicTour:
      "Zdravo, zainteresovan/a sam za Classic Tour po cijeni {{price}}. Zeljeni datum: ____. Broj gostiju: ____.",
    bbqTour:
      "Zdravo, zainteresovan/a sam za BBQ Tour po cijeni {{price}}. Zeljeni datum: ____. Broj gostiju: ____.",
    sunsetTour:
      "Zdravo, zainteresovan/a sam za Sunset Tour po cijeni {{price}}. Zeljeni datum: ____. Broj gostiju: ____.",
    moonlightTour:
      "Zdravo, zelim vise informacija o predstojecoj Moonlight Tour.",
    privateTour:
      "Zdravo, zelim da pitam za privatnu turu brodom. Zeljeni datum: ____. Broj gostiju: ____. Javite mi koje su opcije dostupne.",
  },
  seo: {
    title: "Ture brodom u Ulcinju i Valdanosu | Hidden Cove Boat Tours",
    description:
      "Ture brodom u malim grupama iz Valdanosa kod Ulcinja, sa skrivenim uvalama, mirnom plažom, turama za zalazak sunca i opcionim roštiljem na plaži.",
    ogTitle: "Ture brodom u Ulcinju i Valdanosu | Hidden Cove Boat Tours",
    ogDescription:
      "Istraži skrivene uvale kod Ulcinja brodom, u maloj grupi, uz lokalno gostoprimstvo, zalazak sunca i zaustavljanje na plaži.",
    serviceName: "Ture brodom iz Valdanosa kod Ulcinja",
    serviceType: "Tura brodom",
    noscript:
      "Lokacije rute Hidden Cove Boat Tours: 1 Valdanos Bay, 2 Vucja jazbina, 3 Our Hidden Beach.",
  },
  hero: {
    eyebrow: "Ulcinj, Crna Gora",
    titleA: "Vožnje brodom iz Ulcinja do ",
    titleItalic: "skrivenih uvala",
    titleB: " i Valdanosa.",
    sub: "Kupanje na skrivenoj plaži, hladna pića, jednostavan roštilj na plaži, zalasci sunca i noći uz mjesečinu pored mora.",
    imageAlt: "Skrivena jadranska uvala kod Ulcinja sa usidrenim drvenim brodom",
    established: "Od 2018",
  },
  toursSection: {
    eyebrow: "Pažljivo odabrane ture",
    title: "Izaberi svoj dan na vodi",
    sub: "Male grupe. Lokalni skiper. Prave uvale.",
  },
  tours: {
    hidden: {
      name: "Classic Tour",
      tagline: "Dnevna tura",
      desc: "Uživaj u opuštenoj vožnji brodom duž ulcinjske obale, zatim nekoliko sati u privatnom dijelu plaže.",
      duration: "oko 4 sata",
      group: "Do 8 gostiju",
      price: "50 € po osobi",
      included: [
        "Transfer brodom iz Valdanosa do Starog Ulcinja i plaže",
        "Ukupno oko 1 sat vožnje brodom",
        "Dva pića po osobi",
        "Tradicionalni crnogorski sendviči",
        "Korišćenje ležaljki",
        "Kajaci",
        "SUP daske",
        "Maske za ronjenje",
        "Odbojka u vodi",
      ],
      note: "Dodatna pića mogu se kupiti tokom ture.",
      imageAlt: "Zaustavljanje na plaži tokom Classic Tour na ulcinjskoj obali",
    },
    sunset: {
      name: "BBQ Tour",
      tagline: "Dnevna tura",
      desc: "Isto iskustvo broda i plaže kao Classic Tour, uz svježe pripremljen roštilj umjesto sendviča.",
      duration: "oko 4 sata",
      group: "Do 8 gostiju",
      price: "60 € po osobi",
      included: [
        "Transfer brodom iz Valdanosa do Starog Ulcinja i plaže",
        "Ukupno oko 1 sat vožnje brodom",
        "Dva pića po osobi",
        "Obrok sa roštilja",
        "Korišćenje ležaljki",
        "Kajaci",
        "SUP daske",
        "Maske za ronjenje",
        "Odbojka u vodi",
      ],
      note: "Dodatna pića mogu se kupiti tokom ture.",
      imageAlt: "BBQ obrok na plaži pored Jadrana",
    },
    moonlight: {
      name: "Sunset Tour",
      tagline: "Veče",
      desc: "Uživaj u večernjoj vožnji brodom duž ulcinjske obale i gledaj zalazak sunca sa mora.",
      duration: "Veče",
      group: "Do 8 gostiju",
      price: "25 € po osobi",
      included: [
        "Vožnja brodom iz Valdanosa prema Starom Ulcinju i obližnjoj plaži",
        "Pogled na zalazak sunca sa broda",
        "Korišćenje plažnih sadržaja i dostupne opreme za vodu",
      ],
      note: "Hrana i roštilj nijesu uključeni. Dodatna pića mogu se kupiti tokom ture.",
      imageAlt: "Zalazak sunca nad Jadranskim morem kod Ulcinja",
    },
    private: {
      name: "Moonlight Tour",
      tagline: "Uskoro",
      desc: "Kasnovečernje iskustvo brodom pod mjesečinom, sa detaljima koji će biti objavljeni naknadno.",
      duration: "",
      group: "Do 8 gostiju",
      price: "Uskoro",
      included: [],
      imageAlt: "Mala vatra na plaži noću pored mora",
    },
  },
  why: {
    eyebrow: "Zašto je drugačije",
    title: "Lokalni skiper, male grupe, prava mjesta.",
    items: [
      {
        title: "Samo male grupe",
        body: "Maksimalno 8 gostiju. Bez prenatrpanih party brodova - samo prostor za disanje, kupanje i razgovor.",
      },
      {
        title: "Uvale koje znaju lokalci",
        body: "Odrasli smo na ovoj obali. Vodimo te tamo gdje autobusi i velike ture ne mogu stići.",
      },
      {
        title: "Jednostavno, iskreno gostoprimstvo",
        body: "Hladna pića, hrana na plaži, svježe voće. Ništa pretjerano - baš kako ljeto treba da ima ukus.",
      },
      {
        title: "Laka WhatsApp rezervacija",
        body: "Bez dugačkih formulara. Pišeš nam, brzo odgovaramo, dolaziš u luku.",
      },
    ],
  },
  route: {
    eyebrow: "Naša ruta",
    title: "Tri skrivena mjesta duž obale.",
    sub: "Iz zaštićenog zaliva Valdanos, ruta prati stjenovitu obalu do Vučje jazbine, a zatim do naše mirne plaže - obale kojoj se najbolje prilazi sa mora.",
    instruction: "Ruta se kreće polako. Izaberi broj da otvoriš priču.",
    controls: {
      exploreMap: "Istraži mapu",
      lockMap: "Zaključaj mapu",
      resumeJourney: "Nastavi putovanje",
      playJourney: "Pokreni putovanje",
      closeStory: "Zatvori priču rute",
      previousStop: "Prethodna stanica",
      nextStop: "Sljedeća stanica",
      routeLocations: "Lokacije rute",
      mapLabel:
        "MapTiler Aquarelle mapa koja prikazuje obalnu rutu Hidden Cove Boat Tours od Valdanos Bay do Vucja jazbina i Our Hidden Beach",
      fallbackTitle: "Pregled mape nije dostupan.",
      missingKey: "Dodaj javni MapTiler API ključ u lokalni environment fajl.",
      webGlUnavailable: "WebGL nije dostupan u ovom browseru.",
      mapUnavailable: "MapTiler nije mogao učitati pregled mape.",
      noValidCoordinates: "Nijesu podešene validne koordinate rute.",
      stopLabel: "Stanica",
      stopOfLabel: "od",
      clearDraftConfirm: "Obrisati nacrt morske rute?",
      routeEditorIdle: "Editor rute miruje",
      routeEditing: "Ruta se uređuje",
    },
    stops: [
      {
        id: "valdanos-bay",
        number: 1,
        title: "Valdanos Bay",
        subtitle: "Gdje putovanje počinje",
        shortLabel: "Valdanos",
        markerAriaLabel: "1. Valdanos Bay",
        story: [
          "Valdanos se otvara kao uska potkovica ispod padina prekrivenih maslinama. Zaštićeni zaliv dugo pripada pomorskom svijetu Ulcinja, mornarima, trgovačkim brodovima i, prema lokalnim pričama, brodovima vezanim za piratsko doba Ulcinja.",
          "Godine 1833. brigantina koja je dolazila iz Aleksandrije morala je ovdje ostati četrdeset dana u karantinu. Mnogo kasnije, u jugoslovenskom periodu, Valdanos je postao vojno-turistički kompleks. Napušteni objekti iza obale dodaju još jedan sloj istoriji zaliva.",
        ],
      },
      {
        id: "vucja-jazbina",
        number: 2,
        title: "Vucja jazbina",
        subtitle: "Vučja pećina",
        shortLabel: "Vučja pećina",
        markerAriaLabel: "2. Vucja jazbina, Vučja pećina",
        story: [
          "Između Valdanosa i Kruča, obala se savija u sjenoviti morski ulaz poznat lokalno kao Shpella e Ujkut ili Vučja vala - Vučja pećina. Tamni kameni zidovi, skriveni ulaz i plava refleksija vode daju joj osjećaj prirodne odaje urezane u obalu.",
          "Podvodni pejzaž oko nje poznat je po bogatom koraligenom staništu - morskom vrtu koji stvaraju alge, sunđeri i drugi morski život. Neki posjetioci je jednostavno zovu Blue Cave, ali lokalno ime ostaje upečatljivije.",
        ],
      },
      {
        id: "our-hidden-beach",
        number: 3,
        title: "Our Hidden Beach",
        subtitle: "Obala kojoj se prilazi s mora",
        shortLabel: "Hidden Beach",
        markerAriaLabel: "3. Our Hidden Beach",
        story: [
          "Ne postoji put koji direktno vodi do ove plaže. Može se stići zahtjevnom pješačkom stazom ispod maslinovih brda, ali sa mora se pojavljuje prirodno: miran dio obale sakriven iza rta.",
          "Kao mnoge osamljene uvale duž ulcinjske obale, i ova plaža nosi priče o piratima koji su skrivali blago izvan puteva i starih mapa. To je lokalni folklor, a ne dokumentovana istorija - ali na ovako skrivenom mjestu priča odmah ima smisla.",
        ],
      },
    ],
  },
  bbq: {
    eyebrow: "Roštilj & hladna pića",
    title: "Jednostavan roštilj na plaži, kako to obala radi.",
    body: "Palimo malu vatru na oblucima, pečemo ono što je svježe i siječemo lubenicu. Hladno lokalno pivo, voda, sokovi i domaća limunada uvijek su na brodu.",
    bullets: [
      "Svjež lokalni ulov i povrće sa roštilja",
      "Hladno pivo, voda, sokovi, limunada",
      "Vegetarijanske opcije na zahtjev",
      "Donesi svoju bocu vina - mi donosimo led",
    ],
    imageAlt: "Hladna lokalna pića poslužena na brodu",
  },
  evening: {
    eyebrow: "Zalazak & mjesečina",
    title: "Obala je najljepša poslije 18h.",
    body: "Dva načina da provedeš veče na vodi sa nama.",
    sunset:
      "Gledaj kako sunce pada iza jadranskog horizonta, sa hladnim pićem u ruci i mirisom roštilja u povjetarcu.",
    moon: "Plovi pod mjesečinom do tihe uvale, zapali malu vatru i ostani dok se ne pojave zvijezde.",
    sunsetAlt: "Zalazak sunca iznad uvale na ulcinjskoj obali",
    moonAlt: "Mala vatra na plaži noću pored mora",
  },
  privateSec: {
    eyebrow: "Privatni čarter",
    title: "Neka dan bude potpuno tvoj.",
    body: "Parovi, porodice, prijatelji, male proslave. Reci nam šta zamišljaš i napravićemo rutu oko toga.",
    cta: "Pitaj za privatnu turu",
    imageAlt: "Privatna tura brodom duž ulcinjske obale",
  },
  gallery: {
    eyebrow: "Razglednice",
    title: "Sa broda.",
    items: [
      { alt: "Zidine Starog grada Ulcinja viđene sa mora" },
      { alt: "Bistra jadranska voda ispod broda" },
      { alt: "Valdanos Bay na crnogorskoj obali" },
      { alt: "Skrivena plaža do koje se stiže brodom" },
      { alt: "Roštilj na plaži pri zalasku sunca" },
      { alt: "Hladna pića na brodu" },
    ],
  },
  reviews: {
    eyebrow: "Gosti",
    title: "Šta ljudi kažu poslije dana sa nama.",
    ratingLabel: "Utisak gosta sa pet zvjezdica",
    items: [
      {
        name: "Anna & Markus",
        from: "Berlin, Njemačka",
        text: "Najbolji dan cijelog odmora u Crnoj Gori. Skrivena plaža je bila nestvarna, a o roštilju pri zalasku još pričamo.",
      },
      {
        name: "Erion",
        from: "Tirana, Albanija",
        text: "Profesionalno, skiper veoma ljubazan. Uvala u koju su nas odveli bila je raj.",
      },
      {
        name: "Porodica Kovac",
        from: "Beograd, Srbija",
        text: "Mali brod, mala grupa, sjajan dan. Djeca nijesu htjela kući. Topla preporuka.",
      },
      {
        name: "Sophie",
        from: "London, UK",
        text: "Rezervisala preko WhatsApp-a veče ranije, lako i prijateljski. Kao da te vodi lokalni prijatelj.",
      },
    ],
  },
  faq: {
    eyebrow: "Korisno",
    title: "Česta pitanja",
    highlightPhrase: "na zahtjev",
    items: [
      {
        id: "departure",
        question: "Odakle polaze vaše ture brodom u Ulcinju?",
        answer:
          "Naše vožnje brodom polaze iz Valdanosa, blizu Ulcinja u Crnoj Gori. Tačnu lokaciju susreta i detalje polaska potvrđujemo preko WhatsApp-a prije ture, tako da imaš aktuelne lokalne instrukcije za odabrani datum.",
        links: [{ label: "pogledaj obalnu rutu", target: "route" }],
      },
      {
        id: "available-tours",
        question: "Koje ture brodom nudite?",
        answer:
          "Ture trenutno prikazane na sajtu su Classic Tour, BBQ Tour, Sunset Tour i Moonlight Tour. Classic i BBQ su dnevne ture, Sunset Tour je večernja opcija, a Moonlight Tour ostaje označena kao Uskoro dok se ne objave dodatni detalji.",
        links: [{ label: "uporedi ture", target: "tours" }],
      },
      {
        id: "prices",
        question: "Koliko košta tura brodom u Ulcinju?",
        answer:
          "Trenutne cijene sa kartica tura su: Classic Tour: 50 € po osobi; BBQ Tour: 60 € po osobi; Sunset Tour: 25 € po osobi; Moonlight Tour: Uskoro. Dostupnost se može mijenjati po datumu i uslovima na moru, zato potvrdi željenu turu i broj gostiju prije planiranja.",
        links: [{ label: "rezerviši preko WhatsApp-a", target: "booking" }],
      },
      {
        id: "duration",
        question: "Koliko traje vožnja brodom?",
        answer:
          "Classic Tour i BBQ Tour navedene su kao oko 4 sata, sa ukupno oko 1 sat vožnje brodom. Sunset Tour je večernja vožnja; tačan termin se potvrđuje prilikom rezervacije. Moonlight Tour je i dalje označena kao Uskoro.",
      },
      {
        id: "included",
        question: "Šta je uključeno u Hidden Cove turu brodom?",
        answer:
          "Uključene stavke zavise od izabrane ture. Classic Tour uključuje transfer brodom, vrijeme na plaži, oko 1 sat ukupne vožnje, dva pića, crnogorske sendviče, ležaljke, kajake, SUP daske, maske za ronjenje i odbojku u vodi. BBQ Tour zadržava osnovno iskustvo i dodaje obrok sa roštilja umjesto sendviča.",
        links: [{ label: "uporedi ture", target: "tours" }],
      },
      {
        id: "bbq-food",
        question: "Šta se služi na BBQ Tour?",
        answer:
          "Palimo malu vatru na oblucima, pečemo svjež lokalni ulov i sezonsko povrće, siječemo lubenicu i držimo hladno lokalno pivo, vodu i domaću limunadu na brodu. Vegetarijanska opcija je dostupna na zahtjev.",
      },
      {
        id: "hidden-beach-road",
        question: "Može li se do skrivene plaže stići putem?",
        answer:
          "Ne postoji put koji direktno vodi do plaže. Moguće je stići zahtjevnom pješačkom rutom kroz okolna brda, ali dolazak brodom je najlakši i najprirodniji način.",
        links: [{ label: "pogledaj obalnu rutu", target: "route" }],
      },
      {
        id: "booking",
        question: "Kako rezervišem turu brodom?",
        answer:
          "Izaberi željenu turu i kontaktiraj nas preko WhatsApp-a. Uključi željeni datum i broj gostiju, a mi potvrđujemo dostupnost i detalje susreta. Ako WhatsApp nije podešen na sajtu, akcija rezervacije se prebacuje na email.",
        links: [{ label: "rezerviši preko WhatsApp-a", target: "booking" }],
      },
      {
        id: "private-tour",
        question: "Mogu li rezervisati privatnu turu brodom iz Ulcinja?",
        answer:
          "Da. Sajt uključuje privatni čarter za parove, porodice, prijatelje i male proslave. Pošalji datum, veličinu grupe i iskustvo koje imaš na umu, pa rutu možemo dogovoriti direktno prije potvrde.",
        links: [{ label: "pitaj za privatnu turu", target: "private" }],
      },
      {
        id: "weather",
        question: "Šta ako vrijeme ili more nijesu pogodni?",
        answer:
          "Sigurnost je prva. Ako uslovi na moru ili vremenski uslovi nijesu pogodni, kontaktiraćemo te da razgovaramo o pomjeranju termina ili opcijama koje važe za tvoju rezervaciju. Sajt trenutno ne objavljuje posebnu automatsku politiku povraćaja ili otkazivanja.",
      },
    ],
  },
  finalCta: {
    title: "Spreman za dan na vodi?",
    sub: "Piši nam na WhatsApp - obično odgovaramo za nekoliko minuta.",
  },
  footer: {
    pitch: "Mali brod, skrivena plaža i dan koji",
    pitchEmphasis: "ne može stati u screenshot.",
    findUs: "Nađi nas",
    explore: "Istraži",
    bookFallback: "Rezerviši turu",
    city: "Ulcinj, Crna Gora",
    bottomTagline: "Plovi polako / plivaj daleko",
    bottomPlaces: "Valdanos / Ulcinj / Crna Gora",
    contact: "Kontakt",
    languages: "Jezici",
    rights: "Sva prava zadržana.",
  },
  notFound: {
    title: "Stranica nije pronađena",
    body: "Ova stranica nije dostupna na izabranom jeziku.",
    home: "Nazad na englesku početnu",
  },
};

export const translations: Record<Lang, TranslationKeys> = {
  en,
  de,
  sq,
  me,
};
