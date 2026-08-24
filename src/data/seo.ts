import { JAISALMER_PLACES } from './jaisalmerPlaces.ts';

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
    title: 'Jaisalmer Riyasat | Bhati Royal Heritage & Maharawals',
    description: 'Discover the royal heritage of Jaisalmer Riyasat, the Bhati dynasty, its Maharawals and the continuing cultural stewardship of the royal house.',
    image: '/images/king chaitanya raj sing/WhatsApp Image 2026-08-22 at 12.23.12.jpeg',
    imageAlt: 'Maharawal Chaitanya Raj Singh during the Raj Tilak ceremony in Jaisalmer Fort',
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
  '/about': {
    path: '/about',
    title: 'About Shri Radha Vallabh Heritage & Journeys',
    description: 'Learn how Shri Radha Vallabh Heritage & Journeys curates unhurried cultural, spiritual and heritage travel with personal coordination.',
    image: '/assets/patwon-haveli.png',
    imageAlt: 'Golden sandstone architecture of Patwon Ki Haveli in Jaisalmer',
    pageType: 'AboutPage',
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
      telephone: '+918209290716',
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
