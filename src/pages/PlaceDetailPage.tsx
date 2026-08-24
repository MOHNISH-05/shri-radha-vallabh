import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { JAISALMER_PLACES } from '../data/jaisalmerPlaces';
import { getJourneyWhatsAppLink } from '../data/siteConfig';

const SACRED_PLACE_SLUGS = new Set([
  'laxminath-ji',
  'jain-temples',
  'lodruva',
  'tanot-mata',
  'ramdevra',
  'amar-sagar',
]);

const sectionLabel = (number: string, label: string) => (
  <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A]">
    {number} · {label}
  </span>
);

export const PlaceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const place = JAISALMER_PLACES.find((p) => p.slug === slug || p.id === slug);

  if (!place) {
    return <Navigate to="/jaisalmer" replace />;
  }

  const nearbyPlaces = JAISALMER_PLACES
    .filter((item) => item.id !== place.id)
    .sort((a, b) => {
      const aScore = (a.category === place.category ? -20 : 0) + Math.abs((a.distanceKm ?? 0) - (place.distanceKm ?? 0));
      const bScore = (b.category === place.category ? -20 : 0) + Math.abs((b.distanceKm ?? 0) - (place.distanceKm ?? 0));
      return aScore - bScore;
    })
    .slice(0, 3);
  const hasReligiousSignificance = SACRED_PLACE_SLUGS.has(place.slug);
  const waUrl = getJourneyWhatsAppLink(`Jaisalmer — ${place.name} Exploration`);
  const planUrl = `/plan-journey?destination=Jaisalmer&landmark=${encodeURIComponent(place.name)}`;

  return (
    <div className="min-h-screen bg-[#050709] text-[#F5EDE0] selection:bg-[#C9A24A]/30">
      
      {/* 01. Place Hero Banner */}
      <PageHero
        breadcrumb={place.name}
        breadcrumbItems={[
          { label: 'Home', to: '/' },
          { label: 'Jaisalmer', to: '/jaisalmer' },
          { label: 'Explore', to: '/jaisalmer/explore' },
          { label: place.name },
        ]}
        badgeText={place.category}
        hindiTagline={place.hindiName}
        englishTitle={place.name}
        description={place.shortDescription}
        backgroundImage={place.image}
        bgPosition="center 40%"
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Distance Badge */}
          <span className="px-3.5 py-1.5 rounded-full bg-[#C9A24A] text-[#080B0F] text-[10px] font-extrabold uppercase tracking-widest shadow-md">
            {place.distanceTag} {place.distanceKm !== undefined && place.distanceKm > 0 ? `(~${place.distanceKm} km)` : ''}
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-[#0D1117]/80 border border-[#C9A24A]/40 text-[#D8B982] text-[10px] font-bold tracking-wider">
            📍 {place.locationLabel}
          </span>
        </div>
      </PageHero>

      {/* 02. Comprehensive Details Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={place.image} alt="" className="h-full w-full object-cover brightness-[0.16]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050709]/96 via-[#050709]/86 to-[#050709]/96" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column (8 cols): Overview & Architecture */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Introduction */}
            <div className="space-y-4">
              {sectionLabel('02', 'INTRODUCTION')}
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#F5EDE0]">
                What is {place.name}?
              </h2>
              <p className="text-xs sm:text-sm text-[#F5EDE0]/85 font-light leading-relaxed">
                {place.fullOverview}
              </p>
            </div>

            {/* History */}
            <div className="space-y-3 p-6 rounded-3xl bg-[#0D1117] border border-[#C9A24A]/25">
              {sectionLabel('03', 'HISTORY')}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5EDE0]">
                Historical Significance
              </h3>
              <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light leading-relaxed">
                {place.historicalSignificance}
              </p>
            </div>

            {/* Cultural significance */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-gradient-to-br from-[#131924] to-[#0D1117] border border-[#C9A24A]/25 space-y-3">
                {sectionLabel('04', 'CULTURAL SIGNIFICANCE')}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F5EDE0]">
                  A Living Part of Jaisalmer
                </h3>
                <p className="text-xs text-[#F5EDE0]/78 font-light leading-relaxed">
                  {place.shortDescription} Its enduring themes—{place.tags.join(', ')}—place it within Jaisalmer's wider story of desert life, craftsmanship and living heritage.
                </p>
              </div>

              {hasReligiousSignificance ? (
                <div className="p-6 rounded-3xl bg-gradient-to-br from-[#20180C] to-[#0D1117] border border-[#C9A24A]/30 space-y-3">
                  {sectionLabel('05', 'RELIGIOUS SIGNIFICANCE')}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F5EDE0]">
                    Sacred Meaning
                  </h3>
                  <p className="text-xs text-[#F5EDE0]/78 font-light leading-relaxed">
                    This is a living sacred place, not only a monument. Visitors should preserve the prayerful atmosphere, follow local guidance and approach active worship spaces with respectful dress and conduct.
                  </p>
                </div>
              ) : (
                <div className="p-6 rounded-3xl bg-gradient-to-br from-[#16120B] to-[#0D1117] border border-[#C9A24A]/25 space-y-3">
                  {sectionLabel('05', 'WHY VISIT')}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F5EDE0]">
                    The Experience
                  </h3>
                  <p className="text-xs text-[#F5EDE0]/78 font-light leading-relaxed">{place.whyVisit}</p>
                </div>
              )}
            </div>

            {/* Why Visit Highlight Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0D1117] via-[#121722] to-[#0D1117] border border-[#C9A24A]/40 space-y-2 shadow-xl">
              <div className="flex items-center gap-2 text-[#C9A24A]">
                <Sparkles className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">06 · Why You Should Visit</span>
              </div>
              <p className="text-xs sm:text-sm text-[#F5EDE0]/90 font-light leading-relaxed">
                {place.whyVisit}
              </p>
            </div>

            {/* Things to see */}
            <div className="space-y-4">
              {sectionLabel('07', 'THINGS TO SEE')}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5EDE0]">
                Key Highlights to Observe
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {place.architectureHighlights.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#0D1117] border border-[#C9A24A]/25 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#F5EDE0]/85 font-light leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What makes it special */}
            <div className="space-y-3 p-6 rounded-3xl bg-[#0D1117] border border-[#C9A24A]/25">
              {sectionLabel('08', 'WHAT MAKES IT SPECIAL')}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5EDE0]">
                The Essential Character
              </h3>
              <p className="text-xs sm:text-sm text-[#F5EDE0]/80 font-light leading-relaxed">
                {place.whyVisit}
              </p>
            </div>

            {/* Landmark Photo Gallery */}
            {place.gallery && place.gallery.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A] block">
                      11 · AUTHENTIC PHOTOGRAPHY
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5EDE0]">
                      Landmark Visual Archive
                    </h3>
                  </div>
                  <span className="text-[10px] text-[#D8B982] font-mono">
                    {place.gallery.length} verified {place.gallery.length === 1 ? 'photo' : 'photos'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {place.gallery.map((imgSrc, i) => (
                    <div
                      key={i}
                      className="relative h-48 rounded-2xl overflow-hidden border border-[#C9A24A]/30 shadow-lg group bg-[#080B0F]"
                    >
                      <img
                        src={imgSrc}
                        alt={`${place.name} in Jaisalmer — ${place.category.toLowerCase()} view ${i + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080B0F]/70 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute bottom-2.5 left-3 text-[9px] font-bold text-[#F5EDE0]/80 tracking-wider uppercase">
                        View {i + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Source transparency */}
            <div className="pt-2 text-xs text-[#F5EDE0]/60">
              <span className="text-[#C9A24A] font-semibold">Official references: </span>
              {place.sourceLinks.map((source, index) => (
                <span key={source.url}>
                  {index > 0 && <span aria-hidden="true"> · </span>}
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-[#C9A24A]/50 underline-offset-2 transition-colors hover:text-[#F5EDE0]"
                  >
                    {source.label}
                  </a>
                </span>
              ))}
            </div>

          </div>

          {/* Right Column (4 cols): Quick Info Card & Booking */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-[#0D1117] rounded-3xl border border-[#C9A24A]/30 p-6 space-y-6 shadow-2xl">
              
              <div className="space-y-1 pb-4 border-b border-[#C9A24A]/20">
                <span className="text-[9px] uppercase font-bold text-[#C9A24A] tracking-widest block">
                  09 · VISITOR ESSENTIALS
                </span>
                <h3 className="font-serif text-lg font-bold text-[#F5EDE0]">
                  Visiting Information
                </h3>
              </div>

              <div className="space-y-4 text-xs text-[#F5EDE0]/80">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#D8B982] block">Location</span>
                  <p className="font-light">{place.locationLabel}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#D8B982] block">Distance Category</span>
                  <p className="font-light">{place.distanceTag} {place.distanceKm !== undefined ? `(${place.distanceKm} km from centre)` : ''}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#D8B982] block">Best Time of Day</span>
                  <p className="font-light">{place.bestTimeToVisit}</p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-[#C9A24A]/20">
                  <span className="text-[10px] uppercase font-bold text-[#D8B982] block">Tags</span>
                  <div className="flex flex-wrap gap-1.5">
                    {place.tags.map((t, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-white/5 text-[9px] text-[#F5EDE0]/60">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <Link
                  to={planUrl}
                  className="w-full py-3.5 px-4 rounded-full bg-gradient-to-r from-[#C9A24A] to-[#AA771C] text-[#05070A] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:brightness-110 active:scale-95 transition-all text-center"
                >
                  <span>ADD TO MY JAISALMER PLAN</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-full bg-[#080B0F] border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>ENQUIRE ON WHATSAPP</span>
                </a>
              </div>

            </div>

            {/* Back to Jaisalmer Hub Link */}
            <div className="text-center">
              <Link
                to="/jaisalmer"
                className="text-xs text-[#C9A24A] hover:text-white font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1"
              >
                <span>← Return to Jaisalmer Hub</span>
              </Link>
            </div>

          </div>

        </div>

        {/* 03. Nearby / Related Places to Explore */}
        <div className="space-y-8 pt-12 border-t border-[#C9A24A]/20">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A24A] block">
                10 · EXPLORE FURTHER
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EDE0]">
                Other Landmark Destinations
              </h3>
            </div>
            <Link to="/jaisalmer/explore" className="text-xs font-bold text-[#C9A24A] uppercase tracking-wider hover:text-white">
              All 18 Places →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nearbyPlaces.map((np) => (
              <Link
                key={np.id}
                to={`/jaisalmer/places/${np.slug}`}
                className="bg-[#0D1117] rounded-3xl border border-[#C9A24A]/25 overflow-hidden shadow-xl hover:border-[#C9A24A]/70 transition-all group flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden bg-[#080B0F]">
                  {np.image ? (
                    <img src={np.image} alt={np.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#131924] via-[#0D1117] to-[#080B0F] flex flex-col items-center justify-center p-4 text-center">
                      <span className="text-[9px] uppercase font-bold tracking-widest text-[#C9A24A]/80">
                        Photography Coming Soon
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#080B0F]/90 text-[#C9A24A] text-[8px] font-bold uppercase tracking-wider">
                    {np.category}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <p className="font-devanagari text-xs text-[#D8B982]">{np.hindiName}</p>
                  <h4 className="font-serif text-base font-bold text-[#F5EDE0] group-hover:text-[#C9A24A] transition-colors">{np.name}</h4>
                  <p className="text-xs text-[#F5EDE0]/70 font-light line-clamp-2">{np.shortDescription}</p>
                  <div className="pt-2 border-t border-[#C9A24A]/20 flex items-center justify-between text-xs font-bold text-[#C9A24A]">
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 12–13. Journey actions */}
        <div className="relative overflow-hidden rounded-3xl border border-[#C9A24A]/35 p-8 sm:p-12 text-center shadow-2xl">
          <img src={place.image} alt={`${place.name} journey backdrop`} className="absolute inset-0 h-full w-full object-cover brightness-[0.28]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050709]/95 via-[#050709]/78 to-[#050709]/95" />
          <div className="relative z-10 mx-auto max-w-2xl space-y-6">
            {sectionLabel('12', 'PLAN YOUR JOURNEY')}
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#F5EDE0]">
              Include {place.name} in Your Jaisalmer Story
            </h3>
            <p className="text-xs sm:text-sm text-[#F5EDE0]/78 font-light leading-relaxed">
              Build a thoughtfully paced itinerary around this landmark, nearby heritage sites and the time of day that presents it at its best.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to={planUrl} className="min-h-[48px] px-7 py-3.5 rounded-full bg-[#C9A24A] text-[#050709] font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:brightness-110 transition-all">
                Plan This Journey <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="min-h-[48px] px-7 py-3.5 rounded-full border border-[#25D366]/55 text-[#25D366] font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#25D366] hover:text-white transition-all">
                <MessageCircle className="w-4 h-4" /> 13 · WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        </div>
      </section>

    </div>
  );
};
