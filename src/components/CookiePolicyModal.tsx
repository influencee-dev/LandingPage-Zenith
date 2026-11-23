import React from 'react';
import { X, Cookie } from 'lucide-react';

interface CookiePolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPrivacy?: () => void;
  onOpenCookiePreferences?: () => void;
}

export const CookiePolicyModal: React.FC<CookiePolicyModalProps> = ({
  isOpen,
  onClose,
  onOpenPrivacy,
  onOpenCookiePreferences,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="cookie-policy-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-policy-modal-title"
    >
      <div
        id="cookie-policy-modal-content"
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Chiudi finestra Cookie Policy"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 text-[#005662] mb-2 pr-8">
          <Cookie className="w-6 h-6 shrink-0" />
          <h3 id="cookie-policy-modal-title" className="font-heading text-2xl sm:text-3xl uppercase tracking-wide text-[#002b31]">
            COOKIE POLICY
          </h3>
        </div>
        <p className="font-sans text-xs sm:text-sm font-semibold text-slate-500 mb-5">
          Ultimo aggiornamento: 23 novembre 2026
        </p>

        <div className="font-sans text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed pr-1">
          <p>
            Questa pagina spiega quali cookie e strumenti simili usa questo sito, gestito da Fisiofit S.S.D. a r.l. per il centro Zenith Fisiofit Expert (dati di contatto nella{' '}
            {onOpenPrivacy ? (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenPrivacy();
                }}
                className="text-[#005662] font-semibold underline hover:text-[#003e47] cursor-pointer"
              >
                Privacy Policy
              </button>
            ) : (
              'Privacy Policy'
            )}
            ), secondo l&apos;art. 122 del Codice Privacy e le Linee guida del Garante del 10 giugno 2021.
          </p>

          <h4 className="font-semibold text-slate-800 text-sm sm:text-base pt-2">
            Cosa sono i cookie
          </h4>
          <p>
            Sono piccoli file che il sito salva sul tuo dispositivo. Strumenti simili (pixel, tag, local storage) funzionano allo stesso modo e seguono le stesse regole.
          </p>

          <h4 className="font-semibold text-slate-800 text-sm sm:text-base pt-2">
            Quali usiamo
          </h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Cookie tecnici: fanno funzionare il sito e il modulo di contatto e ricordano le tue scelte sul banner. Non richiedono consenso.
            </li>
            <li>
              Cookie statistici: Google Analytics 4, solo se attivo e solo con il tuo consenso.
            </li>
            <li>
              Cookie di marketing: Google Ads e Pixel di Meta, solo se attivi e solo con il tuo consenso.
            </li>
          </ul>

          <h4 className="font-semibold text-slate-800 text-sm sm:text-base pt-2">
            Elenco dei cookie
          </h4>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-800">
                  <th className="py-2.5 px-3 font-semibold">Nome</th>
                  <th className="py-2.5 px-3 font-semibold">Fornitore</th>
                  <th className="py-2.5 px-3 font-semibold">A cosa serve</th>
                  <th className="py-2.5 px-3 font-semibold">Durata</th>
                  <th className="py-2.5 px-3 font-semibold">Tipo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-2.5 px-3 align-top font-medium text-slate-800">cookie del banner</td>
                  <td className="py-2.5 px-3 align-top">Zenith Fisiofit Expert</td>
                  <td className="py-2.5 px-3 align-top">Ricorda le tue scelte sul consenso</td>
                  <td className="py-2.5 px-3 align-top">6 mesi</td>
                  <td className="py-2.5 px-3 align-top">Tecnico</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 align-top font-medium text-slate-800">_ga</td>
                  <td className="py-2.5 px-3 align-top">Google</td>
                  <td className="py-2.5 px-3 align-top">Distingue i visitatori a fini statistici</td>
                  <td className="py-2.5 px-3 align-top">2 anni</td>
                  <td className="py-2.5 px-3 align-top">Statistico</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 align-top font-medium text-slate-800">ga*</td>
                  <td className="py-2.5 px-3 align-top">Google</td>
                  <td className="py-2.5 px-3 align-top">Mantiene la sessione di Google Analytics</td>
                  <td className="py-2.5 px-3 align-top">2 anni</td>
                  <td className="py-2.5 px-3 align-top">Statistico</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 align-top font-medium text-slate-800">_gcl_au</td>
                  <td className="py-2.5 px-3 align-top">Google</td>
                  <td className="py-2.5 px-3 align-top">Misura le conversioni di Google Ads</td>
                  <td className="py-2.5 px-3 align-top">3 mesi</td>
                  <td className="py-2.5 px-3 align-top">Marketing</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 align-top font-medium text-slate-800">IDE, test_cookie</td>
                  <td className="py-2.5 px-3 align-top">Google (doubleclick.net)</td>
                  <td className="py-2.5 px-3 align-top">Remarketing e misurazione degli annunci</td>
                  <td className="py-2.5 px-3 align-top">fino a 13 mesi</td>
                  <td className="py-2.5 px-3 align-top">Marketing</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 align-top font-medium text-slate-800">_fbp</td>
                  <td className="py-2.5 px-3 align-top">Meta</td>
                  <td className="py-2.5 px-3 align-top">Identifica il browser per il Pixel di Meta</td>
                  <td className="py-2.5 px-3 align-top">3 mesi</td>
                  <td className="py-2.5 px-3 align-top">Marketing</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 align-top font-medium text-slate-800">_fbc</td>
                  <td className="py-2.5 px-3 align-top">Meta</td>
                  <td className="py-2.5 px-3 align-top">Registra il clic su un annuncio Meta</td>
                  <td className="py-2.5 px-3 align-top">3 mesi</td>
                  <td className="py-2.5 px-3 align-top">Marketing</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 align-top font-medium text-slate-800">fr</td>
                  <td className="py-2.5 px-3 align-top">Meta (facebook.com)</td>
                  <td className="py-2.5 px-3 align-top">Annunci e misurazione su Facebook e Instagram</td>
                  <td className="py-2.5 px-3 align-top">3 mesi</td>
                  <td className="py-2.5 px-3 align-top">Marketing</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Le durate sono indicate dai fornitori e possono cambiare. I cookie statistici e di marketing vengono installati solo se il relativo servizio è attivo sul sito e solo dopo il tuo consenso.
          </p>

          <h4 className="font-semibold text-slate-800 text-sm sm:text-base pt-2">
            Come scegli
          </h4>
          <p>
            Al primo accesso il banner ti permette di accettare tutti i cookie, rifiutarli tutti o scegliere per categoria. Chiudendo il banner con la X continui con i soli cookie tecnici. Nessun cookie statistico o di marketing viene installato prima della tua scelta, e scorrere la pagina non vale come consenso. Il banner non ti viene riproposto prima di 6 mesi, salvo cambiamenti nei cookie usati. Puoi cambiare idea quando vuoi dal link &quot;
            {onOpenCookiePreferences ? (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenCookiePreferences();
                }}
                className="text-[#005662] font-semibold underline hover:text-[#003e47] cursor-pointer"
              >
                Gestisci preferenze cookie
              </button>
            ) : (
              'Gestisci preferenze cookie'
            )}
            &quot; in fondo alla pagina.
          </p>
          <p>
            Puoi anche cancellare o bloccare i cookie dalle impostazioni del browser (Chrome, Firefox, Safari, Edge): bloccare quelli tecnici può però impedire il corretto funzionamento del sito. Per le preferenze sugli annunci:{' '}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#005662] underline hover:text-[#003e47]"
            >
              https://adssettings.google.com
            </a>{' '}
            e le impostazioni inserzioni del tuo account Meta.
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 bg-[#005662] hover:bg-[#003e47] text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-xl transition-colors cursor-pointer"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
};
