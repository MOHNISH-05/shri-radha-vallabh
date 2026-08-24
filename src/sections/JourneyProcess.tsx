import React from 'react';
import { motion } from 'framer-motion';
import { Map, Sparkles, Globe, Home } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    icon: Map,
    title: 'Plan',
    hindi: 'अपनी यात्रा चुनें',
    desc: 'Share your interests, dates and group size. We design a journey around you.',
  },
  {
    num: '02',
    icon: Sparkles,
    title: 'Curate',
    hindi: 'आपकी आवश्यकताओं के अनुसार योजना',
    desc: 'We craft a personalised itinerary with handpicked stays, routes and experiences.',
  },
  {
    num: '03',
    icon: Globe,
    title: 'Experience',
    hindi: 'यात्रा, दर्शन और स्थानीय अनुभव',
    desc: 'Immerse in heritage, sacred darshans, local culture and unforgettable moments.',
  },
  {
    num: '04',
    icon: Home,
    title: 'Return',
    hindi: 'स्मृतियों के साथ घर वापसी',
    desc: 'Come home with stories, memories and the warmth of a sacred journey.',
  },
];

export const JourneyProcess: React.FC = () => (
  <section id="process" className="py-16 sm:py-24 relative overflow-hidden bg-[#050709]">
    {/* Subtle background texture */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 jaali-pattern opacity-6" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080B0F] via-[#050709] to-[#080B0F]" />
    </div>

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 sm:mb-16 space-y-1.5 sm:space-y-2"
      >
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-bold text-[#C9A24A]">HOW IT WORKS</span>
        <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-[#F5EFE3]">
          Your Journey, <span className="gold-text">Our Craft</span>
        </h2>
        <p className="font-hindi text-sm sm:text-lg text-[#D8B982]/80">यात्रा की शुरुआत से स्मृतियों तक</p>
      </motion.div>

      {/* Steps: 1 col on mobile, 2 col on tablet, 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-4">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative group"
          >
            {/* Desktop connector line */}
            {i < STEPS.length - 1 && (
              <div className="hidden lg:block absolute top-9 left-[calc(100%-0px)] w-full h-[1px] bg-gradient-to-r from-[#C9A24A]/30 to-transparent z-0 -translate-x-4" />
            )}

            <div className="relative z-10 flex flex-col items-start gap-3 sm:gap-4 p-5 sm:p-6 rounded-2xl bg-[#0A0D12]/80 border border-[#C9A24A]/15 group-hover:border-[#C9A24A]/40 transition-all duration-300 h-full backdrop-blur-sm">

              {/* Step number & Icon */}
              <div className="flex items-center gap-3 w-full justify-between sm:justify-start">
                <span className="font-serif text-3xl sm:text-4xl font-extrabold gold-text opacity-50 group-hover:opacity-80 transition-opacity leading-none">
                  {step.num}
                </span>
                <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#C9A24A] shrink-0" />
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#F5EFE3] group-hover:text-[#C9A24A] transition-colors">
                  {step.title}
                </h3>
                <p className="font-hindi text-xs sm:text-sm text-[#D8B982]/80 leading-snug">{step.hindi}</p>
              </div>

              <p className="text-xs text-[#F5EFE3]/60 leading-relaxed font-light">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
