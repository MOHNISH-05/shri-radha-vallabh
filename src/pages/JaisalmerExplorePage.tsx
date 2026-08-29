import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle, Crown } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { JAISALMER_PLACES } from '../data/jaisalmerPlaces';
import type { JaisalmerPlace } from '../data/jaisalmerPlaces';
import { JAISALMER_EXPERIENCES } from '../data/jaisalmerExperiences';
import { getJourneyWhatsAppLink } from '../data/siteConfig';

const JP = '/images/jaisalmer/Jaisalmer Photos';
const jp = (f: string) => `${JP}/${f}`;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

interface Chapter {
  id: string;
  number: string;
  category: string;
  title: string;
  hindi: string;
  description: string;
  background: string;
  brightness: string;
  slugs?: string[];
  experienceSlugs?: string[];
}

const CHAPTERS: Chapter[] = [
  {
    id: 'fort',
    number: '01',
    category: 'HERITAGE',
    title: 'The Golden Fort — Sonar Qila',
    hindi: 'सोनार किला — स्वर्ण दुर्ग',
    description: 'The UNESCO World Heritage living fortress that has anchored Jaisalmer for 800+ years. One-fourth of the city\'s population still resides within its 99 bastions.',
    background: '/assets/optimized/jaisalmer-fort-1920.webp',
    brightness: 'brightness-[0.52]',
    slugs: ['jaisalmer-fort', 'fort-palace'],
  },
  {
    id: 'royal',
    number: '02',
    category: 'ROYAL HERITAGE',
    title: 'Royal Jaisalmer — Cenotaphs & Palaces',
    hindi: 'राजसी विरासत — छतरियाँ और महल',
    description: 'Royal cenotaphs, memorial chhatris and palatial complexes preserving the Bhati Rajput legacy above the sands of Thar.',
    background: jp('bada bagh.jpeg'),
    brightness: 'brightness-[0.48]',
    slugs: ['bada-bagh', 'vyas-chhatri', 'mandir-palace'],
  },
  {
    id: 'sacred',
    number: '03',
    category: 'SPIRITUAL',
    title: 'Sacred Jaisalmer — Temples & Tirths',
    hindi: 'पवित्र जैसलमेर — मंदिर और तीर्थ',
    description: 'Ancient shrines, Jain sanctuaries and pilgrimage sites where the desert meets devotion.',
    background: jp('laxmi nath ji 1.jpeg'),
    brightness: 'brightness-[0.50]',
    slugs: ['laxminath-ji', 'jain-temples', 'lodruva'],
  },
  {
    id: 'havelis',
    number: '04',
    category: 'ARCHITECTURE',
    title: 'Havelis — Merchant Palaces of Stone',
    hindi: 'हवेलियाँ — पत्थर के राजसी महल',
    description: 'Intricate jharokha windows, cascading balconies and labyrinthine stone carvings built by Jaisalmer\'s legendary merchant-prince families.',
    background: jp('patawa haveli1.jpeg'),
    brightness: 'brightness-[0.48]',
    slugs: ['patwon-haveli', 'nathmal-haveli', 'salim-singh-haveli'],
  },
  {
    id: 'desert',
    number: '05',
    category: 'DESERT',
    title: 'The Thar — Endless Dunes & Open Skies',
    hindi: 'थार मरुस्थल — अनंत रेत और आकाश',
    description: 'From golden Sam dunes to the quiet village of Khuri and India\'s largest desert wildlife sanctuary.',
    background: jp('desertsam1.JPG'),
    brightness: 'brightness-[0.52]',
    slugs: ['sam-dunes', 'khuri-dunes', 'desert-national-park'],
  },
  {
    id: 'safari',
    number: '06',
    category: 'SAFARI & ADVENTURE',
    title: 'Desert Experiences — Safari, Camp & Culture',
    hindi: 'थार का रोमांच — सफारी और संस्कृति',
    description: 'Experience discovery beyond the landmark directory: traditional camel trails, locally coordinated jeep outings and considered nights in the Thar.',
    background: '/images/jaisalmer/safari/hero/jaisalmer-safari-hero.webp',
    brightness: 'brightness-[0.48]',
    experienceSlugs: ['camel-safari', 'jeep-safari', 'desert-camp'],
  },
  {
    id: 'beyond',
    number: '07',
    category: 'PILGRIMAGE & WATER',
    title: 'Beyond the Walls — Lakes, Forests & Border Shrines',
    hindi: 'जैसलमेर के परे — झीलें, वन और तीर्थ',
    description: 'Sacred water tanks, miracle temples, and border pilgrimages that complete the Jaisalmer heritage trail.',
    background: jp('gadisar.JPG'),
    brightness: 'brightness-[0.50]',
    slugs: ['gadisar-lake', 'amar-sagar', 'tanot-mata', 'ramdevra'],
  },
];

const PlaceCard: React.FC<{ place: JaisalmerPlace }> = ({ place }) => (
  <Link
    to={`/jaisalmer/places/${place.slug}`}
    className="group bg-[#080B0F]/85 backdrop-blur-md border border-[#C9A24A]/30 rounded-3xl overflow-hidden hover:border-[#C9A24A]/65 transition-all duration-300 flex flex-col"
  >
    <div className="relative h-48 overflow-hidden shrink-0">
      <img
        src={place.image}
        alt={place.name}
        className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080B0F]/70 via-transparent to-transparent" />
      <div className="absolute top-3 left-3">
        <span className="px-2.5 py-1 rounded-full bg-[#C9A24A]/90 text-[#050709] text-[9px] font-bold uppercase tracking-wider">
          {place.category}
        </span>
      </div>
      {place.distanceTag !== 'IN JAISALMER' && (
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-full bg-[#080B0F]/85 border border-[#C9A24A]/40 text-[#D8B982] text-[9px] font-bold uppercase tracking-wider">
            {place.distanceKm ? `${place.distanceKm}km` : place.distanceTag}
          </span>
        </div>
      )}
    </div>
    <div className="p-5 flex flex-col flex-1 space-y-3">
      <p className="font-devanagari text-xs text-[#D8B982]" lang="hi">{place.hindiName}</p>
      <h4 className="font-serif text-base font-bold text-[#F5EDE0] leading-snug">{place.name}</h4>
      <p className="text-[11px] text-[#F5EDE0]/70 font-light leading-relaxed flex-1">{place.whyVisit}</p>
      <div className="flex items-center gap-1.5 text-[#C9A24A] text-[10px] font-bold uppercase tracking-widest pt-1 group-hover:gap-2.5 transition-all">
        <span>Explore</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </div>
    </div>
  </Link>
);

const ExperienceCard: React.FC<{ slug: string }> = ({ slug }) => {
  const experience = JAISALMER_EXPERIENCES.find((item) => item.slug === slug);
  if (!experience) return null;
  return (
    <Link to={`/jaisalmer/safari-adventure#${experience.slug}`} className="group flex flex-col overflow-hidden rounded-3xl border border-[#C9A24A]/30 bg-[#080B0F]/90 transition-all duration-300 hover:border-[#C9A24A]/70">
      <div className="h-48 overflow-hidden"><img src={experience.image} alt={experience.imageAlt} width={experience.imageWidth} height={experience.imageHeight} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" decoding="async" /></div>
      <div className="flex flex-1 flex-col p-5"><p className="font-devanagari text-xs text-[#D8B982]" lang="hi">{experience.hindiName}</p><h3 className="mt-2 font-serif text-lg font-bold text-[#F5EDE0]">{experience.name}</h3><p className="mt-3 flex-1 text-[11px] font-light leading-relaxed text-[#F5EDE0]/70">{experience.shortDescription}</p><span className="mt-5 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#C9A24A]">Explore experience <ArrowUpRight className="h-3.5 w-3.5" /></span></div>
    </Link>
  );
};

export const JaisalmerExplorePage: React.FC = () => {
  const waUrl = getJourneyWhatsAppLink('Jaisalmer Heritage & Spiritual Journey');

  const getPlacesBySlug = (slugs: string[]): JaisalmerPlace[] =>
    slugs
      .map(slug => JAISALMER_PLACES.find(p => p.slug === slug))
      .filter((p): p is JaisalmerPlace => Boolean(p));

  return (
    <div className="bg-[#050709] min-h-screen perf-defer-sections">
      <PageHero
        breadcrumb="Explore Jaisalmer"
        badgeText="18 Heritage Locations · 7 Editorial Chapters"
        hindiTagline="जैसलमेर की सम्पूर्ण यात्रा"
        englishTitle="Explore All of Jaisalmer"
        description="From the golden bastions of Sonar Qila to border shrines of the Thar — a curated guide to every heritage location, sacred site, and desert experience in and around Jaisalmer."
        backgroundImage="/assets/optimized/jaisalmer-fort-1280.webp"
        backgroundImageSrcSet="/assets/optimized/jaisalmer-fort-1280.webp 1280w, /assets/optimized/jaisalmer-fort-1920.webp 1920w"
        bgPosition="center 40%"
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/jaisalmer"
            className="px-5 py-2.5 rounded-full bg-[#C9A24A]/15 border border-[#C9A24A]/40 text-[#C9A24A] text-[10px] font-bold uppercase tracking-widest hover:bg-[#C9A24A] hover:text-[#050709] transition-all min-h-[40px] flex items-center">
            ← JAISALMER PORTAL
          </Link>
          <Link to="/plan-journey?destination=Jaisalmer"
            className="px-5 py-2.5 rounded-full bg-[#C9A24A] text-[#050709] text-[10px] font-bold uppercase tracking-widest hover:brightness-110 transition-all min-h-[40px] flex items-center">
            PLAN YOUR JOURNEY →
          </Link>
        </div>
      </PageHero>

      {/* Sticky Chapter Nav */}
      <div className="sticky top-16 z-30 bg-[#080B0F]/95 backdrop-blur-xl border-b border-[#C9A24A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-x-auto">
          <div className="flex items-center gap-1 py-3 min-w-max">
            {CHAPTERS.map(ch => (
              <a
                key={ch.id}
                href={`#chapter-${ch.id}`}
                className="px-4 py-2 rounded-full text-[9px] font-bold uppercase tracking-wider text-[#F5EDE0]/60 hover:text-[#C9A24A] hover:bg-[#C9A24A]/10 transition-all whitespace-nowrap"
              >
                {ch.number} · {ch.title.split(' — ')[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 7 Cinematic Chapters */}
      {CHAPTERS.map((ch, chIdx) => {
        const places = getPlacesBySlug(ch.slugs || []);
        return (
          <section
            key={ch.id}
            id={`chapter-${ch.id}`}
            className="relative py-20 sm:py-28 overflow-hidden"
          >
            {/* Full-bleed background */}
            <div className="absolute inset-0 z-0">
              <img
                src={ch.background}
                alt={ch.title}
                className={`w-full h-full object-cover ${ch.brightness}`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#050709]/80 via-[#050709]/45 to-[#050709]/85" />
              <div className="absolute inset-0 bg-[#C9A24A]/[0.03]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
              {/* Chapter heading */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={chIdx * 0.1}
                className="space-y-2"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[9px] uppercase font-bold tracking-[0.35em] text-[#C9A24A]">
                    CHAPTER {ch.number}
                  </span>
                  <span className="w-8 h-px bg-[#C9A24A]/40" />
                  <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]/70">
                    {ch.category}
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F5EDE0] leading-tight">
                  {ch.title}
                </h2>
                <p className="font-devanagari text-base sm:text-xl text-[#D8B982]" lang="hi">
                  {ch.hindi}
                </p>
                <p className="text-xs sm:text-sm text-[#F5EDE0]/72 font-light max-w-2xl leading-relaxed">
                  {ch.description}
                </p>
              </motion.div>

              {/* Place or experience cards */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`grid grid-cols-1 ${
                  places.length === 2
                    ? 'sm:grid-cols-2 max-w-2xl'
                    : places.length === 4
                    ? 'sm:grid-cols-2 lg:grid-cols-4'
                    : 'sm:grid-cols-2 lg:grid-cols-3'
                } gap-5`}
              >
                {places.map((place, pIdx) => (
                  <motion.div key={place.slug} variants={fadeUp} custom={pIdx}>
                    <PlaceCard place={place} />
                  </motion.div>
                ))}
                {ch.experienceSlugs?.map((slug, pIdx) => (
                  <motion.div key={slug} variants={fadeUp} custom={pIdx}>
                    <ExperienceCard slug={slug} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Final CTA */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-[#080B0F]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
            <motion.span variants={fadeUp} custom={0}
              className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">Ready to Experience Jaisalmer?</motion.span>
            <motion.h2 variants={fadeUp} custom={1}
              className="font-serif text-2xl sm:text-4xl font-bold text-[#F5EDE0]">Plan Your Curated Heritage Journey</motion.h2>
            <motion.p variants={fadeUp} custom={2}
              className="text-sm text-[#F5EDE0]/72 font-light leading-relaxed">
              We craft private, scholar-guided itineraries through all 18 locations — tailored to your family's interests, timing, and comfort level.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/plan-journey?destination=Jaisalmer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C9A24A] text-[#050709] font-bold text-[10px] uppercase tracking-widest hover:brightness-110 transition-all shadow-xl active:scale-95 min-h-[48px] flex items-center justify-center gap-2">
              <Crown className="w-4 h-4" />
              PLAN MY JAISALMER JOURNEY
            </Link>
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-[#25D366]/50 text-[#25D366] font-bold text-[10px] uppercase tracking-widest hover:bg-[#25D366] hover:text-white transition-all min-h-[48px] flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" />
              ENQUIRE ON WHATSAPP
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
