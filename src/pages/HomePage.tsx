import React from 'react';
import { Hero } from '../sections/Hero';
import { StatsBar } from '../sections/StatsBar';
import { BrandStatement } from '../sections/BrandStatement';
import { OurJourneys } from '../sections/OurJourneys';
import { FeaturedJourney } from '../sections/FeaturedJourney';
import { PackagesSection } from '../sections/PackagesSection';
import { WhyChooseUs } from '../sections/WhyChooseUs';
import { JourneyProcess } from '../sections/JourneyProcess';
import { TravellerStories } from '../sections/TravellerStories';
import { VisualGallery } from '../sections/VisualGallery';
import { PlanJourneyForm } from '../sections/PlanJourneyForm';
import { FinalCTA } from '../sections/FinalCTA';

export const HomePage: React.FC = () => {
  return (
    <main className="w-full">
      {/* 01. Master Hero — Authentic Laxminath Ji Visual */}
      <Hero />

      {/* 02. Stats / Sacred Trust Pillars */}
      <StatsBar />

      {/* 03. Brand Statement & Roots */}
      <BrandStatement />

      {/* 04. Our Journeys Universe Carousel */}
      <OurJourneys />

      {/* 05. Featured Journey Seasonal Campaign (Jaisalmer) */}
      <FeaturedJourney />

      {/* 06. Curated Packages Preview */}
      <PackagesSection />

      {/* 07. Brand Philosophy Pillars */}
      <WhyChooseUs />

      {/* 08. 4-Step Journey Process */}
      <JourneyProcess />

      {/* 09. The Shri Radha Vallabh Experience */}
      <TravellerStories />

      {/* 10. Visual Gallery Preview */}
      <VisualGallery />

      {/* 11. Custom Journey Planner Form */}
      <PlanJourneyForm />

      {/* 12. Final Cinematic CTA */}
      <FinalCTA />
    </main>
  );
};
