import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Calendar, CheckCircle, MapPin, Sparkles, MessageCircle } from 'lucide-react';
import type { Package } from '../data/journeys';
import { getWhatsAppLink } from '../data/siteConfig';

interface PackageModalProps {
  pkg: Package;
  onClose: () => void;
}

export const PackageModal: React.FC<PackageModalProps> = ({ pkg, onClose }) => {
  const whatsappUrl = getWhatsAppLink(
    `Namaste Shri Radha Vallabh 🙏\nI am interested in the package: "${pkg.title}" (${pkg.duration}).\nPlease share available dates and customized itinerary options.`
  );

  // ESC key + scroll lock
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/88 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={`Package: ${pkg.title}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-2xl bg-[#0B0E14] text-[#F5EDE0] rounded-2xl overflow-hidden shadow-2xl border border-[#C9A24A]/40 max-h-[92vh] flex flex-col">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#080B0F]/80 text-[#F5EDE0] hover:bg-[#C9A24A] hover:text-[#080B0F] flex items-center justify-center transition-colors cursor-pointer border border-[#C9A24A]/30 focus:outline-none focus:ring-2 focus:ring-[#C9A24A]"
          aria-label="Close package modal"
          autoFocus
        >
          <X className="w-5 h-5" />
        </button>

        {/* Banner Image */}
        <div className="relative h-52 shrink-0">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/40 to-transparent" />
          <div className="absolute bottom-4 left-5 right-12 space-y-1">
            <span className="px-3 py-1 text-[10px] uppercase font-bold tracking-widest bg-[#C9A24A] text-[#080B0F] rounded-full mb-1 inline-block">
              {pkg.tagline}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EDE0] drop-shadow-lg">
              {pkg.title}
            </h2>
            <div className="flex items-center gap-3 text-xs text-[#D8B982]">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#C9A24A]" />
                {pkg.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1 text-xs sm:text-sm">
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#C9A24A] mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Journey Overview</span>
            </h4>
            <p className="text-[#F5EDE0]/82 leading-relaxed font-light">{pkg.description}</p>
          </div>

          {/* Highlights */}
          <div className="bg-[#080B0F] p-4 rounded-2xl border border-[#C9A24A]/20">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#C9A24A] mb-3">
              Included Experiences
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {pkg.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[#F5EDE0]/88">
                  <CheckCircle className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Itinerary */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#C9A24A] mb-3 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Itinerary Flow</span>
            </h4>
            <div className="space-y-2.5">
              {pkg.itinerary.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#080B0F] border border-[#C9A24A]/18">
                  <span className="w-5 h-5 rounded-full bg-[#C9A24A] text-[#080B0F] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-[#F5EDE0]/88 font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#080B0F] border-t border-[#C9A24A]/25 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div>
            <span className="text-[11px] text-[#F5EDE0]/60 block">
              Customised dates &amp; group bookings available
            </span>
            <span className="text-xs text-[#C9A24A] font-semibold">
              Tariff: {pkg.startingPrice}
            </span>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Link
              to="/packages/jaisalmer-3-nights-4-days"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-3 rounded-full bg-[#0B0E14] border border-[#C9A24A]/40 text-[#F5EDE0] hover:bg-[#C9A24A] hover:text-[#050709] font-bold text-[10px] uppercase tracking-wider transition-all text-center"
            >
              All 5 Tiers
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:brightness-110 text-white font-bold text-[10px] uppercase tracking-wider transition-all shadow-lg text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              <span>Enquire</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
