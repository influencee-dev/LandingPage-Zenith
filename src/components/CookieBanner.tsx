import React, { useState, useEffect } from 'react';
import { Cookie, X, SlidersHorizontal, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  applyConsentState,
  getStoredConsent,
  saveConsent,
} from '../utils/cookieConsent';

interface CookieBannerProps {
  isForceOpen: boolean;
  onCloseForceOpen: () => void;
  onOpenCookiePolicy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  isForceOpen,
  onCloseForceOpen,
  onOpenCookiePolicy,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [statisticsEnabled, setStatisticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      applyConsentState(stored);
      setStatisticsEnabled(stored.statistics);
      setMarketingEnabled(stored.marketing);
      return;
    }

    // Nessun consenso salvato o consenso scaduto (oltre 6 mesi): mostra banner dopo breve ritardo
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Riapertura manuale tramite link "Gestisci preferenze cookie" nel footer
  useEffect(() => {
    if (isForceOpen) {
      const stored = getStoredConsent();
      setStatisticsEnabled(stored?.statistics ?? false);
      setMarketingEnabled(stored?.marketing ?? false);
      setShowCustomize(false);
      setIsVisible(true);
    }
  }, [isForceOpen]);

  const closeBanner = () => {
    setIsVisible(false);
    setShowCustomize(false);
    onCloseForceOpen();
  };

  const handleAcceptAll = () => {
    saveConsent({ statistics: true, marketing: true });
    setStatisticsEnabled(true);
    setMarketingEnabled(true);
    closeBanner();
  };

  const handleRejectAll = () => {
    saveConsent({ statistics: false, marketing: false });
    setStatisticsEnabled(false);
    setMarketingEnabled(false);
    closeBanner();
  };

  const handleSaveCustom = () => {
    saveConsent({
      statistics: statisticsEnabled,
      marketing: marketingEnabled,
    });
    closeBanner();
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
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-lg z-50 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/80 p-5 sm:p-6 text-slate-800 max-h-[88vh] overflow-y-auto"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#005662] flex items-center justify-center shrink-0 mt-0.5 border border-teal-100">
              <Cookie className="w-5 h-5" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <h3 className="font-heading text-base font-bold text-slate-900 tracking-wide">
                  INFORMATIVA SUI COOKIE
                </h3>
                <button
                  type="button"
                  onClick={handleRejectAll}
                  className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors cursor-pointer"
                  aria-label="Chiudi informativa rifiutando i cookie non tecnici"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Usiamo cookie tecnici per far funzionare il sito e, solo con il tuo consenso, cookie statistici e di marketing di Google e Meta per capire come viene usato il sito e misurare le nostre campagne. Non usiamo mai i dati sulla tua salute a fini pubblicitari. Puoi accettarli, rifiutarli o scegliere quali attivare; chiudendo con la X continui senza cookie non tecnici. Maggiori dettagli nella{' '}
                <button
                  type="button"
                  onClick={onOpenCookiePolicy}
                  className="text-[#005662] underline hover:text-[#003e47] font-medium inline cursor-pointer"
                >
                  Cookie Policy
                </button>
                .
              </p>

              {showCustomize && (
                <div className="mt-4 pt-3.5 border-t border-slate-200 space-y-3">
                  {/* Categoria 1: Tecnici (sempre attivi, non modificabili) */}
                  <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                        <span>Tecnici</span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#005662] bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">
                          <Lock className="w-2.5 h-2.5" />
                          Sempre attivi
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                        Necessari per il funzionamento del sito e per salvare le tue scelte.
                      </p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={true}
                      aria-label="Cookie Tecnici (sempre attivi)"
                      disabled
                      className="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full bg-[#005662]/70 opacity-80 cursor-not-allowed"
                    >
                      <span className="inline-block h-4 w-4 translate-x-6 rounded-full bg-white shadow-sm" />
                    </button>
                  </div>

                  {/* Categoria 2: Statistici */}
                  <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-800">Statistici</div>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                        Google Analytics 4 per statistiche aggregate sull&apos;uso del sito.
                      </p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={statisticsEnabled}
                      aria-label="Attiva cookie Statistici"
                      onClick={() => setStatisticsEnabled((prev) => !prev)}
                      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors cursor-pointer ${
                        statisticsEnabled ? 'bg-[#005662]' : 'bg-slate-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${
                          statisticsEnabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Categoria 3: Marketing */}
                  <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-800">Marketing</div>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                        Google Ads e Pixel di Meta per misurare le campagne e mostrare annunci.
                      </p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={marketingEnabled}
                      aria-label="Attiva cookie di Marketing"
                      onClick={() => setMarketingEnabled((prev) => !prev)}
                      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors cursor-pointer ${
                        marketingEnabled ? 'bg-[#005662]' : 'bg-slate-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${
                          marketingEnabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              )}

              {/* Pulsanti azione: "Accetta tutti" e "Rifiuta tutti" con lo stesso peso visivo */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="flex-1 min-w-[120px] px-4 py-2.5 bg-[#005662] hover:bg-[#003e47] text-white text-xs font-bold rounded-xl shadow-sm transition-colors flex items-center justify-center cursor-pointer"
                >
                  Accetta tutti
                </button>
                <button
                  type="button"
                  onClick={handleRejectAll}
                  className="flex-1 min-w-[120px] px-4 py-2.5 bg-[#005662] hover:bg-[#003e47] text-white text-xs font-bold rounded-xl shadow-sm transition-colors flex items-center justify-center cursor-pointer"
                >
                  Rifiuta tutti
                </button>

                {!showCustomize ? (
                  <button
                    type="button"
                    onClick={() => setShowCustomize(true)}
                    className="w-full sm:w-auto px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    <span>Personalizza</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSaveCustom}
                    className="w-full px-4 py-2.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-xl shadow-sm transition-colors flex items-center justify-center cursor-pointer"
                  >
                    Salva preferenze
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
