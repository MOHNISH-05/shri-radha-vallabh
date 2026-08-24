export interface HistoryPeriod {
  id: string;
  era: string;
  yearRange: string;
  title: string;
  hindiTitle: string;
  shortSummary: string;
  fullNarrative: string[];
  keyFigures: string[];
  historicalEvents: string[];
  category: 'FOUNDATION' | 'MEDIEVAL' | 'SIEGES' | 'MUGHAL_ERA' | 'PRINCELY_STATE' | 'MODERN';
  image: string;
  sources: string[];
}

export const JAISALMER_HISTORY_PERIODS: HistoryPeriod[] = [
  {
    id: 'origins-tradition',
    era: 'Pre-1156 AD',
    yearRange: 'Ancient Era – 12th Century',
    title: 'The Bhati Lineage & The Krishna Foundation Tradition',
    hindiTitle: 'भाटी राजवंश, यदुवंश परंपरा एवं श्रीकृष्ण भविष्यवाणी',
    shortSummary: 'According to traditional Rajasthani royal genealogical accounts, the Bhati Rajputs trace their sacred descent to the Chandravanshi Yaduvanshi lineage of Lord Krishna.',
    fullNarrative: [
      'In the traditional genealogies maintained by local bards and royal chronicles, the ruling dynasty of Jaisalmer—the Bhati Rajputs—claims descent from the Yaduvanshi lineage of Lord Krishna. Historical research notes that the Bhatis migrated westward through Punjab and the Thar desert before establishing fortified centers in western Rajasthan.',
      'According to traditional foundation lore recorded in royal annals, Lord Krishna, during his travels through the desert with Arjuna, made a prophecy that a descendant of the Yadu clan would one day establish a glorious kingdom atop the triangular hill named Trikuta.',
      'Prior to the establishment of Jaisalmer, the Bhati clan ruled from several fortified strongholds including Tanot, Derawar, and the prosperous oasis capital of Lodruva (Lodrawa). However, Lodruva’s open desert topography left it vulnerable to repeated medieval incursions, prompting the search for a naturally impregnable fortress site.'
    ],
    keyFigures: ['Lord Krishna (Prophecy Tradition)', 'Raja Gaj', 'Bhati (Dynastic Ancestor)', 'Rawal Devaraj'],
    historicalEvents: [
      'Migration of Yaduvanshi Bhati clans into the Thar basin',
      'Establishment of early capitals at Tanot and Lodruva',
      'Medieval conflicts requiring a more secure hilltop citadel'
    ],
    category: 'FOUNDATION',
    image: '/images/jaisalmer/Jaisalmer Photos/laxmi nath ji 1.jpeg',
    sources: ['Rajasthan Tourism', 'Jaisalmer State Archives', 'Imperial Gazetteer of India']
  },
  {
    id: 'foundation-1156',
    era: '1156 AD',
    yearRange: '1156 – 1250 AD',
    title: 'Foundation of Jaisalmer by Rawal Jaisal',
    hindiTitle: '1156 ई. — रावल जैसल द्वारा स्वर्ण दुर्ग की स्थापना',
    shortSummary: 'In 1156 AD, Rawal Jaisal founded Jaisalmer on the 80-meter high Trikuta Hill, constructing the monumental yellow sandstone fortress named Sonar Qila.',
    fullNarrative: [
      'In 1156 AD, Rawal Jaisal, an ambitious Bhati prince who was bypassed in the Lodruva succession, sought the counsel of the revered hermit Sage Eesaal (Esal), who resided in a cave on the triangular Trikuta Hill.',
      'Sage Eesaal reminded Rawal Jaisal of the ancient divine prophecy concerning a hilltop fortress. Convinced of its defensive and spiritual supremacy, Rawal Jaisal began the construction of a massive double-walled yellow sandstone fortress, named Jaisalmer ("The Hill Fort of Jaisal").',
      'The new fortified settlement rapidly eclipsed Lodruva, drawing merchants, stone carvers, and royal courtiers within its protective bastions.'
    ],
    keyFigures: ['Rawal Jaisal (Founder, r. 1156–1168)', 'Sage Eesaal (Spiritual Guide)', 'Rawal Salbahan II'],
    historicalEvents: [
      '1156 AD: Consecration of Jaisalmer Fort atop Trikuta Hill',
      'Construction of the first concentric stone defense walls and royal courtyards',
      'Shift of the Bhati capital from Lodruva to Jaisalmer'
    ],
    category: 'FOUNDATION',
    image: '/images/jaisalmer/Jaisalmer Photos/jaisalmer fort.JPG',
    sources: ['Rajasthan Tourism', 'Incredible India', 'Jaisalmer Trust']
  },
  {
    id: 'trade-routes-prosperity',
    era: '13th – 14th Century',
    yearRange: '1200 – 1400 AD',
    title: 'Silk Route Hub & Medieval Prosperity',
    hindiTitle: 'रेशम मार्ग का व्यापारिक केंद्र एवं मध्यकालीन वैभव',
    shortSummary: 'Situated directly on the overland caravan route linking Delhi and Gujarat to Persia and Central Asia, Jaisalmer levied transit taxes, generating immense mercantile wealth.',
    fullNarrative: [
      'Situated at a vital geographical crossroads, Jaisalmer grew exceptionally prosperous by providing fortified security, fresh water, and camel provisions to passing trade caravans laden with silk, spices, indigo, dry fruits, and silver.',
      'Prosperous Jain and Marwari merchant communities (such as the Patwas, Mehtas, and Bafnas) flourished within the fort walls. Their immense wealth was channeled into endowing exquisite stone temples, subterranean manuscript libraries (Gyan Bhandars), and the legendary carved havelis that define the city today.'
    ],
    keyFigures: ['Merchant Guilds of Thar', 'Rawal Gadsi Singh (r. 1361–1396)', 'Jain Acharyas & Scholars'],
    historicalEvents: [
      '1367 AD: Excavation and consecration of Gadisar Lake by Maharawal Gadsi Singh',
      'Construction of the sacred Jain temple complex inside Sonar Qila',
      'Establishment of the subterranean Gyan Bhandar manuscript vaults'
    ],
    category: 'MEDIEVAL',
    image: '/images/jaisalmer/Jaisalmer Photos/gadisar.JPG',
    sources: ['Incredible India', 'Archaeological Survey Records']
  },
  {
    id: 'sieges-and-saka',
    era: 'Late 13th – Early 14th Century',
    yearRange: '1294 – 1316 AD',
    title: 'The Great Sieges of Jaisalmer Fort',
    hindiTitle: 'सोनार किले के ऐतिहासिक घेरे एवं जौहर-साका परंपरा',
    shortSummary: 'The strategic wealth of Jaisalmer attracted major medieval military expeditions, leading to prolonged multi-year sieges and legendary acts of Rajput valor and Saka.',
    fullNarrative: [
      'In the late 13th century during the reign of Alauddin Khilji (Sultan of Delhi), Delhi imperial forces laid siege to Jaisalmer following disputes over caravan confiscations. The siege lasted between seven to eight years, during which the Bhati defenders held out heroically inside their sandstone ramparts.',
      'When supplies were entirely exhausted, the garrison performed the historic Saka (soldiers wearing saffron robes charging into the battlefield to the last man) after the royal women performed sacred Jauhar to preserve their dignity.',
      'A second major siege occurred in the 14th century during the reign of Sultan Firuz Shah Tughlaq. Despite devastating sieges, the resilient Bhati rulers consistently reclaimed, restored, and fortified the citadel.'
    ],
    keyFigures: ['Rawal Jait Singh I', 'Kunwar Mulraj', 'Kunwar Ratan Singh', 'Alauddin Khilji'],
    historicalEvents: [
      'Prolonged eight-year medieval siege by Delhi Sultanate armies',
      'Performance of legendary Jauhar and Saka within the fort ramparts',
      'Subsequent reclamation and architectural rebuilding under Maharawal Duda and Maharawal Kehar'
    ],
    category: 'SIEGES',
    image: '/images/jaisalmer/Jaisalmer Photos/jaisalmer fort 3.jpg',
    sources: ['Rajasthan Tourism', 'Imperial Gazetteer of India', 'Tod’s Annals of Rajasthan']
  },
  {
    id: 'mughal-era-renaissance',
    era: '16th – 17th Century',
    yearRange: '1570 – 1700 AD',
    title: 'Mughal Treaty & Architectural Renaissance',
    hindiTitle: 'मुगल काल, शांति संधि एवं स्थापत्य कला का स्वर्णिम युग',
    shortSummary: 'Under Rawal Harraj and Maharawal Amar Singh, peace treaties fostered regional stability, leading to an explosion of fine stone carving, havelis, and royal gardens.',
    fullNarrative: [
      'In 1570 AD, Rawal Harraj entered into a formal political alliance with Mughal Emperor Akbar at Nagaur. This strategic peace ushered in over two centuries of unbroken stability and commercial expansion across the Thar Desert.',
      'During this golden age, Jaisalmer’s Silawat master craftsmen developed the world-renowned "Pattal" and "Jaali" styles of stone filigree. Rulers constructed grand palaces, stepped water systems, and royal cenotaphs.',
      'In 1688 AD, Maharawal Amar Singh built the royal oasis and garden palace at Amar Sagar, while expanding the irrigation infrastructure of the desert kingdom.'
    ],
    keyFigures: ['Rawal Harraj (r. 1561–1577)', 'Maharawal Bhim Singh', 'Maharawal Amar Singh (r. 1661–1702)'],
    historicalEvents: [
      '1570 AD: Treaty of Nagaur ensuring diplomatic autonomy',
      'Construction of the Fort Palace Royal Suites (Gaj Mahal & Sarvottam Vilas)',
      '1688 AD: Foundation of Amar Sagar Lake and Royal Gardens'
    ],
    category: 'MUGHAL_ERA',
    image: '/images/jaisalmer/Jaisalmer Photos/Jaisalmer fort -17.jpg',
    sources: ['Jaisalmer Trust', 'Rajasthan Tourism']
  },
  {
    id: 'princely-state-1818',
    era: '1818 – 1947 AD',
    yearRange: '1818 – 1947 AD',
    title: 'British Treaty & The Princely State of Jaisalmer',
    hindiTitle: '1818 ई. संधि, रियासत काल एवं ब्रिटिश संरक्षण',
    shortSummary: 'In 1818, Maharawal Mulraj II concluded a subsidiary alliance treaty with the British East India Company, preserving internal autonomy as a premier 15-gun salute princely state.',
    fullNarrative: [
      'On 12 December 1818, Maharawal Mulraj II signed a treaty of subsidiary alliance with the British Crown, guaranteeing British military protection while safeguarding the internal sovereignty of the State of Jaisalmer.',
      'The 19th century witnessed the creation of Jaisalmer’s most magnificent merchant mansions: Patwon Ki Haveli (1805), Salim Singh Ki Haveli, and Nathmal Ki Haveli (late 19th century).',
      'Under the visionary leadership of Maharawal Jawahir Singh (r. 1914–1949), modern civic amenities, hospitals, paved roadways, and the Mandir Palace were constructed, bridging ancient heritage with modern governance.'
    ],
    keyFigures: ['Maharawal Mulraj II (r. 1762–1819)', 'Prime Minister Salim Singh', 'Maharawal Jawahir Singh (r. 1914–1949)'],
    historicalEvents: [
      '1818 AD: British-Jaisalmer Treaty of Perpetual Alliance',
      'Construction of Patwon Ki Haveli, Salim Singh Haveli & Nathmal Haveli',
      'Modernization of Jaisalmer under Maharawal Jawahir Singh'
    ],
    category: 'PRINCELY_STATE',
    image: '/images/jaisalmer/Jaisalmer Photos/patawa haveli1.jpeg',
    sources: ['Government of Rajasthan Heritage Archives', 'Imperial Gazetteer']
  },
  {
    id: 'independence-and-today',
    era: '1947 – Present',
    yearRange: '1947 – Today',
    title: 'Accession to India, 1965/71 Wars & Global Heritage Portal',
    hindiTitle: '1947 भारतीय संघ में विलय, सीमा सुरक्षा एवं विश्व धरोहर गौरव',
    shortSummary: 'In 1949, Jaisalmer integrated into the Republic of India. Today, it stands as a celebrated UNESCO World Heritage jewel and a global beacon of living culture.',
    fullNarrative: [
      'Following Indian independence in 1947, Maharawal Jawahir Singh and subsequently Maharawal Girdhar Singh signed the Instrument of Accession, peacefully merging the princely state into the newly formed United State of Rajasthan in 1949.',
      'During the 1965 and 1971 Indo-Pak wars, Jaisalmer played a heroic strategic role, sanctified by the miraculous events at Tanot Mata Temple and the legendary Battle of Longewala (1971).',
      'In 2013, Jaisalmer Fort was officially inscribed on the UNESCO World Heritage list as part of the Hill Forts of Rajasthan. Today, the royal house continues as cultural trustees through the Jaisalmer Trust, fostering heritage conservation and spiritual traditions.'
    ],
    keyFigures: ['Maharawal Girdhar Singh', 'Maharawal Raghunath Singh', 'Maharawal Brijraj Singh', 'Maharawal Chaitanya Raj Singh'],
    historicalEvents: [
      '1949: Formal accession to the Indian Union',
      '1965 & 1971: Desert border defense at Tanot Mata & Longewala',
      '2013: UNESCO World Heritage inscription of Jaisalmer Fort',
      'Present Day: Living heritage and sustainable cultural tourism under Shri Radha Vallabh'
    ],
    category: 'MODERN',
    image: '/images/jaisalmer/Jaisalmer Photos/jaisalmer fort 5.jpg',
    sources: ['UNESCO World Heritage Center', 'Rajasthan Tourism', 'Ministry of Culture, Govt. of India']
  }
];
