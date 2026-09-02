import React, { useState, useEffect } from 'react';
import { Shield, Cookie, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CookieBannerProps {
  onOpenPrivacy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user already made a choice
    const consent = localStorage.getItem('zenith_cookie_consent');
    if (!consent) {
      // Delay slightly for smooth page load experience
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('zenith_cookie_consent', 'all');
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('zenith_cookie_consent', 'necessary');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          aria-label="Informativa sui cookie"
          role="region"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/80 p-5 sm:p-6 text-slate-800"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#005662] flex items-center justify-center shrink-0 mt-0.5 border border-teal-100">
              <Cookie className="w-5 h-5" />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <h3 className="font-heading text-base font-bold text-slate-900 tracking-wide">
                  INFORMATIVA SUI COOKIE
                </h3>
                <button
                  type="button"
                  onClick={handleAcceptNecessary}
                  className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors cursor-pointer"
                  aria-label="Chiudi informativa cookie"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Utilizziamo cookie tecnici per garantire il corretto funzionamento del sito e, previo tuo consenso, cookie di analisi per migliorare l&apos;esperienza utente.{' '}
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="text-[#005662] underline hover:text-[#003e47] font-medium inline cursor-pointer"
                >
                  Leggi la Privacy Policy
                </button>
                .
              </p>

              <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="px-4 py-2 bg-[#005662] hover:bg-[#003e47] text-white text-xs font-bold rounded-xl shadow-sm transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Accetta tutti</span>
                </button>
                <button
                  type="button"
                  onClick={handleAcceptNecessary}
                  className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-xl transition-colors text-center cursor-pointer"
                >
                  Solo necessari
                </button>
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
