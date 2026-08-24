import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Calendar,
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
} from 'lucide-react';
import type { DestinationData } from '../data/destinationsData';
import type { Package } from '../data/journeys';
import { PackageModal } from './PackageModal';
import { GalleryLightbox } from './GalleryLightbox';
import { getJourneyWhatsAppLink } from '../data/siteConfig';

interface DestinationExperiencePageProps {
  data: DestinationData;
}

export const DestinationExperiencePage: React.FC<DestinationExperiencePageProps> = ({ data }) => {
  const [selectedPlaceCategory, setSelectedPlaceCategory] = useState<string>('ALL');
  const [activeItineraryDay, setActiveItineraryDay] = useState<number>(0);
  const [selectedPkg, setSelectedPkg] = useState<Package | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<{ title: string; location: string; category: string; image: string } | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const navSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'places', label: 'Places' },
    { id: 'spiritual', label: 'Spiritual' },
    { id: 'heritage', label: 'Heritage' },
    { id: 'desert', label: 'The Thar' },
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'packages', label: 'Packages' },
    { id: 'travel-info', label: 'Stay & Travel' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const filteredPlaces = data.placesToExperience.filter((place) => {
    if (selectedPlaceCategory === 'ALL') return true;
    return place.category === selectedPlaceCategory;
  });

  const planUrl = `/plan-journey?destination=${encodeURIComponent(data.name)}`;
  const whatsappUrl = getJourneyWhatsAppLink(data.name);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050709] text-[#F5EDE0] selection:bg-[#C9A24A]/30">
      
      {/* ─────────────────────────────────────────────────────────────
          01. MASTER CINEMATIC DESTINATION HERO
          ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#050709] pt-24 pb-16">
        
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <img
            src={data.heroImage}
            alt={data.name}
            className="w-full h-full object-cover brightness-[0.35] scale-105 animate-subtleZoom"
            style={{ objectPosition: 'center 45%' }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050709]/90 via-[#050709]/50 to-[#050709]" />
          <div className="absolute inset-0 jaali-pattern opacity-25 pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] sm:w-[700px] h-[250px] sm:h-[350px] bg-[#C9A24A]/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 sm:space-y-8">
          
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold text-[#F5EDE0]/70 uppercase tracking-widest"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-[#C9A24A] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#C9A24A]/60" />
            <Link to="/journeys" className="hover:text-[#C9A24A] transition-colors">Journeys</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#C9A24A]/60" />
            <span className="text-[#C9A24A] font-bold">{data.name}</span>
          </motion.nav>

          {/* Badge & Hindi Signature */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D1117]/90 border border-[#C9A24A]/40 text-[#C9A24A] text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.25em] shadow-lg backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24A] animate-pulse" />
              <span>{data.badge}</span>
            </div>

            <p className="font-devanagari text-2xl sm:text-4xl text-[#D8B982] tracking-wide font-medium" lang="hi">
              {data.tagline}
            </p>
          </motion.div>

          {/* Title & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4 max-w-4xl mx-auto"
          >
            <h1 className="font-serif text-4xl sm:text-7xl lg:text-8xl font-black text-[#F5EDE0] tracking-tight leading-[1.05]">
              {data.name}
            </h1>

            <p className="text-xs sm:text-base text-[#F5EDE0]/85 font-light leading-relaxed max-w-2xl mx-auto">
              {data.description}
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
          >
            <button
              onClick={() => scrollToSection('overview')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C9A24A] via-[#D8B982] to-[#AA771C] text-[#05070A] font-bold text-xs uppercase tracking-widest shadow-2xl hover:brightness-110 active:scale-95 transition-all min-h-[48px] cursor-pointer flex items-center justify-center gap-2"
            >
              <span>EXPLORE JAISALMER GUIDE</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            <Link
              to={planUrl}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#080B0F]/80 border border-[#C9A24A]/50 text-[#F5EDE0] hover:text-[#C9A24A] hover:border-[#C9A24A] font-bold text-xs uppercase tracking-widest backdrop-blur-md active:scale-95 transition-all min-h-[48px] flex items-center justify-center gap-2"
            >
              <span>PLAN CUSTOM TRIP</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold text-xs uppercase tracking-widest transition-all min-h-[48px] flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current stroke-none" />
              <span>WHATSAPP US</span>
            </a>
          </motion.div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          02. STICKY SUB-NAVIGATION BAR
          ───────────────────────────────────────────────────────────── */}
      <div className="sticky top-[60px] sm:top-[70px] z-30 bg-[#080B0F]/95 backdrop-blur-xl border-y border-[#C9A24A]/25 py-2.5 px-4 overflow-x-auto no-scrollbar shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-4 min-w-max">
          {navSections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className="px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs uppercase font-bold tracking-wider text-[#F5EDE0]/70 hover:text-[#C9A24A] hover:bg-white/5 transition-all cursor-pointer whitespace-nowrap"
            >
              {sec.label}
            </button>
          ))}
          <Link
            to={planUrl}
            className="ml-auto px-4 py-1.5 rounded-full bg-[#C9A24A] text-[#080B0F] text-[10px] font-extrabold uppercase tracking-widest hover:brightness-110 transition-all shrink-0"
          >
            Plan Journey →
          </Link>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          03. QUICK FACTS STRIP
          ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#0D1117] border-b border-[#C9A24A]/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold tracking-widest text-[#C9A24A] block">Location</span>
              <p className="font-serif text-xs sm:text-sm font-semibold text-[#F5EDE0]">Jaisalmer, Rajasthan</p>
            </div>

            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold tracking-widest text-[#C9A24A] block">Region</span>
              <p className="font-serif text-xs sm:text-sm font-semibold text-[#F5EDE0]">Thar Desert</p>
            </div>

            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold tracking-widest text-[#C9A24A] block">Known For</span>
              <p className="font-serif text-xs sm:text-sm font-semibold text-[#F5EDE0]">Living Fort &amp; Havelis</p>
            </div>

            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold tracking-widest text-[#C9A24A] block">Ideal Duration</span>
              <p className="font-serif text-xs sm:text-sm font-semibold text-[#F5EDE0]">{data.quickFacts.idealDuration}</p>
            </div>

            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold tracking-widest text-[#C9A24A] block">Best Season</span>
              <p className="font-serif text-xs sm:text-sm font-semibold text-[#F5EDE0]">Oct – Mar (Pleasant)</p>
            </div>

            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold tracking-widest text-[#C9A24A] block">Journey Type</span>
              <p className="font-serif text-xs sm:text-sm font-semibold text-[#F5EDE0]">Heritage · Desert · Faith</p>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          04. DESTINATION INTRODUCTION & LIVING CITADEL
          ───────────────────────────────────────────────────────────── */}
      <section id="overview" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
                DESTINATION INTRODUCTION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EDE0] leading-tight">
                {data.introduction.headline}
              </h2>
              <p className="font-devanagari text-base sm:text-lg text-[#D8B982]">
                {data.introduction.hindiHeadline}
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#F5EDE0]/80 font-light leading-relaxed">
              {data.introduction.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {data.introduction.highlightPillars.map((h, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#0D1117] border border-[#C9A24A]/25 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#C9A24A]" />
                    <h3 className="font-serif text-sm font-bold text-[#F5EDE0]">{h.title}</h3>
                  </div>
                  <p className="text-xs text-[#F5EDE0]/70 font-light leading-snug">{h.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual (5 cols) */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl border border-[#C9A24A]/30 aspect-[4/5]">
            <img
              src={data.introduction.featuredImage}
              alt="Jaisalmer Heritage Architecture"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B0F]/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#080B0F]/85 backdrop-blur-md border border-[#C9A24A]/30 space-y-1">
              <span className="text-[9px] uppercase font-bold tracking-widest text-[#C9A24A] block">
                AUTHENTIC LIVING CITADEL
              </span>
              <p className="font-devanagari text-xs sm:text-sm text-[#F5EDE0] font-medium">
                800+ वर्षों से अनवरत जीवंत स्वर्ण दुर्ग परंपरा।
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          05. PLACES TO EXPERIENCE (WITH CATEGORY FILTER)
          ───────────────────────────────────────────────────────────── */}
      <section id="places" className="py-16 sm:py-24 bg-[#080B0F] border-y border-[#C9A24A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
                LANDMARK ATTRACTIONS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EDE0]">
                Places to Experience
              </h2>
              <p className="text-xs sm:text-sm text-[#F5EDE0]/70 font-light max-w-xl">
                Historic fortresses, lakeside chhatris, carved mansions, and mystical desert villages.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {(['ALL', 'HERITAGE', 'SPIRITUAL', 'ARCHITECTURE', 'DESERT', 'CULTURE'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedPlaceCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border min-h-[38px] touch-manipulation ${
                    selectedPlaceCategory === cat
                      ? 'bg-[#C9A24A] text-[#080B0F] border-[#C9A24A] shadow-md'
                      : 'bg-[#0D1117] text-[#F5EDE0]/70 border-[#C9A24A]/25 hover:border-[#C9A24A] hover:text-[#C9A24A]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Place Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPlaces.map((place, idx) => (
              <motion.article
                key={place.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 4) * 0.08 }}
                className="bg-[#0D1117] rounded-3xl border border-[#C9A24A]/25 overflow-hidden shadow-xl hover:border-[#C9A24A]/70 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                {/* Image or Neutral Verified Placeholder */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-[#080B0F]">
                  {place.image ? (
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#131924] via-[#0D1117] to-[#080B0F] flex flex-col items-center justify-center p-6 text-center space-y-1.5 border-b border-[#C9A24A]/20">
                      <div className="w-9 h-9 rounded-full bg-[#080B0F] border border-[#C9A24A]/40 flex items-center justify-center text-[#C9A24A]/80 shadow-md">
                        <Landmark className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] uppercase font-bold tracking-widest text-[#C9A24A]/90">
                        Photography Coming Soon
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-black/20 pointer-events-none" />
                  <div className="absolute top-3 left-3 bg-[#080B0F]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#C9A24A]/40 text-[#C9A24A] text-[9px] font-bold tracking-wider">
                    {place.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <p className="font-devanagari text-xs text-[#D8B982] font-semibold">
                      {place.hindiName}
                    </p>
                    <h3 className="font-serif text-lg font-bold text-[#F5EDE0] leading-snug group-hover:text-[#C9A24A] transition-colors">
                      {place.name}
                    </h3>
                    <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed">
                      {place.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-[#C9A24A]/20">
                    <div className="p-2.5 rounded-xl bg-[#080B0F]/70 border border-[#C9A24A]/20">
                      <span className="text-[9px] uppercase font-bold text-[#C9A24A] block">Why Visit</span>
                      <p className="text-[11px] text-[#F5EDE0]/80 font-light mt-0.5 leading-snug">{place.whyVisit}</p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {place.tags.map((t, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md bg-white/5 text-[9px] text-[#F5EDE0]/60">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-[#0D1117] border border-[#C9A24A]/30 text-center max-w-2xl mx-auto">
            <p className="text-xs text-[#F5EDE0]/70 font-light">
              <strong className="text-[#C9A24A] font-semibold">Note:</strong> These landmark attractions represent the historical wealth of the region. Custom sightseeing pacing and shrine access are tailored to your family upon enquiry.
            </p>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          06. SPIRITUAL JAISALMER: DEVOTION IN SANDSTONE
          ───────────────────────────────────────────────────────────── */}
      <section id="spiritual" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
            SPIRITUAL SANCTUARIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EDE0]">
            {data.spiritualSignificance.title}
          </h2>
          <p className="font-devanagari text-lg text-[#D8B982]">
            {data.spiritualSignificance.hindiTitle}
          </p>
          <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light leading-relaxed">
            {data.spiritualSignificance.description}
          </p>
        </div>

        {/* Shrines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.spiritualSignificance.sacredSites.map((site, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-[#0D1117] border border-[#C9A24A]/30 space-y-4 hover:border-[#C9A24A]/70 transition-all shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#080B0F] border border-[#C9A24A]/40 flex items-center justify-center text-[#C9A24A] shadow-md">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#F5EDE0]">{site.name}</h3>
                <p className="font-devanagari text-xs text-[#D8B982]">{site.hindiName}</p>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#C9A24A]/15 text-[#C9A24A] text-[9px] font-bold uppercase">
                  {site.deityOrTradition}
                </span>
                <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed pt-1">
                  {site.significance}
                </p>
              </div>

              <div className="pt-3 border-t border-[#C9A24A]/20">
                <a
                  href={getJourneyWhatsAppLink(`Jaisalmer — ${site.name} Darshan`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#C9A24A] hover:text-white transition-colors"
                >
                  <span>Enquire Darshan Guidance</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Reverence Note */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0D1117] via-[#121722] to-[#0D1117] border border-[#C9A24A]/40 text-center max-w-3xl mx-auto space-y-2 shadow-2xl">
          <Sparkles className="w-6 h-6 text-[#C9A24A] mx-auto" />
          <h3 className="font-serif text-base sm:text-lg font-bold text-[#F5EDE0]">Our Reverence Commitment</h3>
          <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light leading-relaxed">
            {data.spiritualSignificance.philosophyNote}
          </p>
        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          07. LIVING HERITAGE & ARCHITECTURE
          ───────────────────────────────────────────────────────────── */}
      <section id="heritage" className="py-16 sm:py-24 bg-[#080B0F] border-y border-[#C9A24A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
                  LIVING HERITAGE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5EDE0]">
                  {data.livingHeritage.title}
                </h2>
                <p className="font-devanagari text-base text-[#D8B982]">
                  {data.livingHeritage.hindiTitle}
                </p>
                <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light leading-relaxed">
                  {data.livingHeritage.description}
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {data.livingHeritage.pillars.map((pil, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#0D1117] border border-[#C9A24A]/25 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-sm font-bold text-[#F5EDE0]">{pil.title}</h3>
                      <span className="text-[9px] text-[#C9A24A] uppercase font-semibold">{pil.subtitle}</span>
                    </div>
                    <p className="text-xs text-[#F5EDE0]/70 font-light leading-relaxed">{pil.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl border border-[#C9A24A]/30 aspect-[16/10]">
              <img
                src={data.livingHeritage.image}
                alt="Jaisalmer Living Fort Architecture"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050709]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#080B0F]/85 backdrop-blur-md border border-[#C9A24A]/30">
                <span className="text-[9px] uppercase font-bold tracking-widest text-[#C9A24A] block">
                  UNESCO WORLD HERITAGE SITE
                </span>
                <p className="text-xs sm:text-sm text-[#F5EDE0] font-medium mt-0.5">
                  Sonar Qella — 99 sandstone bastions carved in honey-gold geometry.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          08. THE THAR DESERT EXPERIENCE (DUNES & GLAMPING)
          ───────────────────────────────────────────────────────────── */}
      <section id="desert" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
            THE THAR DESERT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EDE0]">
            {data.tharDesertExperience.title}
          </h2>
          <p className="font-devanagari text-lg text-[#D8B982]">
            {data.tharDesertExperience.hindiTitle}
          </p>
          <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light leading-relaxed">
            {data.tharDesertExperience.description}
          </p>
        </div>

        {/* 4 Desert Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.tharDesertExperience.experiences.map((exp, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-[#0D1117] border border-[#C9A24A]/25 space-y-3 hover:border-[#C9A24A]/70 transition-all shadow-xl"
            >
              <div className="w-10 h-10 rounded-xl bg-[#080B0F] border border-[#C9A24A]/40 flex items-center justify-center text-[#C9A24A] shadow-md">
                <Tent className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#F5EDE0]">{exp.title}</h3>
              <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>

        {/* 3 Photos strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.tharDesertExperience.images.map((img, i) => (
            <div key={i} className="relative h-60 rounded-3xl overflow-hidden border border-[#C9A24A]/30 shadow-xl">
              <img src={img} alt="Thar Desert Visual" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B0F]/70 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        <div className="text-center text-xs text-[#D8B982]/80 font-light italic">
          *{data.tharDesertExperience.disclaimer}
        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          09. SAMPLE 4-DAY ITINERARY (INTERACTIVE TIMELINE)
          ───────────────────────────────────────────────────────────── */}
      <section id="itinerary" className="py-16 sm:py-24 bg-[#080B0F] border-y border-[#C9A24A]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
              CURATED TRAVEL PACING
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EDE0]">
              {data.sampleItinerary.title}
            </h2>
            <div className="inline-block px-3 py-1 rounded-full bg-[#C9A24A]/15 border border-[#C9A24A]/40 text-[#C9A24A] text-[10px] font-bold uppercase tracking-widest">
              {data.sampleItinerary.badge}
            </div>
            <p className="text-xs text-[#F5EDE0]/70 font-light leading-relaxed">
              {data.sampleItinerary.disclaimer}
            </p>
          </div>

          {/* Day Selector Buttons */}
          <div className="flex justify-center flex-wrap gap-2.5">
            {data.sampleItinerary.days.map((dayObj, idx) => (
              <button
                key={dayObj.day}
                onClick={() => setActiveItineraryDay(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer border min-h-[44px] touch-manipulation ${
                  activeItineraryDay === idx
                    ? 'bg-[#C9A24A] text-[#080B0F] border-[#C9A24A] shadow-xl scale-105'
                    : 'bg-[#0D1117] text-[#F5EDE0]/70 border-[#C9A24A]/30 hover:border-[#C9A24A] hover:text-[#C9A24A]'
                }`}
              >
                <span>{dayObj.day}</span>
              </button>
            ))}
          </div>

          {/* Active Day Detail Card */}
          {data.sampleItinerary.days[activeItineraryDay] && (
            <motion.div
              key={activeItineraryDay}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#0D1117] rounded-3xl border border-[#C9A24A]/40 p-6 sm:p-10 shadow-2xl space-y-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#C9A24A]/20">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C9A24A] block">
                    {data.sampleItinerary.days[activeItineraryDay].day} ITINERARY
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EDE0]">
                    {data.sampleItinerary.days[activeItineraryDay].title}
                  </h3>
                  <p className="font-devanagari text-sm text-[#D8B982]">
                    {data.sampleItinerary.days[activeItineraryDay].hindiTitle}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#F5EDE0]/85 font-light leading-relaxed">
                {data.sampleItinerary.days[activeItineraryDay].description}
              </p>

              {/* Schedule Timeline */}
              <div className="space-y-4 pt-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C9A24A] block">
                  Day Schedule
                </span>
                <div className="space-y-3">
                  {data.sampleItinerary.days[activeItineraryDay].schedule.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#080B0F] border border-[#C9A24A]/20">
                      <span className="px-3 py-1 rounded-full bg-[#C9A24A]/15 text-[#C9A24A] text-[10px] font-bold shrink-0 min-w-[80px] text-center">
                        {item.time}
                      </span>
                      <p className="text-xs text-[#F5EDE0]/85 font-light leading-relaxed mt-0.5">
                        {item.activity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day Highlights Checklist */}
              <div className="pt-4 border-t border-[#C9A24A]/20">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C9A24A] block mb-3">
                  Day Highlights
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {data.sampleItinerary.days[activeItineraryDay].highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#F5EDE0]/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24A] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. CURATED PACKAGES SECTION
          ───────────────────────────────────────────────────────────── */}
      <section id="packages" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
              CURATED ITINERARY OPTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EDE0]">
              Available Jaisalmer Packages
            </h2>
            <p className="text-xs sm:text-sm text-[#F5EDE0]/70 font-light max-w-xl">
              Select an itinerary below to view day-by-day details or request personalized pricing for your family.
            </p>
          </div>

          <Link
            to={planUrl}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C9A24A] hover:text-white transition-colors"
          >
            <span>Need a custom circuit? Plan here</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {data.packages.map((pkg, idx) => {
            const pkgWaUrl = getJourneyWhatsAppLink(`Jaisalmer — ${pkg.title}`);

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="bg-[#0D1117] rounded-3xl border border-[#C9A24A]/30 overflow-hidden shadow-2xl hover:border-[#C9A24A]/75 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-black/30" />
                  
                  <div className="absolute top-4 right-4 bg-[#080B0F]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C9A24A]/40 text-[#D8B982] text-[10px] font-bold tracking-wider flex items-center gap-1.5 shadow-md">
                    <Calendar className="w-3.5 h-3.5 text-[#C9A24A]" />
                    <span>{pkg.duration}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#C9A24A] block">
                      {pkg.tagline}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5EDE0] leading-tight">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-[#C9A24A]/20">
                      <span className="text-[10px] uppercase tracking-wider text-[#C9A24A] font-bold block">
                        Included Highlights
                      </span>
                      <ul className="space-y-1.5">
                        {pkg.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#F5EDE0]/90">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24A] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

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

      </section>

      {/* ─────────────────────────────────────────────────────────────
          11. STAY INFORMATION & ACCOMMODATION STYLES
          ───────────────────────────────────────────────────────────── */}
      <section id="travel-info" className="py-16 sm:py-24 bg-[#080B0F] border-y border-[#C9A24A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
              ACCOMMODATION CHOICES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5EDE0]">
              {data.stayStyles.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#F5EDE0]/75 font-light">
              {data.stayStyles.description}
            </p>
          </div>

          {/* Stay Styles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.stayStyles.styles.map((style, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-[#0D1117] border border-[#C9A24A]/25 space-y-4 hover:border-[#C9A24A]/70 transition-all shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#080B0F] border border-[#C9A24A]/40 flex items-center justify-center text-[#C9A24A]">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#F5EDE0]">{style.name}</h3>
                  <p className="font-devanagari text-xs text-[#D8B982]">{style.hindiName}</p>
                  <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed">{style.description}</p>
                </div>

                <div className="pt-3 border-t border-[#C9A24A]/20">
                  <span className="text-[9px] uppercase font-bold text-[#C9A24A] block">Ideal For</span>
                  <p className="text-[11px] text-[#F5EDE0]/80 font-light mt-0.5">{style.idealFor}</p>
                </div>
              </div>
            ))}
          </div>

          {/* How to Reach Strip */}
          <div className="pt-12 border-t border-[#C9A24A]/20 space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
                TRAVEL LOGISTICS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EDE0]">
                Getting to Jaisalmer
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-3xl bg-[#0D1117] border border-[#C9A24A]/25 space-y-2">
                <div className="flex items-center gap-2 text-[#C9A24A]">
                  <Plane className="w-5 h-5" />
                  <h4 className="font-serif text-base font-bold text-[#F5EDE0]">{data.howToReach.byAir.title}</h4>
                </div>
                <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed">{data.howToReach.byAir.details}</p>
                <p className="text-[11px] text-[#D8B982] pt-1">*{data.howToReach.byAir.note}</p>
              </div>

              <div className="p-6 rounded-3xl bg-[#0D1117] border border-[#C9A24A]/25 space-y-2">
                <div className="flex items-center gap-2 text-[#C9A24A]">
                  <Train className="w-5 h-5" />
                  <h4 className="font-serif text-base font-bold text-[#F5EDE0]">{data.howToReach.byTrain.title}</h4>
                </div>
                <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed">{data.howToReach.byTrain.details}</p>
                <p className="text-[11px] text-[#D8B982] pt-1">*{data.howToReach.byTrain.note}</p>
              </div>

              <div className="p-6 rounded-3xl bg-[#0D1117] border border-[#C9A24A]/25 space-y-2">
                <div className="flex items-center gap-2 text-[#C9A24A]">
                  <Car className="w-5 h-5" />
                  <h4 className="font-serif text-base font-bold text-[#F5EDE0]">{data.howToReach.byRoad.title}</h4>
                </div>
                <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed">{data.howToReach.byRoad.details}</p>
                <p className="text-[11px] text-[#D8B982] pt-1">*{data.howToReach.byRoad.note}</p>
              </div>

            </div>
          </div>

          {/* Best Time to Visit */}
          <div className="pt-12 border-t border-[#C9A24A]/20 space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
                SEASONAL WEATHER
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EDE0]">
                {data.bestTimeToVisit.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.bestTimeToVisit.seasons.map((s, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#0D1117] border border-[#C9A24A]/20 space-y-2">
                  <span className="text-[10px] uppercase font-bold text-[#C9A24A] block">{s.months}</span>
                  <h4 className="font-serif text-sm font-bold text-[#F5EDE0]">{s.season}</h4>
                  <span className="inline-block px-2 py-0.5 rounded bg-white/5 text-[10px] text-[#D8B982]">{s.weather}</span>
                  <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed pt-1">{s.recommendation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Local Food & Dining */}
          <div className="pt-12 border-t border-[#C9A24A]/20 space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
                DESERT CUISINE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EDE0]">
                {data.localFlavours.title}
              </h3>
              <p className="text-xs text-[#F5EDE0]/70 font-light">{data.localFlavours.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.localFlavours.dishes.map((dish, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#0D1117] border border-[#C9A24A]/20 space-y-1.5">
                  <Utensils className="w-4 h-4 text-[#C9A24A]" />
                  <h4 className="font-serif text-sm font-bold text-[#F5EDE0]">{dish.name}</h4>
                  <p className="font-devanagari text-xs text-[#D8B982]">{dish.hindi}</p>
                  <p className="text-xs text-[#F5EDE0]/70 font-light leading-relaxed">{dish.description}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#0D1117] border border-[#C9A24A]/30 text-center max-w-xl mx-auto">
              <p className="text-xs text-[#D8B982] font-light">*{data.localFlavours.sattvikNote}</p>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          12. WHO IS THIS JOURNEY FOR?
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
            IDEAL TRAVELLERS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5EDE0]">
            {data.whoIsThisFor.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {data.whoIsThisFor.categories.map((cat, i) => (
            <div key={i} className="p-5 rounded-2xl bg-[#0D1117] border border-[#C9A24A]/20 space-y-2 text-center">
              <Users className="w-5 h-5 text-[#C9A24A] mx-auto" />
              <h3 className="font-serif text-sm font-bold text-[#F5EDE0]">{cat.title}</h3>
              <p className="font-devanagari text-[11px] text-[#D8B982]">{cat.hindi}</p>
              <p className="text-[11px] text-[#F5EDE0]/70 font-light leading-relaxed">{cat.description}</p>
            </div>
          ))}
        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          13. EDITORIAL VISUAL GALLERY
          ───────────────────────────────────────────────────────────── */}
      <section id="gallery" className="py-16 sm:py-24 bg-[#080B0F] border-y border-[#C9A24A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
                PHOTOGRAPHIC ARCHIVE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5EDE0]">
                Jaisalmer Visual Moments
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
            {data.gallery.slice(0, 6).map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedGalleryItem(item)}
                className="group relative rounded-3xl overflow-hidden shadow-2xl border border-[#C9A24A]/30 hover:border-[#C9A24A] cursor-pointer bg-[#0D1117] h-64 sm:h-72"
              >
                <img
                  src={item.image}
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
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          14. COMPREHENSIVE FAQS ACCORDION
          ───────────────────────────────────────────────────────────── */}
      <section id="faqs" className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-2">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
            TRAVEL PLANNING FAQS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5EDE0]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#F5EDE0]/70 font-light">
            Essential facts, customization details, and booking guidelines for Jaisalmer.
          </p>
        </div>

        <div className="space-y-4">
          {data.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0D1117] border border-[#C9A24A]/25 overflow-hidden transition-all duration-300 shadow-md"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
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

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#F5EDE0]/80 font-light leading-relaxed border-t border-[#C9A24A]/15 pt-3"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          15. FINAL PLAN JOURNEY CONVERSION CTA
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#050709] via-[#0D1117] to-[#050709] border-t border-[#C9A24A]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="w-14 h-14 rounded-full border-2 border-[#C9A24A] bg-[#080B0F] flex items-center justify-center mx-auto text-2xl text-[#C9A24A] shadow-2xl">
            🛕
          </div>

          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
              YOUR JAISALMER JOURNEY BEGINS HERE
            </span>
            <p className="font-devanagari text-2xl sm:text-3xl text-[#D8B982] font-semibold">
              स्वर्णिम धरा की ओर चलें।
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#F5EDE0]">
              Ready to Experience Jaisalmer?
            </h2>
            <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light max-w-xl mx-auto">
              Tell us your travel dates, preferred pacing, and family requirements to receive a customized day-by-day itinerary and quote.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              to={planUrl}
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#C9A24A] via-[#D8B982] to-[#AA771C] text-[#05070A] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-2xl active:scale-95 text-center min-h-[48px] flex items-center justify-center gap-2"
            >
              <span>PLAN YOUR JAISALMER JOURNEY →</span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#080B0F] border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold text-xs uppercase tracking-widest transition-all shadow-xl active:scale-95 text-center min-h-[48px] flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current stroke-none" />
              <span>WHATSAPP COORDINATOR</span>
            </a>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          16. RELATED SACRED & HERITAGE JOURNEYS
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#080B0F] border-t border-[#C9A24A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C9A24A]">
                OTHER SACRED TRAILS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EDE0]">
                Explore Related Journeys
              </h3>
            </div>
            <Link to="/journeys" className="text-xs font-bold text-[#C9A24A] uppercase tracking-wider hover:text-white">
              All Journeys →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.relatedJourneys.map((rel) => (
              <div
                key={rel.slug}
                className="bg-[#0D1117] rounded-3xl border border-[#C9A24A]/25 overflow-hidden shadow-xl flex flex-col justify-between"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={rel.image} alt={rel.name} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#080B0F]/85 border border-[#C9A24A]/30 text-[#D8B982] text-[8px] font-bold uppercase tracking-wider">
                    {rel.status}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <p className="font-devanagari text-xs text-[#D8B982]">{rel.hindiName}</p>
                  <h4 className="font-serif text-base font-bold text-[#F5EDE0]">{rel.name}</h4>
                  <p className="text-[11px] text-[#F5EDE0]/70 font-light">{rel.tagline}</p>
                  <div className="pt-2 border-t border-[#C9A24A]/20">
                    <Link
                      to="/journeys"
                      className="inline-flex items-center gap-1 text-[10px] uppercase font-bold text-[#C9A24A] hover:text-white"
                    >
                      <span>Explore Route</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Package Detail Modal */}
      {selectedPkg && (
        <PackageModal
          pkg={selectedPkg}
          onClose={() => setSelectedPkg(null)}
        />
      )}

      {/* Gallery Lightbox */}
      {selectedGalleryItem && (
        <GalleryLightbox
          item={selectedGalleryItem}
          onClose={() => setSelectedGalleryItem(null)}
        />
      )}

    </div>
  );
};
