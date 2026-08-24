import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, MessageCircle, ArrowUpRight } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { BRAND_EXPERIENCES } from '../data/journeys';
import { getWhatsAppLink } from '../data/siteConfig';

export const StoriesPage: React.FC = () => {
  const whatsappUrl = getWhatsAppLink(
    'Namaste Shri Radha Vallabh 🙏\nI was reading through your travel stories and would like to enquire about curating an experience for my family.'
  );

  const featuredStories = [
    {
      id: 'story-jaisalmer',
      destination: 'Jaisalmer, Thar Desert',
      hindi: 'स्वर्ण नगरी की शाम',
      title: 'Dusk Over Sonar Qella & Twilight Chhatris',
      snippet: 'As the evening sun paints the yellow sandstone ramparts of the 12th-century living fort in honey gold, the quiet waters of Gadisar Lake reflect centuries of Rajputana chivalry and desert melody.',
      image: '/images/jaisalmer/web_DJI_0065.JPG',
      tag: 'HERITAGE DIARIES',
    },
    {
      id: 'story-desert',
      destination: 'Sam Sand Dunes',
      hindi: 'तारों भरी रात',
      title: 'Stargazing & Manganiyar Melodies under Open Skies',
      snippet: 'Deep in the rolling dunes of Thar, the rhythmic strains of Kamaicha and Khartal music rise into the crisp desert night, accompanied by warm bonfires and authentic Rajasthani hospitality.',
      image: '/images/jaisalmer/web_DJI_0727.jpg',
      tag: 'CULTURAL IMMERSION',
    },
    {
      id: 'story-braj',
      destination: 'Vrindavan Dham',
      hindi: 'राधा नाम संकीर्तन',
      title: 'The Eternal Devotion along Yamuna Ghats',
      snippet: 'Early dawn bells at Shri Radha Vallabh and Banke Bihari mandirs, the fragrant aroma of freshly prepared bhog, and peaceful evening aartis on the holy riverbanks.',
      image: '/assets/card-vrindavan.jpg',
      tag: 'SACRED BHAKTI',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050709] text-[#F5EDE0]">
      
      {/* 01. Page Hero */}
      <PageHero
        breadcrumb="Stories"
        badgeText="TRAVEL REFLECTIONS"
        hindiTagline="हर सफ़र अपने साथ एक कहानी लाता है।"
        englishTitle="THE EXPERIENCE & STORIES"
        description="Immerse in the living memories, spiritual peace, and cultural moments that make each journey with Shri Radha Vallabh unforgettable."
        backgroundImage="/assets/temple-twilight.jpg"
        bgPosition="center 40%"
      />

      {/* 02. Featured Stories Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Large Editorial Showcase */}
        <div className="space-y-6">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A] block">
              FEATURED NARRATIVES
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#F5EDE0]">
              Moments from Sacred Trails
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredStories.map((story, idx) => (
              <motion.article
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#0D1117]/95 rounded-3xl border border-[#C9A24A]/30 overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-[#C9A24A]/70 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-[#080B0F]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#C9A24A]/40 text-[#C9A24A] text-[9px] font-bold tracking-wider">
                    {story.tag}
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] text-[#D8B982] font-semibold">
                      {story.destination}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <p className="font-devanagari text-xs text-[#C9A24A] font-semibold">
                      {story.hindi}
                    </p>
                    <h3 className="font-serif text-lg font-bold text-[#F5EDE0] group-hover:text-[#C9A24A] transition-colors leading-snug">
                      {story.title}
                    </h3>
                    <p className="text-xs text-[#F5EDE0]/75 font-light leading-relaxed">
                      {story.snippet}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#C9A24A]/20">
                    <Link
                      to="/journeys"
                      className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#C9A24A] hover:text-white transition-colors"
                    >
                      <span>Explore this trail</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* 03. Brand Commitments Experience Section */}
        <div className="pt-12 border-t border-[#C9A24A]/20 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
              THE SERVICE PROMISE
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#F5EDE0]">
              The Shri Radha Vallabh Standard
            </h3>
            <p className="text-xs sm:text-sm text-[#F5EDE0]/70 font-light">
              Factual pillars that govern our relationship with every visiting devotee and family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BRAND_EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#0D1117]/90 p-6 sm:p-7 rounded-3xl border border-[#C9A24A]/25 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#080B0F] border border-[#C9A24A]/40 flex items-center justify-center text-[#C9A24A] shadow-md">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#F5EDE0]">
                  {exp.title}
                </h4>
                <p className="font-devanagari text-xs text-[#D8B982]">
                  {exp.hindi}
                </p>
                <p className="text-xs text-[#F5EDE0]/80 font-light leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 04. Conversation CTA Banner */}
        <div className="rounded-3xl bg-[#0D1117] border border-[#C9A24A]/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="max-w-xl mx-auto space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
              LET'S CRAFT YOUR STORY
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EDE0]">
              Ready to Write Your Own Travel Memoir?
            </h3>
            <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light">
              Tell us what inspires you—quiet temple prayer, desert dunes, or royal fort history—and we will shape your itinerary with personalized care.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/plan-journey"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C9A24A] text-[#080B0F] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-lg active:scale-95 text-center min-h-[44px] flex items-center justify-center"
            >
              PLAN YOUR JOURNEY →
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#080B0F] border border-[#25D366]/50 text-[#25D366] font-bold text-xs uppercase tracking-widest hover:bg-[#25D366] hover:text-white transition-all shadow-lg active:scale-95 text-center min-h-[44px] flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>SPEAK WITH OUR TEAM</span>
            </a>
          </div>
        </div>

      </section>

    </div>
  );
};
