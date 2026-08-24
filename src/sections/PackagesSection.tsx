import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, ChevronRight, MessageCircle } from 'lucide-react';
import { ACTIVE_JOURNEY } from '../data/journeys';
import type { Package } from '../data/journeys';
import { getWhatsAppLink } from '../data/siteConfig';
import { PackageModal } from '../components/PackageModal';

export const PackagesSection: React.FC = () => {
  const [selectedPkg, setSelectedPkg] = useState<Package | null>(null);

  return (
    <section id="packages" className="py-16 sm:py-28 relative overflow-hidden bg-[#080B0F]">
      {/* Clearly Visible Sandstone Architecture Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/jaisalmer/web_DJI_0065.JPG"
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
            CURATED ITINERARIES
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F5EDE0]">
            CURATED JOURNEYS
          </h2>
          <p className="text-xs sm:text-base text-[#F5EDE0]/85 font-light max-w-lg mx-auto">
            Thoughtfully crafted itineraries for Jaisalmer, combining luxury stays, living heritage, and desert experiences.
          </p>
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {ACTIVE_JOURNEY.packages.map((pkg, index) => {
            const whatsappUrl = getWhatsAppLink(
              `Namaste Shri Radha Vallabh 🙏\nI am interested in the ${pkg.title} package (${pkg.duration}).`
            );

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative bg-[#0D1117]/90 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-[#C9A24A]/30 hover:border-[#C9A24A] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full hover:-translate-y-1"
              >
                {/* Header Image */}
                <div className="relative h-52 sm:h-60 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-3 py-1 text-[9px] sm:text-[10px] uppercase font-bold tracking-widest bg-[#080B0F]/90 backdrop-blur-md text-[#C9A24A] rounded-full border border-[#C9A24A]/40">
                      {pkg.tagline}
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 text-white space-y-0.5">
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#D8B982]">
                      <Calendar className="w-3.5 h-3.5 text-[#C9A24A]" />
                      <span>{pkg.duration}</span>
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F5EDE0] group-hover:text-[#C9A24A] transition-colors drop-shadow-md">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-[#F5EDE0]/85 line-clamp-3 leading-relaxed font-light">
                    {pkg.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-[#C9A24A]/20">
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#C9A24A] font-bold">
                      Key Highlights
                    </span>
                    <ul className="space-y-1.5">
                      {pkg.highlights.slice(0, 3).map((h, i) => (
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
                        <span className="font-serif text-sm sm:text-base font-bold gold-text">{pkg.startingPrice}</span>
                        <span className="text-[8px] sm:text-[9px] text-[#C9A24A]/70 block">Customized per dates &amp; group</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedPkg(pkg)}
                        className="flex-1 py-3 rounded-full bg-[#080B0F] border border-[#C9A24A]/40 text-[#F5EDE0] hover:bg-[#C9A24A] hover:text-[#080B0F] font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer min-h-[44px] touch-manipulation active:scale-95"
                      >
                        <span>VIEW JOURNEY</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md active:scale-95 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
                        aria-label={`Enquire ${pkg.title}`}
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

        {/* View All Packages Route Link */}
        <div className="text-center pt-4">
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#080B0F] border border-[#C9A24A]/40 text-[#F5EDE0] hover:bg-[#C9A24A] hover:text-[#080B0F] font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl active:scale-95 touch-manipulation"
          >
            <span>VIEW ALL PACKAGES &amp; ITINERARIES</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Package Detail Modal */}
      {selectedPkg && (
        <PackageModal pkg={selectedPkg} onClose={() => setSelectedPkg(null)} />
      )}
    </section>
  );
};
