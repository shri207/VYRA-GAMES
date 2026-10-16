import React, { useState } from 'react';
import { VyraLogo } from './VyraLogo.tsx';
import { Menu, X, Sparkles } from 'lucide-react';
import { analytics } from '../utils/analytics.ts';

export type NavTab = 'home' | 'games' | 'about' | 'devlog' | 'contact';

interface NavbarProps {
  activeTab: NavTab;
  onNavigate: (tab: NavTab) => void;
  onOpenWaitlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onNavigate,
  onOpenWaitlist,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTabClick = (tab: NavTab) => {
    analytics.track('nav_click', { label: tab });
    onNavigate(tab);
    setMobileMenuOpen(false);
  };

  const navLinks: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'games', label: 'Our Games' },
    { id: 'about', label: 'About' },
    { id: 'devlog', label: 'Devlog' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#17130F]/90 backdrop-blur-md border-b border-[#C99A45]/25 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark & Official Emblem */}
        <div className="shrink-0">
          <VyraLogo variant="compact" onClick={() => handleTabClick('home')} />
        </div>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleTabClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 text-sm tracking-wide ${
                  isActive
                    ? 'text-[#C99A45] border-b-2 border-[#C99A45] font-semibold'
                    : 'text-[#F6ECDD]/80 hover:text-[#F6ECDD] hover:border-b-2 hover:border-[#C99A45]/40'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={() => {
              analytics.track('explore_games_nav_click');
              onNavigate('games');
            }}
            className="px-5 py-2.5 text-xs font-cinzel font-bold tracking-widest text-[#17130F] bg-gradient-to-r from-[#C99A45] via-[#E6C99A] to-[#C99A45] hover:brightness-110 active:scale-95 transition-all rounded-md shadow-lg shadow-[#C99A45]/20 whitespace-nowrap shrink-0 flex items-center gap-2 border border-[#E6C99A]/50"
          >
            <span>EXPLORE GAMES</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => onNavigate('games')}
            className="px-3 py-1.5 text-[11px] font-cinzel font-bold text-[#17130F] bg-[#C99A45] rounded transition-transform active:scale-95 whitespace-nowrap"
          >
            GAMES
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#F6ECDD] hover:text-[#C99A45] focus:outline-none focus:ring-2 focus:ring-[#C99A45] rounded-md transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1E1812] border-b border-[#C99A45]/30 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleTabClick(link.id)}
                className={`text-left py-2 px-3 text-base font-cinzel tracking-wider rounded-md transition-colors ${
                  activeTab === link.id
                    ? 'bg-[#C99A45]/15 text-[#C99A45] font-bold border-l-2 border-[#C99A45]'
                    : 'text-[#F6ECDD]/80 hover:bg-[#291F16] hover:text-[#F6ECDD]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#79542D]/40 flex flex-col gap-3">
            <button
              onClick={() => {
                onNavigate('games');
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 text-center text-xs font-cinzel font-bold tracking-widest text-[#17130F] bg-[#C99A45] hover:bg-[#E6C99A] rounded-md shadow-md"
            >
              EXPLORE OUR GAMES
            </button>
            <button
              onClick={() => {
                onOpenWaitlist();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-center text-xs font-cinzel font-semibold tracking-wider text-[#F6ECDD] border border-[#C99A45]/50 hover:bg-[#C99A45]/10 rounded-md"
            >
              PRE-REGISTER PLAYTEST
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
