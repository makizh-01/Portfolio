
import React from 'react';

interface AuraLogoProps {
  className?: string;
  showText?: boolean;
}

const AuraLogo: React.FC<AuraLogoProps> = ({ className = "w-12 h-12", showText = false }) => {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
        <defs>
          <linearGradient id="auraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Orbital Ring */}
        <path 
          d="M170 100C170 138.66 138.66 170 100 170C61.3401 170 30 138.66 30 100C30 61.3401 61.3401 30 100 30" 
          stroke="url(#auraGradient)" 
          strokeWidth="4" 
          strokeLinecap="round"
          className="animate-[spin_10s_linear_infinite]"
          style={{ transformOrigin: 'center' }}
        />
        <path 
          d="M185 80C190 110 175 145 140 165" 
          stroke="#c084fc" 
          strokeWidth="6" 
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* Main 'A' Shape */}
        <path 
          d="M100 45L55 145H75L85 120H115L125 145H145L100 45ZM100 75L110 105H90L100 75Z" 
          fill="#22d3ee" 
          filter="url(#glow)"
        />
        
        {/* Circuitry Details (Left Side) */}
        <circle cx="25" cy="85" r="3" fill="#22d3ee" />
        <path d="M25 85H45L55 95" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
        
        <circle cx="35" cy="110" r="3" fill="#22d3ee" />
        <path d="M35 110H50L60 120" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
        
        <circle cx="40" cy="70" r="2" fill="#22d3ee" opacity="0.6" />
        <path d="M40 70H55" stroke="#22d3ee" strokeWidth="1.5" opacity="0.6" />
      </svg>
      
      {showText && (
        <span className="text-white font-black tracking-[0.2em] text-xl md:text-3xl mt-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          AURA <span className="text-cyan-400">TECH</span>
        </span>
      )}
    </div>
  );
};

export default AuraLogo;
