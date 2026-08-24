import React from 'react';
import { FEATURED_YATRAS } from '../data/toursData';
import { YatraCard } from '../components/YatraCard';
import { Sparkles } from 'lucide-react';

export const FeaturedYatras: React.FC = () => {
  return (
    <section id="yatras" className="py-24 bg-[#FAF5EF] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#58181F]/10 border border-[#58181F]/20 text-[#58181F]">
            <Sparkles className="w-4 h-4 text-[#E65C00]" />
            <span className="text-xs uppercase tracking-widest font-bold">
              FEATURED PILGRIMAGE PACKAGES
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2C1810]">
            Begin Your Sacred Journey
          </h2>

          <p className="text-base text-[#2C1810]/75">
            Explore our most cherished pilgrimage experiences across India's sacred shrines and holy cities.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto pt-2" />
        </div>

        {/* Yatra Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_YATRAS.map((yatra) => (
            <YatraCard key={yatra.id} yatra={yatra} />
          ))}
        </div>

        {/* Custom Note */}
        <div className="text-center pt-4">
          <p className="text-xs text-[#2C1810]/60 italic">
            * Custom dates, group packages &amp; personalized itineraries available upon request via WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
};
