import React from 'react';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { getWhatsAppLink } from '../config/constants';
import { Sparkles, ArrowRight } from 'lucide-react';

export const PlanYatraCTA: React.FC = () => {
  const planYatraUrl = getWhatsAppLink(
    "Namaste Shri Radha Vallabh 🙏\nI would like to plan a custom yatra. Please assist me with options."
  );

  return (
    <section id="contact" className="py-24 temple-pattern relative overflow-hidden text-[#FAF7F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="w-16 h-16 rounded-full bg-[#FAF7F0]/10 border border-[#D4AF37] flex items-center justify-center mx-auto text-3xl shadow-xl">
          🛕
        </div>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF7F0]/10 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>CUSTOM PILGRIMAGE BOOKINGS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#FAF7F0] leading-tight">
            Ready to Begin Your <br className="hidden sm:inline" />
            <span className="gold-gradient-text">Sacred Journey?</span>
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-xl text-[#FAF7F0]/90 font-light leading-relaxed">
            Tell us where your heart wants to go. We'll help you plan every detail of your pilgrimage with devotion, safety, and comfort.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
          <a
            href={planYatraUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#E65C00] hover:bg-[#d15300] text-white font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 border border-[#D4AF37]"
          >
            <span>Plan My Yatra</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <WhatsAppButton
            variant="hero"
            text="WhatsApp Us Now"
            className="w-full sm:w-auto"
          />
        </div>

        {/* Reassurance text */}
        <div className="pt-6 text-xs text-[#FAF7F0]/70 flex flex-wrap items-center justify-center gap-6">
          <span>✔ Instant Response on WhatsApp</span>
          <span>✔ Customized Group Itineraries</span>
          <span>✔ Senior Citizen Friendly Care</span>
        </div>

      </div>
    </section>
  );
};
