import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calendar,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  Sunset,
  ArrowUpRight,
  Users,
  Heart,
  User,
  Sparkles,
  Compass,
  Car,
  Hotel,
  Clock,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import {
  PACKAGE_TIERS_LIST,
  TRAVEL_TYPES_LIST,
  getTravelType,
} from '../data/jaisalmerPackages';
import type { TravelTypeKey } from '../data/jaisalmerPackages';
import { getPackageWhatsAppLink, getWhatsAppLink } from '../data/siteConfig';

type CustomProfileKey = 'couple' | 'family' | 'bachelor' | 'group';

export const PackagesPage: React.FC = () => {
  const [activeType, setActiveType] = useState<TravelTypeKey>('couple');

  // Custom Package Builder state
  const [customProfile, setCustomProfile] = useState<CustomProfileKey>('couple');
  const [customDuration, setCustomDuration] = useState<string>('3 Nights / 4 Days');
  const [customStay, setCustomStay] = useState<string>('Boutique Heritage Haveli');
  const [customTransport, setCustomTransport] = useState<string>('Chauffeur AC Sedan / SUV');

  const selectedTypeInfo = getTravelType(activeType);

  const customProfileMeta: Record<
    CustomProfileKey,
    { label: string; hindi: string; desc: string; icon: React.ReactNode }
  > = {
    couple: {
      label: 'Couple',
      hindi: 'युगल यात्रा',
      desc: 'Romantic desert glamping, private dune sunset, candlelit dinner, intimate heritage haveli stays.',
      icon: <Heart className="w-4 h-4 text-[#C9A24A]" />,
    },
    family: {
      label: 'Family',
      hindi: 'पारिवारिक यात्रा',
      desc: 'Kid and senior-friendly pacing, spacious suites, sanitized AC transport, cultural puppet show.',
      icon: <Users className="w-4 h-4 text-[#C9A24A]" />,
    },
    bachelor: {
      label: 'Bachelor / Friends',
      hindi: 'बैचलर एवं दोस्त',
      desc: 'Thar dune bashing, quad biking, campfire music, secret rooftop fort cafes, high-energy vibes.',
      icon: <Compass className="w-4 h-4 text-[#C9A24A]" />,
    },
    group: {
      label: 'Group / Corporate',
      hindi: 'समूह एवं दल',
      desc: 'Dedicated tempo traveller or coach, group dining, verified local guides, custom gala dinner.',
      icon: <Users className="w-4 h-4 text-[#C9A24A]" />,
    },
  };

  const customWhatsAppMsg = `Namaste Shri Radha Vallabh 🙏
I would like to enquire about a Custom Tour Package:
• Traveler Type: ${customProfileMeta[customProfile].label} (${customProfileMeta[customProfile].hindi})
• Duration: ${customDuration}
• Accommodation: ${customStay}
• Transport: ${customTransport}
Please share a personalized itinerary and best quote.`;

  return (
    <div className="min-h-screen bg-[#050709] text-[#F5EDE0] selection:bg-[#C9A24A]/30">
      {/* 01. Page Hero Banner */}
      <PageHero
        breadcrumb="Packages"
        badgeText="CURATED &amp; CUSTOM TOUR PACKAGES · JAISALMER &amp; PILGRIMAGE"
        hindiTagline="यात्रा चुनिए, अनुभव हम सँवारेंगे।"
        englishTitle="JAISALMER TOUR PACKAGES"
        description="Compare thoughtfully paced Jaisalmer heritage, sightseeing and desert-stay packages for couples, families, friends and private groups, or request a customized journey."
        backgroundImage="/images/jaisalmer/Jaisalmer Photos/jaisalmer fort.JPG"
        backgroundImageAlt="Jaisalmer Fort rising above the Golden City"
        bgPosition="center 30%"
      />

      {/* 02. Audience Selector & Jaisalmer 3N/4D Tier Cards */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Audience Selector Card */}
        <div className="rounded-3xl bg-[#0D1117]/95 border border-[#C9A24A]/40 p-6 sm:p-8 space-y-6 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#C9A24A]/20 pb-6">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C9A24A] block">
                WHO ARE YOU TRAVELLING WITH?
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EDE0]">
                {selectedTypeInfo.heading}
              </h2>
              <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light max-w-xl">
                {selectedTypeInfo.description}
              </p>
            </div>

            {/* Travel Type Buttons */}
            <div
              className="inline-flex p-1.5 rounded-full bg-[#080B0F] border border-[#C9A24A]/30 self-start md:self-center flex-wrap gap-1"
              role="tablist"
              aria-label="Audience category"
            >
              {TRAVEL_TYPES_LIST.map((type) => {
                const isSelected = type.id === activeType;
                return (
                  <button
                    key={type.id}
                    onClick={() => setActiveType(type.id)}
                    role="tab"
                    aria-selected={isSelected}
                    className={`px-4 sm:px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer min-h-[40px] touch-manipulation flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#C9A24A] text-[#050709] shadow-lg'
                        : 'text-[#F5EDE0]/75 hover:text-[#C9A24A]'
                    }`}
                  >
                    {type.id === 'couple' && <Heart className="w-3.5 h-3.5" />}
                    {type.id === 'family' && <Users className="w-3.5 h-3.5" />}
                    {type.id === 'group' && <Users className="w-3.5 h-3.5" />}
                    {type.id === 'solo' && <Compass className="w-3.5 h-3.5" />}
                    <span>{type.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Supporting tagline */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#D8B982]">
            <span className="font-devanagari text-sm">
              {selectedTypeInfo.tagline}
            </span>
            <a
              href="#custom-package-builder"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C9A24A] hover:text-white transition-colors"
            >
              <span>Need a custom package for your group?</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Five Package Tiers Grid */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C9A24A] block">
                5 CONFIRMED TIERS · 3 NIGHTS / 4 DAYS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EDE0]">
                Select Your Jaisalmer Tier
              </h3>
            </div>
            <p className="text-xs text-[#F5EDE0]/70 font-light">
              Showing packages tailored for <strong className="text-[#C9A24A]">{selectedTypeInfo.label}</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PACKAGE_TIERS_LIST.map((tier, index) => {
              const whatsappUrl = getPackageWhatsAppLink(
                selectedTypeInfo.label,
                tier.name,
                'Jaisalmer 3 Nights / 4 Days'
              );

              return (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="bg-[#0D1117]/95 rounded-3xl border border-[#C9A24A]/30 overflow-hidden shadow-2xl hover:border-[#C9A24A]/75 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  {/* Image & Tier Tag */}
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img
                      src={tier.image}
                      alt={tier.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-black/30" />

                    {/* Duration Badge */}
                    <div className="absolute top-4 right-4 bg-[#080B0F]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C9A24A]/40 text-[#D8B982] text-[10px] font-bold tracking-wider flex items-center gap-1.5 shadow-md">
                      <Calendar className="w-3.5 h-3.5 text-[#C9A24A]" />
                      <span>3 Nights / 4 Days</span>
                    </div>

                    {/* Tier Level */}
                    <div className="absolute top-4 left-4 bg-[#C9A24A] text-[#050709] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                      {tier.tier}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#C9A24A] block">
                        {tier.tagline}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#F5EDE0] leading-tight">
                        {tier.name}
                      </h3>
                      <span className="font-devanagari text-xs text-[#D8B982]/80">
                        {tier.hindiName}
                      </span>
                    </div>
                  </div>

                  {/* Package Card Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-4">
                      <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed">
                        {tier.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-[#C9A24A]/20">
                        <span className="text-[10px] uppercase tracking-wider text-[#C9A24A] font-bold block">
                          Included Highlights
                        </span>
                        <ul className="space-y-1.5">
                          {tier.inclusionsSummary.map((inc, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-[#F5EDE0]/90">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24A] shrink-0 mt-0.5" />
                              <span>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tariff & Action Buttons */}
                    <div className="pt-4 border-t border-[#C9A24A]/20 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-[#F5EDE0]/70">Tariff</span>
                        <div className="text-right">
                          <span className="font-serif text-sm sm:text-base font-bold gold-text">
                            Price on Request
                          </span>
                          <span className="text-[9px] text-[#C9A24A]/70 block">
                            Customized per dates &amp; party
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link
                          to={`/packages/jaisalmer-3-nights-4-days?type=${activeType}&tier=${tier.id}`}
                          className="flex-1 py-3 rounded-full bg-[#080B0F] border border-[#C9A24A]/40 text-[#F5EDE0] hover:bg-[#C9A24A] hover:text-[#080B0F] font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer min-h-[44px] touch-manipulation active:scale-95"
                        >
                          <span>VIEW ITINERARY</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>

                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md active:scale-95 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
                          aria-label={`Enquire ${tier.name} on WhatsApp`}
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

        {/* 03. Interactive Custom Package Builder Section (For ANY Group, Couple, Bachelor, Family) */}
        <div
          id="custom-package-builder"
          className="rounded-3xl border border-[#C9A24A]/45 bg-gradient-to-br from-[#0D1117] via-[#121824] to-[#080B0F] p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A24A]/[0.05] rounded-full blur-3xl pointer-events-none" />

          {/* Builder Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#C9A24A]/25 pb-6">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A24A]/10 border border-[#C9A24A]/40 text-[#C9A24A] text-[10px] font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>BESPOKE &amp; TAILOR-MADE ITINERARY</span>
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#F5EDE0]">
                Build Your Custom Package
              </h2>
              <p className="font-devanagari text-sm text-[#D8B982]">
                कस्टम टूर पैकेज — युगल, परिवार, बैचलर एवं बड़े समूहों के लिए
              </p>
              <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light leading-relaxed">
                Whether you are a couple seeking quiet desert romance, a family with children and elders, a vibrant bachelor group seeking dunes adventure, or a corporate pilgrimage team — design your exact itinerary with us.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-[#080B0F]/80 border border-[#C9A24A]/30 text-xs text-[#D8B982] space-y-1 self-start md:self-end">
              <span className="font-bold text-[#F5EDE0] block">100% Flexible Planning</span>
              <span className="text-[11px] text-[#F5EDE0]/75">Direct coordinator assistance via WhatsApp</span>
            </div>
          </div>

          {/* Builder Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Profile */}
            <div className="space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C9A24A] flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                <span>1. Traveler Profile</span>
              </span>
              <div className="grid grid-cols-1 gap-2">
                {(['couple', 'family', 'bachelor', 'group'] as CustomProfileKey[]).map((p) => {
                  const isSel = customProfile === p;
                  const item = customProfileMeta[p];
                  return (
                    <button
                      key={p}
                      onClick={() => setCustomProfile(p)}
                      className={`p-3 rounded-xl text-left transition-all border text-xs cursor-pointer ${
                        isSel
                          ? 'bg-[#C9A24A] text-[#050709] border-[#C9A24A] font-bold shadow-md'
                          : 'bg-[#080B0F]/90 text-[#F5EDE0]/85 border-[#C9A24A]/25 hover:border-[#C9A24A]/60'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.label}</span>
                        <span className={`text-[10px] font-devanagari ${isSel ? 'text-[#050709]/80' : 'text-[#D8B982]'}`}>
                          {item.hindi}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Duration */}
            <div className="space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C9A24A] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>2. Journey Duration</span>
              </span>
              <div className="grid grid-cols-1 gap-2">
                {[
                  '2 Nights / 3 Days',
                  '3 Nights / 4 Days',
                  '4 Nights / 5 Days',
                  'Custom / Extended Nights',
                ].map((dur) => {
                  const isSel = customDuration === dur;
                  return (
                    <button
                      key={dur}
                      onClick={() => setCustomDuration(dur)}
                      className={`p-3 rounded-xl text-left transition-all border text-xs cursor-pointer ${
                        isSel
                          ? 'bg-[#C9A24A] text-[#050709] border-[#C9A24A] font-bold shadow-md'
                          : 'bg-[#080B0F]/90 text-[#F5EDE0]/85 border-[#C9A24A]/25 hover:border-[#C9A24A]/60'
                      }`}
                    >
                      <span>{dur}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Stay Style */}
            <div className="space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C9A24A] flex items-center gap-1.5">
                <Hotel className="w-3.5 h-3.5" />
                <span>3. Stay Style</span>
              </span>
              <div className="grid grid-cols-1 gap-2">
                {[
                  'Boutique Heritage Haveli',
                  'Luxury AC Desert Camp',
                  'Royal Fort Palace Hotel',
                  'Mix (Haveli + Desert Camp)',
                ].map((stay) => {
                  const isSel = customStay === stay;
                  return (
                    <button
                      key={stay}
                      onClick={() => setCustomStay(stay)}
                      className={`p-3 rounded-xl text-left transition-all border text-xs cursor-pointer ${
                        isSel
                          ? 'bg-[#C9A24A] text-[#050709] border-[#C9A24A] font-bold shadow-md'
                          : 'bg-[#080B0F]/90 text-[#F5EDE0]/85 border-[#C9A24A]/25 hover:border-[#C9A24A]/60'
                      }`}
                    >
                      <span>{stay}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Transport */}
            <div className="space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C9A24A] flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5" />
                <span>4. Vehicle Category</span>
              </span>
              <div className="grid grid-cols-1 gap-2">
                {[
                  'Chauffeur AC Sedan (1-3 Pax)',
                  'Innova Crysta SUV (4-6 Pax)',
                  'AC Tempo Traveller (8-16 Pax)',
                  'Mini Coach / Bus (18+ Pax)',
                ].map((veh) => {
                  const isSel = customTransport === veh;
                  return (
                    <button
                      key={veh}
                      onClick={() => setCustomTransport(veh)}
                      className={`p-3 rounded-xl text-left transition-all border text-xs cursor-pointer ${
                        isSel
                          ? 'bg-[#C9A24A] text-[#050709] border-[#C9A24A] font-bold shadow-md'
                          : 'bg-[#080B0F]/90 text-[#F5EDE0]/85 border-[#C9A24A]/25 hover:border-[#C9A24A]/60'
                      }`}
                    >
                      <span>{veh}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Builder Summary & Action */}
          <div className="p-6 rounded-2xl bg-[#080B0F]/95 border border-[#C9A24A]/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase tracking-wider text-[#C9A24A] font-bold block">
                YOUR TAILORED SELECTION
              </span>
              <p className="text-sm font-serif font-bold text-[#F5EDE0]">
                {customProfileMeta[customProfile].label} · {customDuration} · {customStay} · {customTransport}
              </p>
              <p className="text-xs text-[#F5EDE0]/70 font-light">
                {customProfileMeta[customProfile].desc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                to="/jaisalmer/itinerary"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#080B0F] border border-[#C9A24A]/40 text-[#C9A24A] hover:bg-[#C9A24A] hover:text-[#080B0F] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1 transition-all min-h-[44px]"
              >
                <span>Compare 2–4 Day Pace</span>
              </Link>
              <a
                href={getWhatsAppLink(customWhatsAppMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-all min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                <span>Get Custom Quote on WhatsApp</span>
              </a>

              <Link
                to="/plan-journey?destination=Jaisalmer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#080B0F] border border-[#C9A24A]/40 text-[#F5EDE0] hover:bg-[#C9A24A] hover:text-[#080B0F] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1 transition-all min-h-[44px]"
              >
                <span>Full Custom Planner</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 04. Dedicated Safari Experiences Spotlight Card */}
        <div className="rounded-3xl border border-[#C9A24A]/40 bg-gradient-to-r from-[#0D1117] via-[#10151D] to-[#0D1117] p-8 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#080B0F] border border-[#C9A24A]/30 text-[#C9A24A] text-[10px] font-bold uppercase tracking-widest">
              <Sunset className="w-3.5 h-3.5" />
              <span>DEDICATED 1-DAY SAFARI EXPERIENCE</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EDE0]">
              Thar Soul — 1 Day / Sunset Safari
            </h3>
            <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light leading-relaxed max-w-2xl">
              Travelling on your own schedule or already have hotel booking in the city? Discover our specialized <strong>Thar Soul</strong> afternoon sunset safari from 2:30 PM to 9:30 PM featuring authentic desert village visits, traditional chai &amp; snacks, camel dunes trek, and glorious sunset viewing.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/safari/thar-soul"
                className="px-6 py-3 rounded-full bg-[#C9A24A] hover:bg-[#AA771C] text-[#050709] font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1 shadow-md min-h-[44px]"
              >
                <span>View Thar Soul Details</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/safari"
                className="px-6 py-3 rounded-full bg-[#080B0F] border border-[#C9A24A]/40 text-[#F5EDE0] hover:bg-[#C9A24A] hover:text-[#050709] font-bold text-xs uppercase tracking-wider transition-all min-h-[44px] flex items-center"
              >
                <span>All Safari Experiences</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-[#C9A24A]/30">
            <img
              src="/images/jaisalmer/safari/camel-safari/camel-safari-jaisalmer.webp"
              alt="Camel safari riders at sunset in Jaisalmer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-[10px] font-bold text-[#C9A24A] bg-[#080B0F]/90 px-3 py-1 rounded-full border border-[#C9A24A]/30">
              2:30 PM – 9:30 PM · Pure Thar Magic
            </span>
          </div>
        </div>

        {/* 05. Spiritual & Pilgrimage Tour Packages Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C9A24A] block">
              SACRED DHAM CIRCUITS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EDE0]">
              Spiritual &amp; Pilgrimage Tour Packages
            </h3>
            <p className="text-xs sm:text-sm text-[#F5EDE0]/75 font-light max-w-2xl">
              In addition to Jaisalmer desert heritage, Shri Radha Vallabh organizes dedicated spiritual yatras across India&apos;s holiest shrines with verified accommodation and attentive assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Char Dham */}
            <div className="rounded-3xl bg-[#0D1117] border border-[#C9A24A]/30 overflow-hidden shadow-xl flex flex-col justify-between hover:border-[#C9A24A]/70 transition-all">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/assets/card-chardham.jpg"
                  alt="Char Dham Sacred Himalayan Yatra"
                  className="w-full h-full object-cover brightness-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 text-[9px] uppercase font-bold tracking-widest bg-[#080B0F]/90 text-[#C9A24A] rounded-full border border-[#C9A24A]/30">
                  Upcoming Sacred Season
                </span>
                <div className="absolute bottom-3 left-3 right-3">
                  <h4 className="font-serif text-lg font-bold text-[#F5EDE0]">Char Dham Yatra</h4>
                  <span className="text-[11px] text-[#D8B982]">Yamunotri · Gangotri · Kedarnath · Badrinath</span>
                </div>
              </div>
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed">
                  Complete Himalayan pilgrimage with helicopter assistance, VIP darshan support, medical assistance, and verified hotels across Uttarakhand.
                </p>
                <div className="pt-2 border-t border-[#C9A24A]/20">
                  <a
                    href={getWhatsAppLink('Namaste Shri Radha Vallabh 🙏\nI would like to enquire about the Char Dham Yatra package.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-full bg-[#080B0F] border border-[#C9A24A]/40 text-[#C9A24A] hover:bg-[#C9A24A] hover:text-[#050709] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Enquire Char Dham Yatra</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Vrindavan & Mathura */}
            <div className="rounded-3xl bg-[#0D1117] border border-[#C9A24A]/30 overflow-hidden shadow-xl flex flex-col justify-between hover:border-[#C9A24A]/70 transition-all">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/assets/card-vrindavan.jpg"
                  alt="Vrindavan and Mathura Braj Yatra"
                  className="w-full h-full object-cover brightness-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 text-[9px] uppercase font-bold tracking-widest bg-[#080B0F]/90 text-[#C9A24A] rounded-full border border-[#C9A24A]/30">
                  Year-Round Darshan
                </span>
                <div className="absolute bottom-3 left-3 right-3">
                  <h4 className="font-serif text-lg font-bold text-[#F5EDE0]">Braj &amp; Vrindavan Yatra</h4>
                  <span className="text-[11px] text-[#D8B982]">Banke Bihari · Prem Mandir · Nidhivan · Yamuna</span>
                </div>
              </div>
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed">
                  Immerse in Radha-Krishna bhakti with guided temple parikramas, special Yamuna evening aarti boat ride, sattvic meals, and AC transfers.
                </p>
                <div className="pt-2 border-t border-[#C9A24A]/20">
                  <a
                    href={getWhatsAppLink('Namaste Shri Radha Vallabh 🙏\nI would like to enquire about the Vrindavan Mathura Braj Yatra package.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-full bg-[#080B0F] border border-[#C9A24A]/40 text-[#C9A24A] hover:bg-[#C9A24A] hover:text-[#050709] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Enquire Braj Yatra</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Ayodhya & Kashi */}
            <div className="rounded-3xl bg-[#0D1117] border border-[#C9A24A]/30 overflow-hidden shadow-xl flex flex-col justify-between hover:border-[#C9A24A]/70 transition-all">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/assets/card-ayodhya.jpg"
                  alt="Ayodhya Ram Mandir and Kashi Vishwanath"
                  className="w-full h-full object-cover brightness-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 text-[9px] uppercase font-bold tracking-widest bg-[#080B0F]/90 text-[#C9A24A] rounded-full border border-[#C9A24A]/30">
                  Dharma Circuit
                </span>
                <div className="absolute bottom-3 left-3 right-3">
                  <h4 className="font-serif text-lg font-bold text-[#F5EDE0]">Ayodhya &amp; Kashi Yatra</h4>
                  <span className="text-[11px] text-[#D8B982]">Ram Mandir · Saryu Aarti · Kashi Vishwanath</span>
                </div>
              </div>
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed">
                  Witness the grand Ram Mandir in Ayodhya and sacred Ganga Ghats of Varanasi with verified guides, private cabs, and confirmed darshan slots.
                </p>
                <div className="pt-2 border-t border-[#C9A24A]/20">
                  <a
                    href={getWhatsAppLink('Namaste Shri Radha Vallabh 🙏\nI would like to enquire about the Ayodhya & Kashi pilgrimage package.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-full bg-[#080B0F] border border-[#C9A24A]/40 text-[#C9A24A] hover:bg-[#C9A24A] hover:text-[#050709] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Enquire Ayodhya &amp; Kashi</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 06. Five Tier Comparison Section */}
        <div className="rounded-3xl bg-[#0D1117] border border-[#C9A24A]/30 p-6 sm:p-10 space-y-6 shadow-2xl">
          <div className="space-y-1 max-w-2xl">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C9A24A] block">
              TIER COMPARISON
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EDE0]">
              Compare Jaisalmer Packages
            </h3>
            <p className="text-xs sm:text-sm text-[#F5EDE0]/70 font-light">
              All tiers cover our confirmed 3 Nights / 4 Days itinerary with verified airport/station coordination and desert camp night.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-[#C9A24A]/30">
                  <th className="py-3 px-4 text-[11px] uppercase font-bold text-[#C9A24A] tracking-wider">Package</th>
                  <th className="py-3 px-4 text-[11px] uppercase font-bold text-[#C9A24A] tracking-wider">Tier Level</th>
                  <th className="py-3 px-4 text-[11px] uppercase font-bold text-[#C9A24A] tracking-wider">Duration</th>
                  <th className="py-3 px-4 text-[11px] uppercase font-bold text-[#C9A24A] tracking-wider">Itinerary</th>
                  <th className="py-3 px-4 text-[11px] uppercase font-bold text-[#C9A24A] tracking-wider">Tariff</th>
                  <th className="py-3 px-4 text-[11px] uppercase font-bold text-[#C9A24A] tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C9A24A]/15 text-xs text-[#F5EDE0]/85">
                {PACKAGE_TIERS_LIST.map((t) => (
                  <tr key={t.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-serif font-bold text-[#F5EDE0]">
                      {t.name}
                      <span className="block font-devanagari text-[10px] text-[#D8B982]/70 font-normal">
                        {t.hindiName}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#080B0F] border border-[#C9A24A]/30 text-[#C9A24A] text-[10px] font-semibold">
                        {t.tier}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-[#F5EDE0]/75">
                      3 Nights / 4 Days
                    </td>
                    <td className="py-4 px-4 text-[#F5EDE0]/75">
                      Confirmed Jaisalmer Itinerary
                    </td>
                    <td className="py-4 px-4 font-bold text-[#C9A24A]">
                      Price on Request
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Link
                        to={`/packages/jaisalmer-3-nights-4-days?type=${activeType}&tier=${t.id}`}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#C9A24A] hover:underline"
                      >
                        <span>Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
                {/* Custom Package row */}
                <tr className="hover:bg-white/[0.02] transition-colors bg-[#C9A24A]/[0.03]">
                  <td className="py-4 px-4 font-serif font-bold text-[#C9A24A]">
                    Bespoke Custom Package
                    <span className="block font-devanagari text-[10px] text-[#D8B982]/80 font-normal">
                      कस्टम पैकेज (युगल / परिवार / बैचलर / समूह)
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#C9A24A] text-[#050709] text-[10px] font-bold">
                      Tailored
                    </span>
                  </td>
                  <td className="py-4 px-4 text-[#F5EDE0]/75">
                    Flexible (2N to 7N+)
                  </td>
                  <td className="py-4 px-4 text-[#F5EDE0]/75">
                    Personalized to Party &amp; Dates
                  </td>
                  <td className="py-4 px-4 font-bold text-[#C9A24A]">
                    Custom Quote
                  </td>
                  <td className="py-4 px-4 text-right">
                    <a
                      href="#custom-package-builder"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#C9A24A] hover:underline"
                    >
                      <span>Customize</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 07. Closing CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-[#0D1117] border border-[#C9A24A]/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl"
        >
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold text-[#C9A24A] block">
              BESPOKE PILGRIMAGE &amp; VACATION PLANNING
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#F5EDE0]">
              Need a Tailor-Made Itinerary?
            </h2>
            <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light leading-relaxed">
              Connect with Shri Radha Vallabh for personalized dates, group accommodations, and verified logistics across Jaisalmer, Char Dham, Vrindavan, Ayodhya, and Rajasthan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link
              to="/plan-journey?destination=Jaisalmer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C9A24A] to-[#AA771C] text-[#05070A] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-lg active:scale-95 text-center min-h-[44px] flex items-center justify-center"
            >
              OPEN JOURNEY PLANNER →
            </Link>
            <a
              href={getWhatsAppLink('Namaste Shri Radha Vallabh 🙏\nI would like to discuss a customized travel package for my upcoming journey.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#080B0F] border border-[#25D366]/50 text-[#25D366] font-bold text-xs uppercase tracking-widest hover:bg-[#25D366] hover:text-white transition-all shadow-lg active:scale-95 text-center min-h-[44px] flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>DIRECT WHATSAPP ENQUIRY</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
