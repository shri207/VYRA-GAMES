import React, { useState } from 'react';
import { PLANNED_DEVLOG_TOPICS } from '../data/gameConfig.ts';
import { Newspaper, Bell, CheckCircle2, AlertCircle, Sparkles, Send } from 'lucide-react';
import { analytics } from '../utils/analytics.ts';

export const DevlogView: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setFeedback({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setLoading(true);
    setFeedback(null);

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          platformPreference: 'Devlog Newsletter',
          consentAccepted: true,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        analytics.track('devlog_subscribed', { label: email });
        setFeedback({
          type: 'success',
          message: data.message || 'Subscribed! You will be notified when our first Godot devlog is published.',
        });
        setEmail('');
      } else {
        setFeedback({
          type: 'error',
          message: data.error || 'Failed to subscribe. Please try again.',
        });
      }
    } catch {
      setFeedback({
        type: 'error',
        message: 'Network error connecting to the Vyra Games server. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 sm:py-24 bg-[#17130F] text-[#F6ECDD] min-h-[90vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="text-xs font-cinzel font-semibold tracking-[0.25em] text-[#C99A45] uppercase">
            STUDIO JOURNAL & ENGINE INSIGHTS
          </div>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F6ECDD]">
            Behind the Scenes at Vyra.
          </h1>
          <p className="text-base text-[#F6ECDD]/80 leading-relaxed">
            Direct dispatches from our developers on Godot engine architecture, 2D sprite combat, and Tamil heritage art design.
          </p>
        </div>

        {/* Honest, Refined Empty State Box */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#211C16] border border-[#79542D]/40 text-center space-y-6 shadow-2xl relative">
          <div className="w-14 h-14 rounded-full bg-[#17130F] border border-[#C99A45]/40 mx-auto flex items-center justify-center text-[#C99A45]">
            <Newspaper className="w-7 h-7" />
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F6ECDD]">
              First Studio Devlog Entry Preparing for Release
            </h2>
            <p className="text-xs sm:text-sm text-[#F6ECDD]/70 leading-relaxed">
              We are currently finalizing the closed alpha combat milestones for <em>CM Vijay – Street Battle</em>. Our technical writeups will begin publishing here once the combat loops enter external test flight.
            </p>
          </div>

          {/* Email Subscription for Devlog Alerts (Real Server Connection) */}
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto pt-4 space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for devlog alerts"
                required
                className="flex-1 px-4 py-3 text-xs rounded-md bg-[#17130F] border border-[#79542D]/60 text-[#F6ECDD] placeholder-[#F6ECDD]/40 focus:outline-none focus:border-[#C99A45]"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 text-xs font-cinzel font-bold tracking-wider text-[#17130F] bg-[#C99A45] hover:bg-[#E6C99A] disabled:opacity-50 rounded-md transition-all shadow-md shrink-0 flex items-center justify-center gap-1.5"
              >
                {loading ? 'Subscribing...' : 'Notify Me'}
              </button>
            </div>

            {feedback && (
              <div
                className={`p-3 rounded-md text-xs flex items-center gap-2 ${
                  feedback.type === 'success'
                    ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300'
                    : 'bg-red-950/60 border border-red-500/40 text-red-300'
                }`}
              >
                {feedback.type === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 shrink-0" />
                )}
                <span>{feedback.message}</span>
              </div>
            )}

            <span className="text-[11px] text-[#F6ECDD]/50 block">
              Zero spam. You can unsubscribe at any time.
            </span>
          </form>
        </div>

        {/* Planned Topics in Pipeline (Clearly Labeled as Upcoming) */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-[#79542D]/40 pb-3">
            <h3 className="font-cinzel text-lg font-bold text-[#F6ECDD]">
              Upcoming Devlog Topics in Progress
            </h3>
            <span className="text-xs font-mono text-[#C99A45]">Drafting in Engine</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANNED_DEVLOG_TOPICS.map((topic) => (
              <div
                key={topic.id}
                className="p-6 rounded-xl bg-[#211C16] border border-[#79542D]/35 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-[11px] font-cinzel text-[#C99A45] font-semibold tracking-wider">
                    {topic.category}
                  </div>
                  <h4 className="font-cinzel text-base font-bold text-[#F6ECDD] leading-snug">
                    {topic.title}
                  </h4>
                  <p className="text-xs text-[#F6ECDD]/70 leading-relaxed">
                    {topic.summary}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#79542D]/30 flex items-center justify-between text-[11px] font-mono text-[#E6C99A]/60">
                  <span>{topic.status}</span>
                  <span>{topic.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
