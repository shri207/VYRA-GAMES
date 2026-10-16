import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { analytics } from '../utils/analytics.ts';

interface CallToActionProps {
  onExploreGames: () => void;
  onContactStudio: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  onExploreGames,
  onContactStudio,
}) => {
  return (
    <section className="py-24 sm:py-32 bg-[#17130F] text-[#F6ECDD] border-t border-[#79542D]/25 relative overflow-hidden text-center">
      {/* Golden ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C99A45]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <div className="inline-block text-xs font-cinzel font-semibold tracking-[0.25em] text-[#C99A45] uppercase">
          JOIN OUR JOURNEY
        </div>

        <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F6ECDD] leading-tight">
          Every Great Story <br />
          <span className="bg-gradient-to-r from-[#E6C99A] via-[#C99A45] to-[#E6C99A] bg-clip-text text-transparent">
            Begins Somewhere.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-[#F6ECDD]/80 max-w-xl mx-auto leading-relaxed">
          Explore our games, follow our journey, and discover what's coming next from Vyra Games.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={() => {
              analytics.track('cta_explore_games_click');
              onExploreGames();
            }}
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-cinzel font-bold tracking-[0.2em] text-[#17130F] bg-gradient-to-r from-[#C99A45] via-[#E6C99A] to-[#C99A45] hover:brightness-110 active:scale-95 transition-all rounded-md shadow-xl shadow-[#C99A45]/20 border border-[#FFF2D4]/50 flex items-center justify-center gap-2"
          >
            <span>EXPLORE OUR GAMES</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              analytics.track('cta_contact_studio_click');
              onContactStudio();
            }}
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-cinzel font-semibold tracking-[0.2em] text-[#F6ECDD] bg-[#211C16] hover:bg-[#2A231C] hover:border-[#C99A45] active:scale-95 transition-all rounded-md border border-[#C99A45]/40 flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4 text-[#C99A45]" />
            <span>GET IN TOUCH</span>
          </button>
        </div>
      </div>
    </section>
  );
};
