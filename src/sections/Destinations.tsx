import React from 'react';
import { DESTINATIONS } from '../data/toursData';
import { DestinationCard } from '../components/DestinationCard';

export const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-24 bg-[#FAF7F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-[#58181F]">
            EXPLORE SACRED SHRNES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2C1810]">
            Sacred Destinations of India
          </h2>
          <p className="text-sm sm:text-base text-[#2C1810]/75">
            Step onto holy soil where ancient scriptures come alive and divine energy touches every heart.
          </p>
        </div>

        {/* Masonry/Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

      </div>
    </section>
  );
};
