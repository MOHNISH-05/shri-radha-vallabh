import React from 'react';
import { motion } from 'framer-motion';

export const BrandStatement: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-28 relative border-t border-b border-[#C9A24A]/30 overflow-hidden bg-[#080B0F]">
      {/* Visible Heritage Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/patwon-haveli.png"
          alt="Jaisalmer Haveli Background"
          className="w-full h-full object-cover opacity-75 filter brightness-90"
        />
        {/* Soft Transparent Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080B0F]/90 via-[#080B0F]/65 to-[#080B0F]/95" />
        <div className="absolute inset-0 jaali-pattern opacity-25 pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6 sm:space-y-8">
        
        {/* Devanagari Hindi Signature Accent */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-block"
        >
          <span className="font-hindi text-lg sm:text-2xl text-[#C9A24A] border-b border-[#C9A24A]/50 pb-1 italic drop-shadow-md">
            आस्था से अनुभव तक।
          </span>
        </motion.div>

        {/* Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-1 sm:space-y-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
        >
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F5EDE0] leading-tight">
            Journeys rooted in tradition.
          </h2>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold gold-text leading-tight">
            Designed for today.
          </h2>
        </motion.div>

        {/* Brand Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xs sm:text-base lg:text-lg text-[#F5EDE0]/95 leading-relaxed font-light max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] bg-[#080B0F]/50 p-4 sm:p-6 rounded-2xl border border-[#C9A24A]/20 backdrop-blur-sm"
        >
          <strong className="font-semibold text-[#C9A24A]">SHRI RADHA VALLABH</strong> crafts curated, high-touch journeys through India’s timeless heritage, living culture, and sacred shrines—combining deep cultural reverence with modern luxury and personal care.
        </motion.p>

        {/* Decorative Heritage Divider */}
        <div className="pt-4 flex items-center justify-center gap-3">
          <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C9A24A]" />
          <span className="text-[#C9A24A] text-sm font-serif">🪔</span>
          <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C9A24A]" />
        </div>

      </div>
    </section>
  );
};
