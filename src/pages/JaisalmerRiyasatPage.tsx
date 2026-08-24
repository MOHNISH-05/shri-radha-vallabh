import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Camera,
  ChevronRight,
  Crown,
  GraduationCap,
  Info,
  Leaf,
  MessageCircle,
  Shield,
  Users,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { JAISALMER_RIYASAT_DATA } from '../data/jaisalmerRiyasat';
import { getJourneyWhatsAppLink } from '../data/siteConfig';

const KING_PHOTOS_BASE = '/images/king chaitanya raj sing';
const kp = (filename: string) => `${KING_PHOTOS_BASE}/${filename}`;

const PHOTOS = {
  hero: kp('WhatsApp Image 2026-08-22 at 12.23.12.jpeg'),
  ceremonialPortrait: kp('WhatsApp Image 2026-08-22 at 12.23.02.jpeg'),
  holi: kp('WhatsApp Image 2026-08-22 at 12.23.09 (1).jpeg'),
  processionAerial: kp('WhatsApp Image 2026-08-22 at 12.23.09.jpeg'),
  sacredTradition: kp('WhatsApp Image 2026-08-22 at 12.23.10 (1).jpeg'),
  royalFamily: kp('WhatsApp Image 2026-08-22 at 12.23.11 (1).jpeg'),
  community: kp('WhatsApp Image 2026-08-22 at 12.23.11.jpeg'),
  palaceThreshold: kp('WhatsApp Image 2026-08-22 at 12.23.15 (1).jpeg'),
  procession: kp('WhatsApp Image 2026-08-22 at 12.23.15.jpeg'),
  horseback: kp('WhatsApp Image 2026-08-22 at 12.23.14.jpeg'),
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1 },
  }),
};

interface CinematicSectionProps {
  src: string;
  children: React.ReactNode;
  className?: string;
  imagePosition?: string;
  overlayClassName?: string;
  id?: string;
}

const CinematicSection: React.FC<CinematicSectionProps> = ({
  src,
  children,
  className = 'py-20 sm:py-28',
  imagePosition = 'center',
  overlayClassName = 'bg-gradient-to-r from-[#050709]/95 via-[#050709]/68 to-[#050709]/35',
  id,
}) => (
  <section id={id} className={`relative overflow-hidden ${className}`}>
    <div className="absolute inset-0">
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover"
        style={{ objectPosition: imagePosition }}
        loading="lazy"
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050709]/35 via-transparent to-[#050709]/75" />
    </div>
    <div className="relative z-10">{children}</div>
  </section>
);

const PHOTO_ARCHIVE = [
  { src: PHOTOS.ceremonialPortrait, title: 'Ceremonial Portrait', position: 'center 18%' },
  { src: PHOTOS.processionAerial, title: 'The Fort Procession', position: 'center' },
  { src: PHOTOS.sacredTradition, title: 'Sacred Tradition', position: 'center 24%' },
  { src: PHOTOS.royalFamily, title: 'The Royal House', position: 'center 28%' },
  { src: PHOTOS.horseback, title: 'The Coronation Procession', position: 'center 25%' },
  { src: PHOTOS.palaceThreshold, title: 'At the Palace Threshold', position: 'center' },
];

export const JaisalmerRiyasatPage: React.FC = () => {
  const data = JAISALMER_RIYASAT_DATA;
  const waUrl = getJourneyWhatsAppLink('Jaisalmer Royal Heritage & Riyasat Trail');
  const lineageMilestones = [
    data.lineageChronicle[0],
    data.lineageChronicle[1],
    data.lineageChronicle[5],
    data.lineageChronicle[7],
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050709] text-[#F5EDE0] selection:bg-[#C9A24A]/30">
      {/* 01. Cinematic Royal Hero */}
      <PageHero
        breadcrumb="Jaisalmer Riyasat"
        badgeText="ROYAL HOUSE OF BHATI · 1156 AD — PRESENT"
        hindiTagline="जयसलमेर की रियासत एवं भाटी राजवंश"
        englishTitle="THE LIVING ROYAL LEGACY"
        description="Discover the eight-century heritage of the Bhati Maharawals through the living culture, sacred traditions, and contemporary custodianship of Jaisalmer."
        backgroundImage={PHOTOS.hero}
        bgPosition="center 30%"
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#royal-legacy"
            className="flex min-h-[44px] items-center gap-1.5 rounded-full bg-[#C9A24A] px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-[#080B0F] shadow-lg transition-all hover:brightness-110 active:scale-95"
          >
            <span>Explore the Royal Legacy</span>
            <ChevronRight className="h-4 w-4" />
          </a>
          <Link
            to="/jaisalmer/history"
            className="flex min-h-[44px] items-center rounded-full border border-white/25 bg-[#080B0F]/75 px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-[#F5EDE0] transition-all hover:border-[#C9A24A] hover:text-[#C9A24A]"
          >
            View Historical Timeline
          </Link>
        </div>
      </PageHero>

      {/* 02. Chaitanya Raj Singh Introduction */}
      <section className="relative bg-[#080B0F] py-20 sm:py-28" id="royal-legacy">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#C9A24A]/35 shadow-2xl">
              <img
                src={PHOTOS.ceremonialPortrait}
                alt="Maharawal Chaitanya Raj Singh in ceremonial dress"
                className="h-full w-full object-cover"
                style={{ objectPosition: 'center 18%' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050709]/85 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#C9A24A]">44th in the Bhati lineage</p>
                <p className="mt-1 font-serif text-xl font-bold text-[#F5EDE0]">Maharawal Chaitanya Raj Singh</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-7 lg:col-span-7">
            <motion.div variants={fadeUp} custom={0} className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">The Royal House Today</span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-[#F5EDE0] sm:text-5xl">
                Custodian of a Living Jaisalmer
              </h2>
              <p className="font-devanagari text-lg leading-relaxed text-[#D8B982]" lang="hi">
                महारावल चैतन्य राज सिंह
              </p>
            </motion.div>
            <motion.div variants={fadeUp} custom={1} className="space-y-4 text-sm font-light leading-relaxed text-[#F5EDE0]/82">
              {data.royalHouseToday.roleDescription.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} custom={2}>
              <Link
                to="/jaisalmer/riyasat/chaitanya-raj-singh"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#C9A24A] px-7 py-3 text-[10px] font-bold uppercase tracking-widest text-[#050709] shadow-xl transition-all hover:brightness-110 active:scale-95"
              >
                <Crown className="h-4 w-4" />
                Explore His Profile &amp; Story
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 03. Royal Legacy */}
      <CinematicSection
        src={PHOTOS.palaceThreshold}
        imagePosition="center 38%"
        overlayClassName="bg-gradient-to-r from-[#050709]/96 via-[#050709]/72 to-[#050709]/38"
        className="py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl space-y-8">
            <motion.div variants={fadeUp} custom={0} className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">Royal Legacy</span>
              <h2 className="font-serif text-3xl font-bold text-[#F5EDE0] sm:text-5xl">Stewardship Across Generations</h2>
              <p className="font-devanagari text-lg text-[#D8B982]" lang="hi">पीढ़ियों से संरक्षित राजसी विरासत</p>
            </motion.div>
            <motion.p variants={fadeUp} custom={1} className="max-w-2xl text-sm font-light leading-relaxed text-[#F5EDE0]/82">
              The Bhati royal tradition is inseparable from Jaisalmer itself: its sacred temples, sandstone fortifications, water systems, crafts, and communities. The Maharawal's historic role as Diwan of Lord Laxminath Ji placed custodianship above display — a responsibility carried forward today through cultural memory and public service.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-[#C9A24A]/25 bg-[#C9A24A]/20 sm:grid-cols-2">
              {[
                { icon: Crown, title: 'Royal Legacy', text: 'Continuity of the Bhati lineage and the sacred Diwan tradition.' },
                { icon: Shield, title: 'Heritage Conservation', text: 'Care for the fort, palace, havelis, memorials, and stone craft.' },
                { icon: Users, title: 'Living Jaisalmer Culture', text: 'Support for festivals, musicians, artisans, and inherited knowledge.' },
                { icon: Leaf, title: 'Community & Desert Conservation', text: 'Education, water wisdom, ecology, and responsible desert tourism.' },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-[#080B0F]/88 p-5 backdrop-blur-md sm:p-6">
                  <Icon className="mb-3 h-5 w-5 text-[#C9A24A]" />
                  <h3 className="font-serif text-base font-bold text-[#F5EDE0]">{title}</h3>
                  <p className="mt-1 text-xs font-light leading-relaxed text-[#F5EDE0]/68">{text}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </CinematicSection>

      {/* 04. Raj Tilak Visual Chapter */}
      <CinematicSection
        src={PHOTOS.processionAerial}
        imagePosition="center 42%"
        overlayClassName="bg-gradient-to-b from-[#050709]/88 via-[#050709]/45 to-[#050709]/92"
        className="py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto max-w-3xl space-y-3 text-center">
            <motion.span variants={fadeUp} custom={0} className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">The Coronation Chapter</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl font-bold text-[#F5EDE0] sm:text-5xl">Raj Tilak at Sonar Qila</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="font-devanagari text-lg leading-relaxed text-[#D8B982]" lang="hi">राज तिलक — परंपरा का जीवंत क्षण</motion.p>
            <motion.p variants={fadeUp} custom={3} className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-[#F5EDE0]/82">
              Following the succession in December 2020, the traditional Raj Tilak was performed in January 2021 within Jaisalmer Fort, continuing the ceremonial rites of the Bhati house before the people of the Golden City.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-4 lg:grid-cols-12"
          >
            <figure
              className="relative overflow-hidden rounded-3xl border border-[#C9A24A]/30 lg:col-span-8"
              style={{ minHeight: 'clamp(430px, 55vw, 620px)' }}
            >
              <img src={PHOTOS.hero} alt="Maharawal Chaitanya Raj Singh during the Raj Tilak ceremony" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: 'center 32%' }} loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050709]/85 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A24A]">January 2021 · Jaisalmer Fort</p>
                <p className="mt-1 font-serif text-xl font-bold text-[#F5EDE0] sm:text-2xl">The Raj Tilak Ceremony</p>
              </figcaption>
            </figure>
            <div className="grid grid-cols-2 gap-4 lg:col-span-4 lg:grid-cols-1">
              <figure className="relative overflow-hidden rounded-3xl border border-[#C9A24A]/30" style={{ minHeight: '250px' }}>
                <img src={PHOTOS.procession} alt="Maharawal greeting the people during the procession" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: 'center 25%' }} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050709]/85 via-transparent to-transparent" />
                <figcaption className="absolute bottom-0 p-4 text-xs font-semibold text-[#F5EDE0]">Namaskar to the People</figcaption>
              </figure>
              <figure className="relative overflow-hidden rounded-3xl border border-[#C9A24A]/30" style={{ minHeight: '250px' }}>
                <img src={PHOTOS.horseback} alt="Maharawal Chaitanya Raj Singh in the coronation procession" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: 'center 20%' }} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050709]/85 via-transparent to-transparent" />
                <figcaption className="absolute bottom-0 p-4 text-xs font-semibold text-[#F5EDE0]">The Coronation Procession</figcaption>
              </figure>
            </div>
          </motion.div>
        </div>
      </CinematicSection>

      {/* 05. Heritage Conservation */}
      <CinematicSection
        src={PHOTOS.palaceThreshold}
        imagePosition="center 42%"
        overlayClassName="bg-gradient-to-r from-[#050709]/96 via-[#050709]/76 to-[#050709]/42"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl space-y-8">
            <motion.div variants={fadeUp} custom={0} className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">Heritage Conservation</span>
              <h2 className="font-serif text-3xl font-bold text-[#F5EDE0] sm:text-5xl">Guardianship of the Golden City</h2>
              <p className="font-devanagari text-lg leading-relaxed text-[#D8B982]" lang="hi">स्वर्ण नगरी की धरोहर का संरक्षण</p>
            </motion.div>
            <motion.p variants={fadeUp} custom={1} className="max-w-2xl text-sm font-light leading-relaxed text-[#F5EDE0]/82">
              Conservation in Jaisalmer is not only the preservation of monuments. It is the care of a living architectural ecosystem — palace rooms, fort homes, carved jharokhas, temple traditions, hereditary stone craft, and the knowledge required to maintain them.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[#C9A24A]/25 bg-[#080B0F]/82 p-6 backdrop-blur-md">
                <Shield className="mb-3 h-5 w-5 text-[#C9A24A]" />
                <h3 className="font-serif text-lg font-bold">Architecture &amp; Archives</h3>
                <p className="mt-2 text-xs font-light leading-relaxed text-[#F5EDE0]/70">Preserving the Fort Palace Museum, historic interiors, royal records, and the visual memory of the Bhati house.</p>
              </div>
              <div className="rounded-3xl border border-[#C9A24A]/25 bg-[#080B0F]/82 p-6 backdrop-blur-md">
                <Camera className="mb-3 h-5 w-5 text-[#C9A24A]" />
                <h3 className="font-serif text-lg font-bold">Craft &amp; Continuity</h3>
                <p className="mt-2 text-xs font-light leading-relaxed text-[#F5EDE0]/70">Supporting silawat stone carving, traditional artisanship, and the skills that give Jaisalmer its unmistakable character.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </CinematicSection>

      {/* 06. Living Culture & Community */}
      <section className="grid grid-cols-1 bg-[#080B0F] lg:grid-cols-2">
        {[
          {
            src: PHOTOS.holi,
            position: 'center 28%',
            label: 'Living Jaisalmer Culture',
            title: 'Tradition Lives Through Participation',
            hindi: 'उत्सव, आस्था और लोक परंपरा',
            body: 'Royal heritage remains meaningful when it is present in the city’s festivals, sacred observances, music, colour, and shared rituals. These are not staged memories, but living expressions carried by Jaisalmer’s people.',
            icon: Users,
          },
          {
            src: PHOTOS.community,
            position: 'center 44%',
            label: 'Community & Desert Conservation',
            title: 'The Future of the Thar',
            hindi: 'समुदाय, शिक्षा और मरुस्थल संरक्षण',
            body: 'Community education, youth opportunity, water harvesting, desert ecology, and responsible tourism sustain the human landscape around the fort as surely as conservation sustains its walls.',
            icon: GraduationCap,
          },
        ].map(({ src, position, label, title, hindi, body, icon: Icon }) => (
          <article key={title} className="group relative flex items-end overflow-hidden" style={{ minHeight: 'clamp(620px, 78vh, 720px)' }}>
            <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" style={{ objectPosition: position }} loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050709] via-[#050709]/38 to-[#050709]/10" />
            <div className="relative z-10 max-w-xl space-y-4 p-6 sm:p-10 lg:p-12">
              <Icon className="h-6 w-6 text-[#C9A24A]" />
              <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">{label}</span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-[#F5EDE0] sm:text-4xl">{title}</h2>
              <p className="font-devanagari text-base leading-relaxed text-[#D8B982]" lang="hi">{hindi}</p>
              <p className="text-sm font-light leading-relaxed text-[#F5EDE0]/82">{body}</p>
            </div>
          </article>
        ))}
      </section>

      {/* 07. Royal Heritage Photography */}
      <section className="bg-[#080B0F] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto max-w-3xl space-y-3 text-center">
            <motion.span variants={fadeUp} custom={0} className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">Royal Heritage Photography</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl font-bold text-[#F5EDE0] sm:text-5xl">A Living Royal Archive</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-sm font-light leading-relaxed text-[#F5EDE0]/70">
              Ceremonial, spiritual, and community moments from the supplied Chaitanya Raj Singh photographic collection.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
            style={{ gridAutoRows: 'clamp(210px, 22vw, 270px)' }}
          >
            {PHOTO_ARCHIVE.map(({ src, title, position }, index) => (
              <figure
                key={title}
                className={`group relative overflow-hidden rounded-2xl border border-[#C9A24A]/20 ${index === 0 || index === 5 ? 'row-span-2' : ''} ${index === 1 ? 'col-span-2' : ''}`}
              >
                <img src={src} alt={title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" style={{ objectPosition: position }} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050709]/85 via-transparent to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-3 text-[10px] font-semibold tracking-wide text-[#F5EDE0] sm:p-4 sm:text-xs">{title}</figcaption>
              </figure>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 08. Jaisalmer Riyasat Context */}
      <CinematicSection
        src="/assets/optimized/jaisalmer-fort-palace-1920.webp"
        imagePosition="center 38%"
        overlayClassName="bg-gradient-to-b from-[#050709]/90 via-[#050709]/62 to-[#050709]/92"
      >
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-4xl space-y-6">
            <motion.div variants={fadeUp} custom={0} className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">Jaisalmer Riyasat</span>
              <h2 className="font-serif text-3xl font-bold text-[#F5EDE0] sm:text-5xl">Eight Centuries of Desert Sovereignty</h2>
              <p className="font-devanagari text-lg leading-relaxed text-[#D8B982]" lang="hi">{data.mottoHindi}</p>
            </motion.div>
            <motion.div variants={fadeUp} custom={1} className="grid grid-cols-1 gap-5 text-sm font-light leading-relaxed text-[#F5EDE0]/82 lg:grid-cols-2">
              {data.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {lineageMilestones.map((ruler) => (
              <div key={ruler.name} className="border-l border-[#C9A24A]/50 bg-[#080B0F]/70 p-5 backdrop-blur-md">
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#C9A24A]">{ruler.reignPeriod}</p>
                <h3 className="mt-2 font-serif text-base font-bold text-[#F5EDE0]">{ruler.name}</h3>
                <p className="mt-1 font-devanagari text-xs leading-relaxed text-[#D8B982]">{ruler.hindiName}</p>
                <p className="mt-3 text-[11px] font-light leading-relaxed text-[#F5EDE0]/68">{ruler.keyContributions}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </CinematicSection>

      {/* 09. Subtle Historical Note */}
      <section className="bg-[#080B0F] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <aside className="mx-auto flex max-w-4xl items-start gap-4 border-l border-[#C9A24A]/35 pl-5 sm:pl-7">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A24A]/65" />
          <div className="space-y-1.5">
            <p className="text-[9px] font-bold uppercase tracking-[0.26em] text-[#C9A24A]/75">Historical Note</p>
            <p className="text-[11px] font-light leading-relaxed text-[#F5EDE0]/52 sm:text-xs">
              {data.royalHouseToday.constitutionalNote} References to Maharawal on this page describe historic, cultural, and ceremonial custodianship.
            </p>
          </div>
        </aside>
      </section>

      {/* 10. Explore Jaisalmer Heritage */}
      <section className="bg-[#050709] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto max-w-3xl space-y-3 text-center">
            <motion.span variants={fadeUp} custom={0} className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">Explore Jaisalmer Heritage</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl font-bold text-[#F5EDE0] sm:text-5xl">The Royal Landscape</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-sm font-light text-[#F5EDE0]/68">Fort, palace, and memorial architecture shaped by generations of Bhati patronage.</motion.p>
          </motion.div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {data.royalHeritageSites.map((site, index) => (
              <motion.article
                key={site.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group overflow-hidden rounded-3xl border border-[#C9A24A]/22 bg-[#0D1117]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={site.image || ''} alt={site.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent" />
                </div>
                <div className="space-y-3 p-6">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#F5EDE0]">{site.name}</h3>
                    <p className="mt-1 font-devanagari text-xs leading-relaxed text-[#D8B982]">{site.hindiName}</p>
                  </div>
                  <p className="text-xs font-light leading-relaxed text-[#F5EDE0]/70">{site.description}</p>
                  <p className="border-t border-[#C9A24A]/18 pt-3 text-[10px] font-light leading-relaxed text-[#F5EDE0]/55">{site.significance}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="text-center">
            <Link to="/jaisalmer/explore" className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#C9A24A]/45 px-7 py-3 text-[10px] font-bold uppercase tracking-widest text-[#C9A24A] transition-all hover:bg-[#C9A24A] hover:text-[#050709]">
              Explore Jaisalmer Places <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Plan Journey CTA */}
      <CinematicSection
        src={PHOTOS.procession}
        imagePosition="center 35%"
        overlayClassName="bg-gradient-to-b from-[#050709]/88 via-[#050709]/62 to-[#050709]/92"
        className="py-24 sm:py-36"
      >
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto max-w-2xl space-y-5">
            <motion.span variants={fadeUp} custom={0} className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">Experience Living Heritage</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl font-bold text-[#F5EDE0] sm:text-5xl">Plan Your Jaisalmer Journey</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="font-devanagari text-lg leading-relaxed text-[#D8B982]" lang="hi">पधारो म्हारे देश</motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-sm font-light leading-relaxed text-[#F5EDE0]/80">
              Experience Sonar Qila, royal memorials, sacred traditions, desert communities, and the living cultural landscape of the Golden City with Shri Radha Vallabh.
            </motion.p>
            <motion.div variants={fadeUp} custom={4} className="flex flex-col items-center justify-center gap-3 pt-3 sm:flex-row">
              <Link to="/plan-journey?destination=Jaisalmer" className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#C9A24A] px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-[#050709] shadow-xl transition-all hover:brightness-110 active:scale-95 sm:w-auto">
                <Crown className="h-4 w-4" /> Plan Your Jaisalmer Journey
              </Link>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-[#25D366]/50 bg-[#080B0F]/85 px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-[#25D366] transition-all hover:bg-[#25D366] hover:text-white sm:w-auto">
                <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </CinematicSection>
    </div>
  );
};
