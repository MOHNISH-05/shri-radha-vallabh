import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Expand, MapPin, MessageCircle } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { ACTIVE_JOURNEY } from '../data/journeys';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { getWhatsAppLink } from '../data/siteConfig';

export const GalleryPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<{ title: string; location: string; category: string; image: string } | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const galleryItems = ACTIVE_JOURNEY.gallery;

  const categories = ['ALL', 'JAISALMER', 'ARCHITECTURE', 'DESERT', 'TEMPLES', 'CULTURE', 'HAVELIS'];

  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === 'ALL') return true;
    return item.category.toUpperCase().includes(activeFilter) || activeFilter.includes(item.category.toUpperCase());
  });

  return (
    <div className="min-h-screen bg-[#050709] text-[#F5EDE0]">
      
      {/* 01. Page Hero */}
      <PageHero
        breadcrumb="Gallery"
        badgeText="VISUAL ARCHIVE"
        hindiTagline="यात्राओं की कुछ झलकियाँ।"
        englishTitle="EDITORIAL VISUAL ARCHIVE"
        description="Immerse in the timeless sandstone textures of Thar, sacred temple shrines, and majestic desert twilight moments."
        backgroundImage="/assets/jaisalmer_dune_caravan.jpg"
        bgPosition="center 50%"
      >
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-[10px] sm:text-xs uppercase tracking-widest font-bold transition-all cursor-pointer border min-h-[38px] touch-manipulation ${
                activeFilter === cat
                  ? 'bg-[#C9A24A] text-[#080B0F] border-[#C9A24A] shadow-lg'
                  : 'bg-[#0D1117]/80 text-[#F5EDE0]/70 border-[#C9A24A]/25 hover:border-[#C9A24A] hover:text-[#C9A24A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </PageHero>

      {/* 02. Gallery Grid Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex items-center justify-between pb-4 border-b border-[#C9A24A]/20 text-xs text-[#F5EDE0]/60">
          <span>Showing {filteredItems.length} curated photographs</span>
          <span className="text-[#C9A24A] font-semibold">Client Photography &amp; Archives</span>
        </div>

        {/* Dynamic 2-3-4 column responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {filteredItems.map((item, idx) => (
            <motion.button
              key={item.title}
              type="button"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx % 6) * 0.08 }}
              onClick={() => setSelectedItem(item)}
              className="group relative w-full text-left rounded-3xl overflow-hidden shadow-2xl border border-[#C9A24A]/30 hover:border-[#C9A24A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A24A] cursor-pointer bg-[#0D1117] h-64 sm:h-80 lg:h-96 touch-manipulation"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                loading="lazy"
              />

              {/* Gradient Overlay & Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B0F]/95 via-[#080B0F]/30 to-transparent flex flex-col justify-between p-5 text-white transition-opacity duration-300">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 text-[9px] uppercase font-bold tracking-widest bg-[#C9A24A] text-[#080B0F] rounded-full shadow-md">
                    {item.category}
                  </span>
                  <span className="p-2 rounded-full bg-black/60 border border-white/20 text-white backdrop-blur-md group-hover:bg-[#C9A24A] group-hover:text-[#080B0F] transition-colors">
                    <Expand className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#F5EDE0] line-clamp-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#D8B982]">
                    <MapPin className="w-3.5 h-3.5 text-[#C9A24A] shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* 03. Plan Trip Based on Photos CTA */}
        <div className="rounded-3xl bg-[#0D1117] border border-[#C9A24A]/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="max-w-xl mx-auto space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
              EXPERIENCE THESE DESTINATIONS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EDE0]">
              Inspired by These Sights?
            </h3>
            <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light">
              We arrange private access to these heritage forts, sunset desert spots, and temple darshans with curated hospitality.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/plan-journey"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C9A24A] text-[#080B0F] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-lg active:scale-95 text-center min-h-[44px] flex items-center justify-center"
            >
              PLAN YOUR ITINERARY →
            </Link>
            <a
              href={getWhatsAppLink('Namaste Shri Radha Vallabh 🙏\nI saw your photo gallery and would like to plan a visit to these locations.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#080B0F] border border-[#25D366]/50 text-[#25D366] font-bold text-xs uppercase tracking-widest hover:bg-[#25D366] hover:text-white transition-all shadow-lg active:scale-95 text-center min-h-[44px] flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>ENQUIRE ON WHATSAPP</span>
            </a>
          </div>
        </div>

      </section>

      {/* Lightbox Viewer */}
      {selectedItem && (
        <GalleryLightbox
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}

    </div>
  );
};
