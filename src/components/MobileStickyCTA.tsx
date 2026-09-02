import React, { useState, useEffect } from 'react';
import { Send, ArrowRight } from 'lucide-react';

interface MobileStickyCTAProps {
  onCtaClick: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past 300px and hide when near the form
      const scrollPosition = window.scrollY;
      const formElement = document.getElementById('form-contatto');
      
      let isNearForm = false;
      if (formElement) {
        const rect = formElement.getBoundingClientRect();
        isNearForm = rect.top < window.innerHeight && rect.bottom > 0;
      }

      if (scrollPosition > 350 && !isNearForm) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      id="mobile-sticky-cta-bar"
      aria-label="Azione Rapida Contatto"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl transition-all duration-300 animate-slide-up"
    >
      <div className="max-w-md mx-auto flex items-center gap-3">
        <button
          type="button"
          id="btn-sticky-mobile-cta"
          onClick={onCtaClick}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 px-5 bg-[#005662] hover:bg-[#003e47] text-white font-sans text-sm font-bold tracking-wider uppercase rounded-xl shadow-md transition-colors cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>RICHIEDI INFO</span>
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </aside>
  );
};
