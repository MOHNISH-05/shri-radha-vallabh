export interface RoyalPortrait {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
  objectPosition?: string;
}

export interface RoyalTimelineEntry {
  id: string;
  hindiName: string;
  englishName: string;
  historicalTitle: string;
  period: string;
  highlight: string;
  context: string;
  portrait: RoyalPortrait;
  profilePath?: string;
}

const image = (
  name: string,
  smallWidth: number,
  largeWidth: number,
  width: number,
  height: number,
  alt: string,
  objectPosition = 'center',
): RoyalPortrait => ({
  src: `/images/riyasat/kings/${name}-${largeWidth}.webp`,
  srcSet: `/images/riyasat/kings/${name}-${smallWidth}.webp ${smallWidth}w, /images/riyasat/kings/${name}-${largeWidth}.webp ${largeWidth}w`,
  width,
  height,
  alt,
  objectPosition,
});

export const RAWAL_JAISAL: RoyalTimelineEntry = {
  id: 'rawal-jaisal',
  hindiName: 'रावल जैसल',
  englishName: 'Rawal Jaisal',
  historicalTitle: 'Bhati ruler · Founder-associated ruler of Jaisalmer',
  period: '12th century · foundation conventionally dated 1156',
  highlight: 'The Golden City begins on Trikuta Hill',
  context: 'Rawal Jaisal is associated with establishing Jaisalmer’s fortified capital on Trikuta Hill in the mid-12th century. Official and heritage records differ slightly on the exact year, so the foundation is conventionally dated to 1156.',
  portrait: image('rawal-jaisal', 480, 800, 800, 1056, 'Historical representation of Rawal Jaisal of Jaisalmer', 'center top'),
};

export const MODERN_ROYAL_TIMELINE: RoyalTimelineEntry[] = [
  {
    id: 'jawahir-singh',
    hindiName: 'महारावल जवाहर सिंह',
    englishName: 'Maharawal Jawahir Singh',
    historicalTitle: 'Maharawal of Jaisalmer State',
    period: '1914–1949',
    highlight: 'The final decades of the princely-state era',
    context: 'Jawahir Singh’s period belongs to the closing decades of Jaisalmer as a princely state, spanning two world wars, Indian independence, and the transition toward integration with Rajasthan.',
    portrait: image('jawahir-singh', 480, 800, 800, 900, 'Portrait of Maharawal Jawahir Singh of Jaisalmer', 'center top'),
  },
  {
    id: 'girdhar-singh',
    hindiName: 'महारावल गिरधर सिंह',
    englishName: 'Maharawal Girdhar Singh',
    historicalTitle: 'Maharawal of Jaisalmer State',
    period: '1949–1950',
    highlight: 'A brief reign during political transition',
    context: 'Girdhar Singh’s short tenure coincided with Jaisalmer’s integration into Greater Rajasthan. His portrait also preserves a vivid record of Jaisalmer’s distinctive ceremonial dress and turban tradition.',
    portrait: image('girdhar-singh', 360, 514, 514, 768, 'Portrait of Maharawal Girdhar Singh of Jaisalmer', 'center top'),
  },
  {
    id: 'raghunath-singh',
    hindiName: 'महारावल रघुनाथ सिंह',
    englishName: 'Maharawal Raghunath Singh',
    historicalTitle: 'Maharawal; later head of the former royal house',
    period: '1950–1982',
    highlight: 'Continuity after Jaisalmer joined Rajasthan',
    context: 'Raghunath Singh’s period bridged the former princely order and independent India. After constitutional recognition of royal titles ended in 1971, his position continued in a private, familial, and cultural capacity.',
    portrait: image('raghunath-singh', 480, 800, 800, 1114, 'Portrait of Maharawal Raghunath Singh of Jaisalmer', 'center top'),
  },
  {
    id: 'brijraj-singh',
    hindiName: 'महारावल बृजराज सिंह',
    englishName: 'Maharawal Brijraj Singh',
    historicalTitle: 'Head of the former royal house',
    period: '1982–2020',
    highlight: 'A visible custodian of ceremonial and cultural memory',
    context: 'Brijraj Singh remained closely associated with Jaisalmer’s public festivals, palace traditions, and the worship of Lord Laxminath Ji, helping carry the former royal house’s cultural presence into the contemporary city.',
    portrait: image('brijraj-singh', 360, 533, 533, 800, 'Portrait of Maharawal Brijraj Singh of Jaisalmer', 'center top'),
  },
  {
    id: 'chaitanya-raj-singh',
    hindiName: 'महारावल चैतन्य राज सिंह',
    englishName: 'Maharawal Chaitanya Raj Singh',
    historicalTitle: 'Traditional head of the former royal house',
    period: '2020–present',
    highlight: 'Heritage continuity in modern Jaisalmer',
    context: 'Following Brijraj Singh’s death in December 2020, Chaitanya Raj Singh became the traditional head of the former royal house. His January 2021 Raj Tilak was a cultural and ceremonial rite, not the assumption of constitutional authority.',
    portrait: image('chaitanya-raj-singh', 480, 800, 800, 770, 'Portrait of Maharawal Chaitanya Raj Singh of Jaisalmer', 'center'),
    profilePath: '/jaisalmer/riyasat/chaitanya-raj-singh',
  },
];
