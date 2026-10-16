import React from 'react';
import { CM_VIJAY_GAME } from '../data/gameConfig.ts';
import { Swords, Smartphone, Layers, Flame, ArrowRight } from 'lucide-react';
import { analytics } from '../utils/analytics.ts';

interface FeaturedGameProps {
  onExploreGame: () => void;
  onOpenWaitlist: () => void;
}

export const FeaturedGame: React.FC<FeaturedGameProps> = ({
  onExploreGame,
  onOpenWaitlist,
}) => {
  return (
    <section className="py-20 sm:py-28 bg-[#17130F] text-[#F6ECDD] border-t border-[#79542D]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-cinzel font-semibold tracking-[0.25em] text-[#C99A45] uppercase">
              {CM_VIJAY_GAME.eyebrow}
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6ECDD]">
              Enter the World of Street Battle.
            </h2>
            <p className="text-base text-[#F6ECDD]/80 leading-relaxed">
              {CM_VIJAY_GAME.description}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <span className="text-xs font-mono tabular-nums text-[#E6C99A] bg-[#211C16] border border-[#C99A45]/30 px-3 py-1.5 rounded-md">
              Target: Android 9.0+ · Godot 2D
            </span>
          </div>
        </div>

        {/* Featured Showcase Marquee Card */}
        <div className="rounded-2xl border border-[#C99A45]/40 bg-[#211C16] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Column: Game Cover Showcase */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-center items-center bg-[#1A140F] border-b lg:border-b-0 lg:border-r border-[#79542D]/30">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border-2 border-[#C99A45]/40 shadow-2xl shadow-black/80 group">
                <img
                  src={CM_VIJAY_GAME.coverImage}
                  alt={CM_VIJAY_GAME.title}
                  className="w-full h-auto aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Status Badge & Platform */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs">
                <span className="text-[#C99A45] font-semibold tracking-wider font-cinzel">
                  ● {CM_VIJAY_GAME.statusBadge}
                </span>
                <span className="text-[#F6ECDD]/40">·</span>
                <span className="text-[#F6ECDD]/70">
                  {CM_VIJAY_GAME.platforms[0]}
                </span>
              </div>
            </div>

            {/* Right Column: Game Features & Actions */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F6ECDD] tracking-wide mb-2">
                    {CM_VIJAY_GAME.title}
                  </h3>
                  <p className="text-xs font-cinzel text-[#C99A45] tracking-widest uppercase">
                    {CM_VIJAY_GAME.genre}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#F6ECDD]/80 leading-relaxed">
                  {CM_VIJAY_GAME.synopsis}
                </p>

                {/* Verified Implemented Feature Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[#17130F] border border-[#79542D]/30">
                    <Swords className="w-5 h-5 text-[#C99A45] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-cinzel font-bold text-[#F6ECDD]">
                        Hard-Hitting 2D Combat
                      </h4>
                      <p className="text-xs text-[#F6ECDD]/70 mt-0.5">
                        Satisfying combo chains, heavy knockdowns, and counter-strikes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[#17130F] border border-[#79542D]/30">
                    <Layers className="w-5 h-5 text-[#C99A45] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-cinzel font-bold text-[#F6ECDD]">
                        Thematic Character Outfits
                      </h4>
                      <p className="text-xs text-[#F6ECDD]/70 mt-0.5">
                        Signature White Kurta, Madurai Cargo, and Festival Veshti skins.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[#17130F] border border-[#79542D]/30">
                    <Flame className="w-5 h-5 text-[#C99A45] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-cinzel font-bold text-[#F6ECDD]">
                        Miniboss & Enforcer Fights
                      </h4>
                      <p className="text-xs text-[#F6ECDD]/70 mt-0.5">
                        Multi-phase street encounters with distinct patterns and weapons.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[#17130F] border border-[#79542D]/30">
                    <Smartphone className="w-5 h-5 text-[#C99A45] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-cinzel font-bold text-[#F6ECDD]">
                        Mobile-Tuned Controls
                      </h4>
                      <p className="text-xs text-[#F6ECDD]/70 mt-0.5">
                        Virtual arcade sticks engineered for 60fps responsiveness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#79542D]/30 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => {
                    analytics.track('featured_game_preregister_click');
                    onOpenWaitlist();
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 text-xs font-cinzel font-bold tracking-widest text-[#17130F] bg-gradient-to-r from-[#C99A45] via-[#E6C99A] to-[#C99A45] hover:brightness-110 active:scale-95 transition-all rounded-md shadow-lg shadow-[#C99A45]/20 border border-[#FFF2D4]/50"
                >
                  PRE-REGISTER PLAYTEST
                </button>

                <button
                  onClick={() => {
                    analytics.track('featured_game_explore_details_click');
                    onExploreGame();
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 text-xs font-cinzel font-semibold tracking-wider text-[#F6ECDD] hover:text-[#C99A45] hover:border-[#C99A45] active:scale-95 transition-colors border border-[#79542D]/60 rounded-md flex items-center justify-center gap-2"
                >
                  <span>GAME DETAILS & SPECS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
