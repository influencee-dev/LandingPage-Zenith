import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ClipboardCheck, Sliders, HeartPulse, CheckCircle2, Users, ShieldCheck } from 'lucide-react';

export const FisiofitConceptSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="cos-e-fisiofit"
      className="relative py-16 sm:py-24 bg-slate-50/80 border-y border-slate-200/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top 2-Column Row: Left Philosophy Text + Right Staff Image with Black Gradient */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#005662]/10 text-[#005662] mb-4">
              <span className="font-sans font-bold text-xs tracking-wider uppercase">
                La Filosofia Zenith
              </span>
            </div>

            <h2
              id="fisiofit-title"
              className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#002b31] tracking-tight uppercase leading-[0.98]"
            >
              ALLENARSI È SOLO UNA PARTE DEL PERCORSO.
            </h2>

            <div className="w-20 h-1 bg-[#007a8c] mt-4 mb-6 rounded-full" />

            <div className="space-y-4 text-slate-700 font-sans">
              <p className="text-base sm:text-lg leading-relaxed text-slate-700">
                Zenith nasce da un{' '}
                <strong className="text-[#005662] font-semibold">
                  approccio integrato al movimento
                </strong>
                . L'obiettivo non è soltanto allenarsi, ma prevenire le problematiche muscoloscheletriche attraverso l'attività motoria e intervenire, quando necessario, attraverso il centro fisioterapico.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                Il percorso parte dalla persona: attraverso una{' '}
                <strong className="text-[#002b31] font-semibold">
                  valutazione chinesiologica
                </strong>{' '}
                vengono analizzate caratteristiche, necessità e obiettivi individuali. Da qui viene costruito un programma di allenamento personalizzato e, in presenza di problematiche specifiche, il percorso può essere integrato con il supporto fisioterapico.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="mt-6 pt-5 border-t border-slate-200/80 w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#003e47]">
                <ShieldCheck className="w-4 h-4 text-[#005662] shrink-0" />
                <span>Specialisti del movimento</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#003e47]">
                <Users className="w-4 h-4 text-[#005662] shrink-0" />
                <span>Team multidisciplinare</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Staff Image with Black Gradient Overlay for visual continuity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-900/10 bg-slate-900 group">
              {/* Image Container with 1200x800 aspect ratio (3:2) */}
              <div className="relative w-full aspect-[1200/800] sm:aspect-[3/2] overflow-hidden bg-slate-950">
                {!imageError ? (
                  <img
                    src="/staff.png"
                    alt="Staff e Specialisti Zenith"
                    width={1200}
                    height={800}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  /* Elegant fallback if image is in upload stage */
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#002b31] via-[#003e47] to-black text-white p-8 text-center">
                    <Users className="w-16 h-16 text-teal-300/80 mb-3" />
                    <span className="font-heading text-2xl uppercase tracking-wider">Staff Zenith</span>
                    <span className="font-sans text-xs text-teal-200/80 mt-1">Specialisti in Fisioterapia & Chinesiologia</span>
                  </div>
                )}

                {/* Sfumatura nera / Dark gradients for seamless visual continuity */}
                {/* 1. Bottom-up dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                
                {/* 2. Left-side subtle shadow for transition */}
                <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />

                {/* 3. Soft vignette around borders */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />

                {/* Caption / Tag overlay on the image */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white z-10">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-sans font-semibold text-teal-200 uppercase tracking-wider mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                    Team Specialistico Zenith
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-slate-200 font-medium line-clamp-1 drop-shadow-md">
                    Fisioterapisti, Chinesiologi e Trainer sempre al tuo fianco.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Graphic Flow Representation: VALUTAZIONE -> PERCORSO PERSONALIZZATO -> MOVIMENTO + FISIOTERAPIA */}
        <div className="mt-14 sm:mt-20">
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
