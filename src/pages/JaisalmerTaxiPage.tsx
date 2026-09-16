import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Car, CheckCircle2, ChevronDown, MapPin, MessageCircle, Plane, Train } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { JAISALMER_TAXI_FAQS } from '../data/seoContent';
import { getJourneyWhatsAppLink } from '../data/siteConfig';

const TRANSPORT_OPTIONS = [
  {
    title: 'Airport & Railway Pickup',
    description: 'Pre-arranged pickup from Jaisalmer Airport or railway station to your hotel, fort-area meeting point or confirmed onward destination.',
    icon: Plane,
  },
  {
    title: 'Local Sightseeing Vehicle',
    description: 'A vehicle plan shaped around Jaisalmer Fort, Gadisar Lake, the havelis and other selected city sights, with route and waiting time agreed in advance.',
    icon: Car,
  },
  {
    title: 'Sam & Khuri Transfers',
    description: 'Hotel-to-desert transport for sunset, safari or camp arrangements at Sam or Khuri, coordinated around the confirmed experience timing.',
    icon: MapPin,
  },
  {
    title: 'Regional Road Journeys',
    description: 'Point-to-point travel and day-trip planning for routes such as Tanot, Longewala, Ramdevra or onward Rajasthan destinations, subject to availability.',
    icon: Train,
  },
];

const QUOTE_DETAILS = [
  'Travel date and preferred pickup time',
  'Exact pickup and drop-off points',
  'Number of travellers and luggage',
  'Sightseeing stops or desert plan',
  'One-way, return or multi-day requirement',
];

export const JaisalmerTaxiPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const whatsappUrl = getJourneyWhatsAppLink('Jaisalmer Taxi & Transportation');

  return (
    <main className="min-h-screen bg-[#050709] text-[#F5EDE0] perf-defer-sections">
      <PageHero
        breadcrumb="Taxi & Transfers"
        badgeText="LOCAL TRANSPORT · JAISALMER"
        hindiTagline="आगमन से मरुस्थल तक, सुविचारित यात्रा।"
        englishTitle="JAISALMER TAXI & TRANSPORTATION"
        description="Arrange airport or railway pickup, local sightseeing transport, desert transfers and customized road journeys with one Jaisalmer travel plan."
        backgroundImage="/assets/optimized/jaisalmer-taxi-hero-1280.webp"
        backgroundImageAlt="Aerial view of Jaisalmer Fort and the Golden City"
        bgPosition="center 48%"
      >
        <div className="flex flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-[10px] font-bold uppercase tracking-widest text-white transition hover:brightness-110">
            <MessageCircle className="h-4 w-4" /> Request a transport quote
          </a>
          <Link to="/plan-journey?destination=Jaisalmer" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#C9A24A]/60 bg-[#050709]/70 px-6 py-3.5 text-[10px] font-bold uppercase tracking-widest text-[#E0BC67] transition hover:bg-[#C9A24A] hover:text-[#050709]">
            Plan the full trip <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      <section className="border-b border-[#C9A24A]/15 bg-[#080B0F] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">ONE COORDINATED ROUTE</p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl">Transport that fits the itinerary.</h2>
          </div>
          <div className="space-y-5 text-sm font-light leading-7 text-[#F5EDE0]/75 lg:col-span-7 lg:col-start-6">
            <p>Jaisalmer journeys often combine narrow old-city streets, hotel check-ins, fort walks and an evening in the desert. The most useful transport plan is therefore built around the actual itinerary—not sold as an unclear one-size-fits-all ride.</p>
            <p>SRV Yaatra coordinates the pickup point, route, vehicle requirement and current quote after receiving your dates and group details. Vehicle ownership is not implied; the confirmed arrangement and applicable terms are shared before booking.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#050709] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">TRANSPORT OPTIONS</p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">From arrival to desert sunset.</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-[#C9A24A]/20 bg-[#C9A24A]/20 sm:grid-cols-2">
            {TRANSPORT_OPTIONS.map((option) => {
              const Icon = option.icon;
              return (
                <article key={option.title} className="bg-[#080B0F] p-6 sm:p-8">
                  <Icon className="h-6 w-6 text-[#C9A24A]" aria-hidden="true" />
                  <h3 className="mt-5 font-serif text-xl font-bold">{option.title}</h3>
                  <p className="mt-3 text-sm font-light leading-7 text-[#F5EDE0]/70">{option.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <img src="/images/jaisalmer/Jaisalmer Photos/desertsam1.JPG" alt="Golden sand dunes near Sam outside Jaisalmer" width={3008} height={2000} sizes="100vw" className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050709]/95 via-[#050709]/78 to-[#050709]/45" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl rounded-3xl border border-[#C9A24A]/30 bg-[#050709]/70 p-6 backdrop-blur-sm sm:p-9">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">FOR AN ACCURATE QUOTE</p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Share the route details first.</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {QUOTE_DETAILS.map((detail) => (
                <li key={detail} className="flex items-start gap-3 text-sm text-[#F5EDE0]/78">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A24A]" aria-hidden="true" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-[#C9A24A]/20 pt-5 text-xs leading-6 text-[#F5EDE0]/62">Ask whether parking, tolls, waiting time, driver allowance or route changes apply to your booking. The final inclusions should be read from the current written quote rather than assumed from a general page.</p>
          </div>
        </div>
      </section>

      <section id="faqs" className="bg-[#080B0F] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">PRACTICAL ANSWERS</p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Jaisalmer transport FAQs</h2>
          </div>
          <div className="mt-10 divide-y divide-[#C9A24A]/20 border-y border-[#C9A24A]/20">
            {JAISALMER_TAXI_FAQS.map((faq, index) => (
              <div key={faq.question}>
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex min-h-14 w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold" aria-expanded={openFaq === index}>
                  <span>{faq.question}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 text-[#C9A24A] transition-transform ${openFaq === index ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pb-5 text-sm font-light leading-7 text-[#F5EDE0]/68">
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050709] py-16 text-center sm:py-24">
        <div className="mx-auto max-w-3xl space-y-5 px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold sm:text-5xl">Plan transport with the whole Jaisalmer journey.</h2>
          <p className="text-sm font-light leading-7 text-[#F5EDE0]/72">Combine arrival pickup, sightseeing, desert transfers and accommodation preferences in one enquiry.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/jaisalmer/itinerary" className="inline-flex min-h-12 items-center rounded-full border border-[#C9A24A]/50 px-6 py-3.5 text-[10px] font-bold uppercase tracking-widest text-[#C9A24A]">Read the 2–4 day itinerary</Link>
            <Link to="/jaisalmer/explore" className="inline-flex min-h-12 items-center rounded-full border border-[#C9A24A]/50 px-6 py-3.5 text-[10px] font-bold uppercase tracking-widest text-[#C9A24A]">Explore Jaisalmer sightseeing</Link>
            <Link to="/plan-journey?destination=Jaisalmer" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#C9A24A] px-6 py-3.5 text-[10px] font-bold uppercase tracking-widest text-[#050709]">Request a custom plan <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
};
