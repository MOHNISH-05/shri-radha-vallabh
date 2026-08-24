import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, Send, AlertCircle, ShieldCheck, Clock } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SITE_CONFIG } from '../data/siteConfig';

export const PlanJourneyPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const destQuery = searchParams.get('destination')?.toLowerCase() || '';

  const getInitialDestination = (query: string) => {
    if (query.includes('jaisalmer')) return 'Jaisalmer (The Golden City)';
    if (query.includes('chardham') || query.includes('char dham')) return 'Char Dham Himalayas';
    if (query.includes('vrindavan') || query.includes('mathura')) return 'Vrindavan & Mathura Dham';
    if (query.includes('ayodhya')) return 'Ayodhya Ram Janmabhoomi';
    if (query.includes('kashi') || query.includes('varanasi')) return 'Kashi Vishwanath (Varanasi)';
    if (query.includes('dwarka') || query.includes('somnath')) return 'Dwarkadhish & Somnath';
    return 'Jaisalmer (The Golden City)';
  };

  const [formData, setFormData] = useState({
    destination: getInitialDestination(destQuery),
    travelDate: '',
    duration: '3 Days / 2 Nights',
    adults: '2 Adults',
    children: '0 Children',
    seniorsTravelling: 'No',
    journeyType: 'Heritage & Desert Luxury',
    stayPreference: 'Heritage Boutique Haveli / Luxury Tent',
    name: '',
    phone: '',
    specialNotes: '',
  });

  useEffect(() => {
    if (destQuery) {
      setFormData(prev => ({ ...prev, destination: getInitialDestination(destQuery) }));
    }
  }, [destQuery]);

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const trimmedName = formData.name.trim();
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');

    if (!trimmedName) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit WhatsApp mobile number.');
      return;
    }

    const msg = `Namaste Shri Radha Vallabh 🙏\n\nI would like to plan a bespoke journey with the following details:\n\n📍 *Destination*: ${formData.destination}\n📅 *Travel Date*: ${formData.travelDate || 'Flexible'}\n⏱️ *Duration*: ${formData.duration}\n👥 *Travellers*: ${formData.adults}, ${formData.children} (Seniors: ${formData.seniorsTravelling})\n🛕 *Journey Type*: ${formData.journeyType}\n🏨 *Stay Preference*: ${formData.stayPreference}\n👤 *Lead Guest*: ${trimmedName}\n📞 *WhatsApp*: ${formData.phone}${formData.specialNotes ? `\n📝 *Notes*: ${formData.specialNotes}` : ''}\n\nPlease share customized itinerary options, stay recommendations & tariff details.\nThank you.`;

    const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050709] text-[#F5EDE0]">
      
      {/* 01. Page Hero */}
      <PageHero
        breadcrumb="Plan Journey"
        badgeText="BESPOKE TRAVEL PLANNER"
        hindiTagline="आपकी अगली यात्रा, आपकी तरह।"
        englishTitle="PLAN YOUR CUSTOM JOURNEY"
        description="Share your destination, dates, and family preferences below to receive a personalized itinerary and dedicated coordination directly on WhatsApp."
        backgroundImage="/images/jaisalmer/web_DJI_0727.jpg"
        bgPosition="center 40%"
      />

      {/* 02. Planner Form Container */}
      <section className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Step-by-Step Form Card */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          className="bg-[#0D1117]/95 backdrop-blur-xl p-6 sm:p-12 rounded-3xl border border-[#C9A24A]/40 shadow-2xl space-y-8"
        >
          {errorMessage && (
            <div id="journey-form-error" role="alert" className="flex items-center gap-2 p-4 rounded-xl bg-red-950/70 border border-red-500/50 text-red-200 text-xs sm:text-sm animate-shake">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* STEP 1: Destination & Duration */}
          <div className="space-y-4 pb-6 border-b border-[#C9A24A]/20">
            <div className="flex items-center gap-2 text-xs font-bold text-[#C9A24A] uppercase tracking-widest">
              <span className="w-6 h-6 rounded-full bg-[#C9A24A] text-[#080B0F] flex items-center justify-center font-extrabold text-[11px]">1</span>
              <span>Select Destination &amp; Duration</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="journey-destination" className="text-[11px] font-semibold uppercase tracking-wider text-[#D8B982] block">
                  Primary Destination
                </label>
                <select
                  id="journey-destination"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full bg-[#080B0F] border border-[#C9A24A]/40 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#F5EDE0] focus:border-[#C9A24A] focus:outline-none min-h-[48px] touch-manipulation cursor-pointer"
                >
                  <option value="Jaisalmer (The Golden City)">Jaisalmer — Living Fort &amp; Desert (Active)</option>
                  <option value="Char Dham Himalayas">Char Dham Himalayas (Yamunotri, Gangotri, Kedarnath, Badrinath)</option>
                  <option value="Vrindavan & Mathura Dham">Vrindavan &amp; Mathura Dham (Braj Bhakti)</option>
                  <option value="Ayodhya Ram Janmabhoomi">Ayodhya (Ram Mandir &amp; Saryu Aarti)</option>
                  <option value="Kashi Vishwanath (Varanasi)">Kashi Vishwanath &amp; Ganga Aarti</option>
                  <option value="Dwarkadhish & Somnath">Dwarka &amp; Somnath Jyotirlinga</option>
                  <option value="Custom Multi-City Spiritual Circuit">Custom Multi-City Spiritual Circuit</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="journey-duration" className="text-[11px] font-semibold uppercase tracking-wider text-[#D8B982] block">
                  Preferred Duration
                </label>
                <select
                  id="journey-duration"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full bg-[#080B0F] border border-[#C9A24A]/40 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#F5EDE0] focus:border-[#C9A24A] focus:outline-none min-h-[48px] touch-manipulation cursor-pointer"
                >
                  <option value="2 Days / 1 Night">2 Days / 1 Night (Express Weekend)</option>
                  <option value="3 Days / 2 Nights">3 Days / 2 Nights (Recommended Standard)</option>
                  <option value="4 Days / 3 Nights">4 Days / 3 Nights (Complete Royal/Spiritual)</option>
                  <option value="5-7 Days">5-7 Days (Comprehensive Pilgrimage)</option>
                  <option value="8+ Days (Char Dham / Multi-City)">8+ Days (Extended Multi-City)</option>
                </select>
              </div>
            </div>
          </div>

          {/* STEP 2: Travel Dates & Group Size */}
          <div className="space-y-4 pb-6 border-b border-[#C9A24A]/20">
            <div className="flex items-center gap-2 text-xs font-bold text-[#C9A24A] uppercase tracking-widest">
              <span className="w-6 h-6 rounded-full bg-[#C9A24A] text-[#080B0F] flex items-center justify-center font-extrabold text-[11px]">2</span>
              <span>Travel Dates &amp; Family Group</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="journey-date" className="text-[11px] font-semibold uppercase tracking-wider text-[#D8B982] block">
                  Tentative Travel Date
                </label>
                <input
                  id="journey-date"
                  type="date"
                  value={formData.travelDate}
                  onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                  className="w-full bg-[#080B0F] border border-[#C9A24A]/40 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#F5EDE0] focus:border-[#C9A24A] focus:outline-none min-h-[48px] touch-manipulation"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="journey-adults" className="text-[11px] font-semibold uppercase tracking-wider text-[#D8B982] block">
                  Adult Travellers
                </label>
                <select
                  id="journey-adults"
                  value={formData.adults}
                  onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                  className="w-full bg-[#080B0F] border border-[#C9A24A]/40 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#F5EDE0] focus:border-[#C9A24A] focus:outline-none min-h-[48px] touch-manipulation cursor-pointer"
                >
                  <option value="1 Adult">1 Adult (Solo)</option>
                  <option value="2 Adults">2 Adults (Couple / Friends)</option>
                  <option value="3-4 Adults">3-4 Adults (Family)</option>
                  <option value="5-8 Adults">5-8 Adults (Group)</option>
                  <option value="9+ Adults">9+ Adults (Large Family / Group)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="journey-seniors" className="text-[11px] font-semibold uppercase tracking-wider text-[#D8B982] block">
                  Senior Citizens Travelling?
                </label>
                <select
                  id="journey-seniors"
                  value={formData.seniorsTravelling}
                  onChange={(e) => setFormData({ ...formData, seniorsTravelling: e.target.value })}
                  className="w-full bg-[#080B0F] border border-[#C9A24A]/40 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#F5EDE0] focus:border-[#C9A24A] focus:outline-none min-h-[48px] touch-manipulation cursor-pointer"
                >
                  <option value="No">No senior citizens</option>
                  <option value="Yes (Special Senior Care Required)">Yes (Need senior-friendly pacing &amp; assistance)</option>
                </select>
              </div>
            </div>
          </div>

          {/* STEP 3: Journey Preferences */}
          <div className="space-y-4 pb-6 border-b border-[#C9A24A]/20">
            <div className="flex items-center gap-2 text-xs font-bold text-[#C9A24A] uppercase tracking-widest">
              <span className="w-6 h-6 rounded-full bg-[#C9A24A] text-[#080B0F] flex items-center justify-center font-extrabold text-[11px]">3</span>
              <span>Travel Style &amp; Stay Preferences</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="journey-style" className="text-[11px] font-semibold uppercase tracking-wider text-[#D8B982] block">
                  Experience Style
                </label>
                <select
                  id="journey-style"
                  value={formData.journeyType}
                  onChange={(e) => setFormData({ ...formData, journeyType: e.target.value })}
                  className="w-full bg-[#080B0F] border border-[#C9A24A]/40 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#F5EDE0] focus:border-[#C9A24A] focus:outline-none min-h-[48px] touch-manipulation cursor-pointer"
                >
                  <option value="Heritage & Desert Luxury">Heritage &amp; Desert Luxury</option>
                  <option value="Sacred Pilgrimage & Temple Darshans">Sacred Pilgrimage &amp; Temple Darshans</option>
                  <option value="Desert Camping & Cultural Glamping">Desert Camping &amp; Cultural Glamping</option>
                  <option value="Tailor-Made Royal Vacation">Tailor-Made Royal Vacation</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="journey-stay" className="text-[11px] font-semibold uppercase tracking-wider text-[#D8B982] block">
                  Accommodation Style
                </label>
                <select
                  id="journey-stay"
                  value={formData.stayPreference}
                  onChange={(e) => setFormData({ ...formData, stayPreference: e.target.value })}
                  className="w-full bg-[#080B0F] border border-[#C9A24A]/40 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#F5EDE0] focus:border-[#C9A24A] focus:outline-none min-h-[48px] touch-manipulation cursor-pointer"
                >
                  <option value="Heritage Boutique Haveli / Luxury Tent">Heritage Boutique Haveli / Luxury Tent</option>
                  <option value="Premium 4-Star / 5-Star Hotel">Premium 4-Star / 5-Star Hotel</option>
                  <option value="Peaceful Pilgrim Guest Stay">Peaceful Pilgrim Guest Stay</option>
                </select>
              </div>
            </div>
          </div>

          {/* STEP 4: Guest Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#C9A24A] uppercase tracking-widest">
              <span className="w-6 h-6 rounded-full bg-[#C9A24A] text-[#080B0F] flex items-center justify-center font-extrabold text-[11px]">4</span>
              <span>Your Contact Details</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="journey-name" className="text-[11px] font-semibold uppercase tracking-wider text-[#D8B982] block">
                  Full Name <span className="text-[#C9A24A]">*</span>
                </label>
                <input
                  id="journey-name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#080B0F] border border-[#C9A24A]/40 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#F5EDE0] focus:border-[#C9A24A] focus:outline-none min-h-[48px] touch-manipulation"
                  aria-describedby={errorMessage ? 'journey-form-error' : undefined}
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="journey-phone" className="text-[11px] font-semibold uppercase tracking-wider text-[#D8B982] block">
                  WhatsApp Mobile Number <span className="text-[#C9A24A]">*</span>
                </label>
                <input
                  id="journey-phone"
                  type="tel"
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#080B0F] border border-[#C9A24A]/40 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-[#F5EDE0] focus:border-[#C9A24A] focus:outline-none min-h-[48px] touch-manipulation"
                  aria-describedby={errorMessage ? 'journey-form-error' : undefined}
                  required
                />
              </div>

              <div className="sm:col-span-2 space-y-1.5">
                <label htmlFor="journey-notes" className="text-[11px] font-semibold uppercase tracking-wider text-[#D8B982] block">
                  Special Requests / Dietary / Timing Notes (Optional)
                </label>
                <textarea
                  id="journey-notes"
                  rows={3}
                  placeholder="Any specific temples, dietary preferences, or timing requirements..."
                  value={formData.specialNotes}
                  onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                  className="w-full bg-[#080B0F] border border-[#C9A24A]/40 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#F5EDE0] focus:border-[#C9A24A] focus:outline-none touch-manipulation"
                />
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-4 text-center space-y-3">
            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:brightness-110 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-2xl active:scale-95 flex items-center justify-center gap-2.5 mx-auto min-h-[50px] touch-manipulation cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white stroke-none" />
              <span>SEND ENQUIRY ON WHATSAPP</span>
              <Send className="w-4 h-4 ml-0.5" />
            </button>

            <span className="text-[10px] text-[#F5EDE0]/60 block max-w-md mx-auto leading-relaxed">
              *Opens WhatsApp with your pre-filled inquiry details. Your information is used solely to coordinate your travel request.
            </span>
          </div>

        </motion.form>

        {/* 03. Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-center">
          <div className="p-6 rounded-2xl bg-[#0D1117]/80 border border-[#C9A24A]/20 space-y-2">
            <ShieldCheck className="w-6 h-6 text-[#C9A24A] mx-auto" />
            <h4 className="font-serif text-sm font-bold text-[#F5EDE0]">Direct Human Coordination</h4>
            <p className="text-xs text-[#F5EDE0]/70 font-light">Direct communication with your designated travel coordinator on WhatsApp.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#0D1117]/80 border border-[#C9A24A]/20 space-y-2">
            <Clock className="w-6 h-6 text-[#C9A24A] mx-auto" />
            <h4 className="font-serif text-sm font-bold text-[#F5EDE0]">Prompt Response</h4>
            <p className="text-xs text-[#F5EDE0]/70 font-light">Customized quote and day-by-day itinerary shared promptly upon request.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#0D1117]/80 border border-[#C9A24A]/20 space-y-2">
            <Sparkles className="w-6 h-6 text-[#C9A24A] mx-auto" />
            <h4 className="font-serif text-sm font-bold text-[#F5EDE0]">Tailored For Families</h4>
            <p className="text-xs text-[#F5EDE0]/70 font-light">Pacing, transport, and dining customized for children and elderly travelers.</p>
          </div>
        </div>

      </section>

    </div>
  );
};
