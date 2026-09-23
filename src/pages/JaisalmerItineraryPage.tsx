import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CalendarDays, CheckCircle2, ChevronDown, Compass, MessageCircle } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { JAISALMER_ITINERARY_FAQS } from '../data/seoContent';
import { getJourneyWhatsAppLink } from '../data/siteConfig';

const DAY_PLANS = [
  {
    days: '2 DAYS',
    title: 'The essential Golden City and desert rhythm',
    image: '/assets/optimized/jaisalmer-fort-1920.webp',
    alt: 'Jaisalmer Fort above the Golden City',
    points: ['Begin with Jaisalmer Fort, its lanes and the Jain temples at a comfortable walking pace.', 'Pair the old city with a haveli and Gadisar Lake, leaving room for hotel check-in and unhurried meals.', 'Use the second afternoon for a Sam sunset transfer or an overnight desert plan when arrival and departure timings allow.'],
  },
  {
    days: '3 DAYS',
    title: 'A balanced city, desert and heritage stay',
    image: '/images/jaisalmer/Jaisalmer Photos/desertsam1.JPG',
    alt: 'Golden desert dunes near Sam outside Jaisalmer',
    points: ['Give the fort, havelis and lake their own day rather than compressing the old city into a few hours.', 'Reserve a separate evening for the desert: a sunset outing or camp stay can be shaped around the experience you choose.', 'Keep the final day lighter with a heritage stop, a museum, or extra time in the city before departure.'],
  },
  {
    days: '4 DAYS',
    title: 'More space for the Thar and a regional excursion',
    image: '/images/jaisalmer/Jaisalmer Photos/bada bagh.jpeg',
    alt: 'Royal cenotaphs at Bada Bagh near Jaisalmer',
    points: ['Follow the three-day rhythm without rushing the fort, desert and city stays.', 'Use the extra day for a regional road outing such as Tanot Mata or Ramdevra after checking current route and visiting hours.', 'Leave transfer time flexible—desert distances, comfort needs and the season all affect the right daily pace.'],
  },
];

const RELATED = [
  ['Start with the Jaisalmer guide', 'Understand the destination, key experiences, season and wider planning context first.', '/jaisalmer'],
  ['Explore 18 landmarks', 'Choose fort, haveli, lake, temple and desert stops before fixing the daily route.', '/jaisalmer/explore'],
  ['Compare desert experiences', 'Decide whether a camel trail, jeep outing, sunset or camp stay fits your time.', '/safari'],
  ['Arrange local transport', 'Coordinate arrival pickup, sightseeing and desert transfers around the agreed itinerary.', '/jaisalmer-taxi'],
  ['Review Jaisalmer packages', 'Compare custom package options once you know your preferred duration and pace.', '/packages'],
] as const;

export const JaisalmerItineraryPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const whatsappUrl = getJourneyWhatsAppLink('Jaisalmer itinerary planning');

  return (
    <main className="min-h-screen bg-[#050709] text-[#F5EDE0] perf-defer-sections">
      <PageHero
        breadcrumb="Jaisalmer Itinerary"
        badgeText="PLAN WITH PURPOSE · 2, 3 OR 4 DAYS"
        hindiTagline="सुनहरी नगरी की यात्रा, अपनी सहज गति से।"
        englishTitle="JAISALMER ITINERARY: 2, 3 & 4 DAYS"
        description="Choose a comfortable Jaisalmer rhythm for fort walks, havelis, Gadisar Lake and the Thar Desert—then tailor the details around your arrival, interests and pace."
        backgroundImage="/assets/optimized/jaisalmer-fort-1920.webp"
        backgroundImageAlt="Jaisalmer Fort above the Golden City"
        bgPosition="center 45%"
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/plan-journey?destination=Jaisalmer" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#C9A24A] px-6 py-3.5 text-[10px] font-bold uppercase tracking-widest text-[#050709] transition hover:brightness-110">
            Shape my itinerary <ArrowUpRight className="h-4 w-4" />
          </Link>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#25D366]/60 bg-[#050709]/70 px-6 py-3.5 text-[10px] font-bold uppercase tracking-widest text-[#25D366] transition hover:bg-[#25D366] hover:text-white">
            <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
          </a>
        </div>
      </PageHero>

      <section className="border-b border-[#C9A24A]/15 bg-[#080B0F] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-4"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">START WITH THE RHYTHM</p><h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl">Plan the places around the time you actually have.</h2></div>
          <div className="space-y-5 text-sm font-light leading-7 text-[#F5EDE0]/75 lg:col-span-7 lg:col-start-6"><p>Jaisalmer is best planned as a sequence of distinct moments: the living fort, carved havelis, lakeside quiet and an evening in the Thar. This guide helps you decide how much to include before choosing a package, transport or desert stay.</p><p>It is a starting framework, not a fixed promise of availability. Arrival time, weather, walking comfort, local opening hours and your preferred desert experience should shape the final route.</p></div>
        </div>
      </section>

      <section className="py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-10 max-w-2xl"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">CHOOSE YOUR DURATION</p><h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Three ways to experience Jaisalmer.</h2></div><div className="grid gap-7 lg:grid-cols-3">{DAY_PLANS.map((plan) => <article key={plan.days} className="overflow-hidden rounded-3xl border border-[#C9A24A]/25 bg-[#0D1117]"><img src={plan.image} alt={plan.alt} className="h-56 w-full object-cover" loading="lazy" decoding="async" /><div className="space-y-5 p-6 sm:p-7"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">{plan.days}</p><h3 className="font-serif text-2xl font-bold">{plan.title}</h3><ul className="space-y-3">{plan.points.map((point) => <li key={point} className="flex gap-3 text-sm font-light leading-6 text-[#F5EDE0]/72"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#C9A24A]" aria-hidden="true" />{point}</li>)}</ul></div></article>)}</div></div></section>

      <section className="relative overflow-hidden border-y border-[#C9A24A]/20 py-20 sm:py-28"><img src="/images/jaisalmer/Jaisalmer Photos/gadisar.JPG" alt="Gadisar Lake in Jaisalmer" className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" /><div className="absolute inset-0 bg-gradient-to-r from-[#050709]/95 via-[#050709]/78 to-[#050709]/48" /><div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-2xl rounded-3xl border border-[#C9A24A]/30 bg-[#050709]/70 p-6 backdrop-blur-sm sm:p-9"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">MAKE THE PACE YOURS</p><h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">A thoughtful itinerary considers more than landmarks.</h2><div className="mt-6 grid gap-3 sm:grid-cols-2">{['Arrival and departure timing', 'Fort walking and rest breaks', 'Sunset outing or desert overnight', 'Children, senior travellers and accessibility', 'Hotel location and check-in', 'Station, airport and desert transfers'].map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#C9A24A]/20 bg-[#080B0F]/70 p-3 text-sm text-[#F5EDE0]/82"><Compass className="h-4 w-4 shrink-0 text-[#C9A24A]" aria-hidden="true" />{item}</div>)}</div></div></div></section>

      <section className="bg-[#080B0F] py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">NEXT, FOLLOW THE RIGHT PATH</p><h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Useful planning chapters.</h2></div><CalendarDays className="h-8 w-8 text-[#C9A24A]" aria-hidden="true" /></div><div className="grid gap-5 md:grid-cols-2">{RELATED.map(([title, body, path]) => <Link key={path} to={path} className="group rounded-3xl border border-[#C9A24A]/20 bg-[#050709] p-6 transition hover:border-[#C9A24A]/60"><h3 className="font-serif text-xl font-bold group-hover:text-[#C9A24A]">{title}</h3><p className="mt-3 text-sm font-light leading-6 text-[#F5EDE0]/70">{body}</p><span className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#C9A24A]">Explore this chapter <ArrowUpRight className="h-4 w-4" /></span></Link>)}</div></div></section>

      <section id="faqs" className="py-16 sm:py-24"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><div className="text-center"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">PRACTICAL ANSWERS</p><h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Jaisalmer itinerary FAQs</h2></div><div className="mt-10 divide-y divide-[#C9A24A]/20 border-y border-[#C9A24A]/20">{JAISALMER_ITINERARY_FAQS.map((faq, index) => <div key={faq.question}><button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex min-h-14 w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold" aria-expanded={openFaq === index}><span>{faq.question}</span><ChevronDown className={`h-4 w-4 shrink-0 text-[#C9A24A] transition-transform ${openFaq === index ? 'rotate-180' : ''}`} aria-hidden="true" /></button><AnimatePresence initial={false}>{openFaq === index && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pb-5 text-sm font-light leading-7 text-[#F5EDE0]/68">{faq.answer}</motion.p>}</AnimatePresence></div>)}</div></div></section>

      <section className="border-t border-[#C9A24A]/15 bg-[#080B0F] py-16 text-center sm:py-24"><div className="mx-auto max-w-3xl space-y-5 px-4 sm:px-6"><h2 className="font-serif text-3xl font-bold sm:text-5xl">Turn your preferred pace into a Jaisalmer journey.</h2><p className="text-sm font-light leading-7 text-[#F5EDE0]/72">Share your dates, arrival point, group and interests. The team can help shape a route and confirm the current arrangements that fit it.</p><div className="flex flex-wrap justify-center gap-3"><Link to="/packages" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#C9A24A] px-6 py-3.5 text-[10px] font-bold uppercase tracking-widest text-[#050709]">Choose your package tier <ArrowUpRight className="h-4 w-4" /></Link><Link to="/plan-journey?destination=Jaisalmer" className="inline-flex min-h-12 items-center rounded-full border border-[#C9A24A]/50 px-6 py-3.5 text-[10px] font-bold uppercase tracking-widest text-[#D8B982]">Plan my journey</Link><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#25D366]/60 px-6 py-3.5 text-[10px] font-bold uppercase tracking-widest text-[#25D366]"><MessageCircle className="h-4 w-4" /> WhatsApp us</a></div></div></section>
    </main>
  );
};
