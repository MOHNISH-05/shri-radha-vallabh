import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight, Lock } from 'lucide-react';
import { getJourneyWhatsAppLink } from '../data/siteConfig';

/* ─── Destination data — editable ────────────────────────── */
const DESTINATIONS = [
  {
    slug: 'jaisalmer',
    name: 'JAISALMER',
    hindiName: 'जैसलमेर',
    tagline: 'स्वर्णिम धरा, अनंत कहानियाँ',
    description: 'Sandstone fortresses, royal havelis, desert sunsets and living heritage.',
    image: '/images/jaisalmer/thumbnails/client-photo-6.webp',
    active: true,
    href: '/jaisalmer',
    badge: 'Active Season',
  },
  {
    slug: 'chardham',
    name: 'CHAR DHAM',
    hindiName: 'चारधाम यात्रा',
    tagline: 'हिमालय की पवित्र यात्रा',
    description: 'Yamunotri, Gangotri, Kedarnath & Badrinath — sacred Himalayan shrines.',
    image: '/assets/optimized/card-chardham.webp',
    active: false,
    href: null,
    badge: 'Upcoming Season',
  },
  {
    slug: 'vrindavan',
    name: 'VRINDAVAN',
    hindiName: 'वृंदावन यात्रा',
    tagline: 'राधा-कृष्ण की भक्ति भूमि',
    description: 'Eternal devotion in the divine land of Shri Radha Krishna.',
    image: '/assets/optimized/card-vrindavan.webp',
    active: false,
    href: null,
    badge: 'Upcoming Season',
  },
  {
    slug: 'ayodhya',
    name: 'AYODHYA',
    hindiName: 'अयोध्या यात्रा',
    tagline: 'श्री राम की पावन नगरी',
    description: 'Walk the sacred land of Maryada Purushottam Shri Ram.',
    image: '/assets/optimized/card-ayodhya.webp',
    active: false,
    href: null,
    badge: 'Upcoming Season',
  },
  {
    slug: 'kashi',
    name: 'KASHI',
    hindiName: 'काशी यात्रा',
    tagline: 'जहाँ शिव स्वयं विराजते हैं',
    description: 'The eternal city of light — Ganga Aarti, Vishwanath, and moksha.',
    image: '/assets/optimized/card-kashi.webp',
    active: false,
    href: null,
    badge: 'Upcoming Season',
  },
  {
    slug: 'dwarka',
    name: 'DWARKA',
    hindiName: 'द्वारका यात्रा',
    tagline: 'श्री कृष्ण की पवित्र नगरी',
    description: 'The sacred coastal city of Lord Krishna on the Arabian Sea.',
    image: '/assets/optimized/card-dwarka.webp',
    active: false,
    href: null,
    badge: 'Upcoming Season',
  },
];

export const OurJourneys: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const gap = Number.parseFloat(window.getComputedStyle(el).columnGap) || 0;
    const amount = firstCard ? firstCard.getBoundingClientRect().width + gap : el.offsetWidth;
    el.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' });
  };

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  return (
    <section id="journeys" className="py-16 sm:py-20 relative overflow-hidden bg-[#05070B]">

      {/* Background texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 jaali-pattern opacity-8" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080B0F] via-[#05070B] to-[#080B0F]" />
      </div>

      <div className="relative z-10">

        {/* ── Section header ─── */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-1"
            >
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-bold text-[#C9A24A] block">
                CURATED DESTINATIONS
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5EFE3]">
                हमारी यात्राएँ
              </h2>
              <p className="font-hindi text-sm sm:text-base text-[#D8B982]/80 mt-0.5 sm:mt-1">
                हर यात्रा की अपनी एक कहानी है।
              </p>
            </motion.div>

            {/* Prev / Next arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                disabled={!canLeft}
                aria-label="Previous destinations"
                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 active:scale-95 touch-manipulation ${
                  canLeft
                    ? 'border-[#C9A24A]/60 text-[#C9A24A] hover:bg-[#C9A24A] hover:text-[#050709]'
                    : 'border-[#C9A24A]/20 text-[#C9A24A]/25 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canRight}
                aria-label="Next destinations"
                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 active:scale-95 touch-manipulation ${
                  canRight
                    ? 'border-[#C9A24A]/60 text-[#C9A24A] hover:bg-[#C9A24A] hover:text-[#050709]'
                    : 'border-[#C9A24A]/20 text-[#C9A24A]/25 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Horizontal scroll carousel with swipe peek on mobile ─── */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={scrollRef}
            onScroll={onScroll}
            className="flex gap-3 md:gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory touch-pan-x scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            role="list"
            aria-label="Journey destinations"
          >
            {DESTINATIONS.map((dest, index) => {
              const whatsapp = getJourneyWhatsAppLink(dest.name);
              return (
                <motion.div
                  key={dest.slug}
                  role="listitem"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.7, delay: Math.min(index * 0.08, 0.4) }}
                  className={`relative flex-none w-[calc(100%_-_3rem)] md:w-[calc((100%_-_2rem)/3)] lg:w-[calc((100%_-_4rem)/5)] h-[370px] sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl snap-start snap-always group border transition-all duration-500 hover:-translate-y-1.5 ${
                    dest.active
                      ? 'border-[#C9A24A]/70 hover:border-[#C9A24A]'
                      : 'border-white/10 hover:border-[#C9A24A]/40'
                  }`}
                >
                {/* Card image */}
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050709] via-[#050709]/55 to-transparent" />

                {/* Active gold shimmer */}
                {dest.active && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9A24A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}

                {/* Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  {dest.active ? (
                    <span className="px-2.5 py-1 text-[8px] uppercase font-bold tracking-widest bg-[#C9A24A] text-[#050709] rounded-full shadow-lg">
                      ✦ Active Season
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 text-[8px] uppercase font-bold tracking-widest bg-black/60 backdrop-blur-md text-[#D8B982] rounded-full border border-[#C9A24A]/30 flex items-center gap-1">
                      <Lock className="w-2.5 h-2.5" />
                      {dest.badge}
                    </span>
                  )}
                </div>

                {/* Card content */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 space-y-1.5 sm:space-y-2 z-10">
                  <p className="font-hindi text-xs text-[#D8B982] leading-tight">{dest.tagline}</p>
                  <h3 className="font-hindi text-lg font-bold text-[#F5EFE3] group-hover:text-[#C9A24A] transition-colors leading-tight">
                    {dest.hindiName}
                  </h3>
                  <p className="text-[10px] font-bold tracking-widest text-[#C9A24A]/80">{dest.name}</p>
                  <p className="text-[11px] text-[#F5EFE3]/75 leading-relaxed line-clamp-2">{dest.description}</p>

                  <div className="pt-2 border-t border-white/15">
                    {dest.active ? (
                      <Link
                        to={dest.href!}
                        className="inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-[#C9A24A] group-hover:text-white transition-colors min-h-[36px]"
                        aria-label={`Explore ${dest.name}`}
                      >
                        <span>अन्वेषण करें · Explore</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    ) : (
                      <a
                        href={whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-[#D8B982]/70 hover:text-[#C9A24A] transition-colors min-h-[36px] items-center"
                        aria-label={`Enquire about ${dest.name}`}
                      >
                        <span>जल्द आ रहा है · Enquire</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
