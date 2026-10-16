import React from 'react';
import { Landmark, Compass, Sparkles } from 'lucide-react';

export const TamilHeritageSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#1B1510] text-[#F6ECDD] border-t border-[#79542D]/25 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Artwork: Heritage Stone Relief Motif */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="p-3 rounded-2xl bg-[#211C16] border border-[#C99A45]/30 shadow-2xl">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#17120D] relative flex items-center justify-center p-6 text-center">
                {/* SVG Decorative Dravidian Relief & River Horizon */}
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-full object-contain"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient id="heritageSun" cx="50%" cy="40%" r="50%">
                      <stop offset="0%" stop-color="#FFF2CE" />
                      <stop offset="50%" stop-color="#E2B258" />
                      <stop offset="100%" stop-color="#734B19" stop-opacity="0" />
                    </radialGradient>
                  </defs>

                  <rect width="400" height="300" fill="#1A130D" />
                  <circle cx="200" cy="110" r="85" fill="url(#heritageSun)" opacity="0.8" />

                  {/* Silhouetted Gopuram Skyline */}
                  <g fill="#120D08">
                    <path d="M 60 210 L 70 170 L 80 170 L 84 140 L 92 140 L 96 115 L 102 115 L 104 95 L 106 95 L 106 80 L 108 80 L 108 95 L 110 95 L 112 115 L 118 115 L 122 140 L 130 140 L 134 170 L 144 170 L 154 210 Z" />
                    <path d="M 240 210 L 250 160 L 260 160 L 265 130 L 275 130 L 280 100 L 285 100 L 287 75 L 289 75 L 289 60 L 291 60 L 291 75 L 293 75 L 295 100 L 300 100 L 305 130 L 315 130 L 320 160 L 330 160 L 340 210 Z" />
                  </g>

                  {/* Sacred River Water */}
                  <rect x="0" y="210" width="400" height="90" fill="#150E09" />
                  <ellipse cx="200" cy="225" rx="120" ry="4" fill="#C99A45" opacity="0.5" />
                  <ellipse cx="200" cy="245" rx="160" ry="5" fill="#E6C99A" opacity="0.3" />

                  {/* Golden Border Inset */}
                  <rect x="10" y="10" width="380" height="280" fill="none" stroke="#C99A45" stroke-width="1.5" opacity="0.4" />
                </svg>

                <div className="absolute inset-x-6 bottom-4 p-2.5 rounded bg-[#17130F]/90 backdrop-blur-sm border border-[#79542D]/50 text-center">
                  <span className="text-[11px] font-cinzel tracking-widest text-[#C99A45] font-semibold uppercase block">
                    Tamil Visual Heritage
                  </span>
                  <span className="text-[10px] text-[#F6ECDD]/70">
                    Timeless Gopuram Architecture · Kaveri River Reflections
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="text-xs font-cinzel font-semibold tracking-[0.25em] text-[#C99A45] uppercase">
              TAMIL HERITAGE & CREATIVE IDENTITY
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6ECDD] leading-tight">
              Inspired by Our Roots. <br />
              <span className="text-[#E6C99A]">Created for the World.</span>
            </h2>

            <div className="space-y-4 text-base text-[#F6ECDD]/80 leading-relaxed font-normal">
              <p>
                Stories connect generations. From the architecture and artistry of Tamil Nadu to the imaginative worlds of modern gaming, inspiration can come from everywhere.
              </p>
              <p>
                At Vyra Games, our visual identity celebrates the enduring relationship between culture, creativity, and storytelling. We honor the grandeur of ancient Dravidian stone carving, dramatic golden-hour sunsets, and the raw kinetic energy of Tamil cinema and street brawls.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#79542D]/30">
              <div className="flex items-start gap-3">
                <Landmark className="w-5 h-5 text-[#C99A45] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-[#F6ECDD] uppercase tracking-wider">
                    Architectural Majesty
                  </h4>
                  <p className="text-xs text-[#F6ECDD]/70 mt-0.5">
                    Gopuram silhouettes and stone textures integrated into game visual design.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-[#C99A45] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-[#F6ECDD] uppercase tracking-wider">
                    Universal Storytelling
                  </h4>
                  <p className="text-xs text-[#F6ECDD]/70 mt-0.5">
                    Authentic local stories crafted to resonate with global gaming audiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
