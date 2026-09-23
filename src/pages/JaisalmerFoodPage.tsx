import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Coffee, MessageCircle, Sparkles, Utensils } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { getWhatsAppLink } from '../data/siteConfig';

const regionalDishes = [
  ['Ker Sangri', 'A desert preparation shaped by ingredients that thrive in Rajasthan’s arid landscape.'],
  ['Dal Baati Churma', 'A Rajasthan-wide meal of baked baati, lentils and sweet churma, commonly enjoyed in Jaisalmer.'],
  ['Gatte ki Sabzi', 'Gram-flour dumplings served in a spiced gravy across Rajasthan.'],
  ['Pyaaz Kachori & Mirchi Bada', 'Popular regional snacks that travellers may find across Jaisalmer’s markets and eateries.'],
];

const localPicks = [
  ['Fateh Ki Kachori', 'Known locally for savoury kachori.'],
  ['Dhanraj Ji Bhatia ke Ghotuve / Ghotua', 'A Jaisalmer sweet speciality with a rich, grainy texture.'],
  ['Khatri Ji ke Dal Pakwan', 'Crisp pakwan paired with seasoned dal for a filling breakfast.'],
  ['Radhe Radhe Namkeen Bhandar', 'A local stop associated with Bread Bada and Dahi Bada.'],
];

export const JaisalmerFoodPage: React.FC = () => {
  const whatsappUrl = getWhatsAppLink('Namaste SHRI RADHA VALLABH 🙏\n\nI would like to plan a Jaisalmer journey with local food stops.\nSource page: /jaisalmer/food\n\nPlease suggest a practical itinerary and share the exact current quote.');

  return (
    <div className="min-h-screen bg-[#050709] text-[#F5EDE0]">
      <PageHero
        breadcrumb="Jaisalmer / Food & Flavours"
        badgeText="DESERT KITCHEN · STREET FOOD · LOCAL TRADITIONS"
        hindiTagline="जैसलमेर का स्वाद"
        englishTitle="JAISALMER FOOD & LOCAL FLAVOURS"
        description="A practical guide to what to eat in Jaisalmer—from Ghotua and dal pakwan to kachori, Makhaniya Lassi and dishes shaped by Rajasthan’s desert traditions."
        backgroundImage="/assets/optimized/jaisalmer-night-fort-1280.webp"
        backgroundImageSrcSet="/assets/optimized/jaisalmer-night-fort-1280.webp 1280w, /images/jaisalmer/web_DJI_0727.jpg 1920w"
        bgPosition="center 45%"
      />

      <section className="mx-auto max-w-5xl space-y-5 px-4 py-16 text-center sm:px-6 sm:py-24">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">Food culture of the Golden City</span>
        <h2 className="font-serif text-3xl font-bold sm:text-4xl">Simple ingredients, generous flavour</h2>
        <p className="mx-auto max-w-3xl text-sm font-light leading-7 text-[#F5EDE0]/75">Jaisalmer’s food reflects desert practicality, trading traditions and warm hospitality. Some items below are strongly associated with the city; others belong to the wider Rajasthani table and are commonly served here. This guide does not imply that every Rajasthan-wide dish originated in Jaisalmer.</p>
      </section>

      <section className="border-y border-[#C9A24A]/20 bg-[#080B0F] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3"><span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#C9A24A]">Must-try regional dishes</span><h2 className="font-serif text-3xl font-bold">From the desert pantry</h2></div>
          <div className="grid gap-5 sm:grid-cols-2">
            {regionalDishes.map(([name, description]) => <article key={name} className="rounded-3xl border border-[#C9A24A]/25 bg-[#0D1117] p-6"><Utensils className="mb-4 h-5 w-5 text-[#C9A24A]" aria-hidden="true"/><h3 className="font-serif text-xl font-bold">{name}</h3><p className="mt-2 text-xs font-light leading-6 text-[#F5EDE0]/72">{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-3 lg:px-8">
        <article className="rounded-3xl border border-[#C9A24A]/25 bg-[#0D1117] p-7"><Coffee className="h-6 w-6 text-[#C9A24A]"/><h2 className="mt-5 font-serif text-2xl font-bold">Breakfast &amp; snacks</h2><p className="mt-3 text-sm font-light leading-7 text-[#F5EDE0]/72">Begin with dal pakwan or a fresh savoury kachori. Bread Bada and Dahi Bada add contrasting crisp, soft and cooling textures.</p></article>
        <article className="rounded-3xl border border-[#C9A24A]/25 bg-[#0D1117] p-7"><Sparkles className="h-6 w-6 text-[#C9A24A]"/><h2 className="mt-5 font-serif text-2xl font-bold">Sweets</h2><p className="mt-3 text-sm font-light leading-7 text-[#F5EDE0]/72">Look for Jaisalmer’s Ghotua, sweet Mawa Kachori and jalebi served fresh and hot. Availability varies by shop and time of day.</p></article>
        <article className="rounded-3xl border border-[#C9A24A]/25 bg-[#0D1117] p-7"><Coffee className="h-6 w-6 text-[#C9A24A]"/><h2 className="mt-5 font-serif text-2xl font-bold">Lassi &amp; drinks</h2><p className="mt-3 text-sm font-light leading-7 text-[#F5EDE0]/72">Makhaniya Lassi is a thick, cooling local favourite. Confirm sweetness, dairy and dietary preferences when ordering.</p></article>
      </section>

      <section className="border-y border-[#C9A24A]/20 bg-[#0B0E13] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3"><span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#C9A24A]">SRV local picks</span><h2 className="font-serif text-3xl font-bold">Names travellers ask about</h2><p className="text-sm font-light leading-7 text-[#F5EDE0]/70">These are conservative food notes, not rankings or endorsements. Confirm the current location, availability and preparation directly before visiting.</p></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{localPicks.map(([name, note]) => <article key={name} className="rounded-3xl border border-[#C9A24A]/25 bg-[#080B0F] p-6"><h3 className="font-serif text-lg font-bold text-[#D8B982]">{name}</h3><p className="mt-3 text-xs font-light leading-6 text-[#F5EDE0]/70">{note}</p></article>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-[#C9A24A]/30 bg-[#0D1117] p-7 sm:p-10 lg:grid-cols-2">
          <div><span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A24A]">Practical food tips</span><h2 className="mt-3 font-serif text-2xl font-bold">Eat comfortably in the desert climate</h2></div>
          <ul className="space-y-3 text-sm font-light leading-6 text-[#F5EDE0]/72"><li>• Mornings suit dal pakwan, kachori and fresh jalebi.</li><li>• Carry water and balance rich snacks with lighter meals.</li><li>• Vegetarian food is widely available; confirm vegan, dairy-free or allergy needs directly.</li><li>• Ask before ordering if spice, dairy or preparation style matters to you.</li></ul>
        </div>
      </section>

      <section className="border-t border-[#C9A24A]/20 bg-[#080B0F] py-16 text-center sm:py-24">
        <div className="mx-auto max-w-4xl space-y-6 px-4 sm:px-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">Food into your journey</span>
          <h2 className="font-serif text-3xl font-bold sm:text-5xl">Plan the stops around your Jaisalmer days</h2>
          <p className="mx-auto max-w-2xl text-sm font-light leading-7 text-[#F5EDE0]/72">Use the itinerary guide to place breakfast, market snacks and a relaxed local meal around fort, haveli and desert plans.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/jaisalmer/itinerary" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#C9A24A] px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-[#050709]">View Jaisalmer itinerary <ArrowUpRight className="h-4 w-4"/></Link>
            <Link to="/jaisalmer" className="inline-flex min-h-12 items-center rounded-full border border-[#C9A24A]/40 px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-[#D8B982]">Back to Jaisalmer</Link>
            <Link to="/plan-journey?destination=Jaisalmer" className="inline-flex min-h-12 items-center rounded-full border border-[#C9A24A]/40 px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-[#D8B982]">Plan Journey</Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#25D366]/60 px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-[#25D366]"><MessageCircle className="h-4 w-4"/> Ask about food stops</a>
          </div>
        </div>
      </section>
    </div>
  );
};
