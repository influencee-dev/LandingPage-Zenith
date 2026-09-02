import React from 'react';
import { MapPin, Phone, Mail, Shield, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { ZENITH_CONFIG } from '../types';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#001d22] text-slate-300 font-sans border-t border-teal-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-24 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-6 flex flex-col items-start space-y-4">
            <img
              src="/logo.png"
              alt="Zenith Fisiofit Expert"
              className="h-12 sm:h-14 w-auto object-contain max-h-16"
            />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mt-2">
              Centro Fisiofit Expert specializzato in attività motoria personalizzata, valutazione chinesiologica, prevenzione e fisioterapia.
            </p>
            {/* Social Links Zenith */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={ZENITH_CONFIG.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 text-teal-200 flex items-center justify-center transition-colors"
                aria-label="Instagram Centro Zenith"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={ZENITH_CONFIG.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 text-teal-200 flex items-center justify-center transition-colors"
                aria-label="Facebook Centro Zenith Foggia"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Contatti & Sede */}
          <div className="md:col-span-4 space-y-4">
            <div className="font-heading text-xl text-white tracking-wider uppercase mb-4">
              CONTATTI & SEDE
            </div>
            
            <div className="flex items-start gap-3 text-sm text-slate-300">
              <MapPin className="w-4 h-4 text-[#00a5b8] shrink-0 mt-1" />
              <div>
                <span className="text-xs text-slate-400 block uppercase font-semibold">Indirizzo:</span>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(ZENITH_CONFIG.ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs sm:text-sm text-teal-100 hover:underline transition-colors block"
                >
                  {ZENITH_CONFIG.ADDRESS}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm text-slate-300">
              <Phone className="w-4 h-4 text-[#00a5b8] shrink-0 mt-1" />
              <div>
                <span className="text-xs text-slate-400 block uppercase font-semibold">Telefono:</span>
                <a
                  href={`tel:${ZENITH_CONFIG.PHONE_RAW}`}
                  className="font-mono text-xs sm:text-sm text-teal-100 hover:text-white transition-colors block"
                >
                  {ZENITH_CONFIG.PHONE}
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Link & Privacy */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-heading text-xl text-white tracking-wider uppercase mb-4">
              INFORMAZIONI
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="text-slate-400 hover:text-teal-200 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <a href="#abbonamenti" className="text-slate-400 hover:text-teal-200 transition-colors">
                  Abbonamenti
                </a>
              </li>
              <li>
                <a href="#corsi" className="text-slate-400 hover:text-teal-200 transition-colors">
                  Corsi
                </a>
              </li>
              <li>
                <a href="#metodo" className="text-slate-400 hover:text-teal-200 transition-colors">
                  Metodo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Zenith Fisiofit Expert. Tutti i diritti riservati.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-slate-400 hover:text-teal-200 transition-colors cursor-pointer"
          >
            <span>Torna su</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Powered by Socialee Section */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col items-center justify-center text-center gap-3">
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
            <span>Powered by</span>
            <img
              src="/logo-socialee.png"
              alt="Socialee"
              className="h-5 sm:h-6 w-auto object-contain inline-block"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <a
              href="tel:+393281230265"
              className="inline-flex items-center gap-1.5 hover:text-teal-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>+39 328 123 0265</span>
            </a>

            <a
              href="mailto:info@socialee.it"
              className="inline-flex items-center gap-1.5 hover:text-teal-200 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              <span>info@socialee.it</span>
            </a>

            <a
              href="https://www.instagram.com/socialee.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-teal-200 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>@socialee.it</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
