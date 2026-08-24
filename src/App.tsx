import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route, useLocation } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { LogoIntro } from './components/LogoIntro';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

/* ── Dedicated Pages ─────────────────────────────────────── */
import { JAISALMER_PLACES } from './data/jaisalmerPlaces';

const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })));
const JourneysPage = lazy(() => import('./pages/JourneysPage').then((module) => ({ default: module.JourneysPage })));
const JaisalmerPage = lazy(() => import('./pages/JaisalmerPage').then((module) => ({ default: module.JaisalmerPage })));
const JaisalmerExplorePage = lazy(() => import('./pages/JaisalmerExplorePage').then((module) => ({ default: module.JaisalmerExplorePage })));
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

const PRODUCTION_ORIGIN = 'https://shri-radha-vallabh.vercel.app';

/* ── Title & SEO Manager ─────────────────────────────────── */
const PageTitleManager: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata: Record<string, { title: string; description: string }> = {
      '/': {
        title: 'Shri Radha Vallabh | Heritage & Spiritual Journeys',
        description: 'Curated spiritual, cultural and luxury heritage journeys across India with thoughtful planning and personal coordination.',
      },
      '/journeys': {
        title: 'Spiritual & Heritage Journeys Across India | Shri Radha Vallabh',
        description: 'Explore curated spiritual circuits, royal heritage trails and immersive cultural journeys across India.',
      },
      '/jaisalmer': {
        title: 'Jaisalmer Travel & Heritage Journey | Shri Radha Vallabh',
        description: 'Discover Jaisalmer Fort, sacred temples, carved havelis and the Thar Desert through a cinematic, curated heritage journey.',
      },
      '/jaisalmer/explore': {
        title: 'Explore Jaisalmer | Forts, Havelis, Temples & Desert | Shri Radha Vallabh',
        description: 'Explore Jaisalmer across six editorial chapters covering Sonar Qila, royal cenotaphs, sacred temples, havelis and desert landscapes.',
      },
      '/jaisalmer/history': {
        title: 'History of Jaisalmer | Bhati Rajputs, Sonar Qila & Royal Heritage',
        description: 'Follow Jaisalmer from its Bhati foundations and Silk Route prominence to princely-state history and living heritage today.',
      },
      '/jaisalmer/riyasat': {
        title: 'Jaisalmer Riyasat | Bhati Royal Heritage & Maharawals',
        description: 'Learn about Jaisalmer Riyasat, the Bhati dynasty, its Maharawals and the present cultural role of the royal house.',
      },
      '/jaisalmer/riyasat/chaitanya-raj-singh': {
        title: 'Maharawal Chaitanya Raj Singh | Royal House of Jaisalmer',
        description: 'A photographic profile of Maharawal Chaitanya Raj Singh, titular Maharawal and current head of Jaisalmer\'s royal house.',
      },
      '/packages': { title: 'Yatra & Heritage Travel Packages | Shri Radha Vallabh', description: 'Browse curated spiritual and heritage travel packages with private planning support.' },
      '/about': { title: 'About Shri Radha Vallabh | Heritage & Journeys', description: 'Meet Shri Radha Vallabh Heritage & Journeys and our approach to thoughtful cultural travel.' },
      '/stories': { title: 'Travel Reflections & Experiences | Shri Radha Vallabh', description: 'Read stories and reflections from spiritual, cultural and heritage journeys across India.' },
      '/gallery': { title: 'Visual Gallery & Heritage Moments | Shri Radha Vallabh', description: 'Explore a visual archive of sacred places, royal heritage and memorable journeys.' },
      '/plan-journey': { title: 'Plan Your Custom Journey | Shri Radha Vallabh', description: 'Share your travel preferences and receive a tailored journey plan with direct WhatsApp coordination.' },
    };

    let page: { title: string; description: string } | undefined = metadata[pathname];
    if (pathname.startsWith('/jaisalmer/places/')) {
      const slug = pathname.replace('/jaisalmer/places/', '');
      const place = JAISALMER_PLACES.find((item) => item.slug === slug);
      page = place
        ? { title: `${place.name} | Jaisalmer Heritage Guide`, description: place.shortDescription }
        : undefined;
    }

    const resolved = page || {
      title: 'Page Not Found | Shri Radha Vallabh',
      description: 'The requested page could not be found.',
    };
    document.title = resolved.title;

    const upsertMeta = (selector: string, attributes: Record<string, string>) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
    };

    const canonicalPath = pathname === '/experience' ? '/stories' : pathname;
    const canonicalUrl = `${PRODUCTION_ORIGIN}${canonicalPath}`;

    upsertMeta('meta[name="title"]', { name: 'title', content: resolved.title });
    upsertMeta('meta[name="description"]', { name: 'description', content: resolved.description });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: resolved.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: resolved.description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: resolved.title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: resolved.description });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
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
