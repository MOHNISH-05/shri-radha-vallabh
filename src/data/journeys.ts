import { CLIENT_JAISALMER_PHOTOS } from './jaisalmerImages';

export interface Package {
  id: string;
  title: string;
  duration: string;
  tagline: string;
  description: string;
  startingPrice: string;
  highlights: string[];
  image: string;
  itinerary: string[];
}

export interface Journey {
  slug: string;
  name: string;
  subTitle: string;
  title: string;
  hindiTitle: string;
  description: string;
  heroImage: string;
  heroVideo?: string;
  active: boolean;
  badge: string;
  seasonLabel: string;
  highlights: string[];
  packages: Package[];
  gallery: { title: string; location: string; category: string; image: string; thumbnail?: string }[];
}

export const JOURNEYS_DATA: Record<string, Journey> = {
  jaisalmer: {
    slug: "jaisalmer",
    name: "JAISALMER",
    subTitle: "The Golden City of Thar",
    title: "THE GOLDEN JOURNEY",
    hindiTitle: "स्वर्णिम धरा, अनंत कहानियाँ।",
    description: "Discover Jaisalmer through golden sandstone fortresses, living royal havelis, serene desert sunsets, and timeless cultural heritage.",
    heroImage: CLIENT_JAISALMER_PHOTOS[5]?.url || "/images/jaisalmer/web_DJI_0727.jpg",
    heroVideo: "/assets/srv-reassembly.mp4",
    active: true,
    badge: "Active Campaign",
    seasonLabel: "THE GOLDEN SEASON",
    highlights: [
      "UNESCO Living Fort (Sonar Qella) Guided Walk",
      "Sunset Chhatris over Gadisar Lake waters",
      "Intricate Jharokhas of Patwon & Salim Singh Haveli",
      "Sam Sand Dunes Luxury Glamping & Folk Music",
      "Desert Safari & Culinary Heritage Dining"
    ],
    gallery: CLIENT_JAISALMER_PHOTOS.map(p => ({
      title: p.title,
      location: "Jaisalmer Heritage Trail",
      category: p.category.toUpperCase(),
      image: p.url,
      thumbnail: p.url,
    })),
    packages: [
      {
        id: "jaisalmer-heritage-escape",
        title: "Jaisalmer Heritage Escape",
        duration: "3 Days / 2 Nights",
        tagline: "FORTS, HAVELIS & LAKES",
        description: "Explore the Golden City through a carefully curated heritage journey. Walk through Sonar Qella, witness Patwon Haveli, and relax at Gadisar Lake.",
        startingPrice: "Price on Request",
        image: CLIENT_JAISALMER_PHOTOS[2]?.url || "/images/jaisalmer/web_DJI_0065.JPG",
        highlights: [
          "Private Guided Fort & Haveli Trail",
          "Sunset Boat Ride at Gadisar Lake",
          "Boutique Heritage Hotel Stay",
          "Traditional Rajasthani Thali Experience"
        ],
        itinerary: [
          "Day 1: Arrival, Check-in at Heritage Haveli & Gadisar Sunset",
          "Day 2: Sonar Qella Living Fort & Patwon Ki Haveli Architecture",
          "Day 3: Kuldhara Heritage Ruins & Departure with Souvenirs"
        ]
      },
      {
        id: "desert-luxury-camp",
        title: "Desert Luxury Camp & Dunes",
        duration: "3 Days / 2 Nights",
        tagline: "STARGAZING & THAR GLAMPING",
        description: "Experience the magic of Thar. Enjoy sunset camel safaris, authentic Manganiyar music performance, and luxury tented stay under starry skies.",
        startingPrice: "Price on Request",
        image: CLIENT_JAISALMER_PHOTOS[5]?.url || "/images/jaisalmer/web_DJI_0727.jpg",
        highlights: [
          "Luxury AC Desert Glamping Tent",
          "Sunset Camel & Jeep Dune Bashing",
          "Live Manganiyar Folk Music & Kalbelia Dance",
          "Royal Gala Dinner under Open Stars"
        ],
        itinerary: [
          "Day 1: Arrival & Evening Desert Glamping Camp Check-in",
          "Day 2: Dune Safari, Sunset Viewpoint & Cultural Gala Evening",
          "Day 3: Sunrise Desert Walk & Return Journey"
        ]
      },
      {
        id: "royal-haveli-trail",
        title: "Royal Haveli & Fort Trail",
        duration: "4 Days / 3 Nights",
        tagline: "ULTIMATE ROYAL EXPERIENCE",
        description: "The complete Jaisalmer experience combining royal fort stays, desert luxury glamping, local artisan interactions, and secret architectural spots.",
        startingPrice: "Price on Request",
        image: CLIENT_JAISALMER_PHOTOS[3]?.url || "/images/jaisalmer/web_DJI_0438.JPG",
        highlights: [
          "2 Nights Fort Palace Stay + 1 Night Desert Glamping",
          "Private Curator-Led Haveli Walk",
          "Exclusive Desert Sunset Refreshments",
          "Chauffeur-driven AC SUV Transport"
        ],
        itinerary: [
          "Day 1: Arrival in Jaisalmer, Royal Welcome at Palace Hotel",
          "Day 2: In-depth Fort Archaeology & Jain Temple Tour",
          "Day 3: Thar Desert Escapade & Night Folk Performance",
          "Day 4: Morning Souvenir Market Walk & Farewell"
        ]
      }
    ]
  },

  chardham: {
    slug: "chardham",
    name: "CHAR DHAM",
    subTitle: "Sacred Himalayan Shrines",
    title: "THE SACRED HIMALAYAN JOURNEY",
    hindiTitle: "देवभूमि देव दर्शन, मोक्ष मार्ग।",
    description: "Seek divine grace at Yamunotri, Gangotri, Kedarnath & Badrinath amidst high Himalayan peaks and holy rivers.",
    heroImage: "/assets/card-chardham.jpg",
    active: false,
    badge: "Upcoming Season",
    seasonLabel: "THE SACRED SEASON",
    highlights: ["Kedarnath Jyotirlinga Darshan", "Badrinath Temple", "Helicopter Assistance", "Sacred River Dips"],
    packages: [],
    gallery: []
  },

  vrindavan: {
    slug: "vrindavan",
    name: "VRINDAVAN & MATHURA",
    subTitle: "The Land of Shri Radha Krishna",
    title: "THE DIVINE BRAJ YATRA",
    hindiTitle: "राधा नाम परम सुखदाई।",
    description: "Immerse in the bhakti of Banke Bihari, Prem Mandir, Radha Raman and sacred Yamuna Aarti at dusk.",
    heroImage: "/assets/card-vrindavan.jpg",
    active: false,
    badge: "Upcoming Season",
    seasonLabel: "DIVINE BHAKTI SEASON",
    highlights: ["Banke Bihari Darshan", "Nidhivan Spiritual Walk", "Yamuna Evening Aarti", "Braj Chhappan Bhog"],
    packages: [],
    gallery: []
  },

  ayodhya: {
    slug: "ayodhya",
    name: "AYODHYA",
    subTitle: "Shri Ram Janmabhoomi",
    title: "THE DHARMA JOURNEY",
    hindiTitle: "मंगल भवन अमंगल हारी।",
    description: "Witness the magnificent Ram Mandir, Hanumangarhi, Kanak Bhawan, and the sacred Saryu Aarti.",
    heroImage: "/assets/card-ayodhya.jpg",
    active: false,
    badge: "Upcoming Season",
    seasonLabel: "THE SACRED SEASON",
    highlights: ["Ram Janmabhoomi Darshan", "Hanumangarhi Temple", "Saryu River Aarti", "Kanak Bhawan"],
    packages: [],
    gallery: []
  },

  kashi: {
    slug: "kashi",
    name: "KASHI / VARANASI",
    subTitle: "The City of Light & Moksha",
    title: "THE ETERNAL CITY YATRA",
    hindiTitle: "हर हर महादेव।",
    description: "Experience the eternal Ganga Aarti, Kashi Vishwanath corridor, morning boat rides, and ancient alleys.",
    heroImage: "/assets/card-kashi.jpg",
    active: false,
    badge: "Upcoming Season",
    seasonLabel: "ETERNAL LIGHT SEASON",
    highlights: ["Kashi Vishwanath Corridor", "Ganga Grand Evening Aarti", "Subah-e-Banaras Boat Ride", "Sarnath Heritage Tour"],
    packages: [],
    gallery: []
  }
};

export const ACTIVE_JOURNEY = JOURNEYS_DATA.jaisalmer;

export const OTHER_JOURNEYS = [
  JOURNEYS_DATA.jaisalmer,
  JOURNEYS_DATA.chardham,
  JOURNEYS_DATA.vrindavan,
  JOURNEYS_DATA.ayodhya,
  JOURNEYS_DATA.kashi,
];

/* ─── Genuine Brand Value Commitments (No Fabricated Customer Reviews) ─── */
export const BRAND_EXPERIENCES = [
  {
    id: "exp-1",
    title: "Personal Attention & Dignity",
    hindi: "व्यक्तिगत मार्गदर्शन",
    description: "Every journey is customized to your family's pace. We provide attentive coordination, flexible timing, and dedicated assistance for elderly pilgrims and families.",
    icon: "Heart"
  },
  {
    id: "exp-2",
    title: "Living Heritage & Sacred Darshans",
    hindi: "पवित्र दर्शन और संस्कृति",
    description: "Experience sacred temples, living fort lanes, and authentic cultural performances guided by local knowledge, respectful of age-old traditions and spirituality.",
    icon: "Sparkles"
  },
  {
    id: "exp-3",
    title: "Comfort, Care & Sattvik Dining",
    hindi: "सुगम और शांत यात्रा",
    description: "Rest easy in curated heritage boutique stays and premium desert camps, supported by clean chauffeur transport and fresh, authentic culinary arrangements.",
    icon: "Shield"
  }
];

export const WHY_TRAVEL_POINTS = [
  {
    id: "personal",
    title: "PERSONAL ATTENTION",
    description: "Thoughtfully planned journeys with dedicated human assistance and personalized care at every step.",
    icon: "Heart"
  },
  {
    id: "meaningful",
    title: "MEANINGFUL EXPERIENCES",
    description: "Travel beyond ordinary sightseeing—immerse yourself in living history, sacred stories, and authentic culture.",
    icon: "Sparkles"
  },
  {
    id: "comfort",
    title: "COMFORT & CARE",
    description: "Handpicked luxury boutique stays, sanitized chauffeur transport, and sattvik dining options for peaceful travel.",
    icon: "Shield"
  },
  {
    id: "local",
    title: "LOCAL PERSPECTIVE",
    description: "Experienced local cultural storytellers and shrine escorts who unlock secret heritage spots and priority darshans.",
    icon: "Compass"
  }
];
