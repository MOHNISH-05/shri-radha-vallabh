import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, Home, MapPin, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/siteConfig';

export const NotFoundPage: React.FC = () => {
  const whatsappUrl = getWhatsAppLink(
    'Namaste Shri Radha Vallabh 🙏\nI was looking for a page on your website that could not be found. Please assist me with my travel inquiry.'
  );

  return (
    <div className="min-h-screen bg-[#050709] text-[#F5EDE0] flex items-center justify-center relative overflow-hidden py-24 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/temple-twilight.jpg"
          alt="Sacred Twilight"
          className="w-full h-full object-cover brightness-[0.25]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050709]/90 via-[#050709]/60 to-[#050709]/95" />
        <div className="absolute inset-0 jaali-pattern opacity-20 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto text-center space-y-6">
        
        {/* Tilak / Compass Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-16 h-16 rounded-full border-2 border-[#C9A24A]/60 bg-[#080B0F]/90 flex items-center justify-center mx-auto text-2xl shadow-2xl backdrop-blur-md text-[#C9A24A]"
        >
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '20s' }} />
        </motion.div>

        {/* Hindi & English Message */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-2"
        >
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
            ERROR 404 · ROUTE NOT FOUND
          </span>
          <h1 className="font-devanagari text-2xl sm:text-3xl text-[#D8B982] font-semibold" lang="hi">
            यह यात्रा यहाँ समाप्त नहीं होती।
          </h1>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#F5EDE0] tracking-wide">
            THE JOURNEY CONTINUES
          </h2>
          <p className="text-xs sm:text-sm text-[#F5EDE0]/70 font-light max-w-md mx-auto leading-relaxed pt-1">
            The page you are looking for has moved or does not exist. Choose one of our sacred routes below to return on your way.
          </p>
        </motion.div>

        {/* Quick Navigation CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4"
        >
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C9A24A] to-[#AA771C] text-[#05070A] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>RETURN HOME</span>
          </Link>

          <Link
            to="/journeys"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#0D1117] border border-[#C9A24A]/40 text-[#F5EDE0] hover:text-[#C9A24A] font-bold text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4 text-[#C9A24A]" />
            <span>VIEW ALL JOURNEYS</span>
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#080B0F] border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>ASSISTANCE</span>
          </a>
        </motion.div>

      </div>
    </div>
  );
};
