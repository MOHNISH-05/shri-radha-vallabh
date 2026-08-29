import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route, useLocation } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { LogoIntro } from './components/LogoIntro';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { absoluteSeoUrl, buildStructuredData, getSeoForPath } from './data/seo';

/* ── Dedicated Pages ─────────────────────────────────────── */
const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })));
const JourneysPage = lazy(() => import('./pages/JourneysPage').then((module) => ({ default: module.JourneysPage })));
const JaisalmerPage = lazy(() => import('./pages/JaisalmerPage').then((module) => ({ default: module.JaisalmerPage })));
const JaisalmerExplorePage = lazy(() => import('./pages/JaisalmerExplorePage').then((module) => ({ default: module.JaisalmerExplorePage })));
const JaisalmerSafariPage = lazy(() => import('./pages/JaisalmerSafariPage').then((module) => ({ default: module.JaisalmerSafariPage })));
const JaisalmerHistoryPage = lazy(() => import('./pages/JaisalmerHistoryPage').then((module) => ({ default: module.JaisalmerHistoryPage })));
const JaisalmerRiyasatPage = lazy(() => import('./pages/JaisalmerRiyasatPage').then((module) => ({ default: module.JaisalmerRiyasatPage })));
const PlaceDetailPage = lazy(() => import('./pages/PlaceDetailPage').then((module) => ({ default: module.PlaceDetailPage })));
const PackagesPage = lazy(() => import('./pages/PackagesPage').then((module) => ({ default: module.PackagesPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const StoriesPage = lazy(() => import('./pages/StoriesPage').then((module) => ({ default: module.StoriesPage })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then((module) => ({ default: module.GalleryPage })));
const PlanJourneyPage = lazy(() => import('./pages/PlanJourneyPage').then((module) => ({ default: module.PlanJourneyPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })));
const ChaitanyaRajSinghPage = lazy(() => import('./pages/ChaitanyaRajSinghPage').then((module) => ({ default: module.ChaitanyaRajSinghPage })));

/* ── Title & SEO Manager ─────────────────────────────────── */
const PageTitleManager: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = getSeoForPath(pathname);
    const resolved = page || {
      title: 'Page Not Found | Shri Radha Vallabh',
      description: 'The requested page could not be found.',
      image: '/assets/optimized/laxminath-hero.webp',
      imageAlt: 'Shri Radha Vallabh Heritage & Journeys',
    };
    document.title = resolved.title;
    document.documentElement.lang = 'en-IN';

    const upsertMeta = (selector: string, attributes: Record<string, string>) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
    };

    const canonicalUrl = page ? absoluteSeoUrl(page.path) : absoluteSeoUrl(pathname);
    const imageUrl = absoluteSeoUrl(resolved.image);

    upsertMeta('meta[name="title"]', { name: 'title', content: resolved.title });
    upsertMeta('meta[name="description"]', { name: 'description', content: resolved.description });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: page ? 'index, follow, max-image-preview:large' : 'noindex, follow' });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: resolved.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: resolved.description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl });
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: resolved.imageAlt });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: resolved.title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: resolved.description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl });
    upsertMeta('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt', content: resolved.imageAlt });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!page) {
      canonical?.remove();
    } else if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    if (page && canonical) canonical.href = canonicalUrl;

    let schema = document.head.querySelector<HTMLScriptElement>('script#route-json-ld');
    if (!page) {
      schema?.remove();
      return;
    }
    if (!schema) {
      schema = document.createElement('script');
      schema.id = 'route-json-ld';
      schema.type = 'application/ld+json';
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify(buildStructuredData(page));
  }, [pathname]);

  return null;
};

export const AppContent: React.FC = () => {
  const [introCompleted, setIntroCompleted] = useState<boolean>(() => {
    // Skip intro if user is directly visiting a deep route like /jaisalmer or /jaisalmer/history
    return window.location.pathname !== '/';
  });

  return (
    <div
      className="min-h-screen bg-[#050709] text-[#F5EFE3] flex flex-col font-sans selection:bg-[#C9A24A]/30 selection:text-[#F5EFE3]"
      style={{ '--color-brand-gold': '#C9A24A' } as React.CSSProperties}
    >
      <ScrollToTop />
      <PageTitleManager />

      {/* Cinematic Logo Intro (Only runs on initial landing on homepage) */}
      {!introCompleted && (
        <LogoIntro onComplete={() => setIntroCompleted(true)} />
      )}

      {/* Global Luxury Header */}
      <Navbar />

      {/* Dedicated Multi-Page Routing */}
      <div className="flex-1 w-full">
        <Suspense fallback={<div className="min-h-screen bg-[#050709]" aria-label="Loading page" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/journeys" element={<JourneysPage />} />
          
          {/* Jaisalmer Portal & Sub-Routes */}
          <Route path="/jaisalmer" element={<JaisalmerPage />} />
          <Route path="/jaisalmer/explore" element={<JaisalmerExplorePage />} />
          <Route path="/jaisalmer/safari-adventure" element={<JaisalmerSafariPage />} />
          <Route path="/jaisalmer/history" element={<JaisalmerHistoryPage />} />
          <Route path="/jaisalmer/riyasat" element={<JaisalmerRiyasatPage />} />
          <Route path="/jaisalmer/riyasat/chaitanya-raj-singh" element={<ChaitanyaRajSinghPage />} />
          <Route path="/jaisalmer/places/:slug" element={<PlaceDetailPage />} />

          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<Navigate to="/stories" replace />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/plan-journey" element={<PlanJourneyPage />} />
          
          {/* 404 Wildcard Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
      </div>

      {/* Global Luxury Footer */}
      <Footer />

      {/* Global Floating WhatsApp Contact */}
      <WhatsAppFloatingButton />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
