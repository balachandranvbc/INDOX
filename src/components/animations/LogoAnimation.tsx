import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const LogoAnimation = () => {
  return (
    <motion.div 
      className="absolute right-10 top-20 w-24 h-24"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: [0.5, 1, 0.5],
        scale: [0.95, 1.05, 0.95],
        rotateY: [0, 360]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <Logo />
    </motion.div>
  );
};

export default LogoAnimation;