import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Shield, Compass } from 'lucide-react';
import { WHY_TRAVEL_POINTS } from '../data/journeys';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart':
        return <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#C9A24A]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#C9A24A]" />;
      case 'Shield':
        return <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#C9A24A]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-[#C9A24A]" />;
      default:
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#C9A24A]" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 relative overflow-hidden bg-[#080B0F] border-t border-b border-[#C9A24A]/30">
      {/* Jaisalmer Architecture Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/jaisalmer/web_DSC_0273.JPG"
          alt="Jaisalmer Heritage Architecture"
          className="w-full h-full object-cover brightness-70"
          style={{ objectPosition: 'center center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080B0F]/90 via-[#080B0F]/60 to-[#080B0F]/95" />
        <div className="absolute inset-0 jaali-pattern opacity-25 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold text-[#C9A24A]">
            THE BRAND PHILOSOPHY
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F5EDE0]">
            WHY TRAVEL WITH US
          </h2>
          <p className="font-hindi text-base sm:text-xl text-[#D8B982]">
            यात्रा से अनुभव तक।
          </p>
        </div>

        {/* Feature Points Grid: 1 col on mobile, 2 col on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {WHY_TRAVEL_POINTS.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-[#0D1117]/90 backdrop-blur-md p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#C9A24A]/30 hover:border-[#C9A24A]/70 shadow-xl transition-all duration-300 space-y-3 sm:space-y-4 group hover:-translate-y-1"
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-[#080B0F] border border-[#C9A24A]/40 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-md">
                {getIcon(point.icon)}
              </div>

              <h3 className="font-serif text-base sm:text-lg font-bold text-[#F5EDE0] group-hover:text-[#C9A24A] transition-colors tracking-wide">
                {point.title}
              </h3>

              <p className="text-xs text-[#F5EDE0]/80 leading-relaxed font-light">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
