import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Compass, ArrowUpRight, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppLink } from '../data/siteConfig';
import { InstagramIcon } from './InstagramIcon';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Journeys',     hindi: 'यात्राएँ',      path: '/journeys'     },
    { name: 'Jaisalmer',   hindi: 'जैसलमेर',       path: '/jaisalmer'    },
    { name: 'Packages',    hindi: 'पैकेज',          path: '/packages'     },
    { name: 'About',       hindi: 'हमारे बारे में', path: '/about'        },
    { name: 'Experience',  hindi: 'अनुभव',         path: '/stories'      },
    { name: 'Gallery',     hindi: 'गैलरी',          path: '/gallery'      },
    { name: 'Plan Journey',hindi: 'यात्रा बनाएँ',    path: '/plan-journey' },
  ];

  const planWhatsAppUrl = getWhatsAppLink(
    "Namaste Shri Radha Vallabh 🙏\nI would like to plan a custom heritage journey."
  );

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const handleMobileNavClick = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
        isScrolled
          ? 'bg-[#080B0F]/95 backdrop-blur-xl py-2.5 sm:py-3 border-b border-[#C9A24A]/20 shadow-2xl'
          : 'bg-gradient-to-b from-[#080B0F]/90 via-[#080B0F]/40 to-transparent py-3.5 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[44px]">

          {/* Brand Logo & Name */}
          <Link
            id="navbar-logo-target"
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
            aria-label={`${SITE_CONFIG.brandName} — Home`}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#C9A24A] p-0.5 bg-[#080B0F] flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:border-[#D8B982] transition-all duration-300 overflow-hidden shrink-0">
              <img
                src={SITE_CONFIG.logoUrl}
                alt={SITE_CONFIG.brandName}
                className="w-full h-full object-cover rounded-full"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-xs sm:text-base font-bold tracking-widest text-[#F5EDE0] group-hover:text-[#C9A24A] transition-colors">
                {SITE_CONFIG.brandName}
              </span>
              <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.22em] font-semibold text-[#C9A24A]/80">
                HERITAGE &amp; JOURNEYS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = isActive(link.path);

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 relative py-1 flex flex-col items-center gap-0.5 ${
                    active
                      ? 'text-[#C9A24A]'
                      : 'text-[#F5EDE0]/80 hover:text-[#C9A24A]'
                  }`}
                >
                  <span>{link.name}</span>
                  {active && (
                    <span className="w-full h-[1.5px] bg-[#C9A24A] rounded-full shadow-[0_0_8px_#C9A24A]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-[#F5EDE0]/75 hover:text-[#C9A24A] hover:bg-white/5 transition-all"
              aria-label="Follow on Instagram"
              title="Instagram Profile"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href={planWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:brightness-110 text-white font-bold text-[10px] uppercase tracking-wider shadow-lg active:scale-95 transition-all duration-300 touch-manipulation cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Right Controls: WhatsApp Icon + Hamburger (>= 44x44px touch targets) */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={planWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] flex items-center justify-center active:scale-95 transition-all touch-manipulation"
              aria-label="Direct WhatsApp Enquiry"
            >
              <MessageCircle className="w-5 h-5 fill-[#25D366] stroke-none" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 rounded-full bg-[#0D1117]/80 border border-[#C9A24A]/30 text-[#F5EDE0] flex items-center justify-center active:scale-95 transition-all touch-manipulation cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-[#080B0F]/98 backdrop-blur-2xl flex flex-col justify-between p-6 pt-20 animate-fadeIn"
          style={{ paddingTop: 'max(5rem, env(safe-area-inset-top, 5rem))' }}
        >
          {/* Close button top right */}
          <div className="absolute top-5 right-5">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center active:scale-95 touch-manipulation cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Brand header inside drawer */}
          <div className="text-center space-y-1 pb-4 border-b border-[#C9A24A]/20">
            <span className="font-serif text-sm font-bold tracking-widest text-[#F5EDE0] block">
              {SITE_CONFIG.brandName}
            </span>
            <span className="font-devanagari text-xs text-[#C9A24A]">
              आस्था से अनुभव तक
            </span>
          </div>

          {/* Nav items list */}
          <nav className="flex flex-col gap-1 py-4 overflow-y-auto flex-1 justify-center">
            {navLinks.map((link) => {
              const active = isActive(link.path);

              return (
                <button
                  key={link.name}
                  onClick={() => handleMobileNavClick(link.path)}
                  className={`flex items-center justify-between py-3.5 px-4 rounded-2xl min-h-[48px] touch-manipulation transition-all text-left w-full cursor-pointer ${
                    active
                      ? 'bg-[#C9A24A]/15 border border-[#C9A24A]/40 text-[#C9A24A]'
                      : 'text-[#F5EDE0]/90 hover:bg-white/5 hover:text-[#C9A24A]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Compass className={`w-4 h-4 ${active ? 'text-[#C9A24A]' : 'text-[#C9A24A]/60'}`} />
                    <span className="font-serif text-base font-bold tracking-wider">
                      {link.name}
                    </span>
                  </div>
                  <span className="font-devanagari text-xs text-[#D8B982]/80">
                    {link.hindi}
                  </span>
                </button>
              );
            })}

            <div className="grid grid-cols-2 gap-2 px-4 pt-2" aria-label="Jaisalmer navigation">
              {[
                ['Explore', '/jaisalmer/explore'],
                ['History', '/jaisalmer/history'],
                ['Riyasat', '/jaisalmer/riyasat'],
                ['Royal House', '/jaisalmer/riyasat/chaitanya-raj-singh'],
              ].map(([label, path]) => (
                <button
                  key={path}
                  onClick={() => handleMobileNavClick(path)}
                  className="min-h-[44px] rounded-xl border border-[#C9A24A]/20 bg-white/[0.03] px-3 text-[10px] font-bold uppercase tracking-wider text-[#D8B982] hover:border-[#C9A24A]/50 hover:text-[#F5EDE0] transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </nav>

          {/* Bottom Drawer Actions */}
          <div className="pt-4 border-t border-[#C9A24A]/20 space-y-3 shrink-0">
            <a
              href={planWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl min-h-[48px] touch-manipulation"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              <span>Connect on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-center gap-4 text-xs text-[#F5EDE0]/60">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C9A24A] transition-colors"
              >
                {SITE_CONFIG.instagramHandle}
              </a>
              <span>•</span>
              <span>{SITE_CONFIG.location}</span>
            </div>
          </div>

        </div>
      )}
    </header>
  );
};
