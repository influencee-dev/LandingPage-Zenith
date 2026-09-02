import React from 'react';
import { ZenithSymbol } from './ZenithLogo';

interface MerchandiseVisualProps {
  items: ('tshirt' | 'towel' | 'backpack')[];
  className?: string;
}

export const TshirtSvg: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* T-Shirt Base */}
    <path
      d="M60 40 L30 65 L48 88 L65 72 L65 165 C65 168 67 170 70 170 L130 170 C133 170 135 168 135 165 L135 72 L152 88 L170 65 L140 40 C130 52 115 56 100 56 C85 56 70 52 60 40 Z"
      fill="#005662"
    />
    {/* Collar detail */}
    <path
      d="M75 40 C82 50 90 54 100 54 C110 54 118 50 125 40 C118 46 110 49 100 49 C90 49 82 46 75 40 Z"
      fill="#003e47"
    />
    {/* Folds and shading */}
    <path d="M65 72 L70 165" stroke="#00454f" strokeWidth="2" opacity="0.6" />
    <path d="M135 72 L130 165" stroke="#00454f" strokeWidth="2" opacity="0.6" />
    <path d="M30 65 L60 40" stroke="#007a8c" strokeWidth="1.5" opacity="0.4" />
    <path d="M170 65 L140 40" stroke="#007a8c" strokeWidth="1.5" opacity="0.4" />
    {/* Zenith Chest Logo on Shirt */}
    <g transform="translate(85, 76) scale(0.3)">
      <ZenithSymbol color="#ffffff" className="w-100 h-100" />
    </g>
    <text
      x="100"
      y="112"
      textAnchor="middle"
      fill="#ffffff"
      fontFamily="'Montserrat', sans-serif"
      fontSize="9.5"
      letterSpacing="-0.3"
      fontWeight="900"
    >
      ZENITH
    </text>
    <text
      x="100"
      y="120"
      textAnchor="middle"
      fill="#ffffff"
      fontFamily="'Montserrat', sans-serif"
      fontSize="3.8"
      letterSpacing="0.8"
      fontWeight="700"
    >
      FISIOFIT·EXPERT
    </text>
  </svg>
);

export const TowelSvg: React.FC<{ className?: string }> = ({ className = 'w-20 h-14' }) => (
  <svg viewBox="0 0 160 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Rolled microfiber gym towel */}
    <ellipse cx="120" cy="50" rx="22" ry="32" fill="#003e47" />
    <ellipse cx="120" cy="50" rx="17" ry="26" fill="#002b31" />
    <ellipse cx="120" cy="50" rx="10" ry="16" fill="#001d22" />
    <path
      d="M35 18 C30 18 20 30 20 50 C20 70 30 82 35 82 L120 82 C132 82 142 68 142 50 C142 32 132 18 120 18 L35 18 Z"
      fill="#005662"
    />
    {/* Microfiber Texture & Stitching */}
    <line x1="38" y1="23" x2="116" y2="23" stroke="#007a8c" strokeWidth="1.5" strokeDasharray="3 2" />
    <line x1="38" y1="77" x2="116" y2="77" stroke="#007a8c" strokeWidth="1.5" strokeDasharray="3 2" />
    {/* Towel Logo */}
    <g transform="translate(48, 38) scale(0.25)">
      <ZenithSymbol color="#ffffff" className="w-100 h-100" />
    </g>
    <text
      x="88"
      y="48"
      fill="#ffffff"
      fontFamily="'Montserrat', sans-serif"
      fontSize="10"
      fontWeight="900"
      letterSpacing="-0.3"
    >
      ZENITH
    </text>
    <text
      x="88"
      y="57"
      fill="#ffffff"
      fontFamily="'Montserrat', sans-serif"
      fontSize="4.2"
      fontWeight="700"
      letterSpacing="0.8"
    >
      FISIOFIT·EXPERT
    </text>
  </svg>
);

export const BackpackSvg: React.FC<{ className?: string }> = ({ className = 'w-24 h-28' }) => (
  <svg viewBox="0 0 160 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Backpack Top Handle */}
    <path
      d="M60 40 C60 25 100 25 100 40"
      stroke="#003138"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
    />
    {/* Main Body */}
    <path
      d="M35 60 C35 35 125 35 125 60 L132 170 C132 182 120 188 105 188 L55 188 C40 188 28 182 28 170 L35 60 Z"
      fill="#00454f"
    />
    {/* Front Zipper Pocket */}
    <path
      d="M38 105 C38 95 122 95 122 105 L124 172 C124 178 116 182 105 182 L55 182 C44 182 36 178 36 172 L38 105 Z"
      fill="#005662"
    />
    {/* Zipper Lines */}
    <path d="M42 105 L118 105" stroke="#003138" strokeWidth="2.5" />
    <path d="M45 65 C55 52 105 52 115 65" stroke="#003138" strokeWidth="2.5" />
    
    {/* Side Pockets for Water Bottle */}
    <path d="M26 130 C26 120 34 120 34 130 L34 170 C34 175 26 175 26 170 Z" fill="#003138" />
    <path d="M134 130 C134 120 126 120 126 130 L126 170 C126 175 134 175 134 170 Z" fill="#003138" />

    {/* Backpack Zenith Logo */}
    <g transform="translate(68, 118) scale(0.24)">
      <ZenithSymbol color="#ffffff" className="w-100 h-100" />
    </g>
    <text
      x="80"
      y="148"
      textAnchor="middle"
      fill="#ffffff"
      fontFamily="'Montserrat', sans-serif"
      fontSize="8.5"
      fontWeight="900"
      letterSpacing="-0.2"
    >
      ZENITH
    </text>
    <text
      x="80"
      y="155"
      textAnchor="middle"
      fill="#ffffff"
      fontFamily="'Montserrat', sans-serif"
      fontSize="3.4"
      fontWeight="700"
      letterSpacing="0.6"
    >
      FISIOFIT·EXPERT
    </text>
  </svg>
);

export const MerchandiseVisual: React.FC<MerchandiseVisualProps> = ({ items, className = '' }) => {
  const hasTshirt = items.includes('tshirt');
  const hasTowel = items.includes('towel');
  const hasBackpack = items.includes('backpack');

  return (
    <div className={`relative flex items-center justify-center p-3 bg-gradient-to-br from-slate-50 to-teal-50/40 rounded-xl border border-slate-100 min-h-[140px] overflow-hidden ${className}`}>
      {/* Background radial halo */}
      <div className="absolute inset-0 bg-radial from-[#005662]/5 to-transparent opacity-60 pointer-events-none" />

      <div className="relative flex items-end justify-center gap-1 sm:gap-2">
        {hasTshirt && (
          <div className="transition-transform duration-300 hover:scale-105 drop-shadow-md">
            <TshirtSvg className="w-24 h-24 sm:w-28 sm:h-28" />
          </div>
        )}

        {hasTowel && (
          <div className={`transition-transform duration-300 hover:scale-105 drop-shadow-md ${hasBackpack ? '-ml-5 z-10' : '-ml-3'}`}>
            <TowelSvg className="w-20 h-14 sm:w-24 sm:h-16" />
          </div>
        )}

        {hasBackpack && (
          <div className="transition-transform duration-300 hover:scale-105 drop-shadow-lg -ml-4 z-0">
            <BackpackSvg className="w-22 h-26 sm:w-26 sm:h-30" />
          </div>
        )}
      </div>
    </div>
  );
};
