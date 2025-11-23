import React from 'react';

interface LogoProps {
  variant?: 'yellow' | 'black';
  className?: string;
  showText?: boolean;
  src?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'yellow', className = '', showText = true, src, onClick }) => {
  const textColorClass = variant === 'yellow' ? 'text-plante-yellow' : 'text-plante-black';
  const fillColor = variant === 'yellow' ? '#F5F331' : '#1F1F1F';
  const contrastColor = variant === 'yellow' ? '#1F1F1F' : '#F5F331';

  // If a src is explicitly passed
  if (src) {
    // If showText is FALSE, return ONLY the image element directly with the passed className.
    // This allows the image to scale 100% of its parent if needed (e.g. in Manifesto section).
    if (!showText) {
      return (
        <img 
          src={src} 
          alt="Plante Logo" 
          className={`object-contain ${className}`}
          onClick={onClick}
        />
      );
    }

    // If showText is TRUE, we wrap it in a flex container.
    // In this case, we default the image height to standard navbar size (h-14) unless overridden.
    return (
      <div className={`flex items-center gap-3 ${className}`} onClick={onClick}>
        <img 
          src={src} 
          alt="Plante Logo" 
          className="h-14 w-auto object-contain" 
        />
        <span className={`font-brand font-extrabold text-2xl tracking-widest leading-none ${textColorClass}`}>
          PLANTE
        </span>
      </div>
    );
  }

  // Fallback to SVG logo if no src is provided
  return (
    <div className={`flex items-center gap-3 ${className}`} onClick={onClick}>
      {/* Custom Vector Logo: Yellow Bulb with Black Leaf */}
      <svg width="56" height="56" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 drop-shadow-sm">
        <defs>
          <filter id="roughness-v2">
             <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
             <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
          </filter>
        </defs>

        {/* Bulb Body - Solid Color */}
        <path 
          d="M50 8C26 8 8 26 8 50C8 68 20 82 34 88L38 96H62L66 88C80 82 92 68 92 50C92 26 74 8 50 8Z" 
          fill={fillColor} 
          style={{ filter: 'url(#roughness-v2)' }}
        />
        
        {/* Rays - Rough Strokes */}
        <g stroke={fillColor} strokeWidth="5" strokeLinecap="round" style={{ filter: 'url(#roughness-v2)' }}>
          <path d="M50 0V-6" />
          <path d="M82 12L88 6" />
          <path d="M18 12L12 6" />
          <path d="M96 50H102" />
          <path d="M-2 50H4" />
        </g>

        {/* Leaf Shape - The "Void" inside the bulb */}
        <path 
          d="M52 28C52 28 72 36 68 62C62 82 44 78 44 78C44 78 28 68 34 42C40 22 52 28 52 28Z" 
          fill={contrastColor}
          style={{ filter: 'url(#roughness-v2)' }}
        />
        
        {/* Leaf Veins - Matching bulb color to look like negative space */}
        <path d="M52 28L46 76" stroke={fillColor} strokeWidth="3.5" strokeLinecap="round" style={{ filter: 'url(#roughness-v2)' }} />
        <path d="M50 42L60 46" stroke={fillColor} strokeWidth="3.5" strokeLinecap="round" style={{ filter: 'url(#roughness-v2)' }} />
        <path d="M48 58L58 62" stroke={fillColor} strokeWidth="3.5" strokeLinecap="round" style={{ filter: 'url(#roughness-v2)' }} />
        <path d="M49 52L39 48" stroke={fillColor} strokeWidth="3.5" strokeLinecap="round" style={{ filter: 'url(#roughness-v2)' }} />
        <path d="M47 68L37 64" stroke={fillColor} strokeWidth="3.5" strokeLinecap="round" style={{ filter: 'url(#roughness-v2)' }} />

        {/* Screw Base */}
        <path d="M38 96H62" stroke={contrastColor} strokeWidth="2" strokeDasharray="4 2" />
      </svg>
      
      {showText && (
        <div className="flex flex-col select-none">
          <span className={`font-brand font-extrabold text-3xl tracking-widest leading-none ${textColorClass}`}>
            PLANTE
          </span>
          <span className={`text-xs md:text-sm font-light tracking-[0.2em] uppercase mt-1 ${variant === 'yellow' ? 'text-gray-300' : 'text-gray-600'}`}>
            Ideias que movimentam
          </span>
        </div>
      )}
    </div>
  );
};