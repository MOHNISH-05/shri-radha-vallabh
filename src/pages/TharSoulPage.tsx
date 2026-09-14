import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Clock,
  Sunset,
  Coffee,
  ChevronRight,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { getTharSoulWhatsAppLink } from '../data/siteConfig';

export const TharSoulPage: React.FC = () => {
  const whatsappUrl = getTharSoulWhatsAppLink();

  const flowSteps = [
    {
      num: '01',
      title: 'Desert Village Visit',
      hindi: 'मरुस्थली ग्राम दर्शन',
      description: 'Visit an authentic desert settlement on the outskirts of Jaisalmer to witness traditional village living, earthen architecture, and quiet desert hospitality.',
      image: '/images/jaisalmer/safari/camel-safari/camel-safari-jaisalmer.webp',
      imageAlt: 'Desert village trail near Jaisalmer',
    },
    {
      num: '02',
      title: 'Traditional Chai & Snacks',
      hindi: 'पारंपरिक चाय और नाश्ता',
      description: 'Pause for freshly prepared cardamom-infused tea and regional desert snacks served in the open breeze of the Thar.',
      image: '/images/jaisalmer/web_DJI_0742.jpg',
      imageAlt: 'Golden dunes and desert tea pause in Thar Desert',
    },
    {
      num: '03',
      title: 'Camel Safari through the Dunes',
      hindi: 'रेत के टीलों पर ऊँट सफारी',
      description: 'Embark on a traditional camel trek guided by experienced local handlers across undisturbed golden sand ridges.',
      image: '/images/jaisalmer/safari/camel-safari/camel-safari-jaisalmer.webp',
      imageAlt: 'Camel safari on ripples of Thar sand',
    },
    {
      num: '04',
      title: 'Sunset over the Thar Desert',
      hindi: 'थार के मरुस्थल पर मनोहारी सूर्यास्त',
      description: 'Witness the legendary Thar sunset from elevated dune points as the sandstone landscape turns into radiant amber and dusk settles over the horizon.',
      image: '/images/jaisalmer/web_DSC_0273.JPG',
      imageAlt: 'Sunset silhouette across the Thar dunes',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050709] text-[#F5EDE0]">
      {/* 01. Hero Banner */}
      <PageHero
        breadcrumb="Thar Soul"
        badgeText="1 DAY / SUNSET SAFARI · 2:30 PM – 9:30 PM"
        hindiTagline="धरा, सूर्यास्त और मरुभूमि का शांत अहसास।"
        englishTitle="THAR SOUL"
        description="An unhurried sunset safari through authentic desert villages, warm traditional chai, a serene camel trek, and golden hour over the Thar Desert."
        backgroundImage="/images/jaisalmer/safari/hero/jaisalmer-safari-hero.webp"
        bgPosition="center 40%"
      />

      {/* 02. Timing & Key Highlights Strip */}
      <section className="bg-[#080B0F] border-y border-[#C9A24A]/25 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C9A24A]/15 border border-[#C9A24A]/30 flex items-center justify-center text-[#C9A24A]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#C9A24A] block">Experience Hours</span>
              <strong className="font-serif text-sm sm:text-base text-[#F5EDE0]">2:30 PM – 9:30 PM</strong>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C9A24A]/15 border border-[#C9A24A]/30 flex items-center justify-center text-[#C9A24A]">
              <Sunset className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#C9A24A] block">Core Highlight</span>
              <strong className="font-serif text-sm sm:text-base text-[#F5EDE0]">Dune Sunset View</strong>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C9A24A]/15 border border-[#C9A24A]/30 flex items-center justify-center text-[#C9A24A]">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#C9A24A] block">Hospitality</span>
              <strong className="font-serif text-sm sm:text-base text-[#F5EDE0]">Chai &amp; Local Snacks</strong>
            </div>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#C9A24A]/20">
            <div className="text-right">
              <span className="text-[10px] uppercase tracking-wider text-[#C9A24A]/80 font-bold block">Tariff</span>
              <span className="font-serif text-sm sm:text-base font-bold gold-text">Price on Request</span>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg active:scale-95 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Enquire Thar Soul on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-white stroke-none" />
            </a>
          </div>
        </div>
      </section>

      {/* 03. Experience Overview */}
      <section className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A] block">
          THE SOUL OF THE THAR
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EDE0]">
          A Pure Sunset Journey into Untouched Sand
        </h2>
        <p className="text-xs sm:text-base text-[#F5EDE0]/80 font-light max-w-2xl mx-auto leading-relaxed">
          Thar Soul is created for travellers seeking a quiet, authentic desert encounter without commercial rushed tours. Departing in the afternoon at 2:30 PM, this seven-hour trail immerses you in rustic village life, open horizon camel riding, warm tea, and the unforgettable silence of twilight over the dunes before returning by 9:30 PM.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl hover:brightness-110 active:scale-95 transition-all min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4 fill-white stroke-none" />
            <span>Enquire Thar Soul on WhatsApp</span>
          </a>
          <Link
            to="/plan-journey?destination=Jaisalmer"
            className="px-8 py-3.5 rounded-full bg-[#0D1117] border border-[#C9A24A]/40 text-[#F5EDE0] hover:bg-[#C9A24A] hover:text-[#050709] font-bold text-xs uppercase tracking-wider transition-all shadow-xl active:scale-95 flex items-center min-h-[44px]"
          >
            <span>Plan With Coordinator</span>
          </Link>
        </div>
      </section>

      {/* 04. Experience Flow (Desert Village -> Chai/Snacks -> Camel Safari -> Sunset) */}
      <section className="py-16 sm:py-24 bg-[#080B0F] border-t border-[#C9A24A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C9A24A] block">
              FOUR CHERISHED EXPERIENCES
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#F5EDE0]">
              The 2:30 PM – 9:30 PM Flow
            </h3>
            <p className="text-xs sm:text-sm text-[#F5EDE0]/70 font-light">
              Carefully timed to coincide with the best desert light, golden hour, and peaceful dusk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {flowSteps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#0D1117] rounded-3xl border border-[#C9A24A]/30 overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-[#C9A24A]/70 transition-all duration-300"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-black/30" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#080B0F]/90 border border-[#C9A24A]/40 text-[#C9A24A] text-xs font-bold tracking-widest">
                    STEP {step.num}
                  </span>
                </div>

                <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="font-devanagari text-xs text-[#D8B982]/80">
                      {step.hindi}
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#F5EDE0]">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#F5EDE0]/75 font-light leading-relaxed pt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 05. Clear Commercial Boundary (No Unconfirmed Extras Claimed) */}
      <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0D1117] border border-[#C9A24A]/25 space-y-3">
          <div className="flex items-center gap-2 text-[#C9A24A]">
            <ShieldCheck className="w-5 h-5" />
            <h4 className="font-serif text-sm sm:text-base font-bold">
              Authentic Experience Inclusions
            </h4>
          </div>
          <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed">
            Thar Soul is specifically designed as a <strong>1-Day / Sunset Safari (2:30 PM – 9:30 PM)</strong>. It focuses purely on desert village culture, traditional chai, camel trekking, and sunset watching. It does not include overnight camp stays, commercial stage performances, or dinners unless customized separately.
          </p>
          <div className="pt-2 flex items-center justify-between text-xs text-[#C9A24A]">
            <span>Need an overnight desert camp stay instead?</span>
            <Link to="/packages/jaisalmer-3-nights-4-days" className="font-bold underline flex items-center gap-1">
              <span>View Jaisalmer 3N/4D Packages</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 06. Footer CTA Banner */}
      <section className="py-16 sm:py-24 bg-gradient-to-t from-[#050709] via-[#080B0F] to-[#080B0F] border-t border-[#C9A24A]/25 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C9A24A] block">
            EXPERIENCE THE THAR SUNSET
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5EDE0]">
            Book Your Thar Soul Afternoon
          </h2>
          <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light max-w-lg mx-auto">
            Contact us on WhatsApp to verify date availability, afternoon departure point, and current seasonal pricing.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:brightness-110 active:scale-95 transition-all min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              <span>Enquire on WhatsApp</span>
            </a>
            <Link
              to="/safari"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#080B0F] border border-[#C9A24A]/40 text-[#F5EDE0] hover:bg-[#C9A24A] hover:text-[#050709] font-bold text-xs uppercase tracking-wider flex items-center justify-center transition-all min-h-[48px]"
            >
              <span>Explore All Safari Experiences</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
