import React from 'react';
import { motion } from 'framer-motion';

const ParticleField = () => {
  const particles = Array.from({ length: 20 });
  
  return (
    <div className="fixed inset-0 pointer-events-none">
      {particles.map((_, i) => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 4 + 2;
        
        return (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: size,
              height: size,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticleField;