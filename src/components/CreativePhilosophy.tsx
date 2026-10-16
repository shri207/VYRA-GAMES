import React from 'react';
import { STUDIO_PHILOSOPHY } from '../data/gameConfig.ts';
import { BookOpen, Gamepad, Sparkles } from 'lucide-react';

export const CreativePhilosophy: React.FC = () => {
  const icons = [BookOpen, Gamepad, Sparkles];

  return (
    <section className="py-20 sm:py-28 bg-[#1B1510] text-[#F6ECDD] border-t border-[#79542D]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-cinzel font-semibold tracking-[0.25em] text-[#C99A45] uppercase">
            OUR CREATIVE PHILOSOPHY
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6ECDD]">
            More Than Games. <br />
            <span className="text-[#E6C99A]">Experiences That Stay With You.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {STUDIO_PHILOSOPHY.map((pillar, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={pillar.number}
                className="relative rounded-xl p-8 bg-[#211C16] border border-[#79542D]/40 hover:border-[#C99A45]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Human Editorial Numbering & Icon */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#79542D]/30">
                    <span className="font-cinzel text-3xl font-extrabold text-[#C99A45]/80 group-hover:text-[#C99A45] transition-colors">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-md bg-[#17130F] border border-[#C99A45]/30 flex items-center justify-center text-[#C99A45]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-cinzel text-xl font-bold text-[#F6ECDD] tracking-wider mb-3">
                    {pillar.title.toUpperCase()}
                  </h3>

                  <blockquote className="text-sm font-medium italic text-[#E6C99A] mb-4">
                    "{pillar.quote}"
                  </blockquote>

                  <p className="text-xs sm:text-sm text-[#F6ECDD]/75 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#79542D]/20 flex items-center gap-2">
                  <div className="w-6 h-0.5 bg-[#C99A45]/40 group-hover:w-12 transition-all duration-300" />
                  <span className="text-[10px] font-cinzel tracking-widest text-[#C99A45]/70 uppercase">
                    Vyra Principle
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
