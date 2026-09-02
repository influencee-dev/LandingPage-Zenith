import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ClipboardCheck, Sliders, HeartPulse, CheckCircle2 } from 'lucide-react';

export const FisiofitConceptSection: React.FC = () => {
  return (
    <section
      id="cos-e-fisiofit"
      className="relative py-16 sm:py-24 bg-slate-50/70 border-y border-slate-200/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#005662]/10 text-[#005662] mb-4">
            <span className="font-sans font-bold text-xs tracking-wider uppercase">
              La Filosofia Zenith
            </span>
          </div>
          <h2
            id="fisiofit-title"
            className="font-heading text-3xl sm:text-5xl md:text-6xl text-[#002b31] tracking-tight uppercase leading-[0.95]"
          >
            ALLENARSI È SOLO UNA PARTE DEL PERCORSO.
          </h2>
        </div>

        {/* Section Body Text */}
        <div className="max-w-3xl mx-auto mt-8 text-center space-y-4">
          <p className="font-sans text-base sm:text-lg text-slate-700 leading-relaxed">
            Zenith nasce da un <strong className="text-[#005662] font-semibold">approccio integrato al movimento</strong>. L'obiettivo non è soltanto allenarsi, ma prevenire le problematiche muscoloscheletriche attraverso l'attività motoria e intervenire, quando necessario, attraverso il centro fisioterapico.
          </p>
          <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed">
            Il percorso parte dalla persona: attraverso una <strong className="text-[#002b31] font-semibold">valutazione chinesiologica</strong> vengono analizzate caratteristiche, necessità e obiettivi individuali. Da qui viene costruito un programma di allenamento personalizzato e, in presenza di problematiche specifiche, il percorso può essere integrato con il supporto fisioterapico.
          </p>
        </div>

        {/* Graphic Flow Representation: VALUTAZIONE -> PERCORSO PERSONALIZZATO -> MOVIMENTO + FISIOTERAPIA */}
        <div className="mt-14 sm:mt-18">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 relative">
            {/* Step 1: VALUTAZIONE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-white rounded-2xl p-6 sm:p-7 md:p-5 lg:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-[#005662]/10 text-[#005662] flex items-center justify-center group-hover:bg-[#005662] group-hover:text-white transition-colors">
                    <ClipboardCheck className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  <span className="font-heading text-xl lg:text-2xl text-slate-300 group-hover:text-[#005662] transition-colors">
                    01
                  </span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl md:text-[22px] lg:text-3xl text-[#002b31] uppercase tracking-wide break-words leading-tight">
                  VALUTAZIONE
                </h3>
                <p className="font-sans text-sm md:text-[13px] lg:text-sm text-slate-600 mt-2 leading-relaxed">
                  Analisi chinesiologica e funzionale per comprendere la tua postura, mobilità e lo stato di partenza.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#005662]">
                <CheckCircle2 className="w-4 h-4 text-[#005662] shrink-0" />
                <span>Punto di partenza su misura</span>
              </div>
            </motion.div>

            {/* Connecting Arrow for LG+ screens only to avoid tablet clutter */}
            <div className="hidden lg:flex absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center text-[#005662]">
              <ArrowRight className="w-4 h-4" />
            </div>

            {/* Step 2: PERCORSO PERSONALIZZATO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative bg-white rounded-2xl p-6 sm:p-7 md:p-5 lg:p-8 border-2 border-[#005662]/30 shadow-md flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-[#005662] text-white flex items-center justify-center">
                    <Sliders className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  <span className="font-heading text-xl lg:text-2xl text-[#005662]">
                    02
                  </span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl md:text-[22px] lg:text-3xl text-[#002b31] uppercase tracking-wide break-words leading-tight">
                  PERCORSO PERSONALIZZATO
                </h3>
                <p className="font-sans text-sm md:text-[13px] lg:text-sm text-slate-600 mt-2 leading-relaxed">
                  Creazione del programma di allenamento tarato specificamente sui tuoi obiettivi, ritmi ed esigenze.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#005662]">
                <CheckCircle2 className="w-4 h-4 text-[#005662] shrink-0" />
                <span>Schede & verifiche periodiche</span>
              </div>
            </motion.div>

            {/* Connecting Arrow for LG+ screens only to avoid tablet clutter */}
            <div className="hidden lg:flex absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center text-[#005662]">
              <ArrowRight className="w-4 h-4" />
            </div>

            {/* Step 3: MOVIMENTO + FISIOTERAPIA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative bg-white rounded-2xl p-6 sm:p-7 md:p-5 lg:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-[#005662]/10 text-[#005662] flex items-center justify-center group-hover:bg-[#005662] group-hover:text-white transition-colors">
                    <HeartPulse className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  <span className="font-heading text-xl lg:text-2xl text-slate-300 group-hover:text-[#005662] transition-colors">
                    03
                  </span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl md:text-[22px] lg:text-3xl text-[#002b31] uppercase tracking-wide break-words leading-tight">
                  MOVIMENTO + FISIOTERAPIA
                </h3>
                <p className="font-sans text-sm md:text-[13px] lg:text-sm text-slate-600 mt-2 leading-relaxed">
                  Prevenzione costante delle problematiche muscolari e articolari con integrazione fisioterapica diretta.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#005662]">
                <CheckCircle2 className="w-4 h-4 text-[#005662] shrink-0" />
                <span>Benessere duraturo e sicuro</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
