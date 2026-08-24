import React from 'react';
import { motion } from 'framer-motion';

/* ─── Editable stats — client should confirm these values ── */
const STATS = [
  { icon: '🛕', value: 'पवित्र', label: 'यात्राएँ', sub: 'Sacred Journeys' },
  { icon: '🤝', value: 'व्यक्तिगत', label: 'सहयोग', sub: 'Personal Attention' },
  { icon: '🕐', value: 'हमेशा', label: 'उपलब्ध', sub: 'Always Available' },
  { icon: '✨', value: 'चुनिंदा', label: 'अनुभव', sub: 'Curated Experiences' },
  { icon: '🙏', value: 'परंपरा', label: 'और विश्वास', sub: 'Tradition & Trust' },
] as const;

export const StatsBar: React.FC = () => (
  <section id="stats" className="bg-[#070A0D] border-t border-b border-[#C9A24A]/20 py-4 sm:py-5 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
      >
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.sub}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`flex items-center gap-2.5 sm:gap-3 py-1.5 sm:py-1 ${
              i === STATS.length - 1 ? 'col-span-2 sm:col-span-1 justify-center sm:justify-start' : ''
            }`}
          >
            {/* Desktop separator line */}
            {i > 0 && (
              <div className="hidden lg:block w-[1px] h-8 bg-[#C9A24A]/20 shrink-0 -ml-2 mr-1" />
            )}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <span className="text-lg sm:text-xl shrink-0" aria-hidden="true">{stat.icon}</span>
              <div>
                <div className="flex items-baseline gap-1 leading-tight">
                  <span className="font-hindi text-sm sm:text-lg font-bold text-[#C9A24A]">{stat.value}</span>
                  <span className="font-hindi text-xs sm:text-sm text-[#D8B982]/90">{stat.label}</span>
                </div>
                <span className="text-[8px] sm:text-[10px] uppercase tracking-widest text-[#F5EFE3]/50 font-semibold block">
                  {stat.sub}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
