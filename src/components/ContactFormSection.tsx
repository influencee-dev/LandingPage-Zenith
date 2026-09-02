import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Send,
  MessageSquare,
  CheckCircle,
  ShieldCheck,
  User,
  Phone,
  Mail,
  HelpCircle,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { ContactFormData, InterestOption, ZENITH_CONFIG } from '../types';

interface ContactFormSectionProps {
  selectedInterest: InterestOption;
  onInterestChange: (interest: InterestOption) => void;
  onOpenPrivacy: () => void;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  selectedInterest,
  onInterestChange,
  onOpenPrivacy,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    interest: selectedInterest,
    message: '',
    privacyAccepted: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);
  const [leadSaved, setLeadSaved] = useState<boolean | null>(null);

  // Synchronize when interest prop updates from plan card clicks
  useEffect(() => {
    setFormData((prev) => ({ ...prev, interest: selectedInterest }));
  }, [selectedInterest]);

  const interestOptions: InterestOption[] = [
    'Sala Attrezzi',
    'Sala Attrezzi + Follow Up',
    'Sala Attrezzi + Wellness',
    'Corsi',
    'Valutazione / percorso personalizzato',
    'Altro',
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Inserisci il tuo nome e cognome';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Inserisci il tuo recapito telefonico';
    } else if (formData.phone.trim().length < 6) {
      newErrors.phone = 'Inserisci un numero di telefono valido';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Inserisci il tuo indirizzo email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Inserisci un indirizzo email valido';
    }
    if (!formData.interest) {
      newErrors.interest = 'Seleziona il percorso o servizio di tuo interesse';
    }
    if (!formData.privacyAccepted) {
      newErrors.privacyAccepted = "È necessario accettare l'informativa privacy per procedere";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * =========================================================================
   * GESTIONE INVIO LEAD & INTEGRAZIONE BREVO (SENDINBLUE LIST #51)
   * =========================================================================
   */
  const handleBrevoLeadSubmission = async (data: ContactFormData): Promise<boolean> => {
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          fullName: data.fullName.trim(),
          phone: data.phone.trim(),
          email: data.email.trim().toLowerCase(),
          interest: data.interest,
          message: data.message.trim(),
        }),
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        console.error('[BREVO LEAD] Salvataggio fallito:', response.status, errJson);
        return false;
      }

      console.log('[BREVO LEAD] Lead inserito con successo nella lista #51 di Brevo');
      return true;
    } catch (err) {
      console.error('[BREVO LEAD ERROR] Errore durante invio a Brevo:', err);
      return false;
    }
  };

  /**
   * =========================================================================
   * CREAZIONE LINK WHATSAPP CON TUTTI I DATI DEL FORM PRECOMPILATI
   * =========================================================================
   */
  const generateWhatsAppUrl = (data: ContactFormData) => {
    const rawNumber = ZENITH_CONFIG.WHATSAPP_NUMBER || '393292826417';
    const cleanNumber = rawNumber.replace(/[^0-9]/g, '');

    const messageLines = [
      '👋 *Ciao Centro Zenith!*',
      'Ho appena inviato una richiesta dal sito web:',
      '',
      `👤 *Nome:* ${data.fullName.trim()}`,
      `📞 *Telefono:* ${data.phone.trim()}`,
      `✉️ *Email:* ${data.email.trim()}`,
      `🎯 *Interesse:* ${data.interest}`,
      data.message.trim()
        ? `💬 *Note / Richiesta:* ${data.message.trim()}`
        : '💬 *Note:* Nessuna nota aggiuntiva',
    ];

    const fullMessage = messageLines.join('\n');
    const encodedMessage = encodeURIComponent(fullMessage);

    return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // 1. Invio lead a Brevo Lista #51 via endpoint server-side
      const saved = await handleBrevoLeadSubmission(formData);
      setLeadSaved(saved);

      // 2. Registrazione stato completato
      setSubmittedData({ ...formData });
      setIsSubmitted(true);

      // 3. Apertura della chat WhatsApp con messaggio precompilato
      const waUrl = generateWhatsAppUrl(formData);
      window.open(waUrl, '_blank');
    } catch (error) {
      console.error('Errore durante la sottomissione del form:', error);
      setLeadSaved(false);
      setSubmittedData({ ...formData });
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setLeadSaved(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      interest: 'Sala Attrezzi',
      message: '',
      privacyAccepted: false,
    });
    setErrors({});
  };

  return (
    <section
      id="form-contatto"
      className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100/80 border-t border-slate-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Form Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#005662]/10 text-[#005662] mb-3">
            <Send className="w-4 h-4" />
            <span className="font-sans font-bold text-xs tracking-wider uppercase">
              Contatto Diretto
            </span>
          </div>

          <h2
            id="form-title"
            className="font-heading text-4xl sm:text-6xl text-[#002b31] tracking-tight uppercase leading-[0.95]"
          >
            INIZIA IL TUO PERCORSO
          </h2>

          <p className="font-sans text-base sm:text-lg text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Lasciaci i tuoi contatti e raccontaci cosa stai cercando. Ti aiuteremo a capire quale percorso Zenith è più adatto alle tue esigenze.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-slate-200/90 relative overflow-hidden">
          {/* Subtle decorative accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#003e47] via-[#005662] to-[#00a5b8]" />

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="lead-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nome e Cognome */}
                  <div>
                    <label
                      htmlFor="form-fullName"
                      className="block font-sans text-xs sm:text-sm font-bold text-[#002b31] uppercase tracking-wider mb-2"
                    >
                      Nome e cognome <span className="text-[#005662] font-black">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="form-fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        placeholder="Mario Rossi"
                        className={`w-full pl-10 pr-4 py-3.5 bg-slate-50 border rounded-xl font-sans text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#005662] focus:bg-white transition-all ${
                          errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Telefono */}
                  <div>
                    <label
                      htmlFor="form-phone"
                      className="block font-sans text-xs sm:text-sm font-bold text-[#002b31] uppercase tracking-wider mb-2"
                    >
                      Telefono <span className="text-[#005662] font-black">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        id="form-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="340 1234567"
                        className={`w-full pl-10 pr-4 py-3.5 bg-slate-50 border rounded-xl font-sans text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#005662] focus:bg-white transition-all ${
                          errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="form-email"
                      className="block font-sans text-xs sm:text-sm font-bold text-[#002b31] uppercase tracking-wider mb-2"
                    >
                      Email <span className="text-[#005662] font-black">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        id="form-email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="mario.rossi@email.it"
                        className={`w-full pl-10 pr-4 py-3.5 bg-slate-50 border rounded-xl font-sans text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#005662] focus:bg-white transition-all ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.email}</p>
                    )}
                  </div>

                  {/* A cosa sei interessato? */}
                  <div>
                    <label
                      htmlFor="form-interest"
                      className="block font-sans text-xs sm:text-sm font-bold text-[#002b31] uppercase tracking-wider mb-2"
                    >
                      A cosa sei interessato? <span className="text-[#005662] font-black">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="form-interest"
                        name="interest"
                        value={formData.interest}
                        onChange={(e) => {
                          const val = e.target.value as InterestOption;
                          setFormData({ ...formData, interest: val });
                          onInterestChange(val);
                          if (errors.interest) setErrors({ ...errors, interest: '' });
                        }}
                        className={`w-full px-4 py-3.5 bg-slate-50 border rounded-xl font-sans text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#005662] focus:bg-white transition-all cursor-pointer ${
                          errors.interest ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                        }`}
                      >
                        {interestOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.interest && (
                      <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.interest}</p>
                    )}
                  </div>
                </div>

                {/* Come possiamo aiutarti? (Facoltativo) */}
                <div>
                  <label
                    htmlFor="form-message"
                    className="block font-sans text-xs sm:text-sm font-bold text-[#002b31] uppercase tracking-wider mb-2"
                  >
                    Come possiamo aiutarti? <span className="text-slate-400 font-normal lowercase">(facoltativo)</span>
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Raccontaci brevemente i tuoi obiettivi, eventuali problematiche o la fascia oraria preferita per il ricontatto..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-sans text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#005662] focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Checkbox Privacy Obbligatoria */}
                <div className="pt-2">
                  <label
                    htmlFor="form-privacy"
                    className="flex items-start gap-3 cursor-pointer group select-none"
                  >
                    <input
                      type="checkbox"
                      id="form-privacy"
                      name="privacyAccepted"
                      checked={formData.privacyAccepted}
                      onChange={(e) => {
                        setFormData({ ...formData, privacyAccepted: e.target.checked });
                        if (errors.privacyAccepted) setErrors({ ...errors, privacyAccepted: '' });
                      }}
                      className="mt-1 w-4 h-4 text-[#005662] rounded border-slate-300 focus:ring-[#005662] cursor-pointer"
                    />
                    <span className="font-sans text-xs sm:text-sm text-slate-600 leading-snug">
                      Ho letto e accetto l'
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          onOpenPrivacy();
                        }}
                        className="text-[#005662] font-semibold underline underline-offset-2 hover:text-[#003e47] mx-1 cursor-pointer"
                      >
                        informativa privacy
                      </button>
                      <span className="text-[#005662] font-black">*</span>
                    </span>
                  </label>
                  {errors.privacyAccepted && (
                    <p className="mt-1.5 text-xs text-red-500 font-medium pl-7">
                      {errors.privacyAccepted}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    id="btn-submit-lead-form"
                    disabled={isSubmitting}
                    className="w-full group relative inline-flex items-center justify-center gap-3 py-4 sm:py-4.5 px-8 bg-[#005662] hover:bg-[#003e47] text-white font-sans text-base font-bold tracking-wider uppercase rounded-xl shadow-lg shadow-[#005662]/20 hover:shadow-xl hover:shadow-[#005662]/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        INVIO IN CORSO...
                      </span>
                    ) : (
                      <>
                        <span>RICHIEDI INFORMAZIONI</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  {/* Microcopy rassicurante */}
                  <p
                    id="form-microcopy"
                    className="mt-3.5 text-center font-sans text-xs sm:text-sm text-slate-500 font-medium"
                  >
                    Nessun impegno. Ti ricontatteremo per darti tutte le informazioni di cui hai bisogno.
                  </p>
                </div>
              </motion.form>
            ) : (
              /* ========================================================
                 SUCCESS & WHATSAPP REDIRECTION STATE
                 ======================================================== */
              <motion.div
                key="form-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 sm:py-8"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-teal-50 text-[#005662] flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-[#005662]" />
                </div>

                <h3 className="font-heading text-3xl sm:text-4xl text-[#002b31] uppercase tracking-wide">
                  GRAZIE {submittedData?.fullName.split(' ')[0].toUpperCase()}!
                </h3>

                <p className="font-sans text-base sm:text-lg text-slate-700 mt-2 max-w-lg mx-auto">
                  La tua richiesta per <strong className="text-[#005662] font-semibold">{submittedData?.interest}</strong> è stata registrata.
                </p>

                <p className="font-sans text-sm text-slate-500 mt-1 max-w-md mx-auto">
                  Un esperto di Zenith ti ricontatterà al più presto al numero <strong>{submittedData?.phone}</strong>.
                </p>

                {leadSaved === false && (
                  <div className="mt-6 p-4 bg-amber-50 border border-amber-300 rounded-xl max-w-lg mx-auto text-left">
                    <p className="font-sans text-sm text-amber-900 leading-relaxed">
                      <strong>Attenzione:</strong> non siamo riusciti a registrare automaticamente la tua richiesta.
                      Per essere certo di essere ricontattato, invia il messaggio su WhatsApp qui sotto.
                    </p>
                  </div>
                )}

                {/* Direct WhatsApp Action Box */}
                <div className="mt-8 p-6 sm:p-8 bg-[#005662]/5 border border-[#005662]/20 rounded-2xl max-w-lg mx-auto text-left">
                  <div className="flex items-center gap-3 mb-3 text-[#005662]">
                    <MessageSquare className="w-6 h-6 shrink-0" />
                    <span className="font-heading text-xl uppercase tracking-wider text-[#002b31]">
                      VUOI UNA RISPOSTA IMMEDIATA?
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    Puoi avviare subito la chat su WhatsApp con il Centro Zenith. Abbiamo già preparato il messaggio con la tua richiesta:
                  </p>

                  {/* Precompiled preview text */}
                  <div className="p-3.5 bg-white border border-slate-200 rounded-xl font-sans text-xs text-slate-700 whitespace-pre-line mb-5 shadow-xs">
                    <span className="font-semibold text-[#005662] block mb-1">Messaggio WhatsApp precompilato:</span>
                    {submittedData && (
                      <div className="text-slate-600">
                        👋 Ciao Centro Zenith! Ho appena inviato una richiesta:<br/>
                        • <strong>Nome:</strong> {submittedData.fullName}<br/>
                        • <strong>Telefono:</strong> {submittedData.phone}<br/>
                        • <strong>Email:</strong> {submittedData.email}<br/>
                        • <strong>Interesse:</strong> {submittedData.interest}
                        {submittedData.message && <><br/>• <strong>Note:</strong> {submittedData.message}</>}
                      </div>
                    )}
                  </div>

                  {submittedData && (
                    <a
                      href={generateWhatsAppUrl(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="btn-open-whatsapp"
                      className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans text-sm font-bold tracking-wider uppercase rounded-xl shadow-md transition-all duration-200 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>APRI CHAT WHATSAPP</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="font-sans text-xs sm:text-sm text-slate-500 hover:text-[#005662] underline underline-offset-4 cursor-pointer"
                  >
                    Invia un'altra richiesta
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
