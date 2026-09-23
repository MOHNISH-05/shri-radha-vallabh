import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, ChevronRight, MessageCircle, Crown, Sparkles } from 'lucide-react';
import { PACKAGE_TIERS_LIST, PRICE_DISCLAIMER, formatPackagePrice } from '../data/jaisalmerPackages';
import { getPackageWhatsAppLink, getWhatsAppLink } from '../data/siteConfig';

export const PackagesSection: React.FC = () => {
  // Show the 3 primary flagship tiers: Gorbandh (Basic), Morchan (Deluxe), Maharawal (Executive)
  const featuredTiers = [
    PACKAGE_TIERS_LIST[0], // Gorbandh
    PACKAGE_TIERS_LIST[2], // Morchan
    PACKAGE_TIERS_LIST[4], // Maharawal
  ];

  return (
    <section id="packages" className="py-16 sm:py-28 relative overflow-hidden bg-[#080B0F]">
      {/* Clearly Visible Sandstone Architecture Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/jaisalmer/Jaisalmer Photos/patawa haveli1.jpeg"
          alt="Jaisalmer Heritage Architecture Backdrop"
          className="w-full h-full object-cover opacity-70 filter brightness-90"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080B0F]/90 via-[#080B0F]/65 to-[#080B0F]/95" />
        <div className="absolute inset-0 jaali-pattern opacity-25 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold text-[#C9A24A]">
            CURATED ITINERARIES · 3N/4D &amp; CUSTOM
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F5EDE0]">
            CURATED JOURNEYS
          </h2>
          <p className="text-xs sm:text-base text-[#F5EDE0]/85 font-light max-w-lg mx-auto">
            Thoughtfully crafted itineraries for Jaisalmer, combining living fortress archaeology, luxury desert camps, and customized packages for couples, families, and bachelor groups.
          </p>
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredTiers.map((tier, index) => {
            const whatsappUrl = getPackageWhatsAppLink('Traveler', tier.name, 'Jaisalmer 3 Nights / 4 Days', formatPackagePrice(tier.startingPricePerPerson), '/');

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative bg-[#0D1117]/90 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-[#C9A24A]/30 hover:border-[#C9A24A] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full hover:-translate-y-1"
              >
                {/* Header Image */}
                <div className="relative h-52 sm:h-60 overflow-hidden">
                  <img
                    src={tier.image}
                    alt={tier.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5">
                    <span className="px-3 py-1 text-[9px] sm:text-[10px] uppercase font-bold tracking-widest bg-[#C9A24A] text-[#050709] rounded-full flex items-center gap-1">
                      {tier.id === 'maharawal' && <Crown className="w-3 h-3" />}
                      <span>{tier.tier}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 text-white space-y-0.5">
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#D8B982]">
                      <Calendar className="w-3.5 h-3.5 text-[#C9A24A]" />
                      <span>3 Nights / 4 Days</span>
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F5EDE0] group-hover:text-[#C9A24A] transition-colors drop-shadow-md">
                      {tier.name}
                    </h3>
                    <span className="font-devanagari text-xs text-[#D8B982]/80">{tier.hindiName}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-[#F5EDE0]/85 line-clamp-3 leading-relaxed font-light">
                    {tier.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-[#C9A24A]/20">
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#C9A24A] font-bold">
                      Key Highlights
                    </span>
                    <ul className="space-y-1.5">
                      {tier.inclusionsSummary.slice(0, 3).map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#F5EDE0]/90">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24A] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price Estimate & Actions */}
                  <div className="pt-3 border-t border-[#C9A24A]/20 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-[#F5EDE0]/70">Tariff</span>
                      <div className="text-right">
                        <span className="font-serif text-sm sm:text-base font-bold gold-text">{formatPackagePrice(tier.startingPricePerPerson)}</span>
                        <span className="text-[8px] sm:text-[9px] text-[#C9A24A]/70 block">Verified starting tariff</span>
                      </div>
                    </div>
                    <p className="text-[9px] leading-relaxed text-[#F5EDE0]/55">{PRICE_DISCLAIMER}</p>

                    <div className="flex items-center gap-2">
                      <Link
                        to={`/packages/jaisalmer-3-nights-4-days?tier=${tier.id}`}
                        className="flex-1 py-3 rounded-full bg-[#080B0F] border border-[#C9A24A]/40 text-[#F5EDE0] hover:bg-[#C9A24A] hover:text-[#080B0F] font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer min-h-[44px] touch-manipulation active:scale-95 text-center"
                      >
                        <span>VIEW ITINERARY</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md active:scale-95 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
                        aria-label={`Enquire ${tier.name}`}
                        title="Enquire on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Package Spotlight Banner */}
        <div className="rounded-2xl sm:rounded-3xl border border-[#C9A24A]/40 bg-gradient-to-r from-[#0D1117] via-[#121824] to-[#080B0F] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C9A24A] flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CUSTOM PACKAGE FOR ANY GROUP</span>
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5EDE0]">
              Travelling as a Couple, Family, Bachelor Group, or Corporate Team?
            </h3>
            <p className="text-xs sm:text-sm text-[#F5EDE0]/75 font-light max-w-xl">
              Customize your duration, stay style (Fort Palace, Heritage Haveli, or Luxury Dune Camp), and private AC transport with our coordinators.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/packages#custom-package-builder"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#C9A24A] text-[#050709] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-md text-center min-h-[44px] flex items-center justify-center gap-1.5"
            >
              <span>CUSTOMIZE TRIP</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
            <a
              href={getWhatsAppLink('Namaste Shri Radha Vallabh 🙏\nI want to enquire about a custom package for Jaisalmer.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#080B0F] border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold text-xs uppercase tracking-widest transition-all text-center min-h-[44px] flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP US</span>
            </a>
          </div>
        </div>

        {/* View All Packages Route Link */}
        <div className="text-center pt-2">
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#080B0F] border border-[#C9A24A]/40 text-[#F5EDE0] hover:bg-[#C9A24A] hover:text-[#080B0F] font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl active:scale-95 touch-manipulation"
          >
            <span>VIEW ALL 5 TIERS, SAFARI &amp; SPIRITUAL PACKAGES</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
