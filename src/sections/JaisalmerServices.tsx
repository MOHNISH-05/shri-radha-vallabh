import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Car, Compass, Map, TentTree } from 'lucide-react';

const SERVICES = [
  {
    title: 'Jaisalmer Tours',
    description: 'Build a practical Golden City itinerary around the fort, sacred places, havelis, desert and your available time.',
    to: '/jaisalmer',
    cta: 'Explore Jaisalmer tours',
    icon: Compass,
  },
  {
    title: 'Tour Packages',
    description: 'Compare thoughtfully paced Jaisalmer package formats for couples, families, friends and private groups.',
    to: '/packages',
    cta: 'View Jaisalmer packages',
    icon: Map,
  },
  {
    title: 'Desert Experiences',
    description: 'Plan a camel trail, jeep outing, sunset, cultural evening or camp stay with the wider journey in mind.',
    to: '/safari',
    cta: 'See desert safaris',
    icon: TentTree,
  },
  {
    title: 'Taxi & Transfers',
    description: 'Coordinate airport or railway pickup, local sightseeing transport and hotel-to-desert transfers.',
    to: '/jaisalmer-taxi',
    cta: 'Arrange Jaisalmer transport',
    icon: Car,
  },
];

export const JaisalmerServices: React.FC = () => (
  <section className="border-b border-[#C9A24A]/20 bg-[#050709] py-16 sm:py-24" aria-labelledby="jaisalmer-services-title">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">LOCAL JAISALMER PLANNING</p>
          <h2 id="jaisalmer-services-title" className="mt-3 font-serif text-3xl font-bold leading-tight text-[#F5EDE0] sm:text-4xl">SRV Yaatra, rooted in the Golden City.</h2>
        </div>
        <p className="text-sm font-light leading-7 text-[#F5EDE0]/72 lg:col-span-7 lg:col-start-6">SRV Yaatra is the online travel identity of Jaisalmer-based Shriradha Vallabh tours. From Vyasa Para inside the fort area, the team helps travellers combine local sightseeing, desert experiences, stays and transportation in one customized plan.</p>
      </div>

      <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-[#C9A24A]/20 bg-[#C9A24A]/20 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <article key={service.title} className="flex min-h-64 flex-col bg-[#080B0F] p-6">
              <Icon className="h-6 w-6 text-[#C9A24A]" aria-hidden="true" />
              <h3 className="mt-5 font-serif text-xl font-bold text-[#F5EDE0]">{service.title}</h3>
              <p className="mt-3 flex-1 text-xs font-light leading-6 text-[#F5EDE0]/68">{service.description}</p>
              <Link to={service.to} className="mt-5 inline-flex min-h-11 items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#C9A24A] transition hover:text-[#F5EDE0]">
                {service.cta} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
