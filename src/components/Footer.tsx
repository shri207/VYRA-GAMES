import React from 'react';
import { VyraLogo } from './VyraLogo.tsx';
import { NavTab } from './Navbar.tsx';
import { ExternalLink, Mail, ShieldCheck } from 'lucide-react';
import { analytics } from '../utils/analytics.ts';

interface FooterProps {
  onNavigate: (tab: NavTab) => void;
  onOpenPrivacyModal?: () => void;
  onOpenTermsModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacyModal,
  onOpenTermsModal,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#120D09] text-[#F6ECDD] border-t border-[#79542D]/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#79542D]/30">
          {/* Column 1: Studio Identity & Official Logo */}
          <div className="md:col-span-5 space-y-4">
            <VyraLogo variant="full" onClick={() => onNavigate('home')} />
            <p className="text-xs sm:text-sm text-[#F6ECDD]/75 leading-relaxed max-w-sm">
              Vyra Games is an independent game development studio from Tamil Nadu, India. We craft engaging games with rich storytelling, distinctive visual identity, and responsive gameplay powered by Godot.
            </p>
            <div className="text-xs font-cinzel text-[#C99A45] tracking-widest font-semibold pt-1">
              "STORIES PLAY FOREVER"
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-cinzel text-xs font-bold tracking-[0.2em] text-[#C99A45] uppercase">
              STUDIO NAVIGATION
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-[#F6ECDD]/80 hover:text-[#C99A45] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('games')}
                  className="text-[#F6ECDD]/80 hover:text-[#C99A45] transition-colors"
                >
                  Our Games
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-[#F6ECDD]/80 hover:text-[#C99A45] transition-colors"
                >
                  About Vyra
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('devlog')}
                  className="text-[#F6ECDD]/80 hover:text-[#C99A45] transition-colors"
                >
                  Devlog Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-[#F6ECDD]/80 hover:text-[#C99A45] transition-colors"
                >
                  Contact & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Project & Technology */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-cinzel text-xs font-bold tracking-[0.2em] text-[#C99A45] uppercase">
              CURRENT PROJECT & TECH
            </h4>
            <div className="p-3 rounded-lg bg-[#1A140F] border border-[#79542D]/40 space-y-2">
              <span className="text-xs font-cinzel font-bold text-[#F6ECDD] block">
                CM Vijay – Street Battle
              </span>
              <p className="text-xs text-[#F6ECDD]/70">
                2D beat 'em up action rooted in Tamil pop culture. Engineered with the Godot Engine for Android mobile.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#C99A45]">
                Status: In Development · Closed Playtest
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F6ECDD]/60">
          <div>
            © {currentYear} Vyra Games. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacyModal}
              className="hover:text-[#C99A45] transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-[#79542D]">·</span>
            <button
              onClick={onOpenTermsModal}
              className="hover:text-[#C99A45] transition-colors"
            >
              Terms of Use
            </button>
            <span className="text-[#79542D]">·</span>
            <span className="text-[#E6C99A]/80">
              Tamil Nadu, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
