import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle2, ChevronRight, MessageCircle } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { ACTIVE_JOURNEY } from '../data/journeys';
import type { Package } from '../data/journeys';
import { PackageModal } from '../components/PackageModal';
import { getJourneyWhatsAppLink, getWhatsAppLink } from '../data/siteConfig';

export const PackagesPage: React.FC = () => {
  const [selectedPkg, setSelectedPkg] = useState<Package | null>(null);

  const packages = ACTIVE_JOURNEY.packages;

  return (
    <div className="min-h-screen bg-[#050709] text-[#F5EDE0]">
      
      {/* 01. Page Hero Banner */}
      <PageHero
        breadcrumb="Packages"
        badgeText="CURATED ITINERARIES"
        hindiTagline="यात्रा चुनिए, अनुभव हम सँवारेंगे।"
        englishTitle="CURATED TRAVEL PACKAGES"
        description="Experience the soul of India through expertly crafted itineraries featuring boutique heritage stays, desert luxury glamping, and personal care."
        backgroundImage="/images/jaisalmer/web_DJI_0065.JPG"
        bgPosition="center 30%"
      />

      {/* 02. Packages Grid Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Intro strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#C9A24A]/20">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C9A24A] block">
              CURRENT ACTIVE PACKAGES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EDE0]">
              Jaisalmer Golden City Collection
            </h2>
          </div>
          <Link
            to="/plan-journey"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C9A24A] hover:text-white transition-colors"
          >
            <span>Need a custom itinerary?</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {packages.map((pkg, index) => {
            const whatsappUrl = getJourneyWhatsAppLink(`Jaisalmer — ${pkg.title}`);

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="bg-[#0D1117]/95 rounded-3xl border border-[#C9A24A]/30 overflow-hidden shadow-2xl hover:border-[#C9A24A]/75 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                {/* Image & Duration */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-black/30" />
                  
                  <div className="absolute top-4 right-4 bg-[#080B0F]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C9A24A]/40 text-[#D8B982] text-[10px] font-bold tracking-wider flex items-center gap-1.5 shadow-md">
                    <Calendar className="w-3.5 h-3.5 text-[#C9A24A]" />
                    <span>{pkg.duration}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#C9A24A] block">
                      {pkg.tagline}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5EDE0] leading-tight">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Package Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-[#C9A24A]/20">
                      <span className="text-[10px] uppercase tracking-wider text-[#C9A24A] font-bold block">
                        Included Highlights
                      </span>
                      <ul className="space-y-1.5">
                        {pkg.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#F5EDE0]/90">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24A] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tariff & Actions */}
                  <div className="pt-4 border-t border-[#C9A24A]/20 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-[#F5EDE0]/70">Tariff</span>
                      <div className="text-right">
                        <span className="font-serif text-sm sm:text-base font-bold gold-text">
                          {pkg.startingPrice}
                        </span>
                        <span className="text-[9px] text-[#C9A24A]/70 block">
                          Customized per dates &amp; group
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedPkg(pkg)}
                        className="flex-1 py-3 rounded-full bg-[#080B0F] border border-[#C9A24A]/40 text-[#F5EDE0] hover:bg-[#C9A24A] hover:text-[#080B0F] font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer min-h-[44px] touch-manipulation active:scale-95"
                      >
                        <span>VIEW ITINERARY</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md active:scale-95 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
                        aria-label={`Enquire ${pkg.title} on WhatsApp`}
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

        {/* 03. Custom Plan CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-[#0D1117] border border-[#C9A24A]/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl"
        >
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold text-[#C9A24A] block">
              BESPOKE PILGRIMAGE &amp; VACATION PLANNING
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#F5EDE0]">
              Looking for a Custom Circuit?
            </h2>
            <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light leading-relaxed">
              We specialize in creating personalized spiritual itineraries across Char Dham, Vrindavan, Ayodhya, Kashi, and Rajasthan with dedicated human coordination.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link
              to="/plan-journey"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C9A24A] to-[#AA771C] text-[#05070A] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-lg active:scale-95 text-center min-h-[44px] flex items-center justify-center"
            >
              OPEN JOURNEY PLANNER →
            </Link>
            <a
              href={getWhatsAppLink('Namaste Shri Radha Vallabh 🙏\nI would like to discuss a customized travel package.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#080B0F] border border-[#25D366]/50 text-[#25D366] font-bold text-xs uppercase tracking-widest hover:bg-[#25D366] hover:text-white transition-all shadow-lg active:scale-95 text-center min-h-[44px] flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>DIRECT WHATSAPP ENQUIRY</span>
            </a>
          </div>
        </motion.div>

      </section>

      {/* Package Detail Modal */}
      {selectedPkg && (
        <PackageModal
          pkg={selectedPkg}
          onClose={() => setSelectedPkg(null)}
        />
      )}

    </div>
  );
};
