export type JaisalmerExperienceCategory = 'SAFARI' | 'ADVENTURE' | 'DESERT_STAY' | 'CULTURE';

export interface JaisalmerExperience {
  id: string;
  slug: string;
  name: string;
  hindiName: string;
  category: JaisalmerExperienceCategory;
  shortDescription: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  locations?: string[];
  availabilityText?: string;
  cta: string;
}

export const JAISALMER_EXPERIENCES: JaisalmerExperience[] = [
  {
    id: 'camel-safari',
    slug: 'camel-safari',
    name: 'Camel Safari',
    hindiName: 'ऊँट सफारी',
    category: 'SAFARI',
    shortDescription: 'A traditional desert trail across Jaisalmer’s dunes, thoughtfully arranged around golden hour and sunset with local camel handlers.',
    image: '/images/jaisalmer/safari/camel-safari/camel-safari-jaisalmer.webp',
    imageAlt: 'Travellers riding camels across the sand near Jaisalmer',
    imageWidth: 1920,
    imageHeight: 864,
    locations: ['Sam Sand Dunes', 'Khuri'],
    availabilityText: 'Private and group arrangements',
    cta: 'PLAN CAMEL SAFARI',
  },
  {
    id: 'jeep-safari',
    slug: 'jeep-safari',
    name: 'Jeep Desert Safari',
    hindiName: 'जीप डेजर्ट सफारी',
    category: 'SAFARI',
    shortDescription: 'Explore desert tracks and open Thar landscapes in a locally coordinated 4×4 with an experienced driver.',
    image: '/images/jaisalmer/safari/jeep-safari/jeep-safari-jaisalmer.webp',
    imageAlt: 'Jeep desert safari on a sandy trail near Jaisalmer',
    imageWidth: 1920,
    imageHeight: 1280,
    locations: ['Jaisalmer Desert', 'Sam region'],
    availabilityText: 'Subject to local conditions',
    cta: 'PLAN JEEP SAFARI',
  },
  {
    id: 'dune-bashing',
    slug: 'dune-bashing',
    name: 'Dune Bashing',
    hindiName: 'रेत के टीलों का रोमांच',
    category: 'ADVENTURE',
    shortDescription: 'An optional 4×4 dune experience for travellers seeking a more active desert outing.',
    image: '/images/jaisalmer/safari/dune-bashing/jaisalmer-dunes-jeeps.webp',
    imageAlt: 'Four-wheel-drive vehicles among the sand dunes near Jaisalmer',
    imageWidth: 1920,
    imageHeight: 1080,
    locations: ['Jaisalmer dunes'],
    availabilityText: 'Suitability depends on traveller preference and conditions',
    cta: 'ADD TO MY JOURNEY',
  },
  {
    id: 'desert-camp',
    slug: 'desert-camp',
    name: 'Desert Camp Experience',
    hindiName: 'रेगिस्तान में रात्रि प्रवास',
    category: 'DESERT_STAY',
    shortDescription: 'A considered desert stay combining tented hospitality, sunset, dinner, a cultural evening and the quiet of the night sky.',
    image: '/images/jaisalmer/safari/desert-camp/jaisalmer-desert-camp.webp',
    imageAlt: 'Desert camp tents set in the landscape near Jaisalmer',
    imageWidth: 1920,
    imageHeight: 1278,
    locations: ['Sam region'],
    availabilityText: 'Available with selected or customized journeys',
    cta: 'EXPLORE DESERT CAMP',
  },
  {
    id: 'stargazing',
    slug: 'stargazing',
    name: 'Stargazing in the Thar',
    hindiName: 'थार के तारों भरे आकाश के नीचे',
    category: 'DESERT_STAY',
    shortDescription: 'Slow down beneath an open desert sky, away from city lighting where local conditions allow, for a peaceful night experience.',
    image: '/images/jaisalmer/safari/stargazing/jaisalmer-stargazing.webp',
    imageAlt: 'Star-filled night sky over the Jaisalmer desert',
    imageWidth: 1920,
    imageHeight: 1280,
    locations: ['Thar Desert near Jaisalmer'],
    availabilityText: 'Visibility depends on weather and moonlight',
    cta: 'PLAN A DESERT NIGHT',
  },
  {
    id: 'cultural-evening',
    slug: 'cultural-evening',
    name: 'Rajasthani Cultural Evening',
    hindiName: 'राजस्थानी लोक संस्कृति की शाम',
    category: 'CULTURE',
    shortDescription: 'An evening of regional folk music, traditional dance, desert hospitality and dinner presented with respect for living traditions.',
    image: '/images/jaisalmer/safari/cultural-evening/jaisalmer-folk-music.webp',
    imageAlt: 'Rajasthani folk performer at a cultural evening in Jaisalmer',
    imageWidth: 1920,
    imageHeight: 1280,
    locations: ['Jaisalmer desert camps'],
    availabilityText: 'Programme varies by camp and itinerary',
    cta: 'ADD CULTURAL EVENING',
  },
];

export const SAFARI_IMAGE_CREDITS = [
  { image: 'Camel Safari', experience: 'Camel Safari', source: 'Wikimedia Commons', creator: 'Pinakpani', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/', attributionRequired: true, sourceUrl: 'https://commons.wikimedia.org/wiki/File:Camel_rides_in_Jaisalmer,_Thar_Desert_03.jpg', localPath: '/images/jaisalmer/safari/camel-safari/camel-safari-jaisalmer.webp', visualAccuracy: 'Real camel riders in the Jaisalmer desert.' },
  { image: 'Jeep Desert Safari', experience: 'Jeep Desert Safari', source: 'Pexels', creator: 'Harsh Kukadiya', license: 'Pexels License', licenseUrl: 'https://www.pexels.com/license/', attributionRequired: false, sourceUrl: 'https://www.pexels.com/photo/vintage-jeep-on-dusty-desert-road-in-jaisalmer-37415417/', localPath: '/images/jaisalmer/safari/jeep-safari/jeep-safari-jaisalmer.webp', visualAccuracy: 'Real jeep on a dusty desert trail near Jaisalmer.' },
  { image: 'Dune Bashing', experience: 'Dune Bashing', source: 'Shri Radha Vallabh project archive', creator: 'Client-provided', license: 'Project-owned/provided', licenseUrl: '', attributionRequired: false, sourceUrl: '', localPath: '/images/jaisalmer/safari/dune-bashing/jaisalmer-dunes-jeeps.webp', visualAccuracy: 'Representative elevated desert view with 4x4 vehicles visible among dunes; not presented as a close-action photograph.' },
  { image: 'Desert Camp', experience: 'Desert Camp Experience', source: 'Pexels', creator: 'Prince Desert Camp', license: 'Pexels License', licenseUrl: 'https://www.pexels.com/license/', attributionRequired: false, sourceUrl: 'https://www.pexels.com/photo/tents-in-a-desert-9497618/', localPath: '/images/jaisalmer/safari/desert-camp/jaisalmer-desert-camp.webp', visualAccuracy: 'Real tented desert camp landscape; no ownership claim is made.' },
  { image: 'Stargazing', experience: 'Stargazing in the Thar', source: 'Pexels', creator: 'Aarin Husain', license: 'Pexels License', licenseUrl: 'https://www.pexels.com/license/', attributionRequired: false, sourceUrl: 'https://www.pexels.com/photo/starry-night-in-jaisalmer-s-desert-sky-31021507/', localPath: '/images/jaisalmer/safari/stargazing/jaisalmer-stargazing.webp', visualAccuracy: 'Night-sky astrophotography identified by its source as Jaisalmer desert.' },
  { image: 'Cultural Evening', experience: 'Rajasthani Cultural Evening', source: 'Wikimedia Commons', creator: 'Tejas Mairal', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', attributionRequired: true, sourceUrl: 'https://commons.wikimedia.org/wiki/File:Jaisalmer_Rajasthani_Folk_dance_song_band_s.jpg', localPath: '/images/jaisalmer/safari/cultural-evening/jaisalmer-folk-music.webp', visualAccuracy: 'Real Rajasthani folk performer in Jaisalmer.' },
  { image: 'Safari Hero', experience: 'Safari landing hero and closing CTA', source: 'Shri Radha Vallabh project archive', creator: 'Client-provided', license: 'Project-owned/provided', licenseUrl: '', attributionRequired: false, sourceUrl: '', localPath: '/images/jaisalmer/safari/hero/jaisalmer-safari-hero.webp', visualAccuracy: 'Camel and travellers silhouetted at desert sunset.' },
] as const;
