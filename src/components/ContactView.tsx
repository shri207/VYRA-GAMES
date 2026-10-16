import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle, HelpCircle, ShieldCheck } from 'lucide-react';
import { analytics } from '../utils/analytics.ts';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General',
    message: '',
    consentAccepted: false,
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    ticketId?: string;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setResult({
        success: false,
        message: 'Please complete all required fields.',
      });
      return;
    }

    if (!formData.consentAccepted) {
      setResult({
        success: false,
        message: 'Please acknowledge the privacy consent to allow us to reply to your inquiry.',
      });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        analytics.track('contact_form_submitted', { label: data.ticketId });
        setResult({
          success: true,
          ticketId: data.ticketId,
          message: data.message,
        });
        setFormData({
          name: '',
          email: '',
          category: 'General',
          message: '',
          consentAccepted: false,
        });
      } else {
        setResult({
          success: false,
          message: data.error || 'Submission failed. Please check inputs and try again.',
        });
      }
    } catch {
      setResult({
        success: false,
        message: 'Network error communicating with the studio server. Please reach out via direct email.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 sm:py-24 bg-[#17130F] text-[#F6ECDD] min-h-[90vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Title */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-cinzel font-semibold tracking-[0.25em] text-[#C99A45] uppercase">
            CONNECT WITH VYRA GAMES
          </div>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F6ECDD]">
            Contact & Inquiries.
          </h1>
          <p className="text-base sm:text-lg text-[#F6ECDD]/80 leading-relaxed">
            Whether you are a player with gameplay feedback, a fellow game developer, or interested in publishing collaboration, we'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Inquiry Channels & Studio Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 rounded-2xl bg-[#211C16] border border-[#79542D]/40 space-y-4">
              <h3 className="font-cinzel text-lg font-bold text-[#F6ECDD]">
                Studio Channels
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="text-[#C99A45] font-cinzel font-semibold block">
                    Player Support & Bug Reports
                  </span>
                  <p className="text-[#F6ECDD]/70 mt-0.5">
                    For feedback on <em>CM Vijay – Street Battle</em> playtests or Android compatibility.
                  </p>
                  <a
                    href="mailto:support@vyragames.com"
                    className="text-[#E6C99A] hover:underline font-mono text-xs block mt-1"
                  >
                    support@vyragames.com
                  </a>
                </div>

                <div className="pt-3 border-t border-[#79542D]/30">
                  <span className="text-[#C99A45] font-cinzel font-semibold block">
                    Business & Publishing Inquiries
                  </span>
                  <p className="text-[#F6ECDD]/70 mt-0.5">
                    For platform partnerships, investment, or commercial distribution.
                  </p>
                  <a
                    href="mailto:business@vyragames.com"
                    className="text-[#E6C99A] hover:underline font-mono text-xs block mt-1"
                  >
                    business@vyragames.com
                  </a>
                </div>

                <div className="pt-3 border-t border-[#79542D]/30">
                  <span className="text-[#C99A45] font-cinzel font-semibold block">
                    Studio Location
                  </span>
                  <p className="text-[#F6ECDD]/70 mt-0.5">
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#1B1510] border border-[#79542D]/30 text-xs text-[#F6ECDD]/70 space-y-2">
              <div className="flex items-center gap-2 text-[#C99A45] font-cinzel font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Response Time Notice</span>
              </div>
              <p>
                We review submissions regularly. Inquiries submitted via this form generate a tracking ticket and are forwarded directly to the studio engineering and production leads.
              </p>
            </div>
          </div>

          {/* Right Column: Verified Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#211C16] border border-[#C99A45]/30 shadow-2xl">
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F6ECDD] mb-6">
                Send a Message to the Team
              </h2>

              {result?.success ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 space-y-4 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <div className="space-y-1">
                    <h3 className="font-cinzel text-lg font-bold text-emerald-200">
                      Message Received
                    </h3>
                    <p className="text-xs text-emerald-300">
                      {result.message}
                    </p>
                  </div>
                  <div className="p-3 bg-emerald-900/30 rounded border border-emerald-700/50 inline-block font-mono text-xs text-emerald-100">
                    Ticket Reference: <strong>{result.ticketId}</strong>
                  </div>
                  <div>
                    <button
                      onClick={() => setResult(null)}
                      className="text-xs font-cinzel text-emerald-300 hover:text-white underline mt-2"
                    >
                      Send another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {result && !result.success && (
                    <div className="p-4 rounded-lg bg-red-950/60 border border-red-500/40 flex items-center gap-3 text-xs text-red-200">
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                      <span>{result.message}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-cinzel font-semibold tracking-wider text-[#E6C99A] block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Kumar"
                        className="w-full px-4 py-3 rounded-md bg-[#17130F] border border-[#79542D]/60 text-xs text-[#F6ECDD] focus:outline-none focus:border-[#C99A45]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-cinzel font-semibold tracking-wider text-[#E6C99A] block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. anand@example.com"
                        className="w-full px-4 py-3 rounded-md bg-[#17130F] border border-[#79542D]/60 text-xs text-[#F6ECDD] focus:outline-none focus:border-[#C99A45]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-cinzel font-semibold tracking-wider text-[#E6C99A] block">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-[#17130F] border border-[#79542D]/60 text-xs text-[#F6ECDD] focus:outline-none focus:border-[#C99A45]"
                    >
                      <option value="General">General Inquiry</option>
                      <option value="Support">Player Support / Bug Report</option>
                      <option value="Publishing & Business">Publishing & Business</option>
                      <option value="Press & Media">Press & Media</option>
                      <option value="Community">Community Feedback</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-cinzel font-semibold tracking-wider text-[#E6C99A] block">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your question or message for the studio..."
                      className="w-full px-4 py-3 rounded-md bg-[#17130F] border border-[#79542D]/60 text-xs text-[#F6ECDD] focus:outline-none focus:border-[#C99A45]"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consentCheck"
                      checked={formData.consentAccepted}
                      onChange={(e) => setFormData({ ...formData, consentAccepted: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-[#79542D] text-[#C99A45] focus:ring-[#C99A45] bg-[#17130F]"
                    />
                    <label htmlFor="consentCheck" className="text-xs text-[#F6ECDD]/75 leading-relaxed">
                      I consent to Vyra Games storing this message and email to respond to my inquiry in accordance with the Privacy Policy.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 text-xs font-cinzel font-bold tracking-[0.2em] text-[#17130F] bg-gradient-to-r from-[#C99A45] via-[#E6C99A] to-[#C99A45] hover:brightness-110 active:scale-95 disabled:opacity-50 transition-all rounded-md shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? 'SUBMITTING TO STUDIO...' : 'SEND INQUIRY'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
