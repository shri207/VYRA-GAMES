import React, { useState } from 'react';
import { Shield, Sparkles, Compass } from 'lucide-react';

export const MascotSpotlight: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mask' | 'apparel' | 'vision'>('mask');

  return (
    <section className="py-20 sm:py-28 bg-[#1B1510] text-[#F6ECDD] border-t border-[#79542D]/25 relative overflow-hidden">
      {/* Background ambient sunset rays */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#C99A45]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-cinzel font-semibold tracking-[0.25em] text-[#C99A45] uppercase">
            STUDIO IDENTITY & CONCEPT LORE
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6ECDD]">
            The Guardian of Stories
          </h2>
          <p className="text-base text-[#F6ECDD]/80 leading-relaxed">
            A visual bridge between millennia of Tamil temple architecture and contemporary street-action culture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Mascot Artwork Container */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-[#C99A45]/40 bg-[#17130F] shadow-2xl p-2 group">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#1E1710]">
                <img
                  src="/images/vyra-mascot.svg"
                  alt="Vyra Games Official Studio Mascot - The Guardian of Stories"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="p-3 text-center">
                <span className="text-xs font-cinzel tracking-wider text-[#C99A45] font-semibold">
                  Official Studio Mascot Concept
                </span>
                <span className="text-[11px] text-[#F6ECDD]/60 block mt-0.5">
                  Vyra Games Tactical Streetwear & Sacred Gopuram Silhouette
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Universe Lore & Design Philosophy */}
          <div className="lg:col-span-6 space-y-8">
            {/* Interactive Concept Selector (Segmented controls) */}
            <div className="flex items-center gap-2 p-1.5 bg-[#211C16] border border-[#79542D]/40 rounded-lg">
              <button
                onClick={() => setActiveTab('mask')}
                className={`flex-1 py-2 px-3 text-xs font-cinzel font-semibold tracking-wider rounded-md transition-all ${
                  activeTab === 'mask'
                    ? 'bg-[#C99A45] text-[#17130F] shadow-md'
                    : 'text-[#F6ECDD]/70 hover:text-[#F6ECDD]'
                }`}
              >
                The Emblem Mask
              </button>
              <button
                onClick={() => setActiveTab('apparel')}
                className={`flex-1 py-2 px-3 text-xs font-cinzel font-semibold tracking-wider rounded-md transition-all ${
                  activeTab === 'apparel'
                    ? 'bg-[#C99A45] text-[#17130F] shadow-md'
                    : 'text-[#F6ECDD]/70 hover:text-[#F6ECDD]'
                }`}
              >
                Streetwear & Craft
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`flex-1 py-2 px-3 text-xs font-cinzel font-semibold tracking-wider rounded-md transition-all ${
                  activeTab === 'vision'
                    ? 'bg-[#C99A45] text-[#17130F] shadow-md'
                    : 'text-[#F6ECDD]/70 hover:text-[#F6ECDD]'
                }`}
              >
                Universe Vision
              </button>
            </div>

            {/* Tab 1: The Mask */}
            {activeTab === 'mask' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-3 text-[#C99A45]">
                  <Shield className="w-5 h-5 shrink-0" />
                  <h3 className="font-cinzel text-xl font-bold text-[#F6ECDD]">
                    Sculptural 'V' Visor & Gopuram Inset
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#F6ECDD]/80 leading-relaxed">
                  The signature metallic faceplate takes the geometry of the Vyra studio 'V'. Embedded within the left facet is a miniature perspective cutout of ancient temple towers rising over quiet river waters under the golden sun disk—symbolizing that every vision we construct looks outward through the lens of heritage.
                </p>
                <div className="p-4 rounded-lg bg-[#211C16] border border-[#79542D]/30 text-xs text-[#E6C99A] space-y-1">
                  <span className="font-semibold text-[#F6ECDD] block">Key Design Motifs:</span>
                  <p>• Razor beveled metallic right wing symbolizing precision game engineering.</p>
                  <p>• Temple gopuram silhouette aperture representing cultural memory.</p>
                </div>
              </div>
            )}

            {/* Tab 2: Apparel */}
            {activeTab === 'apparel' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-3 text-[#C99A45]">
                  <Sparkles className="w-5 h-5 shrink-0" />
                  <h3 className="font-cinzel text-xl font-bold text-[#F6ECDD]">
                    Modern Streetwear Meets Tamil Roots
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#F6ECDD]/80 leading-relaxed">
                  Dressed in dark tactical cargo trousers and an open utility hoodie emblazoned with the golden VYRA GAMES chest mark, the mascot captures the contemporary energy of youth in Chennai, Madurai, and Coimbatore who live between timeless traditions and modern gaming dreams.
                </p>
                <div className="p-4 rounded-lg bg-[#211C16] border border-[#79542D]/30 text-xs text-[#E6C99A] space-y-1">
                  <span className="font-semibold text-[#F6ECDD] block">Studio Gear Details:</span>
                  <p>• Gold hardware zippers and tactical straps calibrated for action mobility.</p>
                  <p>• Shoulder patch bearing the studio's triangular 'V' crest.</p>
                </div>
              </div>
            )}

            {/* Tab 3: Vision */}
            {activeTab === 'vision' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-3 text-[#C99A45]">
                  <Compass className="w-5 h-5 shrink-0" />
                  <h3 className="font-cinzel text-xl font-bold text-[#F6ECDD]">
                    Stories That Resonate Across Generations
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#F6ECDD]/80 leading-relaxed">
                  The mascot represents the creative soul of Vyra Games: curious, bold, and anchored in the enduring truth that great games survive time. Whether engineering high-octane 2D brawlers or building mythic narrative adventures, the studio stands at the confluence of ancient riverbanks and future interactive platforms.
                </p>
                <div className="p-4 rounded-lg bg-[#211C16] border border-[#79542D]/30 text-xs text-[#E6C99A] space-y-1">
                  <span className="font-semibold text-[#F6ECDD] block">Studio Tenet:</span>
                  <p>• "Stories Play Forever" — Crafted in Godot, grounded in Tamil pride, enjoyed worldwide.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
