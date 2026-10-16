import React, { useState, useEffect } from 'react';
import { analytics, ConsentStatus } from '../utils/analytics.ts';
import { ShieldCheck } from 'lucide-react';

export const PrivacyBanner: React.FC = () => {
  const [status, setStatus] = useState<ConsentStatus>('pending');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const current = analytics.getConsent();
    setStatus(current);
    if (current === 'pending') {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const handleChoice = (choice: 'granted' | 'denied') => {
    analytics.setConsent(choice);
    setStatus(choice);
    setVisible(false);
  };

  return (
    <div
      role="region"
      aria-label="Privacy Consent Notice"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 p-4 rounded-xl bg-[#211C16]/95 border border-[#C99A45]/40 shadow-2xl backdrop-blur-md text-[#F6ECDD] text-xs space-y-3 animate-in slide-in-from-bottom duration-300"
    >
      <div className="flex items-center gap-2 text-[#C99A45] font-cinzel font-semibold">
        <ShieldCheck className="w-4 h-4" />
        <span>Privacy & Analytics Choice</span>
      </div>
      <p className="text-[#F6ECDD]/80 leading-relaxed text-[11px]">
        Vyra Games respects your digital privacy. We use anonymous, cookie-free local metrics solely to measure website responsiveness and playtest registrations.
      </p>
      <div className="flex items-center justify-end gap-2 pt-1">
        <button
          onClick={() => handleChoice('denied')}
          className="px-3 py-1.5 rounded text-[11px] font-cinzel tracking-wider text-[#F6ECDD]/70 hover:text-white border border-[#79542D]/40 transition-colors"
        >
          Decline
        </button>
        <button
          onClick={() => handleChoice('granted')}
          className="px-4 py-1.5 rounded text-[11px] font-cinzel font-bold tracking-wider text-[#17130F] bg-[#C99A45] hover:bg-[#E6C99A] transition-colors shadow"
        >
          Accept
        </button>
      </div>
    </div>
  );
};
