import React, { type PropsWithChildren } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight, BedDouble, Car, Compass, HeartHandshake, Landmark, MapPin,
  MessageCircle, Route, ShieldCheck, Smartphone, Sparkles, Utensils,
} from 'lucide-react';
import { JaisalmerLocation } from '../components/JaisalmerLocation';
import { MAPS_CONFIG, getWhatsAppLink } from '../data/siteConfig';

const metrics = [
  { value: '2007', label: 'Established' },
  { value: '20+ Years', label: 'Pilgrimage & Travel Experience' },
  { value: '50+', label: 'Char Dham Yatras Conducted' },
  { value: '7+ Generations', label: 'Rooted in Jaisalmer' },
] as const;

const journeyTimeline = [
  { year: 'Roots', title: 'A Jaisalmer family tradition', description: 'Pilgrimage, local relationships and service were part of family life long before the company began.' },
  { year: 'Early Yatras', title: 'Journeys for local families', description: 'Ashish and his family helped organize yatras for people from Jaisalmer and families connected to the city.' },
  { year: '2007', title: 'Shriradha Vallabh Tours established', description: 'A family-led pilgrimage practice became a dedicated travel business grounded in personal responsibility.' },
  { year: 'Today', title: 'Heritage, pilgrimage and custom travel', description: 'The same human approach now supports Jaisalmer journeys, Char Dham yatras and tailored travel across India.' },
] as const;

const carePrinciples = [
  { icon: Sparkles, title: 'Meaning Beyond Sightseeing', description: 'Helping yatris understand the cultural and spiritual importance of the places they visit.' },
  { icon: Route, title: 'Peaceful, Thoughtful Pacing', description: 'Itineraries shaped around the traveller, not around rushing from one booking to the next.' },
  { icon: ShieldCheck, title: 'Prepared Human Coordination', description: 'Reliable arrangements, health awareness and direct assistance before and during the journey.' },
  { icon: HeartHandshake, title: 'Care for Every Family', description: 'Senior-citizen needs, food preferences and family-specific requirements considered personally.' },
] as const;

const serviceGroups = [
  { icon: Route, title: 'Journey Planning', items: ['Customized itineraries', 'Family & group tours', 'Pilgrimage journeys', 'Couple & bachelor journeys'] },
  { icon: BedDouble, title: 'Stays & Transport', items: ['Hotels, havelis & heritage stays', 'Cabs and driver coordination', 'Airport pickup', 'Railway pickup'] },
  { icon: Landmark, title: 'Pilgrimage & Experiences', items: ['Temple & darshan planning', 'Local guides', 'Desert safari', 'Cultural experiences'] },
  { icon: HeartHandshake, title: 'Traveller Care', items: ['Vegetarian & sattvik food', 'Senior-citizen requirements', '24×7 traveller assistance', 'Emergency support'] },
] as const;

const destinationGroups = [
  { title: 'Pilgrimage', places: ['Char Dham', 'Mathura & Vrindavan', 'Ayodhya', 'Kashi / Varanasi', 'Dwarka', 'Nepal routes'] },
  { title: 'Heritage & Leisure', places: ['Jaisalmer', 'Jaipur', 'Jodhpur', 'Udaipur', 'Rajasthan journeys'] },
  { title: 'Custom Journeys', places: ['Uttarakhand', 'Uttar Pradesh', 'Other India journeys on request'] },
] as const;

interface RevealProps extends PropsWithChildren { className?: string; delay?: number }

const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0 }) => {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >{children}</motion.div>
  );
};

const SectionLabel: React.FC<PropsWithChildren> = ({ children }) => (
  <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A] sm:text-[11px]">{children}</span>
);

export const AboutPage: React.FC = () => {
  const whatsappUrl = getWhatsAppLink('Namaste Shri Radha Vallabh 🙏\nI would like to plan a journey with Ashish Vyas and the Shri Radha Vallabh team.');

  return (
    <div className="min-h-screen bg-[#050709] text-[#F5EDE0]">
      {/* 01. Jaisalmer-led hero */}
      <section className="relative min-h-[620px] overflow-hidden border-b border-[#C9A24A]/25 sm:min-h-[680px] lg:min-h-[760px]" aria-labelledby="about-page-title">
        <img src="/assets/optimized/jaisalmer-fort-palace-1920.webp" alt="Golden sandstone heritage architecture in Jaisalmer" loading="eager" fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,9,0.96)_0%,rgba(5,7,9,0.76)_42%,rgba(5,7,9,0.22)_78%,rgba(5,7,9,0.08)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050709] via-transparent to-[#050709]/55" />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-4 pb-16 pt-32 sm:min-h-[680px] sm:px-6 sm:pb-20 lg:min-h-[760px] lg:px-8 lg:pb-24">
          <Reveal className="max-w-3xl space-y-6">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5EDE0]/60">
              <Link to="/" className="transition-colors hover:text-[#C9A24A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A24A]">Home</Link>
              <span aria-hidden="true">/</span><span className="text-[#D8B982]">About</span>
            </nav>
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#D8B982]">Established 2007 · Jaisalmer</p>
              <h1 id="about-page-title" className="font-serif text-4xl font-bold leading-[1.03] text-[#F8F0E4] sm:text-6xl lg:text-7xl">About Shri Radha Vallabh</h1>
              <p className="max-w-2xl text-base font-light leading-relaxed text-[#F5EDE0]/82 sm:text-xl">Heritage, pilgrimage and personally curated journeys rooted in Jaisalmer—guided by experience, responsibility and care for every yatri.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02. Trust metrics */}
      <section aria-label="Shri Radha Vallabh experience" className="border-b border-[#C9A24A]/20 bg-[#090C10]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {metrics.map((metric, index) => (
            <div key={metric.label} className={`flex min-h-32 flex-col justify-center border-[#C9A24A]/18 px-4 py-7 sm:min-h-36 sm:px-6 ${index % 2 === 0 ? 'border-r' : ''} ${index < 2 ? 'border-b lg:border-b-0' : ''} ${index > 0 ? 'lg:border-l' : ''} ${index === 0 ? 'lg:border-l-0' : ''}`}>
              <strong className="font-serif text-2xl text-[#E4BF69] sm:text-3xl">{metric.value}</strong>
              <span className="mt-1 max-w-[13rem] text-[10px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-[#F5EDE0]/62 sm:text-xs">{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <main>
        {/* 03. First personal photograph — Ashish Vyas */}
        <section id="founder" className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-20 lg:px-8 lg:py-32">
          <Reveal className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-3 rounded-[2rem] border border-[#C9A24A]/18 sm:-inset-5" aria-hidden="true" />
            <div className="relative aspect-[1097/1434] overflow-hidden rounded-[1.6rem] border border-[#C9A24A]/42 bg-[#0D1117] shadow-2xl">
              <img src="/images/about/ashish-vyas-640.webp" srcSet="/images/about/ashish-vyas-640.webp 640w, /images/about/ashish-vyas-1024.webp 1024w" sizes="(max-width: 1023px) 92vw, 42vw" alt="Ashish Vyas, founder and owner of Shri Radha Vallabh Tours" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-[#050709]/86 px-5 py-4 backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:min-w-72">
              <strong className="block font-serif text-xl text-[#F5EDE0]">Ashish Vyas</strong>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-[#D8B982]">Founder &amp; Owner · Jaisalmer</span>
            </div>
          </Reveal>
          <Reveal className="space-y-7" delay={0.08}>
            <div className="space-y-3"><SectionLabel>Meet the Founder</SectionLabel><h2 className="font-serif text-3xl font-bold leading-tight text-[#F5EDE0] sm:text-5xl">A journey shaped by faith, place and responsibility.</h2></div>
            <div className="space-y-5 text-sm font-light leading-7 text-[#F5EDE0]/76 sm:text-base sm:leading-8">
              <p><strong className="font-semibold text-[#E4BF69]">Ashish Vyas founded Shriradha Vallabh Tours in Jaisalmer in 2007.</strong> A native of the Golden City, he belongs to a family rooted here for more than seven generations.</p>
              <p>His 20+ years of pilgrimage and travel experience grew from family-led yatras, personal religious interest and a belief that travellers deserve more than transport and hotel bookings.</p>
              <p>Ashish personally coordinates itineraries, stays, cabs, drivers, temple and darshan planning, local guides, pickups, desert experiences and traveller support—arranged according to each family’s requirements.</p>
            </div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[#C9A24A]/22 pt-6">
              <div><dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A24A]">Native City</dt><dd className="mt-1 font-serif text-lg">Jaisalmer</dd></div>
              <div><dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A24A]">Business</dt><dd className="mt-1 font-serif text-lg">Established 2007</dd></div>
              <div><dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A24A]">Experience</dt><dd className="mt-1 font-serif text-lg">20+ Years</dd></div>
              <div><dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A24A]">Char Dham</dt><dd className="mt-1 font-serif text-lg">50+ Yatras</dd></div>
            </dl>
          </Reveal>
        </section>

        {/* 04. Jaisalmer roots */}
        <section className="relative min-h-[620px] overflow-hidden border-y border-[#C9A24A]/20">
          <img src="/assets/optimized/jaisalmer-fort-1920.webp" alt="Jaisalmer sandstone heritage and family roots" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,9,0.96)_0%,rgba(5,7,9,0.83)_45%,rgba(5,7,9,0.18)_100%)]" />
          <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
            <Reveal className="max-w-2xl rounded-3xl border border-[#C9A24A]/28 bg-[#070A0E]/82 p-7 backdrop-blur-sm sm:p-10 lg:p-12">
              <SectionLabel>Rooted in Jaisalmer</SectionLabel>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-5xl">Seven generations in the Golden City.</h2>
              <div className="mt-6 space-y-4 text-sm font-light leading-7 text-[#F5EDE0]/78 sm:text-base sm:leading-8">
                <p>Jaisalmer is not simply a destination in the company’s portfolio. It is Ashish Vyas’s home, his family’s history and the foundation of the relationships behind every local journey.</p>
                <p>Generational roots bring practical knowledge of the fort, temples, havelis, desert landscapes and lesser-known places—along with longstanding connections to hotels, camps, drivers, guides and local businesses.</p>
              </div>
              <div className="mt-7 flex items-center gap-3 border-t border-[#C9A24A]/25 pt-6 text-sm text-[#D8B982]"><MapPin className="h-5 w-5 shrink-0" aria-hidden="true" /><span>Local knowledge shaped through life in Jaisalmer.</span></div>
            </Reveal>
          </div>
        </section>

        {/* 05. Family business background */}
        <section className="border-b border-[#C9A24A]/18 bg-[#0B0E13]">
          <Reveal className="mx-auto grid max-w-7xl gap-7 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.55fr_1.45fr] lg:items-center lg:px-8">
            <div className="flex items-center gap-4"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C9A24A]/38 text-[#C9A24A]"><Landmark className="h-5 w-5" aria-hidden="true" /></span><h2 className="font-serif text-2xl font-bold sm:text-3xl">A family rooted in service &amp; business</h2></div>
            <p className="text-sm font-light leading-7 text-[#F5EDE0]/72 sm:text-base sm:leading-8">The Vyas family’s local business background also includes <strong className="font-semibold text-[#D8B982]">Shingar Collection</strong>, a family clothing business in Jaisalmer. It is one part of a longer story of continuity, local trust and service across generations.</p>
          </Reveal>
        </section>

        {/* 06. Origin timeline */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal className="max-w-3xl"><SectionLabel>How the Journey Began</SectionLabel><h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-5xl">From family yatras to Shri Radha Vallabh.</h2><p className="mt-5 text-sm font-light leading-7 text-[#F5EDE0]/70 sm:text-base">The business did not begin as conventional package tourism. It grew from pilgrimage, family participation and direct responsibility for fellow travellers.</p></Reveal>
          <div className="relative mt-12 grid gap-8 lg:grid-cols-4 lg:gap-6">
            <div className="absolute left-0 right-0 top-5 hidden h-px bg-[#C9A24A]/28 lg:block" aria-hidden="true" />
            {journeyTimeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.07} className="relative border-l border-[#C9A24A]/32 pl-6 lg:border-l-0 lg:pl-0 lg:pt-12">
                <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-[#C9A24A] shadow-[0_0_0_6px_rgba(201,162,74,0.12)] lg:left-0 lg:top-4" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#C9A24A]">{item.year}</span>
                <h3 className="mt-3 font-serif text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm font-light leading-7 text-[#F5EDE0]/67">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 07. Why the company exists */}
        <section className="border-y border-[#C9A24A]/18 bg-[#090C10]">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-8">
            <Reveal className="space-y-5 lg:sticky lg:top-32 lg:self-start"><SectionLabel>Why Shri Radha Vallabh Exists</SectionLabel><h2 className="font-serif text-3xl font-bold leading-tight sm:text-5xl">A yatra should be more than a package.</h2><p className="text-sm font-light leading-7 text-[#F5EDE0]/70 sm:text-base">Ashish observed that bookings alone often overlooked peaceful pacing, health considerations and genuine on-journey support. Shri Radha Vallabh was built around a more personal approach.</p></Reveal>
            <div className="divide-y divide-[#C9A24A]/18 border-y border-[#C9A24A]/18">
              {carePrinciples.map((principle, index) => (
                <Reveal key={principle.title} delay={index * 0.05} className="grid gap-4 py-6 sm:grid-cols-[3.5rem_1fr] sm:py-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A24A]/35 text-[#C9A24A]"><principle.icon className="h-5 w-5" aria-hidden="true" /></span>
                  <div><h3 className="font-serif text-xl font-bold">{principle.title}</h3><p className="mt-2 text-sm font-light leading-7 text-[#F5EDE0]/66">{principle.description}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 08. 2013 Kedarnath turning point */}
        <section className="relative min-h-[680px] overflow-hidden border-b border-[#C9A24A]/20" aria-labelledby="kedarnath-heading">
          <img src="/assets/card-chardham.jpg" alt="Kedarnath Temple in the Himalayan landscape" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,9,0.97)_0%,rgba(5,7,9,0.86)_48%,rgba(5,7,9,0.2)_100%)]" /><div className="absolute inset-0 bg-gradient-to-t from-[#050709] via-transparent to-[#050709]/40" />
          <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
            <Reveal className="max-w-2xl"><span className="font-serif text-7xl font-bold leading-none text-[#D6AA4C] sm:text-9xl">2013</span><h2 id="kedarnath-heading" className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-5xl">A journey that changed everything.</h2>
              <div className="mt-6 space-y-4 text-sm font-light leading-7 text-[#F5EDE0]/82 sm:text-base sm:leading-8"><p>During a Char Dham Yatra in 2013, Ashish Vyas was in Kedarnath with his group when disaster struck the region.</p><p>The experience reinforced a lesson that continues to shape Shri Radha Vallabh today: pilgrimage travel demands more than bookings. It requires responsibility, preparation, health awareness, calm coordination and genuine care for every yatri.</p></div>
              <ul className="mt-8 grid grid-cols-2 gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#E4BF69] sm:grid-cols-4 sm:text-xs">{['Preparation', 'Responsibility', 'Care', 'Calm Coordination'].map((item) => <li key={item} className="border-t border-[#C9A24A]/45 pt-3">{item}</li>)}</ul>
            </Reveal>
          </div>
        </section>

        {/* 09. Char Dham experience */}
        <section className="bg-[#0B0E13]"><div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.6fr_1.4fr] lg:items-center lg:px-8">
          <Reveal className="border-b border-[#C9A24A]/30 pb-7 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-12"><strong className="font-serif text-7xl text-[#E4BF69] sm:text-8xl">50+</strong><span className="mt-2 block max-w-xs text-xs font-bold uppercase leading-relaxed tracking-[0.2em] text-[#F5EDE0]/70">Char Dham Yatras Conducted</span></Reveal>
          <Reveal className="space-y-5" delay={0.08}><SectionLabel>Experience Built on the Route</SectionLabel><h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">More than fifty journeys of practical learning.</h2><p className="text-sm font-light leading-7 text-[#F5EDE0]/72 sm:text-base sm:leading-8">Repeated Char Dham experience brings real-world familiarity with routes, weather changes, pilgrim pacing, health considerations, accommodation, transport, darshan planning and on-ground coordination.</p></Reveal>
        </div></section>

        {/* 10. Second personal photograph — Yuvraj “Jeet” Vyas */}
        <section id="next-generation" className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:px-8 lg:py-32">
          <Reveal className="space-y-7 lg:order-1">
            <div className="space-y-3"><SectionLabel>Carrying the Legacy Forward</SectionLabel><h2 className="font-serif text-3xl font-bold leading-tight sm:text-5xl">Yuvraj “Jeet” Vyas</h2><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D8B982]">Next-generation digital operations</p></div>
            <div className="space-y-5 text-sm font-light leading-7 text-[#F5EDE0]/76 sm:text-base sm:leading-8">
              <p><strong className="font-semibold text-[#E4BF69]">Yuvraj Ashish Vyas, also known as Jeet Vyas, is the next generation of the family</strong> and supports the company’s digital presence and online communication.</p>
              <p>For approximately five to six years, he has helped with Instagram, Facebook, WhatsApp, website management, social media content, email and online enquiries.</p>
              <p>His role is not limited to the internet. Yuvraj also assists his father during Char Dham journeys, gaining first-hand exposure to yatris, routes and the responsibility behind pilgrimage travel.</p>
            </div>
            <div className="flex flex-wrap gap-2.5">{['Website', 'WhatsApp enquiries', 'Social media', 'Email communication', 'Char Dham support'].map((item) => <span key={item} className="rounded-full border border-[#C9A24A]/28 bg-[#0D1117] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#D8B982]">{item}</span>)}</div>
          </Reveal>
          <Reveal className="relative mx-auto w-full max-w-lg lg:order-2" delay={0.08}>
            <div className="absolute -inset-3 rounded-[2rem] border border-[#C9A24A]/18 sm:-inset-5" aria-hidden="true" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.6rem] border border-[#C9A24A]/42 bg-[#0D1117] shadow-2xl">
              <img src="/images/about/yuvraj-jeet-vyas-640.webp" srcSet="/images/about/yuvraj-jeet-vyas-640.webp 640w, /images/about/yuvraj-jeet-vyas-960.webp 960w" sizes="(max-width: 1023px) 92vw, 39vw" alt="Yuvraj Jeet Vyas, next generation of Shri Radha Vallabh" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </section>

        {/* 11. Father and son structure */}
        <section className="border-y border-[#C9A24A]/18 bg-[#090C10]"><div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <Reveal className="text-center"><SectionLabel>Tradition × Technology</SectionLabel><h2 className="mx-auto mt-3 max-w-3xl font-serif text-3xl font-bold leading-tight sm:text-5xl">One family story, carried forward in two ways.</h2></Reveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
            <Reveal className="border-t border-[#C9A24A]/35 pt-7"><span className="text-xs font-bold uppercase tracking-[0.24em] text-[#C9A24A]">Ashish Vyas</span><h3 className="mt-3 font-serif text-2xl font-bold">Experience on the ground</h3><p className="mt-4 text-sm font-light leading-7 text-[#F5EDE0]/68">Pilgrimage experience · Jaisalmer knowledge · Local relationships · Char Dham coordination · Traveller care</p></Reveal>
            <div className="hidden items-center px-5 text-3xl text-[#C9A24A] lg:flex" aria-hidden="true">×</div>
            <Reveal className="border-t border-[#C9A24A]/35 pt-7" delay={0.08}><span className="text-xs font-bold uppercase tracking-[0.24em] text-[#C9A24A]">Yuvraj “Jeet” Vyas</span><h3 className="mt-3 font-serif text-2xl font-bold">Modern accessibility</h3><p className="mt-4 text-sm font-light leading-7 text-[#F5EDE0]/68">Digital presence · Website · Social media · Online enquiries · Customer communication</p></Reveal>
          </div>
          <Reveal className="mt-12 flex flex-col items-center justify-center gap-3 border-t border-[#C9A24A]/18 pt-8 text-center sm:flex-row sm:gap-5"><Smartphone className="h-6 w-6 text-[#C9A24A]" aria-hidden="true" /><p className="font-serif text-xl sm:text-2xl">Traditional pilgrimage experience. Modern digital accessibility.</p></Reveal>
        </div></section>

        {/* 12. Third personal photograph — Premanand Ji Maharaj */}
        <section id="spiritual-inspiration" className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-20 lg:px-8 lg:py-32">
          <Reveal className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-3 rounded-[2rem] bg-[#C9A24A]/8 blur-xl sm:-inset-6" aria-hidden="true" />
            <div className="relative aspect-square overflow-hidden rounded-[1.6rem] border border-[#D6AA4C]/55 bg-[#151108] p-2 shadow-2xl">
              <img src="/images/about/premanand-ji-maharaj-640.webp" srcSet="/images/about/premanand-ji-maharaj-640.webp 640w, /images/about/premanand-ji-maharaj-950.webp 950w" sizes="(max-width: 1023px) 92vw, 40vw" alt="Premanand Ji Maharaj" loading="lazy" decoding="async" className="h-full w-full rounded-[1.2rem] object-cover" />
            </div>
          </Reveal>
          <Reveal className="space-y-6" delay={0.08}><SectionLabel>A Spiritual Inspiration</SectionLabel><h2 className="font-serif text-3xl font-bold leading-tight sm:text-5xl">Inspired by Premanand Ji Maharaj</h2>
            <div className="space-y-5 text-sm font-light leading-7 text-[#F5EDE0]/76 sm:text-base sm:leading-8"><p><strong className="font-semibold text-[#E4BF69]">Ashish Vyas is personally inspired by the teachings of Premanand Ji Maharaj.</strong></p><p>The values of bhakti, seva, sincerity and devotion reinforce his belief that a yatra should be approached with respect, personal responsibility and care for others—not treated as sightseeing alone.</p><p>This is a personal spiritual inspiration. No endorsement, affiliation or business association is implied.</p></div>
          </Reveal>
        </section>

        {/* 13. Personal arrangements */}
        <section className="border-y border-[#C9A24A]/18 bg-[#0B0E13]"><div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <Reveal className="max-w-3xl"><SectionLabel>What We Personally Arrange</SectionLabel><h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-5xl">One coordinator across the journey.</h2><p className="mt-5 text-sm font-light leading-7 text-[#F5EDE0]/70 sm:text-base">Arrangements are shaped according to traveller and yatri requirements, with direct human coordination throughout.</p></Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.05} className="rounded-3xl border border-[#C9A24A]/22 bg-[#070A0E] p-6 sm:p-7">
                <group.icon className="h-6 w-6 text-[#C9A24A]" aria-hidden="true" /><h3 className="mt-5 font-serif text-xl font-bold">{group.title}</h3>
                <ul className="mt-5 space-y-3 text-sm font-light text-[#F5EDE0]/68">{group.items.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#C9A24A]" aria-hidden="true" /><span>{item}</span></li>)}</ul>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 grid gap-4 rounded-2xl border border-[#C9A24A]/20 bg-[#090C10] p-5 text-sm text-[#F5EDE0]/70 sm:grid-cols-3 sm:p-6">
            <span className="flex items-center gap-3"><Car className="h-5 w-5 text-[#C9A24A]" aria-hidden="true" />Chauffeur-driven vehicles</span><span className="flex items-center gap-3"><Utensils className="h-5 w-5 text-[#C9A24A]" aria-hidden="true" />Vegetarian &amp; sattvik options</span><span className="flex items-center gap-3"><Compass className="h-5 w-5 text-[#C9A24A]" aria-hidden="true" />Heritage &amp; local experiences</span>
          </div>
        </div></section>

        {/* 14. Destinations */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"><div><SectionLabel>Journeys We Coordinate</SectionLabel><h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-5xl">Pilgrimage, heritage and journeys made personal.</h2></div><p className="max-w-2xl text-sm font-light leading-7 text-[#F5EDE0]/68 sm:text-base">Current operational experience spans Jaisalmer, Rajasthan and significant pilgrimage routes. Other India journeys can be arranged according to traveller requirements.</p></Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">{destinationGroups.map((group, index) => <Reveal key={group.title} delay={index * 0.06} className="border-t border-[#C9A24A]/40 pt-6"><h3 className="font-serif text-xl font-bold text-[#E4BF69]">{group.title}</h3><p className="mt-4 text-sm font-light leading-7 text-[#F5EDE0]/70">{group.places.join(' · ')}</p></Reveal>)}</div>
        </section>

        {/* 15. Existing Maps location */}
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8"><JaisalmerLocation compact /></section>

        {/* 16. Final CTA */}
        <section className="border-t border-[#C9A24A]/20 bg-[#0B0E13]"><div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <Reveal className="mx-auto max-w-3xl space-y-5"><SectionLabel>Begin the Conversation</SectionLabel><h2 className="font-serif text-3xl font-bold leading-tight sm:text-5xl">Plan your journey with Ashish &amp; team.</h2><p className="mx-auto max-w-2xl text-sm font-light leading-7 text-[#F5EDE0]/70 sm:text-base">Share your dates, family requirements and the kind of experience you want. The team will help shape a thoughtful journey around you.</p></Reveal>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link to="/plan-journey" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#C9A24A] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-[#080B0F] transition-all hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A24A]">Plan a Journey <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#25D366]/55 bg-[#080B0F] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"><MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp Us</a>
            <a href={MAPS_CONFIG.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label={`Get directions to ${MAPS_CONFIG.listingName} on Google Maps`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#C9A24A]/55 bg-[#080B0F] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-[#D8B982] transition-colors hover:bg-[#C9A24A] hover:text-[#080B0F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A24A]"><MapPin className="h-4 w-4" aria-hidden="true" /> Get Directions</a>
          </div>
        </div></section>
      </main>
    </div>
  );
};
