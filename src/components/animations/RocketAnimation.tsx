import React from 'react';
import { motion } from 'framer-motion';

const RocketAnimation = () => {
  return (
    <motion.div
      className="absolute right-10 bottom-10 text-4xl"
      animate={{
        y: [-20, -200],
        x: [0, 100],
        rotate: 45,
        scale: [1, 0.5]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      🚀
    </motion.div>
  );
}

export default RocketAnimation;