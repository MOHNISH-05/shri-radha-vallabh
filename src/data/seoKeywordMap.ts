export interface SeoKeywordTarget {
  path: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  intent: 'local-commercial' | 'commercial' | 'transactional' | 'informational' | 'navigational';
  internalLinkTargets: string[];
}

/**
 * One primary search intent per canonical URL. This map is deliberately finite:
 * it prevents similar pages from drifting toward the same target over time.
 */
export const SEO_KEYWORD_MAP: SeoKeywordTarget[] = [
  { path: '/', primaryKeyword: 'Jaisalmer travel agency', secondaryKeywords: ['Jaisalmer tours', 'custom Jaisalmer trip'], intent: 'local-commercial', internalLinkTargets: ['/jaisalmer', '/packages', '/safari', '/jaisalmer-taxi'] },
  { path: '/jaisalmer', primaryKeyword: 'Jaisalmer tours', secondaryKeywords: ['Jaisalmer tourism', 'Jaisalmer travel guide', 'Jaisalmer trip'], intent: 'commercial', internalLinkTargets: ['/packages', '/jaisalmer/explore', '/safari', '/jaisalmer-taxi'] },
  { path: '/packages', primaryKeyword: 'Jaisalmer tour packages', secondaryKeywords: ['Jaisalmer holiday packages', 'Jaisalmer family tour package', 'Jaisalmer couple package'], intent: 'commercial', internalLinkTargets: ['/packages/jaisalmer-3-nights-4-days', '/safari', '/plan-journey'] },
  { path: '/packages/jaisalmer-3-nights-4-days', primaryKeyword: 'Jaisalmer 3 nights 4 days tour package', secondaryKeywords: ['Jaisalmer package for couple', 'Jaisalmer family package', 'Jaisalmer group package'], intent: 'transactional', internalLinkTargets: ['/packages', '/safari/thar-soul', '/plan-journey'] },
  { path: '/jaisalmer/explore', primaryKeyword: 'places to visit in Jaisalmer', secondaryKeywords: ['Jaisalmer sightseeing', 'Jaisalmer local sightseeing'], intent: 'informational', internalLinkTargets: ['/jaisalmer', '/packages', '/jaisalmer-taxi'] },
  { path: '/safari', primaryKeyword: 'Jaisalmer desert safari packages', secondaryKeywords: ['Jaisalmer camel safari', 'Jaisalmer camping', 'Sam Sand Dunes tour'], intent: 'commercial', internalLinkTargets: ['/safari/thar-soul', '/jaisalmer/places/sam-dunes', '/plan-journey'] },
  { path: '/jaisalmer/safari-adventure', primaryKeyword: 'Jaisalmer desert safari guide', secondaryKeywords: ['camel safari or jeep safari', 'Jaisalmer desert camp guide'], intent: 'informational', internalLinkTargets: ['/safari', '/safari/thar-soul', '/jaisalmer/places/sam-dunes'] },
  { path: '/safari/thar-soul', primaryKeyword: 'Jaisalmer sunset safari', secondaryKeywords: ['one day Jaisalmer desert safari', 'camel safari Jaisalmer'], intent: 'transactional', internalLinkTargets: ['/safari', '/plan-journey'] },
  { path: '/jaisalmer-taxi', primaryKeyword: 'Jaisalmer taxi service', secondaryKeywords: ['Jaisalmer airport taxi', 'Jaisalmer railway station taxi', 'Jaisalmer sightseeing cab'], intent: 'local-commercial', internalLinkTargets: ['/jaisalmer', '/jaisalmer/explore', '/plan-journey'] },
  { path: '/about', primaryKeyword: 'SRV Yaatra Jaisalmer', secondaryKeywords: ['Shriradha Vallabh tours', 'Jaisalmer tour operator'], intent: 'navigational', internalLinkTargets: ['/jaisalmer', '/packages', '/plan-journey'] },
];
