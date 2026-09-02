import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeaderProps {
  onCtaClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  return (
    <header
      id="main-header"
      className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between">
        {/* Left: Official Zenith Logo from logo.png */}
        <a
          href="#"
          id="header-logo-link"
          className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005662] rounded-lg p-1 transition-opacity hover:opacity-95"
          aria-label="Zenith Fisiofit Expert Home"
        >
          <img
            src="/logo.png"
            alt="Zenith Fisiofit Expert"
            className="h-11 sm:h-13 w-auto object-contain max-h-16"
          />
        </a>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            id="header-cta-button"
            onClick={onCtaClick}
            className="group relative inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#005662] hover:bg-[#003e47] text-white font-sans text-xs sm:text-sm font-bold tracking-wider uppercase rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform active:scale-98 cursor-pointer"
          >
            <span className="hidden sm:inline">RICHIEDI INFORMAZIONI</span>
            <span className="sm:hidden">RICHIEDI INFO</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
