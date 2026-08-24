import React, { useCallback, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '../data/siteConfig';

interface LogoIntroProps {
  onComplete?: () => void;
}

export const LogoIntro: React.FC<LogoIntroProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'video' | 'handoff' | 'complete'>('video');
  const [targetCoords, setTargetCoords] = useState<{ x: number; y: number; scale: number }>({
    x: 0,
    y: 0,
    scale: 0.3,
  });
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const initialLogoRef = useRef<HTMLDivElement>(null);

  // Measure target navbar logo position dynamically for seamless travel animation
  const calculateTargetCoordinates = useCallback(() => {
    const navbarTarget = document.getElementById('navbar-logo-target');
    if (navbarTarget) {
      const rect = navbarTarget.getBoundingClientRect();
      const startCenterX = window.innerWidth / 2;
      const startCenterY = window.innerHeight / 2;
      
      const targetCenterX = rect.left + rect.width / 2;
      const targetCenterY = rect.top + rect.height / 2;

      const deltaX = targetCenterX - startCenterX;
      const deltaY = targetCenterY - startCenterY;

      // Calculate relative scale down from center logo size (approx 160px) to navbar logo size (approx 48px)
      const initialSize = 160;
      const scale = Math.max(0.2, rect.height / initialSize);

      setTargetCoords({ x: deltaX, y: deltaY, scale });
    }
  }, []);

  const triggerHandoff = useCallback(() => {
    calculateTargetCoordinates();
    setStage((currentStage) => currentStage === 'video' ? 'handoff' : currentStage);
  }, [calculateTargetCoordinates]);

  useEffect(() => {
    const measurementFrame = window.requestAnimationFrame(calculateTargetCoordinates);
    window.addEventListener('resize', calculateTargetCoordinates);
    
    // Safety fallback: if video doesn't end or autoplay fails within 6.5s, proceed automatically
    const safetyTimer = setTimeout(() => {
      triggerHandoff();
    }, 6500);

    return () => {
      window.cancelAnimationFrame(measurementFrame);
      window.removeEventListener('resize', calculateTargetCoordinates);
      clearTimeout(safetyTimer);
    };
  }, [calculateTargetCoordinates, triggerHandoff]);

  const handleVideoTimeUpdate = () => {
    if (!videoRef.current) return;
    // Trigger logo handoff near the end of video (e.g. around 6.2 seconds out of 7.5s)
    if (videoRef.current.currentTime > 5.8 && stage === 'video') {
      triggerHandoff();
    }
  };

  const handleComplete = () => {
    setStage('complete');
    if (onComplete) onComplete();
  };

  if (stage === 'complete') {
    return null;
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 pointer-events-none select-none">
        
        {/* Dark Background Overlay (Fades out during handoff to reveal homepage underneath) */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: stage === 'handoff' ? 0 : 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-[#080B10] pointer-events-auto"
        />

        {/* Video Layer (Plays SRV Reassembly Video Project 4) */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: stage === 'handoff' ? 0 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-auto overflow-hidden"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            poster="/assets/optimized/srv-intro-poster.webp"
            width={720}
            height={1280}
            onTimeUpdate={handleVideoTimeUpdate}
            onEnded={triggerHandoff}
            onError={triggerHandoff}
            className="w-full h-full object-contain max-w-5xl max-h-[90vh]"
          >
            <source
              media="(max-width: 767px)"
              src="/assets/optimized/srv-reassembly-mobile.mp4"
              type="video/mp4"
            />
            <source src="/assets/srv-reassembly.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Traveling & Scaling Logo Element (Transitions seamlessly from Center to Navbar Position) */}
        {stage === 'handoff' && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              ref={initialLogoRef}
              initial={{ x: 0, y: 0, scale: 1, opacity: 0 }}
              animate={{
                x: targetCoords.x,
                y: targetCoords.y,
                scale: targetCoords.scale,
                opacity: [0, 1, 1, 0.9, 0],
              }}
              transition={{
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              onAnimationComplete={handleComplete}
              className="flex items-center gap-3 bg-[#0B0E14] border-2 border-[#D4AF37] p-2 rounded-full shadow-2xl gold-glow"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-[#0B0E14] p-0.5 border border-[#D4AF37]/50 shrink-0">
                <img
                  src={SITE_CONFIG.logoUrl}
                  alt={SITE_CONFIG.brandName}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col pr-3 text-left">
                <span className="font-serif text-sm font-bold tracking-widest text-[#F5EFE6] whitespace-nowrap">
                  {SITE_CONFIG.brandName}
                </span>
                <span className="text-[8px] uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">
                  HERITAGE & JOURNEYS
                </span>
              </div>
            </motion.div>

          </div>
        )}

        {/* Subtle Skip Option */}
        {stage === 'video' && (
          <div className="absolute bottom-8 right-8 z-50 pointer-events-auto">
            <button
              onClick={triggerHandoff}
              className="px-5 py-2.5 rounded-full bg-[#0B0E14]/80 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#080B10] border border-[#D4AF37]/40 font-bold text-[11px] uppercase tracking-widest transition-all duration-300 shadow-2xl cursor-pointer backdrop-blur-md"
            >
              Skip Intro →
            </button>
          </div>
        )}

      </div>
    </AnimatePresence>
  );
};
