import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  MessageCircle,
  Heart,
  Landmark,
  Tent,
  Users,
  Car,
  Plane,
  Train,
  Utensils,
  ArrowUpRight,
  Crown,
  Music4,
  ShieldCheck,
} from 'lucide-react';
import { JAISALMER_PLACES } from '../data/jaisalmerPlaces';
import { ACTIVE_JOURNEY } from '../data/journeys';
import type { Package } from '../data/journeys';
import { PackageModal } from '../components/PackageModal';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { getJourneyWhatsAppLink } from '../data/siteConfig';

export const JaisalmerPage: React.FC = () => {
  const [selectedPkg, setSelectedPkg] = useState<Package | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<{ title: string; location: string; category: string; image: string } | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Six core highlights for the main landing page
  const highlightSlugs = [
    'jaisalmer-fort',
    'bada-bagh',
    'gadisar-lake',
    'laxminath-ji',
    'patwon-haveli',
    'sam-dunes',
  ];

  const topSixPlaces = highlightSlugs
    .map((slug) => JAISALMER_PLACES.find((p) => p.slug === slug))
    .filter(Boolean) as typeof JAISALMER_PLACES;

  const planUrl = '/plan-journey?destination=Jaisalmer';
  const whatsappUrl = getJourneyWhatsAppLink('Jaisalmer Golden City Exploration');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navSections = [
    { id: 'introduction', label: 'Sandstone Majesty' },
    { id: 'packages', label: 'Packages' },
    { id: 'explore-highlights', label: 'Top 6 Landmarks' },
    { id: 'history-story', label: 'The Story' },
    { id: 'living-traditions', label: 'Culture & Desert' },
    { id: 'stay-and-travel', label: 'Stay & Travel' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'faqs', label: 'FAQs' },
  ];

  return (
    <div className="min-h-screen bg-[#050709] text-[#F5EDE0] selection:bg-[#C9A24A]/30">
      
      {/* ─────────────────────────────────────────────────────────────
          01. CINEMATIC HERO (APPROVED AUTHENTIC LAXMINATH JI / FORT VISUAL)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#050709] pt-24 pb-16">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/optimized/laxminath-hero.webp"
            alt="Shri Laxminath Ji in Jaisalmer Golden City"
            className="w-full h-full object-cover object-[center_35%] opacity-80 filter brightness-95 transform scale-105 transition-transform duration-1000"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050709]/95 via-[#050709]/45 to-[#050709]/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050709]/72 via-transparent to-[#050709]/72" />
          <div className="absolute inset-0 jaali-pattern opacity-25 pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A24A]/15 border border-[#C9A24A]/40 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C9A24A]" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#C9A24A]">
              THE GOLDEN DESTINATION EXPERIENCE
            </span>
          </motion.div>

          {/* Titles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-3"
          >
            <p className="font-devanagari text-xl sm:text-2xl lg:text-3xl text-[#D8B982] tracking-wide font-medium">
              स्वर्णिम धरा, अनंत कहानियाँ।
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5EDE0] leading-none">
              JAISALMER
            </h1>
            <p className="text-xs sm:text-sm lg:text-base text-[#C9A24A] uppercase tracking-[0.3em] font-medium">
              The Living Sandstone Citadel of the Great Thar
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-xs sm:text-sm text-[#F5EDE0]/85 font-light leading-relaxed"
          >
            Explore 800+ years of living fort heritage, sacred temple sanctums, finely carved merchant havelis, and tranquil sunset dunes with Shri Radha Vallabh's dedicated hospitality.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3.5 pt-2"
          >
            <button
              onClick={() => scrollToSection('packages')}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C9A24A] to-[#AA771C] text-[#05070A] font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>VIEW JAISALMER PACKAGES</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <Link
              to="/jaisalmer/explore"
              className="px-6 py-3.5 rounded-full bg-[#0D1117]/90 border border-[#C9A24A]/40 text-[#F5EDE0] hover:text-[#C9A24A] hover:border-[#C9A24A] font-semibold text-xs uppercase tracking-wider backdrop-blur-md active:scale-95 transition-all flex items-center gap-2"
            >
              <span>EXPLORE ALL 18 SITES</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-full bg-[#080B0F] border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold text-xs uppercase tracking-wider active:scale-95 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP US</span>
            </a>
          </motion.div>

        </div>

        {/* Quick Facts Strip at Hero Base */}
        <div className="absolute bottom-0 inset-x-0 bg-[#080B0F]/90 border-t border-[#C9A24A]/25 backdrop-blur-md py-3 hidden md:block z-10">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-[11px] text-[#F5EDE0]/75 tracking-wider uppercase font-medium">
            <span>📍 Trikuta Hill, Western Thar</span>
            <span>🏰 1156 AD (12th Century Foundation)</span>
            <span>👑 Rawal Jaisal (Bhati Dynasty)</span>
            <span>⭐ UNESCO World Heritage Living Fort</span>
            <span>❄️ Best Season: Oct – Mar</span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION NAV BAR (FAST SCROLL JUMP)
          ───────────────────────────────────────────────────────────── */}
      <nav className="sticky top-20 z-30 bg-[#080B0F]/95 backdrop-blur-md border-b border-[#C9A24A]/20 py-2.5 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-start sm:justify-center gap-2 sm:gap-4 min-w-max">
          {navSections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className="px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#F5EDE0]/70 hover:text-[#C9A24A] hover:bg-[#C9A24A]/10 transition-all cursor-pointer whitespace-nowrap"
            >
              {sec.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ─────────────────────────────────────────────────────────────
          02. SANDSTONE MAJESTY IN THE GREAT THAR (EDITORIAL INTRO)
          ───────────────────────────────────────────────────────────── */}
      <section id="introduction" className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/assets/optimized/jaisalmer-fort-1920.webp" alt="" className="w-full h-full object-cover brightness-[0.32]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050709]/90 via-[#050709]/65 to-[#050709]/90" />
          <div className="absolute inset-0 bg-[#C9A24A]/[0.03]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
                THE GOLDEN CITY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EDE0] leading-tight">
                Sandstone Majesty in the Great Thar
              </h2>
              <p className="font-devanagari text-base sm:text-lg text-[#D8B982]">
                रेत का सोना, इतिहास का वैभव और आस्था की धारा
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#F5EDE0]/80 font-light leading-relaxed">
              <p>
                Rising like a golden mirage from the heart of western Rajasthan, Jaisalmer is one of the world's rare living medieval cities. Founded in 1156 AD by Rawal Jaisal, the city gets its name from its distinctive yellow sandstone architecture that turns a glowing honey-gold under the setting sun.
              </p>
              <p>
                Unlike silent monument ruins elsewhere, Jaisalmer's 12th-century UNESCO World Heritage fortress—Sonar Qila—is a living city. One-fourth of the historic population still resides inside its ramparts, continuing generations of artisan crafts, sacred temple rituals, and warm desert hospitality.
              </p>
              <p>
                With Shri Radha Vallabh, your journey is curated with reverence and dignity—combining private guided walks through centuries-old haveli carvings, tranquil evening prayers at ancient shrines, and unforgettable nights under starry skies in luxury desert camps.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#0D1117] border border-[#C9A24A]/25 space-y-1">
                <div className="flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-[#C9A24A]" />
                  <h3 className="font-serif text-sm font-bold text-[#F5EDE0]">UNESCO Living Fort</h3>
                </div>
                <p className="text-xs text-[#F5EDE0]/70 font-light">4,000+ residents continuing 800-year-old living traditions inside the 99 bastions.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0D1117] border border-[#C9A24A]/25 space-y-1">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#C9A24A]" />
                  <h3 className="font-serif text-sm font-bold text-[#F5EDE0]">Sacred Shrines</h3>
                </div>
                <p className="text-xs text-[#F5EDE0]/70 font-light">Shri Laxminath Ji, 7 Fort Jain Temples, Lodruva &amp; Tanot Mata.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl border border-[#C9A24A]/30 aspect-[4/5]">
            <img
              src="/assets/optimized/jaisalmer-fort-1920.webp"
              alt="Jaisalmer Fort Yellow Sandstone Architecture"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B0F]/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#080B0F]/85 backdrop-blur-md border border-[#C9A24A]/30">
              <span className="text-[9px] uppercase font-bold tracking-widest text-[#C9A24A] block">
                AUTHENTICITY ARCHIVE
              </span>
              <p className="font-devanagari text-xs sm:text-sm text-[#F5EDE0] font-medium mt-0.5">
                800+ वर्षों से अनवरत जीवंत स्वर्ण दुर्ग परंपरा।
              </p>
            </div>
          </div>

        </div>
        </div>{/* close z-10 relative inner wrapper */}
      </section>

      {/* ─────────────────────────────────────────────────────────────
          03. CURATED JAISALMER JOURNEYS (PACKAGES IMMEDIATELY AFTER SANDSTONE!)
          ───────────────────────────────────────────────────────────── */}
      <section id="packages" className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/jaisalmer/Jaisalmer Photos/patawa haveli1.jpeg" alt="" className="w-full h-full object-cover brightness-[0.28]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050709]/90 via-[#050709]/70 to-[#050709]/92" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
                CURATED TRAVEL EXPERIENCES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EDE0]">
                Curated Jaisalmer Journeys
              </h2>
              <p className="font-devanagari text-base text-[#D8B982]">
                हर यात्रा की अपनी एक कहानी है।
              </p>
              <p className="text-xs sm:text-sm text-[#F5EDE0]/70 font-light max-w-xl">
                Thoughtfully paced itineraries blending living heritage, private guided fort walks, sacred temple visits, and luxury desert glamping.
              </p>
            </div>

            <Link
              to="/packages"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C9A24A] hover:text-white transition-colors"
            >
              <span>View All Tour Packages</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Package Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ACTIVE_JOURNEY.packages.map((pkg, idx) => {
              const pkgWaUrl = getJourneyWhatsAppLink(`Jaisalmer — ${pkg.title}`);

              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-[#0D1117] rounded-3xl border border-[#C9A24A]/30 overflow-hidden shadow-xl hover:border-[#C9A24A]/80 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-black/30" />
                    
                    <div className="absolute top-4 left-4 bg-[#080B0F]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#C9A24A]/40 text-[#C9A24A] text-[10px] font-bold tracking-wider">
                      {pkg.duration}
                    </div>

                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[9px] uppercase tracking-widest text-[#D8B982] font-semibold block">
                        {pkg.tagline}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-[#F5EDE0] leading-snug">
                        {pkg.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <p className="text-xs text-[#F5EDE0]/80 font-light leading-relaxed">
                      {pkg.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 pt-2 border-t border-[#C9A24A]/15">
                      <span className="text-[9px] uppercase font-bold text-[#C9A24A] tracking-wider block">
                        Package Inclusions
                      </span>
                      <div className="space-y-1.5">
                        {pkg.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#F5EDE0]/85 font-light">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24A] shrink-0" />
                            <span className="leading-snug">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-[#C9A24A]/20 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-[#F5EDE0]/70">Tariff</span>
                        <div className="text-right">
                          <span className="font-serif text-sm sm:text-base font-bold gold-text">
                            {pkg.startingPrice}
                          </span>
                          <span className="text-[9px] text-[#C9A24A]/70 block">
                            Customized per dates &amp; group
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedPkg(pkg)}
                          className="flex-1 py-3 rounded-full bg-[#080B0F] border border-[#C9A24A]/40 text-[#F5EDE0] hover:bg-[#C9A24A] hover:text-[#080B0F] font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer min-h-[44px] touch-manipulation active:scale-95"
                        >
                          <span>VIEW ITINERARY</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>

                        <a
                          href={pkgWaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md active:scale-95 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
                          aria-label={`Enquire ${pkg.title} on WhatsApp`}
                          title="Enquire on WhatsApp"
                        >
                          <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          04. EXPLORE JAISALMER (6 HIGHLIGHTS ONLY)
          ───────────────────────────────────────────────────────────── */}
      <section id="explore-highlights" className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/jaisalmer/web_Jaisalmer_fort_-17.jpg"
            alt=""
            className="w-full h-full object-cover brightness-[0.42]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050709]/94 via-[#050709]/62 to-[#050709]/94" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
              CURATED GLIMPSES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EDE0]">
              Explore Jaisalmer
            </h2>
            <p className="font-devanagari text-base text-[#D8B982]">
              स्वर्णिम नगरी की चुनिंदा झलकियाँ
            </p>
            <p className="text-xs sm:text-sm text-[#F5EDE0]/70 font-light max-w-xl">
              Six iconic landmarks capturing the spirit of Thar — from living fort ramparts and royal cenotaphs to sacred sanctums and sunset sand dunes.
            </p>
          </div>

          <Link
            to="/jaisalmer/explore"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0D1117] border border-[#C9A24A]/40 text-xs font-bold uppercase tracking-widest text-[#C9A24A] hover:bg-[#C9A24A] hover:text-[#080B0F] transition-all"
          >
            <span>All 18 Landmarks</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Highlight Cards Grid (3 x 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topSixPlaces.map((place, idx) => (
            <motion.article
              key={place.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#0D1117] rounded-3xl border border-[#C9A24A]/30 overflow-hidden shadow-xl hover:border-[#C9A24A]/80 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-[#080B0F]">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-black/30" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="bg-[#080B0F]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#C9A24A]/40 text-[#C9A24A] text-[9px] font-bold tracking-wider">
                    {place.category}
                  </span>
                  <span className="bg-[#080B0F]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[#F5EDE0]/80 text-[8px] font-bold uppercase">
                    {place.distanceTag}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <p className="font-devanagari text-xs text-[#D8B982] font-semibold">
                    {place.hindiName}
                  </p>
                  <h3 className="font-serif text-lg font-bold text-[#F5EDE0] group-hover:text-[#C9A24A] transition-colors leading-snug">
                    {place.name}
                  </h3>
                  <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed">
                    {place.shortDescription}
                  </p>

                  <div className="p-3 rounded-2xl bg-[#080B0F] border border-[#C9A24A]/20 space-y-1">
                    <span className="text-[9px] uppercase font-bold text-[#C9A24A] tracking-wider block">Why Visit</span>
                    <p className="text-[11px] text-[#F5EDE0]/85 font-light leading-snug">{place.whyVisit}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-[#C9A24A]/20 flex items-center justify-between">
                  <Link
                    to={`/jaisalmer/places/${place.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C9A24A] hover:text-white transition-colors"
                  >
                    <span>Explore Landmark</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <span className="text-[10px] text-[#F5EDE0]/50 font-mono">
                    📍 {place.locationLabel.split(',')[0]}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            05. EXPLORE ALL JAISALMER CTA BANNER
            ───────────────────────────────────────────────────────────── */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0D1117] via-[#121722] to-[#0D1117] border border-[#C9A24A]/40 text-center space-y-4 shadow-2xl">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A] block">
            COMPLETE DESTINATION DIRECTORY
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5EDE0]">
            Explore All 18 Jaisalmer Landmarks
          </h3>
          <p className="font-devanagari text-sm sm:text-base text-[#D8B982]">
            जैसलमेर के सभी दर्शनीय स्थल देखें
          </p>
          <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light max-w-2xl mx-auto leading-relaxed">
            Discover the complete collection: living medieval bastions, Prime Ministers' havelis, 12th-century Jain temples, desert national parks, and sacred border pilgrimage shrines.
          </p>
          <div className="pt-2">
            <Link
              to="/jaisalmer/explore"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#C9A24A] to-[#AA771C] text-[#05070A] font-bold text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all"
            >
              <span>EXPLORE ALL JAISALMER</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          06. THE STORY OF JAISALMER (SHORT EDITORIAL HISTORY HIGHLIGHT)
          ───────────────────────────────────────────────────────────── */}
      <section id="history-story" className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/jaisalmer/Jaisalmer Photos/bada bagh.jpeg" alt="" className="w-full h-full object-cover brightness-[0.32]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050709]/88 via-[#050709]/60 to-[#050709]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left 6 cols: Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
                  EIGHT CENTURIES OF FORTIFIED GLORY
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EDE0]">
                  The Story of the Golden City
                </h2>
                <p className="font-devanagari text-base text-[#D8B982]">
                  इतिहास, विरासत और राजसी परंपराओं की कहानी
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#F5EDE0]/80 font-light leading-relaxed">
                <p>
                  Founded in 1156 AD by Rawal Jaisal atop the triangular Trikuta Hill, Jaisalmer rose as a monumental sandstone citadel protecting the Bhati Rajput kingdom and controlling ancient overland Silk Route trade between Delhi, Gujarat, and Central Asia.
                </p>
                <p>
                  Through centuries of desert resilience, legendary sieges, and diplomatic treaties, Jaisalmer preserved its living heritage—fostering the world's most intricate sandstone architecture and an unbroken cultural tradition that continues today.
                </p>
              </div>

              {/* 4 Milestones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-[#0D1117] border border-[#C9A24A]/20 space-y-1">
                  <span className="text-[10px] font-mono text-[#C9A24A] font-bold">1156 AD</span>
                  <h4 className="font-serif text-xs font-bold text-[#F5EDE0]">Foundation of Sonar Qila</h4>
                  <p className="text-[11px] text-[#F5EDE0]/70 font-light leading-snug">Consecrated by Rawal Jaisal on Trikuta Hill.</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#0D1117] border border-[#C9A24A]/20 space-y-1">
                  <span className="text-[10px] font-mono text-[#C9A24A] font-bold">SILK ROUTE</span>
                  <h4 className="font-serif text-xs font-bold text-[#F5EDE0]">Caravan Prosperity</h4>
                  <p className="text-[11px] text-[#F5EDE0]/70 font-light leading-snug">Merchant wealth built carved havelis &amp; temple vaults.</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#0D1117] border border-[#C9A24A]/20 space-y-1">
                  <span className="text-[10px] font-mono text-[#C9A24A] font-bold">LIVING FORT</span>
                  <h4 className="font-serif text-xs font-bold text-[#F5EDE0]">99 Bastions</h4>
                  <p className="text-[11px] text-[#F5EDE0]/70 font-light leading-snug">Over 4,000 residents preserve living traditions.</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#0D1117] border border-[#C9A24A]/20 space-y-1">
                  <span className="text-[10px] font-mono text-[#C9A24A] font-bold">BHATI RIYASAT</span>
                  <h4 className="font-serif text-xs font-bold text-[#F5EDE0]">Royal Heritage</h4>
                  <p className="text-[11px] text-[#F5EDE0]/70 font-light leading-snug">Centuries of sacred patronage and cultural trusteeship.</p>
                </div>
              </div>

              {/* 07. Full History Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/jaisalmer/history"
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C9A24A] to-[#AA771C] text-[#05070A] font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
                >
                  <span>EXPLORE FULL HISTORY &amp; RIYASAT</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/jaisalmer/riyasat"
                  className="px-5 py-3.5 rounded-full bg-[#0D1117] border border-[#C9A24A]/40 text-[#F5EDE0] hover:text-[#C9A24A] font-semibold text-xs uppercase tracking-wider active:scale-95 transition-all flex items-center gap-1.5"
                >
                  <Crown className="w-4 h-4 text-[#C9A24A]" />
                  <span>The Riyasat Portal</span>
                </Link>
              </div>
            </div>

            {/* Right 6 cols: Visual Frame */}
            <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl border border-[#C9A24A]/30 aspect-[16/11]">
              <img
                src="/assets/optimized/jaisalmer-fort-palace-1920.webp"
                alt="Jaisalmer Fort Palace Architecture"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B0F]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#080B0F]/85 backdrop-blur-md border border-[#C9A24A]/30">
                <span className="text-[9px] uppercase font-bold tracking-widest text-[#C9A24A] block">
                  RAJ MAHAL &amp; LIVING CITADEL
                </span>
                <p className="text-xs sm:text-sm text-[#F5EDE0] font-medium mt-0.5">
                  Seven stories of yellow sandstone history overlooking the Thar Desert.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          08. CULTURE / SPIRITUALITY / DESERT (SHORT EDITORIAL OVERVIEW)
          ───────────────────────────────────────────────────────────── */}
      <section id="living-traditions" className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/jaisalmer/web_DJI_0742.jpg"
            alt=""
            className="w-full h-full object-cover brightness-[0.44]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050709]/92 via-[#050709]/62 to-[#050709]/92" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
            SPIRITUALITY, DESERT &amp; FOLK CULTURE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EDE0]">
            The Living Soul of the Desert
          </h2>
          <p className="font-devanagari text-lg text-[#D8B982]">
            आस्था, संगीत और थार का अनंत विस्तार
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Sacred Sanctuaries */}
          <div className="p-6 rounded-3xl bg-[#0D1117] border border-[#C9A24A]/25 space-y-4 hover:border-[#C9A24A]/70 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#080B0F] border border-[#C9A24A]/40 flex items-center justify-center text-[#C9A24A]">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#F5EDE0]">Sacred Shrines &amp; Tirths</h3>
              <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed">
                Take unhurried darshan at Shri Laxminath Ji, the 7 Fort Jain Temples, Lodruva, and miraculous border pilgrimages like Tanot Mata and Ramdevra.
              </p>
            </div>
            <Link to="/jaisalmer/places/laxminath-ji" className="text-xs font-bold text-[#C9A24A] hover:text-white inline-flex items-center gap-1">
              <span>Darshan Guidance</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Thar Desert */}
          <div className="p-6 rounded-3xl bg-[#0D1117] border border-[#C9A24A]/25 space-y-4 hover:border-[#C9A24A]/70 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#080B0F] border border-[#C9A24A]/40 flex items-center justify-center text-[#C9A24A]">
                <Tent className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#F5EDE0]">Thar Dunes &amp; Glamping</h3>
              <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed">
                Experience golden hour camel treks across wind ripples, Swiss luxury glamping tents in Sam dunes, and dark sky stargazing under the Milky Way.
              </p>
            </div>
            <Link to="/jaisalmer/places/sam-dunes" className="text-xs font-bold text-[#C9A24A] hover:text-white inline-flex items-center gap-1">
              <span>Desert Experiences</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Folk Music */}
          <div className="p-6 rounded-3xl bg-[#0D1117] border border-[#C9A24A]/25 space-y-4 hover:border-[#C9A24A]/70 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#080B0F] border border-[#C9A24A]/40 flex items-center justify-center text-[#C9A24A]">
                <Music4 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#F5EDE0]">Manganiyar Melodies</h3>
              <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed">
                Hear soul-stirring oral lineages on the Kamaicha and Khartal by campfire light, celebrating centuries of Rajasthan's musical heritage.
              </p>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#C9A24A] hover:text-white inline-flex items-center gap-1">
              <span>Cultural Evenings</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          09. STAY STYLES & HOW TO REACH
          ───────────────────────────────────────────────────────────── */}
      <section id="stay-and-travel" className="relative py-16 sm:py-24 overflow-hidden bg-[#080B0F] border-y border-[#C9A24A]/20">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/jaisalmer/web_DJI_0661.JPG"
            alt=""
            className="w-full h-full object-cover brightness-[0.38]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050709]/94 via-[#050709]/66 to-[#050709]/94" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
              ACCOMMODATION &amp; LOGISTICS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5EDE0]">
              Where to Stay &amp; Getting Here
            </h2>
          </div>

          {/* 4 Stay Styles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-[#0D1117] border border-[#C9A24A]/25 space-y-2">
              <Landmark className="w-5 h-5 text-[#C9A24A]" />
              <h3 className="font-serif text-base font-bold text-[#F5EDE0]">Heritage Havelis</h3>
              <p className="text-xs text-[#F5EDE0]/75 font-light">Restored stone mansions with carved courtyards and rooftop fort views.</p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0D1117] border border-[#C9A24A]/25 space-y-2">
              <Tent className="w-5 h-5 text-[#C9A24A]" />
              <h3 className="font-serif text-base font-bold text-[#F5EDE0]">Desert Glamping Camps</h3>
              <p className="text-xs text-[#F5EDE0]/75 font-light">Luxury Swiss tents in Sam dunes with private en-suite tiled bathrooms.</p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0D1117] border border-[#C9A24A]/25 space-y-2">
              <Users className="w-5 h-5 text-[#C9A24A]" />
              <h3 className="font-serif text-base font-bold text-[#F5EDE0]">City Heritage Resorts</h3>
              <p className="text-xs text-[#F5EDE0]/75 font-light">Spacious properties with elevator access ideal for multi-generational families.</p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0D1117] border border-[#C9A24A]/25 space-y-2">
              <Heart className="w-5 h-5 text-[#C9A24A]" />
              <h3 className="font-serif text-base font-bold text-[#F5EDE0]">Pilgrim Guest Stays</h3>
              <p className="text-xs text-[#F5EDE0]/75 font-light">Clean, peaceful accommodations with pure vegetarian/sattvik dining options.</p>
            </div>
          </div>

          {/* How to Reach Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#C9A24A]/20">
            <div className="p-6 rounded-3xl bg-[#0D1117] border border-[#C9A24A]/25 space-y-2">
              <div className="flex items-center gap-2 text-[#C9A24A]">
                <Plane className="w-5 h-5" />
                <h4 className="font-serif text-base font-bold text-[#F5EDE0]">By Air</h4>
              </div>
              <p className="text-xs text-[#F5EDE0]/75 font-light">Jaisalmer Airport (JSA) operates seasonal domestic flights. Jodhpur Airport (JDH) is ~280 km away.</p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0D1117] border border-[#C9A24A]/25 space-y-2">
              <div className="flex items-center gap-2 text-[#C9A24A]">
                <Train className="w-5 h-5" />
                <h4 className="font-serif text-base font-bold text-[#F5EDE0]">By Train</h4>
              </div>
              <p className="text-xs text-[#F5EDE0]/75 font-light">Jaisalmer Railway Station (JSM) offers direct express train connectivity from Delhi, Jaipur, Jodhpur, and Mumbai.</p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0D1117] border border-[#C9A24A]/25 space-y-2">
              <div className="flex items-center gap-2 text-[#C9A24A]">
                <Car className="w-5 h-5" />
                <h4 className="font-serif text-base font-bold text-[#F5EDE0]">By Highway</h4>
              </div>
              <p className="text-xs text-[#F5EDE0]/75 font-light">Smooth highways: Jodhpur (4.5 hrs), Bikaner (5.5 hrs), Jaipur (9 hrs). Sanitized chauffeur SUVs arranged on request.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. PHOTOGRAPHIC GALLERY & LIGHTBOX
          ───────────────────────────────────────────────────────────── */}
      <section id="gallery" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
              VISUAL ARCHIVE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5EDE0]">
              Jaisalmer Visual Archive
            </h2>
          </div>

          <Link
            to="/gallery"
            className="text-xs font-bold uppercase tracking-wider text-[#C9A24A] hover:text-white transition-colors"
          >
            Full Archive →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACTIVE_JOURNEY.gallery.slice(0, 6).map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setSelectedGalleryItem(item)}
              className="group relative w-full text-left rounded-3xl overflow-hidden shadow-2xl border border-[#C9A24A]/30 hover:border-[#C9A24A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A24A] cursor-pointer bg-[#0D1117] h-64 sm:h-72"
            >
              <img
                src={item.thumbnail || item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B0F]/90 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                <span className="px-2.5 py-0.5 text-[8px] uppercase font-bold tracking-widest bg-[#C9A24A] text-[#080B0F] rounded-full w-max mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-sm font-bold text-[#F5EDE0]">{item.title}</h3>
              </div>
            </button>
          ))}
        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          11. FREQUENTLY ASKED QUESTIONS
          ───────────────────────────────────────────────────────────── */}
      <section id="faqs" className="py-16 sm:py-24 bg-[#080B0F] border-y border-[#C9A24A]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
              TRAVEL PLANNING FAQS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5EDE0]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#F5EDE0]/70 font-light">
              Essential facts, distance guidelines, and booking details for Jaisalmer.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'How many days are recommended to explore Jaisalmer properly?',
                answer: 'A duration of 3 Days / 2 Nights or 4 Days / 3 Nights is ideal to comfortably explore Sonar Qila fort, Patwon Haveli, Gadisar Lake, and spend an overnight stay at Sam Sand Dunes without rushing.'
              },
              {
                question: 'Are destinations like Tanot Mata and Ramdevra inside Jaisalmer city?',
                answer: 'No. Tanot Mata Temple is located approximately 120 km from Jaisalmer near the border, while Ramdevra is located approximately 118 km on the Jodhpur highway. Both are curated as dedicated full-day chauffeured excursions.'
              },
              {
                question: 'Can the itinerary be tailored for senior citizens or vegetarian dietary needs?',
                answer: 'Yes. All our itineraries can be customized with senior-friendly pacing, accessible hotel rooms, sanitized chauffeur vehicles, and pure vegetarian / Jain / sattvik dining arrangements.'
              },
              {
                question: 'What is the best time of year to visit Jaisalmer?',
                answer: 'October to March offers pleasant desert winters with daytime temperatures of 20°C–26°C, making it the most comfortable season for fort walks and desert camping.'
              },
              {
                question: 'How do I enquire about customized pricing and itineraries?',
                answer: 'You can submit your travel dates through our Plan Journey form or speak directly with our travel coordinator on WhatsApp to receive tailored itinerary options.'
              }
            ].map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#0D1117] border border-[#C9A24A]/25 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <span className="font-serif text-sm sm:text-base font-bold text-[#F5EDE0]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#C9A24A] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 text-xs sm:text-sm text-[#F5EDE0]/80 font-light leading-relaxed border-t border-[#C9A24A]/10 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          12. FINAL CINEMATIC CTA
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 relative overflow-hidden bg-[#080B0F] border-t border-[#C9A24A]/30">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/jaisalmer/web_DSC_0273.JPG"
            alt=""
            className="w-full h-full object-cover brightness-[0.48]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050709]/86 via-[#050709]/58 to-[#050709]/90" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          
          <div className="space-y-3">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
              YOUR MEMORABLE JOURNEY AWAITS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F5EDE0] leading-tight">
              Begin Your Jaisalmer Pilgrimage &amp; Heritage Trail
            </h2>
            <p className="font-devanagari text-lg text-[#D8B982]">
              पधारो म्हारे देश — हम आपकी यात्रा को अविस्मरणीय बनाएंगे।
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light max-w-xl mx-auto leading-relaxed">
            Whether you seek peaceful temple darshans, private guided fort walks, or unforgettable desert camp nights, Shri Radha Vallabh curates every detail with reverence and personal care.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to={planUrl}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C9A24A] to-[#AA771C] text-[#05070A] font-bold text-xs uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all"
            >
              PLAN YOUR CUSTOM JOURNEY
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[#080B0F] border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold text-xs uppercase tracking-widest active:scale-95 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>CHAT ON WHATSAPP</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-[11px] text-[#F5EDE0]/60 font-light">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9A24A]" />
              Sanitized Chauffeur SUVs
            </span>
            <span className="flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-[#C9A24A]" />
              Senior-Citizen Comfort Pacing
            </span>
            <span className="flex items-center gap-1.5">
              <Utensils className="w-3.5 h-3.5 text-[#C9A24A]" />
              Pure Vegetarian / Sattvik Dining
            </span>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MODALS
          ───────────────────────────────────────────────────────────── */}
      {selectedPkg && (
        <PackageModal
          pkg={selectedPkg}
          onClose={() => setSelectedPkg(null)}
        />
      )}

      {selectedGalleryItem && (
        <GalleryLightbox
          item={selectedGalleryItem}
          onClose={() => setSelectedGalleryItem(null)}
        />
      )}

    </div>
  );
};
