import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

const WHATSAPP_NUMBER = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');

const STRUCTURED_MSG = encodeURIComponent(
  `Namaste Shri Radha Vallabh 🙏\n\nI am interested in planning a journey.\n\n📍 *Destination:* Jaisalmer\n📅 *Travel Date:* \n👥 *Travellers:* \n🛕 *Journey Type:* \n👤 *Name:* \n\nPlease share the available options and a customised itinerary.`
);

export const WhatsAppFloatingButton: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${STRUCTURED_MSG}`;

  return (
    <div
      className="fixed z-40 flex flex-col items-end gap-2.5 pointer-events-auto"
      style={{
        bottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))',
        right: 'calc(1rem + env(safe-area-inset-right, 0px))',
      }}
    >
      {/* Tooltip / options drawer */}
      {expanded && (
        <div className="bg-[#0B0E14]/95 border border-[#25D366]/40 backdrop-blur-xl rounded-2xl p-4 shadow-2xl text-xs text-[#F5EDE0]/90 max-w-[240px] animate-fade-in">
          <p className="font-semibold text-[#25D366] mb-1">Chat on WhatsApp</p>
          <p className="text-[#F5EDE0]/70 text-[11px] leading-relaxed">
            Plan your custom journey or enquire directly with our travel team.
          </p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors min-h-[40px] touch-manipulation"
            aria-label="Open WhatsApp conversation"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white stroke-none" />
            <span>Open WhatsApp</span>
          </a>
        </div>
      )}

      {/* Main floating button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 px-3.5 py-3 sm:px-4 sm:py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl active:scale-95 transition-all duration-300 border-2 border-white/20 group min-h-[48px] touch-manipulation cursor-pointer"
        aria-label={expanded ? 'Close WhatsApp options' : 'Chat on WhatsApp'}
        aria-expanded={expanded}
      >
        {/* Animated ping indicator */}
        <div className="relative">
          {expanded ? (
            <X className="w-5 h-5" />
          ) : (
            <MessageCircle className="w-5 h-5 fill-white stroke-none group-hover:rotate-12 transition-transform duration-300" />
          )}
          {!expanded && (
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-300" />
            </span>
          )}
        </div>
        <span className="font-bold text-xs uppercase tracking-widest pr-0.5 hidden sm:inline-block">
          {expanded ? 'Close' : 'WhatsApp Us'}
        </span>
      </button>
    </div>
  );
};
