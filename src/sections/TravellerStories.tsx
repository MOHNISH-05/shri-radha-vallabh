import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Shield, ArrowUpRight, MessageCircle } from 'lucide-react';
import { BRAND_EXPERIENCES } from '../data/journeys';
import { getWhatsAppLink } from '../data/siteConfig';

export const TravellerStories: React.FC = () => {
  const whatsappUrl = getWhatsAppLink(
    'Namaste Shri Radha Vallabh 🙏\nI would like to know more about your curated travel services and personalized arrangements.'
  );

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart':
        return <Heart className="w-6 h-6 text-[#C9A24A]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#C9A24A]" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-[#C9A24A]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C9A24A]" />;
    }
  };

  return (
    <section id="experience" className="py-16 sm:py-28 relative overflow-hidden bg-[#080B0F] border-b border-[#C9A24A]/30">
      {/* Sacred River Ghats & Heritage Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/temple-twilight.jpg"
          alt="Sacred River Ghats & Heritage Evening"
          className="w-full h-full object-cover opacity-50 filter brightness-85"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080B0F]/92 via-[#080B0F]/70 to-[#080B0F]/95" />
        <div className="absolute inset-0 jaali-pattern opacity-20 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold text-[#C9A24A]">
            सेवा और समर्पण
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F5EDE0]">
            THE SHRI RADHA VALLABH EXPERIENCE
          </h2>
          <p className="text-xs sm:text-base text-[#F5EDE0]/85 font-light max-w-lg mx-auto">
            Our foundational commitments to every traveler seeking sacred heritage, peace, and seamless care.
          </p>
        </div>

        {/* Brand Experience Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {BRAND_EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-[#0D1117]/92 backdrop-blur-md p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#C9A24A]/30 hover:border-[#C9A24A]/70 shadow-xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#080B0F] border border-[#C9A24A]/40 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-md">
                  {getIcon(exp.icon)}
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#F5EDE0] group-hover:text-[#C9A24A] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="font-hindi text-xs sm:text-sm text-[#D8B982] leading-tight">
                    {exp.hindi}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#F5EDE0]/80 leading-relaxed font-light">
                  {exp.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#C9A24A]/20">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase font-bold tracking-widest text-[#C9A24A] hover:text-white transition-colors"
                >
                  <span>Enquire for Arrangements</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dedicated Support & Route Link */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/stories"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#080B0F]/90 border border-[#C9A24A]/40 text-[#F5EDE0] hover:bg-[#C9A24A] hover:text-[#080B0F] text-xs font-semibold uppercase tracking-wider backdrop-blur-md transition-all shadow-lg active:scale-95 touch-manipulation"
          >
            <span>READ EXPERIENCES &amp; STORIES →</span>
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#080B0F]/80 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-md transition-all shadow-lg active:scale-95 touch-manipulation"
          >
            <MessageCircle className="w-4 h-4 fill-white stroke-none" />
            <span>Speak with our Travel Coordinator</span>
          </a>
        </div>

      </div>
    </section>
  );
};
