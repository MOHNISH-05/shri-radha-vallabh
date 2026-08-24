import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

/* ─── Very subtle warm motes floating in spiritual atmosphere ─── */
const MOTES = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  x: 45 + Math.random() * 50,
  size: Math.random() * 2 + 1,
  dur: Math.random() * 10 + 9,
  delay: Math.random() * 7,
}));

export const Hero: React.FC = () => {
  const reduced = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#05070A] min-h-[100svh] h-[100svh]"
      aria-label="Shri Radha Vallabh — Heritage & Journeys"
    >
      {/* ═══════════════════════════════════════════════
          SINGLE FULL-BLEED CINEMATIC HERO BACKGROUND
          One authentic Laxminath Ji + Jaisalmer Heritage image.
          Responsive positioning: on mobile shows deity clearly
          in upper viewport, while desktop shows wide panorama.
      ═══════════════════════════════════════════════ */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: reduced ? 1 : 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 22, ease: 'easeOut' }}
        aria-hidden="true"
      >
        <img
          src="/assets/laxminath-hero.jpg"
          alt="Shri Radha Vallabh spiritual heritage journey featuring Laxminath Ji and Jaisalmer heritage landscape"
          className="w-full h-full object-cover object-[20%_15%] sm:object-center"
          fetchPriority="high"
          decoding="async"
        />
      </motion.div>

      {/* ═══════════════════════════════════════════════
          RESPONSIVE CINEMATIC OVERLAYS (10-20% Darkness)
          - On desktop: smooth horizontal gradient (right side dark for text)
          - On mobile: smooth vertical gradient (bottom dark for text, deity vivid on top)
      ═══════════════════════════════════════════════ */}

      {/* Desktop Horizontal Scrim Overlay */}
      <div
        className="hidden md:block absolute inset-0 z-5 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(5,7,10,0.02) 0%, rgba(5,7,10,0.12) 32%, rgba(5,7,10,0.52) 55%, rgba(5,7,10,0.76) 75%, rgba(5,7,10,0.85) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Mobile Vertical Scrim Overlay (leaves deity top 45% fully vivid) */}
      <div
        className="md:hidden absolute inset-0 z-5 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(5,7,10,0.40) 0%, rgba(5,7,10,0.10) 25%, rgba(5,7,10,0.55) 55%, rgba(5,7,10,0.85) 78%, #05070A 100%)',
        }}
        aria-hidden="true"
      />

      {/* Top Navbar Gradient Protection */}
      <div className="absolute inset-x-0 top-0 h-28 sm:h-32 z-5 bg-gradient-to-b from-[#05070A]/75 to-transparent pointer-events-none" aria-hidden="true" />

      {/* Bottom Section Transition Fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 z-5 bg-gradient-to-t from-[#05070A] via-[#05070A]/60 to-transparent pointer-events-none" aria-hidden="true" />

      {/* Gentle Radial Vignette */}
      <div
        className="absolute inset-0 z-5 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 120% 120% at 35% 45%, transparent 30%, rgba(5,7,10,0.30) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Ambient Diya warm glow accents at base */}
      <div className="absolute bottom-10 left-[15%] w-36 h-16 rounded-full bg-[#C9A24A]/15 blur-3xl z-5 pointer-events-none hidden sm:block" style={{ animation: 'breathe 4s ease-in-out infinite' }} aria-hidden="true" />
      <div className="absolute bottom-6 left-[28%] w-20 h-10 rounded-full bg-[#E88C30]/10 blur-2xl z-5 pointer-events-none hidden sm:block" style={{ animation: 'breathe 3.2s 0.8s ease-in-out infinite' }} aria-hidden="true" />

      {/* Floating Golden Particles (desktop only) */}
      {!reduced && (
        <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none hidden sm:block" aria-hidden="true">
          {MOTES.map(m => (
            <div
              key={m.id}
              className="absolute rounded-full bg-[#C9A24A]"
              style={{
                left: `${m.x}%`,
                bottom: '-4px',
                width: `${m.size}px`,
                height: `${m.size}px`,
                opacity: 0,
                animation: `floatUp ${m.dur}s ${m.delay}s linear infinite`,
              }}
            />
          ))}
        </div>
      )}

      {/* ═══════════════════════════════════════════════
          HERO CONTENT (Text Safe Zone)
      ═══════════════════════════════════════════════ */}
      <div className="relative z-20 flex items-end md:items-center w-full h-[100svh] min-h-[100svh]">

        {/* Left Spacer — Keeps text from obstructing Laxminath Ji on desktop */}
        <div className="hidden md:block shrink-0" style={{ width: '44%' }} aria-hidden="true" />

        {/* Text Safe Zone Container */}
        <div className="w-full md:flex-1 flex flex-col justify-center gap-2.5 sm:gap-4 px-5 sm:px-8 md:px-6 lg:px-10 xl:px-14 pb-12 pt-20 sm:py-24 md:py-16">

          {/* Label 1: Brand pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C9A24A]/40 bg-[#05070A]/60 backdrop-blur-md w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24A] animate-pulse" />
            <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.32em] text-[#C9A24A]">
              {SITE_CONFIG.brandName}
            </span>
          </motion.div>

          {/* Label 2: Small Hindi Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="font-devanagari text-sm sm:text-lg text-[#D8B982] tracking-wider"
            lang="hi"
          >
            आस्था से अनुभव तक
          </motion.p>

          {/* Main Headline: "एक दिव्य \n यात्रा" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              className="font-devanagari font-bold drop-shadow-2xl text-[#F5EFE3]"
              lang="hi"
              style={{ fontSize: 'clamp(2.1rem, 5.5vw, 4.6rem)', lineHeight: 1.12 }}
            >
              <span className="block text-[#F5EFE3]">एक <span className="gold-text">दिव्य</span></span>
              <span className="block text-[#F5EFE3]">यात्रा</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="font-devanagari text-base sm:text-xl text-[#E5D0A0] font-normal leading-relaxed"
            lang="hi"
          >
            विरासत की, विश्वास की, और आत्मा की।
          </motion.p>

          {/* English Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="text-xs sm:text-[15px] text-[#F5EFE3]/70 font-light leading-relaxed max-w-md hidden sm:block"
          >
            Thoughtfully curated journeys through India's sacred traditions,
            living heritage and unforgettable landscapes.
          </motion.p>

          {/* Devotional Shloka Glass Panel */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="inline-block px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-[#C9A24A]/30 bg-[#05070A]/50 backdrop-blur-md max-w-xs sm:max-w-sm"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="w-4 sm:w-5 h-[1px] bg-[#C9A24A]/60" />
              <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.28em] text-[#C9A24A] font-bold">
                श्रीकृष्ण स्तुति
              </span>
              <span className="w-4 sm:w-5 h-[1px] bg-[#C9A24A]/60" />
            </div>
            <p className="font-devanagari text-[11px] sm:text-sm text-[#F5EFE3]/85 leading-snug sm:leading-relaxed" lang="hi">
              श्री कृष्ण गोविन्द हरे मुरारे ।<br />
              हे नाथ नारायण वासुदेव ॥
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1 w-full max-w-[340px] sm:max-w-none"
          >
            <Link
              to="/journeys"
              id="hero-cta-explore"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 min-h-[48px] rounded-full bg-gradient-to-r from-[#C9A24A] via-[#D8B982] to-[#AA771C] hover:brightness-110 text-[#05070A] font-bold shadow-2xl active:scale-95 transition-all duration-300 border border-[#D8B982]/30 text-xs sm:text-sm touch-manipulation text-center"
            >
              <span className="font-devanagari font-bold">यात्राएँ देखें</span>
              <span className="text-[10px] opacity-75 hidden sm:inline tracking-widest">· EXPLORE JOURNEYS</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </Link>
            <Link
              to="/plan-journey"
              id="hero-cta-plan"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 min-h-[48px] rounded-full bg-[#05070A]/50 hover:bg-[#C9A24A]/15 text-[#F5EFE3] hover:text-[#C9A24A] font-bold border border-[#C9A24A]/45 hover:border-[#C9A24A] transition-all duration-300 backdrop-blur-md text-xs sm:text-sm active:scale-95 touch-manipulation text-center"
            >
              <span className="font-devanagari font-bold">अपनी यात्रा बनाएँ</span>
              <span className="text-[10px] opacity-65 hidden sm:inline tracking-widest">· PLAN JOURNEY</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Nudge Indicator (hidden on small height mobile screens to avoid overlap) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 2.0 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-1"
        aria-hidden="true"
      >
        <span className="text-[7px] uppercase tracking-[0.38em] font-bold text-[#C9A24A]/50">Scroll</span>
        <a href="#stats" aria-label="Scroll down to explore">
          <ChevronDown className="w-4 h-4 text-[#C9A24A]/40 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};
