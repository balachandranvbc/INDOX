import React from 'react';
import { motion } from 'framer-motion';

const MoonAnimation = () => {
  return (
    <motion.div
      className="absolute right-20 top-20 text-6xl"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
    >
      🌕
    </motion.div>
  );
}

export default MoonAnimation;