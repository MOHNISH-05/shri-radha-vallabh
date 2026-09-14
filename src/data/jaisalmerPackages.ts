/* ─────────────────────────────────────────────────────────────
   SRV TOURS & TRAVELS — JAISALMER PACKAGE SYSTEM DATA MODEL
   Source of Truth for Couple, Family, Group Packages & Safari
   Strict Commercial Accuracy: Price on Request (No Fabricated Prices)
   ───────────────────────────────────────────────────────────── */

export type TravelTypeKey = 'couple' | 'family' | 'group' | 'solo';

export type PackageTierKey = 'gorbandh' | 'jharokha' | 'morchan' | 'leheriya' | 'maharawal';

export type TierCategory = 'Basic' | 'Standard' | 'Deluxe' | 'Super Deluxe' | 'Executive';

export interface PackageTier {
  id: PackageTierKey;
  name: string;
  hindiName: string;
  tier: TierCategory;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  price: number | null; // null represents "Price on Request"
  inclusionsSummary: string[];
}

export interface TravelTypeInfo {
  id: TravelTypeKey;
  label: string;
  hindiLabel: string;
  heading: string;
  tagline: string;
  description: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  hindiTitle: string;
  route?: string;
  overview: string;
  activities: string[];
  overnight: string;
  highlights: string[];
  image: string;
  imageAlt: string;
}

export interface SafariExperienceItem {
  id: string;
  slug: string;
  title: string;
  hindiTitle: string;
  subtitle: string;
  timing: string;
  duration: string;
  description: string;
  experienceFlow: {
    title: string;
    hindiTitle: string;
    description: string;
  }[];
  price: number | null; // Price on Request
  image: string;
  imageAlt: string;
}

/* ─── 1. Travel Types (Audience Categories) ───────────────────────── */
export const TRAVEL_TYPES: Record<TravelTypeKey, TravelTypeInfo> = {
  couple: {
    id: 'couple',
    label: 'Couple',
    hindiLabel: 'युगल यात्रा',
    heading: 'Jaisalmer Couple Packages',
    tagline: 'विरासत और मरुभूमि का शांत अनुभव',
    description: "A 3 Nights / 4 Days journey through the Golden City, the Thar Desert and Jaisalmer's living heritage.",
  },
  family: {
    id: 'family',
    label: 'Family',
    hindiLabel: 'पारिवारिक यात्रा',
    heading: 'Jaisalmer Family Packages',
    tagline: 'सपरिवार स्वर्णिम राजस्थान यात्रा',
    description: "A 3 Nights / 4 Days journey through the Golden City, the Thar Desert and Jaisalmer's living heritage.",
  },
  group: {
    id: 'group',
    label: 'Group',
    hindiLabel: 'समूह यात्रा',
    heading: 'Jaisalmer Group Packages',
    tagline: 'मित्रों और समूहों के लिए विशेष यात्रा',
    description: 'A 3 Nights / 4 Days journey through the Golden City — ideal for friends, pilgrim groups, corporate teams, and large parties.',
  },
  solo: {
    id: 'solo',
    label: 'Solo / Bachelor',
    hindiLabel: 'एकल यात्रा',
    heading: 'Jaisalmer Solo & Bachelor Packages',
    tagline: 'अकेले चलो, ज़िन्दगी को जानो',
    description: 'Travel solo or with your crew — a curated 3N/4D journey through living fort, desert dunes, and hidden haveli alleys at your own pace.',
  },
};

export const TRAVEL_TYPES_LIST: TravelTypeInfo[] = [
  TRAVEL_TYPES.couple,
  TRAVEL_TYPES.family,
  TRAVEL_TYPES.group,
  TRAVEL_TYPES.solo,
];

/* ─── 2. Five Package Tiers (Replacing old Rajwadi with Maharawal) ─── */
export const PACKAGE_TIERS: Record<PackageTierKey, PackageTier> = {
  gorbandh: {
    id: 'gorbandh',
    name: 'Gorbandh',
    hindiName: 'गोरबंद',
    tier: 'Basic',
    tagline: 'ESSENTIAL GOLDEN CITY & THAR',
    description: 'A curated heritage circuit designed to capture the core essence of Jaisalmer Fort, Havelis, and a peaceful desert camp night.',
    image: '/images/jaisalmer/web_DJI_0065.JPG',
    imageAlt: 'Gadisar Lake and heritage chhatris in Jaisalmer',
    price: null,
    inclusionsSummary: [
      'Jaisalmer Railway Station / Airport transfers',
      'Sonar Qila, Haveli & Gadisar heritage circuit',
      'Thar Desert dunes excursion & camp night',
      'Bada Bagh, Amar Sagar & Lodhurva trail',
    ],
  },
  jharokha: {
    id: 'jharokha',
    name: 'Jharokha',
    hindiName: 'झरोखा',
    tier: 'Standard',
    tagline: 'HERITAGE PERSPECTIVE & COMFORT',
    description: 'Thoughtfully paced sightseeing across Jaisalmer’s carved sandstone landmarks, paired with traditional Thar desert hospitality.',
    image: '/assets/patwon-haveli.png',
    imageAlt: 'Intricately carved sandstone jharokhas of Patwon Ki Haveli',
    price: null,
    inclusionsSummary: [
      'Station / Airport coordination and sanitized transport',
      'Guided walkthrough of Jaisalmer Fort & Royal Havelis',
      'Sunset at Sam Sand Dunes with cultural folk evening',
      'Royal cenotaphs at Bada Bagh and ancient Lodhurva',
    ],
  },
  morchan: {
    id: 'morchan',
    name: 'Morchan',
    hindiName: 'मोरछन',
    tier: 'Deluxe',
    tagline: 'RAJPUTANA ELEGANCE & THAR MAGIC',
    description: 'An elevated journey blending heritage exploration with curated desert moments, folk traditions, and personalized coordination.',
    image: '/images/jaisalmer/web_DJI_0002.jpg',
    imageAlt: 'Aerial panorama of the living Jaisalmer Fort',
    price: null,
    inclusionsSummary: [
      'Dedicated arrival and departure assistance',
      'Comprehensive Golden City sightseeing & cultural visits',
      'Desert camp stay with Kalbelia dance & traditional dining',
      'Lodhurva Jain temples & Bada Bagh sunset vistas',
    ],
  },
  leheriya: {
    id: 'leheriya',
    name: 'Leheriya',
    hindiName: 'लहरिया',
    tier: 'Super Deluxe',
    tagline: 'DISTINGUISHED DESERT LUXURY',
    description: 'Immersive heritage travel featuring premium stays, desert glamping under starry skies, and private journey escorting.',
    image: '/images/jaisalmer/web_DJI_0727.jpg',
    imageAlt: 'Jaisalmer Fort illuminated at night against the desert sky',
    price: null,
    inclusionsSummary: [
      'Priority travel coordination and comfortable private transport',
      'Fort palace, temple sanctums & secret haveli viewpoints',
      'Luxury desert glamping, camel trail & traditional dinner',
      'Bespoke exploration of Kuldhara, Lodhurva & Amar Sagar',
    ],
  },
  maharawal: {
    id: 'maharawal',
    name: 'Maharawal',
    hindiName: 'महारावल',
    tier: 'Executive',
    tagline: 'SOVEREIGN ROYAL HOSPITALITY',
    description: 'The crowning Jaisalmer experience inspired by royal Bhati traditions—personalized hospitality, bespoke pacing, and dignified service.',
    image: '/assets/optimized/jaisalmer-fort-palace-1920.webp',
    imageAlt: 'Jaisalmer Fort Palace facade, royal seat of the Bhati rulers',
    price: null,
    inclusionsSummary: [
      'Executive coordination with personalized itinerary pacing',
      'Curated fort, haveli and sacred temple darshans',
      'Premium desert stay, sunset camel experience & folk gala',
      'Comprehensive cultural trail through Bada Bagh & ancient capitals',
    ],
  },
};

export const PACKAGE_TIERS_LIST: PackageTier[] = [
  PACKAGE_TIERS.gorbandh,
  PACKAGE_TIERS.jharokha,
  PACKAGE_TIERS.morchan,
  PACKAGE_TIERS.leheriya,
  PACKAGE_TIERS.maharawal,
];

/* ─── 3. Confirmed 4-Day / 3-Night Jaisalmer Itinerary (Source of Truth) ─── */
export const JAISALMER_3N4D_ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    title: 'Welcome to the Golden City',
    hindiTitle: 'स्वर्णिम नगरी में स्वागत एवं नगर दर्शन',
    route: 'Arrival → Jaisalmer Fort → Havelis → Gadisar Lake',
    overview: 'Arrival and local sightseeing across the world’s most celebrated living sandstone fort and royal merchant havelis, concluding with sunset at Gadisar Lake.',
    activities: [
      'Pickup from Jaisalmer Railway Station / Airport',
      'Hotel check-in & freshen up',
      'Jaisalmer Fort (Sonar Qila) — walk through ancient bastions and living lanes',
      'Raj Mahal & Jain Temples inside the fort',
      'Patwon Ki Haveli — magnificent stone carvings & jharokhas',
      'Nathmal Ki Haveli — architectural marvel of twin craftsmen brothers',
      'Local market & handicraft shopping in the fort bazaar',
      'Evening visit to Gadisar Lake with water chhatris',
      'Sunset & cultural evening by the lake embankment',
    ],
    overnight: 'Jaisalmer',
    highlights: ['Sonar Qila Fort Walk', 'Jain Temples & Raj Mahal', 'Patwon Ki Haveli', 'Gadisar Lake Sunset'],
    image: '/assets/optimized/jaisalmer-fort-1920.webp',
    imageAlt: 'Jaisalmer Fort towering over the golden city',
  },
  {
    day: 2,
    title: 'Desert Adventure',
    hindiTitle: 'मरुभूमि रोमांच — कुलधरा, सम के टीले एवं मरु शिविर',
    route: 'Jaisalmer → Kuldhara → Sam Sand Dunes → Desert Camp',
    overview: 'Journey from the golden city through the historic ruins of Kuldhara to the undulating dunes of Sam, experiencing a Thar desert sunset, camel safari, and camp hospitality.',
    activities: [
      'Breakfast at hotel',
      'Check-out and scenic desert drive',
      'Visit Kuldhara — the historic abandoned 13th-century Paliwal village',
      'Visit Sam Sand Dunes — expanse of pure desert sand',
      'Camel safari / Jeep safari across golden sand ridges',
      'Sunset over the Thar Desert',
      'Check-in at desert camp',
      'Rajasthani folk music & Kalbelia dance by campfire',
      'Traditional Rajasthani dinner under the desert sky',
    ],
    overnight: 'Desert Camp, Sam',
    highlights: ['Kuldhara Village History', 'Sam Sand Dunes', 'Sunset Camel Safari', 'Kalbelia Folk & Dinner'],
    image: '/images/jaisalmer/safari/hero/jaisalmer-safari-hero.webp',
    imageAlt: 'Camel riders silhouetted against the Thar sunset',
  },
  {
    day: 3,
    title: 'Desert to Golden Heritage',
    hindiTitle: 'मरुभूमि से स्वर्णिम धरोहर — बड़ा बाग, अमर सागर एवं लोद्रुवा',
    route: 'Sam → Bada Bagh → Amar Sagar → Lodhurva → Jaisalmer',
    overview: 'Awaken to dawn over the dunes, then trace the regal cenotaphs and sacred oasis sanctuaries of royal Jaisalmer before returning to the city for a tranquil evening.',
    activities: [
      'Sunrise at the dunes & breakfast at camp',
      'Check-out from desert camp',
      'Visit Bada Bagh — dramatic royal cenotaphs of Jaisalmer rulers',
      'Amar Sagar & serene Jain Temple surrounded by historic gardens',
      'Lodhurva — ancient capital of the Bhatti rulers & sacred Kalpavriksha temple',
      'Return to Jaisalmer & hotel check-in',
      'Free evening for shopping / leisure across old stone alleys',
      'Optional rooftop dinner overlooking illuminated Jaisalmer Fort',
    ],
    overnight: 'Jaisalmer',
    highlights: ['Dune Sunrise', 'Bada Bagh Royal Cenotaphs', 'Amar Sagar Oasis', 'Ancient Lodhurva Capital'],
    image: '/images/jaisalmer/Jaisalmer Photos/bada bagh.jpeg',
    imageAlt: 'Bada Bagh royal stone chhatris in Jaisalmer',
  },
  {
    day: 4,
    title: 'Farewell Jaisalmer',
    hindiTitle: 'स्वर्णिम स्मृतियों के साथ विदाई',
    route: 'Jaisalmer Sightseeing → Station / Airport Drop',
    overview: 'A relaxed morning for any missed landmarks or authentic artisan shopping, followed by a warm farewell transfer to Jaisalmer Station or Airport.',
    activities: [
      'Breakfast at hotel',
      'Check-out',
      'Visit any missed attraction / local shopping',
      'Optional visit to local handicraft & souvenir market',
      'Drop at Jaisalmer Railway Station / Airport',
      'Tour Ends with Golden Memories',
    ],
    overnight: 'Departure',
    highlights: ['Morning Leisure', 'Handicrafts & Souvenirs', 'Timely Station / Airport Drop'],
    image: '/images/jaisalmer/web_DJI_0438.JPG',
    imageAlt: 'Gadisar Lake pavilion reflecting serene golden waters',
  },
];

/* ─── 4. Separate Safari Experiences: Thar Soul — 1 Day / Sunset Safari ─ */
export const THAR_SOUL_SAFARI: SafariExperienceItem = {
  id: 'thar-soul',
  slug: 'thar-soul',
  title: 'Thar Soul',
  hindiTitle: 'थार सोल — सूर्यास्त सफारी',
  subtitle: '1 Day / Sunset Safari',
  timing: '2:30 PM – 9:30 PM',
  duration: '1 Afternoon to Evening (~7 Hours)',
  description: 'A pure, unhurried sunset safari through the untouched dunes of the Thar Desert. Experience rural village tranquility, traditional warm chai, and a serene camel journey across golden sands as the sun dips beneath the horizon.',
  price: null, // Strictly Price on Request
  image: '/images/jaisalmer/safari/camel-safari/camel-safari-jaisalmer.webp',
  imageAlt: 'Travellers on camel safari at golden hour in Thar Desert',
  experienceFlow: [
    {
      title: 'Desert Village Visit',
      hindiTitle: 'मरुस्थली ग्राम दर्शन',
      description: 'Visit a traditional desert settlement on the outskirts of Jaisalmer to witness authentic desert lifestyles, mud-and-thatch architecture, and regional hospitality.',
    },
    {
      title: 'Traditional Chai / Snacks',
      hindiTitle: 'पारंपरिक चाय और नाश्ता',
      description: 'Savour fresh, cardamom-infused tea accompanied by authentic local snacks prepared with warmth in the peaceful desert breeze.',
    },
    {
      title: 'Camel Safari through the Dunes',
      hindiTitle: 'रेत के टीलों पर ऊँट सफारी',
      description: 'Ride across pristine ripples of desert sand guided by experienced local camel handlers at a calm, contemplative pace.',
    },
    {
      title: 'Sunset over the Thar Desert',
      hindiTitle: 'थार के मरुस्थल पर मनोहारी सूर्यास्त',
      description: 'Pause atop quiet dune crests to witness the legendary Thar sunset transform yellow sands into glowing copper and deep gold.',
    },
  ],
};

/* ─── 5. Helper Functions ─────────────────────────────────────────── */

/**
 * Format a package price commercially.
 * Strictly returns "Price on Request" if price is null, undefined, or 0.
 * Never displays fake numbers, ₹0, NaN, or undefined.
 */
export function formatPackagePrice(price: number | null | undefined): string {
  if (!price || price <= 0 || isNaN(price)) {
    return 'Price on Request';
  }
  return `₹${price.toLocaleString('en-IN')}`;
}

/**
 * Get tier details safely with Maharawal fallback.
 */
export function getPackageTier(key: string): PackageTier {
  const normalized = key.toLowerCase();
  // Legacy alias handling: rajwadi -> maharawal
  if (normalized === 'rajwadi' || normalized === 'maharawal') {
    return PACKAGE_TIERS.maharawal;
  }
  return PACKAGE_TIERS[normalized as PackageTierKey] || PACKAGE_TIERS.gorbandh;
}

/**
 * Get travel type safely with couple fallback.
 */
export function getTravelType(key: string): TravelTypeInfo {
  const normalized = key.toLowerCase();
  return TRAVEL_TYPES[normalized as TravelTypeKey] || TRAVEL_TYPES.couple;
}
