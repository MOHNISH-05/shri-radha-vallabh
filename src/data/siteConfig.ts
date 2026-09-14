/* ─────────────────────────────────────────────────────────────
   SHRI RADHA VALLABH — MASTER CONFIGURATION
   Central Source of Truth for Brand Data, Contacts & Campaigns
   ───────────────────────────────────────────────────────────── */

export const SITE_CONFIG = {
  // ── Brand Identity ──
  brandName: "SHRI RADHA VALLABH",
  positioning: "HERITAGE · SPIRITUALITY · CULTURE · JOURNEY",
  tagline: "Journeys rooted in tradition. Designed for today.",
  hindiTagline: "आस्था से अनुभव तक।",
  logoUrl: "/assets/optimized/srv-logo-192.webp",
  copyrightYear: "2026",

  // ── Verified Contact Details (Single Source of Truth) ──
  whatsappNumber: "+918209290716", // Confirmed Client WhatsApp
  phoneNumber: "+918209290716",
  email: "shriradhavallabhtours@gmail.com", // Confirmed Client Email
  officeAddress: "Vyasa Para, On Fort, Jaisalmer, Rajasthan, India", // Confirmed Client Address
  instagramHandle: "@shri_radhavallabh2008",
  instagramUrl: "https://instagram.com/shri_radhavallabh2008",
  location: "Vyasa Para, On Fort, Jaisalmer / All India",

  // ── Active Seasonal Campaign Switcher ──
  // Options: 'jaisalmer' | 'chardham' | 'vrindavan' | 'ayodhya' | 'kashi' | 'dwarka'
  activeFeaturedJourney: "jaisalmer",

  // ── Verification & Trust Signals (No Unverified Numbers) ──
  trustPillars: [
    { hindi: "पवित्र यात्राएँ", english: "Sacred Journeys" },
    { hindi: "व्यक्तिगत सहयोग", english: "Personal Attention" },
    { hindi: "हमेशा उपलब्ध", english: "Always Available" },
    { hindi: "चुनिंदा अनुभव", english: "Curated Experiences" },
    { hindi: "परंपरा और विश्वास", english: "Tradition & Trust" },
  ],
} as const;

// ── Owner-provided Google Maps location ──
export const MAPS_CONFIG = {
  listingName: "Shriradha Vallabh tours",
  address: "Vyasa Para, On Fort, Jaisalmer, Rajasthan",
  locality: "Jaisalmer, Rajasthan",
  latitude: 26.9127521,
  longitude: 70.9118934,
  mapsUrl: "https://www.google.com/maps/place/Shriradha+Vallabh+tours/@26.9127521,70.9093185,17z/data=!3m1!4b1!4m6!3m5!1s0x3947bd4c3b34537f:0x57cbf3923a57bee9!8m2!3d26.9127521!4d70.9118934!16s%2Fg%2F11zx094zr2?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D",
  embedUrl: "https://www.google.com/maps?q=26.9127521,70.9118934&output=embed",
} as const;

/* ─── WhatsApp Link Generators ───────────────────────────── */

export const getWhatsAppLink = (message?: string) => {
  const defaultMsg = `Namaste ${SITE_CONFIG.brandName} 🙏\nI would like to enquire about your curated journeys.`;
  const encodedMsg = encodeURIComponent(message || defaultMsg);
  const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
};

export const getJourneyWhatsAppLink = (journeyTitle: string) => {
  const msg = `Namaste ${SITE_CONFIG.brandName} 🙏\nI am interested in exploring the ${journeyTitle}.\nPlease share available dates and customized itinerary details.`;
  return getWhatsAppLink(msg);
};

export const getPackageWhatsAppLink = (
  travelType: string = 'Couple',
  packageName: string = 'Gorbandh',
  journeyName: string = 'Jaisalmer 3 Nights / 4 Days'
) => {
  const formattedType = travelType.charAt(0).toUpperCase() + travelType.slice(1);
  const formattedPackage = packageName.charAt(0).toUpperCase() + packageName.slice(1);
  const msg = `Hello ${SITE_CONFIG.brandName},\nI am interested in the ${journeyName} package.\n\nTravel type: ${formattedType}\nPackage: ${formattedPackage}\n\nPlease share the current price and availability.`;
  return getWhatsAppLink(msg);
};

export const getTharSoulWhatsAppLink = () => {
  const msg = `Hello ${SITE_CONFIG.brandName},\nI am interested in the Thar Soul 1 Day / Sunset Safari.\n\nPlease share the current price and availability.`;
  return getWhatsAppLink(msg);
};

