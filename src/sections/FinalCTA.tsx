import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { getWhatsAppLink } from '../data/siteConfig';

export const FinalCTA: React.FC = () => {
  const whatsappUrl = getWhatsAppLink(
    'Namaste Shri Radha Vallabh 🙏\nमैं अपनी यात्रा शुरू करना चाहता हूँ। Please guide me.'
  );

  return (
    <section
      id="final-cta"
      className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#050709]"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/jaisalmer/web_DJI_0661.JPG"
          alt="Sacred Indian landscape"
          className="w-full h-full object-cover brightness-[0.35]"
          style={{ objectPosition: 'center 60%' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050709]/90 via-[#050709]/50 to-[#050709]/95" />
        {/* Gold ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[250px] sm:h-[300px] bg-[#C9A24A]/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 py-16 sm:py-24">

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-13 h-13 sm:w-16 sm:h-16 rounded-full border-2 border-[#C9A24A]/60 bg-[#080B0F]/80 flex items-center justify-center mx-auto text-xl sm:text-2xl shadow-2xl backdrop-blur-md"
          aria-hidden="true"
        >
          🛕
        </motion.div>

        {/* Hindi headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="space-y-2 sm:space-y-3"
        >
          <h2 className="font-hindi text-2xl sm:text-4xl text-[#D8B982] font-light">
            हर यात्रा एक कहानी है।
          </h2>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F5EFE3] leading-tight drop-shadow-2xl">
            हर कदम एक{' '}
            <span className="gold-text">अनुभव।</span>
          </h2>
          <p className="text-xs sm:text-base text-[#F5EFE3]/60 font-light max-w-xl mx-auto mt-2">
            Every journey tells a story. Every step becomes an experience.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto w-full"
        >
          <Link
            to="/plan-journey"
            id="final-cta-begin"
            className="group flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#C9A24A] via-[#D8B982] to-[#A8832A] hover:brightness-110 text-[#050709] font-extrabold text-[10px] sm:text-[11px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all duration-300 w-full sm:w-auto min-h-[48px] touch-manipulation"
          >
            <span>Begin Your Journey</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <a
            href={whatsappUrl}
            id="final-cta-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] font-bold text-[10px] sm:text-[11px] uppercase tracking-widest border border-[#25D366]/40 hover:border-[#25D366]/70 transition-all duration-300 w-full sm:w-auto min-h-[48px] touch-manipulation"
          >
            <MessageCircle className="w-4 h-4 fill-[#25D366] stroke-none" />
            <span>WhatsApp Us</span>
          </a>
        </motion.div>

        {/* Divider / bottom footer strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="pt-4 sm:pt-8 flex items-center justify-center gap-3"
        >
          <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C9A24A]/50" />
          <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.35em] text-[#C9A24A]/50 font-bold">
            SHRI RADHA VALLABH · HERITAGE &amp; JOURNEYS
          </span>
          <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C9A24A]/50" />
        </motion.div>
      </div>
    </section>
  );
};
