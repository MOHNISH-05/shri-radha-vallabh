import React from 'react';
import { Quote, Star } from 'lucide-react';
import type { Testimonial } from '../data/toursData';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-[#FAF7F0] p-8 rounded-3xl border border-[#D4AF37]/30 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1">
      {/* Decorative Quote Icon */}
      <div className="absolute top-6 right-6 text-[#D4AF37]/30 group-hover:text-[#D4AF37]/60 transition-colors">
        <Quote className="w-10 h-10" />
      </div>

      {/* Stars */}
      <div className="space-y-4">
        <div className="flex items-center gap-1 text-[#E65C00]">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#E65C00] stroke-none" />
          ))}
        </div>

        {/* Quote text */}
        <p className="text-sm sm:text-base text-[#2C1810] italic leading-relaxed font-serif">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Author details */}
      <div className="mt-6 pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-sm text-[#58181F]">
            — {testimonial.author}
          </h4>
          <span className="text-xs text-[#2C1810]/70 font-medium">
            {testimonial.location} • {testimonial.yatraName}
          </span>
        </div>
        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-[#FAF5EF] text-[#D4AF37] border border-[#D4AF37]/40 rounded-full">
          Verified Pilgrim
        </span>
      </div>
    </div>
  );
};
