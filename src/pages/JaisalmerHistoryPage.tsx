import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowUpRight, MessageCircle } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { JAISALMER_HISTORY_PERIODS } from '../data/jaisalmerHistory';
import { getJourneyWhatsAppLink } from '../data/siteConfig';

export const JaisalmerHistoryPage: React.FC = () => {
  const [selectedPeriodId, setSelectedPeriodId] = useState<string>(JAISALMER_HISTORY_PERIODS[0].id);

  const selectedPeriod =
    JAISALMER_HISTORY_PERIODS.find((p) => p.id === selectedPeriodId) ||
    JAISALMER_HISTORY_PERIODS[0];

  const waUrl = getJourneyWhatsAppLink('Jaisalmer Heritage & Historical Trail');

  return (
    <div className="min-h-screen bg-[#050709] text-[#F5EDE0] selection:bg-[#C9A24A]/30">
      
      {/* 01. Hero Banner */}
      <PageHero
        breadcrumb="Jaisalmer History"
        badgeText="ARCHIVAL HISTORICAL CHRONICLE · 1156 AD – PRESENT"
        hindiTagline="रेत में लिखी एक राजसी कहानी।"
        englishTitle="THE HISTORY OF JAISALMER"
        description="From 12th-century Yaduvanshi Bhati foundations and Silk Route trade to medieval sieges, royal treaties, and modern UNESCO World Heritage glory."
        backgroundImage="/assets/optimized/jaisalmer-fort-1920.webp"
        bgPosition="center 40%"
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            to="/jaisalmer/riyasat"
            className="px-5 py-2.5 rounded-full bg-[#C9A24A] text-[#080B0F] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-lg active:scale-95 flex items-center gap-1.5"
          >
            <span>Explore The Riyasat &amp; Royal House</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            to="/jaisalmer"
            className="px-5 py-2.5 rounded-full bg-[#0D1117]/80 border border-[#C9A24A]/40 text-[#F5EDE0] font-bold text-xs uppercase tracking-widest hover:text-[#C9A24A] transition-all"
          >
            ← Back to Jaisalmer Portal
          </Link>
        </div>
      </PageHero>

      {/* 02. Historical Timeline & In-Depth Chronicle */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        {/* Cinematic full-bleed background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/optimized/jaisalmer-fort-palace-1920.webp"
            alt=""
            className="w-full h-full object-cover brightness-[0.22]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050709]/90 via-[#050709]/70 to-[#050709]/92" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Intro strip */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
            CHRONOLOGICAL ERAS (1156 AD – PRESENT)
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EDE0]">
            Eight Centuries of Fortified Glory
          </h2>
          <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light leading-relaxed">
            Select an era from the timeline below to explore verified historical events, royal leadership, and architectural milestones.
          </p>
        </div>

        {/* Horizontal / Wrapped Era Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto">
          {JAISALMER_HISTORY_PERIODS.map((period) => {
            const isSelected = selectedPeriod.id === period.id;

            return (
              <button
                key={period.id}
                onClick={() => setSelectedPeriodId(period.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border min-h-[44px] touch-manipulation flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#C9A24A] text-[#080B0F] border-[#C9A24A] shadow-xl scale-105'
                    : 'bg-[#0D1117] text-[#F5EDE0]/70 border-[#C9A24A]/25 hover:border-[#C9A24A] hover:text-[#C9A24A]'
                }`}
              >
                <span className="text-[10px] opacity-75 font-mono">[{period.era}]</span>
                <span>{period.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Era Featured Chronicle */}
        <motion.div
          key={selectedPeriod.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0D1117]/95 rounded-3xl border border-[#C9A24A]/40 p-6 sm:p-12 shadow-2xl space-y-10"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#C9A24A]/20">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#C9A24A]/20 text-[#C9A24A] text-[10px] font-extrabold uppercase tracking-widest">
                  {selectedPeriod.yearRange}
                </span>
                <span className="text-xs text-[#D8B982] font-mono">· {selectedPeriod.era}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#F5EDE0]">
                {selectedPeriod.title}
              </h3>
              <p className="font-devanagari text-base sm:text-lg text-[#D8B982]">
                {selectedPeriod.hindiTitle}
              </p>
            </div>

            <div className="shrink-0">
              <span className="px-3 py-1.5 rounded-full bg-[#080B0F] border border-[#C9A24A]/30 text-[#D8B982] text-[10px] font-bold uppercase tracking-wider">
                {selectedPeriod.category}
              </span>
            </div>
          </div>

          {/* Body: Narrative & Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-[#F5EDE0]/85 font-light leading-relaxed">
              {selectedPeriod.fullNarrative.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              {/* Key Figures & Events */}
              <div className="pt-6 border-t border-[#C9A24A]/20 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#080B0F] border border-[#C9A24A]/25 space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#C9A24A] block">
                    Key Historical Figures
                  </span>
                  <ul className="space-y-1 text-xs text-[#F5EDE0]/80 font-light">
                    {selectedPeriod.keyFigures.map((fig, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="text-[#C9A24A]">›</span>
                        <span>{fig}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-[#080B0F] border border-[#C9A24A]/25 space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#C9A24A] block">
                    Historical Milestones
                  </span>
                  <ul className="space-y-1 text-xs text-[#F5EDE0]/80 font-light">
                    {selectedPeriod.historicalEvents.map((evt, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#C9A24A] mt-0.5">•</span>
                        <span>{evt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Visual (5 cols) */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl border border-[#C9A24A]/30 aspect-[4/3] sm:aspect-[4/4]">
              <img
                src={selectedPeriod.image}
                alt={selectedPeriod.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B0F]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#080B0F]/85 backdrop-blur-md border border-[#C9A24A]/30 space-y-1">
                <span className="text-[9px] uppercase font-bold tracking-widest text-[#C9A24A] block">
                  HISTORICAL ARCHIVE
                </span>
                <p className="text-xs text-[#F5EDE0] font-medium leading-snug">
                  {selectedPeriod.shortSummary}
                </p>
              </div>
            </div>

          </div>

          {/* Sources strip */}
          <div className="pt-4 border-t border-[#C9A24A]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#F5EDE0]/60">
            <div>
              <span className="text-[#C9A24A] font-semibold">Sources &amp; References: </span>
              <span>{selectedPeriod.sources.join(' · ')}</span>
            </div>
            <Link
              to="/jaisalmer/riyasat"
              className="text-xs font-bold uppercase tracking-wider text-[#C9A24A] hover:text-white flex items-center gap-1"
            >
              <span>Explore Royal Riyasat</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </motion.div>

        {/* 03. Plan Historical Guided Journey CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0D1117] via-[#121722] to-[#0D1117] border border-[#C9A24A]/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="max-w-xl mx-auto space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
              EXPERIENCE LIVING HISTORY IN PERSON
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#F5EDE0]">
              Walk the 800-Year-Old Ramparts
            </h3>
            <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light leading-relaxed">
              We arrange private scholar-guided architectural walks through Sonar Qila, Patwon Ki Haveli, and royal cenotaphs tailored to your family.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/plan-journey?destination=Jaisalmer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C9A24A] text-[#080B0F] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-lg active:scale-95 text-center min-h-[44px] flex items-center justify-center"
            >
              PLAN HISTORICAL JAISALMER ITINERARY →
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#080B0F] border border-[#25D366]/50 text-[#25D366] font-bold text-xs uppercase tracking-widest hover:bg-[#25D366] hover:text-white transition-all shadow-lg active:scale-95 text-center min-h-[44px] flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>ENQUIRE ON WHATSAPP</span>
            </a>
          </div>
        </div>

        </div>{/* close relative z-10 inner wrapper */}
      </section>

      {/* 03. The Royal House Today — Chaitanya Raj Singh */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/king chaitanya raj sing/WhatsApp Image 2026-08-22 at 12.23.12.jpeg"
            alt="Maharawal Chaitanya Raj Singh"
            className="w-full h-full object-cover brightness-[0.52]"
            style={{ objectPosition: 'center 35%' }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050709]/92 via-[#050709]/65 to-[#050709]/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050709]/60 via-transparent to-[#050709]/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-[0.35em] text-[#C9A24A]">
                  THE LIVING LEGACY · PRESENT DAY
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F5EDE0]">
                  The Royal House Today
                </h2>
                <p className="font-devanagari text-lg text-[#D8B982]" lang="hi">
                  आज का राजसी परिवार
                </p>
              </div>
              <div className="space-y-4 text-sm text-[#F5EDE0]/82 font-light leading-relaxed">
                <p>
                  The unbroken line of Bhati Maharawals continues to the present day. In December 2020, following the passing of Maharawal Brijraj Singh, his son Chaitanya Raj Singh succeeded as the 44th head of the royal house. The formal Raj Tilak ceremony was held in January 2021 at Sonar Qila — in accordance with centuries-old Bhati tradition.
                </p>
                <p>
                  Today, Maharawal Chaitanya Raj Singh serves as titular Maharawal and cultural custodian — continuing the Bhati tradition of heritage stewardship, community service, and devotion to Jaisalmer's living identity.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/jaisalmer/riyasat/chaitanya-raj-singh"
                  className="px-6 py-3 rounded-full bg-[#C9A24A] text-[#050709] font-bold text-[10px] uppercase tracking-widest hover:brightness-110 transition-all shadow-lg active:scale-95 min-h-[44px] flex items-center gap-1.5"
                >
                  <span>Meet Maharawal Chaitanya Raj Singh</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/jaisalmer/riyasat"
                  className="px-6 py-3 rounded-full bg-transparent border border-[#C9A24A]/50 text-[#F5EDE0] font-bold text-[10px] uppercase tracking-widest hover:border-[#C9A24A] hover:text-[#C9A24A] transition-all min-h-[44px] flex items-center"
                >
                  Explore the Riyasat
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};
