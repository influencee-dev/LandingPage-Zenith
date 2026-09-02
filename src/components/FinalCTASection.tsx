import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCTASectionProps {
  onCtaClick: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onCtaClick }) => {
  return (
    <section id="cta-finale" className="relative py-16 sm:py-24 bg-[#002b31] text-white overflow-hidden">
      {/* Ambient background glow without custom SVG drawings */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#005662]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Logotipo loaded from logotipo.png on GitHub */}
          <div className="flex justify-center mb-6">
            <img
              src="/logotipo.png"
              alt="Zenith Fisiofit Expert Logotipo"
              className="h-12 sm:h-16 w-auto object-contain max-w-[280px] sm:max-w-xs"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-teal-200 mb-6 border border-white/10">
            <Sparkles className="w-4 h-4" />
            <span className="font-sans font-bold text-xs tracking-wider uppercase">
              Fai il Primo Passo
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[0.95]">
            IL PERCORSO GIUSTO PARTE DA UNA BUONA VALUTAZIONE.
          </h2>

          <p className="font-sans text-base sm:text-lg md:text-xl text-teal-100/90 mt-5 max-w-2xl mx-auto leading-relaxed">
            Parlaci dei tuoi obiettivi e scopri come Zenith può accompagnarti nel tuo percorso.
          </p>

          <div className="mt-9">
            <button
              type="button"
              id="btn-final-cta"
              onClick={onCtaClick}
              className="group inline-flex items-center justify-center gap-3 px-9 py-4.5 bg-[#007a8c] hover:bg-[#005662] text-white font-sans text-base font-bold tracking-wider uppercase rounded-xl shadow-2xl transition-all duration-200 transform hover:scale-105 active:scale-100 cursor-pointer"
            >
              <span>PARLA CON ZENITH</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
