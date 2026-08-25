export interface RoyalImageCredit {
  rulerName: string;
  localPath: string;
  sourceName: string;
  sourceUrl?: string;
  creator?: string;
  license: string;
  licenseUrl?: string;
  attributionRequired: boolean;
  verificationNotes: string;
}

export const ROYAL_IMAGE_CREDITS: RoyalImageCredit[] = [
  {
    rulerName: 'Rawal Jaisal',
    localPath: '/images/riyasat/kings/rawal-jaisal-800.webp',
    sourceName: 'Wikimedia Commons · photograph of a painting in Jaisalmer Fort Palace Museum',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Rawal_Jaisal_Singh,_the_founder_and_first_ruler_of_the_Kingdom_of_Jaisalmer.jpg',
    creator: 'Archan dave',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    attributionRequired: true,
    verificationNotes: 'Identified by the source as a historical representation of Rawal Jaisal; resized and converted to WebP without altering the artwork.',
  },
  {
    rulerName: 'Maharawal Jawahir Singh',
    localPath: '/images/riyasat/kings/jawahir-singh-800.webp',
    sourceName: 'Wikimedia Commons · 1936 archival portrait',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Jawahir_Singh.jpg',
    creator: 'S. J. Joshi',
    license: 'Public Domain Mark 1.0',
    licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/',
    attributionRequired: false,
    verificationNotes: 'The archival caption identifies Maharawal Jawahir Singh of Jaisalmer; resized and converted to WebP.',
  },
  {
    rulerName: 'Maharawal Girdhar Singh',
    localPath: '/images/riyasat/kings/girdhar-singh-514.webp',
    sourceName: 'Owner-supplied photograph',
    sourceUrl: 'https://icharchive.intach.org/Detail/objects/6695',
    license: 'Owner-supplied for website use',
    attributionRequired: false,
    verificationNotes: 'Identity cross-checked against INTACH record RJPL026; the local owner-supplied file, not the INTACH copy, is published.',
  },
  {
    rulerName: 'Maharawal Raghunath Singh',
    localPath: '/images/riyasat/kings/raghunath-singh-800.webp',
    sourceName: 'Wikimedia Commons · 1933 archival portrait',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Raghunath_Singh.jpg',
    creator: 'S. J. Joshi',
    license: 'Public Domain Mark 1.0',
    licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/',
    attributionRequired: false,
    verificationNotes: 'The archival caption identifies the then Bhanwar Raj, later Maharawal Raghunath Singh of Jaisalmer; resized and converted to WebP.',
  },
  {
    rulerName: 'Maharawal Brijraj Singh',
    localPath: '/images/riyasat/kings/brijraj-singh-533.webp',
    sourceName: 'Owner-supplied photograph',
    license: 'Owner-supplied for website use',
    attributionRequired: false,
    verificationNotes: 'Owner-supplied ceremonial photograph; identity was corroborated against published depictions before use.',
  },
  {
    rulerName: 'Maharawal Chaitanya Raj Singh',
    localPath: '/images/riyasat/kings/chaitanya-raj-singh-800.webp',
    sourceName: 'Owner-supplied photograph',
    license: 'Owner-supplied for website use',
    attributionRequired: false,
    verificationNotes: 'Existing approved Chaitanya Raj Singh photography; resized and converted to WebP without altering the photograph.',
  },
];
