import React, { useState } from 'react';
import { Calendar, CheckCircle2, ChevronRight, MessageCircle } from 'lucide-react';
import type { YatraPackage } from '../data/toursData';
import { getYatraWhatsAppLink } from '../config/constants';
import { ImageWithFallback } from './ImageWithFallback';
import { YatraDetailModal } from './YatraDetailModal';

interface YatraCardProps {
  yatra: YatraPackage;
}

export const YatraCard: React.FC<YatraCardProps> = ({ yatra }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const whatsappUrl = getYatraWhatsAppLink(yatra.title);

  return (
    <>
      <div className="group relative bg-[#FAF7F0] rounded-2xl border border-[#D4AF37]/30 hover:border-[#D4AF37] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full transform hover:-translate-y-1.5">
        {/* Card Header Image */}
        <div className="relative h-64 overflow-hidden">
          <ImageWithFallback
            src={yatra.image}
            alt={yatra.title}
            fallbackTitle={yatra.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810] via-transparent to-transparent opacity-80" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
            {yatra.badge && (
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[#58181F] text-[#FAF7F0] rounded-full border border-[#D4AF37]/50 shadow-md">
                {yatra.badge}
              </span>
            )}
            {yatra.isPopular && (
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[#E65C00] text-white rounded-full shadow-md animate-pulse">
                ★ Popular
              </span>
            )}
          </div>

          <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
            <div className="flex items-center gap-2 text-xs font-medium text-[#D4AF37] mb-1">
              <Calendar className="w-3.5 h-3.5 text-[#E65C00]" />
              <span>{yatra.duration}</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-[#FAF7F0] group-hover:text-[#D4AF37] transition-colors">
              {yatra.title}
            </h3>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <p className="text-sm text-[#2C1810]/80 line-clamp-3 leading-relaxed">
            {yatra.description}
          </p>

          {/* Highlights List */}
          <div className="space-y-2 pt-2 border-t border-[#D4AF37]/20">
            <span className="text-xs uppercase tracking-widest text-[#58181F] font-bold">
              Yatra Highlights
            </span>
            <ul className="space-y-1.5">
              {yatra.highlights.slice(0, 3).map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#2C1810]/90">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E65C00] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card Action Buttons */}
          <div className="pt-4 flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="flex-1 px-4 py-2.5 rounded-full bg-[#FAF7F0] border border-[#58181F] text-[#58181F] hover:bg-[#58181F] hover:text-[#FAF7F0] font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
            >
              <span>View Itinerary</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md hover:scale-105"
              title="Enquire on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              <span>Enquire</span>
            </a>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {modalOpen && (
        <YatraDetailModal yatra={yatra} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};
