export interface YatraPackage {
  id: string;
  title: string;
  destination: string;
  duration: string;
  description: string;
  highlights: string[];
  image: string;
  isPopular?: boolean;
  badge?: string;
  itinerarySummary?: string[];
}

export interface Destination {
  id: string;
  name: string;
  state: string;
  tagline: string;
  description: string;
  image: string;
  popularTemples: string[];
  bestTimeToVisit: string;
  badge?: string;
  famousFor?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  yatraName: string;
  rating: number;
  comment: string;
  avatar: string;
  quote?: string;
  author?: string;
  location?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  image: string;
  category?: string;
}

export interface InstagramPost {
  id: string;
  likes: string;
  comments: string;
  image: string;
  caption: string;
}

// Local verified assets for Indian temples & spiritual destinations
export const HERO_IMAGE = "/assets/laxminath-hero.jpg";
export const INTRO_IMAGE = "/assets/card-vrindavan.jpg";

export const STATS = [
  { value: "Sacred", label: "Curated Shrines", subtext: "Spanning holy destinations across India" },
  { value: "Personal", label: "Devotee Assistance", subtext: "Thoughtfully organized pilgrimages" },
  { value: "Comfort", label: "Peaceful Travel", subtext: "Curated stays & verified transport" },
  { value: "Heritage", label: "Living Traditions", subtext: "Temple darshans & cultural routes" },
];

export const FEATURED_YATRAS: YatraPackage[] = [
  {
    id: "jaisalmer-heritage",
    title: "Jaisalmer Golden Heritage Journey",
    destination: "Jaisalmer, Rajasthan",
    duration: "3 Days / 2 Nights",
    description: "Explore the Golden City of Thar through ancient sandstone forts, living royal havelis, serene desert sunsets, and timeless cultural heritage.",
    highlights: [
      "Sonar Qella Living Fort Guided Tour",
      "Sunset Chhatris over Gadisar Lake",
      "Sam Sand Dunes Luxury Glamping",
      "Traditional Rajasthani Folk Music"
    ],
    image: "/images/jaisalmer/web_DJI_0065.JPG",
    isPopular: true,
    badge: "Active Campaign",
    itinerarySummary: [
      "Day 1: Arrival in Jaisalmer, Gadisar Lake Sunset & Boutique Stay",
      "Day 2: Sonar Qella Living Fort & Patwon Ki Haveli Exploration",
      "Day 3: Thar Desert Dune Experience & Return Journey"
    ]
  },
  {
    id: "vrindavan-spiritual",
    title: "Vrindavan Spiritual Yatra",
    destination: "Vrindavan & Mathura Dham",
    duration: "3 Days / 2 Nights",
    description: "Immerse in the bhakti of Shri Radha Krishna. Visit Shri Radha Vallabh Temple, Bankey Bihari, Prem Mandir & sacred Yamuna Aarti.",
    highlights: [
      "Darshan at Shri Radha Vallabh Temple",
      "Yamuna Aarti at Vishram Ghat",
      "Govardhan Parikrama Assistance",
      "Evening Prem Mandir Darshan"
    ],
    image: "/assets/card-vrindavan.jpg",
    badge: "Sacred Yatra",
    itinerarySummary: [
      "Day 1: Arrival in Mathura, Janmabhoomi Darshan & Evening Yamuna Aarti",
      "Day 2: Vrindavan Temple Darshan (Radha Vallabh, Bankey Bihari)",
      "Day 3: Sacred Govardhan Parikrama & Departure with Prasadam"
    ]
  },
  {
    id: "ayodhya-dham",
    title: "Ayodhya Dham Yatra",
    destination: "Ayodhya Dham",
    duration: "3 Days / 2 Nights",
    description: "Experience the historic glory of Shri Ram Janmabhoomi Mandir, Kanak Bhawan, Hanuman Garhi and serene Saryu Aarti.",
    highlights: [
      "Ram Janmabhoomi Temple Darshan",
      "Sacred Saryu River Dip & Evening Aarti",
      "Hanuman Garhi & Kanak Bhawan Visit",
      "Guided Spiritual Storytelling Session"
    ],
    image: "/assets/card-ayodhya.jpg",
    badge: "Divine & Historical",
    itinerarySummary: [
      "Day 1: Arrival in Ayodhya, Hotel Check-in, Saryu Ghat Evening Aarti",
      "Day 2: Morning Ram Mandir Darshan, Hanuman Garhi, Kanak Bhawan",
      "Day 3: Surya Kund, Mani Parvat & Return Journey"
    ]
  },
  {
    id: "kashi-vishwanath",
    title: "Kashi Vishwanath Yatra",
    destination: "Varanasi (Kashi)",
    duration: "4 Days / 3 Nights",
    description: "Witness the cosmic energy of Moksha Nagari Kashi. Darshan at Kashi Vishwanath, grand Dashashwamedh Ganga Aarti & Sarnath visit.",
    highlights: [
      "Kashi Vishwanath Jyotirlinga Darshan",
      "Private Boat Ride during Ganga Sunrise",
      "Dashashwamedh Ganga Aarti",
      "Sarnath Heritage Tour"
    ],
    image: "/assets/card-kashi.jpg",
    badge: "Spiritual Moksha",
    itinerarySummary: [
      "Day 1: Arrival in Kashi, Evening Boat Ride & Grand Ganga Aarti",
      "Day 2: Morning Kashi Vishwanath Corridor & Annapurna Temple Darshan",
      "Day 3: Kal Bhairav, Sankat Mochan & Sarnath Excursion",
      "Day 4: Morning Holy Dip, Souvenir Shopping & Departure"
    ]
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: "jaisalmer",
    name: "Jaisalmer",
    state: "Rajasthan",
    tagline: "The Golden City of Thar",
    description: "Centuries of royal Rajputana chivalry, golden sandstone forts, living havelis, and tranquil starry desert nights.",
    image: "/images/jaisalmer/web_DJI_0438.JPG",
    popularTemples: ["Laxminath Ji Temple", "Jain Temples Sonar Fort", "Tanot Mata Mandir", "Ramdevra"],
    bestTimeToVisit: "October to March",
    badge: "Active Campaign",
    famousFor: "Sonar Qella & Sand Dunes"
  },
  {
    id: "vrindavan",
    name: "Vrindavan",
    state: "Uttar Pradesh",
    tagline: "The Divine Abode of Shri Radha Krishna",
    description: "Where every street echoes with Radha Krishna chants. Ancient groves, serene ghats, and divine temple bhajans.",
    image: "/assets/card-vrindavan.jpg",
    popularTemples: ["Shri Radha Vallabh Temple", "Bankey Bihari Mandir", "Prem Mandir", "Radha Raman"],
    bestTimeToVisit: "October to April",
    badge: "Upcoming Season",
    famousFor: "Radha Vallabh & Bankey Bihari"
  },
  {
    id: "ayodhya",
    name: "Ayodhya",
    state: "Uttar Pradesh",
    tagline: "The Sacred Janmabhoomi of Lord Shri Ram",
    description: "A city reborn in golden devotion. Grand temple spires, holy Saryu ghats, and deep spiritual heritage.",
    image: "/assets/card-ayodhya.jpg",
    popularTemples: ["Ram Janmabhoomi Mandir", "Hanuman Garhi", "Kanak Bhawan", "Nageshwarnath"],
    bestTimeToVisit: "October to March",
    badge: "Upcoming Season",
    famousFor: "Ram Janmabhoomi Mandir"
  },
  {
    id: "kashi",
    name: "Kashi (Varanasi)",
    state: "Uttar Pradesh",
    tagline: "The Eternal City of Lord Shiva",
    description: "The spiritual heart of India where liberation flows with Mother Ganga and illuminated evening aartis.",
    image: "/assets/card-kashi.jpg",
    popularTemples: ["Kashi Vishwanath Jyotirlinga", "Annapurna Mandir", "Kal Bhairav", "Sankat Mochan"],
    bestTimeToVisit: "November to March",
    badge: "Upcoming Season",
    famousFor: "Ganga Aarti & Vishwanath"
  },
  {
    id: "dwarka",
    name: "Dwarka",
    state: "Gujarat",
    tagline: "The Kingdom of Dwarkadhish",
    description: "One of the holy Char Dhams, where Lord Krishna established his legendary golden kingdom on the Arabian coast.",
    image: "/assets/card-dwarka.jpg",
    popularTemples: ["Dwarkadhish Jagat Mandir", "Nageshwar Jyotirlinga", "Bet Dwarka", "Rukmini Mandir"],
    bestTimeToVisit: "October to March",
    badge: "Upcoming Season",
    famousFor: "Dwarkadhish Mandir"
  },
  {
    id: "chardham",
    name: "Char Dham",
    state: "Uttarakhand",
    tagline: "The Four Abodes of Divine Liberation",
    description: "Yamunotri, Gangotri, Kedarnath & Badrinath nestled amidst high Himalayan snowpeaks and pristine glacial rivers.",
    image: "/assets/card-chardham.jpg",
    popularTemples: ["Kedarnath Jyotirlinga", "Badrinath Temple", "Gangotri Dham", "Yamunotri Dham"],
    bestTimeToVisit: "May to June & September to October",
    badge: "Upcoming Season",
    famousFor: "Himalayan Shrines"
  }
];

export const JOURNEY_STEPS = [
  {
    step: "01",
    number: "01",
    title: "Enquire on WhatsApp",
    subtitle: "Quick & Easy",
    description: "Select your destination, dates and group size. Send your details via WhatsApp.",
    icon: "MessageCircle"
  },
  {
    step: "02",
    number: "02",
    title: "Personalized Itinerary",
    subtitle: "Tailored for You",
    description: "Our coordinator shares customized itineraries, stay options and clear arrangements.",
    icon: "Compass"
  },
  {
    step: "03",
    number: "03",
    title: "Seamless Coordination",
    subtitle: "Peace of Mind",
    description: "Receive transport details, stay vouchers, and shrine coordination.",
    icon: "CheckCircle"
  },
  {
    step: "04",
    number: "04",
    title: "Soulful Travel",
    subtitle: "Sacred Memories",
    description: "Experience your sacred journey with peace of mind and personal attention.",
    icon: "Sparkles"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "1", title: "Sonar Qella Living Fort", location: "Jaisalmer", image: "/images/jaisalmer/web_DJI_0002.jpg", category: "Fort" },
  { id: "2", title: "Thar Desert Sunset", location: "Jaisalmer", image: "/images/jaisalmer/web_DSC_0273.JPG", category: "Desert" },
  { id: "3", title: "Sacred River Ghats", location: "Varanasi", image: "/assets/temple-twilight.jpg", category: "Ghats" },
  { id: "4", title: "Vrindavan Temple Heritage", location: "Vrindavan", image: "/assets/card-vrindavan.jpg", category: "Temple" },
  { id: "5", title: "Patwon Ki Haveli Jharokhas", location: "Jaisalmer", image: "/assets/jaisalmer-fort.png", category: "Haveli" },
  { id: "6", title: "Gadisar Lake Pavilion", location: "Jaisalmer", image: "/images/jaisalmer/web_DJI_0065.JPG", category: "Lake" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Devotee Family",
    city: "Mumbai",
    yatraName: "Vrindavan Dham",
    rating: 5,
    comment: "Every darshan was arranged with reverence and personal care.",
    avatar: "/assets/card-vrindavan.jpg",
    quote: "Every darshan was arranged with reverence and personal care.",
    author: "Devotee Family",
    location: "Mumbai, India"
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "ig1",
    likes: "Dedicated",
    comments: "Care",
    image: "/images/jaisalmer/web_DJI_0065.JPG",
    caption: "The golden towers of Jaisalmer glowing in the evening light. #ShriRadhaVallabh #Jaisalmer"
  },
  {
    id: "ig2",
    likes: "Sacred",
    comments: "Journeys",
    image: "/assets/laxminath-hero.jpg",
    caption: "Seeking divine blessings of Laxminath Ji in Jaisalmer. #SpiritualTravel"
  },
  {
    id: "ig3",
    likes: "Heritage",
    comments: "Culture",
    image: "/assets/card-vrindavan.jpg",
    caption: "Bhakti and serenity in holy Vrindavan Dham. #RadhaVallabh"
  },
  {
    id: "ig4",
    likes: "Living",
    comments: "Tradition",
    image: "/images/jaisalmer/web_DJI_0727.jpg",
    caption: "Sunset silence across the golden dunes of Thar. #DesertJourney"
  }
];
