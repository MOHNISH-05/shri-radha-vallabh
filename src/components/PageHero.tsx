import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  breadcrumb: string;
  breadcrumbItems?: Array<{ label: string; to?: string }>;
  badgeText: string;
  hindiTagline: string;
  englishTitle: string;
  description: string;
  backgroundImage?: string | null;
  backgroundImageSrcSet?: string;
  backgroundImageSizes?: string;
  bgPosition?: string;
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  breadcrumb,
  breadcrumbItems,
  badgeText,
  hindiTagline,
  englishTitle,
  description,
  backgroundImage = '/assets/featured-jaisalmer-arch.jpg',
  backgroundImageSrcSet,
  backgroundImageSizes = '100vw',
  bgPosition = 'center 45%',
  children,
}) => {
  const safeBg = backgroundImage || '/assets/featured-jaisalmer-arch.jpg';
  const resolvedBreadcrumbs = breadcrumbItems || [
    { label: 'Home', to: '/' },
    { label: breadcrumb },
  ];

  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-[#080B0F] border-b border-[#C9A24A]/25">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={safeBg}
          srcSet={backgroundImageSrcSet}
          sizes={backgroundImageSrcSet ? backgroundImageSizes : undefined}
          alt={englishTitle}
          className="w-full h-full object-cover brightness-[0.55]"
          style={{ objectPosition: bgPosition }}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080B0F]/75 via-[#080B0F]/45 to-[#080B0F]/90" />
        <div className="absolute inset-0 jaali-pattern opacity-20 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#F5EDE0]/60 tracking-wider uppercase"
          aria-label="Breadcrumb"
        >
          {resolvedBreadcrumbs.map((item, index) => (
            <React.Fragment key={`${item.label}-${index}`}>
              {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-[#C9A24A]/60 shrink-0" />}
              {item.to ? (
                <Link to={item.to} className="hover:text-[#C9A24A] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#C9A24A] font-bold">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </motion.nav>

        {/* Badge & Hindi Signature */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2.5"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1117]/90 border border-[#C9A24A]/40 text-[#C9A24A] text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.28em] shadow-md backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24A] animate-pulse" />
            <span>{badgeText}</span>
          </div>

          <p className="font-devanagari text-lg sm:text-2xl text-[#D8B982] tracking-wide" lang="hi">
            {hindiTagline}
          </p>
        </motion.div>

        {/* Main Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-3 max-w-3xl"
        >
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5EDE0] tracking-tight leading-[1.15]">
            {englishTitle}
          </h1>

          <p className="text-xs sm:text-base text-[#F5EDE0]/80 font-light leading-relaxed max-w-2xl">
            {description}
          </p>
        </motion.div>

        {/* Optional Custom Actions / Filter Slots */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2"
          >
            {children}
          </motion.div>
        )}

      </div>
    </section>
  );
};
