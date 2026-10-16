import React from 'react';
import { Target, Eye, Landmark, Cpu, Sparkles } from 'lucide-react';
import { VyraLogo } from './VyraLogo.tsx';

export const AboutView: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-[#17130F] text-[#F6ECDD] min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-cinzel font-semibold tracking-[0.25em] text-[#C99A45] uppercase">
            ABOUT THE STUDIO
          </div>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F6ECDD]">
            Stories Play Forever.
          </h1>
          <p className="text-base sm:text-lg text-[#F6ECDD]/80 leading-relaxed">
            Vyra Games is an independent game development studio established in Tamil Nadu, India. We bring creative ideas to life through engaging gameplay, expressive characters, and distinctive visual experiences.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-[#211C16] border border-[#C99A45]/30 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-lg bg-[#17130F] border border-[#C99A45]/30 flex items-center justify-center text-[#C99A45]">
              <Target className="w-6 h-6" />
            </div>
            <div className="text-xs font-cinzel font-bold tracking-widest text-[#C99A45] uppercase">
              OUR MISSION
            </div>
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F6ECDD]">
              Bringing People Together Through Play
            </h2>
            <p className="text-sm sm:text-base text-[#F6ECDD]/80 leading-relaxed">
              "To create engaging, distinctive games that bring people together through play and storytelling."
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#211C16] border border-[#C99A45]/30 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-lg bg-[#17130F] border border-[#C99A45]/30 flex items-center justify-center text-[#C99A45]">
              <Eye className="w-6 h-6" />
            </div>
            <div className="text-xs font-cinzel font-bold tracking-widest text-[#C99A45] uppercase">
              OUR VISION
            </div>
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F6ECDD]">
              An Enduring Independent Studio
            </h2>
            <p className="text-sm sm:text-base text-[#F6ECDD]/80 leading-relaxed">
              "To grow Vyra Games into a recognizable independent game development studio known for creativity, quality, and memorable gaming experiences."
            </p>
          </div>
        </div>

        {/* Heritage & Technology Two-Column Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-[#79542D]/30">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-cinzel font-semibold tracking-wider text-[#C99A45]">
              <Landmark className="w-4 h-4" />
              <span>CULTURAL ANCHORS</span>
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F6ECDD]">
              Tamil Roots, Global Reach
            </h3>
            <div className="space-y-4 text-sm sm:text-base text-[#F6ECDD]/80 leading-relaxed">
              <p>
                From the timeless stone architecture of Thanjavur and Madurai gopurams to the infectious rhythmic celebrations of Chennai festivals, Tamil Nadu has always been a cradle of vibrant storytelling.
              </p>
              <p>
                At Vyra Games, we believe authentic cultural roots give games an unmistakable soul. By translating local character archetypes, street vitality, and classical Dravidian aesthetic sensibilities into contemporary 2D and action gameplay, we craft titles that are globally exciting and culturally grounded.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-cinzel font-semibold tracking-wider text-[#C99A45]">
              <Cpu className="w-4 h-4" />
              <span>TECHNICAL WORKFLOW</span>
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F6ECDD]">
              Engineered With Godot
            </h3>
            <div className="space-y-4 text-sm sm:text-base text-[#F6ECDD]/80 leading-relaxed">
              <p>
                Our engineering pipeline centers on the Godot Engine. Its clean node hierarchy, deterministic 2D physics engine, and flexible GDScript scripting enable rapid iteration on gameplay mechanics while keeping memory footprints low.
              </p>
              <p>
                This allows us to optimize our flagship titles like <em>CM Vijay – Street Battle</em> to achieve silky smooth 60 FPS performance on mid-range Android smartphones without sacrificing visual style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
