import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, Send, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export const PlanJourneyForm: React.FC = () => {
  const [formData, setFormData] = useState({
    destination: 'Jaisalmer (Active Campaign)',
    travelDate: '',
    travellers: '2 Travellers',
    children: '0 Children',
    pickupPoint: '',
    journeyType: 'Heritage & Desert Luxury',
    name: '',
    phone: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Form validation
    const trimmedName = formData.name.trim();
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');

    if (!trimmedName) {
      setErrorMessage('Please enter your name.');
      return;
    }

    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    const msg = `Namaste SRV Yaatra,\n\nI would like to plan a journey.\n\nDestination: ${formData.destination}\nTravel date: ${formData.travelDate || 'Flexible'}\nAdults / travellers: ${formData.travellers}\nChildren: ${formData.children}\nJourney type: ${formData.journeyType}${formData.pickupPoint ? `\nPickup point: ${formData.pickupPoint}` : ''}\nName: ${trimmedName}\nWhatsApp: ${formData.phone}\nSource page: ${window.location.pathname}\n\nPlease share the exact quote and availability.`;
    
    const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="plan-journey" className="py-16 sm:py-28 relative overflow-hidden bg-[#080B0F] border-t border-b border-[#C9A24A]/30">
      {/* Client photography backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/jaisalmer/web_DJI_0727.jpg"
          alt="Jaisalmer Desert Journey"
          className="w-full h-full object-cover brightness-70"
          style={{ objectPosition: 'center 40%' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080B0F]/88 via-[#080B0F]/60 to-[#080B0F]/92" />
        <div className="absolute inset-0 jaali-pattern opacity-20 pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-2 sm:space-y-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1117] border border-[#C9A24A]/40 text-[#C9A24A] text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-md">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>CUSTOM JOURNEY PLANNER</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F5EDE0]">
            PLAN YOUR JOURNEY
          </h2>

          <p className="font-hindi text-lg sm:text-xl text-[#D8B982]">
            आपकी यात्रा, आपकी कहानी।
          </p>

          <p className="text-xs sm:text-sm text-[#F5EDE0]/85 max-w-xl mx-auto font-light leading-relaxed">
            Share your travel preferences below to receive a personalized itinerary and human assistance directly on WhatsApp.
          </p>
        </div>

        {/* Interactive Form Card */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          className="bg-[#0D1117]/95 backdrop-blur-xl p-5 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl border border-[#C9A24A]/40 shadow-2xl space-y-5 sm:space-y-6"
        >
          {errorMessage && (
            <div id="home-journey-form-error" role="alert" className="flex items-center gap-2 p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs animate-shake">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Destination Selection */}
            <div className="space-y-1.5 sm:space-y-2">
              <label htmlFor="home-journey-destination" className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#C9A24A] block">
                Select Destination
              </label>
              <select
                id="home-journey-destination"
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="w-full bg-[#080B0F] border border-[#C9A24A]/40 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-[#F5EDE0] focus:border-[#C9A24A] focus:outline-none min-h-[48px] touch-manipulation cursor-pointer"
              >
                <option value="Jaisalmer (Active Campaign)">Jaisalmer — The Golden City (Active)</option>
                <option value="Char Dham Himalayas">Char Dham Himalayas (Upcoming)</option>
                <option value="Vrindavan Dham">Vrindavan Dham (Upcoming)</option>
                <option value="Ayodhya Ram Mandir">Ayodhya Ram Mandir (Upcoming)</option>
                <option value="Kashi Vishwanath">Kashi Vishwanath (Upcoming)</option>
                <option value="Custom Multi-City Journey">Custom Multi-City Journey</option>
              </select>
            </div>

            {/* Travel Date */}
            <div className="space-y-1.5 sm:space-y-2">
              <label htmlFor="home-journey-date" className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#C9A24A] block">
                Tentative Travel Date
              </label>
              <input
                id="home-journey-date"
                type="date"
                value={formData.travelDate}
                onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                className="w-full bg-[#080B0F] border border-[#C9A24A]/40 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-[#F5EDE0] focus:border-[#C9A24A] focus:outline-none min-h-[48px] touch-manipulation"
              />
            </div>

            {/* Number of Travellers */}
            <div className="space-y-1.5 sm:space-y-2">
              <label htmlFor="home-journey-travellers" className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#C9A24A] block">
                Number of Travellers
              </label>
              <select
                id="home-journey-travellers"
                value={formData.travellers}
                onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
                className="w-full bg-[#080B0F] border border-[#C9A24A]/40 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-[#F5EDE0] focus:border-[#C9A24A] focus:outline-none min-h-[48px] touch-manipulation cursor-pointer"
              >
                <option value="Solo Traveler">Solo Traveler</option>
                <option value="2 Travellers">2 Travellers (Couple / Friends)</option>
                <option value="3-5 Travellers">3-5 Travellers (Family)</option>
                <option value="6+ Travellers">6+ Travellers (Group)</option>
              </select>
            </div>

            {/* Journey Type */}
            <div className="space-y-1.5 sm:space-y-2">
              <label htmlFor="home-journey-style" className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#C9A24A] block">
                Journey Experience Type
              </label>
              <select
                id="home-journey-style"
                value={formData.journeyType}
                onChange={(e) => setFormData({ ...formData, journeyType: e.target.value })}
                className="w-full bg-[#080B0F] border border-[#C9A24A]/40 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-[#F5EDE0] focus:border-[#C9A24A] focus:outline-none min-h-[48px] touch-manipulation cursor-pointer"
              >
                <option value="Heritage & Desert Luxury">Heritage & Desert Luxury</option>
                <option value="Desert Camping & Glamping">Desert Camping & Glamping</option>
                <option value="Spiritual Pilgrimage">Spiritual Pilgrimage</option>
                <option value="Tailor-Made Royal Experience">Tailor-Made Royal Experience</option>
              </select>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <label htmlFor="home-journey-children" className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#C9A24A] block">Children</label>
              <select id="home-journey-children" value={formData.children} onChange={(e) => setFormData({ ...formData, children: e.target.value })} className="w-full bg-[#080B0F] border border-[#C9A24A]/40 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-[#F5EDE0] focus:border-[#C9A24A] focus:outline-none min-h-[48px] touch-manipulation cursor-pointer">
                <option value="0 Children">0 Children</option><option value="1 Child">1 Child</option><option value="2 Children">2 Children</option><option value="3+ Children">3+ Children</option>
              </select>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <label htmlFor="home-journey-pickup" className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#C9A24A] block">Pickup Point (Optional)</label>
              <input id="home-journey-pickup" type="text" placeholder="Jaisalmer Station, Airport or Jodhpur" value={formData.pickupPoint} onChange={(e) => setFormData({ ...formData, pickupPoint: e.target.value })} className="w-full bg-[#080B0F] border border-[#C9A24A]/40 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-[#F5EDE0] focus:border-[#C9A24A] focus:outline-none min-h-[48px] touch-manipulation" />
            </div>

            {/* Name */}
            <div className="space-y-1.5 sm:space-y-2">
              <label htmlFor="home-journey-name" className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#C9A24A] block">
                Your Name <span className="text-[#C9A24A]">*</span>
              </label>
              <input
                id="home-journey-name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#080B0F] border border-[#C9A24A]/40 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-[#F5EDE0] focus:border-[#C9A24A] focus:outline-none min-h-[48px] touch-manipulation"
                aria-describedby={errorMessage ? 'home-journey-form-error' : undefined}
                required
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5 sm:space-y-2">
              <label htmlFor="home-journey-phone" className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#C9A24A] block">
                WhatsApp Phone Number <span className="text-[#C9A24A]">*</span>
              </label>
              <input
                id="home-journey-phone"
                type="tel"
                placeholder="e.g. 9876543210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#080B0F] border border-[#C9A24A]/40 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-[#F5EDE0] focus:border-[#C9A24A] focus:outline-none min-h-[48px] touch-manipulation"
                aria-describedby={errorMessage ? 'home-journey-form-error' : undefined}
                required
              />
            </div>

          </div>

          {/* Submit CTA Button */}
          <div className="pt-3 sm:pt-4 text-center space-y-2.5">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:brightness-110 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl active:scale-95 flex items-center justify-center gap-2 mx-auto min-h-[48px] touch-manipulation cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white stroke-none" />
              <span>CONTINUE ON WHATSAPP</span>
              <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5" />
            </button>
            <span className="text-[10px] text-[#F5EDE0]/60 block leading-tight">
              *Opens WhatsApp with your pre-filled inquiry. Your details are used solely to assist with your travel request.
            </span>
          </div>

        </motion.form>

      </div>
    </section>
  );
};
