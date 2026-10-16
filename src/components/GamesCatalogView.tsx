import React from 'react';
import { CM_VIJAY_GAME } from '../data/gameConfig.ts';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import { analytics } from '../utils/analytics.ts';

interface GamesCatalogViewProps {
  onSelectGame: (gameId: string) => void;
  onOpenWaitlist: () => void;
}

export const GamesCatalogView: React.FC<GamesCatalogViewProps> = ({
  onSelectGame,
  onOpenWaitlist,
}) => {
  return (
    <div className="py-16 sm:py-24 bg-[#17130F] text-[#F6ECDD] min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Title */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-cinzel font-semibold tracking-[0.25em] text-[#C99A45] uppercase">
            VYRA GAMES PORTFOLIO
          </div>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F6ECDD]">
            Worlds Waiting to Be Explored.
          </h1>
          <p className="text-base sm:text-lg text-[#F6ECDD]/80 leading-relaxed">
            Every game begins with an idea. Discover the projects we're bringing to life with distinctive visual worlds and engaging gameplay.
          </p>
        </div>

        {/* Featured Game Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Card: CM Vijay – Street Battle */}
          <div className="lg:col-span-8 rounded-2xl bg-[#211C16] border border-[#C99A45]/40 overflow-hidden shadow-2xl flex flex-col justify-between group">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 p-6 sm:p-8">
              <div className="sm:col-span-5 flex items-center justify-center">
                <div className="relative w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden border-2 border-[#C99A45]/40 shadow-xl bg-[#17120D]">
                  <img
                    src={CM_VIJAY_GAME.coverImage}
                    alt={CM_VIJAY_GAME.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="sm:col-span-7 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#C99A45] font-cinzel font-semibold mb-1">
                    <span>{CM_VIJAY_GAME.genre}</span>
                  </div>
                  <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F6ECDD] tracking-wide">
                    {CM_VIJAY_GAME.title}
                  </h2>
                  <div className="text-xs font-mono text-[#E6C99A]/80 mt-1">
                    Platform: {CM_VIJAY_GAME.platforms[0]}
                  </div>
                  <p className="text-xs sm:text-sm text-[#F6ECDD]/75 leading-relaxed mt-3">
                    {CM_VIJAY_GAME.description}
                  </p>
                </div>

                <div className="pt-2 text-xs font-mono text-[#C99A45]">
                  Status: {CM_VIJAY_GAME.statusBadge}
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-8 py-4 bg-[#1B1510] border-t border-[#79542D]/40 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => {
                  analytics.track('games_catalog_preregister_click');
                  onOpenWaitlist();
                }}
                className="px-5 py-2.5 text-xs font-cinzel font-bold tracking-wider text-[#17130F] bg-[#C99A45] hover:bg-[#E6C99A] active:scale-95 rounded-md transition-all shadow-md"
              >
                PRE-REGISTER
              </button>

              <button
                onClick={() => {
                  analytics.track('games_catalog_view_details_click');
                  onSelectGame(CM_VIJAY_GAME.id);
                }}
                className="inline-flex items-center gap-2 text-xs font-cinzel font-semibold tracking-wider text-[#F6ECDD] hover:text-[#C99A45] transition-colors"
              >
                <span>EXPLORE PROJECT SPECS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tasteful Upcoming Projects Placeholder Card */}
          <div className="lg:col-span-4 rounded-2xl bg-[#1B1510] border border-[#79542D]/40 p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-md bg-[#211C16] border border-[#C99A45]/30 flex items-center justify-center text-[#C99A45]">
                <Compass className="w-5 h-5" />
              </div>
              <div className="text-xs font-cinzel tracking-widest text-[#C99A45] uppercase font-semibold">
                FUTURE PROJECTS
              </div>
              <h3 className="font-cinzel text-xl font-bold text-[#F6ECDD]">
                More Stories in Incubation
              </h3>
              <p className="text-xs sm:text-sm text-[#F6ECDD]/70 leading-relaxed">
                Beyond street brawlers, Vyra Games is prototyping new ideas exploring Tamil mythological folklore, historical action, and narrative-rich puzzle adventures.
              </p>
            </div>

            <div className="pt-6 border-t border-[#79542D]/30">
              <span className="text-[11px] font-mono text-[#E6C99A]/60 block">
                Announcements will be published in our studio devlog as prototypes reach milestone playability.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
