export interface RoyalRuler {
  title: string;
  name: string;
  hindiName: string;
  reignPeriod: string;
  keyContributions: string;
  isCurrent?: boolean;
}

export interface RiyasatData {
  title: string;
  hindiTitle: string;
  dynastyName: string;
  motto: string;
  mottoHindi: string;
  overview: string[];
  lineageChronicle: RoyalRuler[];
  royalHeritageSites: {
    name: string;
    hindiName: string;
    description: string;
    image: string | null;
    significance: string;
  }[];
  royalHouseToday: {
    headOfHouse: string;
    traditionalTitle: string;
    roleDescription: string[];
    constitutionalNote: string;
    philanthropyAndTrusts: string[];
  };
  sources: string[];
}

export const JAISALMER_RIYASAT_DATA: RiyasatData = {
  title: 'The Riyasat of Jaisalmer: Royal House of Bhati',
  hindiTitle: 'जयसलमेर की रियासत एवं भाटी राजवंश',
  dynastyName: 'Bhati Rajput Dynasty (Chandravanshi / Yaduvanshi Lineage)',
  motto: 'Devotion to Shri Laxminath Ji, Defense of the Desert Frontier',
  mottoHindi: 'श्री लक्ष्मीनारायण कृपा एवं मरुभूमि की सुरक्षा',
  overview: [
    'The Princely State of Jaisalmer (Riyasat Jaisalmer) was one of the premier sovereign kingdoms of Rajputana, spanning over 16,000 square miles of the great Thar Desert. Ruled continuously by the Bhati Rajput dynasty for over 800 years, the Maharawals presided over critical overland trade corridors connecting north India with the Arabian Sea and Central Asia.',
    'Under the unique spiritual traditions of Jaisalmer, the supreme ruler was traditionally considered to be Lord Laxminath Ji (Vishnu), while the Maharawals governed as "Diwans" (trustees and guardians) holding sacred responsibility for the welfare of the people.',
    'During the British Raj, Jaisalmer held premier status with a permanent 15-gun salute. In 1949, following Indian independence, the Riyasat integrated peacefully into the democratic Indian Union, while its royal family transitioned into cultural custodians and heritage preservation leaders.'
  ],

  lineageChronicle: [
    {
      title: 'Founder of Jaisalmer',
      name: 'Rawal Jaisal',
      hindiName: 'रावल जैसल',
      reignPeriod: '1156 – 1168 AD',
      keyContributions: 'Established the new fortified capital atop Trikuta Hill in 1156 AD, laying the foundations of Sonar Qila.'
    },
    {
      title: 'Lifeline of Jaisalmer',
      name: 'Maharawal Gadsi Singh',
      hindiName: 'महारावल गड़सी सिंह',
      reignPeriod: '1361 – 1396 AD',
      keyContributions: 'Excavated and constructed Gadisar Lake (1367 AD), establishing the water infrastructure that sustained the desert citadel.'
    },
    {
      title: 'Architect of Peace',
      name: 'Rawal Harraj',
      hindiName: 'रावल हरराज',
      reignPeriod: '1561 – 1577 AD',
      keyContributions: 'Concluded diplomatic alliance at Nagaur with Emperor Akbar, ushering in centuries of architectural prosperity and stone crafting.'
    },
    {
      title: 'Garden Builder',
      name: 'Maharawal Amar Singh',
      hindiName: 'महारावल अमर सिंह',
      reignPeriod: '1661 – 1702 AD',
      keyContributions: 'Created the Amar Sagar oasis and palace complex (1688 AD), known for stepped water architecture and gardens.'
    },
    {
      title: 'Treaty Signatory',
      name: 'Maharawal Mulraj II',
      hindiName: 'महारावल मूलराज द्वितीय',
      reignPeriod: '1762 – 1819 AD',
      keyContributions: 'Concluded the 1818 subsidiary alliance treaty with the British East India Company, preserving internal sovereign autonomy.'
    },
    {
      title: 'Modern Visionary',
      name: 'Maharawal Jawahir Singh',
      hindiName: 'महारावल जवाहर सिंह (केसीएसआई)',
      reignPeriod: '1914 – 1949 AD',
      keyContributions: 'Constructed the Mandir Palace, modernized roads, opened schools, hospitals, and paved the way for peaceful merger into India.'
    },
    {
      title: 'Democratic Custodian',
      name: 'Maharawal Brijraj Singh',
      hindiName: 'महारावल बृजराज सिंह',
      reignPeriod: '1982 – 2020',
      keyContributions: 'Champion of heritage conservation, education, and cultural tourism in Thar until his passing in December 2020.'
    },
    {
      title: 'Current Head of the Royal House',
      name: 'Maharawal Chaitanya Raj Singh',
      hindiName: 'महारावल चैतन्य राज सिंह',
      reignPeriod: '2021 – Present (Titular / Cultural)',
      keyContributions: 'Anointed in January 2021 at Jaisalmer Fort as the 44th head of the Bhati clan; leads regional conservation, culture, and youth initiatives.',
      isCurrent: true
    }
  ],

  royalHeritageSites: [
    {
      name: 'Jaisalmer Fort Palace (Raj Mahal)',
      hindiName: 'राज महल दुर्ग संग्रहालय',
      description: 'The monumental seven-story royal palace overlooking Chauhata Chowk inside Sonar Qila. Houses the royal coronation throne, Gaj Mahal mirror suites, and arms gallery.',
      image: '/assets/optimized/jaisalmer-fort-palace-1920.webp',
      significance: 'Historic seat of governance and residential palace of the Maharawals for over seven centuries.'
    },
    {
      name: 'Mandir Palace (Badal Mahal)',
      hindiName: 'मंदिर पैलेस (बादल महल)',
      description: 'A 200-year-old royal palace complex located outside the fort featuring the ornate "Tazia Tower" (a five-tiered pagoda carved by Muslim silawat artisans) and heritage suites.',
      image: '/images/jaisalmer/Jaisalmer Photos/Mandir Palace (Badal Mahal).jpeg',
      significance: 'The modern royal residence constructed by Maharawal Jawahir Singh, renowned for intricate stone jali screens and the Tazia Tower.'
    },
    {
      name: 'Bada Bagh Royal Memorials',
      hindiName: 'बड़ा बाग राजसी छतरियाँ',
      description: 'Hillside complex of yellow sandstone cenotaphs (chhatris) set beside an ancient water reservoir, commemorating royal ancestors of the Bhati dynasty.',
      image: '/images/jaisalmer/Jaisalmer Photos/bada bagh.jpeg',
      significance: 'Sacred royal memorial ground preserving historic equestrian plaques of the Maharawals and Ranis.'
    }
  ],

  royalHouseToday: {
    headOfHouse: 'Maharawal Chaitanya Raj Singh',
    traditionalTitle: 'Current Head of the Bhati Clan & Cultural Custodian of Jaisalmer',
    roleDescription: [
      'In January 2021, following traditional rites at the historic coronation platform inside Sonar Qila, Chaitanya Raj Singh was formally anointed as the traditional 44th Maharawal of Jaisalmer and head of the Bhati clan.',
      'Educated in India and the UK, Maharawal Chaitanya Raj Singh actively champions local desert heritage conservation, sustainable tourism, traditional handicrafts, environmental protection in the Thar, and youth skill development.',
      'Under his guidance and through the Jaisalmer Trust, the royal family continues to preserve iconic monuments including the Fort Palace Museum, while supporting local folk artists and hereditary craft guilds.'
    ],
    constitutionalNote: 'Under the Constitution of India (Twenty-sixth Amendment Act, 1971), royal titles and privy purses were formally abolished. Today, titles such as "Maharawal" represent historic, cultural, and ceremonial leadership of the clan without sovereign governing or political authority.',
    philanthropyAndTrusts: [
      'Jaisalmer Fort Palace Museum & Heritage Trust',
      'Preservation of traditional Silawat stone carving guilds',
      'Support for Manganiyar and Langa hereditary folk musicians',
      'Desert ecological conservation and water harvesting revival'
    ]
  },

  sources: [
    'Jaisalmer Trust Official Archives',
    'Rajasthan Tourism & Devasthan Department Records',
    'Imperial Gazetteer of India (Jaisalmer State)',
    'UNESCO World Heritage Centre Documentation'
  ]
};
