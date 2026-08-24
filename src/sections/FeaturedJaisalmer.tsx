import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Castle, Tent, Music, Utensils } from 'lucide-react';

export const FeaturedJaisalmer: React.FC = () => {
  const featureBadges = [
    { label: "Living Fort Walks", icon: <Castle className="w-4 h-4 text-[#C9A24A]" /> },
    { label: "Desert Camping & Glamping", icon: <Tent className="w-4 h-4 text-[#C9A24A]" /> },
    { label: "Folk Music & Kalbelia Dance", icon: <Music className="w-4 h-4 text-[#C9A24A]" /> },
    { label: "Rajasthani Culinary Heritage", icon: <Utensils className="w-4 h-4 text-[#C9A24A]" /> }
  ];

  return (
    <section id="jaisalmer" className="py-28 relative overflow-hidden bg-[#080B0F] border-t border-b border-[#C9A24A]/30">
      {/* Clearly Visible Gadisar Lake Sunset Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/jaisalmer/Jaisalmer Photos/gadisar.JPG"
          alt="Gadisar Lake Jaisalmer Sunset Backdrop"
          className="w-full h-full object-cover opacity-75 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080B0F]/90 via-[#080B0F]/65 to-[#080B0F]/90" />
        <div className="absolute inset-0 jaali-pattern opacity-25 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Visual Media Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C9A24A]/50 max-h-[560px] group gold-glow">
              <img
                src="/assets/featured-jaisalmer-arch.jpg"
                alt="Jaisalmer Palace Stone Arch with Diyas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B0F] via-transparent to-transparent opacity-40" />
            </div>


            {/* Floating Luxury Pill */}
            <div className="absolute -bottom-6 -right-6 bg-[#0D1117]/95 backdrop-blur-md p-5 rounded-2xl border border-[#C9A24A] shadow-2xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🏜️</span>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#C9A24A]">
                    The Golden Sandstone
                  </h4>
                  <p className="text-xs text-[#F5EDE0]/85">
                    Living Fort, Royal Havelis & Thar Desert Glamping.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Editorial Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-6 bg-[#080B0F]/40 p-6 sm:p-8 rounded-3xl border border-[#C9A24A]/25 backdrop-blur-sm shadow-xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1117] border border-[#C9A24A]/40 text-[#C9A24A] text-xs font-bold uppercase tracking-widest shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CURRENT FEATURED CAMPAIGN</span>
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5EDE0] drop-shadow-md">
                JAISALMER
              </h2>
              <p className="font-hindi text-2xl text-[#D8B982] italic drop-shadow-sm">
                स्वर्णिम धरा, अनंत कहानियाँ।
              </p>
            </div>

            <p className="text-base text-[#F5EDE0]/90 leading-relaxed font-light drop-shadow-sm">
              Rise with golden sunlight over the ancient sandstone towers of Sonar Qella. Experience Jaisalmer beyond ordinary travel—through guided living-fort walks, private haveli architecture trails, serene boat rides at Gadisar Lake, and starry nights in the Thar Desert accompanied by authentic Manganiyar music.
            </p>

            {/* Feature Icons Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {featureBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0D1117]/90 border border-[#C9A24A]/30 backdrop-blur-md shadow-md">
                  {badge.icon}
                  <span className="text-xs font-semibold text-[#F5EDE0]">{badge.label}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="#jaisalmer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#C9A24A] via-[#D8B982] to-[#AA771C] hover:brightness-110 text-[#080B0F] font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl hover:scale-105"
                aria-label="Explore the full Jaisalmer journey experience"
              >
                <span>EXPLORE JAISALMER →</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
