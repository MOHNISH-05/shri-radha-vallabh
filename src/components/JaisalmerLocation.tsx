import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { MAPS_CONFIG } from '../data/siteConfig';

interface JaisalmerLocationProps {
  compact?: boolean;
}

export const JaisalmerLocation: React.FC<JaisalmerLocationProps> = ({ compact = false }) => {
  if (compact) {
    return (
      <aside
        aria-labelledby="about-jaisalmer-location"
        className="rounded-3xl border border-[#C9A24A]/30 bg-[#0D1117]/90 p-6 sm:p-8 shadow-xl"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C9A24A]/40 bg-[#080B0F] text-[#C9A24A]">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0 space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A24A]">Our Jaisalmer Location</span>
              <h3 id="about-jaisalmer-location" className="font-serif text-xl font-bold text-[#F5EDE0] sm:text-2xl">
                {MAPS_CONFIG.listingName}
              </h3>
              <p className="text-xs font-light text-[#F5EDE0]/70 sm:text-sm">{MAPS_CONFIG.locality}</p>
            </div>
          </div>
          <a
            href={MAPS_CONFIG.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Get directions to ${MAPS_CONFIG.listingName} on Google Maps`}
            className="inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full border border-[#C9A24A]/60 px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#D8B982] transition-colors hover:bg-[#C9A24A] hover:text-[#080B0F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A24A] sm:w-auto"
          >
            Get Directions
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </aside>
    );
  }

  return (
    <section
      aria-labelledby="plan-jaisalmer-location"
      className="overflow-hidden rounded-3xl border border-[#C9A24A]/35 bg-[#0D1117]/90 shadow-2xl"
    >
      <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col justify-center space-y-5 p-6 sm:p-10 lg:p-12">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A24A]/40 bg-[#080B0F] text-[#C9A24A]">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A]">Find Us in Jaisalmer</span>
            <h2 id="plan-jaisalmer-location" className="font-serif text-2xl font-bold leading-tight text-[#F5EDE0] sm:text-3xl">
              Where is {MAPS_CONFIG.listingName} located?
            </h2>
            <p className="text-xs font-light leading-relaxed text-[#F5EDE0]/75 sm:text-sm">
              {MAPS_CONFIG.listingName} is located in {MAPS_CONFIG.locality}. Open the Google Maps listing for directions.
            </p>
          </div>
          <a
            href={MAPS_CONFIG.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${MAPS_CONFIG.listingName} on Google Maps`}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#C9A24A] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-[#080B0F] transition-all hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A24A] sm:w-fit"
          >
            View on Google Maps
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="relative min-h-[280px] border-t border-[#C9A24A]/20 lg:min-h-[420px] lg:border-l lg:border-t-0" data-testid="google-map-wrapper">
          <iframe
            src={MAPS_CONFIG.embedUrl}
            title={`${MAPS_CONFIG.listingName} location in Jaisalmer`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};
