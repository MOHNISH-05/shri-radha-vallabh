import { JAISALMER_PLACES } from './jaisalmerPlaces.ts';
import { MAPS_CONFIG, SITE_CONFIG } from './siteConfig.ts';

export const SEO_ORIGIN = 'https://shri-radha-vallabh.vercel.app';
export const BRAND_NAME = 'Shri Radha Vallabh Heritage & Journeys';

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
  entityType?: 'TouristDestination' | 'TouristAttraction' | 'Person' | 'Thing';
  entityName?: string;
  localPlaceMention?: boolean;
  aboutStoryPeople?: boolean;
  breadcrumbs: SeoBreadcrumb[];
}

const CORE_ROUTE_SEO: Record<string, RouteSeo> = {
  '/': {
    path: '/',
    title: 'Shri Radha Vallabh | Jaisalmer Heritage & Spiritual Journeys',
    description: 'Explore Jaisalmer heritage, sacred places and thoughtfully curated journeys across India with personal planning by Shri Radha Vallabh Heritage & Journeys.',
    image: '/assets/optimized/laxminath-hero.webp',
    imageAlt: 'Shri Laxminath Ji with the golden heritage landscape of Jaisalmer',
    pageType: 'WebPage',
    entityType: 'Thing',
    entityName: BRAND_NAME,
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
    title: 'Jaisalmer Travel Guide & Heritage Journey | Shri Radha Vallabh',
    description: 'Plan a Jaisalmer heritage journey through Sonar Qila, sacred temples, carved havelis, royal history and the landscapes of the Thar Desert.',
    image: '/assets/optimized/laxminath-hero.webp',
    imageAlt: 'Shri Laxminath Ji and Jaisalmer golden sandstone heritage',
    pageType: 'WebPage',
    entityType: 'TouristDestination',
    entityName: 'Jaisalmer',
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
  '/jaisalmer/safari-adventure': {
    path: '/jaisalmer/safari-adventure',
    title: 'Jaisalmer Desert Safari, Camel Safari & Camp Experiences',
    description: 'Explore Jaisalmer camel safari, jeep safari, dune bashing, desert camp, stargazing and Rajasthani cultural evening experiences in the Thar.',
    image: '/images/jaisalmer/safari/hero/jaisalmer-safari-hero.webp',
    imageAlt: 'Camel safari at sunset on the sand dunes near Jaisalmer',
    pageType: 'CollectionPage',
    entityType: 'TouristDestination',
    entityName: 'Jaisalmer Desert Safari & Adventure',
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
    title: 'Jaisalmer & Spiritual Tour Packages | Shri Radha Vallabh',
    description: 'Browse thoughtfully paced Jaisalmer heritage packages and spiritual journeys, with private planning support and direct WhatsApp coordination.',
    image: '/images/jaisalmer/web_DJI_0065.JPG',
    imageAlt: 'Aerial view of Jaisalmer Fort and the Golden City',
    pageType: 'CollectionPage',
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Packages', path: '/packages' }],
  },
  '/packages/jaisalmer-3-nights-4-days': {
    path: '/packages/jaisalmer-3-nights-4-days',
    title: 'Jaisalmer 3 Nights 4 Days Tour Package | Couple, Family & Group',
    description: 'Experience Jaisalmer in 3 Nights and 4 Days with confirmed itineraries across Gorbandh, Jharokha, Morchan, Leheriya and Maharawal tiers for couples, families and groups.',
    image: '/assets/optimized/jaisalmer-fort-1920.webp',
    imageAlt: 'Jaisalmer Fort and the Golden City of Rajasthan',
    pageType: 'WebPage',
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Packages', path: '/packages' }, { name: 'Jaisalmer 3N/4D', path: '/packages/jaisalmer-3-nights-4-days' }],
  },
  '/safari': {
    path: '/safari',
    title: 'Jaisalmer Desert Safari Experiences | Thar Soul & Dune Adventures',
    description: 'Explore curated Jaisalmer desert safaris including Thar Soul sunset safari, traditional camel trails, 4x4 dune drives, desert camps and starlit cultural evenings.',
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
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Safari', path: '/safari' }, { name: 'Thar Soul', path: '/safari/thar-soul' }],
  },
  '/about': {
    path: '/about',
    title: 'About Ashish Vyas & Shri Radha Vallabh Tours | Jaisalmer',
    description: 'Meet founder Ashish Vyas and discover the Jaisalmer family roots, 2013 Kedarnath turning point, 50+ Char Dham yatras and next generation of Shri Radha Vallabh.',
    image: '/images/about/ashish-vyas-1024.webp',
    imageAlt: 'Ashish Vyas, founder and owner of Shriradha Vallabh Tours, at Kedarnath Temple',
    pageType: 'AboutPage',
    localPlaceMention: true,
    aboutStoryPeople: true,
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }],
  },
  '/stories': {
    path: '/stories',
    title: 'Heritage Travel Stories & Reflections | Shri Radha Vallabh',
    description: 'Read cultural, spiritual and heritage travel reflections from journeys through sacred places, royal landscapes and living traditions across India.',
    image: '/assets/temple-twilight.jpg',
    imageAlt: 'Temple architecture illuminated at twilight',
    pageType: 'CollectionPage',
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Stories', path: '/stories' }],
  },
  '/gallery': {
    path: '/gallery',
    title: 'Jaisalmer Heritage Photo Gallery | Shri Radha Vallabh',
    description: 'Explore original photography of Jaisalmer forts, havelis, royal heritage, sacred places and desert landscapes from Shri Radha Vallabh.',
    image: '/assets/optimized/jaisalmer-dune-caravan.webp',
    imageAlt: 'Camel caravan crossing the Thar Desert near Jaisalmer',
    pageType: 'ImageGallery',
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Gallery', path: '/gallery' }],
  },
  '/plan-journey': {
    path: '/plan-journey',
    title: 'Plan a Custom Jaisalmer Heritage Journey | Shri Radha Vallabh',
    description: 'Share your dates, interests and travel preferences to plan a private Jaisalmer heritage journey with direct WhatsApp coordination.',
    image: '/assets/optimized/jaisalmer-night-fort-1280.webp',
    imageAlt: 'Jaisalmer Fort and the Golden City illuminated after sunset',
    pageType: 'ContactPage',
    localPlaceMention: true,
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Plan Journey', path: '/plan-journey' }],
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
  const localPlaceId = `${SEO_ORIGIN}/#shriradha-vallabh-tours-location`;
  const mentions: Array<{ '@id': string }> = [];

  const organization = {
    '@type': 'Organization',
    '@id': `${SEO_ORIGIN}/#organization`,
    name: BRAND_NAME,
    alternateName: 'Shri Radha Vallabh',
    url: `${SEO_ORIGIN}/`,
    logo: {
      '@type': 'ImageObject',
      url: `${SEO_ORIGIN}/assets/optimized/srv-logo-192.webp`,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.phoneNumber,
      contactType: 'travel planning',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: ['https://instagram.com/shri_radhavallabh2008'],
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${SEO_ORIGIN}/#website`,
    url: `${SEO_ORIGIN}/`,
    name: BRAND_NAME,
    publisher: { '@id': `${SEO_ORIGIN}/#organization` },
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

  if (seo.localPlaceMention) {
    const localPlace = {
      '@type': 'Place',
      '@id': localPlaceId,
      name: MAPS_CONFIG.listingName,
      hasMap: MAPS_CONFIG.mapsUrl,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: MAPS_CONFIG.latitude,
        longitude: MAPS_CONFIG.longitude,
      },
      containedInPlace: {
        '@type': 'City',
        name: 'Jaisalmer',
        containedInPlace: { '@type': 'State', name: 'Rajasthan' },
      },
    };

    mentions.push({ '@id': localPlaceId });
    graph.push(localPlace);
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

    webpage.mainEntity = { '@id': entityId };
    graph.push(entity);
  }

  graph.push(webpage);

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
};
