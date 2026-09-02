import React from 'react';

interface ZenithLogoProps {
  variant?: 'teal' | 'white' | 'dark';
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const ZenithSymbol: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-10 h-10',
  color = 'currentColor',
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Zenith Logo Icon"
    >
      {/* Top Ribbon Piece with Kinesiological Z-Link */}
      <path
        d="M 50 4 C 42 14 30 26 12 42 C 6 48 10 56 20 56 C 36 56 52 50 68 56 C 78 60 84 66 86 72 C 86 74 82 75 78 72 C 64 62 48 56 34 58 C 22 60 16 52 20 46 C 26 36 36 28 50 24 C 64 28 74 36 80 46 C 84 52 78 60 66 58 C 62 57 60 54 62 50 C 64 46 72 44 74 38 C 76 34 68 24 50 4 Z"
        fill={color}
      />
      {/* Bottom Ribbon Piece (180deg Rotational Symmetrical Partner) */}
      <path
        d="M 50 96 C 58 86 70 74 88 58 C 94 52 90 44 80 44 C 64 44 48 50 32 44 C 22 40 16 34 14 28 C 14 26 18 25 22 28 C 36 38 52 44 66 42 C 78 40 84 48 80 54 C 74 64 64 72 50 76 C 36 72 26 64 20 54 C 16 48 22 40 34 42 C 38 43 40 46 38 50 C 36 54 28 56 26 62 C 24 66 32 76 50 96 Z"
        fill={color}
      />
    </svg>
  );
};

export const ZenithLogo: React.FC<ZenithLogoProps> = ({
  variant = 'teal',
  className = '',
  iconOnly = false,
  size = 'md',
}) => {
  const colorClass =
    variant === 'white'
      ? 'text-white'
      : variant === 'dark'
      ? 'text-[#002b31]'
      : 'text-[#004f59]';

  const iconSize =
    size === 'sm'
      ? 'w-8 h-8'
      : size === 'lg'
      ? 'w-13 h-13'
      : size === 'xl'
      ? 'w-16 h-16'
      : 'w-10 h-10';

  const titleSize =
    size === 'sm'
      ? 'text-xl tracking-tight'
      : size === 'lg'
      ? 'text-3xl tracking-tight'
      : size === 'xl'
      ? 'text-4xl tracking-tight'
      : 'text-2xl tracking-tight';

  const subSize =
    size === 'sm'
      ? 'text-[7.5px] tracking-[0.22em]'
      : size === 'lg'
      ? 'text-[10px] tracking-[0.26em]'
      : size === 'xl'
      ? 'text-[12px] tracking-[0.28em]'
      : 'text-[8.5px] tracking-[0.24em]';

  if (iconOnly) {
    return (
      <div className={`inline-flex items-center justify-center ${colorClass} ${className}`}>
        <ZenithSymbol className={iconSize} />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${colorClass} ${className}`}>
      <ZenithSymbol className={`${iconSize} shrink-0`} />
      <div className="flex flex-col justify-center leading-none">
        <span className={`font-sans font-black ${titleSize} leading-none text-current uppercase`}>
          ZENITH
        </span>
        <span
          className={`font-sans font-bold ${subSize} mt-1 text-current opacity-95 uppercase flex items-center`}
        >
          FISIOFIT<span className="mx-0.5 text-[1.1em] leading-none font-black">·</span>EXPERT
        </span>
      </div>
    </div>
  );
};
