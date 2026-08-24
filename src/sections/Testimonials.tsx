import React from 'react';
import { TESTIMONIALS } from '../data/toursData';
import { TestimonialCard } from '../components/TestimonialCard';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAF5EF] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-[#58181F]">
            DEVOTEE FEEDBACK
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2C1810]">
            Journeys That Stay With You
          </h2>
          <p className="text-sm sm:text-base text-[#2C1810]/75">
            Read heartening experiences shared by pilgrim families who traveled with Shri Radha Vallabh.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

      </div>
    </section>
  );
};
