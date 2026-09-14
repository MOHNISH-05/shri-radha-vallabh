import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Clock,
  ArrowUpRight,
  MessageCircle,
  Sunset,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { JAISALMER_EXPERIENCES, SAFARI_IMAGE_CREDITS } from '../data/jaisalmerExperiences';
import { THAR_SOUL_SAFARI } from '../data/jaisalmerPackages';
import { PageHero } from '../components/PageHero';
import { getJourneyWhatsAppLink, getTharSoulWhatsAppLink } from '../data/siteConfig';

export const SafariExperiencesPage: React.FC = () => {
  const tharSoulWhatsApp = getTharSoulWhatsAppLink();

  return (
    <div className="min-h-screen bg-[#050709] text-[#F5EDE0]">
      {/* 01. Hero Banner */}
      <PageHero
        breadcrumb="Safari Experiences"
        badgeText="DESERT &amp; DUNES · JAISALMER"
        hindiTagline="थार की अनंत रेत, सूर्यास्त और सितारे।"
        englishTitle="DESERT SAFARI EXPERIENCES"
        description="Experience the raw poetry of the Thar Desert through specialized sunset safaris, camel trails, jeep expeditions, desert camps, and nights under starlit skies."
        backgroundImage="/images/jaisalmer/safari/hero/jaisalmer-safari-hero.webp"
        bgPosition="center 40%"
      />

      {/* 02. Flagship Feature: Thar Soul Sunset Safari */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border-2 border-[#C9A24A]/60 bg-gradient-to-br from-[#0D1117] via-[#0D1117] to-[#141A22] p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden relative">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A24A]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#080B0F] border border-[#C9A24A]/50 text-[#C9A24A] text-[10px] font-bold uppercase tracking-widest">
                <Sunset className="w-3.5 h-3.5" />
                <span>FEATURED SUNSET PRODUCT</span>
              </div>

              <div>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F5EDE0]">
                  Thar Soul
                </h2>
                <div className="flex items-center gap-3 mt-1 text-[#D8B982]">
                  <span className="text-xs uppercase font-bold tracking-widest">
                    1 DAY / SUNSET SAFARI
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-xs">
                    <Clock className="w-3.5 h-3.5 text-[#C9A24A]" />
                    2:30 PM – 9:30 PM
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light leading-relaxed">
                A dedicated afternoon-to-sunset desert encounter without commercial rush. Visit a traditional desert village, enjoy fresh cardamom chai and regional snacks in the open desert breeze, ride camels across golden dunes, and experience a breathtaking Thar sunset.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-[#C9A24A]/20 text-xs text-[#F5EDE0]/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24A] shrink-0" />
                  <span>Desert Village Visit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24A] shrink-0" />
                  <span>Traditional Chai / Snacks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24A] shrink-0" />
                  <span>Camel Safari through Dunes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24A] shrink-0" />
                  <span>Sunset over the Thar Desert</span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link
                  to="/safari/thar-soul"
                  className="px-6 py-3 rounded-full bg-[#C9A24A] hover:bg-[#AA771C] text-[#050709] font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-lg active:scale-95 min-h-[44px]"
                >
                  <span>View Thar Soul Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href={tharSoulWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-lg active:scale-95 min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#C9A24A]/40 shadow-xl">
              <img
                src={THAR_SOUL_SAFARI.image}
                alt={THAR_SOUL_SAFARI.imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-xs bg-[#080B0F]/90 p-2.5 rounded-xl border border-[#C9A24A]/30 flex items-center justify-between">
                <span className="text-[#F5EDE0]/80">Tariff</span>
                <span className="font-serif font-bold text-[#C9A24A]">Price on Request</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 03. All Curated Safari Experiences */}
      <section className="py-16 sm:py-24 bg-[#080B0F] border-t border-[#C9A24A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C9A24A] block">
              MORE DESERT EXPERIENCES
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#F5EDE0]">
              Shape Your Thar Outing
            </h3>
            <p className="text-xs sm:text-sm text-[#F5EDE0]/70 font-light">
              Safari arrangements are tailored around your preferred pace, physical comfort, and timing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {JAISALMER_EXPERIENCES.map((exp, idx) => {
              const expWhatsApp = getJourneyWhatsAppLink(`Jaisalmer — ${exp.name}`);

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-[#0D1117] rounded-3xl border border-[#C9A24A]/30 overflow-hidden shadow-xl flex flex-col justify-between group hover:border-[#C9A24A]/70 transition-all duration-300"
                >
                  <div className="relative h-52 sm:h-60 overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-black/20" />
                    <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#080B0F]/90 border border-[#C9A24A]/40 text-[#C9A24A] text-[10px] font-bold tracking-widest">
                      {exp.category.replace('_', ' ')}
                    </span>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-1">
                      <span className="font-devanagari text-xs text-[#D8B982]/80">
                        {exp.hindiName}
                      </span>
                      <h4 className="font-serif text-xl font-bold text-[#F5EDE0]">
                        {exp.name}
                      </h4>
                      <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed pt-1">
                        {exp.shortDescription}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#C9A24A]/20 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#F5EDE0]/60">Tariff</span>
                        <span className="font-serif font-bold text-[#C9A24A]">Price on Request</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link
                          to={`/plan-journey?destination=Jaisalmer&experience=${exp.slug}`}
                          className="flex-1 py-2.5 rounded-full bg-[#080B0F] border border-[#C9A24A]/40 text-[#F5EDE0] hover:bg-[#C9A24A] hover:text-[#050709] font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1 transition-all min-h-[44px]"
                        >
                          <span>PLAN THIS</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                        <a
                          href={expWhatsApp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md active:scale-95 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
                          aria-label={`Enquire ${exp.name} on WhatsApp`}
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

        </div>
      </section>

      {/* 04. Cross-Link: Complete 3N/4D Packages */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#C9A24A]/30 bg-[#0D1117] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C9A24A] block">
              COMPLETE TRAVEL PACKAGES
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EDE0]">
              Looking for Full Jaisalmer Stays &amp; Fort Sightseeing?
            </h3>
            <p className="text-xs sm:text-sm text-[#F5EDE0]/75 font-light">
              Explore our confirmed Jaisalmer 3 Nights / 4 Days packages for Couples, Families, and Groups across Gorbandh, Jharokha, Morchan, Leheriya, and Maharawal tiers.
            </p>
          </div>
          <Link
            to="/packages/jaisalmer-3-nights-4-days"
            className="px-8 py-3.5 rounded-full bg-[#C9A24A] text-[#050709] font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all whitespace-nowrap min-h-[44px] flex items-center"
          >
            <span>VIEW 3N/4D PACKAGES →</span>
          </Link>
        </div>
      </section>

      {/* 05. Credits */}
      <section className="border-t border-[#C9A24A]/15 bg-[#050709] px-4 py-5 text-center">
        <details className="mx-auto max-w-4xl text-left text-[10px] leading-5 text-[#F5EDE0]/45">
          <summary className="cursor-pointer text-center uppercase tracking-widest hover:text-[#C9A24A]">
            Safari photography credits &amp; verification
          </summary>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {SAFARI_IMAGE_CREDITS.map((credit) => (
              <p key={credit.image}>
                {credit.image}: {credit.creator}, {credit.source} ({credit.license})
              </p>
            ))}
          </div>
        </details>
      </section>
    </div>
  );
};
