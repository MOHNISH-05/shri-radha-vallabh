import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Expand, MapPin, Filter } from 'lucide-react';
import { ACTIVE_JOURNEY } from '../data/journeys';
import { GalleryLightbox } from '../components/GalleryLightbox';

export const VisualGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<{ title: string; location: string; category: string; image: string } | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const categories = ['ALL', 'JAISALMER', 'HERITAGE', 'DESERT', 'SPIRITUAL', 'JOURNEYS'];

  const filteredGallery = ACTIVE_JOURNEY.gallery.filter((item) => {
    if (activeFilter === 'ALL') return true;
    return item.category.toUpperCase() === activeFilter;
  });

  return (
    <>
      <section id="gallery" className="py-16 sm:py-28 relative overflow-hidden bg-[#080B0F]">
        {/* Background Desert Motif Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/jaisalmer_dune_caravan.jpg"
            alt="Thar Desert Dune Silhouette"
            className="w-full h-full object-cover opacity-20 filter brightness-60"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080B0F] via-[#0D1117]/95 to-[#080B0F]" />
          <div className="absolute inset-0 jaali-pattern opacity-30 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold text-[#C9A24A]">
              CINEMATIC VISUALS
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F5EDE0]">
              EDITORIAL GALLERY
            </h2>
            <p className="text-xs sm:text-base text-[#F5EDE0]/75 font-light">
              Glimpses of golden sandstone, royal architecture, and desert sunsets.
            </p>
          </div>

          {/* Category Filters (scrollable on mobile) */}
          <div className="flex overflow-x-auto pb-2 sm:pb-0 items-center justify-start sm:justify-center gap-2 sm:gap-3 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="hidden sm:flex items-center gap-1 text-xs text-[#C9A24A] font-bold mr-2 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>FILTER:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-[11px] uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer border shrink-0 min-h-[36px] touch-manipulation ${
                  activeFilter === cat
                    ? 'bg-[#C9A24A] text-[#080B0F] border-[#C9A24A] shadow-lg'
                    : 'bg-[#0D1117]/80 text-[#F5EDE0]/70 border-[#C9A24A]/25 hover:border-[#C9A24A] hover:text-[#C9A24A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 2-column mobile / 3-column desktop editorial grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {filteredGallery.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#C9A24A]/25 hover:border-[#C9A24A] cursor-pointer bg-[#0D1117] h-52 sm:h-72 lg:h-80 touch-manipulation"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  loading="lazy"
                />

                {/* Permanent gradient on mobile + hover overlay on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B0F]/90 via-[#080B0F]/25 to-transparent flex flex-col justify-between p-3.5 sm:p-6 text-white">
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-0.5 sm:px-3 sm:py-1 text-[8px] sm:text-[9px] uppercase font-bold tracking-widest bg-[#C9A24A] text-[#080B0F] rounded-full">
                      {item.category}
                    </span>
                    <span className="p-1.5 sm:p-2 rounded-full bg-black/50 border border-white/20 text-white backdrop-blur-md">
                      <Expand className="w-3 h-3 sm:w-4 sm:h-4" />
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <h3 className="font-serif text-xs sm:text-base lg:text-lg font-bold text-[#F5EDE0] line-clamp-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[10px] sm:text-xs text-[#D8B982]">
                      <MapPin className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#C9A24A] shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View Full Gallery Link */}
          <div className="text-center pt-2">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0D1117] border border-[#C9A24A]/40 text-[#F5EDE0] hover:bg-[#C9A24A] hover:text-[#080B0F] font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl active:scale-95 touch-manipulation"
            >
              <span>VIEW COMPLETE PHOTO ARCHIVE →</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <GalleryLightbox
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </>
  );
};
