import React from 'react';
import { INTRO_IMAGE, STATS } from '../data/toursData';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const Introduction: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#FAF7F0] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#58181F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content Area */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#E65C00]"></span>
              <span className="text-xs uppercase tracking-widest font-bold text-[#58181F]">
                SHRI RADHA VALLABH
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810] leading-tight">
              Where Every Journey Becomes a <span className="text-[#58181F]">Sacred Experience</span>
            </h2>

            <p className="text-base text-[#2C1810]/80 leading-relaxed font-light">
              At <strong className="font-semibold text-[#58181F]">Shri Radha Vallabh</strong>, we believe a pilgrimage is not merely travel—it is an awakening of the soul. We help devotees discover India’s most revered sacred destinations through thoughtfully planned, stress-free pilgrimage journeys.
            </p>

            <p className="text-sm text-[#2C1810]/75 leading-relaxed">
              From the serene streets of Vrindavan and the holy ghats of Kashi to the divine majesty of Ayodhya Dham and Himalayan Char Dham, our itineraries are crafted with faith, comfort, and personalized care for devotees and families alike.
            </p>

            {/* Statistics Display Grid */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-b border-[#D4AF37]/30 py-6">
              {STATS.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#58181F]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-[#2C1810]">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[#2C1810]/60 hidden sm:block">
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4">
              <WhatsAppButton text="Plan Your Sacred Tour" variant="hero" />
            </div>
          </div>

          {/* Right: Visual Image Stack */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF7F0] outline outline-1 outline-[#D4AF37]/40 max-h-[500px]">
              <ImageWithFallback
                src={INTRO_IMAGE}
                alt="Shri Radha Vallabh Temple Architecture and Devotion"
                fallbackTitle="Vrindavan Temple Devotion"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Info Pill */}
            <div className="absolute -bottom-6 -left-6 bg-[#58181F] text-[#FAF7F0] p-5 rounded-2xl border border-[#D4AF37] shadow-xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🪔</span>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#D4AF37]">
                    Devotional Excellence
                  </h4>
                  <p className="text-xs text-[#FAF7F0]/80">
                    Trusted guides, peaceful stay & hassle-free darshans.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
