import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, MessageCircle } from 'lucide-react';
import { JAISALMER_EXPERIENCES, SAFARI_IMAGE_CREDITS } from '../data/jaisalmerExperiences';
import { getJourneyWhatsAppLink } from '../data/siteConfig';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const faqs = [
  { question: 'What is the difference between a camel safari and jeep safari?', answer: 'A camel safari offers a slower, traditional trail across the desert, while a jeep safari covers wider desert tracks in a locally coordinated 4×4. The right choice depends on your preferred pace and comfort.' },
  { question: 'Can a desert camp be combined with a safari?', answer: 'Yes. A customized Jaisalmer journey can combine a camel or jeep safari with sunset, a desert camp stay, dinner and a cultural evening, subject to local availability.' },
  { question: 'Can families and senior travellers customize the experience?', answer: 'Yes. We can shape the desert portion around traveller interests, comfort and preferred pace. Dune bashing is optional and should only be selected when it suits the traveller.' },
  { question: 'When are Jaisalmer desert experiences most comfortable?', answer: 'October to March generally brings the most comfortable weather for outdoor desert experiences. Exact arrangements remain dependent on local weather and operating conditions.' },
];

export const JaisalmerSafariPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const whatsappUrl = getJourneyWhatsAppLink('Jaisalmer Desert Safari & Adventure');

  return (
    <main className="min-h-screen bg-[#050709] text-[#F5EDE0] perf-defer-sections">
      <section className="relative min-h-[76vh] flex items-end overflow-hidden pt-24 pb-16">
        <img src="/images/jaisalmer/safari/hero/jaisalmer-safari-hero.webp" alt="Camel safari at sunset on the dunes near Jaisalmer" width={1920} height={1276} sizes="100vw" className="absolute inset-0 h-full w-full object-cover object-center" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050709] via-[#050709]/45 to-[#050709]/25" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl space-y-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#E0BC67]">THAR EXPERIENCES</p>
            <h1 className="font-serif text-4xl font-bold leading-[0.98] sm:text-6xl lg:text-7xl">Desert Safari &amp; Adventure</h1>
            <p className="font-devanagari text-xl text-[#E7CC96] sm:text-2xl" lang="hi">थार का रोमांच</p>
            <p className="max-w-2xl text-sm font-light leading-7 text-[#F5EDE0]/82 sm:text-base">Discover Jaisalmer beyond its monuments through carefully arranged camel trails, jeep journeys, desert camps, cultural evenings and quiet nights beneath the stars.</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/plan-journey?destination=Jaisalmer" className="min-h-12 rounded-full bg-[#C9A24A] px-6 py-3.5 text-[10px] font-bold uppercase tracking-widest text-[#050709] hover:brightness-110">PLAN MY DESERT EXPERIENCE</Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center gap-2 rounded-full border border-[#25D366]/60 bg-[#050709]/70 px-6 py-3.5 text-[10px] font-bold uppercase tracking-widest text-[#25D366] hover:bg-[#25D366] hover:text-white"><MessageCircle className="h-4 w-4" /> WHATSAPP US</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[#C9A24A]/15 bg-[#080B0F] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-4"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">THE THAR BEYOND SIGHTSEEING</p><h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Choose the desert at your pace.</h2></div>
          <p className="text-sm font-light leading-7 text-[#F5EDE0]/72 lg:col-span-7 lg:col-start-6">Safari and camp arrangements are shaped around the traveller—not treated as one fixed product. Choose a calm sunset trail, a wider jeep outing, a camp night, a cultural evening, or a considered combination that complements your heritage and spiritual journey.</p>
        </div>
      </section>

      <div>
        {JAISALMER_EXPERIENCES.map((experience, index) => (
          <section key={experience.id} id={experience.slug} className={`py-16 sm:py-24 ${index % 2 ? 'bg-[#080B0F]' : 'bg-[#050709]'}`}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
              <div className={`overflow-hidden rounded-[2rem] border border-[#C9A24A]/25 shadow-2xl lg:col-span-7 ${index % 2 ? 'lg:order-2' : ''}`}>
                <img src={experience.image} alt={experience.imageAlt} width={experience.imageWidth} height={experience.imageHeight} sizes="(min-width: 1024px) 58vw, 100vw" className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]" loading="lazy" decoding="async" />
              </div>
              <div className={`space-y-5 lg:col-span-5 ${index % 2 ? 'lg:order-1' : ''}`}>
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">{String(index + 3).padStart(2, '0')} · {experience.category.replace('_', ' ')}</p>
                <h2 className="font-serif text-3xl font-bold sm:text-4xl">{experience.name}</h2>
                <p className="font-devanagari text-base text-[#D8B982]" lang="hi">{experience.hindiName}</p>
                <p className="text-sm font-light leading-7 text-[#F5EDE0]/72">{experience.shortDescription}</p>
                <p className="border-l border-[#C9A24A]/50 pl-4 text-xs leading-6 text-[#F5EDE0]/58">{experience.availabilityText}</p>
                <Link to={`/plan-journey?destination=Jaisalmer&experience=${experience.slug}`} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#C9A24A]/50 px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-[#C9A24A] hover:bg-[#C9A24A] hover:text-[#050709]">{experience.cta}<ArrowUpRight className="h-3.5 w-3.5" /></Link>
              </div>
            </motion.div>
          </section>
        ))}
      </div>

      <section className="bg-[#0B0E13] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">CHOOSE YOUR DESERT STYLE</p><h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">One Thar, four ways to experience it.</h2></div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-[#C9A24A]/20 bg-[#C9A24A]/20 md:grid-cols-4">
            {[['RELAXED','Camel Safari + Sunset + Camp'],['ADVENTURE','Jeep Safari + Optional Dune Bashing'],['CULTURAL','Camp + Music + Dance + Dinner'],['PRIVATE','A customized desert experience']].map(([title, body]) => <div key={title} className="bg-[#080B0F] p-6"><h3 className="text-xs font-bold tracking-[0.2em] text-[#C9A24A]">{title}</h3><p className="mt-3 text-sm font-light leading-6 text-[#F5EDE0]/72">{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#050709] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><h2 className="text-center font-serif text-3xl font-bold sm:text-4xl">Desert Experience FAQs</h2><div className="mt-10 divide-y divide-[#C9A24A]/20 border-y border-[#C9A24A]/20">{faqs.map((faq, index) => <div key={faq.question}><button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex min-h-14 w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold" aria-expanded={openFaq === index}><span>{faq.question}</span><ChevronDown className={`h-4 w-4 shrink-0 text-[#C9A24A] transition-transform ${openFaq === index ? 'rotate-180' : ''}`} /></button><AnimatePresence initial={false}>{openFaq === index && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pb-5 text-sm font-light leading-7 text-[#F5EDE0]/68">{faq.answer}</motion.p>}</AnimatePresence></div>)}</div></div>
      </section>

      <section className="relative overflow-hidden py-20 text-center sm:py-28"><img src="/images/jaisalmer/safari/hero/jaisalmer-safari-hero.webp" alt="Camel and travellers silhouetted at sunset near Jaisalmer" width={1920} height={1276} sizes="100vw" className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" /><div className="absolute inset-0 bg-[#050709]/75" /><div className="relative mx-auto max-w-3xl space-y-5 px-4"><h2 className="font-serif text-3xl font-bold sm:text-5xl">Plan Your Desert Experience</h2><p className="text-sm font-light leading-7 text-[#F5EDE0]/80">Tell us the pace, people and moments that matter to you. We’ll help combine the desert with your wider Jaisalmer journey.</p><div className="flex flex-wrap justify-center gap-3"><Link to="/plan-journey?destination=Jaisalmer" className="rounded-full bg-[#C9A24A] px-7 py-4 text-[10px] font-bold uppercase tracking-widest text-[#050709]">PLAN MY JAISALMER JOURNEY</Link><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#25D366]/60 bg-[#050709]/75 px-7 py-4 text-[10px] font-bold uppercase tracking-widest text-[#25D366]">WHATSAPP US</a></div></div></section>

      <section className="border-t border-[#C9A24A]/15 bg-[#050709] px-4 py-5 text-center">
        <details className="mx-auto max-w-4xl text-left text-[10px] leading-5 text-[#F5EDE0]/45">
          <summary className="cursor-pointer text-center uppercase tracking-widest hover:text-[#C9A24A]">Safari photography credits</summary>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {SAFARI_IMAGE_CREDITS.map((credit) => <p key={credit.image}>{credit.image}: {credit.sourceUrl ? <a href={credit.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#C9A24A]">{credit.creator}, {credit.source}</a> : `${credit.creator}, ${credit.source}`} · {credit.licenseUrl ? <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#C9A24A]">{credit.license}</a> : credit.license}</p>)}
          </div>
        </details>
      </section>
    </main>
  );
};
