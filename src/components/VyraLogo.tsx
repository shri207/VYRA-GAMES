import React from 'react';

interface VyraLogoProps {
  variant?: 'full' | 'compact' | 'hero';
  className?: string;
  onClick?: () => void;
}

export const VyraLogo: React.FC<VyraLogoProps> = ({
  variant = 'compact',
  className = '',
  onClick,
}) => {
  if (variant === 'hero') {
    return (
      <div
        className={`relative inline-block cursor-pointer group transition-transform duration-300 hover:scale-[1.01] ${className}`}
        onClick={onClick}
      >
        <div className="relative rounded-2xl overflow-hidden border border-[#C99A45]/30 shadow-2xl shadow-black/80 bg-[#17130F]">
          <img
            src="/images/vyra-games-logo.svg"
            alt="Vyra Games - Stories Play Forever"
            className="w-full h-auto max-w-[420px] sm:max-w-[500px] md:max-w-[560px] object-contain block mx-auto"
            referrerPolicy="no-referrer"
            loading="eager"
          />
        </div>
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div
        className={`flex items-center gap-3 cursor-pointer group ${className}`}
        onClick={onClick}
      >
        <div className="w-12 h-12 rounded-lg overflow-hidden border border-[#C99A45]/40 bg-[#17130F] shrink-0 p-1 flex items-center justify-center shadow-md">
          <img
            src="/images/vyra-games-logo.svg"
            alt="Vyra Games Emblem"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-[#F6ECDD] group-hover:text-[#C99A45] transition-colors whitespace-nowrap">
            VYRA GAMES
          </span>
          <span className="text-[10px] tracking-[0.25em] text-[#C99A45] font-cinzel font-semibold uppercase whitespace-nowrap">
            Stories Play Forever
          </span>
        </div>
      </div>
    );
  }

  // Compact navbar treatment: High-legibility brand mark
  return (
    <div
      className={`flex items-center gap-2.5 cursor-pointer group ${className}`}
      onClick={onClick}
    >
      <div className="w-9 h-9 rounded-md overflow-hidden border border-[#C99A45]/40 bg-[#17130F] shrink-0 p-0.5 flex items-center justify-center shadow-sm">
        <img
          src="/images/vyra-games-logo.svg"
          alt="Vyra Games Logo"
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-col text-left">
        <span className="font-cinzel text-base font-bold tracking-widest text-[#F6ECDD] group-hover:text-[#C99A45] transition-colors whitespace-nowrap">
          VYRA GAMES
        </span>
        <span className="text-[9px] tracking-[0.2em] text-[#C99A45]/90 font-cinzel font-medium uppercase whitespace-nowrap hidden sm:block">
          Stories Play Forever
        </span>
      </div>
    </div>
  );
};
