// Central business config — easy to edit.
export const business = {
  name: "Hidden Cove Ulcinj",
  // E.164 number for tel: and wa.me links. Replace with real number.
  phone: "+38269000000",
  whatsapp: "38269000000", // wa.me format (no +)
  email: "hello@hiddencoveulcinj.com",
  city: "Ulcinj, Montenegro",
  instagram: "https://instagram.com/",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
};

export const waLink = (msg = "Hi! I'd like to ask about a boat tour.") =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = () => `tel:${business.phone}`;
