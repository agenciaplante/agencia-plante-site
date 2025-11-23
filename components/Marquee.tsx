import React from 'react';

interface MarqueeProps {
  items: string[];
  className?: string;
  variant?: 'yellow' | 'black';
}

export const Marquee: React.FC<MarqueeProps> = ({ items, className = '', variant = 'yellow' }) => {
  const bgColor = variant === 'yellow' ? 'bg-plante-yellow' : 'bg-plante-black';
  const textColor = variant === 'yellow' ? 'text-plante-black' : 'text-plante-yellow';
  
  return (
    <div className={`relative flex overflow-hidden ${bgColor} ${className} py-4 border-y border-plante-black/10`}>
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {/* Double the items to create seamless loop */}
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span key={index} className={`mx-8 text-2xl font-brand font-bold uppercase tracking-wider ${textColor} flex items-center`}>
            {item}
            <span className={`w-2 h-2 rounded-full ml-8 ${variant === 'yellow' ? 'bg-plante-black' : 'bg-plante-yellow'}`}></span>
          </span>
        ))}
      </div>
    </div>
  );
};