import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  MapPin,
  Sparkles,
  ShieldCheck,
  Tent,
  ArrowUpRight,
} from 'lucide-react';
import {
  JAISALMER_3N4D_ITINERARY,
  PACKAGE_TIERS_LIST,
  TRAVEL_TYPES_LIST,
  getPackageTier,
  getTravelType,
} from '../data/jaisalmerPackages';
import type { TravelTypeKey, PackageTierKey } from '../data/jaisalmerPackages';
import { PageHero } from '../components/PageHero';
import { getPackageWhatsAppLink } from '../data/siteConfig';

const PLACES_COVERED = [
  { name: 'Jaisalmer Fort (Sonar Qila)', hindi: 'सोनार किला', day: 'Day 1', image: '/assets/optimized/jaisalmer-fort-1920.webp' },
  { name: 'Patwon Ki Haveli', hindi: 'पटवों की हवेली', day: 'Day 1', image: '/assets/patwon-haveli.png' },
  { name: 'Gadisar Lake', hindi: 'गड़ीसर झील', day: 'Day 1', image: '/images/jaisalmer/web_DJI_0065.JPG' },
  { name: 'Kuldhara Abandoned Village', hindi: 'कुलधरा हेरिटेज ग्राम', day: 'Day 2', image: '/images/jaisalmer/web_DSC_0273.JPG' },
  { name: 'Sam Sand Dunes', hindi: 'सम के रेत के टीले', day: 'Day 2', image: '/images/jaisalmer/safari/hero/jaisalmer-safari-hero.webp' },
  { name: 'Bada Bagh Royal Cenotaphs', hindi: 'बड़ा बाग (राजसी छतरियाँ)', day: 'Day 3', image: '/images/jaisalmer/Jaisalmer Photos/bada bagh.jpeg' },
  { name: 'Amar Sagar Oasis & Temple', hindi: 'अमर सागर', day: 'Day 3', image: '/images/jaisalmer/Jaisalmer Photos/amar sager .png' },
  { name: 'Lodhurva Ancient Capital', hindi: 'लोद्रुवा जैन तीर्थ', day: 'Day 3', image: '/images/jaisalmer/Jaisalmer Photos/lodrava.jpg' },
];

export const JaisalmerPackageDetailPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read query params with graceful fallbacks
  const rawType = (searchParams.get('type') || 'couple').toLowerCase();
  const rawTier = (searchParams.get('tier') || 'gorbandh').toLowerCase();

  const activeType: TravelTypeKey =
    rawType === 'family'
      ? 'family'
      : rawType === 'group'
      ? 'group'
      : rawType === 'solo' || rawType === 'bachelor'
      ? 'solo'
      : 'couple';

  // Support legacy "rajwadi" parameter mapping to maharawal
  const activeTier: PackageTierKey =
    rawTier === 'rajwadi' || rawTier === 'maharawal'
      ? 'maharawal'
      : rawTier === 'jharokha'
      ? 'jharokha'
      : rawTier === 'morchan'
      ? 'morchan'
      : rawTier === 'leheriya'
      ? 'leheriya'
      : 'gorbandh';

  const [activeDayIndex, setActiveDayIndex] = useState<number>(0);

  const handleTypeChange = (typeKey: TravelTypeKey) => {
    setSearchParams({ type: typeKey, tier: activeTier });
  };

  const handleTierChange = (tierKey: PackageTierKey) => {
    setSearchParams({ type: activeType, tier: tierKey });
  };

  const selectedTier = getPackageTier(activeTier);
  const selectedType = getTravelType(activeType);

  const whatsappUrl = getPackageWhatsAppLink(
    selectedType.label,
    selectedTier.name,
    'Jaisalmer 3 Nights / 4 Days'
  );

  return (
    <div className="min-h-screen bg-[#050709] text-[#F5EDE0]">
      {/* 01. Hero Banner */}
      <PageHero
        breadcrumb="Jaisalmer 3N/4D"
        badgeText="3 NIGHTS / 4 DAYS · CONFIRMED ITINERARY"
        hindiTagline="जैसलमेर यात्रा, मरुस्थल का अनन्त आकाश"
        englishTitle="JAISALMER 3 NIGHTS / 4 DAYS"
        description="A complete journey through Jaisalmer's living fort, carved havelis, desert glamping under starry skies, and royal desert sanctuaries."
        backgroundImage="/assets/optimized/jaisalmer-fort-1920.webp"
        bgPosition="center 35%"
      />

      {/* 02. Interactive Package Customizer Strip */}
      <section className="sticky top-16 z-30 bg-[#080B0F]/95 backdrop-blur-xl border-y border-[#C9A24A]/25 py-4 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Audience Filter Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full md:w-auto">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C9A24A] shrink-0">
              WHO ARE YOU TRAVELLING WITH?
            </span>
            <div className="inline-flex p-1 rounded-full bg-[#0D1117] border border-[#C9A24A]/30 w-full sm:w-auto justify-center" role="tablist">
              {TRAVEL_TYPES_LIST.map((t) => {
                const isSelected = t.id === activeType;
                return (
                  <button
                    key={t.id}
                    onClick={() => handleTypeChange(t.id)}
                    role="tab"
                    aria-selected={isSelected}
                    className={`px-4 sm:px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer min-h-[36px] touch-manipulation ${
                      isSelected
                        ? 'bg-[#C9A24A] text-[#050709] shadow-md'
                        : 'text-[#F5EDE0]/75 hover:text-[#C9A24A]'
                    }`}
                  >
                    <span>{t.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Tariff & WhatsApp Action */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <div className="text-right">
              <span className="text-[10px] uppercase tracking-wider text-[#C9A24A]/80 font-bold block">
                Tariff
              </span>
              <span className="font-serif text-sm sm:text-base font-bold gold-text">
                Price on Request
              </span>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 03. Tier Selection Section */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1117] border border-[#C9A24A]/40 text-[#C9A24A] text-[10px] font-bold uppercase tracking-widest">
            <Sparkles className="w-3 h-3" />
            <span>SELECT PACKAGE TIER</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#F5EDE0]">
            {selectedType.heading}
          </h2>
          <p className="text-xs sm:text-sm text-[#F5EDE0]/75 font-light">
            {selectedType.description} Choose from five thoughtfully curated tiers crafted for personalized comfort and authentic desert hospitality.
          </p>
        </div>

        {/* 5 Tiers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4" role="tablist" aria-label="Package tiers">
          {PACKAGE_TIERS_LIST.map((tier) => {
            const isSelected = tier.id === activeTier;
            return (
              <button
                key={tier.id}
                onClick={() => handleTierChange(tier.id)}
                role="tab"
                aria-selected={isSelected}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative flex flex-col justify-between cursor-pointer min-h-[120px] touch-manipulation ${
                  isSelected
                    ? 'bg-[#C9A24A]/15 border-[#C9A24A] shadow-[0_0_20px_rgba(201,162,74,0.2)]'
                    : 'bg-[#0D1117]/80 border-[#C9A24A]/25 hover:border-[#C9A24A]/60'
                }`}
              >
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-[#C9A24A] block">
                    {tier.tier}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#F5EDE0]">
                    {tier.name}
                  </h3>
                  <span className="font-devanagari text-xs text-[#D8B982]/80 block">
                    {tier.hindiName}
                  </span>
                </div>
                <div className="mt-2 pt-2 border-t border-[#C9A24A]/15 flex items-center justify-between text-[10px]">
                  <span className="text-[#F5EDE0]/70">Tariff</span>
                  <span className="font-bold text-[#C9A24A]">On Request</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Tier Spotlight Card */}
        <motion.div
          key={activeTier}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-[#0D1117]/95 border border-[#C9A24A]/40 overflow-hidden shadow-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-5 relative h-56 sm:h-72 rounded-2xl overflow-hidden border border-[#C9A24A]/30">
            <img
              src={selectedTier.image}
              alt={selectedTier.imageAlt}
              className="w-full h-full object-cover brightness-95"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent" />
            <div className="absolute top-3 left-3 bg-[#080B0F]/90 px-3 py-1 rounded-full border border-[#C9A24A]/40 text-[#C9A24A] text-[10px] font-bold tracking-wider">
              {selectedTier.tier} TIER
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-[#F5EDE0]">
              <span className="text-[9px] uppercase font-bold tracking-widest text-[#D8B982] block">
                {selectedTier.tagline}
              </span>
              <h3 className="font-serif text-xl font-bold">
                {selectedTier.name} — {selectedType.label} Package
              </h3>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C9A24A] block">
                TIER SPECIFICATION · {selectedType.label.toUpperCase()} TRAVEL
              </span>
              <h4 className="font-serif text-2xl font-bold text-[#F5EDE0]">
                {selectedTier.name} Experience Architecture
              </h4>
              <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light leading-relaxed">
                {selectedTier.description}
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-[#C9A24A]/20">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#C9A24A] block">
                Standard Package Inclusions
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedTier.inclusionsSummary.map((inc, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#F5EDE0]/90">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24A] shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#C9A24A]/20 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-6 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:brightness-110 active:scale-95 transition-all min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                <span>Enquire Current Tariff for {selectedTier.name}</span>
              </a>
              <Link
                to={`/plan-journey?destination=Jaisalmer`}
                className="py-3 px-6 rounded-full bg-[#080B0F] border border-[#C9A24A]/40 text-[#F5EDE0] hover:bg-[#C9A24A] hover:text-[#050709] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1 transition-all min-h-[44px]"
              >
                <span>Customize Dates</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 04. Confirmed 4-Day Day-Wise Itinerary */}
      <section className="py-16 sm:py-24 bg-[#080B0F] border-y border-[#C9A24A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C9A24A] block">
                CONFIRMED DAY-BY-DAY ROUTE
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#F5EDE0] mt-1">
                4-Day Itinerary Flow
              </h2>
              <p className="text-xs sm:text-sm text-[#F5EDE0]/70 font-light mt-1 max-w-xl">
                All five package tiers follow this verified itinerary flow, ensuring a harmonious balance between living fort heritage and vast desert landscapes.
              </p>
            </div>

            {/* Day Switcher Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0" role="tablist" aria-label="Itinerary days">
              {JAISALMER_3N4D_ITINERARY.map((day, idx) => (
                <button
                  key={day.day}
                  onClick={() => setActiveDayIndex(idx)}
                  role="tab"
                  aria-selected={activeDayIndex === idx}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer min-h-[40px] touch-manipulation ${
                    activeDayIndex === idx
                      ? 'bg-[#C9A24A] text-[#050709] shadow-md'
                      : 'bg-[#0D1117] border border-[#C9A24A]/25 text-[#F5EDE0]/75 hover:text-[#C9A24A]'
                  }`}
                >
                  Day {day.day}
                </button>
              ))}
            </div>
          </div>

          {/* Detailed Day Cards Grid */}
          <div className="space-y-6">
            {JAISALMER_3N4D_ITINERARY.map((day, idx) => {
              const isExpanded = activeDayIndex === idx;

              return (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? 'bg-[#0D1117] border-[#C9A24A]/70 shadow-2xl'
                      : 'bg-[#080B0F]/90 border-[#C9A24A]/20 hover:border-[#C9A24A]/40'
                  }`}
                >
                  <div
                    onClick={() => setActiveDayIndex(idx)}
                    className="p-5 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#080B0F] border border-[#C9A24A]/40 flex flex-col items-center justify-center shrink-0 shadow-inner">
                        <span className="text-[9px] uppercase font-bold text-[#C9A24A]">DAY</span>
                        <span className="font-serif text-lg font-bold text-[#F5EDE0] leading-none">
                          0{day.day}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F5EDE0]">
                            {day.title}
                          </h3>
                          <span className="font-devanagari text-xs text-[#D8B982]/80">
                            ({day.hindiTitle})
                          </span>
                        </div>
                        {day.route && (
                          <div className="flex items-center gap-1.5 text-[11px] text-[#C9A24A] mt-1 font-medium">
                            <MapPin className="w-3.5 h-3.5 shrink-0" />
                            <span>{day.route}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end md:self-center">
                      <span className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#F5EDE0]/70">
                        Overnight: <strong className="text-[#F5EDE0]">{day.overnight}</strong>
                      </span>
                      <button
                        type="button"
                        aria-label={isExpanded ? `Collapse Day ${day.day}` : `Expand Day ${day.day}`}
                        className="w-8 h-8 rounded-full bg-[#C9A24A]/10 border border-[#C9A24A]/30 flex items-center justify-center text-[#C9A24A]"
                      >
                        <ChevronRight
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isExpanded ? 'rotate-90' : ''
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Expanded Day Details */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.4 }}
                      className="px-5 pb-7 sm:px-7 sm:pb-8 pt-2 border-t border-[#C9A24A]/15 grid grid-cols-1 lg:grid-cols-12 gap-6"
                    >
                      <div className="lg:col-span-8 space-y-4">
                        <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light leading-relaxed">
                          {day.overview}
                        </p>

                        <div className="space-y-2">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-[#C9A24A] block">
                            Day {day.day} Activities &amp; Flow
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {day.activities.map((act, aIdx) => (
                              <div
                                key={aIdx}
                                className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#080B0F] border border-[#C9A24A]/15 text-xs text-[#F5EDE0]/90"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24A] shrink-0 mt-0.5" />
                                <span>{act}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-4 space-y-3">
                        <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden border border-[#C9A24A]/25">
                          <img
                            src={day.image}
                            alt={day.imageAlt}
                            className="w-full h-full object-cover brightness-90"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#080B0F] via-transparent to-transparent" />
                          <div className="absolute bottom-2 left-2 right-2 text-[10px] text-[#F5EDE0]/80 font-medium bg-[#080B0F]/80 p-2 rounded-lg backdrop-blur-sm">
                            Highlights: {day.highlights.join(' • ')}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 05. Places Covered Gallery Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C9A24A] block">
            HISTORIC &amp; SACRED LANDMARKS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EDE0]">
            Places Covered Across the 4 Days
          </h2>
          <p className="text-xs sm:text-sm text-[#F5EDE0]/70 font-light">
            Every day introduces authentic architectural marvels, sacred pilgrimage sanctums, and timeless desert villages.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {PLACES_COVERED.map((place, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden border border-[#C9A24A]/25 bg-[#0D1117] shadow-lg hover:border-[#C9A24A]/75 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-36 sm:h-44 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-black/20" />
                <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-[#080B0F]/85 border border-[#C9A24A]/40 text-[9px] font-bold text-[#C9A24A]">
                  {place.day}
                </span>
              </div>
              <div className="p-3.5 space-y-1">
                <h4 className="font-serif text-xs sm:text-sm font-bold text-[#F5EDE0] leading-snug">
                  {place.name}
                </h4>
                <p className="font-devanagari text-[11px] text-[#D8B982]/80">
                  {place.hindi}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 06. Desert Experience Distinction (Day 2 Overnight Stay vs Thar Soul Sunset Safari) */}
      <section className="py-16 sm:py-20 bg-[#0B0E13] border-t border-[#C9A24A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#C9A24A]/35 bg-[#080B0F] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D1117] border border-[#C9A24A]/40 text-[#C9A24A] text-[10px] font-bold uppercase tracking-widest">
                <Tent className="w-3.5 h-3.5" />
                <span>NIGHT UNDER THE THAR STARS</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EDE0]">
                The Day 2 Desert Experience in 3N/4D
              </h3>
              <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light leading-relaxed">
                As part of this complete 3N/4D package, Day 2 features an overnight desert camp stay at Sam Sand Dunes. You will enjoy camel riding, sunset photography, traditional Kalbelia folk performances, Rajasthani cultural dinner, and stargazing before an early morning sunrise over the sands.
              </p>
              <div className="p-4 rounded-2xl bg-[#0D1117] border border-[#C9A24A]/20 text-xs space-y-1.5">
                <span className="font-bold text-[#C9A24A] uppercase tracking-wider text-[10px] block">
                  Looking ONLY for a 1-Day Sunset Safari?
                </span>
                <p className="text-[#F5EDE0]/70 font-light">
                  If you already have city accommodation and wish to experience a dedicated afternoon-to-sunset desert trail without an overnight camp stay, explore our specialized <strong>Thar Soul — 1 Day / Sunset Safari (2:30 PM – 9:30 PM)</strong>.
                </p>
                <Link
                  to="/safari/thar-soul"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C9A24A] hover:underline pt-1"
                >
                  <span>Explore Thar Soul Sunset Safari</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 rounded-2xl overflow-hidden border border-[#C9A24A]/30">
              <img
                src="/images/jaisalmer/safari/desert-camp/jaisalmer-desert-camp.webp"
                alt="Jaisalmer desert camp tents under evening sky"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B0F] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 07. Important Information & Commercial Transparency */}
      <section className="py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0D1117] border border-[#C9A24A]/25 space-y-4">
          <div className="flex items-center gap-2 text-[#C9A24A]">
            <ShieldCheck className="w-5 h-5" />
            <h4 className="font-serif text-base sm:text-lg font-bold">
              Transparent Travel Planning Commitment
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[#F5EDE0]/75 font-light">
            <div className="space-y-1">
              <strong className="text-[#F5EDE0] block font-semibold">Customized Tariff</strong>
              <p>Prices depend on exact travel dates, seasonal demand, room selection, and party size. Price on request via WhatsApp.</p>
            </div>
            <div className="space-y-1">
              <strong className="text-[#F5EDE0] block font-semibold">Attentive Coordination</strong>
              <p>Chauffeur transport, station transfers, and monument timings are confirmed directly with your dedicated coordinator.</p>
            </div>
            <div className="space-y-1">
              <strong className="text-[#F5EDE0] block font-semibold">Bespoke Flexibility</strong>
              <p>Itineraries can be adapted for senior citizens, young children, or special dietary requirements upon enquiry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 08. Closing CTA Banner */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-[#080B0F] to-[#050709] border-t border-[#C9A24A]/25">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C9A24A] block">
            READY TO EXPERIENCE JAISALMER?
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F5EDE0]">
            Begin Your Golden Journey
          </h2>
          <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light max-w-xl mx-auto leading-relaxed">
            Connect with Shri Radha Vallabh Tours for personalized dates, hotel categories, and current availability for the Jaisalmer 3 Nights / 4 Days package.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:brightness-110 active:scale-95 transition-all min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              <span>Enquire {selectedTier.name} on WhatsApp</span>
            </a>
            <Link
              to="/plan-journey?destination=Jaisalmer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0D1117] border border-[#C9A24A]/40 text-[#F5EDE0] font-bold text-xs uppercase tracking-wider hover:bg-[#C9A24A] hover:text-[#050709] transition-all shadow-xl active:scale-95 flex items-center justify-center min-h-[48px]"
            >
              <span>Open Custom Planner</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};


