import { JAISALMER_PLACES } from './jaisalmerPlaces.ts';
import { MAPS_CONFIG, SITE_CONFIG } from './siteConfig.ts';
import { DESERT_SAFARI_GUIDE_FAQS, JAISALMER_ITINERARY_FAQS, JAISALMER_TAXI_FAQS, JAISALMER_TRAVEL_FAQS, type SeoFaq } from './seoContent.ts';

export const SEO_ORIGIN = 'https://srvyaatra.com';
export const BRAND_NAME = 'SRV Yaatra';

export interface SeoBreadcrumb {
  name: string;
  path: string;
}

export interface RouteSeo {
  path: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  pageType: 'WebPage' | 'CollectionPage' | 'AboutPage' | 'ContactPage' | 'ImageGallery';
  entityType?: 'TouristDestination' | 'TouristAttraction' | 'Person' | 'Thing' | 'Service' | 'TouristTrip';
  entityName?: string;
  faqs?: SeoFaq[];
  localPlaceMention?: boolean;
  aboutStoryPeople?: boolean;
  breadcrumbs: SeoBreadcrumb[];
}

const CORE_ROUTE_SEO: Record<string, RouteSeo> = {
  '/': {
    path: '/',
    title: 'Jaisalmer Travel Agency & Custom Tours | SRV Yaatra',
    description: 'Plan Jaisalmer tours, tour packages, sightseeing, desert experiences and transportation with SRV Yaatra, a local travel team in Jaisalmer.',
    image: '/assets/optimized/laxminath-hero.webp',
    imageAlt: 'Shri Laxminath Ji with the golden heritage landscape of Jaisalmer',
    pageType: 'WebPage',
    breadcrumbs: [{ name: 'Home', path: '/' }],
  },
  '/journeys': {
    path: '/journeys',
    title: 'Heritage & Spiritual Journeys Across India | Shri Radha Vallabh',
    description: 'Explore curated heritage trails and spiritual journeys across Jaisalmer, Char Dham, Vrindavan, Ayodhya, Kashi and other sacred destinations in India.',
    image: '/assets/card-chardham.jpg',
    imageAlt: 'Sacred Himalayan temple journey in the Char Dham region',
    pageType: 'CollectionPage',
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Journeys', path: '/journeys' }],
  },
  '/jaisalmer': {
    path: '/jaisalmer',
    title: 'Jaisalmer Travel Guide & Custom Tours | SRV Yaatra',
    description: 'Plan a Jaisalmer tour through Sonar Qila, havelis, sacred places and the Thar Desert, with practical itineraries, local travel guidance and custom trip planning.',
    image: '/assets/optimized/laxminath-hero.webp',
    imageAlt: 'Shri Laxminath Ji and Jaisalmer golden sandstone heritage',
    pageType: 'WebPage',
    entityType: 'TouristDestination',
    entityName: 'Jaisalmer',
    faqs: JAISALMER_TRAVEL_FAQS,
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Jaisalmer', path: '/jaisalmer' }],
  },
  '/jaisalmer/explore': {
    path: '/jaisalmer/explore',
    title: 'Places to Visit in Jaisalmer | Heritage, Temples & Desert',
    description: 'Explore 18 places to visit in Jaisalmer, including Sonar Qila, Bada Bagh, Gadisar Lake, historic havelis, sacred temples and the Thar Desert.',
    image: '/assets/optimized/jaisalmer-fort-1920.webp',
    imageAlt: 'Jaisalmer Fort rising above the Golden City in Rajasthan',
    pageType: 'CollectionPage',
    entityType: 'TouristDestination',
    entityName: 'Jaisalmer',
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Jaisalmer', path: '/jaisalmer' }, { name: 'Explore', path: '/jaisalmer/explore' }],
  },
  '/jaisalmer/food': {
    path: '/jaisalmer/food',
    title: 'Jaisalmer Food Guide | Famous Local Dishes & What to Eat',
    description: 'Discover what to eat in Jaisalmer, from Ghotua, kachori and dal pakwan to Makhaniya Lassi, jalebi and traditional Rajasthani desert dishes.',
    image: '/assets/optimized/jaisalmer-night-fort-1280.webp',
    imageAlt: 'Jaisalmer Golden City illuminated in the evening',
    pageType: 'WebPage',
    entityType: 'Thing',
    entityName: 'Jaisalmer Food Guide',
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Jaisalmer', path: '/jaisalmer' }, { name: 'Food & Flavours', path: '/jaisalmer/food' }],
  },
  '/jaisalmer/safari-adventure': {
    path: '/jaisalmer/safari-adventure',
    title: 'Jaisalmer Desert Safari Guide | Camel, Jeep & Camp Options',
    description: 'Compare camel safari, jeep safari, dune bashing, desert camp, stargazing and cultural evening options before planning a Jaisalmer desert experience.',
    image: '/images/jaisalmer/safari/hero/jaisalmer-safari-hero.webp',
    imageAlt: 'Camel safari at sunset on the sand dunes near Jaisalmer',
    pageType: 'CollectionPage',
    entityType: 'Thing',
    entityName: 'Jaisalmer Desert Safari & Adventure',
    faqs: DESERT_SAFARI_GUIDE_FAQS,
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Jaisalmer', path: '/jaisalmer' }, { name: 'Safari & Adventure', path: '/jaisalmer/safari-adventure' }],
  },
  '/jaisalmer/history': {
    path: '/jaisalmer/history',
    title: 'History of Jaisalmer | Rawal Jaisal, Bhati Rajputs & Sonar Qila',
    description: 'Follow the history of Jaisalmer from Rawal Jaisal and the Bhati foundations of Sonar Qila through desert trade, princely-state history and living heritage.',
    image: '/assets/optimized/jaisalmer-fort-1920.webp',
    imageAlt: 'Historic Jaisalmer Fort on Trikuta Hill',
    pageType: 'WebPage',
    entityType: 'Thing',
    entityName: 'History of Jaisalmer',
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Jaisalmer', path: '/jaisalmer' }, { name: 'History', path: '/jaisalmer/history' }],
  },
  '/jaisalmer/riyasat': {
    path: '/jaisalmer/riyasat',
    title: 'Jaisalmer Riyasat | Rawal Jaisal & Bhati Royal Timeline',
    description: 'Explore Jaisalmer Riyasat through Rawal Jaisal and a verified royal timeline of Jawahir, Girdhar, Raghunath, Brijraj and Chaitanya Raj Singh.',
    image: '/assets/optimized/jaisalmer-fort-palace-1920.webp',
    imageAlt: 'Jaisalmer Fort Palace, historic seat of the Bhati rulers',
    pageType: 'WebPage',
    entityType: 'Thing',
    entityName: 'Jaisalmer Riyasat',
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Jaisalmer', path: '/jaisalmer' }, { name: 'Riyasat', path: '/jaisalmer/riyasat' }],
  },
  '/jaisalmer/riyasat/chaitanya-raj-singh': {
    path: '/jaisalmer/riyasat/chaitanya-raj-singh',
    title: 'Maharawal Chaitanya Raj Singh | Royal House of Jaisalmer',
    description: 'A photographic heritage profile of Maharawal Chaitanya Raj Singh and the present cultural role of the Royal House of Jaisalmer.',
    image: '/images/king chaitanya raj sing/WhatsApp Image 2026-08-22 at 12.23.12.jpeg',
    imageAlt: 'Maharawal Chaitanya Raj Singh at the Raj Tilak ceremony in Jaisalmer',
    pageType: 'WebPage',
    entityType: 'Person',
    entityName: 'Maharawal Chaitanya Raj Singh',
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Jaisalmer', path: '/jaisalmer' }, { name: 'Riyasat', path: '/jaisalmer/riyasat' }, { name: 'Chaitanya Raj Singh', path: '/jaisalmer/riyasat/chaitanya-raj-singh' }],
  },
  '/packages': {
    path: '/packages',
    title: 'Jaisalmer Tour Packages for Couples & Families | SRV Yaatra',
    description: 'Compare Jaisalmer tour packages for couples, families and groups, with heritage sightseeing, desert stays, transport options and customized planning.',
    image: '/images/jaisalmer/web_DJI_0065.JPG',
    imageAlt: 'Aerial view of Jaisalmer Fort and the Golden City',
    pageType: 'CollectionPage',
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Packages', path: '/packages' }],
  },
  '/packages/jaisalmer-3-nights-4-days': {
    path: '/packages/jaisalmer-3-nights-4-days',
    title: 'Jaisalmer 3 Nights 4 Days Tour Package | SRV Yaatra',
    description: 'Explore a customizable Jaisalmer 3 nights 4 days tour package with fort and haveli sightseeing, desert stay options and tiers for couples, families and groups.',
    image: '/assets/optimized/jaisalmer-fort-1920.webp',
    imageAlt: 'Jaisalmer Fort and the Golden City of Rajasthan',
    pageType: 'WebPage',
    entityType: 'TouristTrip',
    entityName: 'Jaisalmer 3 Nights 4 Days Tour Package',
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Packages', path: '/packages' }, { name: 'Jaisalmer 3N/4D', path: '/packages/jaisalmer-3-nights-4-days' }],
  },
  '/safari': {
    path: '/safari',
    title: 'Jaisalmer Desert Safari Packages & Camp Options | SRV Yaatra',
    description: 'Plan a Jaisalmer desert safari with camel trails, jeep outings, sunset, camp and cultural evening options. Request current availability and a custom quote.',
    image: '/images/jaisalmer/safari/hero/jaisalmer-safari-hero.webp',
    imageAlt: 'Desert camel safari silhouettes on the golden sand dunes of Jaisalmer',
    pageType: 'CollectionPage',
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Safari', path: '/safari' }],
  },
  '/safari/thar-soul': {
    path: '/safari/thar-soul',
    title: 'Thar Soul Sunset Safari Jaisalmer | 1 Day Desert Village & Camel Trail',
    description: 'Experience Thar Soul 1-day sunset safari in Jaisalmer from 2:30 PM to 9:30 PM with desert village visits, traditional chai and snacks, camel trek and dune sunset.',
    image: '/images/jaisalmer/safari/camel-safari/camel-safari-jaisalmer.webp',
    imageAlt: 'Thar Soul sunset camel safari across the golden dunes of Jaisalmer',
    pageType: 'WebPage',
    entityType: 'TouristTrip',
    entityName: 'Thar Soul Sunset Safari',
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Safari', path: '/safari' }, { name: 'Thar Soul', path: '/safari/thar-soul' }],
  },
  '/about': {
    path: '/about',
    title: 'About SRV Yaatra & Ashish Vyas | Jaisalmer Travel Team',
    description: 'Meet founder Ashish Vyas and discover the Jaisalmer family roots, pilgrimage experience and next generation behind SRV Yaatra and Shriradha Vallabh tours.',
    image: '/images/about/ashish-vyas-1024.webp',
    imageAlt: 'Ashish Vyas, founder and owner of Shriradha Vallabh Tours, at Kedarnath Temple',
    pageType: 'AboutPage',
    localPlaceMention: true,
    aboutStoryPeople: true,
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }],
  },
  '/stories': {
    path: '/stories',
    title: 'Heritage Travel Stories & Journey Reflections | SRV Yaatra',
    description: 'Read cultural, spiritual and heritage travel reflections from Jaisalmer and journeys through sacred places, royal landscapes and living traditions across India.',
    image: '/assets/temple-twilight.jpg',
    imageAlt: 'Temple architecture illuminated at twilight',
    pageType: 'CollectionPage',
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Stories', path: '/stories' }],
  },
  '/gallery': {
    path: '/gallery',
    title: 'Jaisalmer Heritage & Desert Photo Gallery | SRV Yaatra',
    description: 'Explore original photography of Jaisalmer forts, havelis, royal heritage, sacred places and desert landscapes from Shri Radha Vallabh.',
    image: '/assets/optimized/jaisalmer-dune-caravan.webp',
    imageAlt: 'Camel caravan crossing the Thar Desert near Jaisalmer',
    pageType: 'ImageGallery',
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Gallery', path: '/gallery' }],
  },
  '/plan-journey': {
    path: '/plan-journey',
    title: 'Plan a Custom Jaisalmer Trip | Contact SRV Yaatra',
    description: 'Share your dates, group size and interests to plan a customized Jaisalmer trip with sightseeing, desert, stay and transportation options.',
    image: '/assets/optimized/jaisalmer-night-fort-1280.webp',
    imageAlt: 'Jaisalmer Fort and the Golden City illuminated after sunset',
    pageType: 'ContactPage',
    localPlaceMention: true,
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Plan Journey', path: '/plan-journey' }],
  },
  '/jaisalmer/itinerary': {
    path: '/jaisalmer/itinerary',
    title: 'Jaisalmer Itinerary for 2, 3 & 4 Days | SRV Yaatra',
    description: 'Plan a comfortable 2, 3 or 4 day Jaisalmer itinerary with fort walks, havelis, Gadisar Lake, desert time and practical travel planning.',
    image: '/assets/optimized/jaisalmer-fort-1920.webp',
    imageAlt: 'Jaisalmer Fort above the Golden City',
    pageType: 'WebPage',
    entityType: 'Thing',
    entityName: 'Jaisalmer Itinerary',
    faqs: JAISALMER_ITINERARY_FAQS,
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Jaisalmer', path: '/jaisalmer' }, { name: 'Itinerary', path: '/jaisalmer/itinerary' }],
  },
  '/jaisalmer-taxi': {
    path: '/jaisalmer-taxi',
    title: 'Jaisalmer Taxi Service, Airport Pickup & Sightseeing Cab',
    description: 'Arrange Jaisalmer airport or railway pickup, local sightseeing transport, Sam or Khuri desert transfers and customized road journeys with SRV Yaatra.',
    image: '/assets/optimized/jaisalmer-taxi-hero-1280.webp',
    imageAlt: 'Aerial view of Jaisalmer Fort and the Golden City',
    pageType: 'WebPage',
    entityType: 'Service',
    entityName: 'Jaisalmer Taxi and Transportation Service',
    faqs: JAISALMER_TAXI_FAQS,
    localPlaceMention: true,
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Jaisalmer Taxi & Transportation', path: '/jaisalmer-taxi' }],
  },
};

const PLACE_TITLES: Record<string, string> = {
  'jaisalmer-fort': 'Jaisalmer Fort (Sonar Qila) | History & Visitor Guide',
  'bada-bagh': 'Bada Bagh Jaisalmer | Royal Cenotaphs & Visitor Guide',
  'gadisar-lake': 'Gadisar Lake Jaisalmer | History & Visitor Guide',
  'laxminath-ji': 'Shri Laxminath Ji Temple, Jaisalmer | Heritage Guide',
  'jain-temples': 'Jain Temples in Jaisalmer Fort | Heritage Guide',
  'patwon-haveli': 'Patwon Ki Haveli Jaisalmer | Architecture & Visitor Guide',
  'nathmal-haveli': 'Nathmal Ki Haveli Jaisalmer | Architecture & Visitor Guide',
  'salim-singh-haveli': 'Salim Singh Ki Haveli Jaisalmer | Visitor Guide',
  'vyas-chhatri': 'Vyas Chhatri Jaisalmer | Cenotaphs & Sunset Guide',
  'lodruva': 'Lodrava Jain Temple & Ancient Capital | Jaisalmer Guide',
  'amar-sagar': 'Amar Sagar Jaisalmer | Lake, Palace & Temple Guide',
  'tanot-mata': 'Tanot Mata Temple Jaisalmer | Pilgrimage Guide',
  'ramdevra': 'Ramdevra Temple | Baba Ramdevji Pilgrimage Guide',
  'sam-dunes': 'Sam Sand Dunes Jaisalmer | Desert Visitor Guide',
  'khuri-dunes': 'Khuri Sand Dunes & Village | Jaisalmer Desert Guide',
  'desert-national-park': 'Desert National Park Jaisalmer | Wildlife Guide',
  'fort-palace': 'Jaisalmer Fort Palace & Museum | Royal Heritage Guide',
  'mandir-palace': 'Mandir Palace Jaisalmer | Tazia Tower Heritage Guide',
};

const normalizePath = (pathname: string) => {
  const path = pathname.split('?')[0].replace(/\/+$/, '') || '/';
  return path === '/experience' ? '/stories' : path;
};

export const absoluteSeoUrl = (path: string) => new URL(path, `${SEO_ORIGIN}/`).href;

export const getSeoForPath = (pathname: string): RouteSeo | null => {
  const path = normalizePath(pathname);
  const core = CORE_ROUTE_SEO[path];
  if (core) return core;

  if (!path.startsWith('/jaisalmer/places/')) return null;
  const slug = path.slice('/jaisalmer/places/'.length);
  const place = JAISALMER_PLACES.find((item) => item.slug === slug);
  if (!place) return null;

  return {
    path,
    title: PLACE_TITLES[slug] || `${place.name} Jaisalmer | Heritage & Visitor Guide`,
    description: place.shortDescription,
    image: place.image || '/assets/optimized/jaisalmer-fort-1920.webp',
    imageAlt: `${place.name} in Jaisalmer, Rajasthan`,
    pageType: 'WebPage',
    entityType: 'TouristAttraction',
    entityName: place.name,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Jaisalmer', path: '/jaisalmer' },
      { name: 'Explore', path: '/jaisalmer/explore' },
      { name: place.name, path },
    ],
  };
};

export const PUBLIC_SEO_ROUTES = [
  ...Object.keys(CORE_ROUTE_SEO),
  ...JAISALMER_PLACES.map((place) => `/jaisalmer/places/${place.slug}`),
];

export const buildStructuredData = (seo: RouteSeo) => {
  const url = absoluteSeoUrl(seo.path);
  const imageUrl = absoluteSeoUrl(seo.image);
  const webpageId = `${url}#webpage`;
  const imageId = `${url}#primaryimage`;
  const breadcrumbId = `${url}#breadcrumb`;
  const entityId = `${url}#entity`;
  const organizationId = `${SEO_ORIGIN}/#organization`;
  const mentions: Array<{ '@id': string }> = [];

  const organization = {
    '@type': 'TravelAgency',
    '@id': organizationId,
    name: MAPS_CONFIG.listingName,
    alternateName: [BRAND_NAME, 'Shri Radha Vallabh Tours'],
    url: `${SEO_ORIGIN}/`,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phoneNumber,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Vyasa Para, On Fort',
      addressLocality: 'Jaisalmer',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: MAPS_CONFIG.latitude,
      longitude: MAPS_CONFIG.longitude,
    },
    areaServed: [
      { '@type': 'City', name: 'Jaisalmer' },
      { '@type': 'State', name: 'Rajasthan' },
    ],
    hasMap: MAPS_CONFIG.mapsUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${SEO_ORIGIN}/assets/brand/srv-logo-512.png`,
      contentUrl: `${SEO_ORIGIN}/assets/brand/srv-logo-512.png`,
      width: 512,
      height: 512,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.phoneNumber,
      contactType: 'travel planning',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [SITE_CONFIG.instagramUrl, MAPS_CONFIG.mapsUrl],
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${SEO_ORIGIN}/#website`,
    url: `${SEO_ORIGIN}/`,
    name: BRAND_NAME,
    publisher: { '@id': organizationId },
    inLanguage: 'en-IN',
  };

  const image = {
    '@type': 'ImageObject',
    '@id': imageId,
    url: imageUrl,
    contentUrl: imageUrl,
    caption: seo.imageAlt,
  };

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@id': breadcrumbId,
    itemListElement: seo.breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteSeoUrl(item.path),
    })),
  };

  const webpage: Record<string, unknown> = {
    '@type': seo.pageType,
    '@id': webpageId,
    url,
    name: seo.title,
    description: seo.description,
    isPartOf: { '@id': `${SEO_ORIGIN}/#website` },
    primaryImageOfPage: { '@id': imageId },
    breadcrumb: { '@id': breadcrumbId },
    inLanguage: 'en-IN',
  };

  const graph: Array<Record<string, unknown>> = [organization, website, image, breadcrumb];

  if (seo.path === '/') webpage.about = { '@id': organizationId };

  if (seo.localPlaceMention) {
    mentions.push({ '@id': organizationId });
  }

  if (seo.aboutStoryPeople) {
    const ashishId = `${SEO_ORIGIN}/about#ashish-vyas`;
    const yuvrajId = `${SEO_ORIGIN}/about#yuvraj-jeet-vyas`;
    const ashish = {
      '@type': 'Person',
      '@id': ashishId,
      name: 'Ashish Vyas',
      description: 'Founder and owner of Shriradha Vallabh Tours in Jaisalmer, established in 2007, with more than 20 years of pilgrimage and travel experience.',
      image: absoluteSeoUrl('/images/about/ashish-vyas-1024.webp'),
      homeLocation: { '@type': 'City', name: 'Jaisalmer' },
    };
    const yuvraj = {
      '@type': 'Person',
      '@id': yuvrajId,
      name: 'Yuvraj Ashish Vyas',
      alternateName: 'Jeet Vyas',
      description: 'The next generation of the family, supporting the digital presence and online communication of Shri Radha Vallabh.',
      image: absoluteSeoUrl('/images/about/yuvraj-jeet-vyas-960.webp'),
      homeLocation: { '@type': 'City', name: 'Jaisalmer' },
    };

    webpage.about = { '@id': ashishId };
    mentions.push({ '@id': yuvrajId });
    graph.push(ashish, yuvraj);
  }

  if (mentions.length > 0) webpage.mentions = mentions;

  if (seo.entityType && seo.entityName) {
    const entity: Record<string, unknown> = {
      '@type': seo.entityType,
      '@id': entityId,
      name: seo.entityName,
      description: seo.description,
      url,
      image: { '@id': imageId },
    };

    if (seo.entityType === 'TouristDestination') {
      entity.containedInPlace = {
        '@type': 'State',
        name: 'Rajasthan',
        containedInPlace: { '@type': 'Country', name: 'India' },
      };
    }

    if (seo.entityType === 'TouristAttraction') {
      entity.containedInPlace = {
        '@type': 'City',
        name: 'Jaisalmer',
        containedInPlace: { '@type': 'State', name: 'Rajasthan' },
      };
      entity.isPartOf = { '@id': `${SEO_ORIGIN}/jaisalmer#entity` };
    }

    if (seo.entityType === 'Person') {
      entity.description = 'Maharawal Chaitanya Raj Singh and the contemporary cultural stewardship of the Royal House of Jaisalmer.';
    }

    if (seo.entityType === 'Service') {
      entity.provider = { '@id': organizationId };
      entity.areaServed = { '@type': 'City', name: 'Jaisalmer' };
      entity.serviceType = 'Taxi, transfer and sightseeing transportation coordination';
    }

    if (seo.entityType === 'TouristTrip') {
      entity.provider = { '@id': organizationId };
      entity.touristType = ['Couples', 'Families', 'Private groups'];
    }

    webpage.mainEntity = { '@id': entityId };
    graph.push(entity);
  }

  if (seo.faqs?.length) {
    const faqId = `${url}#faq`;
    webpage.hasPart = { '@id': faqId };
    graph.push({
      '@type': 'FAQPage',
      '@id': faqId,
      url: `${url}#faqs`,
      isPartOf: { '@id': webpageId },
      mainEntity: seo.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  graph.push(webpage);

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
};
