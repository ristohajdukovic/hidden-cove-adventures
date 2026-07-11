import boat2hImg from "@/assets/gallery-swim.jpg";
import adaBojanaImg from "@/assets/tour-hidden-beach.jpg";
import redRockImg from "@/assets/tour-sunset-bbq.jpg";
import crystalBeachImg from "@/assets/gallery-valdanos.jpg";
import type { PartnerTripKey } from "@/i18n/translations";
import type { WhatsAppMessageKey } from "@/lib/business";

export type PartnerTripDefinition = {
  tripKey: PartnerTripKey;
  image: string;
  whatsappMessageKey: WhatsAppMessageKey;
};

export const partnerTripDefinitions = [
  {
    tripKey: "boat2h",
    image: boat2hImg,
    whatsappMessageKey: "partnerBoat2h",
  },
  {
    tripKey: "adaBojana",
    image: adaBojanaImg,
    whatsappMessageKey: "partnerAdaBojana",
  },
  {
    tripKey: "redRock",
    image: redRockImg,
    whatsappMessageKey: "partnerRedRock",
  },
  {
    tripKey: "crystalBeach",
    image: crystalBeachImg,
    whatsappMessageKey: "partnerCrystalBeach",
  },
] as const satisfies readonly PartnerTripDefinition[];
