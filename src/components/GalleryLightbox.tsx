import React, { useEffect, useRef } from 'react';
import { X, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface GalleryLightboxProps {
  item: { title: string; location: string; category?: string; image: string };
  onClose: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({ item, onClose }) => {
  const returnFocusRef = useRef<HTMLElement | null>(
    typeof document !== 'undefined' && document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null,
  );

  // Close on ESC key
  useEffect(() => {
    const returnFocus = returnFocusRef.current;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      returnFocus?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing: ${item.title}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 p-3 rounded-full bg-white/10 hover:bg-white/22 text-white transition-colors cursor-pointer border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#C9A24A]"
        aria-label="Close image viewer"
        autoFocus
      >
        <X className="w-5 h-5" />
      </button>

      <div className="max-w-4xl w-full bg-[#0B0E14] rounded-2xl overflow-hidden shadow-2xl border border-[#C9A24A]/35 flex flex-col max-h-[90vh]">
        <div className="relative flex-1 overflow-hidden bg-black flex items-center justify-center min-h-[300px] max-h-[72vh]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
            loading="eager"
          />
        </div>

        <div className="p-5 bg-gradient-to-r from-[#0B0E14] to-[#080B10] text-[#F5EDE0] flex items-center justify-between border-t border-[#C9A24A]/20 shrink-0">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#C9A24A] font-bold block">
              {item.category || 'JAISALMER'} · GALLERY
            </span>
            <h3 className="font-serif text-lg font-bold mt-0.5">{item.title}</h3>
            <div className="flex items-center gap-1.5 text-xs text-[#D8B982] mt-1">
              <MapPin className="w-3.5 h-3.5 text-[#C9A24A]" />
              <span>{item.location}</span>
            </div>
          </div>
          <span className="text-xs text-[#C9A24A] font-serif border border-[#C9A24A]/30 px-3 py-1.5 rounded-full hidden sm:inline-block shrink-0">
            {SITE_CONFIG.brandName}
          </span>
        </div>
      </div>
    </div>
  );
};
