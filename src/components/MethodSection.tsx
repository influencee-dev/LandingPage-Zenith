import React from 'react';
import { motion } from 'motion/react';
import { Search, Compass, UserPlus } from 'lucide-react';

export const MethodSection: React.FC = () => {
  const steps = [
    {
      num: 'STEP 01',
      title: 'VALUTIAMO',
      description: 'Partiamo da una valutazione chinesiologica per comprendere il tuo punto di partenza.',
      icon: Search,
    },
    {
      num: 'STEP 02',
      title: 'PERSONALIZZIAMO',
      description: 'Costruiamo il percorso di allenamento più adatto alle tue caratteristiche e ai tuoi obiettivi.',
      icon: Compass,
    },
    {
      num: 'STEP 03',
      title: 'TI SEGUIAMO',
      description: 'Monitoriamo il percorso nel tempo e, quando necessario, integriamo il lavoro con il supporto fisioterapico.',
      icon: UserPlus,
    },
  ];

  return (
    <section id="metodo" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl text-[#002b31] tracking-tight uppercase leading-[0.95]">
            IL METODO ZENITH.
          </h2>
          <div className="w-20 h-1 bg-[#005662] mx-auto mt-5 mb-6 rounded-full" />
          <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed">
            Il metodo Zenith mette la persona prima dell'esercizio. Non partiamo da una scheda
            standard, ma da chi sei: come ti muovi, da dove parti e dove vuoi arrivare. Su questa
            base costruiamo un percorso che cresce con te, seguito passo dopo passo da chinesiologi,
            trainer e fisioterapisti che lavorano insieme. È così che l'allenamento diventa uno
            strumento di salute, e non solo di performance.
          </p>
        </div>

        {/* 3 Step Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 relative">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative bg-slate-50 rounded-2xl p-6 sm:p-7 md:p-5 lg:p-8 border border-slate-200 flex flex-col justify-between hover:border-[#005662]/40 hover:bg-slate-50/80 transition-all duration-300 overflow-hidden"
              >
                {/* Step Top */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-heading text-base sm:text-lg md:text-base lg:text-xl font-bold text-[#005662] tracking-wider px-2.5 py-1 bg-[#005662]/10 rounded-lg">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#005662] shadow-xs shrink-0">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl md:text-[22px] lg:text-3xl text-[#002b31] uppercase tracking-wide break-words leading-tight">
                    {step.title}
                  </h3>

                  <p className="font-sans text-sm md:text-[13px] lg:text-base text-slate-600 mt-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step Bottom Accent Line */}
                <div className="mt-6 md:mt-7 pt-4 border-t border-slate-200/80 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#005662]" />
                  <span className="font-sans text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Metodo Zenith
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
