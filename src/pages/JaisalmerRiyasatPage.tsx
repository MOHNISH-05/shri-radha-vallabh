import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Castle,
  ChevronRight,
  Crown,
  ExternalLink,
  Info,
  Landmark,
  MessageCircle,
  ScrollText,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { getJourneyWhatsAppLink } from '../data/siteConfig';
import { RAWAL_JAISAL, MODERN_ROYAL_TIMELINE, type RoyalTimelineEntry } from '../data/jaisalmerRoyalTimeline';
import { ROYAL_IMAGE_CREDITS } from '../data/royalImageCredits';

interface PortraitProps {
  entry: RoyalTimelineEntry;
}

const RoyalPortrait: React.FC<PortraitProps> = ({ entry }) => (
  <figure className="relative mx-auto w-full max-w-[31rem]">
    <div className="absolute -inset-2 border border-[#C9A24A]/15 sm:-inset-3" aria-hidden="true" />
    <div className="relative aspect-[4/5] overflow-hidden border border-[#C9A24A]/45 bg-[#10141a] shadow-[0_26px_70px_rgba(0,0,0,0.42)]">
      <img
        src={entry.portrait.src}
        srcSet={entry.portrait.srcSet}
        sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1279px) 42vw, 480px"
        width={entry.portrait.width}
        height={entry.portrait.height}
        alt={entry.portrait.alt}
        className="h-full w-full object-cover"
        style={{ objectPosition: entry.portrait.objectPosition }}
        loading="lazy"
        decoding="async"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050709]/55 via-transparent to-black/10" />
    </div>
    <figcaption className="mt-5 flex items-center justify-between gap-4 border-t border-[#C9A24A]/25 pt-3 text-[9px] uppercase tracking-[0.2em] text-[#F5EDE0]/45">
      <span>Royal archive</span>
      <span>{entry.period}</span>
    </figcaption>
  </figure>
);

const RulerChapter = React.memo<{ entry: RoyalTimelineEntry; index: number }>(({ entry, index }) => {
  const reduceMotion = useReducedMotion();
  const portraitFirst = index % 2 === 0;

  return (
    <article
      id={entry.id}
      data-ruler={entry.englishName}
      data-portrait={entry.portrait.src}
      className="relative grid grid-cols-1 items-center gap-10 py-16 sm:gap-14 sm:py-24 lg:grid-cols-2 lg:gap-24 lg:py-32"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: portraitFirst ? -24 : 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className={portraitFirst ? 'lg:order-1' : 'lg:order-2'}
      >
        <RoyalPortrait entry={entry} />
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, delay: 0.08 }}
        className={`relative ${portraitFirst ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <div className={`absolute top-1 hidden h-px w-14 bg-[#C9A24A]/55 lg:block ${portraitFirst ? '-left-[5.6rem]' : '-right-[5.6rem]'}`} aria-hidden="true" />
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">Chapter {String(index + 1).padStart(2, '0')}</p>
        <p lang="hi" className="mt-5 font-devanagari text-xl leading-[1.65] text-[#D8B982] sm:text-2xl">{entry.hindiName}</p>
        <h3 className="mt-1 font-serif text-3xl font-bold leading-tight text-[#F5EDE0] sm:text-4xl xl:text-5xl">{entry.englishName}</h3>
        <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F5EDE0]/56">{entry.historicalTitle}</p>
        <div className="my-7 h-px w-20 bg-[#C9A24A]/45" aria-hidden="true" />
        <p className="font-serif text-xl leading-snug text-[#F5EDE0] sm:text-2xl">{entry.highlight}</p>
        <p className="mt-5 max-w-xl text-sm font-light leading-7 text-[#F5EDE0]/72 sm:text-base sm:leading-8">{entry.context}</p>
        {entry.profilePath && (
          <Link
            to={entry.profilePath}
            className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-[#C9A24A]/55 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A24A] transition-colors hover:border-[#F5EDE0] hover:text-[#F5EDE0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A24A]"
          >
            View the dedicated profile <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </motion.div>
    </article>
  );
});

RulerChapter.displayName = 'RulerChapter';

export const JaisalmerRiyasatPage: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const whatsappUrl = getJourneyWhatsAppLink('Jaisalmer Royal Heritage & Riyasat Trail');

  return (
    <div className="min-h-screen bg-[#050709] text-[#F5EDE0] selection:bg-[#C9A24A]/30">
      <PageHero
        breadcrumb="Riyasat"
        breadcrumbItems={[{ label: 'Home', to: '/' }, { label: 'Jaisalmer', to: '/jaisalmer' }, { label: 'Riyasat' }]}
        badgeText="ROYAL HOUSE · BHATI HERITAGE · HISTORICAL LEGACY"
        hindiTagline="जैसलमेर रियासत एवं भाटी राजवंश"
        englishTitle="JAISALMER RIYASAT"
        description="A carefully documented journey from Jaisalmer’s foundation era to the modern cultural legacy of its former royal house."
        backgroundImage="/assets/optimized/jaisalmer-fort-palace-1920.webp"
        bgPosition="center 38%"
      >
        <a
          href="#origins"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#C9A24A] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#050709] transition-[filter,transform] hover:brightness-110 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Enter the royal archive <ChevronRight className="h-4 w-4" />
        </a>
      </PageHero>

      <main>
        <section aria-labelledby="what-was-riyasat" className="border-b border-white/5 bg-[#080B0F] py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-9 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">The historical frame</p>
              <h2 id="what-was-riyasat" className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl">What was Jaisalmer Riyasat?</h2>
            </div>
            <div className="space-y-5 text-sm font-light leading-7 text-[#F5EDE0]/72 sm:text-base sm:leading-8 lg:col-span-8 lg:columns-2 lg:gap-12">
              <p>Jaisalmer Riyasat was the historic princely state centred on the desert citadel of Jaisalmer. Its Bhati rulers governed a strategically placed region shaped by caravan routes, fortified settlements, water systems, temples, and the communities of the Thar.</p>
              <p>After Indian independence, Jaisalmer joined Rajasthan in 1949. The former royal house no longer holds governing authority; its continuing place is historical, familial, ceremonial, and cultural.</p>
            </div>
          </div>
        </section>

        <section id="origins" aria-labelledby="origins-title" className="relative bg-[#0A0D12] py-20 sm:py-28 lg:py-36">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] jaali-pattern" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <RoyalPortrait entry={RAWAL_JAISAL} />
            </motion.div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">Origins · The foundation era</p>
              <p lang="hi" className="mt-5 font-devanagari text-xl leading-[1.65] text-[#D8B982] sm:text-2xl">{RAWAL_JAISAL.hindiName}</p>
              <h2 id="origins-title" className="mt-1 font-serif text-4xl font-bold leading-tight sm:text-5xl">{RAWAL_JAISAL.englishName}</h2>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F5EDE0]/55">{RAWAL_JAISAL.historicalTitle}</p>
              <blockquote className="my-8 border-l border-[#C9A24A]/60 pl-6 font-serif text-xl leading-relaxed text-[#F5EDE0] sm:text-2xl">“{RAWAL_JAISAL.highlight}”</blockquote>
              <p className="max-w-2xl text-sm font-light leading-7 text-[#F5EDE0]/72 sm:text-base sm:leading-8">{RAWAL_JAISAL.context}</p>
              <p className="mt-5 max-w-2xl text-xs leading-6 text-[#F5EDE0]/45">This image is a later historical representation in the Jaisalmer Fort Palace Museum, not a contemporary likeness.</p>
            </motion.div>
          </div>
        </section>

        <section aria-labelledby="timeline-title" className="bg-[#050709]">
          <header className="border-y border-[#C9A24A]/15 bg-[#080B0F] py-16 text-center sm:py-20">
            <div className="mx-auto max-w-3xl px-5 sm:px-8">
              <ScrollText className="mx-auto h-6 w-6 text-[#C9A24A]" aria-hidden="true" />
              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.32em] text-[#C9A24A]">A distinct later chapter</p>
              <h2 id="timeline-title" className="mt-3 font-serif text-3xl font-bold sm:text-5xl">The Modern Royal Timeline</h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm font-light leading-7 text-[#F5EDE0]/65">The sequence below begins in the 20th century. It is intentionally separated from Rawal Jaisal by more than seven centuries of history.</p>
            </div>
          </header>

          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#C9A24A]/28 to-transparent lg:block" aria-hidden="true" />
            {MODERN_ROYAL_TIMELINE.map((entry, index) => (
              <React.Fragment key={entry.id}>
                {index > 0 && <div className="h-px bg-gradient-to-r from-transparent via-[#C9A24A]/18 to-transparent lg:hidden" aria-hidden="true" />}
                <RulerChapter entry={entry} index={index} />
              </React.Fragment>
            ))}
          </div>
        </section>

        <section aria-labelledby="modern-context-title" className="border-y border-white/5 bg-[#080B0F] py-12 sm:py-16">
          <aside className="mx-auto flex max-w-4xl items-start gap-4 px-5 sm:gap-6 sm:px-8">
            <Info className="mt-1 h-4 w-4 shrink-0 text-[#C9A24A]/75" aria-hidden="true" />
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#C9A24A]/80">Historical note</p>
              <h2 id="modern-context-title" className="sr-only">Modern constitutional context</h2>
              <p className="mt-2 text-xs font-light leading-6 text-[#F5EDE0]/55 sm:text-sm sm:leading-7">The Constitution (Twenty-sixth Amendment) Act, 1971 ended official recognition of former rulers and privy purses. Modern references to Maharawal on this page describe traditional, familial, and cultural usage—not sovereign or governmental authority.</p>
            </div>
          </aside>
        </section>

        <section aria-labelledby="heritage-title" className="relative overflow-hidden py-24 sm:py-32">
          <div className="absolute inset-0">
            <img src="/assets/optimized/jaisalmer-fort-palace-1920.webp" width="1920" height="1080" alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050709]/95 via-[#050709]/82 to-[#050709]/48" />
          </div>
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">Royal heritage of Jaisalmer</p>
              <h2 id="heritage-title" className="mt-4 font-serif text-3xl font-bold sm:text-5xl">A legacy held in stone, ritual, and memory</h2>
              <p className="mt-6 max-w-2xl text-sm font-light leading-7 text-[#F5EDE0]/76 sm:text-base sm:leading-8">The Riyasat story survives beyond portraits: in Sonar Qila’s living fabric, the palace archive, Bhati ceremonial traditions, Lord Laxminath Ji’s worship, public festivals, hereditary arts, and the royal cenotaphs at Bada Bagh.</p>
              <div className="mt-10 grid grid-cols-1 gap-px border border-[#C9A24A]/22 bg-[#C9A24A]/20 sm:grid-cols-3">
                {[
                  { icon: Castle, title: 'Sonar Qila', text: 'Fort, palace, temples, and a living urban community.' },
                  { icon: Landmark, title: 'Royal Architecture', text: 'Raj Mahal, Mandir Palace, carved stone, and Bada Bagh.' },
                  { icon: Crown, title: 'Cultural Memory', text: 'Festivals, sacred duty, archives, music, and craft traditions.' },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="bg-[#080B0F]/88 p-6 backdrop-blur-md">
                    <Icon className="h-5 w-5 text-[#C9A24A]" aria-hidden="true" />
                    <h3 className="mt-4 font-serif text-lg font-bold">{title}</h3>
                    <p className="mt-2 text-xs font-light leading-6 text-[#F5EDE0]/62">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="continue-title" className="bg-[#080B0F] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">Continue the archive</p>
              <h2 id="continue-title" className="mt-4 font-serif text-3xl font-bold sm:text-5xl">Explore Jaisalmer’s Heritage</h2>
            </div>
            <div className="mt-12 grid grid-cols-1 border-y border-[#C9A24A]/20 md:grid-cols-2">
              <Link to="/jaisalmer/history" className="group flex min-h-44 items-center justify-between gap-6 border-b border-[#C9A24A]/20 p-7 transition-colors hover:bg-white/[0.025] focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#C9A24A] md:border-b-0 md:border-r sm:p-10">
                <div><BookOpen className="h-5 w-5 text-[#C9A24A]" aria-hidden="true" /><h3 className="mt-5 font-serif text-2xl font-bold">History of Jaisalmer</h3><p className="mt-2 text-sm text-[#F5EDE0]/58">Follow the city’s wider historical chronology.</p></div>
                <ArrowRight className="h-5 w-5 shrink-0 text-[#C9A24A] transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link to="/jaisalmer/explore" className="group flex min-h-44 items-center justify-between gap-6 p-7 transition-colors hover:bg-white/[0.025] focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#C9A24A] sm:p-10">
                <div><Landmark className="h-5 w-5 text-[#C9A24A]" aria-hidden="true" /><h3 className="mt-5 font-serif text-2xl font-bold">Explore Jaisalmer</h3><p className="mt-2 text-sm text-[#F5EDE0]/58">Visit the fort, palaces, havelis, temples, and memorials.</p></div>
                <ArrowRight className="h-5 w-5 shrink-0 text-[#C9A24A] transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section aria-labelledby="journey-title" className="relative overflow-hidden py-24 sm:py-36">
          <div className="absolute inset-0">
            <img src="/images/jaisalmer/Jaisalmer Photos/bada bagh.jpeg" alt="" width="1600" height="1067" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[#050709]/76" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050709]/72 via-transparent to-[#050709]/90" />
          </div>
          <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">Experience the living landscape</p>
            <h2 id="journey-title" className="mt-4 font-serif text-3xl font-bold sm:text-5xl">Plan Your Jaisalmer Journey</h2>
            <p lang="hi" className="mt-4 font-devanagari text-lg leading-[1.7] text-[#D8B982]">पधारो म्हारे देश</p>
            <p className="mx-auto mt-5 max-w-2xl text-sm font-light leading-7 text-[#F5EDE0]/78">Discover the fort, royal memorials, sacred traditions, desert communities, and the cultural memory of the Golden City with a thoughtfully planned journey.</p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link to="/plan-journey?destination=Jaisalmer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#C9A24A] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#050709] transition-[filter,transform] hover:brightness-110 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                <Crown className="h-4 w-4" aria-hidden="true" /> Plan the journey
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#25D366]/55 bg-[#080B0F]/82 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]">
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section aria-labelledby="credits-title" className="border-t border-white/5 bg-[#050709] py-10">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <details className="group text-xs text-[#F5EDE0]/48">
              <summary id="credits-title" className="inline-flex cursor-pointer list-none items-center gap-2 py-2 text-[9px] font-bold uppercase tracking-[0.24em] text-[#C9A24A]/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A24A]">
                Image credits &amp; archival notes <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </summary>
              <ul className="mt-5 grid grid-cols-1 gap-5 border-t border-white/8 pt-6 md:grid-cols-2">
                {ROYAL_IMAGE_CREDITS.map((credit) => (
                  <li key={credit.rulerName} className="leading-6">
                    <strong className="font-semibold text-[#F5EDE0]/72">{credit.rulerName}</strong><br />
                    {credit.creator && <>{credit.creator} · </>}{credit.sourceUrl ? <a href={credit.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-[#C9A24A]/35 underline-offset-2 hover:text-[#C9A24A]">{credit.sourceName}</a> : credit.sourceName} · {credit.licenseUrl ? <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-[#C9A24A]/35 underline-offset-2 hover:text-[#C9A24A]">{credit.license}</a> : credit.license}
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </section>
      </main>
    </div>
  );
};
