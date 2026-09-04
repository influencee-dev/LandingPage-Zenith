import React from 'react';
import { motion } from 'motion/react';
import {
  Check,
  ArrowRight,
  MessageCircle,
  Dumbbell,
  UserRoundCheck,
  HeartPulse,
  Stethoscope,
  LucideIcon,
} from 'lucide-react';
import { InterestOption } from '../types';

interface SubscriptionCardsSectionProps {
  onSelectPlan: (planName: InterestOption) => void;
}

interface PathCard {
  id: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  includes: string[];
  interest: InterestOption;
}

const PATHS: PathCard[] = [
  {
    id: 'palestra-fitness',
    title: 'PALESTRA FITNESS',
    tagline: 'Allenati in autonomia, con spazi e attrezzature complete.',
    icon: Dumbbell,
    includes: [
      'Sala attrezzi con macchine isotoniche',
      'Area pesi liberi e functional training',
      'Zona cardio: tapis roulant, bike, ellittiche',
      'Scheda di allenamento di base',
      'Assistenza in sala negli orari di apertura',
      'Spogliatoi, docce e armadietti',
    ],
    interest: 'Palestra Fitness',
  },
  {
    id: 'personal-trainer',
    title: 'CENTRO PERSONAL TRAINER',
    tagline: 'Un professionista dedicato, solo per i tuoi obiettivi.',
    icon: UserRoundCheck,
    includes: [
      'Allenamento one to one con trainer dedicato',
      'Valutazione iniziale e definizione degli obiettivi',
      'Programma su misura e progressione monitorata',
      'Sedute su appuntamento, anche in small group',
      'Verifiche periodiche dei risultati',
      'Consigli su recupero e stile di vita',
    ],
    interest: 'Centro Personal Trainer',
  },
  {
    id: 'palestra-terapeutica',
    title: 'PALESTRA TERAPEUTICA',
    tagline: 'Il movimento come strumento di salute e prevenzione.',
    icon: HeartPulse,
    includes: [
      'Attività motoria adattata e ginnastica posturale',
      'Rieducazione funzionale post-infortunio',
      'Percorsi per mal di schiena, cervicale e artrosi',
      'Programmi per sovrappeso e patologie croniche',
      'Lavoro supervisionato da chinesiologi',
      'Raccordo diretto con i fisioterapisti del centro',
    ],
    interest: 'Palestra Terapeutica',
  },
  {
    id: 'fisioterapia',
    title: 'CENTRO FISIOTERAPIA',
    tagline: 'Cura del dolore e recupero, quando serve un intervento mirato.',
    icon: Stethoscope,
    includes: [
      'Valutazione fisioterapica e funzionale',
      'Terapia manuale e trattamenti osteopatici',
      'Terapie strumentali: tecar, laser, ultrasuoni',
      'Riabilitazione post-trauma e post-chirurgica',
      'Trattamento del dolore muscoloscheletrico',
      'Rientro graduale e sicuro all’attività motoria',
    ],
    interest: 'Centro Fisioterapia',
  },
];

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
              I Nostri Servizi
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
            Quattro percorsi, un unico obiettivo: costruire quello più adatto a te.
          </p>
        </div>

        {/* 4 Path Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-stretch">
          {PATHS.map((path, index) => {
            const IconComponent = path.icon;
            return (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#005662]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Icona rappresentativa del percorso */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#005662]/10 text-[#005662] flex items-center justify-center group-hover:bg-[#005662] group-hover:text-white transition-colors">
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>

                  {/* Titolo e tagline */}
                  <div className="mt-5 pb-5 border-b border-slate-100">
                    <h3 className="font-heading text-2xl sm:text-[26px] text-[#002b31] tracking-wide uppercase leading-tight break-words lg:min-h-[64px]">
                      {path.title}
                    </h3>
                    <p className="font-sans text-sm text-slate-500 mt-2 leading-relaxed">
                      {path.tagline}
                    </p>
                  </div>

                  {/* Cosa comprende */}
                  <ul className="space-y-3 mt-5">
                    {path.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-slate-700 font-sans text-sm leading-snug"
                      >
                        <div className="w-[18px] h-[18px] rounded-full bg-[#005662] text-white flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    id={`btn-plan-${path.id}`}
                    onClick={() => onSelectPlan(path.interest)}
                    className="w-full group/cta inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-slate-100 hover:bg-[#005662] text-[#005662] hover:text-white font-sans text-sm font-bold tracking-wider uppercase rounded-xl transition-all duration-200 cursor-pointer"
                  >
                    <span>RICHIEDI INFORMAZIONI</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
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
