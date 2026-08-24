import React from 'react';
import { X, MapPin } from 'lucide-react';
import type { GalleryItem } from '../data/toursData';
import { ImageWithFallback } from './ImageWithFallback';

interface LightboxModalProps {
  item: GalleryItem;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        aria-label="Close image viewer"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="max-w-4xl w-full bg-[#2C1810] rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37]/40 flex flex-col">
        <div className="relative max-h-[75vh] overflow-hidden bg-black">
          <ImageWithFallback
            src={item.image}
            alt={item.title}
            fallbackTitle={item.title}
            className="w-full h-full object-contain max-h-[75vh]"
          />
        </div>

        <div className="p-6 bg-gradient-to-r from-[#58181F] to-[#2C1810] text-[#FAF7F0] flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              {item.category}
            </span>
            <h3 className="font-serif text-xl font-bold">{item.title}</h3>
            <div className="flex items-center gap-1.5 text-xs text-[#FAF7F0]/80 mt-1">
              <MapPin className="w-3.5 h-3.5 text-[#E65C00]" />
              <span>{item.location}</span>
            </div>
          </div>
          <span className="text-xs text-[#D4AF37] font-serif border border-[#D4AF37]/40 px-3 py-1.5 rounded-full">
            Shri Radha Vallabh Moments
          </span>
        </div>
      </div>
    </div>
  );
};
