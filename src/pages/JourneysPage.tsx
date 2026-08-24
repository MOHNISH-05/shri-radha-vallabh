import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Lock, CheckCircle2, MessageCircle } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { JOURNEYS_DATA } from '../data/journeys';
import { getJourneyWhatsAppLink, getWhatsAppLink } from '../data/siteConfig';

export const JourneysPage: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'ACTIVE' | 'UPCOMING'>('ALL');

  const journeyList = Object.values(JOURNEYS_DATA);

  const filteredJourneys = journeyList.filter((j) => {
    if (filter === 'ACTIVE') return j.active;
    if (filter === 'UPCOMING') return !j.active;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#050709] text-[#F5EDE0]">
      
      {/* 01. Page Hero Banner */}
      <PageHero
        breadcrumb="Journeys"
        badgeText="DESTINATION UNIVERSE"
        hindiTagline="हर यात्रा की अपनी एक कहानी है।"
        englishTitle="SACRED & HERITAGE JOURNEYS"
        description="Discover thoughtfully curated journeys across India's sacred shrines, living fortresses, timeless havelis, and holy riverbanks."
        backgroundImage="/assets/card-chardham.jpg"
        bgPosition="center 35%"
      >
        {/* Filter Controls */}
        <div className="flex items-center gap-2.5 pt-2">
          {(['ALL', 'ACTIVE', 'UPCOMING'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all cursor-pointer border min-h-[40px] touch-manipulation ${
                filter === tab
                  ? 'bg-[#C9A24A] text-[#080B0F] border-[#C9A24A] shadow-lg'
                  : 'bg-[#0D1117]/80 text-[#F5EDE0]/70 border-[#C9A24A]/25 hover:border-[#C9A24A] hover:text-[#C9A24A]'
              }`}
            >
              {tab === 'ALL' ? 'All Journeys' : tab === 'ACTIVE' ? 'Active Season (Jaisalmer)' : 'Upcoming Pilgrimages'}
            </button>
          ))}
        </div>
      </PageHero>

      {/* 02. Destination Cards Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredJourneys.map((j, index) => {
            const isJaisalmer = j.slug === 'jaisalmer';
            const waUrl = getJourneyWhatsAppLink(j.name);

            return (
              <motion.article
                key={j.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="bg-[#0D1117]/95 rounded-3xl border border-[#C9A24A]/30 overflow-hidden shadow-2xl hover:border-[#C9A24A]/80 transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
              >
                {/* Image Header with Badge */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={j.heroImage}
                    alt={`${j.name} — ${j.subTitle}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-black/30" />

                  {/* Season Badge */}
                  <div className="absolute top-4 left-4">
                    {j.active ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A24A] text-[#080B0F] text-[9px] font-extrabold uppercase tracking-widest shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#080B0F] animate-ping" />
                        ACTIVE CAMPAIGN
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#080B0F]/85 border border-[#C9A24A]/40 text-[#D8B982] text-[9px] font-bold uppercase tracking-widest backdrop-blur-md">
                        <Lock className="w-3 h-3 text-[#C9A24A]" />
                        UPCOMING SEASON
                      </span>
                    )}
                  </div>

                  {/* Location Name Tag */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C9A24A] block">
                      {j.seasonLabel}
                    </span>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F5EDE0]">
                      {j.name}
                    </h2>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="font-devanagari text-sm font-semibold text-[#D8B982]">
                        {j.hindiTitle}
                      </p>
                      <p className="text-xs text-[#F5EDE0]/70 font-light leading-relaxed">
                        {j.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="pt-2 border-t border-[#C9A24A]/20 space-y-2">
                      <span className="text-[10px] uppercase tracking-wider text-[#C9A24A] font-bold block">
                        Key Highlights
                      </span>
                      <ul className="space-y-1.5">
                        {j.highlights.slice(0, 3).map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#F5EDE0]/85">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24A] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-4 border-t border-[#C9A24A]/20">
                    {isJaisalmer ? (
                      <Link
                        to="/jaisalmer"
                        className="w-full py-3.5 px-5 rounded-full bg-gradient-to-r from-[#C9A24A] to-[#AA771C] hover:brightness-110 text-[#05070A] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 touch-manipulation text-center"
                      >
                        <span>EXPLORE JAISALMER EXPERIENCE</span>
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </Link>
                    ) : (
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-5 rounded-full bg-[#080B0F] border border-[#C9A24A]/40 text-[#F5EDE0] hover:bg-[#25D366] hover:border-[#25D366] hover:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 touch-manipulation text-center"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>ENQUIRE FOR SEASON DATES</span>
                      </a>
                    )}
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

        {/* 03. Custom Pilgrimage Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0D1117] via-[#121722] to-[#0D1117] border border-[#C9A24A]/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl"
        >
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold text-[#C9A24A] block">
              TAILOR-MADE ITINERARIES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5EDE0]">
              Planning a Custom Family or Group Yatra?
            </h2>
            <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light leading-relaxed">
              We design personalized multi-city pilgrimage circuits with dedicated chauffeur transport, heritage boutique stays, and shrine darshan coordination.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link
              to="/plan-journey"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C9A24A] text-[#080B0F] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-lg active:scale-95 text-center min-h-[44px] flex items-center justify-center"
            >
              PLAN YOUR JOURNEY →
            </Link>
            <a
              href={getWhatsAppLink('Namaste Shri Radha Vallabh 🙏\nI would like to enquire about a custom multi-destination spiritual yatra.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#080B0F] border border-[#25D366]/50 text-[#25D366] font-bold text-xs uppercase tracking-widest hover:bg-[#25D366] hover:text-white transition-all shadow-lg active:scale-95 text-center min-h-[44px] flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>CHAT ON WHATSAPP</span>
            </a>
          </div>
        </motion.div>

      </section>

    </div>
  );
};
