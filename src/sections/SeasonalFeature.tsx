import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { JOURNEYS_DATA } from '../data/journeys';
import { getJourneyWhatsAppLink } from '../data/siteConfig';

export const SeasonalFeature: React.FC = () => {
  const [selectedSeason, setSelectedSeason] = useState<'jaisalmer' | 'chardham'>('jaisalmer');
  const currentData = JOURNEYS_DATA[selectedSeason];
  const whatsappUrl = getJourneyWhatsAppLink(currentData.name);

  return (
    <section id="seasonal-journeys" className="py-28 bg-[#080B10] relative overflow-hidden border-b border-[#C9A24A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C9A24A]">
            FEATURED JOURNEYS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F5EFE6] leading-tight">
            THE JOURNEY CHANGES. <br className="hidden sm:inline" />
            <span className="gold-text">THE SPIRIT REMAINS.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F5EFE6]/75">
            Our journeys evolve across seasons—from desert winters in Rajasthan to Himalayan high-shrine pilgrimages.
          </p>
        </div>

        {/* Season Switcher Tabs */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setSelectedSeason('jaisalmer')}
            className={`px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
              selectedSeason === 'jaisalmer'
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA771C] text-[#080B10] border-[#D4AF37] shadow-xl'
                : 'bg-[#0B0E14] text-[#F5EFE6]/70 border-[#D4AF37]/30 hover:border-[#D4AF37]'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Active Campaign: Jaisalmer</span>
          </button>

          <button
            onClick={() => setSelectedSeason('chardham')}
            className={`px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
              selectedSeason === 'chardham'
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA771C] text-[#080B10] border-[#D4AF37] shadow-xl'
                : 'bg-[#0B0E14] text-[#F5EFE6]/70 border-[#D4AF37]/30 hover:border-[#D4AF37]'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Upcoming Preview: Char Dham</span>
          </button>
        </div>

        {/* Dynamic Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSeason}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-[#0B0E14] min-h-[460px] flex flex-col justify-end"
          >
            {/* Background Image */}
            <img
              src={currentData.heroImage}
              alt={currentData.name}
              className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-1000"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-[#080B10]/70 to-transparent" />

            {/* Top Badge */}
            <div className="absolute top-6 left-6 z-10">
              <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-[#D4AF37] text-[#080B10] rounded-full shadow-lg">
                {currentData.seasonLabel}
              </span>
            </div>

            {/* Card Content */}
            <div className="relative z-10 p-8 sm:p-12 space-y-4 max-w-3xl">
              <span className="font-hindi text-xl text-[#E5C378]">
                {currentData.hindiTitle}
              </span>

              <h3 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F5EFE6]">
                {currentData.title}
              </h3>

              <p className="text-sm sm:text-base text-[#F5EFE6]/80 leading-relaxed font-light">
                {currentData.description}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA771C] text-[#080B10] font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-xl hover:scale-105 transition-transform"
                >
                  <span>Enquire {currentData.name} Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
