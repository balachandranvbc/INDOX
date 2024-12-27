import React from 'react';
import { motion } from 'framer-motion';
import CoinLogo from './CoinLogo';

const AnimatedCoinLogo = () => (
  <motion.div
    className="w-full h-full"
    animate={{
      rotateY: [0, 360],
      scale: [1, 1.05, 1]
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}
  >
    <CoinLogo />
  </motion.div>
);

export default AnimatedCoinLogo;