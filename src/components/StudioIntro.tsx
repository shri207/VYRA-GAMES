import React from 'react';
import { Gamepad2, Palette, Users } from 'lucide-react';

export const StudioIntro: React.FC = () => {
  const highlights = [
    {
      icon: Gamepad2,
      title: 'Creative Game Design',
      description: 'Crafting responsive combat mechanics, rewarding player interactions, and high-replayability challenges in Godot 2D.',
    },
    {
      icon: Palette,
      title: 'Distinctive Visual Worlds',
      description: 'Drawing inspiration from South Indian architectural majesty, street vibrancy, and expressive character illustration.',
    },
    {
      icon: Users,
      title: 'Player-Focused Experiences',
      description: 'Building games that entertain and resonate, shaped through community playtests and continuous iteration.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#17130F] text-[#F6ECDD] border-t border-[#79542D]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-cinzel font-semibold tracking-[0.25em] text-[#C99A45] uppercase">
              THE STUDIO BEHIND THE STORIES
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6ECDD] leading-tight text-balance">
              Rooted in Stories. <br />
              <span className="text-[#E6C99A]">Built for Play.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#F6ECDD]/80 leading-relaxed font-normal">
              <p>
                Vyra Games is an independent game development studio from Tamil Nadu, India. We bring creative ideas to life through engaging gameplay, expressive characters, and distinctive visual experiences.
              </p>
              <p>
                Inspired by the stories and culture around us, we are building games that entertain players while creating worlds worth remembering.
              </p>
            </div>

            {/* 3 Compact Highlights (Anti-slop: clean unboxed styling, no pills) */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#79542D]/30">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="space-y-2">
                    <div className="w-10 h-10 rounded-md bg-[#211C16] border border-[#C99A45]/30 flex items-center justify-center text-[#C99A45]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-cinzel text-sm font-bold text-[#F6ECDD] tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#F6ECDD]/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Architectural Temple & Studio Heritage Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#C99A45]/30 bg-[#211C16] shadow-2xl p-2">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#1D1711] flex items-center justify-center">
                {/* SVG Visual Representation of Dravidian Temple Towers & River Sunset */}
                <svg
                  viewBox="0 0 500 625"
                  className="w-full h-full object-cover"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="introSky" x1="50%" y1="0%" x2="50%" y2="100%">
                      <stop offset="0%" stop-color="#1F150D" />
                      <stop offset="40%" stop-color="#6E4B1F" />
                      <stop offset="70%" stop-color="#C99A45" />
                      <stop offset="100%" stop-color="#241910" />
                    </linearGradient>
                    <radialGradient id="introSun" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stop-color="#FFF2CE" />
                      <stop offset="50%" stop-color="#E2B258" />
                      <stop offset="100%" stop-color="#A47228" stop-opacity="0" />
                    </radialGradient>
                  </defs>

                  <rect width="500" height="625" fill="url(#introSky)" />
                  <circle cx="250" cy="220" r="140" fill="url(#introSun)" opacity="0.9" />

                  {/* Silhouetted Grand Gopuram */}
                  <g fill="#17120D">
                    <path d="M 120 450 L 135 390 L 148 390 L 153 340 L 165 340 L 170 295 L 180 295 L 184 255 L 192 255 L 196 225 L 204 225 L 208 200 L 216 200 L 220 180 L 228 180 L 232 165 L 235 165 L 235 150 L 238 150 L 238 165 L 241 165 L 245 180 L 253 180 L 257 200 L 265 200 L 269 225 L 277 225 L 281 255 L 289 255 L 293 295 L 303 295 L 308 340 L 320 340 L 325 390 L 338 390 L 353 450 Z" />
                    <rect x="150" y="340" width="173" height="6" fill="#3D2E20" opacity="0.6" />
                    <rect x="168" y="295" width="137" height="5" fill="#3D2E20" opacity="0.6" />
                    <rect x="183" y="255" width="107" height="5" fill="#3D2E20" opacity="0.6" />
                    <circle cx="236.5" cy="148" r="3" fill="#C99A45" />
                  </g>

                  {/* River Reflection & Stone Steps */}
                  <rect x="0" y="450" width="500" height="175" fill="#150F0A" />
                  <ellipse cx="250" cy="470" rx="140" ry="6" fill="#C99A45" opacity="0.6" />
                  <ellipse cx="250" cy="495" rx="180" ry="7" fill="#E6C99A" opacity="0.4" />
                  <ellipse cx="250" cy="525" rx="120" ry="5" fill="#79542D" opacity="0.5" />

                  {/* Overlay Vignette */}
                  <rect width="500" height="625" fill="none" stroke="#C99A45" stroke-width="2" opacity="0.4" />
                </svg>

                {/* Subtle Card Caption at Bottom */}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#17130F]/90 backdrop-blur-md rounded-lg border border-[#C99A45]/30">
                  <div className="text-[11px] font-cinzel tracking-wider text-[#C99A45] font-semibold">
                    TAMIL NADU, INDIA
                  </div>
                  <div className="text-xs text-[#F6ECDD]/80">
                    Ancient Gopurams · Living Heritage · Creative Game Development
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
