import React from 'react';
import { VyraLogo } from './VyraLogo.tsx';
import { ChevronDown, Sparkles, Sword } from 'lucide-react';
import { analytics } from '../utils/analytics.ts';

interface HeroSectionProps {
  onExploreGames: () => void;
  onDiscoverStudio: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreGames,
  onDiscoverStudio,
}) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#17130F] text-[#F6ECDD]">
      {/* Background Graphic Atmosphere: Temple Silhouettes & Golden Hour River */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep ambient radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#C99A45]/15 rounded-full blur-[140px]" />
        
        {/* Subtle SVG Temple Silhouette Horizon Overlay */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[320px] opacity-25 object-cover"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* River Water Surface */}
          <rect y="220" width="1440" height="100" fill="#0E0A07" />
          <ellipse cx="720" cy="240" rx="400" ry="8" fill="#C99A45" opacity="0.3" />
          <ellipse cx="720" cy="270" rx="600" ry="6" fill="#E6C99A" opacity="0.15" />
          {/* Bridge */}
          <rect y="210" width="1440" height="12" fill="#1C140D" />
          {/* Gopuram Silhouettes */}
          <path d="M 80 210 L 95 140 L 120 140 L 130 90 L 145 90 L 155 40 L 160 40 L 160 20 L 163 20 L 163 40 L 168 40 L 178 90 L 193 90 L 203 140 L 228 140 L 243 210 Z" fill="#120D08" />
          <path d="M 1200 210 L 1215 150 L 1235 150 L 1245 100 L 1260 100 L 1270 55 L 1274 55 L 1274 35 L 1276 35 L 1276 55 L 1280 55 L 1290 100 L 1305 100 L 1315 150 L 1335 150 L 1350 210 Z" fill="#120D08" />
        </svg>

        {/* Cinematic gradient overlays for contrast & accessibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#17130F] via-transparent to-[#17130F]/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col items-center text-center">
        {/* Master Brand Logo Hero Presentation */}
        <div className="mb-10 w-full flex justify-center">
          <VyraLogo variant="hero" />
        </div>

        {/* Small Eyebrow Marker */}
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#C99A45]/30 bg-[#211C16]/80 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C99A45]" />
          <span className="text-xs font-cinzel font-semibold tracking-[0.25em] text-[#E6C99A] uppercase">
            Independent Game Studio · Tamil Nadu, India
          </span>
        </div>

        {/* Main Hero Headline */}
        <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wider text-[#F6ECDD] max-w-4xl leading-[1.15] mb-6 drop-shadow-md">
          WHERE STORIES <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#E6C99A] via-[#C99A45] to-[#E6C99A] bg-clip-text text-transparent">
            BECOME LEGENDS.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl text-[#F6ECDD]/85 max-w-2xl font-normal leading-relaxed mb-10 tracking-wide">
          We create immersive gaming experiences inspired by imagination, culture, and the timeless power of storytelling.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={() => {
              analytics.track('hero_explore_games_click');
              onExploreGames();
            }}
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-cinzel font-bold tracking-[0.2em] text-[#17130F] bg-gradient-to-r from-[#C99A45] via-[#E6C99A] to-[#C99A45] hover:brightness-110 active:scale-95 transition-all rounded-md shadow-xl shadow-[#C99A45]/20 border border-[#FFF2D4]/40"
          >
            EXPLORE OUR GAMES
          </button>

          <button
            onClick={() => {
              analytics.track('hero_discover_vyra_click');
              onDiscoverStudio();
            }}
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-cinzel font-semibold tracking-[0.2em] text-[#F6ECDD] bg-[#211C16]/90 hover:bg-[#2E271F] hover:border-[#C99A45] active:scale-95 transition-all rounded-md border border-[#C99A45]/40 backdrop-blur-sm"
          >
            DISCOVER VYRA
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center gap-2 text-[#C99A45]/70 text-xs tracking-widest font-cinzel">
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#C99A45]" />
        </div>
      </div>
    </section>
  );
};
