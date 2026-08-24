import React from 'react';
import { JOURNEY_STEPS } from '../data/toursData';

export const JourneyExperience: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAF5EF] relative border-t border-b border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-[#58181F]">
            HOW IT WORKS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2C1810]">
            The Journey Experience
          </h2>
          <p className="text-sm sm:text-base text-[#2C1810]/75">
            Four simple steps from your first query to an unforgettable spiritual pilgrimage.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {JOURNEY_STEPS.map((step, index) => (
            <div
              key={step.number}
              className="bg-[#FAF7F0] p-8 rounded-3xl border border-[#D4AF37]/30 shadow-lg relative flex flex-col justify-between hover:border-[#D4AF37] transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Step Number */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-4xl font-extrabold text-[#58181F] group-hover:text-[#E65C00] transition-colors">
                    {step.number}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#FAF5EF] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center text-xs font-bold">
                    🛕
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#2C1810] mb-1">
                  {step.title}
                </h3>
                <span className="text-xs font-semibold text-[#E65C00] block mb-3">
                  {step.subtitle}
                </span>

                <p className="text-xs text-[#2C1810]/75 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step bottom accent line */}
              <div className="mt-6 pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between text-[11px] text-[#58181F] font-medium">
                <span>Step {index + 1} of 4</span>
                <span className="text-[#D4AF37]">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
