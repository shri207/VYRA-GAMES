import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms';
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  type,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl bg-[#211C16] border border-[#C99A45]/40 shadow-2xl p-6 sm:p-8 space-y-6 text-[#F6ECDD]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-1 text-[#F6ECDD]/60 hover:text-[#C99A45] rounded-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#C99A45]">
              <Shield className="w-6 h-6" />
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F6ECDD]">
                Privacy Notice
              </h2>
            </div>
            <div className="text-xs text-[#E6C99A]/80 font-mono">
              Last Updated: October 2026 · Vyra Games (Tamil Nadu, India)
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#F6ECDD]/80 leading-relaxed border-t border-[#79542D]/40 pt-4">
              <p>
                <strong>1. Information We Collect:</strong> When you voluntarily pre-register for game playtests or contact our studio, we collect your email address, inquiry text, and device preference.
              </p>
              <p>
                <strong>2. Purpose of Use:</strong> We use your contact information strictly to transmit testing invitations for <em>CM Vijay – Street Battle</em>, send studio devlog announcements, and respond to support/business requests.
              </p>
              <p>
                <strong>3. Cookies and Analytics:</strong> This website does not deploy third-party advertising or surveillance cookies. Basic local interaction metrics are stored on your local browser only with your explicit consent.
              </p>
              <p>
                <strong>4. Data Retention & Erasure:</strong> Your contact records are stored securely on our backend and are never sold or shared with third parties. You may request deletion or unsubscribe at any time by emailing <code>support@vyragames.com</code>.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#C99A45]">
              <FileText className="w-6 h-6" />
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F6ECDD]">
                Terms of Use
              </h2>
            </div>
            <div className="text-xs text-[#E6C99A]/80 font-mono">
              Last Updated: October 2026 · Vyra Games
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#F6ECDD]/80 leading-relaxed border-t border-[#79542D]/40 pt-4">
              <p>
                <strong>1. Studio Intellectual Property:</strong> All logos, wordmarks, character designs, gameplay concepts, and audiovisual materials displayed on this website are the intellectual property of Vyra Games.
              </p>
              <p>
                <strong>2. Game Playtest Access:</strong> Pre-registration provides an expression of interest to participate in closed alpha/beta testing builds of <em>CM Vijay – Street Battle</em>. Pre-registration does not guarantee immediate access to builds.
              </p>
              <p>
                <strong>3. Respectful Conduct:</strong> Communications submitted through our contact channels must remain respectful and free of malicious code or unlawful material.
              </p>
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-[#79542D]/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 text-xs font-cinzel font-bold text-[#17130F] bg-[#C99A45] hover:bg-[#E6C99A] rounded-md transition-colors"
          >
            I UNDERSTAND
          </button>
        </div>
      </div>
    </div>
  );
};
