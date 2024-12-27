import React from 'react';

const CoinLogo = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="metallic" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#B8B8B8" />
        <stop offset="50%" stopColor="#E8E8E8" />
        <stop offset="100%" stopColor="#B8B8B8" />
      </linearGradient>
      <filter id="inner-shadow">
        <feOffset dx="0" dy="1" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite operator="out" in="SourceGraphic" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.8" />
        </feComponentTransfer>
      </filter>
    </defs>
    
    {/* Outer Circle */}
    <circle cx="100" cy="100" r="98" fill="url(#metallic)" />
    
    {/* Dotted Border */}
    <circle 
      cx="100" 
      cy="100" 
      r="90" 
      fill="none" 
      stroke="#888" 
      strokeWidth="2" 
      strokeDasharray="4 4"
    />
    
    {/* X Symbol */}
    <path
      d="M60 60 L140 140 M140 60 L60 140"
      stroke="url(#metallic)"
      strokeWidth="12"
      strokeLinecap="round"
    />
    
    {/* Circuit Lines */}
    <path
      d="M30 100 H50 M150 100 H170 M100 30 V50 M100 150 V170"
      stroke="#666"
      strokeWidth="4"
    />
    
    {/* INDO Text */}
    <text
      x="100"
      y="160"
      textAnchor="middle"
      fill="#444"
      fontSize="24"
      fontWeight="bold"
      fontFamily="monospace"
    >
      INDO
    </text>
  </svg>
);

export default CoinLogo;