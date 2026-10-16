import React, { useState, useEffect } from 'react';
import { Navbar, NavTab } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { StudioIntro } from './components/StudioIntro.tsx';
import { MascotSpotlight } from './components/MascotSpotlight.tsx';
import { FeaturedGame } from './components/FeaturedGame.tsx';
import { CreativePhilosophy } from './components/CreativePhilosophy.tsx';
import { BehindTheBuild } from './components/BehindTheBuild.tsx';
import { TamilHeritageSection } from './components/TamilHeritageSection.tsx';
import { CallToAction } from './components/CallToAction.tsx';
import { Footer } from './components/Footer.tsx';
import { GamesCatalogView } from './components/GamesCatalogView.tsx';
import { GameDetailsView } from './components/GameDetailsView.tsx';
import { AboutView } from './components/AboutView.tsx';
import { DevlogView } from './components/DevlogView.tsx';
import { ContactView } from './components/ContactView.tsx';
import { PreRegisterModal } from './components/PreRegisterModal.tsx';
import { LegalModal } from './components/LegalModals.tsx';
import { PrivacyBanner } from './components/PrivacyBanner.tsx';
import { analytics } from './utils/analytics.ts';

type AppView = NavTab | 'game-details';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'games') setCurrentView('games');
      else if (hash === 'about') setCurrentView('about');
      else if (hash === 'devlog') setCurrentView('devlog');
      else if (hash === 'contact') setCurrentView('contact');
      else if (hash === 'cm-vijay' || hash === 'game-details') setCurrentView('game-details');
      else if (!hash || hash === 'home') setCurrentView('home');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (tab: NavTab) => {
    window.location.hash = tab === 'home' ? '' : tab;
    setCurrentView(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    analytics.track('page_view', { label: tab });
  };

  const handleOpenGameDetails = () => {
    window.location.hash = 'cm-vijay';
    setCurrentView('game-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    analytics.track('page_view', { label: 'cm-vijay-details' });
  };

  return (
    <div className="min-h-screen bg-[#17130F] text-[#F6ECDD] flex flex-col font-sans selection:bg-[#C99A45]/30 selection:text-[#F6ECDD]">
      {/* Sticky Header */}
      <Navbar
        activeTab={currentView === 'game-details' ? 'games' : currentView}
        onNavigate={handleNavigate}
        onOpenWaitlist={() => setWaitlistOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <HeroSection
              onExploreGames={() => handleNavigate('games')}
              onDiscoverStudio={() => handleNavigate('about')}
            />
            <StudioIntro />
            <MascotSpotlight />
            <FeaturedGame
              onExploreGame={handleOpenGameDetails}
              onOpenWaitlist={() => setWaitlistOpen(true)}
            />
            <CreativePhilosophy />
            <BehindTheBuild onNavigateDevlog={() => handleNavigate('devlog')} />
            <TamilHeritageSection />
            <CallToAction
              onExploreGames={() => handleNavigate('games')}
              onContactStudio={() => handleNavigate('contact')}
            />
          </>
        )}

        {currentView === 'games' && (
          <GamesCatalogView
            onSelectGame={handleOpenGameDetails}
            onOpenWaitlist={() => setWaitlistOpen(true)}
          />
        )}

        {currentView === 'game-details' && (
          <GameDetailsView
            onBack={() => handleNavigate('games')}
            onOpenWaitlist={() => setWaitlistOpen(true)}
            onContactSupport={() => handleNavigate('contact')}
          />
        )}

        {currentView === 'about' && (
          <>
            <AboutView />
            <MascotSpotlight />
            <CallToAction
              onExploreGames={() => handleNavigate('games')}
              onContactStudio={() => handleNavigate('contact')}
            />
          </>
        )}

        {currentView === 'devlog' && <DevlogView />}

        {currentView === 'contact' && <ContactView />}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacyModal={() => setLegalModal('privacy')}
        onOpenTermsModal={() => setLegalModal('terms')}
      />

      {/* Interactive Modals */}
      <PreRegisterModal
        isOpen={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />

      <LegalModal
        type={legalModal || 'privacy'}
        isOpen={legalModal !== null}
        onClose={() => setLegalModal(null)}
      />

      {/* Privacy Consent Banner */}
      <PrivacyBanner />
    </div>
  );
}
