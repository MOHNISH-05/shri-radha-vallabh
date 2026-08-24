import React from 'react';
import { X, Calendar, CheckCircle, MapPin, Sparkles } from 'lucide-react';
import type { YatraPackage } from '../data/toursData';
import { getYatraWhatsAppLink } from '../config/constants';
import { ImageWithFallback } from './ImageWithFallback';
import { WhatsAppButton } from './WhatsAppButton';

interface YatraDetailModalProps {
  yatra: YatraPackage;
  onClose: () => void;
}

export const YatraDetailModal: React.FC<YatraDetailModalProps> = ({ yatra, onClose }) => {
  const whatsappUrl = getYatraWhatsAppLink(yatra.title);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#FAF7F0] rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37] max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#2C1810]/70 text-[#FAF7F0] hover:bg-[#58181F] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner */}
        <div className="relative h-56 shrink-0">
          <ImageWithFallback
            src={yatra.image}
            alt={yatra.title}
            fallbackTitle={yatra.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#58181F] via-[#58181F]/40 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="px-3 py-1 text-[10px] uppercase font-bold tracking-widest bg-[#E65C00] text-white rounded-full mb-2 inline-block">
              {yatra.destination}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F0]">
              {yatra.title}
            </h2>
            <div className="flex items-center gap-2 text-xs text-[#D4AF37] mt-1 font-medium">
              <Calendar className="w-4 h-4 text-[#E65C00]" />
              <span>{yatra.duration}</span>
            </div>
          </div>
        </div>

        {/* Modal Content Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#58181F] mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>About the Pilgrimage</span>
            </h4>
            <p className="text-sm text-[#2C1810]/90 leading-relaxed">
              {yatra.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="bg-[#FAF5EF] p-4 rounded-2xl border border-[#D4AF37]/30">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#58181F] mb-3">
              Included Highlights
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {yatra.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-[#2C1810]">
                  <CheckCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Day-by-Day Summary */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#58181F] mb-3 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#E65C00]" />
              <span>Sample Itinerary</span>
            </h4>
            <div className="space-y-3">
              {yatra.itinerarySummary && yatra.itinerarySummary.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#D4AF37]/20">
                  <span className="w-6 h-6 rounded-full bg-[#58181F] text-[#D4AF37] font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs text-[#2C1810] font-medium pt-0.5">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 bg-[#FAF5EF] border-t border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-center sm:text-left">
            <span className="text-xs text-[#2C1810]/70 block">Ready to join this yatra?</span>
            <span className="text-xs font-semibold text-[#58181F]">Customized dates & group bookings available</span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2"
          >
            <WhatsAppButton text="Enquire on WhatsApp" variant="hero" className="py-0 px-0 bg-transparent shadow-none" />
          </a>
        </div>
      </div>
    </div>
  );
};
