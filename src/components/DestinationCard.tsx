import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import type { Destination } from '../data/toursData';
import { getWhatsAppLink } from '../config/constants';
import { ImageWithFallback } from './ImageWithFallback';

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const whatsappUrl = getWhatsAppLink(
    `Namaste Shri Radha Vallabh 🙏\nI would like to explore pilgrimage packages for ${destination.name}.`
  );

  return (
    <div className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#D4AF37]/30 flex flex-col justify-end min-h-[320px] bg-[#2C1810]">
      {/* Background Image */}
      <ImageWithFallback
        src={destination.image}
        alt={destination.name}
        fallbackTitle={destination.name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810] via-[#2C1810]/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

      {/* Top Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#FAF7F0] text-[#58181F] rounded-full border border-[#D4AF37]">
          {destination.badge}
        </span>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 p-6 space-y-3">
        <div className="flex items-center gap-1.5 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#E65C00]" />
          <span>{destination.tagline}</span>
        </div>

        <h3 className="font-serif text-2xl font-bold text-[#FAF7F0] group-hover:text-[#D4AF37] transition-colors">
          {destination.name}
        </h3>

        <p className="text-xs text-[#FAF7F0]/80 line-clamp-2 leading-relaxed">
          {destination.description}
        </p>

        <div className="pt-2 flex items-center justify-between border-t border-white/10">
          <span className="text-[11px] text-[#D4AF37] font-medium italic">
            Famous for: {destination.famousFor}
          </span>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-[#58181F] text-[#FAF7F0] group-hover:bg-[#E65C00] group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:rotate-45"
            aria-label={`Explore ${destination.name}`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
