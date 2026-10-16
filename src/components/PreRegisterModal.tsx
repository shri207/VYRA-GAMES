import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, Smartphone, Send, ShieldCheck } from 'lucide-react';
import { analytics } from '../utils/analytics.ts';

interface PreRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PreRegisterModal: React.FC<PreRegisterModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [email, setEmail] = useState('');
  const [platform, setPlatform] = useState('Android');
  const [consent, setConsent] = useState(true);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    ticketId?: string;
    message: string;
    alreadyRegistered?: boolean;
  } | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setResult({
        success: false,
        message: 'Please provide a valid email address.',
      });
      return;
    }

    if (!consent) {
      setResult({
        success: false,
        message: 'Please agree to receive the playtest invitation link.',
      });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          platformPreference: platform,
          consentAccepted: consent,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        analytics.track('playtest_registered', { label: data.ticketId });
        setResult({
          success: true,
          ticketId: data.ticketId,
          message: data.message,
          alreadyRegistered: data.alreadyRegistered,
        });
      } else {
        setResult({
          success: false,
          message: data.error || 'Failed to submit pre-registration. Please try again.',
        });
      }
    } catch {
      setResult({
        success: false,
        message: 'Network error communicating with the server. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="preregister-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-[#211C16] border border-[#C99A45]/40 shadow-2xl p-6 sm:p-8 space-y-6 text-[#F6ECDD]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-1 text-[#F6ECDD]/60 hover:text-[#C99A45] focus:outline-none focus:ring-2 focus:ring-[#C99A45] rounded-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-6">
          <div className="text-[11px] font-cinzel font-semibold tracking-widest text-[#C99A45] uppercase">
            CM VIJAY – STREET BATTLE
          </div>
          <h2 id="preregister-title" className="font-cinzel text-xl sm:text-2xl font-bold text-[#F6ECDD]">
            Closed Playtest Pre-Registration
          </h2>
          <p className="text-xs sm:text-sm text-[#F6ECDD]/75 leading-relaxed">
            Join the initial wave of community testers for our 2D street combat title. You'll receive an early testing invite as soon as the Android alpha build deploys.
          </p>
        </div>

        {result?.success ? (
          <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 space-y-4 text-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <div className="space-y-1">
              <h3 className="font-cinzel text-lg font-bold text-emerald-200">
                {result.alreadyRegistered ? 'Already on the List!' : 'Pre-Registration Confirmed!'}
              </h3>
              <p className="text-xs text-emerald-300">
                {result.message}
              </p>
            </div>
            <div className="p-3 bg-emerald-900/30 rounded border border-emerald-700/50 inline-block font-mono text-xs text-emerald-100">
              Ticket ID: <strong>{result.ticketId}</strong>
            </div>
            <div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 text-xs font-cinzel font-bold text-[#17130F] bg-[#C99A45] hover:bg-[#E6C99A] rounded-md transition-colors mt-2"
              >
                DONE
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {result && !result.success && (
              <div className="p-3.5 rounded-lg bg-red-950/60 border border-red-500/40 flex items-center gap-2 text-xs text-red-200">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{result.message}</span>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-cinzel font-semibold tracking-wider text-[#E6C99A] block">
                Email Address for Playtest Invite *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. player@example.com"
                className="w-full px-4 py-3 rounded-md bg-[#17130F] border border-[#79542D]/60 text-xs text-[#F6ECDD] focus:outline-none focus:border-[#C99A45]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-cinzel font-semibold tracking-wider text-[#E6C99A] block">
                Device / Platform Interest
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPlatform('Android')}
                  className={`py-2.5 px-3 rounded-md text-xs font-cinzel font-semibold tracking-wider border transition-all text-center ${
                    platform === 'Android'
                      ? 'bg-[#C99A45] text-[#17130F] border-[#C99A45] shadow'
                      : 'bg-[#17130F] text-[#F6ECDD]/70 border-[#79542D]/40'
                  }`}
                >
                  Android (Primary Target)
                </button>
                <button
                  type="button"
                  onClick={() => setPlatform('PC/Web')}
                  className={`py-2.5 px-3 rounded-md text-xs font-cinzel font-semibold tracking-wider border transition-all text-center ${
                    platform === 'PC/Web'
                      ? 'bg-[#C99A45] text-[#17130F] border-[#C99A45] shadow'
                      : 'bg-[#17130F] text-[#F6ECDD]/70 border-[#79542D]/40'
                  }`}
                >
                  PC / Future Interest
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-1">
              <input
                type="checkbox"
                id="modalConsent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-[#79542D] text-[#C99A45] focus:ring-[#C99A45] bg-[#17130F]"
              />
              <label htmlFor="modalConsent" className="text-xs text-[#F6ECDD]/70 leading-relaxed">
                I agree to receive Google Play test invite links and game milestone updates from Vyra Games.
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 text-xs font-cinzel font-bold tracking-[0.2em] text-[#17130F] bg-gradient-to-r from-[#C99A45] via-[#E6C99A] to-[#C99A45] hover:brightness-110 active:scale-95 disabled:opacity-50 transition-all rounded-md shadow-lg flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{loading ? 'REGISTERING...' : 'CONFIRM PRE-REGISTRATION'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
