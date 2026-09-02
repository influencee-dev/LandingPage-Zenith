import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { ZENITH_CONFIG } from '../types';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="privacy-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div
        id="privacy-modal-content"
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Chiudi finestra privacy"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 text-[#005662] mb-4">
          <ShieldCheck className="w-6 h-6" />
          <h3 id="privacy-modal-title" className="font-heading text-2xl uppercase tracking-wide text-[#002b31]">
            Informativa sul Trattamento dei Dati Personali
          </h3>
        </div>

        <div className="font-sans text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed pr-2">
          <p>
            Ai sensi del Regolamento UE 2016/679 (GDPR), i dati raccolti attraverso questo modulo (nome, recapito telefonico, indirizzo email e preferenze sul percorso prescelto) saranno trattati da <strong>Zenith Fisiofit Expert</strong> esclusivamente al fine di ricontattarla e fornirle le informazioni richieste relative agli abbonamenti, ai corsi e ai percorsi chinesiologici/fisioterapici.
          </p>

          <h4 className="font-semibold text-slate-800 text-sm">1. Finalità e Base Giuridica del Trattamento</h4>
          <p>
            Il trattamento è finalizzato alla gestione della richiesta di contatto e all'invio di chiarimenti sulle attività e disponibilità del centro. La base giuridica è l'esecuzione di misure precontrattuali adottate su richiesta dell'interessato.
          </p>

          <h4 className="font-semibold text-slate-800 text-sm">2. Modalità di Contatto & WhatsApp</h4>
          <p>
            I dati forniti potranno essere utilizzati per il ricontatto telefonico, via email o tramite messaggistica WhatsApp aziendale. In nessun caso i suoi dati saranno ceduti a soggetti terzi non autorizzati né diffusi.
          </p>

          <h4 className="font-semibold text-slate-800 text-sm">3. Diritti dell'Interessato</h4>
          <p>
            In ogni momento potrà esercitare i diritti di accesso, rettifica, cancellazione o limitazione del trattamento contattando la sede di Zenith Fisiofit Expert ({ZENITH_CONFIG.ADDRESS}) o telefonicamente al numero <code>{ZENITH_CONFIG.PHONE}</code>.
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 bg-[#005662] hover:bg-[#003e47] text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-xl transition-colors"
          >
            Ho compreso
          </button>
        </div>
      </div>
    </div>
  );
};
