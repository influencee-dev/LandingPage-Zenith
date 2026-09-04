import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Tag, ArrowRight, Building2 } from 'lucide-react';
import { InterestOption } from '../types';

interface CoursesSectionProps {
  onSelectCourses: (interest: InterestOption) => void;
}

interface Promo {
  id: string;
  title: string;
  detail: string;
  oldPrice: string;
  newPrice: string;
}

const PROMOS: Promo[] = [
  {
    id: 'sala-attrezzi',
    title: 'Sala attrezzi + valutazione iniziale',
    detail: 'Abbonamento annuale',
    oldPrice: '440€',
    newPrice: '360€',
  },
  {
    id: 'personal-trainer',
    title: 'Personal trainer + valutazione iniziale',
    detail: 'Percorso con trainer dedicato',
    oldPrice: '640€',
    newPrice: '440€',
  },
  {
    id: 'wellness',
    title: 'Sala attrezzi + schede mensili + nutrizionista mensile',
    detail: 'Percorso completo con supporto nutrizionale',
    oldPrice: '1040€',
    newPrice: '860€',
  },
];

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onSelectCourses }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="promo" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative bg-gradient-to-br from-slate-50 via-teal-50/30 to-slate-100/80 rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/90 shadow-lg overflow-hidden"
        >
          {/* Ambient Lighting & Glow */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#005662]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute left-1/3 bottom-0 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

          {/* 2-Column Grid to accommodate large 1000x1000 image on the right */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#005662]/10 text-[#005662] mb-5 border border-[#005662]/15">
                <Tag className="w-4 h-4" />
                <span className="font-sans font-bold text-xs tracking-wider uppercase">
                  Promozioni attive
                </span>
              </div>

              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#002b31] tracking-tight uppercase leading-[0.95]">
                CERCHI UNA PROMO?
              </h2>

              <p className="font-sans text-base sm:text-lg text-slate-700 mt-5 leading-relaxed max-w-xl font-normal">
                Tre formule pensate per iniziare subito il tuo percorso, a un prezzo riservato a
                chi si iscrive adesso.
              </p>

              {/* Elenco promo */}
              <div className="mt-7 w-full max-w-2xl space-y-3.5">
                {PROMOS.map((promo) => (
                  <div
                    key={promo.id}
                    className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-[#005662]/40 transition-all flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <div className="font-sans text-sm sm:text-base font-bold text-[#002b31] leading-snug">
                        {promo.title}
                      </div>
                      <div className="font-sans text-xs text-slate-500 mt-0.5">{promo.detail}</div>
                    </div>

                    <div className="flex items-baseline gap-2.5 shrink-0">
                      <span className="font-sans text-sm sm:text-base text-slate-400 line-through">
                        {promo.oldPrice}
                      </span>
                      <span className="font-heading text-3xl sm:text-4xl text-[#005662] tracking-tight">
                        {promo.newPrice}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Nota pagamenti dilazionati */}
              <p className="font-sans text-xs text-slate-500 mt-4">
                Possibilità di pagamenti dilazionati.
              </p>

              <div className="mt-8 pt-2">
                <button
                  type="button"
                  id="btn-chiedi-info-promo"
                  onClick={() => onSelectCourses('Promo')}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#005662] hover:bg-[#003e47] text-white font-sans text-sm sm:text-base font-bold tracking-wider uppercase rounded-xl shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer"
                >
                  <span>APPROFITTA DELLA PROMO</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Image Column (1000x1000px aspect-square) */}
            <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-none aspect-square rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
                {!imageError ? (
                  <img
                    src="/centro.png"
                    alt="Centro Zenith"
                    width={1000}
                    height={1000}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#002b31] via-[#003e47] to-slate-900 text-white p-8 text-center">
                    <Building2 className="w-16 h-16 text-teal-300/80 mb-3" />
                    <span className="font-heading text-2xl uppercase tracking-wider">Centro Zenith</span>
                    <span className="font-sans text-xs text-teal-200/80 mt-1">Spazi e Attrezzature Specialistiche</span>
                  </div>
                )}

                {/* Sfumatura e overlay di finitura */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />

                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-sans font-semibold text-teal-200 uppercase tracking-wider mb-1">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                    Il Nostro Centro
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-slate-200 font-medium drop-shadow">
                    Spazi dedicati ai percorsi personalizzati Zenith.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
