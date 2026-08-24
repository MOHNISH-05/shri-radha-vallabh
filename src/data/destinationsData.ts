import { CLIENT_JAISALMER_PHOTOS } from './jaisalmerImages';
import type { Package } from './journeys';

export interface PlaceToExperience {
  id: string;
  name: string;
  hindiName: string;
  category: 'HERITAGE' | 'SPIRITUAL' | 'ARCHITECTURE' | 'DESERT' | 'CULTURE';
  description: string;
  whyVisit: string;
  image: string | null;
  tags: string[];
}

export interface SacredSite {
  name: string;
  hindiName: string;
  deityOrTradition: string;
  significance: string;
  image?: string | null;
}

export interface ItineraryDay {
  day: string;
  title: string;
  hindiTitle: string;
  description: string;
  highlights: string[];
  schedule: { time: string; activity: string }[];
}

export interface StayStyle {
  name: string;
  hindiName: string;
  description: string;
  idealFor: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface DestinationData {
  slug: string;
  name: string;
  hindiName: string;
  tagline: string;
  subTitle: string;
  description: string;
  heroImage: string;
  heroVideo?: string;
  badge: string;
  seasonLabel: string;
  quickFacts: {
    location: string;
    region: string;
    knownFor: string;
    idealDuration: string;
    bestSeason: string;
    journeyType: string;
  };
  introduction: {
    headline: string;
    hindiHeadline: string;
    paragraphs: string[];
    highlightPillars: { title: string; text: string; icon: string }[];
    featuredImage: string;
  };
  placesToExperience: PlaceToExperience[];
  spiritualSignificance: {
    title: string;
    hindiTitle: string;
    description: string;
    sacredSites: SacredSite[];
    philosophyNote: string;
  };
  livingHeritage: {
    title: string;
    hindiTitle: string;
    description: string;
    pillars: { title: string; subtitle: string; description: string }[];
    image: string;
  };
  tharDesertExperience: {
    title: string;
    hindiTitle: string;
    description: string;
    experiences: { title: string; desc: string; icon: string }[];
    images: string[];
    disclaimer: string;
  };
  culturalSoul: {
    title: string;
    hindiTitle: string;
    description: string;
    traditions: { name: string; hindi: string; description: string }[];
  };
  sampleItinerary: {
    title: string;
    badge: string;
    disclaimer: string;
    days: ItineraryDay[];
  };
  packages: Package[];
  stayStyles: {
    title: string;
    description: string;
    styles: StayStyle[];
  };
  howToReach: {
    byAir: { title: string; details: string; note: string };
    byTrain: { title: string; details: string; note: string };
    byRoad: { title: string; details: string; note: string };
  };
  bestTimeToVisit: {
    title: string;
    overview: string;
    seasons: { season: string; months: string; weather: string; recommendation: string }[];
    confirmationNote: string;
  };
  localFlavours: {
    title: string;
    description: string;
    dishes: { name: string; hindi: string; description: string }[];
    sattvikNote: string;
  };
  whoIsThisFor: {
    title: string;
    categories: { title: string; hindi: string; description: string; icon: string }[];
  };
  faqs: FAQItem[];
  gallery: { title: string; location: string; category: string; image: string }[];
  relatedJourneys: {
    slug: string;
    name: string;
    hindiName: string;
    tagline: string;
    image: string;
    status: string;
  }[];
}

export const DESTINATIONS_DATA: Record<string, DestinationData> = {
  jaisalmer: {
    slug: 'jaisalmer',
    name: 'JAISALMER',
    hindiName: 'जैसलमेर',
    tagline: 'स्वर्णिम धरा, अनंत कहानियाँ।',
    subTitle: 'The Golden City of Thar',
    description:
      'Discover Jaisalmer through golden sandstone fortresses, living royal havelis, sacred temple sanctums, serene desert sunsets, and timeless Rajasthani folk culture.',
    heroImage: CLIENT_JAISALMER_PHOTOS[5]?.url || '/images/jaisalmer/web_DJI_0727.jpg',
    heroVideo: '/assets/srv-reassembly.mp4',
    badge: 'ACTIVE DESTINATION EXPERIENCE',
    seasonLabel: 'THE GOLDEN SEASON',

    quickFacts: {
      location: 'Jaisalmer, Western Rajasthan, India',
      region: 'Great Indian Thar Desert',
      knownFor: 'Sonar Qella (Living Fort), Carved Havelis, Sand Dunes & Temple Shrines',
      idealDuration: '3 to 5 Days (Customizable)',
      bestSeason: 'October to March (Pleasant Desert Winter)',
      journeyType: 'Living Heritage · Sacred Shrines · Desert Glamping · Folk Traditions',
    },

    introduction: {
      headline: 'The Living Sandstone Citadel of the Thar',
      hindiHeadline: 'रेत का सोना, इतिहास का वैभव और आस्था की धारा',
      paragraphs: [
        'Rising like a golden mirage from the heart of the Thar Desert, Jaisalmer is one of the world\'s most extraordinary living medieval cities. Founded in 1156 AD by Rawal Jaisal, the city gets its name from its distinctive yellow sandstone architecture that turns a glowing honey-gold under the setting sun.',
        'Unlike silent monument ruins elsewhere, Jaisalmer\'s 12th-century UNESCO World Heritage fortress—Sonar Qella—is a living city. One-fourth of the historic population still resides inside its ramparts, continuing generations of artisan crafts, sacred temple rituals, and warm desert hospitality.',
        'With Shri Radha Vallabh, your journey is curated with reverence and dignity—combining private guided walks through centuries-old haveli carvings, tranquil evening prayers at ancient shrines, and unforgettable nights under starry skies in luxury desert camps.'
      ],
      highlightPillars: [
        { title: 'Living UNESCO Fort', text: 'Walk through Sonar Qella\'s 99 bastions where families have lived for 800+ years.', icon: 'Landmark' },
        { title: 'Sacred Temples', text: 'Intricate 12th-15th century Jain & Hindu sanctuaries carved in fine sandstone.', icon: 'Heart' },
        { title: 'The Thar Glamping', text: 'Serene sand dunes, camel caravans, and traditional folk music under clear skies.', icon: 'Tent' },
        { title: 'Human Touch Care', text: 'Personal coordinator assistance, sanitized chauffeur vehicles, and senior comfort.', icon: 'Shield' },
      ],
      featuredImage: '/images/jaisalmer/Jaisalmer Photos/jaisalmer fort.JPG',
    },

    placesToExperience: [
      {
        id: 'sonar-qella',
        name: 'Sonar Qella (Jaisalmer Fort)',
        hindiName: 'सोनार किला (स्वर्ण दुर्ग)',
        category: 'HERITAGE',
        description: 'One of the world\'s largest fully preserved and inhabited medieval fortresses, crowning the Trikuta Hill with 99 sandstone bastions.',
        whyVisit: 'Experience living history through medieval alleyways, royal palace courtyards, and rooftop sunset panoramas across the Thar.',
        image: '/images/jaisalmer/Jaisalmer Photos/jaisalmer fort.JPG',
        tags: ['UNESCO World Heritage', 'Living Fort', 'Panoramic Views']
      },
      {
        id: 'patwon-haveli',
        name: 'Patwon Ki Haveli',
        hindiName: 'पटवों की हवेली',
        category: 'ARCHITECTURE',
        description: 'A magnificent cluster of five historic merchant mansions built in 1805 AD, renowned for the finest stone lattice (jali) and jharokha craftsmanship in India.',
        whyVisit: 'Witness stone-carved filigree so intricate it resembles delicate gold lace, along with antique wall frescoes.',
        image: '/images/jaisalmer/Jaisalmer Photos/patawa haveli1.jpeg',
        tags: ['Stone Filigree', '1805 AD', 'Merchant Heritage']
      },
      {
        id: 'gadisar-lake',
        name: 'Gadisar Lake & Chhatris',
        hindiName: 'गड़ीसर सरोवर एवं छतरियाँ',
        category: 'SPIRITUAL',
        description: 'A 14th-century sacred rainwater reservoir encircled by intricately carved domed cenotaphs, ghats, and the historic Tillon Ki Pol gateway.',
        whyVisit: 'Quiet morning or twilight reflection, serene boat rides, and feeding sacred catfish while watching the golden sunset reflection.',
        image: '/images/jaisalmer/Jaisalmer Photos/gadisar.JPG',
        tags: ['Sacred Water', 'Sunset Chhatris', 'Peaceful Reflection']
      },
      {
        id: 'jain-temples',
        name: 'Ancient Jain Temples & Lodurva',
        hindiName: 'प्राचीन जैन मंदिर एवं लोद्रवा तीर्थ',
        category: 'SPIRITUAL',
        description: 'Seven interconnected 12th-to-15th-century marble and sandstone temples dedicated to Tirthankaras, along with the ancient spiritual capital at Lodurva.',
        whyVisit: 'Deep spiritual silence, exquisite Torana arches, celestial apsara carvings, and centuries-old manuscript preservation.',
        image: '/images/jaisalmer/Jaisalmer Photos/jain temple 1.jpeg',
        tags: ['Spiritual Sanctum', '12th Century', 'Torana Arches']
      },
      {
        id: 'sam-dunes',
        name: 'Sam Sand Dunes & Desert Park',
        hindiName: 'सैम सैंड ड्यून्स (रेत के टीले)',
        category: 'DESERT',
        description: 'Vast sweeping golden sand dunes on the edge of the Desert National Park where the Thar Desert reveals its vast, shifting landscape.',
        whyVisit: 'Witnessing the glowing golden hour, camel safaris, quad biking, and tranquil stargazing in the silence of the desert night.',
        image: '/images/jaisalmer/Jaisalmer Photos/desertsam1.JPG',
        tags: ['Shifting Dunes', 'Desert Sunset', 'Glamping Camps']
      },
      {
        id: 'salim-singh-haveli',
        name: 'Salim Singh Ki Haveli (Moti Mahal)',
        hindiName: 'सलीम सिंह की हवेली',
        category: 'ARCHITECTURE',
        description: 'A 300-year-old architectural marvel built with a narrow base expanding into a grand peacock-shaped top floor with 38 carved balconies.',
        whyVisit: 'Unique architectural geometry held together with iron brackets instead of mortar.',
        image: '/images/jaisalmer/Jaisalmer Photos/salim-singh-haveli.jpeg',
        tags: ['Peacock Pavilion', 'Carved Balconies', 'Historic Legend']
      },
      {
        id: 'bada-bagh',
        name: 'Bada Bagh Royal Cenotaphs',
        hindiName: 'बड़ा बाग (राजसी छतरियाँ)',
        category: 'HERITAGE',
        description: 'A dramatic hilltop complex of ornate stone chhatris commemorating the Maharawals and royal family members of Jaisalmer.',
        whyVisit: 'Poetic twilight photography overlooking the desert wind turbines and historic royal stone cenotaphs.',
        image: '/images/jaisalmer/Jaisalmer Photos/bada bagh.jpeg',
        tags: ['Royal Chhatris', 'Sunset Photography', 'Royal History']
      },
      {
        id: 'kuldhara',
        name: 'Kuldhara Heritage Village',
        hindiName: 'कुलधरा हेरिटेज ग्राम',
        category: 'CULTURE',
        description: 'The famous 13th-century abandoned Paliwal Brahmin village that was mysteriously vacated overnight in 1825 to protect community dignity.',
        whyVisit: 'Fascinating walk through stone-built streets, ancient temple sanctums, and traditional desert water-harvesting engineering.',
        image: null,
        tags: ['Historical Mystery', 'Paliwal Heritage', 'Desert Architecture']
      }
    ],

    spiritualSignificance: {
      title: 'Sacred Jaisalmer: Devotion in Sandstone',
      hindiTitle: 'मरुभूमि में आस्था, साधना और शांति',
      description:
        'Beyond its royal history, Jaisalmer has been a sacred refuge of spirituality for over nine centuries. The harmonious coexistence of ancient Hindu temple traditions and Jain spiritual sanctuaries has preserved sacred rituals unchanged across generations.',
      sacredSites: [
        {
          name: 'Shri Laxminath Ji Mandir',
          hindiName: 'श्री लक्ष्मीनारायण मंदिर',
          deityOrTradition: 'Lord Vishnu & Goddess Lakshmi',
          significance: 'Located inside the Fort, Laxminath Ji is revered as the divine ruler of Jaisalmer, where centuries of daily aarti and royal reverence continue.',
          image: '/images/jaisalmer/Jaisalmer Photos/laxmi nath ji 1.jpeg'
        },
        {
          name: 'Chintamani Parshvanath Jain Mandir',
          hindiName: 'चिंतामणि पार्श्वनाथ तीर्थ',
          deityOrTradition: 'Jain Tirthankaras',
          significance: 'Celebrated for breathtaking torana gateways and dome ceilings depicting 1,200+ celestial figures carved in stone.',
          image: '/images/jaisalmer/Jaisalmer Photos/jain temple 1.jpeg'
        },
        {
          name: 'Lodurva Sacred Tirth',
          hindiName: 'लोद्रवा पार्श्वनाथ तीर्थ',
          deityOrTradition: 'Ancient Jain Pilgrimage',
          significance: 'The ancient capital housing the Kalpavriksha (sacred wishing tree) and the legendary serpent sanctum.',
          image: '/images/jaisalmer/Jaisalmer Photos/lodrava.jpg'
        },
        {
          name: 'Tanot Mata Temple (Border Pilgrimage)',
          hindiName: 'तणोट माता मंदिर',
          deityOrTradition: 'Hinglaj Mata Incarnation',
          significance: 'A miraculous border shrine revered by devotees and soldiers alike for its sacred protection during wartime.',
          image: '/images/jaisalmer/Jaisalmer Photos/tanot mata.png'
        }
      ],
      philosophyNote: 'With Shri Radha Vallabh, temple visits are conducted with reverence, unhurried darshan arrangements, and proper guidance on sacred customs.'
    },

    livingHeritage: {
      title: 'Living Heritage: A Fort that Breathes',
      hindiTitle: 'जीवंत किला: इतिहास जहाँ आज भी सांस लेता है',
      description:
        'What makes Jaisalmer unique among the world\'s historic landmarks is that it is not an empty open-air museum. Inside the massive triple ramparts of Sonar Qella, life continues as it has since the 12th century.',
      pillars: [
        {
          title: 'Sandstone Masonry (Silawats)',
          subtitle: 'The Masters of Stone',
          description: 'Local stone artisans known as Silawats pass down centuries of interlocking stone architecture built without cement or mortar.'
        },
        {
          title: 'Living Fort Community',
          subtitle: 'Generations Within the Walls',
          description: 'Over 4,000 residents live inside the fort, maintaining historic havelis, family temples, and culinary traditions.'
        },
        {
          title: 'Preserved Manuscripts (Gyan Bhandar)',
          subtitle: 'Centuries of Wisdom',
          description: 'The underground vaults of Jaisalmer\'s temples preserve some of the oldest palm-leaf manuscripts and illustrated texts in India.'
        }
      ],
      image: '/images/jaisalmer/Jaisalmer Photos/Jaisalmer fort -17.jpg'
    },

    tharDesertExperience: {
      title: 'The Thar Experience: Endless Dunes & Open Skies',
      hindiTitle: 'थार मरुस्थल: सुनहरे टीले, लोक संगीत और तारों भरी रात',
      description:
        'The Thar Desert surrounds Jaisalmer with vast expanses of golden sand dunes. As dusk approaches, the sands shift from bright gold to deep amber, creating an unforgettable backdrop for quiet contemplation and traditional hospitality.',
      experiences: [
        { title: 'Golden Hour Camel Safari', desc: 'Slow, peaceful camel caravan across the ripple crests of Sam sand dunes during sunset.', icon: 'Compass' },
        { title: 'Luxury Desert Glamping', desc: 'Comfortable Swiss-style AC tents with private bathrooms, traditional decor, and modern amenities.', icon: 'Tent' },
        { title: 'Stargazing in Dark Skies', desc: 'Minimal light pollution makes Thar one of India\'s best locations to view constellations and the Milky Way.', icon: 'Sparkles' },
        { title: 'Campfire Folk Performance', desc: 'Enthralling live Manganiyar vocalists and Kalbelia folk dancers under open skies.', icon: 'Music' },
      ],
      images: [
        '/images/jaisalmer/Jaisalmer Photos/desertsam1.JPG',
        '/images/jaisalmer/Jaisalmer Photos/desertsam2.JPG',
        '/images/jaisalmer/Jaisalmer Photos/khuri-dunes.JPG'
      ],
      disclaimer: 'Desert glamping, camel safaris, and cultural evenings are available as part of selected or customized journey packages.'
    },

    culturalSoul: {
      title: 'The Soul of Rajasthan: Melodies & Traditions',
      hindiTitle: 'राजस्थानी संस्कृति: राग, रंग और अपनापन',
      description:
        'The desert comes alive through its people—the Manganiyar and Langa hereditary musicians who have carried musical traditions through oral lineage for centuries, and master artisans who craft mirror-work textiles and pottery.',
      traditions: [
        { name: 'Manganiyar Music & Kamaicha', hindi: 'मांगणियार लोक संगीत', description: 'Haunting melodies played on the ancient bowed Kamaicha and rhythmic Khartal castanets.' },
        { name: 'Ghoomar & Kalbelia Dance', hindi: 'कालबेलिया एवं घूमर नृत्य', description: 'Energetic traditional folk dances showcasing the agility and grace of desert performers.' },
        { name: 'Yellow Sandstone Carving', hindi: 'पीले पत्थर की नक्काशी', description: 'Intricate decorative items, jali screens, and stone souvenirs handcrafted by local artisans.' },
        { name: 'Traditional Hospitality (Padharo Mhare Des)', hindi: 'अतिथि देवो भव परंपरा', description: 'Warm, respectful reception rooted in traditional Rajasthani culture.' }
      ]
    },

    sampleItinerary: {
      title: 'Sample 4-Day Curated Jaisalmer Circuit',
      badge: 'ILLUSTRATIVE ITINERARY',
      disclaimer: 'This is a sample itinerary for reference. Daily pacing, temple darshan timings, stay selections, and customized excursions are personalized to your family\'s preferences upon request.',
      days: [
        {
          day: 'Day 01',
          title: 'Arrival in Jaisalmer & Gadisar Lake Twilight',
          hindiTitle: 'आगमन, हेरिटेज हवेली चेक-इन एवं गड़ीसर सरोवर संध्या',
          description: 'Warm traditional welcome upon arrival, check-in to your selected heritage boutique stay, and a gentle evening stroll by the tranquil waters of Gadisar Lake.',
          highlights: ['Private arrival reception', 'Check-in & relaxation', 'Gadisar Lake twilight chhatris', 'Traditional dinner'],
          schedule: [
            { time: 'Afternoon', activity: 'Arrival in Jaisalmer, check-in at boutique heritage property, refreshment & rest' },
            { time: '05:00 PM', activity: 'Visit historic Gadisar Lake for peaceful sunset views, boat ride & evening aarti' },
            { time: '07:30 PM', activity: 'Traditional Rajasthani welcome dinner with local vegetarian specialties' }
          ]
        },
        {
          day: 'Day 02',
          title: 'Living Fort (Sonar Qella) & Masterpiece Havelis',
          hindiTitle: 'स्वर्ण दुर्ग, लक्ष्मीनारायण मंदिर एवं पटवों की हवेली दर्शन',
          description: 'A relaxed guided exploration inside the 12th-century living fort, sacred darshan at Shri Laxminath Ji temple, and marveling at the stone carvings of Patwon Ki Haveli.',
          highlights: ['Guided Sonar Qella walk', 'Laxminath Ji & Jain temple darshan', 'Patwon & Salim Singh Havelis', 'Local artisan bazaars'],
          schedule: [
            { time: '09:00 AM', activity: 'Guided walk through Sonar Qella ramparts, Royal Palace courtyards & cannon viewpoints' },
            { time: '11:30 AM', activity: 'Darshan at sacred Shri Laxminath Ji & 15th-century Jain temples' },
            { time: '03:30 PM', activity: 'Visit the intricate jharokhas of Patwon Ki Haveli and Salim Singh Ki Haveli' },
            { time: '06:00 PM', activity: 'Evening stroll through the sandstone handicraft lanes of Manak Chowk' }
          ]
        },
        {
          day: 'Day 03',
          title: 'Bada Bagh, Ancient Kuldhara & Desert Glamping',
          hindiTitle: 'बड़ा बाग छतरियाँ, कुलधरा गाँव एवं सैम सैंड ड्यून्स कैंप',
          description: 'Exploring the royal cenotaphs of Bada Bagh, visiting the legendary abandoned village of Kuldhara, followed by a scenic drive to the dunes for sunset glamping.',
          highlights: ['Bada Bagh royal chhatris', 'Historic Kuldhara village', 'Sam dunes sunset camel safari', 'Campfire & live folk music'],
          schedule: [
            { time: '09:30 AM', activity: 'Visit Bada Bagh royal cenotaphs for morning photography' },
            { time: '11:30 AM', activity: 'Explore the historic architecture and folklore of Kuldhara abandoned village' },
            { time: '03:30 PM', activity: 'Scenic drive to Sam Sand Dunes & check-in at luxury desert camp' },
            { time: '05:30 PM', activity: 'Sunset camel safari over the dunes, followed by campfire folk music & gala dinner' }
          ]
        },
        {
          day: 'Day 04',
          title: 'Desert Sunrise & Farewell with Golden Memories',
          hindiTitle: 'मरुस्थल प्रभात, स्मरणिका खरीदारी एवं सुखद प्रस्थान',
          description: 'Quiet morning sunrise over the desert dunes, hearty breakfast, souvenir browsing for authentic sandstone crafts, and chauffeured transfer for onward journey.',
          highlights: ['Sunrise desert walk', 'Traditional breakfast', 'Souvenir shopping', 'Chauffeur departure transfer'],
          schedule: [
            { time: '06:30 AM', activity: 'Peaceful sunrise over the dunes & morning tea' },
            { time: '09:00 AM', activity: 'Camp check-out and return drive to Jaisalmer town for last-minute shopping' },
            { time: 'Afternoon', activity: 'Chauffeured departure transfer to Jaisalmer Railway Station / Airport' }
          ]
        }
      ]
    },

    packages: [
      {
        id: 'jaisalmer-heritage-escape',
        title: 'Jaisalmer Heritage Escape',
        duration: '3 Days / 2 Nights',
        tagline: 'FORTS, HAVELIS & LAKES',
        description: 'Explore the Golden City through a carefully curated heritage journey. Walk through Sonar Qella, witness Patwon Haveli, and relax at Gadisar Lake.',
        startingPrice: 'Price on Request',
        image: CLIENT_JAISALMER_PHOTOS[2]?.url || '/images/jaisalmer/web_DJI_0065.JPG',
        highlights: [
          'Private Guided Fort & Haveli Trail',
          'Sunset Boat Ride at Gadisar Lake',
          'Boutique Heritage Hotel Stay',
          'Traditional Rajasthani Thali Experience'
        ],
        itinerary: [
          'Day 1: Arrival, Check-in at Heritage Haveli & Gadisar Sunset',
          'Day 2: Sonar Qella Living Fort & Patwon Ki Haveli Architecture',
          'Day 3: Kuldhara Heritage Ruins & Departure with Souvenirs'
        ]
      },
      {
        id: 'desert-luxury-camp',
        title: 'Desert Luxury Camp & Dunes',
        duration: '3 Days / 2 Nights',
        tagline: 'STARGAZING & THAR GLAMPING',
        description: 'Experience the magic of Thar. Enjoy sunset camel safaris, authentic Manganiyar music performance, and luxury tented stay under starry skies.',
        startingPrice: 'Price on Request',
        image: CLIENT_JAISALMER_PHOTOS[5]?.url || '/images/jaisalmer/web_DJI_0727.jpg',
        highlights: [
          'Luxury AC Desert Glamping Tent',
          'Sunset Camel & Jeep Dune Bashing',
          'Live Manganiyar Folk Music & Kalbelia Dance',
          'Royal Gala Dinner under Open Stars'
        ],
        itinerary: [
          'Day 1: Arrival & Evening Desert Glamping Camp Check-in',
          'Day 2: Dune Safari, Sunset Viewpoint & Cultural Gala Evening',
          'Day 3: Sunrise Desert Walk & Return Journey'
        ]
      },
      {
        id: 'royal-haveli-trail',
        title: 'Royal Haveli & Fort Trail',
        duration: '4 Days / 3 Nights',
        tagline: 'COMPLETE DESERT & HERITAGE CIRCUIT',
        description: 'The ultimate royal retreat. Combines in-depth architectural exploration of merchant havelis with an overnight luxury desert glamping experience.',
        startingPrice: 'Price on Request',
        image: CLIENT_JAISALMER_PHOTOS[0]?.url || '/images/jaisalmer/web_20200723_182902_001-HDR.JPG',
        highlights: [
          'Full Day Sonar Qella & Jain Temples Tour',
          'Patwon, Salim Singh & Nathmal Havelis',
          'Overnight Desert Luxury Tent Stay',
          'Kuldhara Ghost Village & Bada Bagh Chhatris'
        ],
        itinerary: [
          'Day 1: Arrival & Evening Leisure at Gadisar Lake',
          'Day 2: Living Fort, Temple Sanctuaries & Grand Havelis',
          'Day 3: Bada Bagh, Kuldhara & Sam Desert Camp Glamping',
          'Day 4: Morning Desert Sunrise & Departure'
        ]
      }
    ],

    stayStyles: {
      title: 'Where You Stay: Handpicked Accommodations',
      description:
        'We select properties that reflect authentic Rajasthani heritage while upholding strict standards of cleanliness, personalized service, and senior comfort.',
      styles: [
        {
          name: 'Heritage Boutique Havelis',
          hindiName: 'हेरिटेज हवेलियाँ और बुटीक स्टे',
          description: 'Restored sandstone havelis inside or adjacent to the fort, featuring carved stone courtyards, period furniture, and panoramic rooftop views.',
          idealFor: 'Couples, heritage enthusiasts, and lovers of architecture.',
          icon: 'Landmark'
        },
        {
          name: 'Luxury Desert Glamping Camps',
          hindiName: 'लक्ज़री डेजर्ट कैंप्स (सैम सैंड ड्यून्स)',
          description: 'Spacious Swiss-style canvas tents equipped with plush bedding, air-cooling/heating, private en-suite bathrooms, and open-air dining.',
          idealFor: 'Families, stargazers, and travellers seeking desert serenity.',
          icon: 'Tent'
        },
        {
          name: 'Premium City Heritage Hotels',
          hindiName: 'प्रीमियम सिटी होटल एवं रिसॉर्ट्स',
          description: 'Modern luxury properties built in traditional Jaisalmer sandstone architecture with expansive gardens, pools, and elevator accessibility.',
          idealFor: 'Senior citizens and multi-generational families needing smooth accessibility.',
          icon: 'Shield'
        },
        {
          name: 'Quiet Pilgrim Guest Stays',
          hindiName: 'शांतिपूर्ण तीर्थ यात्री आवास',
          description: 'Clean, peaceful accommodations located near sacred temple shrines with pure vegetarian and sattvik dining arrangements.',
          idealFor: 'Devotees seeking quiet spiritual contemplation.',
          icon: 'Heart'
        }
      ]
    },

    howToReach: {
      byAir: {
        title: 'By Air',
        details: 'Jaisalmer Airport (JSA) operates seasonal domestic flights from major cities like Delhi, Mumbai, and Jaipur. Alternatively, Jodhpur Airport (JDH) is located ~280 km away with year-round daily connectivity.',
        note: 'Chauffeured airport pickup and drop-off can be arranged upon request.'
      },
      byTrain: {
        title: 'By Train',
        details: 'Jaisalmer Railway Station (JSM) is well connected with direct express trains from Delhi (Jaisalmer Express / Shalimar Express), Jaipur, Jodhpur, and Mumbai.',
        note: 'Direct railway station reception and porter assistance are coordinated for senior guests.'
      },
      byRoad: {
        title: 'By Road (Chauffeured Highway)',
        details: 'Jaisalmer is connected via smooth multi-lane highways: Jodhpur to Jaisalmer (4.5 hours), Bikaner to Jaisalmer (5.5 hours), and Jaipur to Jaisalmer (9 hours).',
        note: 'Private sanitized SUVs and tempo travellers with experienced highway chauffeurs are available.'
      }
    },

    bestTimeToVisit: {
      title: 'When to Experience Jaisalmer',
      overview:
        'Because Jaisalmer is located in the Thar Desert, the climate varies distinctly across seasons. Choosing the right month ensures maximum comfort for sightseeing and desert experiences.',
      seasons: [
        {
          season: 'Winter (Peak Season)',
          months: 'October – March',
          weather: 'Day: 20°C – 26°C | Night: 7°C – 14°C',
          recommendation: 'The most ideal time. Cool golden days perfect for fort walking and crisp desert nights for campfires.'
        },
        {
          season: 'Desert Festival Period',
          months: 'January / February (Magh Purnima)',
          weather: 'Pleasant winter weather',
          recommendation: 'Annual 3-day cultural extravaganza with folk music, turban competitions, and camel polo.'
        },
        {
          season: 'Monsoon (Green Thar)',
          months: 'July – September',
          weather: 'Day: 30°C – 36°C | Occasional light rain',
          recommendation: 'Pleasant off-season with fewer crowds, mild desert breezes, and subtle greenery across the dunes.'
        },
        {
          season: 'Summer (Off-Peak)',
          months: 'April – June',
          weather: 'Day: 38°C – 44°C',
          recommendation: 'Hot desert temperatures. Recommended only for morning temple visits with AC accommodations.'
        }
      ],
      confirmationNote: 'Travel dates and optimal seasonal pacing can be discussed directly with our journey coordinator.'
    },

    localFlavours: {
      title: 'Taste Jaisalmer: Authentic Desert Cuisine',
      description:
        'Rajasthani cuisine has evolved around the hearty ingredients of the arid Thar. Rich in aromatic spices and ghee, local dishes offer unforgettable warmth.',
      dishes: [
        { name: 'Dal Baati Churma', hindi: 'दाल बाटी चूरमा', description: 'Hard wheat rolls baked over cow-dung cakes, crushed in pure ghee and served with spiced lentil dal and sweet jaggery churma.' },
        { name: 'Ker Sangri', hindi: 'कैर सांगरी', description: 'A beloved desert delicacy prepared from wild desert berries (Ker) and dried desert beans (Sangri) with aromatic spices.' },
        { name: 'Gatte Ki Sabzi', hindi: 'गट्टे की सब्ज़ी', description: 'Steamed gram-flour dumplings simmered in a spiced yogurt-based gravy, eaten with hot bajra (pearl millet) rotis.' },
        { name: 'Makhaniya Lassi & Ghotua', hindi: 'मखणिया लस्सी एवं घोटुआ लड्डू', description: 'Thick creamy saffron lassi and Jaisalmer\'s signature melt-in-mouth royal boondi sweet (Ghotua).' }
      ],
      sattvikNote: 'Pure vegetarian, Jain (without onion/garlic), and mild sattvik meals tailored for senior family members are arranged on request.'
    },

    whoIsThisFor: {
      title: 'Who Is This Journey For?',
      categories: [
        { title: 'Families & Multi-Generations', hindi: 'सपरिवार यात्रा', description: 'Relaxed pacing, comfortable transport, and diverse activities engaging grandparents and children alike.', icon: 'Users' },
        { title: 'Senior Devotees & Pilgrims', hindi: 'वरिष्ठ तीर्थयात्री', description: 'Unhurried darshans, minimal stairs, sanitized stays, and dedicated personal assistance throughout.', icon: 'Heart' },
        { title: 'Heritage & Architecture Lovers', hindi: 'इतिहास एवं स्थापत्य प्रेमी', description: 'In-depth guided exploration of 12th-century stone masonry, havelis, and royal archives.', icon: 'Landmark' },
        { title: 'Couples & Desert Seekers', hindi: 'शांति और सौंदर्य के खोजी', description: 'Romantic sunset dunes, quiet stargazing, boutique haveli candlelit dinners, and serene lake walks.', icon: 'Sparkles' },
        { title: 'Photographers & Cultural Explorers', hindi: 'फोटोग्राफी एवं संस्कृति', description: 'Golden hour vantage points, drone-friendly panoramas, vibrant textiles, and folk music portraits.', icon: 'Camera' }
      ]
    },

    faqs: [
      {
        question: 'What is the best time of year to visit Jaisalmer?',
        answer: 'The most pleasant time to visit Jaisalmer is between October and March, when daytime temperatures are mild (20°C to 26°C) and evenings are comfortably cool, making it ideal for fort walks and desert camping.'
      },
      {
        question: 'How many days are recommended for a complete Jaisalmer experience?',
        answer: 'A duration of 3 Days / 2 Nights or 4 Days / 3 Nights is ideal to comfortably explore Sonar Qella fort, Patwon Haveli, Gadisar Lake, and spend an overnight stay at Sam Sand Dunes without rushing.'
      },
      {
        question: 'Can the itinerary be customized for senior citizens or families?',
        answer: 'Yes, absolutely. All our journeys can be customized with slower pacing, ground-floor or elevator-accessible rooms, private chauffeur transport right up to accessible gates, and pure vegetarian / mild sattvik dining.'
      },
      {
        question: 'How is the stay arranged during the desert camp experience?',
        answer: 'We arrange premium Swiss-style luxury glamping tents in the dunes featuring private en-suite tiled bathrooms, comfortable bedding, electric lighting, and traditional cultural dinner evenings.'
      },
      {
        question: 'Do you provide private chauffeur transportation?',
        answer: 'Yes, sanitized private AC vehicles (Sedans, SUVs like Innova Crysta, or Tempo Travellers for groups) with experienced highway chauffeurs are coordinated for all sightseeing and transfers.'
      },
      {
        question: 'How do I check pricing and book a journey with Shri Radha Vallabh?',
        answer: 'Because each journey is tailored to your specific travel dates, group size, and stay preferences, our pricing is shared on request. Simply send an inquiry through our Plan Journey form or connect directly with our coordinator on WhatsApp.'
      }
    ],

    gallery: CLIENT_JAISALMER_PHOTOS.map((p) => ({
      title: p.title,
      location: 'Jaisalmer Heritage Trail',
      category: p.category.toUpperCase(),
      image: p.url
    })),

    relatedJourneys: [
      {
        slug: 'chardham',
        name: 'CHAR DHAM HIMALAYAS',
        hindiName: 'चारधाम यात्रा',
        tagline: 'Yamunotri · Gangotri · Kedarnath · Badrinath',
        image: '/assets/card-chardham.jpg',
        status: 'Upcoming Summer Season'
      },
      {
        slug: 'vrindavan',
        name: 'VRINDAVAN & MATHURA',
        hindiName: 'वृन्दावन धाम',
        tagline: 'Shri Radha Vallabh · Banke Bihari · Yamuna Ghats',
        image: '/assets/card-vrindavan.jpg',
        status: 'Year-Round Pilgrimage'
      },
      {
        slug: 'ayodhya',
        name: 'AYODHYA RAM JANMABHOOMI',
        hindiName: 'अयोध्या धाम',
        tagline: 'Ram Mandir · Saryu Maha Aarti · Kanak Bhavan',
        image: '/assets/card-ayodhya.jpg',
        status: 'Year-Round Pilgrimage'
      },
      {
        slug: 'kashi',
        name: 'KASHI VISHWANATH (VARANASI)',
        hindiName: 'काशी विश्वनाथ',
        tagline: 'Maha Aarti · Ganga Ghats · Sarnath',
        image: '/assets/card-kashi.jpg',
        status: 'Year-Round Pilgrimage'
      }
    ]
  }
};
