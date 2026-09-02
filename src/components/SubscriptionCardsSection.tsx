import React from 'react';
import { motion } from 'motion/react';
import { Check, Gift, ArrowRight, MessageCircle } from 'lucide-react';
import { InterestOption } from '../types';

interface SubscriptionCardsSectionProps {
  onSelectPlan: (planName: InterestOption) => void;
}

export const SubscriptionCardsSection: React.FC<SubscriptionCardsSectionProps> = ({
  onSelectPlan,
}) => {
  return (
    <section
      id="abbonamenti"
      className="py-16 sm:py-24 bg-slate-50/80 border-t border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching the graphic headline */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#005662]/10 text-[#005662] mb-3">
            <span className="font-sans font-bold text-xs tracking-wider uppercase">
              Formule e Quote
            </span>
          </div>

          <h2
            id="subscription-title"
            className="font-heading text-4xl sm:text-6xl md:text-7xl text-[#002b31] tracking-tight uppercase leading-[0.95]"
          >
            SCEGLI <span className="text-[#007a8c]">IL TUO</span> PERCORSO
          </h2>

          <div className="w-24 h-1 bg-[#007a8c] mx-auto mt-3 mb-4 rounded-full" />

          <p className="font-sans text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-medium">
            Tre formule, un unico obiettivo: costruire il percorso più adatto a te.
          </p>
        </div>

        {/* 3 Subscription Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* ========================================================
              CARD 1: SALA ATTREZZI
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Card Header & Price */}
              <div className="border-b border-slate-100 pb-6">
                <h3 className="font-heading text-2xl sm:text-3xl text-[#002b31] tracking-wide uppercase">
                  SALA ATTREZZI
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-heading text-5xl sm:text-6xl text-[#005662] font-bold tracking-tight">
                    €360
                  </span>
                </div>
              </div>

              {/* Card Image */}
              <div className="mt-6 mb-6 flex items-center justify-center min-h-[160px] sm:min-h-[180px] bg-slate-50/70 rounded-2xl p-4 overflow-hidden">
                <img
                  src="/card1.png"
                  alt="Abbonamento Sala Attrezzi Zenith"
                  className="w-full max-h-44 sm:max-h-48 object-contain mx-auto transition-transform hover:scale-105 duration-300"
                />
              </div>

              {/* Benefits list */}
              <div className="space-y-3.5 my-6">
                <div className="flex items-start gap-3 text-slate-700 font-sans text-sm sm:text-base">
                  <div className="w-5 h-5 rounded-full bg-[#005662] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-medium">Maglietta Zenith inclusa</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-4">
              <button
                type="button"
                id="btn-plan-sala-attrezzi"
                onClick={() => onSelectPlan('Sala Attrezzi')}
                className="w-full group inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-slate-100 hover:bg-[#005662] text-[#005662] hover:text-white font-sans text-sm font-bold tracking-wider uppercase rounded-xl transition-all duration-200 cursor-pointer"
              >
                <span>VOGLIO SAPERNE DI PIÙ</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* ========================================================
              CARD 2: SALA ATTREZZI + FOLLOW UP (Enhanced Elevation)
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#005662] shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between relative transform lg:-translate-y-2"
          >
            {/* Top Accent Band */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#005662] text-white font-sans text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-sm">
              FOLLOW UP COMPLETO
            </div>

            <div>
              {/* Card Header & Price */}
              <div className="border-b border-slate-100 pb-6 pt-2">
                <h3 className="font-heading text-2xl sm:text-3xl text-[#002b31] tracking-wide uppercase">
                  SALA ATTREZZI + FOLLOW UP
                </h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-heading text-5xl sm:text-6xl text-[#005662] font-bold tracking-tight">
                    €510
                  </span>
                  <span className="font-heading text-xl text-slate-500 tracking-wider">
                    | 10 MESI
                  </span>
                </div>
              </div>

              {/* Card Image */}
              <div className="mt-6 mb-6 flex items-center justify-center min-h-[160px] sm:min-h-[180px] bg-slate-50/70 rounded-2xl p-4 overflow-hidden">
                <img
                  src="/card2.png"
                  alt="Abbonamento Sala Attrezzi + Follow Up Zenith"
                  className="w-full max-h-44 sm:max-h-48 object-contain mx-auto transition-transform hover:scale-105 duration-300"
                />
              </div>

              {/* Includes List */}
              <div className="space-y-3 my-6">
                <div className="flex items-start gap-3 text-slate-800 font-sans text-sm sm:text-base">
                  <div className="w-5 h-5 rounded-full bg-[#005662] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Valutazione funzionale</span>
                </div>

                <div className="flex items-start gap-3 text-slate-800 font-sans text-sm sm:text-base">
                  <div className="w-5 h-5 rounded-full bg-[#005662] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Schede personalizzate</span>
                </div>

                <div className="flex items-start gap-3 text-slate-800 font-sans text-sm sm:text-base">
                  <div className="w-5 h-5 rounded-full bg-[#005662] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>BIA mensile</span>
                </div>

                {/* Benefit item with gift icon */}
                <div className="flex items-start gap-3 text-[#005662] font-sans text-sm sm:text-base font-semibold pt-2 border-t border-slate-100">
                  <div className="w-5 h-5 rounded-full bg-[#005662]/10 text-[#005662] flex items-center justify-center shrink-0 mt-0.5">
                    <Gift className="w-3.5 h-3.5" />
                  </div>
                  <span>Maglietta + telo Zenith</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-4">
              <button
                type="button"
                id="btn-plan-follow-up"
                onClick={() => onSelectPlan('Sala Attrezzi + Follow Up')}
                className="w-full group inline-flex items-center justify-center gap-2 py-4 px-5 bg-[#005662] hover:bg-[#003e47] text-white font-sans text-sm font-bold tracking-wider uppercase rounded-xl shadow-md transition-all duration-200 cursor-pointer"
              >
                <span>SCOPRI IL PERCORSO</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* ========================================================
              CARD 3: SALA ATTREZZI + WELLNESS (Top Tier Elevation)
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#003e47] shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between relative transform lg:-translate-y-2"
          >
            {/* Top Accent Band */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#003e47] text-white font-sans text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-sm">
              PERCORSO INTEGRATO TOP
            </div>

            <div>
              {/* Card Header & Price */}
              <div className="border-b border-slate-100 pb-6 pt-2">
                <h3 className="font-heading text-2xl sm:text-3xl text-[#002b31] tracking-wide uppercase">
                  SALA ATTREZZI + WELLNESS
                </h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-heading text-5xl sm:text-6xl text-[#005662] font-bold tracking-tight">
                    €860
                  </span>
                  <span className="font-heading text-xl text-slate-500 tracking-wider">
                    | 10 MESI
                  </span>
                </div>
              </div>

              {/* Card Image */}
              <div className="mt-6 mb-6 flex items-center justify-center min-h-[160px] sm:min-h-[180px] bg-slate-50/70 rounded-2xl p-4 overflow-hidden">
                <img
                  src="/card3.png"
                  alt="Abbonamento Sala Attrezzi + Wellness Zenith"
                  className="w-full max-h-44 sm:max-h-48 object-contain mx-auto transition-transform hover:scale-105 duration-300"
                />
              </div>

              {/* Includes List */}
              <div className="space-y-3 my-6">
                <div className="flex items-start gap-3 text-slate-800 font-sans text-sm sm:text-base">
                  <div className="w-5 h-5 rounded-full bg-[#005662] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Valutazione funzionale</span>
                </div>

                <div className="flex items-start gap-3 text-slate-800 font-sans text-sm sm:text-base">
                  <div className="w-5 h-5 rounded-full bg-[#005662] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Schede personalizzate</span>
                </div>

                <div className="flex items-start gap-3 text-slate-800 font-sans text-sm sm:text-base">
                  <div className="w-5 h-5 rounded-full bg-[#005662] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>BIA mensile</span>
                </div>

                <div className="flex items-start gap-3 text-slate-800 font-sans text-sm sm:text-base">
                  <div className="w-5 h-5 rounded-full bg-[#005662] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-semibold text-[#003e47]">Nutrizionista</span>
                </div>

                {/* Benefit item with gift icon */}
                <div className="flex items-start gap-3 text-[#005662] font-sans text-sm sm:text-base font-semibold pt-2 border-t border-slate-100">
                  <div className="w-5 h-5 rounded-full bg-[#005662]/10 text-[#005662] flex items-center justify-center shrink-0 mt-0.5">
                    <Gift className="w-3.5 h-3.5" />
                  </div>
                  <span>Maglietta + telo + zaino Zenith</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-4">
              <button
                type="button"
                id="btn-plan-wellness"
                onClick={() => onSelectPlan('Sala Attrezzi + Wellness')}
                className="w-full group inline-flex items-center justify-center gap-2 py-4 px-5 bg-[#003e47] hover:bg-[#002b31] text-white font-sans text-sm font-bold tracking-wider uppercase rounded-xl shadow-md transition-all duration-200 cursor-pointer"
              >
                <span>RICHIEDI INFORMAZIONI</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Callout Banner matching flyer design */}
        <div className="mt-12 bg-gradient-to-r from-[#003e47] to-[#005662] rounded-2xl p-6 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-teal-200 shrink-0 hidden sm:flex">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="font-heading text-2xl sm:text-3xl tracking-wide uppercase text-white">
                SCEGLI IL PERCORSO GIUSTO PER TE.
              </div>
              <p className="font-sans text-xs sm:text-sm text-teal-100 mt-0.5">
                Scrivici o chiamaci per informazioni e iscrizioni.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
