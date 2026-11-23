import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCookiePolicy?: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({
  isOpen,
  onClose,
  onOpenCookiePolicy,
}) => {
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
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Chiudi finestra privacy"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 text-[#005662] mb-2 pr-8">
          <ShieldCheck className="w-6 h-6 shrink-0" />
          <h3 id="privacy-modal-title" className="font-heading text-2xl sm:text-3xl uppercase tracking-wide text-[#002b31]">
            PRIVACY POLICY
          </h3>
        </div>
        <p className="font-sans text-xs sm:text-sm font-semibold text-slate-500 mb-5">
          Informativa sul trattamento dei dati personali – Ultimo aggiornamento: 23 novembre 2026
        </p>

        <div className="font-sans text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed pr-1">
          <p>
            Questa pagina spiega in modo semplice come Zenith Fisiofit Expert raccoglie e usa i dati personali di chi visita questo sito, di chi chiede informazioni o si iscrive ai nostri percorsi di allenamento, valutazione, palestra terapeutica, fisioterapia e nutrizione, e di chi ci contatta per telefono, email o social. È resa ai sensi degli articoli 13 e 14 del Regolamento (UE) 2016/679 (&quot;GDPR&quot;) e del D.Lgs. 196/2003 (&quot;Codice Privacy&quot;).
          </p>

          <h4 className="font-semibold text-slate-800 text-sm sm:text-base pt-2">
            1. Chi tratta i tuoi dati
          </h4>
          <p>
            Titolare del trattamento è Fisiofit Società Sportiva Dilettantistica a Responsabilità Limitata, che gestisce il centro Zenith Fisiofit Expert, P.IVA e C.F. 04220720710, REA FG-310657, con sede in Via Radice angolo Via Gandhi, 71121 Foggia (FG). PEC fisiofit.ssd@pec.it – Telefono +39 329 282 6417.
          </p>
          <p>
            Le prestazioni di fisioterapia e di nutrizione sono svolte da professionisti sanitari abilitati, tenuti al segreto professionale.
          </p>
          <p>
            Per la gestione tecnica del sito, del gestionale clienti Gestiamo, dell&apos;invio di email e messaggi e delle campagne pubblicitarie online ci avvaliamo di Partidea S.r.l. (brand Socialee e Gestiamo), P.IVA 04405500408, Via Augusto Righi 15 – 47924 Rimini (RN), PEC amministrazione@pec.partidea.it, email info@socialee.it. Partidea S.r.l. è nominata Responsabile del trattamento ai sensi dell&apos;art. 28 GDPR con un accordo scritto che comprende il trattamento di dati sanitari: tratta i dati solo per nostro conto e secondo le nostre istruzioni, e si avvale a sua volta dei fornitori indicati in questa informativa.
          </p>

          <h4 className="font-semibold text-slate-800 text-sm sm:text-base pt-2">
            2. Quali dati raccogliamo
          </h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Dati di navigazione: indirizzo IP, browser, dispositivo, pagine visitate, data e ora, raccolti automaticamente dai sistemi che fanno funzionare il sito.
            </li>
            <li>
              Richieste di informazioni: nome e cognome, telefono, email, servizio di interesse e messaggio.
            </li>
            <li>
              Iscrizione e tesseramento: dati anagrafici, codice fiscale, recapiti, abbonamento scelto, pagamenti e, per i minori, dati di chi esercita la responsabilità genitoriale.
            </li>
            <li>
              Dati sanitari: certificato medico di idoneità all&apos;attività sportiva; esiti della valutazione chinesiologica e posturale e dei test funzionali; anamnesi, diagnosi e referti che ci fornisci per la fisioterapia e la palestra terapeutica; informazioni raccolte nel percorso nutrizionale.
            </li>
            <li>
              Dati di allenamento: schede, misure, progressi e presenze.
            </li>
            <li>
              Messaggi: quanto ci scrivi via WhatsApp, telefono, email o messaggi sui social.
            </li>
            <li>
              Dati raccolti con cookie e strumenti di tracciamento: identificativi online e interazioni con il sito e con i nostri annunci, solo se lo consenti tramite il banner (tranne i cookie tecnici).
            </li>
            <li>
              Le tue scelte sul consenso: quando e a cosa hai detto sì o no.
            </li>
          </ul>
          <p>
            Ti chiediamo di non scrivere informazioni sulla salute nel modulo del sito: le raccogliamo in sede, durante la valutazione.
          </p>

          <h4 className="font-semibold text-slate-800 text-sm sm:text-base pt-2">
            3. Perché usiamo i dati e su quale base
          </h4>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-800">
                  <th className="py-2.5 px-3 font-semibold">Finalità</th>
                  <th className="py-2.5 px-3 font-semibold">Base giuridica</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-2.5 px-3 align-top">Rispondere alle richieste di informazioni e fissare la valutazione iniziale</td>
                  <td className="py-2.5 px-3 align-top">Misure precontrattuali (art. 6.1.b GDPR)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 align-top">Gestire iscrizione, abbonamento, accessi e pagamenti</td>
                  <td className="py-2.5 px-3 align-top">Esecuzione di un contratto (art. 6.1.b)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 align-top">Tesseramento sportivo e copertura assicurativa collegata</td>
                  <td className="py-2.5 px-3 align-top">Obblighi di legge e statutari dell&apos;associazionismo sportivo (art. 6.1.c)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 align-top">Verificare il certificato medico di idoneità</td>
                  <td className="py-2.5 px-3 align-top">Obbligo di legge in materia di tutela sanitaria dell&apos;attività sportiva (art. 9.2.b e 9.2.g GDPR)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 align-top">Svolgere valutazioni, programmare l&apos;allenamento personalizzato e la palestra terapeutica</td>
                  <td className="py-2.5 px-3 align-top">Contratto (art. 6.1.b) e consenso esplicito per i dati sanitari (art. 9.2.a GDPR)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 align-top">Prestazioni di fisioterapia e nutrizione</td>
                  <td className="py-2.5 px-3 align-top">Finalità di cura da parte di professionisti sanitari tenuti al segreto (art. 9.2.h e 9.3 GDPR)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 align-top">Registrare i dati nel gestionale Gestiamo e conservare la tua scheda</td>
                  <td className="py-2.5 px-3 align-top">Contratto, finalità di cura e obblighi di legge</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 align-top">Inviare conferme, promemoria e avvisi sull&apos;abbonamento</td>
                  <td className="py-2.5 px-3 align-top">Contratto (art. 6.1.b)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 align-top">Inviare newsletter, promozioni e inviti a eventi</td>
                  <td className="py-2.5 px-3 align-top">Consenso (art. 6.1.a), revocabile in ogni momento</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 align-top">Misurare l&apos;uso del sito con statistiche (Google Analytics)</td>
                  <td className="py-2.5 px-3 align-top">Consenso (art. 6.1.a GDPR e art. 122 Codice Privacy)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 align-top">Misurare le campagne e mostrare annunci su Google, Facebook e Instagram</td>
                  <td className="py-2.5 px-3 align-top">Consenso (art. 6.1.a GDPR e art. 122 Codice Privacy)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 align-top">Fatturazione e obblighi fiscali</td>
                  <td className="py-2.5 px-3 align-top">Obbligo legale (art. 6.1.c)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 align-top">Proteggere il sito da abusi e difendere i nostri diritti</td>
                  <td className="py-2.5 px-3 align-top">Legittimo interesse (art. 6.1.f)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-semibold text-slate-800 text-sm sm:text-base pt-2">
            4. Il gestionale Gestiamo e la tua scheda
          </h4>
          <p>
            I dati di iscritti e contatti sono registrati in Gestiamo, il gestionale privato (CRM) che Partidea S.r.l. fornisce e gestisce per nostro conto. Lo usiamo per:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>conservare anagrafica, recapiti, abbonamenti e presenze;</li>
            <li>gestire valutazioni, schede di allenamento, appuntamenti di fisioterapia e percorso nutrizionale, e ricordarne lo storico;</li>
            <li>controllare la scadenza del certificato medico;</li>
            <li>registrare consensi e preferenze di contatto, così da scrivere solo a chi lo ha accettato;</li>
            <li>inviare a Brevo i contatti necessari per avvisi e promemoria e, solo con il consenso, per le promozioni.</li>
          </ul>
          <p>
            Ai dati sanitari accedono solo i professionisti e gli istruttori che ti seguono, ciascuno per quanto necessario al proprio ruolo. Il personale tecnico di Partidea S.r.l. vi accede solo se indispensabile per la manutenzione, con credenziali personali e obbligo di riservatezza. I dati non vengono venduti né diffusi e non sono usati per decisioni automatizzate che producano effetti giuridici su di te. Gestiamo è ospitato su infrastrutture di hosting scelte da Partidea S.r.l., con connessione cifrata, backup e misure di sicurezza adeguate ai dati sanitari; eventuali trasferimenti fuori dall&apos;Unione Europea avvengono con le garanzie indicate al punto 8.
          </p>

          <h4 className="font-semibold text-slate-800 text-sm sm:text-base pt-2">
            5. Email, SMS e comunicazioni: Brevo
          </h4>
          <p>
            Per inviare conferme, promemoria, avvisi di scadenza e, solo se hai dato il consenso, newsletter e promozioni, usiamo Brevo, piattaforma di Sendinblue SAS, 106 boulevard Haussmann, 75008 Parigi (Francia), che tratta i dati come sub-responsabile su server situati nell&apos;Unione Europea. A Brevo non vengono mai inviati dati sanitari.
          </p>
          <p>
            Brevo registra se un&apos;email è stata aperta e quali link sono stati cliccati. In ogni email promozionale trovi il link per disiscriverti; puoi anche scriverci alla PEC fisiofit.ssd@pec.it.
          </p>

          <h4 className="font-semibold text-slate-800 text-sm sm:text-base pt-2">
            6. Tracciamenti Google e Meta
          </h4>
          <p>
            Il sito utilizza o può utilizzare, solo dopo il tuo consenso:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Google Analytics 4 e Google Ads di Google Ireland Limited, Gordon House, Barrow Street, Dublino 4 (Irlanda), per statistiche aggregate sull&apos;uso del sito e per misurare le campagne. Google Analytics 4 non registra gli indirizzi IP; i dati sono conservati per 14 mesi.
            </li>
            <li>
              il Pixel di Meta e la Conversions API di Meta Platforms Ireland Limited, Merrion Road, Dublino 4 (Irlanda), per misurare le campagne su Facebook e Instagram e mostrare annunci a chi ha visitato il sito. Per la raccolta e la trasmissione di questi dati il Titolare e Meta sono contitolari (art. 26 GDPR) sulla base dell&apos;accordo messo a disposizione da Meta.
            </li>
          </ul>
          <p>
            A Google e a Meta non inviamo mai informazioni sulla salute: gli strumenti registrano al massimo che è stata inviata una richiesta di informazioni, senza indicare il servizio scelto, il messaggio o i tuoi dati di contatto. Solo se hai dato il consenso al marketing, email e telefono possono essere caricati in forma cifrata (hash) su Meta e Google per mostrarti le nostre promozioni o escluderti da annunci che non ti riguardano; non carichiamo mai elenchi di pazienti di fisioterapia o nutrizione.
          </p>
          <p>
            Se compili un modulo di contatto all&apos;interno di un nostro annuncio su Facebook o Instagram, i dati inseriti vengono raccolti da Meta, trasmessi a noi e registrati in Gestiamo per ricontattarti.
          </p>
          <p>
            Usiamo Google Consent Mode v2: finché non dai il consenso, i servizi Google non salvano né leggono identificativi sul tuo dispositivo. Il link &quot;Apri in Google Maps&quot; porta al sito di Google solo se lo clicchi.
          </p>
          <p>
            Se ci scrivi su WhatsApp, Facebook o Instagram, i dati sono trattati anche da WhatsApp Ireland Limited e Meta Platforms Ireland Limited secondo le loro informative. Per le statistiche delle nostre pagine social il Titolare e Meta sono contitolari secondo l&apos;accordo &quot;Page Insights&quot; di Meta.
          </p>

          <h4 className="font-semibold text-slate-800 text-sm sm:text-base pt-2">
            7. Minori
          </h4>
          <p>
            Per l&apos;iscrizione e il tesseramento di minori di 18 anni servono i dati e il consenso di chi esercita la responsabilità genitoriale, che firma i moduli di iscrizione e riceve le comunicazioni. Le valutazioni e le prestazioni sanitarie sui minori si svolgono solo con il consenso del genitore o tutore.
          </p>

          <h4 className="font-semibold text-slate-800 text-sm sm:text-base pt-2">
            8. A chi comunichiamo i dati e trasferimenti fuori dall&apos;Unione Europea
          </h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Istruttori, professionisti sanitari e personale autorizzato del centro, vincolati alla riservatezza e, se sanitari, al segreto professionale;</li>
            <li>Partidea S.r.l., Responsabile del trattamento (sito, Gestiamo, comunicazioni, campagne);</li>
            <li>l&apos;ente di affiliazione sportiva e il Registro nazionale delle attività sportive dilettantistiche, per il tesseramento, e la compagnia assicurativa collegata al tesseramento;</li>
            <li>il tuo medico o altri professionisti sanitari, solo su tua richiesta o con il tuo consenso;</li>
            <li>Sendinblue SAS (Brevo), Google Ireland Limited, Meta Platforms Ireland Limited e WhatsApp Ireland Limited, per i servizi descritti;</li>
            <li>Vercel Inc. (Stati Uniti), fornitore di hosting del sito;</li>
            <li>commercialista e consulenti, per gli adempimenti di legge;</li>
            <li>autorità pubbliche, quando la legge lo richiede.</li>
          </ul>
          <p>
            I dati non vengono venduti né diffusi. Alcuni fornitori (Google, Meta, Vercel) possono trasferire dati negli Stati Uniti: questi trasferimenti si basano sulla decisione di adeguatezza della Commissione Europea del 10 luglio 2023 sull&apos;EU-U.S. Data Privacy Framework, per le società certificate, e, dove serve, sulle Clausole Contrattuali Standard approvate dalla Commissione (art. 46 GDPR). I dati sanitari restano in Gestiamo e non sono inviati a questi fornitori.
          </p>

          <h4 className="font-semibold text-slate-800 text-sm sm:text-base pt-2">
            9. Per quanto tempo conserviamo i dati
          </h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Scheda di fisioterapia e percorso nutrizionale: 10 anni dall&apos;ultima prestazione, secondo gli obblighi professionali e per la tutela in caso di contestazioni;</li>
            <li>Valutazioni, schede di allenamento, misure e presenze: per la durata dell&apos;iscrizione e fino a 24 mesi dalla sua scadenza;</li>
            <li>Certificato medico: per la durata della sua validità e fino a 24 mesi dalla scadenza dell&apos;iscrizione;</li>
            <li>Dati di iscrizione e tesseramento: per la durata del rapporto e poi per i tempi previsti dagli obblighi civilistici e fiscali (10 anni);</li>
            <li>Richieste di informazioni non seguite da iscrizione: 12 mesi;</li>
            <li>Newsletter e promozioni: fino alla revoca del consenso, con verifica almeno ogni 24 mesi;</li>
            <li>Statistiche di Google Analytics: 14 mesi;</li>
            <li>
              Cookie: per le durate indicate nella{' '}
              {onOpenCookiePolicy ? (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenCookiePolicy();
                  }}
                  className="text-[#005662] font-semibold underline hover:text-[#003e47] cursor-pointer"
                >
                  Cookie Policy
                </button>
              ) : (
                'Cookie Policy'
              )}
              ;
            </li>
            <li>Log tecnici di sicurezza: fino a 12 mesi.</li>
          </ul>
          <p>
            Scaduti questi tempi, i dati vengono cancellati o resi anonimi.
          </p>

          <h4 className="font-semibold text-slate-800 text-sm sm:text-base pt-2">
            10. I tuoi diritti
          </h4>
          <p>
            Puoi chiederci in ogni momento di accedere ai tuoi dati e ricevere copia della tua scheda, correggerli, cancellarli quando non devono essere conservati per legge, limitarne l&apos;uso, riceverli in un formato leggibile (portabilità) e opporti al loro uso per marketing o basato sul legittimo interesse (artt. 15-22 GDPR). Puoi revocare un consenso quando vuoi, senza conseguenze su quanto fatto prima (art. 7.3 GDPR). Basta scrivere alla PEC fisiofit.ssd@pec.it o chiederlo in sede: ti rispondiamo entro 30 giorni. Puoi anche presentare reclamo al Garante per la protezione dei dati personali, Piazza Venezia 11, 00187 Roma – www.garanteprivacy.it.
          </p>

          <h4 className="font-semibold text-slate-800 text-sm sm:text-base pt-2">
            11. Altre informazioni
          </h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Obbligatorietà: i dati richiesti per iscrizione, tesseramento e certificato medico sono necessari per frequentare il centro; quelli raccolti nelle valutazioni servono a personalizzare il percorso. Il consenso a newsletter e cookie non tecnici è facoltativo e non incide sul servizio.
            </li>
            <li>
              Decisioni automatizzate: schede e percorsi sono sempre preparati da istruttori e professionisti, mai in modo automatico.
            </li>
            <li>
              Sicurezza: connessione cifrata (HTTPS), accessi personali al gestionale, backup e aggiornamenti periodici.
            </li>
            <li>
              Modifiche: la data in alto indica l&apos;ultima versione; segnaleremo sul sito le modifiche importanti.
            </li>
          </ul>
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
