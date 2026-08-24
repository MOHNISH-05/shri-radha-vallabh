import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Crown, ChevronRight, ArrowUpRight, MessageCircle,
  Shield, GraduationCap, Droplets, Leaf, Camera, Star
} from 'lucide-react';
import { getJourneyWhatsAppLink } from '../data/siteConfig';

const KING_PHOTOS_BASE = '/images/king chaitanya raj sing';
const JAISALMER_PHOTOS_BASE = '/images/jaisalmer/Jaisalmer Photos';

const kp = (filename: string) => `${KING_PHOTOS_BASE}/${filename}`;
const jp = (filename: string) => `${JAISALMER_PHOTOS_BASE}/${filename}`;

const PHOTOS = {
  hero:          kp('WhatsApp Image 2026-08-22 at 12.23.12.jpeg'),
  portrait:      kp('WhatsApp Image 2026-08-22 at 12.23.02.jpeg'),
  holiFestival:  kp('WhatsApp Image 2026-08-22 at 12.23.09 (1).jpeg'),
  processionAir: kp('WhatsApp Image 2026-08-22 at 12.23.09.jpeg'),
  throneWorship: kp('WhatsApp Image 2026-08-22 at 12.23.10 (1).jpeg'),
  rajTilak:      kp('WhatsApp Image 2026-08-22 at 12.23.12.jpeg'),
  royalFamily:   kp('WhatsApp Image 2026-08-22 at 12.23.11 (1).jpeg'),
  education:     kp('WhatsApp Image 2026-08-22 at 12.23.11.jpeg'),
  palanquin:     kp('WhatsApp Image 2026-08-22 at 12.23.12 (1).jpeg'),
  casual:        kp('WhatsApp Image 2026-08-22 at 12.23.12 (2).jpeg'),
  processionNa:  kp('WhatsApp Image 2026-08-22 at 12.23.15.jpeg'),
  palaceArch:    kp('WhatsApp Image 2026-08-22 at 12.23.15 (1).jpeg'),
  another:       kp('WhatsApp Image 2026-08-22 at 12.23.14.jpeg'),
};

const ALL_PHOTOS: Array<{ src: string; caption: string; subcaption: string }> = [
  { src: PHOTOS.hero,          caption: 'The Raj Tilak — Coronation',        subcaption: 'January 2021 · Jaisalmer Fort' },
  { src: PHOTOS.processionAir, caption: 'The Grand Coronation Procession',   subcaption: 'Aerial View · Sonar Qila Lanes' },
  { src: PHOTOS.palanquin,     caption: 'Royal Procession on Fort Ramparts', subcaption: 'Bhati Crest Parasol · Jaisalmer' },
  { src: PHOTOS.processionNa,  caption: 'Namaskar to the People',            subcaption: 'Coronation Procession · January 2021' },
  { src: PHOTOS.portrait,      caption: 'Maharawal Chaitanya Raj Singh',      subcaption: 'Coronation Regalia · Jaisalmer' },
  { src: PHOTOS.royalFamily,   caption: 'The Royal House of Jaisalmer',      subcaption: 'Formal Succession Portrait' },
  { src: PHOTOS.rajTilak,      caption: 'The Raj Tilak Ceremony',            subcaption: 'Fort Palace Throne Room' },
  { src: PHOTOS.throneWorship, caption: 'Festival Worship at Fort Palace',   subcaption: 'Silver Throne Room · Jaisalmer' },
  { src: PHOTOS.holiFestival,  caption: 'Festival of Colours',               subcaption: 'Holi Celebration · Jaisalmer' },
  { src: PHOTOS.education,     caption: 'Heritage & Education',              subcaption: 'Community Initiative · Jaisalmer' },
  { src: PHOTOS.palaceArch,    caption: 'Emerging from the Royal Palace',    subcaption: 'Ornate Jharokha Arch · Archive' },
  { src: PHOTOS.another,       caption: 'Maharawal Chaitanya Raj Singh',      subcaption: 'Jaisalmer' },
  { src: PHOTOS.casual,        caption: 'A Personal Moment',                 subcaption: 'Jaisalmer' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12 },
  }),
};

interface SectionBgProps {
  src: string;
  brightness?: string;
  gradientClass?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionBg: React.FC<SectionBgProps> = ({
  src, brightness = 'brightness-[0.50]',
  gradientClass = 'bg-gradient-to-b from-[#050709]/80 via-[#050709]/50 to-[#050709]/88',
  children, className = 'py-20 sm:py-28', id,
}) => (
  <section className={`relative ${className} overflow-hidden`} id={id}>
    <div className="absolute inset-0 z-0">
      <img src={src} alt="" className={`w-full h-full object-cover ${brightness}`} loading="lazy" />
      <div className={`absolute inset-0 ${gradientClass}`} />
      <div className="absolute inset-0 bg-[#C9A24A]/[0.04]" />
    </div>
    <div className="relative z-10">{children}</div>
  </section>
);

export const ChaitanyaRajSinghPage: React.FC = () => {
  const waUrl = getJourneyWhatsAppLink('Jaisalmer Cultural & Royal Heritage Journey');

  return (
    <div className="bg-[#050709] min-h-screen">

      {/* 01. CINEMATIC HERO */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={PHOTOS.hero}
            alt="Maharawal Chaitanya Raj Singh Coronation"
            className="w-full h-full object-cover brightness-[0.62]"
            style={{ objectPosition: 'center 30%' }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050709]/60 via-[#050709]/20 to-[#050709]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050709]/70 via-transparent to-transparent" />
          <div className="absolute inset-0 jaali-pattern opacity-10 pointer-events-none" />
        </div>

        <div className="absolute top-28 left-4 sm:left-8 z-20">
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#F5EDE0]/60">
            <Link to="/jaisalmer" className="hover:text-[#C9A24A] transition-colors">Jaisalmer</Link>
            <ChevronRight className="w-3 h-3 text-[#C9A24A]/50" />
            <Link to="/jaisalmer/riyasat" className="hover:text-[#C9A24A] transition-colors">Riyasat</Link>
            <ChevronRight className="w-3 h-3 text-[#C9A24A]/50" />
            <span className="text-[#C9A24A]">Chaitanya Raj Singh</span>
          </nav>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl space-y-5">
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#050709]/90 border border-[#C9A24A]/40 text-[#C9A24A] text-[9px] font-bold uppercase tracking-[0.3em] backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24A] animate-pulse" />
                JAISALMER RIYASAT · TITULAR MAHARAWAL
              </span>
            </motion.div>

            <motion.p variants={fadeUp} custom={1}
              className="font-devanagari text-xl sm:text-3xl text-[#D8B982] tracking-wide" lang="hi">
              महारावल चैतन्य राज सिंह
            </motion.p>

            <motion.h1 variants={fadeUp} custom={2}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#F5EDE0] tracking-tight leading-[1.05]">
              CHAITANYA<br />RAJ SINGH
            </motion.h1>

            <motion.p variants={fadeUp} custom={3}
              className="text-xs sm:text-sm text-[#F5EDE0]/70 font-light leading-relaxed max-w-xl">
              Current Head of the Royal House of Jaisalmer · 44th in the Line of Bhati Maharawals · Cultural Custodian of Sonar Qila
            </motion.p>

            <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-3 pt-2">
              <a href="#royal-story"
                className="px-7 py-3 rounded-full bg-[#C9A24A] text-[#050709] font-bold text-[10px] uppercase tracking-widest hover:brightness-110 transition-all shadow-lg active:scale-95 min-h-[44px] flex items-center gap-2">
                <Crown className="w-4 h-4" />
                EXPLORE THE ROYAL STORY
              </a>
              <Link to="/jaisalmer/riyasat"
                className="px-7 py-3 rounded-full bg-transparent border border-[#C9A24A]/50 text-[#F5EDE0] font-bold text-[10px] uppercase tracking-widest hover:border-[#C9A24A] hover:text-[#C9A24A] transition-all min-h-[44px] flex items-center gap-2">
                ← JAISALMER RIYASAT
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 02. THE ROYAL HOUSE */}
      <SectionBg id="royal-story" src={jp('Jaisalmer fort -17.jpg')}
        brightness="brightness-[0.50]"
        gradientClass="bg-gradient-to-b from-[#050709]/80 via-[#050709]/55 to-[#050709]/88">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-4xl space-y-8">
            <motion.div variants={fadeUp} custom={0} className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">Chapter I</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F5EDE0]">The Royal House of Jaisalmer</h2>
              <p className="font-devanagari text-base sm:text-xl text-[#D8B982]" lang="hi">जैसलमेर का राजसी इतिहास</p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.p variants={fadeUp} custom={1} className="text-sm text-[#F5EDE0]/82 font-light leading-relaxed">
                The Bhati Rajput dynasty has ruled Jaisalmer since its foundation in 1156 AD. For over eight centuries, the Maharawals served as guardians of the Golden City, presiding over the Silk Route, sacred temple traditions, and one of India's most extraordinary medieval fortresses. Under the unique spiritual tradition of Jaisalmer, the supreme ruler was Lord Laxminath Ji — the Maharawal governed as Diwan: trustee, protector, and servant of the deity and people.
              </motion.p>
              <motion.p variants={fadeUp} custom={2} className="text-sm text-[#F5EDE0]/82 font-light leading-relaxed">
                As a premier princely state of Rajputana, Jaisalmer held a permanent 15-gun salute during the British Raj. In 1949, the Riyasat peacefully integrated into the democratic Indian Union. Today, the royal house continues as cultural custodians and heritage stewards of this living UNESCO World Heritage city.
              </motion.p>
            </div>
            <motion.div variants={fadeUp} custom={3} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { stat: '800+ Years', label: 'Dynasty Continuity', icon: Crown },
                { stat: '15-Gun Salute', label: 'British Raj Recognition', icon: Shield },
                { stat: 'UNESCO Fort', label: 'Living World Heritage', icon: Star },
              ].map(({ stat, label, icon: Icon }, i) => (
                <div key={i} className="bg-[#080B0F]/85 backdrop-blur-md border border-[#C9A24A]/30 rounded-3xl p-5 flex items-start gap-4">
                  <Icon className="w-6 h-6 text-[#C9A24A] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-serif text-lg font-bold text-[#F5EDE0]">{stat}</p>
                    <p className="text-[10px] uppercase tracking-widest text-[#D8B982] font-medium">{label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </SectionBg>

      {/* 03. THE BHATI LEGACY */}
      <SectionBg src={jp('bada bagh.jpeg')} brightness="brightness-[0.45]"
        gradientClass="bg-gradient-to-b from-[#050709]/85 via-[#050709]/55 to-[#050709]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-2">
            <motion.span variants={fadeUp} custom={0} className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">Chapter II</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl sm:text-5xl font-bold text-[#F5EDE0]">The Bhati Legacy</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="font-devanagari text-base sm:text-xl text-[#D8B982]" lang="hi">भाटी राजवंश की विरासत</motion.p>
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-sm text-[#F5EDE0]/82 font-light leading-relaxed max-w-3xl">
            The Bhati clan traces its lineage to the Chandravanshi (Lunar) and Yaduvanshi traditions — the same sacred lineage as Lord Krishna. Entering recorded history around the 7th century CE, the Bhatis established dominion over the Thar Desert's fertile trade passages. Rawal Jaisal founded Jaisalmer on the sacred Trikuta Hill in 1156 AD. The subsequent 44 Maharawals form an unbroken chain of heritage custodians spanning nearly nine centuries.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Shield, label: 'Fort', sub: 'Sonar Qila — UNESCO Living Fortress' },
              { icon: Star, label: 'Temple', sub: 'Lord Laxminath Ji — Sacred Trusteeship' },
              { icon: Crown, label: 'Trade', sub: 'Silk & Spice Route Guardianship' },
              { icon: Camera, label: 'Art', sub: 'Jaali, Jharokha & Desert Craft Tradition' },
            ].map(({ icon: Icon, label, sub }, i) => (
              <div key={i} className="bg-[#080B0F]/85 backdrop-blur-md border border-[#C9A24A]/30 rounded-2xl p-5 text-center space-y-2">
                <Icon className="w-6 h-6 text-[#C9A24A] mx-auto" />
                <p className="font-serif text-base font-bold text-[#F5EDE0]">{label}</p>
                <p className="text-[10px] text-[#F5EDE0]/65 font-light leading-snug">{sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </SectionBg>

      {/* 04. PERSONAL PORTRAIT */}
      <SectionBg src={PHOTOS.education} brightness="brightness-[0.40]"
        gradientClass="bg-gradient-to-r from-[#050709]/90 via-[#050709]/60 to-[#050709]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="lg:col-span-7 space-y-7">
              <motion.div variants={fadeUp} custom={0} className="space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">Chapter III</span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F5EDE0]">A New Chapter<br />for Jaisalmer</h2>
                <p className="font-devanagari text-base sm:text-xl text-[#D8B982]" lang="hi">जैसलमेर का नया अध्याय</p>
              </motion.div>
              <motion.div variants={fadeUp} custom={1} className="space-y-4 text-sm text-[#F5EDE0]/82 font-light leading-relaxed">
                <p>Born into the 800-year-old Bhati royal lineage, Chaitanya Raj Singh represents a new generation committed to preserving Jaisalmer's living heritage while engaging with contemporary India. He succeeded his father, Maharawal Brijraj Singh, in December 2020.</p>
                <p>Known for his engagement with sustainable development, heritage conservation, and community education initiatives in Rajasthan, the Maharawal embodies the Bhati tradition of the ruler as servant of the people — continuing the role of Diwan that has defined Jaisalmer's royal ethos for centuries.</p>
              </motion.div>
              <motion.div variants={fadeUp} custom={2} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Shield, label: 'Heritage Conservation', sub: 'Fort, Havelis & Living Architecture' },
                  { icon: GraduationCap, label: 'Education & Youth', sub: 'Community Learning Initiatives' },
                  { icon: Droplets, label: 'Water & Sustainability', sub: 'Desert Water Conservation' },
                ].map(({ icon: Icon, label, sub }, i) => (
                  <div key={i} className="bg-[#080B0F]/85 backdrop-blur-md border border-[#C9A24A]/30 rounded-2xl p-4 space-y-2">
                    <Icon className="w-5 h-5 text-[#C9A24A]" />
                    <p className="font-serif text-sm font-bold text-[#F5EDE0]">{label}</p>
                    <p className="text-[10px] text-[#F5EDE0]/65 font-light">{sub}</p>
                  </div>
                ))}
              </motion.div>
              <motion.p variants={fadeUp} custom={3} className="text-[10px] text-[#F5EDE0]/40 italic">
                Information sourced from publicly available institutional records and media coverage.
              </motion.p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-[#C9A24A]/40 shadow-2xl aspect-[3/4] relative">
                <img src={PHOTOS.portrait} alt="Maharawal Chaitanya Raj Singh Portrait"
                  className="w-full h-full object-cover" style={{ objectPosition: 'center top' }} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050709]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#080B0F]/85 backdrop-blur-md border border-[#C9A24A]/30 rounded-2xl p-3">
                  <p className="text-[9px] uppercase tracking-widest text-[#C9A24A] font-bold">Titular Maharawal</p>
                  <p className="font-serif text-sm font-bold text-[#F5EDE0]">Chaitanya Raj Singh</p>
                  <p className="text-[10px] text-[#D8B982]/80">44th · Bhati Royal House · Jaisalmer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionBg>

      {/* 05. SUCCESSION & RAJ TILAK */}
      <SectionBg src={PHOTOS.processionAir} brightness="brightness-[0.52]"
        gradientClass="bg-gradient-to-b from-[#050709]/80 via-[#050709]/45 to-[#050709]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-2 text-center">
            <motion.span variants={fadeUp} custom={0} className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">Chapter IV</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl sm:text-5xl font-bold text-[#F5EDE0]">Succession &amp; The Raj Tilak</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="font-devanagari text-base sm:text-xl text-[#D8B982]" lang="hi">राज तिलक — एक ऐतिहासिक क्षण</motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="max-w-2xl mx-auto">
            <div className="bg-[#080B0F]/85 backdrop-blur-md border border-[#C9A24A]/40 rounded-3xl p-8 space-y-6">
              <div className="flex items-start gap-5">
                <div className="shrink-0 flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full bg-[#C9A24A]/20 border border-[#C9A24A]/50 flex items-center justify-center">
                    <Crown className="w-4 h-4 text-[#C9A24A]" />
                  </div>
                  <div className="w-0.5 h-12 bg-gradient-to-b from-[#C9A24A]/60 to-[#C9A24A]/20" />
                </div>
                <div className="space-y-1 pt-1">
                  <p className="text-[10px] uppercase tracking-widest text-[#C9A24A] font-bold">43rd Maharawal of Jaisalmer</p>
                  <p className="font-serif text-xl font-bold text-[#F5EDE0]">Maharawal Brijraj Singh</p>
                  <p className="text-xs text-[#D8B982]/80 font-light">1982 – December 2020</p>
                  <p className="text-xs text-[#F5EDE0]/65 font-light mt-1">Reign of four decades — heritage custodian of the post-independence era.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pl-5">
                <div className="w-5 h-5 rounded-full bg-[#C9A24A] flex items-center justify-center shrink-0">
                  <ArrowUpRight className="w-3 h-3 text-[#050709]" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#C9A24A] font-bold">Succession · December 2020</span>
              </div>
              <div className="flex items-start gap-5">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#C9A24A] flex items-center justify-center shadow-lg shadow-[#C9A24A]/30">
                    <Crown className="w-4 h-4 text-[#050709]" />
                  </div>
                </div>
                <div className="space-y-1 pt-1">
                  <p className="text-[10px] uppercase tracking-widest text-[#C9A24A] font-bold">44th in the Bhati Lineage</p>
                  <p className="font-serif text-xl font-bold text-[#F5EDE0]">Maharawal Chaitanya Raj Singh</p>
                  <p className="text-xs text-[#D8B982]/80 font-light">December 2020 – Present</p>
                  <p className="text-xs text-[#F5EDE0]/65 font-light mt-1">The Raj Tilak ceremony was performed in January 2021 inside Sonar Qila, following traditional Bhati rites observed for centuries.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { src: PHOTOS.rajTilak,     cap: 'The Raj Tilak Ceremony' },
              { src: PHOTOS.processionNa, cap: 'Namaskar to the People' },
              { src: PHOTOS.palanquin,    cap: 'Procession on Fort Ramparts' },
            ].map(({ src, cap }, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-[#C9A24A]/30 aspect-square relative">
                <img src={src} alt={cap} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#050709]/90 to-transparent p-3">
                  <p className="text-[10px] font-semibold text-[#F5EDE0]">{cap}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
            className="max-w-3xl mx-auto bg-[#080B0F]/70 backdrop-blur-md border border-[#C9A24A]/20 rounded-2xl p-6 space-y-2">
            <p className="text-[10px] uppercase tracking-widest text-[#C9A24A] font-bold">Historical &amp; Constitutional Note</p>
            <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed">
              Following Indian independence and the abolition of the Privy Purse in 1971, the titles of India's former princely rulers no longer carry official constitutional recognition. Chaitanya Raj Singh is therefore recognized as the <strong className="text-[#D8B982]">titular Maharawal</strong> — the current head of the Jaisalmer royal house and a cultural heritage custodian continuing the unbroken Bhati tradition of nearly nine centuries.
            </p>
          </motion.div>
        </div>
      </SectionBg>

      {/* 06. HERITAGE & CONSERVATION */}
      <SectionBg src={PHOTOS.palaceArch} brightness="brightness-[0.45]"
        gradientClass="bg-gradient-to-b from-[#050709]/80 via-[#050709]/50 to-[#050709]/88">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-2">
            <motion.span variants={fadeUp} custom={0} className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">Chapter V</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl sm:text-5xl font-bold text-[#F5EDE0]">Heritage, Conservation &amp; Community</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="font-devanagari text-base sm:text-xl text-[#D8B982]" lang="hi">विरासत संरक्षण और समाज सेवा</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: Shield, title: 'Heritage Architecture Conservation', body: "Advocating for the preservation of Jaisalmer's sandstone heritage — Sonar Qila's living fabric, historic havelis, and royal cenotaph complexes." },
              { icon: GraduationCap, title: 'Education for Desert Communities', body: 'Supporting educational initiatives for children and youth in the Thar Desert region, connecting traditional knowledge with modern opportunity.' },
              { icon: Droplets, title: 'Water Conservation in Rajasthan', body: 'Engaging with sustainable water management traditions — baolis, talabs, and modern conservation — critical to desert community resilience.' },
              { icon: Leaf, title: 'Sustainable Desert Tourism', body: "Promoting responsible tourism frameworks that preserve Jaisalmer's cultural heritage while benefiting local artisans and communities." },
            ].map(({ icon: Icon, title, body }, i) => (
              <div key={i} className="bg-[#080B0F]/85 backdrop-blur-md border border-[#C9A24A]/30 rounded-3xl p-6 flex gap-4">
                <Icon className="w-5 h-5 text-[#C9A24A] shrink-0 mt-1" />
                <div className="space-y-1.5">
                  <p className="font-serif text-base font-bold text-[#F5EDE0]">{title}</p>
                  <p className="text-xs text-[#F5EDE0]/72 font-light leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
            className="text-[10px] text-[#F5EDE0]/40 italic max-w-2xl">
            Themes sourced from publicly documented institutional activity and media records. Details of ongoing initiatives may have evolved.
          </motion.p>
        </div>
      </SectionBg>

      {/* 07. ROYAL PHOTOGRAPHIC ARCHIVE */}
      <section className="bg-[#080B0F] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center space-y-2">
            <motion.span variants={fadeUp} custom={0} className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">Chapter VI</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl sm:text-5xl font-bold text-[#F5EDE0]">Royal Photographic Archive</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="font-devanagari text-base sm:text-xl text-[#D8B982]" lang="hi">राजसी चित्र अभिलेख</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {ALL_PHOTOS.map(({ src, caption, subcaption }, i) => (
              <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden border border-[#C9A24A]/25 group hover:border-[#C9A24A]/55 transition-all duration-300 relative mb-4">
                <img src={src} alt={caption} className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#050709]/90 via-[#050709]/50 to-transparent p-4">
                  <p className="text-xs font-semibold text-[#F5EDE0] leading-snug">{caption}</p>
                  <p className="text-[10px] text-[#D8B982]/75 mt-0.5">{subcaption}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 08. FINAL HERITAGE CTA */}
      <SectionBg src={jp('gadisar.JPG')} brightness="brightness-[0.52]"
        gradientClass="bg-gradient-to-b from-[#050709]/80 via-[#050709]/50 to-[#050709]/90"
        className="py-24 sm:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl mx-auto space-y-4">
            <motion.span variants={fadeUp} custom={0} className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">Experience Living Heritage</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl sm:text-5xl font-bold text-[#F5EDE0]">Journey to the Golden City</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="font-devanagari text-lg text-[#D8B982]" lang="hi">पधारो म्हारे देश</motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-sm text-[#F5EDE0]/78 font-light leading-relaxed">
              Walk the ancient lanes of Sonar Qila, visit the sacred cenotaphs at Bada Bagh, and experience the living heritage of Jaisalmer's royal legacy — curated by Shri Radha Vallabh.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/plan-journey?destination=Jaisalmer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C9A24A] text-[#050709] font-bold text-[10px] uppercase tracking-widest hover:brightness-110 transition-all shadow-xl active:scale-95 min-h-[48px] flex items-center justify-center gap-2">
              <Crown className="w-4 h-4" />
              PLAN YOUR JAISALMER JOURNEY
            </Link>
            <Link to="/jaisalmer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-[#C9A24A]/50 text-[#F5EDE0] font-bold text-[10px] uppercase tracking-widest hover:border-[#C9A24A] hover:text-[#C9A24A] transition-all min-h-[48px] flex items-center justify-center">
              EXPLORE JAISALMER PORTAL
            </Link>
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#080B0F] border border-[#25D366]/50 text-[#25D366] font-bold text-[10px] uppercase tracking-widest hover:bg-[#25D366] hover:text-white transition-all min-h-[48px] flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" />
              ENQUIRE ON WHATSAPP
            </a>
          </motion.div>
        </div>
      </SectionBg>

    </div>
  );
};
