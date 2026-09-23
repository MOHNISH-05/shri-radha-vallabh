import React, { useState } from 'react';
import { preload } from 'react-dom';
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
  Calendar,
  Sunset,
} from 'lucide-react';
import { JAISALMER_PLACES } from '../data/jaisalmerPlaces';
import { JAISALMER_EXPERIENCES } from '../data/jaisalmerExperiences';
import { ACTIVE_JOURNEY } from '../data/journeys';
import type { Package } from '../data/journeys';
import {
  PACKAGE_TIERS_LIST,
  PRICE_DISCLAIMER,
  TRAVEL_TYPES_LIST,
  formatPackagePrice,
  getTravelType,
} from '../data/jaisalmerPackages';
import type { TravelTypeKey } from '../data/jaisalmerPackages';
import { JAISALMER_TRAVEL_FAQS } from '../data/seoContent';
import { PackageModal } from '../components/PackageModal';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { getJourneyWhatsAppLink, getPackageWhatsAppLink, getWhatsAppLink } from '../data/siteConfig';

preload('/assets/optimized/laxminath-hero.webp', {
  as: 'image',
  fetchPriority: 'high',
  type: 'image/webp',
});

export const JaisalmerPage: React.FC = () => {
  const [selectedPkg, setSelectedPkg] = useState<Package | null>(null);
  const [packageAudience, setPackageAudience] = useState<TravelTypeKey>('couple');
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
    { id: 'safari-adventure', label: 'Safari & Adventure' },
    { id: 'history-story', label: 'The Story' },
    { id: 'living-traditions', label: 'Sacred & Living Culture' },
    { id: 'food-and-flavours', label: 'Food' },
    { id: 'stay-and-travel', label: 'Stay & Travel' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'faqs', label: 'FAQs' },
  ];

  return (
    <div className="min-h-screen bg-[#050709] text-[#F5EDE0] selection:bg-[#C9A24A]/30 perf-defer-sections">
      
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
            fetchPriority="high"
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

      <section id="food-and-flavours" className="border-y border-[#C9A24A]/20 bg-[#0B0E13] py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">Food &amp; Flavours</span>
            <h2 className="font-serif text-3xl font-bold text-[#F5EDE0] sm:text-4xl">Food &amp; Flavours of the Golden City</h2>
            <p className="font-devanagari text-lg text-[#D8B982]" lang="hi">जैसलमेर का स्वाद — कचोरी, लस्सी और मरुस्थलीय ज़ायका</p>
            <p className="max-w-3xl text-sm font-light leading-7 text-[#F5EDE0]/72">Discover Ghotua, kachori, dal pakwan, Makhaniya Lassi and hot jalebi through a practical guide to Jaisalmer's local food culture.</p>
            <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-wider text-[#D8B982]">
              {['Ghotua', 'Kachori', 'Dal Pakwan', 'Makhaniya Lassi', 'Jalebi'].map((item) => <span key={item} className="rounded-full border border-[#C9A24A]/30 bg-[#080B0F] px-3 py-2">{item}</span>)}
            </div>
          </div>
          <Link to="/jaisalmer/food" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#C9A24A] px-7 py-4 text-[10px] font-bold uppercase tracking-widest text-[#050709] transition hover:brightness-110">
            Explore Jaisalmer Food <ArrowUpRight className="h-4 w-4" />
          </Link>
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
          <img
            src="/assets/optimized/jaisalmer-fort-1280.webp"
            srcSet="/assets/optimized/jaisalmer-fort-1280.webp 1280w, /assets/optimized/jaisalmer-fort-1920.webp 1920w"
            sizes="100vw"
            alt=""
            className="w-full h-full object-cover brightness-[0.32]"
            loading="lazy"
            decoding="async"
          />
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
              src="/assets/optimized/jaisalmer-fort-1280.webp"
              srcSet="/assets/optimized/jaisalmer-fort-1280.webp 1280w, /assets/optimized/jaisalmer-fort-1920.webp 1920w"
              sizes="(min-width: 1024px) 40vw, 100vw"
              alt="Jaisalmer Fort Yellow Sandstone Architecture"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
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
          03. CURATED JAISALMER JOURNEYS (NEW VERIFIED PACKAGE SYSTEM)
          ───────────────────────────────────────────────────────────── */}
      <section id="packages" className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/jaisalmer/Jaisalmer Photos/patawa haveli1.jpeg"
            alt=""
            className="w-full h-full object-cover brightness-[0.28]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050709]/90 via-[#050709]/70 to-[#050709]/92" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
                CURATED TRAVEL EXPERIENCES · 3N/4D TIERS &amp; CUSTOM
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EDE0]">
                Curated Jaisalmer Journeys
              </h2>
              <p className="font-devanagari text-base text-[#D8B982]">
                हर यात्रा की अपनी एक कहानी है — युगल, परिवार, बैचलर एवं समूह।
              </p>
              <p className="text-xs sm:text-sm text-[#F5EDE0]/70 font-light max-w-xl">
                Thoughtfully paced itineraries blending living heritage, private guided fort walks, sacred temple visits, and luxury desert glamping.
              </p>
            </div>

            <Link
              to="/packages"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C9A24A] hover:text-white transition-colors"
            >
              <span>View All Packages &amp; Compare Tiers</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Audience Filter Pills */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#080B0F]/90 border border-[#C9A24A]/30">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C9A24A] shrink-0">
                TRAVELLING WITH:
              </span>
              <span className="text-xs text-[#F5EDE0]/80 hidden md:inline">
                {getTravelType(packageAudience).tagline}
              </span>
            </div>

            <div className="inline-flex p-1 rounded-full bg-[#0D1117] border border-[#C9A24A]/30 flex-wrap gap-1">
              {TRAVEL_TYPES_LIST.map((type) => {
                const isSel = type.id === packageAudience;
                return (
                  <button
                    key={type.id}
                    onClick={() => setPackageAudience(type.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer min-h-[36px] ${
                      isSel
                        ? 'bg-[#C9A24A] text-[#050709] shadow-md'
                        : 'text-[#F5EDE0]/70 hover:text-[#C9A24A]'
                    }`}
                  >
                    <span>{type.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Package Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Gorbandh (Basic) */}
            {(() => {
              const tier = PACKAGE_TIERS_LIST[0]; // Gorbandh
              const audLabel = getTravelType(packageAudience).label;
              const pkgWaUrl = getPackageWhatsAppLink(audLabel, tier.name, 'Jaisalmer 3 Nights / 4 Days', formatPackagePrice(tier.startingPricePerPerson), '/jaisalmer');

              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-[#0D1117] rounded-3xl border border-[#C9A24A]/30 overflow-hidden shadow-xl hover:border-[#C9A24A]/80 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={tier.image}
                      alt={tier.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-black/30" />
                    <div className="absolute top-4 left-4 bg-[#C9A24A] text-[#050709] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                      {tier.tier}
                    </div>
                    <div className="absolute top-4 right-4 bg-[#080B0F]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#C9A24A]/40 text-[#D8B982] text-[10px] font-bold tracking-wider flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#C9A24A]" />
                      <span>3N / 4D</span>
                    </div>
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[9px] uppercase tracking-widest text-[#C9A24A] font-bold block">
                        {tier.tagline}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-[#F5EDE0] leading-snug">
                        {tier.name}
                      </h3>
                      <span className="font-devanagari text-xs text-[#D8B982]/80">{tier.hindiName}</span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <p className="text-xs text-[#F5EDE0]/80 font-light leading-relaxed">
                      {tier.description}
                    </p>
                    <div className="space-y-2 pt-2 border-t border-[#C9A24A]/15">
                      <span className="text-[9px] uppercase font-bold text-[#C9A24A] tracking-wider block">
                        Included Highlights
                      </span>
                      <div className="space-y-1.5">
                        {tier.inclusionsSummary.slice(0, 3).map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#F5EDE0]/85 font-light">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24A] shrink-0" />
                            <span className="leading-snug">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#C9A24A]/20 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-[#F5EDE0]/70">Tariff</span>
                        <div className="text-right">
                          <span className="font-serif text-sm sm:text-base font-bold gold-text">{formatPackagePrice(tier.startingPricePerPerson)}</span>
                          <span className="text-[9px] text-[#C9A24A]/70 block">Verified starting tariff</span>
                        </div>
                      </div>
                      <p className="text-[9px] leading-relaxed text-[#F5EDE0]/55">{PRICE_DISCLAIMER}</p>
                      <div className="flex items-center gap-2">
                        <Link
                          to={`/packages/jaisalmer-3-nights-4-days?type=${packageAudience}&tier=${tier.id}`}
                          className="flex-1 py-3 rounded-full bg-[#080B0F] border border-[#C9A24A]/40 text-[#F5EDE0] hover:bg-[#C9A24A] hover:text-[#080B0F] font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer min-h-[44px] touch-manipulation active:scale-95"
                        >
                          <span>VIEW ITINERARY</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                        <a
                          href={pkgWaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md active:scale-95 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
                          aria-label={`Enquire ${tier.name} on WhatsApp`}
                        >
                          <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}

            {/* 2. Morchan (Deluxe) */}
            {(() => {
              const tier = PACKAGE_TIERS_LIST[2]; // Morchan
              const audLabel = getTravelType(packageAudience).label;
              const pkgWaUrl = getPackageWhatsAppLink(audLabel, tier.name, 'Jaisalmer 3 Nights / 4 Days', formatPackagePrice(tier.startingPricePerPerson), '/jaisalmer');

              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-[#0D1117] rounded-3xl border border-[#C9A24A]/45 overflow-hidden shadow-xl hover:border-[#C9A24A] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={tier.image}
                      alt={tier.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-black/30" />
                    <div className="absolute top-4 left-4 bg-[#C9A24A] text-[#050709] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                      {tier.tier}
                    </div>
                    <div className="absolute top-4 right-4 bg-[#080B0F]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#C9A24A]/40 text-[#D8B982] text-[10px] font-bold tracking-wider flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#C9A24A]" />
                      <span>3N / 4D</span>
                    </div>
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[9px] uppercase tracking-widest text-[#C9A24A] font-bold block">
                        {tier.tagline}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-[#F5EDE0] leading-snug">
                        {tier.name}
                      </h3>
                      <span className="font-devanagari text-xs text-[#D8B982]/80">{tier.hindiName}</span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <p className="text-xs text-[#F5EDE0]/80 font-light leading-relaxed">
                      {tier.description}
                    </p>
                    <div className="space-y-2 pt-2 border-t border-[#C9A24A]/15">
                      <span className="text-[9px] uppercase font-bold text-[#C9A24A] tracking-wider block">
                        Included Highlights
                      </span>
                      <div className="space-y-1.5">
                        {tier.inclusionsSummary.slice(0, 3).map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#F5EDE0]/85 font-light">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24A] shrink-0" />
                            <span className="leading-snug">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#C9A24A]/20 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-[#F5EDE0]/70">Tariff</span>
                        <div className="text-right">
                          <span className="font-serif text-sm sm:text-base font-bold gold-text">{formatPackagePrice(tier.startingPricePerPerson)}</span>
                          <span className="text-[9px] text-[#C9A24A]/70 block">Verified starting tariff</span>
                        </div>
                      </div>
                      <p className="text-[9px] leading-relaxed text-[#F5EDE0]/55">{PRICE_DISCLAIMER}</p>
                      <div className="flex items-center gap-2">
                        <Link
                          to={`/packages/jaisalmer-3-nights-4-days?type=${packageAudience}&tier=${tier.id}`}
                          className="flex-1 py-3 rounded-full bg-[#080B0F] border border-[#C9A24A]/40 text-[#F5EDE0] hover:bg-[#C9A24A] hover:text-[#080B0F] font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer min-h-[44px] touch-manipulation active:scale-95"
                        >
                          <span>VIEW ITINERARY</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                        <a
                          href={pkgWaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md active:scale-95 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
                          aria-label={`Enquire ${tier.name} on WhatsApp`}
                        >
                          <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}

            {/* 3. Maharawal (Executive) */}
            {(() => {
              const tier = PACKAGE_TIERS_LIST[4]; // Maharawal
              const audLabel = getTravelType(packageAudience).label;
              const pkgWaUrl = getPackageWhatsAppLink(audLabel, tier.name, 'Jaisalmer 3 Nights / 4 Days', formatPackagePrice(tier.startingPricePerPerson), '/jaisalmer');

              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-[#0D1117] rounded-3xl border border-[#C9A24A]/60 overflow-hidden shadow-xl hover:border-[#C9A24A] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={tier.image}
                      alt={tier.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-black/30" />
                    <div className="absolute top-4 left-4 bg-[#C9A24A] text-[#050709] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-1">
                      <Crown className="w-3 h-3" />
                      <span>{tier.tier}</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-[#080B0F]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#C9A24A]/40 text-[#D8B982] text-[10px] font-bold tracking-wider flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#C9A24A]" />
                      <span>3N / 4D</span>
                    </div>
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[9px] uppercase tracking-widest text-[#C9A24A] font-bold block">
                        {tier.tagline}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-[#F5EDE0] leading-snug">
                        {tier.name}
                      </h3>
                      <span className="font-devanagari text-xs text-[#D8B982]/80">{tier.hindiName}</span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <p className="text-xs text-[#F5EDE0]/80 font-light leading-relaxed">
                      {tier.description}
                    </p>
                    <div className="space-y-2 pt-2 border-t border-[#C9A24A]/15">
                      <span className="text-[9px] uppercase font-bold text-[#C9A24A] tracking-wider block">
                        Included Highlights
                      </span>
                      <div className="space-y-1.5">
                        {tier.inclusionsSummary.slice(0, 3).map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#F5EDE0]/85 font-light">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24A] shrink-0" />
                            <span className="leading-snug">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#C9A24A]/20 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-[#F5EDE0]/70">Tariff</span>
                        <div className="text-right">
                          <span className="font-serif text-sm sm:text-base font-bold gold-text">{formatPackagePrice(tier.startingPricePerPerson)}</span>
                          <span className="text-[9px] text-[#C9A24A]/70 block">Verified starting tariff</span>
                        </div>
                      </div>
                      <p className="text-[9px] leading-relaxed text-[#F5EDE0]/55">{PRICE_DISCLAIMER}</p>
                      <div className="flex items-center gap-2">
                        <Link
                          to={`/packages/jaisalmer-3-nights-4-days?type=${packageAudience}&tier=${tier.id}`}
                          className="flex-1 py-3 rounded-full bg-[#080B0F] border border-[#C9A24A]/40 text-[#F5EDE0] hover:bg-[#C9A24A] hover:text-[#080B0F] font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer min-h-[44px] touch-manipulation active:scale-95"
                        >
                          <span>VIEW ITINERARY</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                        <a
                          href={pkgWaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md active:scale-95 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
                          aria-label={`Enquire ${tier.name} on WhatsApp`}
                        >
                          <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}

            {/* 4. Thar Soul 1-Day Sunset Safari */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#0D1117] rounded-3xl border border-[#C9A24A]/35 overflow-hidden shadow-xl hover:border-[#C9A24A]/80 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/jaisalmer/safari/camel-safari/camel-safari-jaisalmer.webp"
                  alt="Thar Soul Sunset Safari"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-black/30" />
                <div className="absolute top-4 left-4 bg-[#C9A24A] text-[#050709] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-1">
                  <Sunset className="w-3 h-3" />
                  <span>DEDICATED SAFARI</span>
                </div>
                <div className="absolute top-4 right-4 bg-[#080B0F]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#C9A24A]/40 text-[#D8B982] text-[10px] font-bold tracking-wider">
                  2:30 PM – 9:30 PM
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[9px] uppercase tracking-widest text-[#C9A24A] font-bold block">
                    PURE THAR MAGIC · 1 DAY
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#F5EDE0] leading-snug">
                    Thar Soul — Sunset Safari
                  </h3>
                  <span className="font-devanagari text-xs text-[#D8B982]/80">थार सोल — सूर्यास्त सफारी</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-xs text-[#F5EDE0]/80 font-light leading-relaxed">
                  An unhurried afternoon desert trail through untouched dunes. Features desert village life, traditional chai &amp; snacks, camel trek, and golden sunset.
                </p>
                <div className="space-y-2 pt-2 border-t border-[#C9A24A]/15">
                  <span className="text-[9px] uppercase font-bold text-[#C9A24A] tracking-wider block">
                    Safari Highlights
                  </span>
                  <div className="space-y-1.5">
                    {['Desert Village Cultural Walk', 'Warm Chai & Local Savouries', 'Sunset Camel Safari on Dunes'].map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#F5EDE0]/85 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24A] shrink-0" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#C9A24A]/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-[#F5EDE0]/70">Tariff</span>
                    <div className="text-right">
                      <span className="font-serif text-sm sm:text-base font-bold gold-text">Price on Request</span>
                      <span className="text-[9px] text-[#C9A24A]/70 block">Afternoon 7-hour experience</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      to="/safari/thar-soul"
                      className="flex-1 py-3 rounded-full bg-[#080B0F] border border-[#C9A24A]/40 text-[#F5EDE0] hover:bg-[#C9A24A] hover:text-[#080B0F] font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer min-h-[44px] touch-manipulation active:scale-95"
                    >
                      <span>VIEW SAFARI</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={getJourneyWhatsAppLink('Jaisalmer — Thar Soul 1-Day Sunset Safari')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md active:scale-95 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
                      aria-label="Enquire Thar Soul on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 5. Custom Tailor-Made Package Card (Any Group, Couple, Bachelor, Family) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="bg-gradient-to-br from-[#0D1117] via-[#121927] to-[#080B0F] rounded-3xl border-2 border-[#C9A24A] overflow-hidden shadow-2xl flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/jaisalmer/Jaisalmer Photos/bada bagh.jpeg"
                  alt="Custom Jaisalmer Package"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/40 to-transparent" />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#C9A24A] to-[#AA771C] text-[#050709] px-3.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-1 shadow-lg">
                  <Sparkles className="w-3 h-3" />
                  <span>ANY GROUP OR COUPLE</span>
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[9px] uppercase tracking-widest text-[#C9A24A] font-bold block">
                    TAILORED TO YOUR WISHES
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#F5EDE0] leading-snug">
                    Bespoke Custom Package
                  </h3>
                  <span className="font-devanagari text-xs text-[#D8B982]/80">कस्टम टूर पैकेज — आपकी पसंद, आपका समय</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-xs text-[#F5EDE0]/85 font-light leading-relaxed">
                  Design your exact trip — whether a quiet romantic couple getaway, a joyful family vacation with kids &amp; elders, an adventurous bachelor crew dune trip, or a large group / corporate pilgrimage.
                </p>
                <div className="space-y-2 pt-2 border-t border-[#C9A24A]/25">
                  <span className="text-[9px] uppercase font-bold text-[#C9A24A] tracking-wider block">
                    Custom Options
                  </span>
                  <div className="space-y-1.5">
                    {[
                      'Couple · Family · Bachelor · Large Group',
                      'Choice of 2N, 3N, 4N, or 5N+ nights',
                      'Heritage Haveli, Luxury Camp, or Royal Palace',
                      'Private AC Sedan, Innova Crysta, or Tempo',
                    ].map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#F5EDE0]/90 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24A] shrink-0" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#C9A24A]/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-[#F5EDE0]/70">Tariff</span>
                    <div className="text-right">
                      <span className="font-serif text-sm sm:text-base font-bold text-[#C9A24A]">Custom Quote</span>
                      <span className="text-[9px] text-[#C9A24A]/70 block">Tailored to party size &amp; dates</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      to="/packages#custom-package-builder"
                      className="flex-1 py-3 rounded-full bg-[#C9A24A] hover:bg-[#AA771C] text-[#050709] font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer min-h-[44px] shadow-lg active:scale-95"
                    >
                      <span>CUSTOMIZE PACKAGE</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={getWhatsAppLink(`Namaste Shri Radha Vallabh 🙏\nI want to discuss a customized Jaisalmer package for my upcoming journey (${getTravelType(packageAudience).label}).`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md active:scale-95 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
                      aria-label="Enquire custom package on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 6. View All 5 Tiers & Spiritual Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#080B0F]/90 rounded-3xl border border-[#C9A24A]/30 overflow-hidden shadow-xl p-6 flex flex-col justify-between space-y-6 hover:border-[#C9A24A]/70 transition-all"
            >
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C9A24A] block">
                  ALL 5 TIERS &amp; PILGRIMAGES
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#F5EDE0]">
                  Explore All Packages
                </h3>
                <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed">
                  Compare all 5 Jaisalmer confirmed tiers (Gorbandh, Jharokha, Morchan, Leheriya, Maharawal) and explore spiritual pilgrimage circuits including Char Dham, Vrindavan, and Ayodhya &amp; Kashi.
                </p>
                <div className="space-y-2 pt-2">
                  {['All 5 Jaisalmer Tiers Compared', 'Custom Itinerary Builder', 'Char Dham & Vrindavan Yatras', 'Human Coordinator Support'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#D8B982]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24A]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#C9A24A]/20">
                <Link
                  to="/packages"
                  className="w-full py-3.5 rounded-full bg-[#080B0F] border border-[#C9A24A] text-[#C9A24A] hover:bg-[#C9A24A] hover:text-[#050709] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md"
                >
                  <span>Open Full Packages Portal</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href={getWhatsAppLink('Namaste Shri Radha Vallabh 🙏\nI would like to explore all Jaisalmer tour packages and custom options.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-[#0D1117] border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Coordinator</span>
                </a>
              </div>
            </motion.div>
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
          05. DESERT SAFARI & ADVENTURE (EXPERIENCE PREVIEW)
          ───────────────────────────────────────────────────────────── */}
      <section id="safari-adventure" className="relative overflow-hidden bg-[#080B0F] py-16 sm:py-24">
        <div className="absolute inset-0 opacity-25" aria-hidden="true">
          <img src="/images/jaisalmer/safari/hero/jaisalmer-safari-hero.webp" alt="" width={1920} height={1276} sizes="100vw" className="h-full w-full object-cover" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080B0F] via-[#080B0F]/60 to-[#080B0F]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">THAR EXPERIENCES</p>
              <h2 className="font-serif text-3xl font-bold text-[#F5EDE0] sm:text-4xl lg:text-5xl">Desert Safari &amp; Adventure</h2>
              <p className="font-devanagari text-base text-[#D8B982]" lang="hi">थार का रोमांच</p>
              <p className="text-xs font-light leading-6 text-[#F5EDE0]/72 sm:text-sm">Experience Jaisalmer beyond its monuments through carefully arranged journeys into the Thar—from traditional camel safaris and locally coordinated jeep rides to desert camps, cultural evenings and quiet nights beneath the stars.</p>
            </div>
            <Link to="/jaisalmer/safari-adventure" className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-[#C9A24A]/45 bg-[#0D1117] px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-[#C9A24A] transition-all hover:bg-[#C9A24A] hover:text-[#050709]">Explore all desert experiences <ArrowUpRight className="h-4 w-4" /></Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            {JAISALMER_EXPERIENCES.map((experience, index) => (
              <motion.article key={experience.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: Math.min(index, 2) * 0.08 }} className={`group overflow-hidden rounded-3xl border border-[#C9A24A]/25 bg-[#0D1117] shadow-2xl ${index === 0 ? 'lg:col-span-6' : index < 3 ? 'lg:col-span-3' : 'lg:col-span-4'}`}>
                <div className={`overflow-hidden ${index === 0 ? 'h-64 sm:h-80' : index < 3 ? 'h-52 sm:h-64 lg:h-80' : 'h-52 sm:h-60'}`}><img src={experience.image} alt={experience.imageAlt} width={experience.imageWidth} height={experience.imageHeight} sizes={index === 0 ? '(min-width: 1024px) 50vw, 100vw' : index < 3 ? '(min-width: 1024px) 25vw, 100vw' : '(min-width: 1024px) 33vw, 100vw'} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" decoding="async" /></div>
                <div className="space-y-3 p-5 sm:p-6"><p className="font-devanagari text-xs text-[#D8B982]" lang="hi">{experience.hindiName}</p><h3 className="font-serif text-xl font-bold text-[#F5EDE0]">{experience.name}</h3><p className="text-xs font-light leading-6 text-[#F5EDE0]/70">{experience.shortDescription}</p><Link to={`/plan-journey?destination=Jaisalmer&experience=${experience.slug}`} className="inline-flex min-h-11 items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#C9A24A]">{experience.cta}<ArrowUpRight className="h-3.5 w-3.5" /></Link></div>
              </motion.article>
            ))}
          </div>

          <p className="text-center text-[11px] font-light leading-5 text-[#F5EDE0]/52">Dune bashing is optional. Experience availability and suitability depend on traveller preference, local operating conditions and the selected itinerary.</p>
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
          07. SACRED & LIVING CULTURE
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
            SPIRITUALITY, TRADITION &amp; FOLK HERITAGE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EDE0]">
            Sacred &amp; Living Culture
          </h2>
          <p className="font-devanagari text-lg text-[#D8B982]">
            आस्था, परंपरा और लोक संस्कृति
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

          {/* Local Traditions */}
          <div className="p-6 rounded-3xl bg-[#0D1117] border border-[#C9A24A]/25 space-y-4 hover:border-[#C9A24A]/70 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#080B0F] border border-[#C9A24A]/40 flex items-center justify-center text-[#C9A24A]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#F5EDE0]">Local Traditions</h3>
              <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed">
                Encounter living customs shaped by desert communities, temple practice, family hospitality and the seasonal rhythms of western Rajasthan.
              </p>
            </div>
            <Link to="/jaisalmer/explore#chapter-sacred" className="text-xs font-bold text-[#C9A24A] hover:text-white inline-flex items-center gap-1">
              <span>Explore Sacred Jaisalmer</span>
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
                Discover the oral lineages, regional instruments and devotional character that sustain western Rajasthan's living folk heritage.
              </p>
            </div>
            <Link to="/jaisalmer/safari-adventure#cultural-evening" className="text-xs font-bold text-[#C9A24A] hover:text-white inline-flex items-center gap-1">
              <span>Respectful Cultural Experiences</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
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
            <Link to="/jaisalmer/itinerary" className="inline-flex pt-2 text-xs font-bold uppercase tracking-wider text-[#C9A24A] hover:text-white">Build a 2–4 day Jaisalmer itinerary →</Link>
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
      <section id="gallery" className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/jaisalmer/Jaisalmer Photos/gadisar.JPG" alt="" className="w-full h-full object-cover brightness-[0.28]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050709]/90 via-[#050709]/65 to-[#050709]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
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

        </div>{/* close z-10 inner */}
      </section>

      {/* ─────────────────────────────────────────────────────────────
          11. FREQUENTLY ASKED QUESTIONS
          ───────────────────────────────────────────────────────────── */}
      <section id="faqs" className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/jaisalmer/Jaisalmer Photos/desertsam1.JPG" alt="" className="w-full h-full object-cover brightness-[0.22]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050709]/92 via-[#050709]/75 to-[#050709]/94" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
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
            {JAISALMER_TRAVEL_FAQS.map((faq, index) => {
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

        </div>{/* close z-10 inner wrapper */}
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
