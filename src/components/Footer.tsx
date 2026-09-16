import React from 'react';
import { Link } from 'react-router-dom';
import { MAPS_CONFIG, SITE_CONFIG, getWhatsAppLink } from '../data/siteConfig';
import { MessageCircle, MapPin, ArrowUpRight, Mail, Phone } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

const MNB_WHATSAPP_URL = 'https://wa.me/917849931611?text=Hi%20Mohnish%2C%20I%20visited%20the%20Shri%20Radha%20Vallabh%20website%20and%20would%20like%20to%20connect%20with%20you.';

export const Footer: React.FC = () => {
  const whatsappUrl = getWhatsAppLink();

  const quickLinks = [
    { name: 'Journeys', path: '/journeys' },
    { name: 'Jaisalmer Tours & Travel Guide', path: '/jaisalmer' },
    { name: 'Jaisalmer 2–4 Day Itinerary', path: '/jaisalmer/itinerary' },
    { name: 'Jaisalmer Desert Safaris', path: '/safari' },
    { name: 'Thar Soul Safari', path: '/safari/thar-soul' },
    { name: 'Jaisalmer Tour Packages', path: '/packages' },
    { name: 'Jaisalmer Taxi & Transfers', path: '/jaisalmer-taxi' },
    { name: 'About', path: '/about' },
    { name: 'Stories & Experience', path: '/stories' },
    { name: 'Visual Gallery', path: '/gallery' },
    { name: 'Plan Journey', path: '/plan-journey' },
  ];

  const futureDestinations = [
    { name: 'Jaisalmer 3N/4D Packages', path: '/packages/jaisalmer-3-nights-4-days' },
    { name: 'Thar Soul 1-Day Sunset Safari', path: '/safari/thar-soul' },
    { name: 'Jaisalmer Experience Hub', path: '/jaisalmer' },
    { name: 'Jaisalmer All 18 Landmarks', path: '/jaisalmer/explore' },
    { name: 'Jaisalmer 2–4 Day Itinerary', path: '/jaisalmer/itinerary' },
    { name: 'Sam Sand Dunes Visitor Guide', path: '/jaisalmer/places/sam-dunes' },
    { name: 'Jaisalmer History & Riyasat', path: '/jaisalmer/history' },
    { name: 'Char Dham Himalayas (Upcoming)', path: '/journeys' },
    { name: 'Vrindavan Dham (Upcoming)', path: '/journeys' },
    { name: 'Ayodhya Ram Mandir (Upcoming)', path: '/journeys' },
    { name: 'Kashi Vishwanath (Upcoming)', path: '/journeys' }
  ];

  return (
    <footer className="bg-[#05070A] text-[#F5EFE6] border-t border-[#D4AF37]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] p-0.5 bg-[#0B0E14] flex items-center justify-center shadow-lg overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                <img
                  src={SITE_CONFIG.logoUrl}
                  alt={SITE_CONFIG.brandName}
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold tracking-wider text-[#F5EFE6] group-hover:text-[#C9A24A] transition-colors">
                  {SITE_CONFIG.brandName}
                </h3>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block">
                  {SITE_CONFIG.positioning}
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#F5EFE6]/70 leading-relaxed font-light italic">
              "{SITE_CONFIG.tagline}"
            </p>
            <p className="font-devanagari text-sm text-[#E5C378]">
              {SITE_CONFIG.hindiTagline}
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-[#080B10] flex items-center justify-center transition-colors border border-white/10"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-xs font-bold text-[#D4AF37] uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F5EFE6]/80">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#D4AF37]">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Journeys & Shrines */}
          <div className="space-y-4">
            <h4 className="font-serif text-xs font-bold text-[#D4AF37] uppercase tracking-widest">
              Featured Journeys
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F5EFE6]/80">
              {futureDestinations.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#D4AF37]">🛕</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Reach Us */}
          <div className="space-y-4">
            <h4 className="font-serif text-xs font-bold text-[#D4AF37] uppercase tracking-widest">
              Connect With Us
            </h4>
            <div className="space-y-3 text-xs text-[#F5EFE6]/80">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
                aria-label={`WhatsApp: ${SITE_CONFIG.phoneDisplay}`}
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp: {SITE_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.phoneNumber}`}
                className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
                aria-label={`Call us: ${SITE_CONFIG.phoneDisplay}`}
              >
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Call: {SITE_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400 shrink-0" />
                <span>{SITE_CONFIG.instagramHandle}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.location}</span>
              </div>
              <a
                href={MAPS_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Find ${MAPS_CONFIG.listingName} on Google Maps`}
                className="flex min-h-8 items-center gap-2 rounded-sm transition-colors hover:text-[#D4AF37] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
              >
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Find us on Google Maps</span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                <span>Enquire via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5EFE6]/50">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:justify-start">
            <p>
              © {SITE_CONFIG.copyrightYear} {SITE_CONFIG.brandName}. All Rights Reserved.
            </p>
            <span className="hidden text-[#D4AF37]/50 lg:inline" aria-hidden="true">•</span>
            <a
              href={MNB_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact MNB Mohnish on WhatsApp"
              className="inline-flex min-h-8 items-center rounded-sm text-[11px] text-[#F5EFE6]/60 transition-colors hover:text-[#D4AF37] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
            >
              Designed &amp; Developed by MNB (MOHNISH)
            </a>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <Link to="/about" className="hover:text-[#D4AF37] transition-colors">About Us</Link>
            <span>•</span>
            <Link to="/journeys" className="hover:text-[#D4AF37] transition-colors">Our Journeys</Link>
            <span>•</span>
            <Link to="/plan-journey" className="hover:text-[#D4AF37] transition-colors">Plan Journey</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
