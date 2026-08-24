import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Landmark, Tent, Music4, Utensils, Mountain, Flame, Compass, Sparkles } from 'lucide-react';
import { SITE_CONFIG, getJourneyWhatsAppLink } from '../data/siteConfig';

/* ─────────────────────────────────────────────────────────────
   SEASONAL CAMPAIGNS MAP
   Controlled dynamically via SITE_CONFIG.activeFeaturedJourney
   ───────────────────────────────────────────────────────────── */

interface CampaignData {
  seasonLabel: string;
  destination: string;
  hindiTitle: string;
  subtitle: string;
  description: string;
  highlights: { icon: React.ComponentType<{ className?: string }>; label: string }[];
  ctaLabel: string;
  ctaHref: string;
  image: string;
  bgImage: string;
}

const CAMPAIGNS: Record<string, CampaignData> = {
  jaisalmer: {
    seasonLabel: 'CURRENT FEATURED JOURNEY',
    destination: 'Jaisalmer',
    hindiTitle: 'जैसलमेर',
    subtitle: 'स्वर्णिम धरा, अनंत कहानियाँ।',
    description:
      'Bask in golden sunlight over the ancient sandstone towers of Sonar Qella. Walk through living fort lanes, explore historic havelis, relax at Gadisar Lake, enjoy desert safaris and experience authentic Rajasthani culture, music and cuisine.',
    highlights: [
      { icon: Landmark, label: 'Living Fort\nWalks' },
      { icon: Tent,     label: 'Desert\nExperiences' },
      { icon: Music4,   label: 'Cultural\nHeritage' },
      { icon: Utensils, label: 'Local Food\n& Music' },
    ],
    ctaLabel: 'DISCOVER JAISALMER →',
    ctaHref: '/jaisalmer',
    image: '/images/jaisalmer/Jaisalmer Photos/jaisalmer fort.JPG',
    bgImage: '/images/jaisalmer/Jaisalmer Photos/patawa haveli1.jpeg',
  },
  chardham: {
    seasonLabel: 'SACRED PILGRIMAGE SEASON',
    destination: 'Char Dham',
    hindiTitle: 'चारधाम यात्रा',
    subtitle: 'हिमालय की पावन तीर्थ यात्रा।',
    description:
      'A transformative spiritual yatra across the sacred Himalayan shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath. Curated with personalized VIP darshan assistance, boutique mountain stays, and sanitized chauffeur transport.',
    highlights: [
      { icon: Mountain, label: 'Himalayan\nShrines' },
      { icon: Flame,    label: 'Sacred\nDarshans' },
      { icon: Compass,  label: 'Curated\nMountain Route' },
      { icon: Sparkles, label: 'Dedicated\nPilgrim Care' },
    ],
    ctaLabel: 'PLAN CHAR DHAM YATRA →',
    ctaHref: getJourneyWhatsAppLink('Char Dham Himalayas'),
    image: '/assets/card-chardham.jpg',
    bgImage: '/assets/card-chardham.jpg',
  },
};

export const FeaturedJourney: React.FC = () => {
  const currentKey = SITE_CONFIG.activeFeaturedJourney || 'jaisalmer';
  const j = CAMPAIGNS[currentKey] || CAMPAIGNS.jaisalmer;

  return (
    <section
      id="featured"
      className="relative py-0 overflow-hidden"
      aria-label={`Featured Journey: ${j.destination}`}
    >
      {/* Full cinematic background */}
      <div className="absolute inset-0 z-0">
        <img
          src={j.bgImage}
          alt={j.destination}
          className="w-full h-full object-cover brightness-[0.30]"
          style={{ objectPosition: 'center 55%' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050709]/96 via-[#050709]/75 to-[#050709]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050709]/80 via-transparent to-[#050709]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">

          {/* ── Left: Text ─── */}
          <div className="space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.35em] font-bold text-[#C9A24A]/80 block mb-1.5 sm:mb-2">
                {j.seasonLabel}
              </span>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="w-8 sm:w-10 h-[1.5px] bg-[#C9A24A]/50" />
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#D8B982]/70 font-semibold">
                  {j.destination}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="space-y-1 sm:space-y-2"
            >
              <h2 className="font-serif font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-none text-[#F5EFE3]">
                {j.hindiTitle}
              </h2>
              <p className="font-hindi text-lg sm:text-2xl text-[#D8B982] font-light">
                {j.subtitle}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="text-[#F5EFE3]/75 text-xs sm:text-base leading-relaxed max-w-lg"
            >
              {j.description}
            </motion.p>

            {/* Highlights in 2-col responsive grid */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="grid grid-cols-2 gap-2 sm:gap-3 max-w-md"
            >
              {j.highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-2 sm:gap-2.5 bg-[#0A0D12]/70 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-[#C9A24A]/20">
                  <h.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9A24A] shrink-0" />
                  <span className="text-[9px] sm:text-[10px] text-[#F5EFE3]/85 font-semibold whitespace-pre-line leading-tight">
                    {h.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="pt-2"
            >
              {j.ctaHref.startsWith('/') ? (
                <Link
                  to={j.ctaHref}
                  id="featured-journey-cta"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#C9A24A] to-[#A8832A] hover:brightness-115 text-[#050709] font-bold text-[10px] sm:text-[11px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all duration-300 border border-[#D8B982]/30 min-h-[48px] w-full sm:w-auto text-center"
                >
                  <span>{j.ctaLabel}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
                </Link>
              ) : (
                <a
                  href={j.ctaHref}
                  id="featured-journey-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#C9A24A] to-[#A8832A] hover:brightness-115 text-[#050709] font-bold text-[10px] sm:text-[11px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all duration-300 border border-[#D8B982]/30 min-h-[48px] w-full sm:w-auto text-center"
                >
                  <span>{j.ctaLabel}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
                </a>
              )}
            </motion.div>
          </div>

          {/* ── Right: Feature photo ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#C9A24A]/25 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/4]"
          >
            <img
              src={j.image}
              alt={`${j.destination} — ${j.subtitle}`}
              className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
              style={{ objectPosition: 'center 40%' }}
              loading="lazy"
            />
            {/* Gold frame overlay */}
            <div className="absolute inset-0 border-2 border-[#C9A24A]/15 rounded-2xl pointer-events-none" />
            {/* Gradient blend bottom */}
            <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#050709]/60 to-transparent rounded-b-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
