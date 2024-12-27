import React from 'react';

const Logo = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#9333EA" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
    <path
      d="M100 20L180 160H20L100 20Z"
      fill="url(#logo-gradient)"
      className="drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]"
    />
    <text
      x="100"
      y="120"
      textAnchor="middle"
      fill="white"
      fontSize="40"
      fontWeight="bold"
    >
      INDO X
    </text>
  </svg>
)

export default Logo;