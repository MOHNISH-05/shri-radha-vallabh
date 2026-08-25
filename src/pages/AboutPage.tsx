import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, Shield, Compass, MessageCircle } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { JaisalmerLocation } from '../components/JaisalmerLocation';
import { SITE_CONFIG, getWhatsAppLink } from '../data/siteConfig';

export const AboutPage: React.FC = () => {
  const whatsappUrl = getWhatsAppLink(
    'Namaste Shri Radha Vallabh 🙏\nI would like to learn more about your philosophy and journey planning services.'
  );

  const pillars = [
    {
      icon: Heart,
      title: 'Devotion & Reverence',
      hindi: 'आस्था और समर्पण',
      description: 'We believe travel to holy shrines is a sacred pilgrimage, not ordinary commercial tourism. Every darshan and itinerary respects age-old traditions and ritual sanctity.'
    },
    {
      icon: Sparkles,
      title: 'Authentic Living Heritage',
      hindi: 'जीवंत भारतीय संस्कृति',
      description: 'From UNESCO-listed living fortresses in Jaisalmer to timeless river ghats of Kashi, we connect travelers to true local storytellers, artisan workshops, and folklore.'
    },
    {
      icon: Shield,
      title: 'Comfort, Dignity & Sattvik Care',
      hindi: 'सुविधा, सुरक्षा और शांति',
      description: 'We arrange handpicked boutique heritage properties, sanitized chauffeur-driven vehicles, and genuine vegetarian / sattvik dining options ideal for senior family members.'
    },
    {
      icon: Compass,
      title: 'Human-Touch Assistance',
      hindi: 'प्रत्येक कदम पर मार्गदर्शन',
      description: 'You are never left with an automated bot or confusing app. Our dedicated coordinator assists your family personally before, during, and after your travels.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050709] text-[#F5EDE0]">
      
      {/* 01. Page Hero */}
      <PageHero
        breadcrumb="About Us"
        badgeText="HERITAGE & TRADITIONS"
        hindiTagline="परंपरा से प्रेरित, आज के यात्रियों के लिए।"
        englishTitle="ABOUT SHRI RADHA VALLABH"
        description="Crafting unhurried, culturally immersive, and spiritually grounded journeys across India's sacred destinations."
        backgroundImage="/assets/patwon-haveli.png"
        bgPosition="center 30%"
      />

      {/* 02. Core Brand Story */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
                WHO WE ARE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EDE0] leading-tight">
                Rooted in Tradition. Crafted for Today.
              </h2>
              <p className="font-devanagari text-lg text-[#D8B982]">
                आस्था से अनुभव तक की यात्रा।
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#F5EDE0]/80 font-light leading-relaxed">
              <p>
                <strong className="text-[#C9A24A] font-semibold">{SITE_CONFIG.brandName}</strong> was founded with a singular purpose: to transform spiritual pilgrimages and Indian heritage travel into thoughtful, deeply dignified, and unhurried experiences.
              </p>
              <p>
                Across the sacred corridors of Vrindavan Dham, the sandstone citadels of Jaisalmer, the high Himalayan paths of Char Dham, and the eternal ghats of Kashi, India's soul lives in its temples, folklore, and warm hospitality.
              </p>
              <p>
                Too often, commercial tourism rushes devotees through crowded lines and generic hotels. We take a different path—curating private heritage haveli stays, coordinating peaceful temple darshans, and providing dedicated human attention so you and your family can travel with complete peace of mind.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#C9A24A] p-0.5 bg-[#0B0E14] overflow-hidden shrink-0 shadow-lg">
                <img
                  src={SITE_CONFIG.logoUrl}
                  alt={SITE_CONFIG.brandName}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-serif text-sm font-bold text-[#F5EDE0] block">
                  {SITE_CONFIG.brandName}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#C9A24A] font-semibold">
                  HERITAGE &amp; JOURNEYS
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#C9A24A]/35 aspect-[4/3] sm:aspect-[16/11]">
            <img
              src="/images/jaisalmer/web_DSC03564.JPG"
              alt="Shri Radha Vallabh Heritage Architecture"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 40%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B0F]/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#080B0F]/80 backdrop-blur-md border border-[#C9A24A]/30">
              <span className="text-[9px] uppercase font-bold tracking-widest text-[#C9A24A] block">
                AUTHENTICITY PROMISE
              </span>
              <p className="font-devanagari text-xs sm:text-sm text-[#F5EDE0] font-medium mt-0.5">
                हर कदम पर आपकी आस्था और सुख-सुविधा का संपूर्ण ध्यान।
              </p>
            </div>
          </div>

        </div>

        {/* 03. 4 Pillars of Our Approach */}
        <div className="space-y-8 pt-8 border-t border-[#C9A24A]/20">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
              OUR FOUNDATIONS
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#F5EDE0]">
              Why Travellers Choose Us
            </h3>
            <p className="text-xs sm:text-sm text-[#F5EDE0]/70 font-light">
              Principles that guide every itinerary, hotel selection, and shrine arrangement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#0D1117]/90 p-6 rounded-3xl border border-[#C9A24A]/25 space-y-4 hover:border-[#C9A24A]/70 transition-all duration-300 shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#080B0F] border border-[#C9A24A]/40 flex items-center justify-center text-[#C9A24A] shadow-md">
                  <p.icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-base font-bold text-[#F5EDE0]">
                    {p.title}
                  </h4>
                  <p className="font-devanagari text-xs text-[#D8B982]">
                    {p.hindi}
                  </p>
                </div>
                <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 04. Verified Jaisalmer Location */}
        <JaisalmerLocation compact />

        {/* 05. Contact & Planning CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0D1117] via-[#121722] to-[#0D1117] border border-[#C9A24A]/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="max-w-xl mx-auto space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
              READY TO PLAN?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EDE0]">
              Start Your Sacred Journey With Us
            </h3>
            <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light">
              Connect directly with our travel team on WhatsApp to discuss your travel dates, preferred destinations, and family requirements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/plan-journey"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C9A24A] text-[#080B0F] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-lg active:scale-95 text-center min-h-[44px] flex items-center justify-center"
            >
              PLAN A JOURNEY →
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#080B0F] border border-[#25D366]/50 text-[#25D366] font-bold text-xs uppercase tracking-widest hover:bg-[#25D366] hover:text-white transition-all shadow-lg active:scale-95 text-center min-h-[44px] flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>CHAT ON WHATSAPP</span>
            </a>
          </div>
        </div>

      </section>

    </div>
  );
};
