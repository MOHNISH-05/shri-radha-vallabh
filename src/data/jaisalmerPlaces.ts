export type PlaceCategory =
  | 'HERITAGE'
  | 'HINDU / SPIRITUAL'
  | 'JAIN HERITAGE'
  | 'ROYAL'
  | 'ARCHITECTURE'
  | 'DESERT'
  | 'CULTURE'
  | 'NATURE'
  | 'NEAR JAISALMER';

export type DistanceTag = 'IN JAISALMER' | 'NEAR JAISALMER' | 'DAY TRIP' | 'REGIONAL JOURNEY';

export interface JaisalmerPlace {
  id: string;
  slug: string;
  name: string;
  hindiName: string;
  category: PlaceCategory;
  distanceTag: DistanceTag;
  distanceKm?: number;
  locationLabel: string;
  shortDescription: string;
  fullOverview: string;
  whyVisit: string;
  historicalSignificance: string;
  architectureHighlights: string[];
  bestTimeToVisit: string;
  tags: string[];
  image: string;
  gallery?: string[];
  sourceAttribution: string;
}

export const JAISALMER_PLACES: JaisalmerPlace[] = [
  {
    id: 'jaisalmer-fort',
    slug: 'jaisalmer-fort',
    name: 'Jaisalmer Fort (Sonar Qila)',
    hindiName: 'सोनार किला (स्वर्ण दुर्ग)',
    category: 'HERITAGE',
    distanceTag: 'IN JAISALMER',
    distanceKm: 0,
    locationLabel: 'Trikuta Hill, City Centre',
    shortDescription: 'One of the world’s rare living medieval forts, crowned with 99 bastions where thousands of residents, ancient temples, and havelis thrive inside yellow sandstone walls.',
    fullOverview: 'Founded in 1156 AD by Rawal Jaisal atop the triangular Trikuta Hill, Jaisalmer Fort is recognized globally by UNESCO as a monumental World Heritage Site. Unlike silent museum forts, Sonar Qila is a living urban community containing bustling residential lanes, artisan shops, historic havelis, and ancient sanctuaries.',
    whyVisit: 'Walk through 800+ years of living history, panoramic sunset views over the Thar Desert, and marvel at the interlocking yellow sandstone masonry built without mortar.',
    historicalSignificance: 'Strategic stronghold on the ancient silk and spice trade routes linking India with Persia, Arabia, and Central Asia.',
    architectureHighlights: [
      '99 massive circular sandstone bastions',
      'Four successive fortified entry gates: Suraj Pol, Ganesh Pol, Bhoot Pol, Hawa Pol',
      'Intricate stone jharokhas and carved sandstone jaalis',
      'Gyan Bhandar — subterranean vault of 12th-century Jain palm-leaf manuscripts'
    ],
    bestTimeToVisit: 'Early morning (07:30 AM) for peaceful walks or golden twilight (05:00 PM) for sunset views.',
    tags: ['UNESCO World Heritage', 'Living Fort', '99 Bastions', 'Silk Route'],
    image: '/images/jaisalmer/Jaisalmer Photos/jaisalmer fort.JPG',
    gallery: [
      '/images/jaisalmer/Jaisalmer Photos/jaisalmer fort.JPG',
      '/images/jaisalmer/Jaisalmer Photos/jaisalmer fort2.jpg',
      '/images/jaisalmer/Jaisalmer Photos/jaisalmer fort 3.jpg',
      '/images/jaisalmer/Jaisalmer Photos/jaisalmerr fort4.jpg',
      '/images/jaisalmer/Jaisalmer Photos/jaisalmer fort 5.jpg',
      '/images/jaisalmer/Jaisalmer Photos/Jaisalmer fort -17.jpg'
    ],
    sourceAttribution: 'Rajasthan Tourism · UNESCO World Heritage Registry'
  },
  {
    id: 'bada-bagh',
    slug: 'bada-bagh',
    name: 'Bada Bagh',
    hindiName: 'बड़ा बाग (राजसी छतरियाँ)',
    category: 'ROYAL',
    distanceTag: 'NEAR JAISALMER',
    distanceKm: 6,
    locationLabel: '6 km North of Jaisalmer on Ramgarh Road',
    shortDescription: 'A dramatic hillside complex of carved yellow sandstone chhatris (cenotaphs) built in memory of the Maharawals and royal family members of Jaisalmer.',
    fullOverview: 'Commissioned in the 16th century by Maharawal Jait Singh II and expanded by his successor Rawal Lunkaran, Bada Bagh (literally "Great Garden") features a grand series of intricately carved yellow sandstone cenotaphs set on a desert hillside beside an ancient dam and garden. Each chhatri represents a ruler, carved with equestrian plaques and royal emblems.',
    whyVisit: 'Dramatic sunset photography as the evening light paints the stone chhatris in amber, juxtaposed against modern wind turbines on the desert ridge.',
    historicalSignificance: 'Sacred royal memorial complex commemorating the rulers of the Bhati dynasty from the 16th to the 20th century.',
    architectureHighlights: [
      'Multi-tiered cenotaphs with domed and pyramidal sandstone roofs',
      'Equestrian stone plaques commemorating individual Maharawals and Ranis',
      'Historic stone masonry dam (Jait Bandh) providing seasonal greenery',
      'Panoramic desert views overlooking the horizon and wind energy farms'
    ],
    bestTimeToVisit: 'Golden Hour / Sunset (04:30 PM – 06:30 PM).',
    tags: ['Royal Chhatris', 'Maharawals Memorial', 'Sunset Photography', '16th Century'],
    image: '/images/jaisalmer/Jaisalmer Photos/bada bagh.jpeg',
    gallery: [
      '/images/jaisalmer/Jaisalmer Photos/bada bagh.jpeg',
      '/images/jaisalmer/Jaisalmer Photos/bada bagh2.jpeg'
    ],
    sourceAttribution: 'Jaisalmer Trust · Rajasthan Tourism'
  },
  {
    id: 'gadisar-lake',
    slug: 'gadisar-lake',
    name: 'Gadisar Lake',
    hindiName: 'गड़ीसर सरोवर एवं छतरियाँ',
    category: 'CULTURE',
    distanceTag: 'IN JAISALMER',
    distanceKm: 1.5,
    locationLabel: 'Southern Edge of Jaisalmer City',
    shortDescription: 'A 14th-century historic rainwater reservoir encircled by intricately carved domed cenotaphs, sacred temples, and the magnificent Tillon Ki Pol gateway.',
    fullOverview: 'Excavated in 1367 AD by Maharawal Gadsi Singh, Gadisar Lake was the historic lifeline of Jaisalmer, designed with an ingenious rainwater harvesting system that sustained the desert citadel through centuries of droughts. Entering through the grand Tillon Ki Pol gateway (commissioned by royal courtesan Tilla), visitors are greeted by stone chhatris emerging directly from the water.',
    whyVisit: 'Serene morning walks, feeding sacred catfish, evening boat rides reflecting the golden twilight, and visiting lakeside shrines.',
    historicalSignificance: 'The historic source of drinking water that enabled human civilization to thrive in the arid Thar.',
    architectureHighlights: [
      'Tillon Ki Pol — ornate yellow sandstone gateway spanning the entrance',
      'Numerous carved stone chhatris built inside the lake waters',
      'Historic bathing ghats and surrounding temples dedicated to Lord Shiva and Krishna',
      'Desert Cultural Centre and Folklore Museum situated nearby'
    ],
    bestTimeToVisit: 'Sunrise (06:00 AM) for tranquil reflection or Golden Sunset (05:30 PM) for lake boating.',
    tags: ['14th Century', 'Rainwater Heritage', 'Sunset Chhatris', 'Tillon Ki Pol'],
    image: '/images/jaisalmer/Jaisalmer Photos/gadisar.JPG',
    gallery: [
      '/images/jaisalmer/Jaisalmer Photos/gadisar.JPG',
      '/images/jaisalmer/Jaisalmer Photos/gadisar1.JPG',
      '/images/jaisalmer/Jaisalmer Photos/gadisar2.JPG',
      '/images/jaisalmer/Jaisalmer Photos/gadisar3.JPG',
      '/images/jaisalmer/Jaisalmer Photos/gadisar4.JPG'
    ],
    sourceAttribution: 'Rajasthan Tourism · Jaisalmer Municipal Heritage'
  },
  {
    id: 'laxminath-ji',
    slug: 'laxminath-ji',
    name: 'Shri Laxminath Ji Temple',
    hindiName: 'श्री लक्ष्मीनारायण मंदिर',
    category: 'HINDU / SPIRITUAL',
    distanceTag: 'IN JAISALMER',
    distanceKm: 0,
    locationLabel: 'Inside Jaisalmer Fort (Near Royal Palace)',
    shortDescription: 'The sacred spiritual heart of Jaisalmer, dedicated to Lord Vishnu and Goddess Lakshmi, revered by the royal house and residents for over 500 years.',
    fullOverview: 'Erected in the 15th century by Rao Malkani, the Shri Laxminath Ji Mandir stands as the preeminent Hindu temple within Jaisalmer Fort. Traditional belief regards Lord Laxminath Ji as the true spiritual sovereign of Jaisalmer, with the Maharawals ruling as trustees (Diwans) in divine service.',
    whyVisit: 'Witness authentic daily aarti, ancient silver-plated sanctum doorways, serene prayer atmosphere, and rich devotional paintings in the mandapa.',
    historicalSignificance: 'Consecrated as the spiritual protector of the Bhati Rajput rulers and the town populace.',
    architectureHighlights: [
      'Fine Rajasthani temple shikhara in golden yellow sandstone',
      'Ornate silver-plated sanctum doorway with auspicious carvings',
      'Intricately carved pillar mandapa depicting Vaishnava motifs',
      'Sacred courtyard where major festivals like Janmashtami and Diwali are celebrated'
    ],
    bestTimeToVisit: 'Morning Mangala Aarti (06:30 AM) or Evening Sandhya Aarti (06:30 PM).',
    tags: ['Vaishnava Sanctum', 'Royal Deity', '15th Century', 'Fort Heart'],
    image: '/images/jaisalmer/Jaisalmer Photos/laxmi nath ji 1.jpeg',
    gallery: [
      '/images/jaisalmer/Jaisalmer Photos/laxmi nath ji 1.jpeg'
    ],
    sourceAttribution: 'Rajasthan Tourism · Jaisalmer Trust Archives'
  },
  {
    id: 'jain-temples',
    slug: 'jain-temples',
    name: 'Seven Sacred Jain Temples',
    hindiName: 'दुर्ग के सात प्राचीन जैन मंदिर',
    category: 'JAIN HERITAGE',
    distanceTag: 'IN JAISALMER',
    distanceKm: 0,
    locationLabel: 'Inside Jaisalmer Fort Complex',
    shortDescription: 'A cluster of seven interconnected 12th-to-15th-century yellow sandstone and marble temples renowned for some of the world’s most intricate stone filigree.',
    fullOverview: 'Constructed between the 12th and 15th centuries, these seven sacred Jain temples (dedicated to Tirthankaras including Lord Parshvanath, Rishabhdev, Chandraprabhu, Sambhavnath, and Shitalnath) form an extraordinary architectural sanctuary inside Jaisalmer Fort. The complex houses the famed Gyan Bhandar library with centuries-old palm-leaf manuscripts.',
    whyVisit: 'Unrivaled stone carving intricacy, celestial Torana gateways, domes with dancing apsaras, and deep spiritual peace.',
    historicalSignificance: 'Built by prosperous Jain merchant guilds who financed fort defenses and preserved ancient Jain scriptures.',
    architectureHighlights: [
      'Exquisite Torana archways that seem sculpted like delicate lace',
      'Intricate dome ceilings with concentric carvings of celestial dancers',
      'Subterranean Gyan Bhandar manuscript repository',
      'Interconnecting corridors linking all seven shrines'
    ],
    bestTimeToVisit: 'Morning visiting hours (08:00 AM – 12:00 PM) for temple sanctity.',
    tags: ['Jain Tirth', '12th Century', 'Torana Arches', 'Gyan Bhandar'],
    image: '/images/jaisalmer/Jaisalmer Photos/jain temple 1.jpeg',
    gallery: [
      '/images/jaisalmer/Jaisalmer Photos/jain temple 1.jpeg',
      '/images/jaisalmer/Jaisalmer Photos/jain tepmle 2.jpeg'
    ],
    sourceAttribution: 'Rajasthan Tourism · Archaeological Survey Records'
  },
  {
    id: 'patwon-haveli',
    slug: 'patwon-haveli',
    name: 'Patwon Ki Haveli',
    hindiName: 'पटवों की हवेली (हवेलियों का सिरमौर)',
    category: 'ARCHITECTURE',
    distanceTag: 'IN JAISALMER',
    distanceKm: 0.8,
    locationLabel: 'Near Patwa Complex, Old City',
    shortDescription: 'A grand cluster of five interconnected 19th-century mansions featuring over 60 intricately carved jharokhas and legendary stone filigree.',
    fullOverview: 'Commissioned in 1805 AD by wealthy merchant Guman Chand Patwa for his five sons, this monumental haveli took over 50 years to complete. It represents the pinnacle of Jaisalmer’s merchant haveli architecture, with stone jaali screens carved so finely that daylight filters through like woven silk.',
    whyVisit: 'Marvel at 60+ carved balconies, historic living quarters, antique furniture, and restored wall murals.',
    historicalSignificance: 'Emblematic of the vast wealth accumulated by Marwari merchants trading silk, opium, and silver on Thar trade routes.',
    architectureHighlights: [
      'Five distinct interconnected mansions with separate courtyards',
      'Intricate stone jharokhas with peacock, floral, and geometric motifs',
      'Surviving 19th-century frescoes and gold leaf detailing',
      'Multi-tiered rooftop terrace overlooking Jaisalmer Fort'
    ],
    bestTimeToVisit: 'Morning light (09:00 AM – 11:00 AM) or late afternoon (04:00 PM – 05:30 PM).',
    tags: ['Merchant Haveli', '1805 AD', 'Stone Filigree', '60 Jharokhas'],
    image: '/images/jaisalmer/Jaisalmer Photos/patawa haveli1.jpeg',
    gallery: [
      '/images/jaisalmer/Jaisalmer Photos/patawa haveli1.jpeg',
      '/images/jaisalmer/Jaisalmer Photos/patawa haweli2.png'
    ],
    sourceAttribution: 'Rajasthan Tourism · Jaisalmer Heritage Trust'
  },
  {
    id: 'nathmal-haveli',
    slug: 'nathmal-haveli',
    name: 'Nathmal Ki Haveli',
    hindiName: 'नथमल की हवेली',
    category: 'ARCHITECTURE',
    distanceTag: 'IN JAISALMER',
    distanceKm: 0.6,
    locationLabel: 'Sadhar Bazar, Old City',
    shortDescription: 'A late 19th-century prime minister’s haveli uniquely carved simultaneously by two master architect brothers—Hathi and Lalu—from opposite sides.',
    fullOverview: 'Built in the late 19th century by Prime Minister Mohata Nathmal, this exquisite residence was crafted by two Muslim architect brothers, Hathi and Lalu. One brother carved the left side and the other carved the right side independently; although wonderfully harmonious, the two halves feature subtle, fascinating asymmetrical variations.',
    whyVisit: 'Observe life-sized stone elephants at the entrance and discover early modern elements like steam engines and bicycles carved into 19th-century stone.',
    historicalSignificance: 'Demonstrates the creative genius and friendly architectural rivalry of Jaisalmer’s Silawat master craftsmen.',
    architectureHighlights: [
      'Two life-sized yellow sandstone elephants guarding the main doorway',
      'Intriguing stone carvings of 19th-century modern novelties (steam engines, bicycles)',
      'Subtle architectural asymmetry between left and right halves',
      'Finely carved jharokhas with intricate lattice screens'
    ],
    bestTimeToVisit: 'Daytime (10:00 AM – 04:30 PM).',
    tags: ['Silawat Craftsmen', 'Architect Brothers', 'Asymmetrical Haveli', 'Stone Elephants'],
    image: '/images/jaisalmer/Jaisalmer Photos/nathmal ki haveli.png',
    gallery: [
      '/images/jaisalmer/Jaisalmer Photos/nathmal ki haveli.png'
    ],
    sourceAttribution: 'Rajasthan Tourism Archives'
  },
  {
    id: 'salim-singh-haveli',
    slug: 'salim-singh-haveli',
    name: 'Salim Singh Ki Haveli (Moti Mahal)',
    hindiName: 'सलीम सिंह की हवेली (मोती महल)',
    category: 'ARCHITECTURE',
    distanceTag: 'IN JAISALMER',
    distanceKm: 0.5,
    locationLabel: 'Near Fort Gate, Old City',
    shortDescription: 'A 300-year-old architectural marvel built with a narrow ground base expanding into a grand peacock-shaped upper pavilion with 38 carved balconies.',
    fullOverview: 'Built in the 17th century and renovated in the early 19th century by Prime Minister Salim Singh, this distinctive haveli features an architectural form that expands outwards as it rises, resembling a strutting peacock. Its stone blocks are uniquely held together with iron clamps instead of mortar.',
    whyVisit: 'Distinctive mushroom/peacock architecture, arched roof beams, and ornate blue-gold stone carvings.',
    historicalSignificance: 'Residence of Jaisalmer’s formidable and controversial Prime Minister Salim Singh Mehta.',
    architectureHighlights: [
      'Narrow ground level expanding to an expansive top pavilion (Jahaz Mahal)',
      '38 distinct balconies, each carved with distinct floral and animal motifs',
      'Curved stone brackets holding balconies without external mortar',
      'Elephant stone sentinels guarding the entrance'
    ],
    bestTimeToVisit: 'Morning hours (09:00 AM – 12:00 PM).',
    tags: ['17th Century', 'Peacock Pavilion', 'Iron Clamps', 'Prime Minister Haveli'],
    image: '/images/jaisalmer/Jaisalmer Photos/salim-singh-haveli.jpeg',
    gallery: [
      '/images/jaisalmer/Jaisalmer Photos/salim-singh-haveli.jpeg'
    ],
    sourceAttribution: 'Rajasthan Tourism · Incredible India'
  },
  {
    id: 'vyas-chhatri',
    slug: 'vyas-chhatri',
    name: 'Vyas Chhatri',
    hindiName: 'व्यास छतरी (सूर्यास्त बिंदु)',
    category: 'CULTURE',
    distanceTag: 'IN JAISALMER',
    distanceKm: 1.5,
    locationLabel: 'North-West Ridge, Jaisalmer Town',
    shortDescription: 'An ornate yellow sandstone cenotaph complex dedicated to Sage Ved Vyasa, serving as the traditional cremation ground for Brahmin scholars with panoramic city views.',
    fullOverview: 'Perched on an elevated sandstone hill overlooking Jaisalmer Fort and the town below, Vyas Chhatri is dedicated to Sage Ved Vyasa (author of the Mahabharata). Known for delicate pillar work and intricately domed chhatris, it offers one of the most picturesque sunset viewpoints in Jaisalmer.',
    whyVisit: 'Unobstructed sunset views over the Golden Fort and town skyline through intricately carved stone pillars.',
    historicalSignificance: 'Traditional memorial grounds honoring notable scholars, priests, and poets of the Jaisalmer court.',
    architectureHighlights: [
      'Slender carved pillars supporting domed sandstone canopies',
      'Carved stone jaalis framing the silhouette of Jaisalmer Fort in the distance',
      'High vantage point offering 360-degree desert town panoramas'
    ],
    bestTimeToVisit: 'Sunset (05:00 PM – 06:30 PM).',
    tags: ['Sage Vyasa', 'Sunset Viewpoint', 'Brahmin Cenotaphs', 'Panoramic View'],
    image: '/images/jaisalmer/Jaisalmer Photos/vyas chatri .jpeg',
    gallery: [
      '/images/jaisalmer/Jaisalmer Photos/vyas chatri .jpeg'
    ],
    sourceAttribution: 'Rajasthan Tourism'
  },
  {
    id: 'lodruva',
    slug: 'lodruva',
    name: 'Lodrava (Ancient Capital & Jain Tirth)',
    hindiName: 'लोद्रवा (प्राचीन राजधानी एवं तीर्थ)',
    category: 'JAIN HERITAGE',
    distanceTag: 'NEAR JAISALMER',
    distanceKm: 15,
    locationLabel: '15 km North-West of Jaisalmer',
    shortDescription: 'The 8th-century ancient capital of the Bhati Rajputs before Jaisalmer, home to the magnificent Lodhruva Parshvanath Jain Temple and the sacred Kalpavriksha.',
    fullOverview: 'Before the foundation of Jaisalmer in 1156 AD, Lodruva (Lodrawa) flourished as the prosperous capital of the Bhati kingdom. Though sacked in medieval raids, the surviving Parshvanath Jain Temple stands as an architectural wonder, celebrated for its Torana archway, copper Kalpavriksha (sacred wishing tree), and sacred serpent legend.',
    whyVisit: 'Experience the quiet majesty of Jaisalmer’s pre-1156 heritage, marvel at the stone torana gateway, and experience profound spiritual peace.',
    historicalSignificance: 'The cradle of Bhati Rajput power in Thar before Rawal Jaisal relocated the capital to Trikuta Hill.',
    architectureHighlights: [
      'Grand Torana gateway carved with celestial musicians and floral arabesques',
      'Sculpted copper Kalpavriksha (divine wishing tree) inside the sanctum courtyard',
      'Ancient temple shikhara reconstructed in golden stone with octagonal pillars',
      'Historic sanctum containing the black marble deity of Lord Parshvanath'
    ],
    bestTimeToVisit: 'Morning hours (08:30 AM – 11:30 AM).',
    tags: ['Ancient Capital', 'Pre-1156 AD', 'Torana Arch', 'Kalpavriksha'],
    image: '/images/jaisalmer/Jaisalmer Photos/lodrava.jpg',
    gallery: [
      '/images/jaisalmer/Jaisalmer Photos/lodrava.jpg'
    ],
    sourceAttribution: 'Rajasthan Tourism · Incredible India'
  },
  {
    id: 'amar-sagar',
    slug: 'amar-sagar',
    name: 'Amar Sagar',
    hindiName: 'अमर सागर सरोवर एवं महल',
    category: 'HERITAGE',
    distanceTag: 'NEAR JAISALMER',
    distanceKm: 7,
    locationLabel: '7 km North-West of Jaisalmer',
    shortDescription: 'A historic 17th-century royal oasis featuring a stepped seasonal lake, palace pavilion, an ancient Shiva temple, and an ornate Jain temple with stone animal carvings.',
    fullOverview: 'Constructed in 1688 AD by Maharawal Amar Singh, Amar Sagar is an oasis retreat featuring a stepped seasonal reservoir, royal palace pavilions, and beautiful gardens. Adjacent stands a magnificent 1928 Jain temple carved with elephant, tiger, and peacocks in yellow sandstone, along with an ancient Shiva temple.',
    whyVisit: 'Tranquil heritage gardens, stepped ghat architecture, and unique stone-carved animal figures along the temple walls.',
    historicalSignificance: 'Served as the royal summer retreat and water reservoir for the rulers of Jaisalmer.',
    architectureHighlights: [
      'Multi-tiered stepped ghats leading down to the water reservoir',
      'Ornate palace pavilions with stone jharokhas overlooking the gardens',
      'Jain temple adorned with unique sandstone carvings of desert wildlife and elephants',
      'Ancient Shiva shrine built on the bank of the lake'
    ],
    bestTimeToVisit: 'Afternoon (03:30 PM – 05:30 PM).',
    tags: ['Royal Oasis', '1688 AD', 'Stepped Ghats', 'Amar Singh Palace'],
    image: '/images/jaisalmer/Jaisalmer Photos/amar sager .png',
    gallery: [
      '/images/jaisalmer/Jaisalmer Photos/amar sager .png'
    ],
    sourceAttribution: 'Rajasthan Tourism'
  },
  {
    id: 'tanot-mata',
    slug: 'tanot-mata',
    name: 'Tanot Mata Temple (Border Pilgrimage)',
    hindiName: 'तणोट माता मंदिर (भारत-पाक सीमा तीर्थ)',
    category: 'HINDU / SPIRITUAL',
    distanceTag: 'DAY TRIP',
    distanceKm: 120,
    locationLabel: '120 km North-West of Jaisalmer near Indo-Pak Border',
    shortDescription: 'A miraculous border temple dedicated to Hinglaj Mata incarnation, revered by devotees and the Border Security Force (BSF) for sacred wartime protection.',
    fullOverview: 'Situated 120 km from Jaisalmer near the international border, Tanot Mata Temple is an iconic pilgrimage site. Established in the 9th century by Bhati ruler Bansi Rao, the temple became legendary during the 1965 and 1971 Indo-Pak wars when over 3,000 bombs dropped in the temple vicinity miraculously failed to explode. The temple is reverently maintained by the BSF.',
    whyVisit: 'Experience deep patriotic devotion, visit the on-site war museum with unexploded shells, and scenic desert highway drive towards Longewala War Memorial.',
    historicalSignificance: 'Ancient 9th-century Shakti shrine intertwined with modern Indian military history and divine faith.',
    architectureHighlights: [
      'Traditional white and sandstone temple sanctum adorned with tridents and flags',
      'BSF-managed temple museum displaying preserved wartime unexploded shells',
      'Longewala War Memorial located 38 km onward on the desert border circuit'
    ],
    bestTimeToVisit: 'Full Day Excursion (Early morning departure recommended at 07:00 AM).',
    tags: ['Border Pilgrimage', '1965 War Legend', 'BSF Maintained', 'Day Trip 120km'],
    image: '/images/jaisalmer/Jaisalmer Photos/tanot mata.png',
    gallery: [
      '/images/jaisalmer/Jaisalmer Photos/tanot mata.png'
    ],
    sourceAttribution: 'Rajasthan Tourism · BSF Border Memorial Records'
  },
  {
    id: 'ramdevra',
    slug: 'ramdevra',
    name: 'Ramdevra (Baba Ramdevji Samadhi)',
    hindiName: 'रामदेवरा (बाबा रामदेवजी समाधि तीर्थ)',
    category: 'HINDU / SPIRITUAL',
    distanceTag: 'DAY TRIP',
    distanceKm: 118,
    locationLabel: '118 km East of Jaisalmer on Jodhpur Highway (NH 11)',
    shortDescription: 'The sacred 15th-century resting place of Baba Ramdevji, a revered folk deity and saint who preached universal equality, harmony, and social unity.',
    fullOverview: 'Located near Pokhran, Ramdevra (Runicha) is one of Rajasthan’s largest and most sacred pilgrimage destinations. Baba Ramdevji (1352–1385 AD), a Tanwar Rajput considered an incarnation of Lord Krishna, dedicated his life to uplifting the downtrodden. The sacred shrine enshrines his samadhi where millions of Hindu, Muslim, and Sikh devotees pray together.',
    whyVisit: 'Experience the profound atmosphere of social harmony, offer traditional cloth horses (ghode), and take holy darshan at the sacred samadhi.',
    historicalSignificance: 'A cornerstone of western India’s syncretic devotional bhakti movement for over 600 years.',
    architectureHighlights: [
      'Grand samadhi temple complex built in yellow sandstone by Maharaja Ganga Singh of Bikaner in 1931',
      'Ramsarovar Lake — holy step reservoir adjacent to the shrine for ritual ablutions',
      'Parcha Baori and historic stepwells associated with Baba Ramdevji’s miracles'
    ],
    bestTimeToVisit: 'Open daily; Annual Ramdevra Fair in August/September (Bhadrapada Shukla Dwitiya to Ekadashi).',
    tags: ['Baba Ramdevji', 'Universal Harmony', 'Samadhi Pilgrimage', 'Route NH 11'],
    image: '/images/jaisalmer/Jaisalmer Photos/ramdeva.jpeg',
    gallery: [
      '/images/jaisalmer/Jaisalmer Photos/ramdeva.jpeg'
    ],
    sourceAttribution: 'Incredible India · Rajasthan Tourism Pilgrimage Board'
  },
  {
    id: 'sam-dunes',
    slug: 'sam-dunes',
    name: 'Sam Sand Dunes (Thar Desert)',
    hindiName: 'सैम सैंड ड्यून्स (विशाल बालूका स्तूप)',
    category: 'DESERT',
    distanceTag: 'NEAR JAISALMER',
    distanceKm: 42,
    locationLabel: '42 km West of Jaisalmer near Desert National Park',
    shortDescription: 'Vast sweeping golden sand dunes on the edge of the Thar Desert, renowned for unforgettable sunset camel treks, luxury glamping, and stargazing.',
    fullOverview: 'Located 42 km west of Jaisalmer, the Sam Sand Dunes represent the classic romantic Thar Desert landscape, with shifting dunes rising up to 30–60 meters with no vegetation. Here, the desert horizon glows from brilliant gold to deep violet at sunset, followed by crisp desert nights illuminated by thousands of stars.',
    whyVisit: 'Camel safaris across shifting sand ripples, 4x4 dune bashing, traditional Manganiyar folk music by evening bonfires, and stargazing in dark skies.',
    historicalSignificance: 'Border region of the great Thar desert corridor, preserving indigenous nomad and pastoralist folklore.',
    architectureHighlights: [
      'Sweeping natural sand dunes with shifting wind-sculpted ripples',
      'Luxury Swiss-style tented glamping camps equipped with modern amenities',
      'Open-air cultural amphitheatres for live folk performances'
    ],
    bestTimeToVisit: 'Late Afternoon to Overnight Stay (04:30 PM onwards).',
    tags: ['Sand Dunes', 'Camel Safari', 'Luxury Glamping', 'Dark Sky Stargazing'],
    image: '/images/jaisalmer/Jaisalmer Photos/desertsam1.JPG',
    gallery: [
      '/images/jaisalmer/Jaisalmer Photos/desertsam1.JPG',
      '/images/jaisalmer/Jaisalmer Photos/desertsam2.JPG'
    ],
    sourceAttribution: 'Rajasthan Tourism'
  },
  {
    id: 'khuri-dunes',
    slug: 'khuri-dunes',
    name: 'Khuri Sand Dunes & Village',
    hindiName: 'खूड़ी सैंड ड्यून्स एवं पारम्परिक ग्राम',
    category: 'DESERT',
    distanceTag: 'NEAR JAISALMER',
    distanceKm: 48,
    locationLabel: '48 km South-West of Jaisalmer',
    shortDescription: 'A quieter, more tranquil desert alternative to Sam, famous for pristine sand dunes, traditional mud-and-thatch desert homes, and authentic village culture.',
    fullOverview: 'For travellers seeking an unhurried, peaceful desert encounter away from large crowds, Khuri offers pristine ripples of yellow sand surrounded by traditional mud-thatched homes (jhopas) decorated with traditional mirror-work and straw art.',
    whyVisit: 'Serene sunset walks on untouched dunes, authentic village hospitality, and stargazing in complete desert silence.',
    historicalSignificance: 'Preserves traditional pastoral desert lifestyle and traditional Rajasthani straw-craft architecture.',
    architectureHighlights: [
      'Pristine, less-commercialized sand dunes',
      'Traditional circular mud huts (Jhopas) with handcrafted Mandana paintings',
      'Camel trails winding through desert scrub and dunes'
    ],
    bestTimeToVisit: 'Sunset (04:30 PM – 06:30 PM).',
    tags: ['Quiet Dunes', 'Village Culture', 'Mud Havelis', 'Desert Peace'],
    image: '/images/jaisalmer/Jaisalmer Photos/khuri-dunes.JPG',
    gallery: [
      '/images/jaisalmer/Jaisalmer Photos/khuri-dunes.JPG'
    ],
    sourceAttribution: 'Rajasthan Tourism'
  },
  {
    id: 'desert-national-park',
    slug: 'desert-national-park',
    name: 'Desert National Park',
    hindiName: 'राष्ट्रीय मरुद्यान (वन्यजीव अभयारण्य)',
    category: 'NATURE',
    distanceTag: 'NEAR JAISALMER',
    distanceKm: 40,
    locationLabel: 'Thar Desert Basin (Spanning Jaisalmer & Barmer)',
    shortDescription: 'A 3,162 sq km protected desert ecosystem that is the last primary sanctuary of the critically endangered Great Indian Bustard (Godawan).',
    fullOverview: 'Covering an immense expanse of sand dunes, gravel plains, and rocky hills, Desert National Park is one of India\'s largest national parks. It shelters fragile desert wildlife including the Great Indian Bustard (Rajasthan\'s state bird), Desert Fox, Bengal Fox, Chinkara (Indian Gazelle), and migratory eagles.',
    whyVisit: 'Wildlife safaris, bird watching for rare desert raptors and Godawan, and seeing 180-million-year-old fossil wood remnants at nearby Akal Wood Fossil Park.',
    historicalSignificance: 'Protected natural ecosystem preserving Pleistocene and Jurassic geological heritage of the Thar.',
    architectureHighlights: [
      'Vast natural desert expanses, sand flats, and dry salt beds',
      'Dedicated enclosure zones for Great Indian Bustard conservation',
      'Watchtowers for desert birdwatching and gazelle tracking'
    ],
    bestTimeToVisit: 'Winter mornings (07:00 AM – 11:00 AM).',
    tags: ['Wildlife Sanctuary', 'Great Indian Bustard', 'Chinkara', 'Desert Ecology'],
    image: '/images/jaisalmer/Jaisalmer Photos/desert-national-park..jpeg',
    gallery: [
      '/images/jaisalmer/Jaisalmer Photos/desert-national-park..jpeg'
    ],
    sourceAttribution: 'Wildlife Institute of India · Rajasthan Forest Department'
  },
  {
    id: 'fort-palace',
    slug: 'fort-palace',
    name: 'Fort Palace & Museum (Raj Mahal)',
    hindiName: 'राज महल एवं दुर्ग संग्रहालय',
    category: 'ROYAL',
    distanceTag: 'IN JAISALMER',
    distanceKm: 0,
    locationLabel: 'Inside Jaisalmer Fort (Main Chauhata Chowk)',
    shortDescription: 'The multi-tiered former residence of the Maharawals of Jaisalmer, showcasing royal coronation thrones, armor, silver thrones, and royal archives.',
    fullOverview: 'Rising dramatically above the main Chauhata courtyard inside Sonar Qila, the Fort Palace (Raj Mahal) was the seat of power for the Maharawals of Jaisalmer for centuries. Now maintained by the Jaisalmer Trust as a museum, visitors can explore royal bedrooms, silver coronation thrones, arms galleries, and rooftop miradors.',
    whyVisit: 'Gain an intimate look into royal Bhati lifestyle, see ancient weaponry, and enjoy the highest panoramic viewpoint across the golden citadel.',
    historicalSignificance: 'The historic administrative and residential palace of the Maharawals from 1156 until the early 20th century.',
    architectureHighlights: [
      'Gaj Mahal — royal quarters with mirror-work and painted ceilings',
      'Sarvottam Vilas and Rang Mahal adorned with blue Delft tiles and glass inlays',
      'Marble coronation throne (Gaddi) set in the public courtyard',
      'Rooftop battlements offering the highest vantage point inside the fort'
    ],
    bestTimeToVisit: 'Morning (09:00 AM – 01:00 PM).',
    tags: ['Royal Palace', 'Maharawals Residence', 'Arms Museum', 'Jaisalmer Trust'],
    image: '/images/jaisalmer/Jaisalmer Photos/Jaisalmer fort -17.jpg',
    gallery: [
      '/images/jaisalmer/Jaisalmer Photos/Jaisalmer fort -17.jpg',
      '/images/jaisalmer/Jaisalmer Photos/jaisalmer fort 5.jpg'
    ],
    sourceAttribution: 'Jaisalmer Trust · Rajasthan Tourism'
  },
  {
    id: 'mandir-palace',
    slug: 'mandir-palace',
    name: 'Mandir Palace (Badal Mahal & Tazia Tower)',
    hindiName: 'मंदिर पैलेस (बादल महल एवं ताज़िया टॉवर)',
    category: 'ROYAL',
    distanceTag: 'IN JAISALMER',
    distanceKm: 0.5,
    locationLabel: 'Gandhi Chowk, Jaisalmer City Centre',
    shortDescription: 'A 200-year-old royal residence featuring the iconic five-tiered pagoda-style Tazia Tower, ornate stone balconies, and exquisite sandstone jaali screens.',
    fullOverview: 'Built over two centuries and expanded by Maharawal Jawahir Singh in the early 20th century, Mandir Palace stands as a testament to the supreme artistry of Jaisalmer’s Muslim Silawat craftsmen. Its crowning jewel is the Tazia Tower—a five-story pagoda where each level features a distinct, intricately carved balcony crafted in tribute to the royal family.',
    whyVisit: 'Marvel at the five-story Tazia Tower, admire delicate stone filigree screens, and experience living royal heritage outside the fort ramparts.',
    historicalSignificance: 'The modern seat of the Maharawals of Jaisalmer, embodying the synthesis of Rajput royalty and traditional Silawat masonry.',
    architectureHighlights: [
      'Five-tiered Tazia Tower pagoda with distinct balcony carvings on each floor',
      'Ornate Badal Mahal (Cloud Palace) wall frescoes and carved ceilings',
      'Exquisite yellow sandstone jaali screens and jharokha miradors',
      'Peaceful royal courtyard museum preserving historic artifacts'
    ],
    bestTimeToVisit: 'Morning to Late Afternoon (09:00 AM – 05:00 PM).',
    tags: ['Tazia Tower', 'Royal Residence', 'Badal Mahal', 'Silawat Architecture'],
    image: '/images/jaisalmer/Jaisalmer Photos/Mandir Palace (Badal Mahal).jpeg',
    gallery: [
      '/images/jaisalmer/Jaisalmer Photos/Mandir Palace (Badal Mahal).jpeg'
    ],
    sourceAttribution: 'Rajasthan Tourism · Jaisalmer Heritage Registry'
  }
];
