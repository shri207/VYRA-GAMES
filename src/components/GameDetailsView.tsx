import React, { useState } from 'react';
import { CM_VIJAY_GAME } from '../data/gameConfig.ts';
import { ArrowLeft, Check, ShieldAlert, Cpu, HardDrive, Smartphone, Sparkles, Send } from 'lucide-react';
import { analytics } from '../utils/analytics.ts';

interface GameDetailsViewProps {
  onBack: () => void;
  onOpenWaitlist: () => void;
  onContactSupport: () => void;
}

export const GameDetailsView: React.FC<GameDetailsViewProps> = ({
  onBack,
  onOpenWaitlist,
  onContactSupport,
}) => {
  const [activeSkin, setActiveSkin] = useState(0);

  return (
    <div className="py-12 sm:py-20 bg-[#17130F] text-[#F6ECDD] min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Button */}
        <div>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-cinzel tracking-wider text-[#C99A45] hover:text-[#E6C99A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO ALL GAMES</span>
          </button>
        </div>

        {/* Hero Section of Game Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Cover */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md rounded-3xl overflow-hidden border-2 border-[#C99A45]/40 shadow-2xl bg-[#1A140F] p-3">
              <img
                src={CM_VIJAY_GAME.coverImage}
                alt={CM_VIJAY_GAME.title}
                className="w-full h-auto aspect-square rounded-2xl object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Status Card */}
            <div className="w-full max-w-md mt-6 p-4 rounded-xl bg-[#211C16] border border-[#79542D]/40 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#F6ECDD]/60">DEVELOPMENT STATUS:</span>
                <span className="text-[#C99A45] font-semibold">{CM_VIJAY_GAME.status}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#F6ECDD]/60">CURRENT STAGE:</span>
                <span className="text-[#E6C99A] font-semibold">Closed Alpha Waitlist</span>
              </div>
              <div className="pt-2 border-t border-[#79542D]/30">
                <button
                  onClick={() => {
                    analytics.track('game_details_preregister_click');
                    onOpenWaitlist();
                  }}
                  className="w-full py-3 text-xs font-cinzel font-bold tracking-widest text-[#17130F] bg-gradient-to-r from-[#C99A45] via-[#E6C99A] to-[#C99A45] hover:brightness-110 active:scale-95 transition-all rounded-md shadow-lg"
                >
                  PRE-REGISTER FOR PLAYTEST
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Verified Features, Engine Specs */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-cinzel font-semibold tracking-[0.25em] text-[#C99A45] uppercase">
                {CM_VIJAY_GAME.genre}
              </div>
              <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#F6ECDD] tracking-wide">
                {CM_VIJAY_GAME.title}
              </h1>
              <p className="text-sm font-medium text-[#E6C99A]">
                {CM_VIJAY_GAME.tagline}
              </p>
            </div>

            <div className="space-y-4 text-base text-[#F6ECDD]/80 leading-relaxed">
              <p>{CM_VIJAY_GAME.synopsis}</p>
              <p>
                Developed with Godot Engine 4, the game blends dynamic 2D skeletal animation with responsive touch gamepad feedback, featuring stylized cityscapes inspired by the vibrant thoroughfares of Tamil Nadu.
              </p>
            </div>

            {/* Character Outfits Preview */}
            <div className="space-y-4 pt-4 border-t border-[#79542D]/40">
              <h3 className="font-cinzel text-lg font-bold text-[#F6ECDD]">
                Character Outfits & Styling
              </h3>
              <div className="flex gap-2">
                {CM_VIJAY_GAME.characterSkins.map((skin, idx) => (
                  <button
                    key={skin.id}
                    onClick={() => setActiveSkin(idx)}
                    className={`px-4 py-2 text-xs font-cinzel tracking-wider rounded-md transition-all ${
                      activeSkin === idx
                        ? 'bg-[#C99A45] text-[#17130F] font-bold shadow-md'
                        : 'bg-[#211C16] text-[#F6ECDD]/70 hover:text-[#F6ECDD] border border-[#79542D]/40'
                    }`}
                  >
                    {skin.name}
                  </button>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-[#211C16] border border-[#79542D]/40 text-xs sm:text-sm text-[#F6ECDD]/80">
                <span className="text-[#C99A45] font-cinzel font-bold block mb-1">
                  Theme: {CM_VIJAY_GAME.characterSkins[activeSkin].theme}
                </span>
                <p>{CM_VIJAY_GAME.characterSkins[activeSkin].description}</p>
              </div>
            </div>

            {/* Verified Feature List */}
            <div className="space-y-4 pt-4 border-t border-[#79542D]/40">
              <h3 className="font-cinzel text-lg font-bold text-[#F6ECDD]">
                Verified Game Mechanics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CM_VIJAY_GAME.features.map((feature) => (
                  <div
                    key={feature.id}
                    className="p-3.5 rounded-lg bg-[#211C16] border border-[#79542D]/35 space-y-1"
                  >
                    <div className="flex items-center gap-2 text-xs font-cinzel font-bold text-[#F6ECDD]">
                      <Check className="w-4 h-4 text-[#C99A45] shrink-0" />
                      <span>{feature.title}</span>
                    </div>
                    <p className="text-xs text-[#F6ECDD]/70 leading-relaxed pl-6">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* System Requirements */}
            <div className="space-y-4 pt-4 border-t border-[#79542D]/40">
              <h3 className="font-cinzel text-lg font-bold text-[#F6ECDD]">
                Target System Requirements
              </h3>
              <div className="p-5 rounded-xl bg-[#1B1510] border border-[#79542D]/40 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-[#F6ECDD]/50 block">PLATFORM:</span>
                  <span className="text-[#F6ECDD] font-semibold">{CM_VIJAY_GAME.systemSpecs.platform}</span>
                </div>
                <div>
                  <span className="text-[#F6ECDD]/50 block">OS VERSION:</span>
                  <span className="text-[#F6ECDD] font-semibold">{CM_VIJAY_GAME.systemSpecs.osRequirement}</span>
                </div>
                <div>
                  <span className="text-[#F6ECDD]/50 block">MEMORY:</span>
                  <span className="text-[#F6ECDD] font-semibold">{CM_VIJAY_GAME.systemSpecs.ram}</span>
                </div>
                <div>
                  <span className="text-[#F6ECDD]/50 block">STORAGE:</span>
                  <span className="text-[#F6ECDD] font-semibold">{CM_VIJAY_GAME.systemSpecs.storage}</span>
                </div>
              </div>
            </div>

            {/* Need Help / Feedback */}
            <div className="pt-4 flex items-center justify-between text-xs text-[#F6ECDD]/70">
              <span>Have technical questions or feedback regarding the build?</span>
              <button
                onClick={onContactSupport}
                className="text-[#C99A45] hover:underline font-semibold"
              >
                Contact Studio Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
