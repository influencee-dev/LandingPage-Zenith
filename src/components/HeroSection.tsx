import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowRight, Activity, ShieldCheck, UserCheck, Sparkles, ThumbsUp, BadgeCheck } from 'lucide-react';

interface HeroSectionProps {
  onDiscoverPathClick: () => void;
  onViewPlansClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onDiscoverPathClick,
  onViewPlansClick,
}) => {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-white pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28"
    >
      {/* Decorative background grid and ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#005662]/5 rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#00a5b8]/5 rounded-full blur-2xl" />
        <svg
          className="absolute inset-0 w-full h-full stroke-slate-200/60 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M.5 40V.5H40" fill="none" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text & CTAs Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Category Tag */}
            <div
              id="hero-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#005662]/10 border border-[#005662]/20 text-[#005662] mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="font-sans font-bold text-xs tracking-wider uppercase">
                Centro Fisiofit Expert
              </span>
            </div>

            {/* Main Headline in Bebas Neue */}
            <h1
              id="hero-main-title"
              className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[0.95] text-[#002b31] tracking-tight uppercase"
            >
              NON SOLO ALLENAMENTO.{' '}
              <span className="block text-[#005662] mt-1 sm:mt-2">
                UN PERCORSO COSTRUITO SU DI TE.
              </span>
            </h1>

            {/* Subheadline in Montserrat */}
            <p
              id="hero-subheadline"
              className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal font-sans"
            >
              Zenith è un <strong className="text-[#002b31] font-semibold">Centro Fisiofit Expert</strong> che integra attività motoria, valutazione chinesiologica e fisioterapia per costruire un percorso realmente personalizzato.
            </p>

            {/* Dual CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                id="hero-primary-cta"
                onClick={onDiscoverPathClick}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#005662] hover:bg-[#003e47] text-white font-sans text-sm sm:text-base font-bold tracking-wider uppercase rounded-xl shadow-lg shadow-[#005662]/20 hover:shadow-xl hover:shadow-[#005662]/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>SCOPRI IL TUO PERCORSO</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                id="hero-secondary-cta"
                onClick={onViewPlansClick}
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-slate-50 text-[#005662] border-2 border-[#005662]/30 hover:border-[#005662] font-sans text-sm sm:text-base font-bold tracking-wider uppercase rounded-xl transition-all duration-200 cursor-pointer"
              >
                <span>VEDI GLI ABBONAMENTI</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>

            {/* Value Highlights List */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-4 w-full max-w-xl">
              <div className="flex flex-col">
                <span className="font-heading text-2xl sm:text-3xl text-[#005662]">100%</span>
                <span className="font-sans text-xs text-slate-500 font-medium">Personalizzato</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl sm:text-3xl text-[#005662]">CHINESIO</span>
                <span className="font-sans text-xs text-slate-500 font-medium">Valutazione iniziale</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl sm:text-3xl text-[#005662]">FISIO+FIT</span>
                <span className="font-sans text-xs text-slate-500 font-medium">Metodo integrato</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Editorial Graphic Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none pb-6 lg:pb-0">
              {/* Outer decorative card */}
              <div className="relative bg-gradient-to-br from-[#003e47] via-[#005662] to-[#002b31] rounded-3xl p-6 sm:p-8 pb-14 sm:pb-16 text-white shadow-2xl overflow-hidden">
                {/* Soft ambient lighting without custom SVG drawings */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#00a5b8]/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#002b31]/40 rounded-full blur-2xl pointer-events-none" />

                {/* Card Header with Logotipo loaded from GitHub */}
                <div className="flex items-center justify-between border-b border-white/15 pb-5">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/logotipo.png"
                      alt="Zenith"
                      className="h-6 sm:h-7 w-auto object-contain max-w-[140px]"
                    />
                  </div>
                  <span className="font-sans font-semibold text-xs text-teal-200/90 bg-white/10 px-2.5 py-1 rounded-md">
                    METODO FISIOFIT
                  </span>
                </div>

                {/* 3 Pillars Visualization inside Card */}
                <div className="mt-6 space-y-3.5">
                  {/* Pillar 1 */}
                  <div className="flex items-start gap-3.5 p-3.5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
                    <div className="p-2.5 bg-[#002b31]/60 rounded-lg text-[#00a5b8] shrink-0 mt-0.5">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading text-lg text-white tracking-wide">01. VALUTAZIONE</span>
                      </div>
                      <p className="font-sans text-xs text-teal-100/90 mt-0.5 leading-snug">
                        Analisi chinesiologica posturale, funzionale e test degli obiettivi personali.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 2 */}
                  <div className="flex items-start gap-3.5 p-3.5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
                    <div className="p-2.5 bg-[#002b31]/60 rounded-lg text-[#00a5b8] shrink-0 mt-0.5">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading text-lg text-white tracking-wide">02. PROGRAMMAZIONE SU MISURA</span>
                      </div>
                      <p className="font-sans text-xs text-teal-100/90 mt-0.5 leading-snug">
                        Schede di lavoro specifiche, monitoraggio e progressione continua.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 3 */}
                  <div className="flex items-start gap-3.5 p-3.5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
                    <div className="p-2.5 bg-[#002b31]/60 rounded-lg text-[#00a5b8] shrink-0 mt-0.5">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading text-lg text-white tracking-wide">03. PREVENZIONE & FISIOTERAPIA</span>
                      </div>
                      <p className="font-sans text-xs text-teal-100/90 mt-0.5 leading-snug">
                        Supporto fisioterapico dedicato e sinergia per recupero e benessere duraturo.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Tagline inside Card */}
                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-end text-xs font-sans">
                  <span className="font-semibold text-white/95 tracking-wider uppercase text-[11px] sm:text-xs">
                    Salute · Performance · Cura
                  </span>
                </div>
              </div>

              {/* Floating Accent Badge: Fisiofit Expert Guarantee */}
              <div className="absolute -bottom-5 left-4 sm:left-6 lg:-left-6 bg-white p-3 sm:p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-10">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#005662] to-[#003e47] flex items-center justify-center text-teal-200 shrink-0 shadow-sm border border-teal-600/30">
                  <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5 text-teal-100" />
                </div>
                <div>
                  <div className="font-heading text-base sm:text-lg font-bold text-[#002b31] leading-tight tracking-wide">
                    FISIOFIT EXPERT
                  </div>
                  <div className="font-sans text-[11px] text-slate-500 font-medium flex items-center gap-1">
                    <BadgeCheck className="w-3 h-3 text-[#005662] shrink-0" />
                    <span className="whitespace-nowrap">Metodo certificato Zenith</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
