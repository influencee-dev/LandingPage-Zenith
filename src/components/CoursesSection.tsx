import React from 'react';
import { motion } from 'motion/react';
import { Dumbbell, ArrowRight, Sparkles } from 'lucide-react';
import { InterestOption } from '../types';

interface CoursesSectionProps {
  onSelectCourses: (interest: InterestOption) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onSelectCourses }) => {
  return (
    <section id="corsi" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-slate-50 to-teal-50/50 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm overflow-hidden"
        >
          {/* Subtle background element */}
          <div className="absolute right-0 top-0 w-72 h-72 bg-[#005662]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#005662]/10 text-[#005662] mb-4">
              <Dumbbell className="w-4 h-4" />
              <span className="font-sans font-bold text-xs tracking-wider uppercase">
                Attività di Gruppo & Specialistiche
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl text-[#002b31] tracking-tight uppercase leading-[0.95]">
              CERCHI UN CORSO?
            </h2>

            <p className="font-sans text-base sm:text-lg text-slate-700 mt-4 leading-relaxed max-w-2xl font-normal">
              Scopri le attività Zenith e trova il percorso più adatto alle tue esigenze.
            </p>

            <div className="mt-8">
              <button
                type="button"
                id="btn-chiedi-info-corsi"
                onClick={() => onSelectCourses('Corsi')}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#005662] hover:bg-[#003e47] text-white font-sans text-sm sm:text-base font-bold tracking-wider uppercase rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>CHIEDI INFORMAZIONI SUI CORSI</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
