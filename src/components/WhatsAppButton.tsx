import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../config/constants';

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  variant?: 'floating' | 'button' | 'hero';
  text?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  className = '',
  variant = 'button',
  text = 'Enquire on WhatsApp'
}) => {
  const href = getWhatsAppLink(message);

  if (variant === 'floating') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group border-2 border-white/30"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white stroke-none group-hover:rotate-12 transition-transform duration-300" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
          </span>
        </div>
        <span className="font-semibold text-sm tracking-wide pr-1 hidden sm:inline-block">
          WhatsApp Us
        </span>
      </a>
    );
  }

  if (variant === 'hero') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-base tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ${className}`}
      >
        <MessageCircle className="w-5 h-5 fill-white stroke-none" />
        <span>{text}</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#58181F] hover:bg-[#4A0E17] text-[#FAF7F0] border border-[#D4AF37]/40 hover:border-[#D4AF37] font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg ${className}`}
    >
      <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366] stroke-none" />
      <span>{text}</span>
    </a>
  );
};
