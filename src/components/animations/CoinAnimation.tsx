import React from 'react';
import { motion } from 'framer-motion';

const CoinAnimation = () => {
  return (
    <div className="absolute left-10 top-1/2">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="text-3xl absolute"
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: -100,
            opacity: [0, 1, 0],
            x: i * 20,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          💰
        </motion.div>
      ))}
    </div>
  );
}

export default CoinAnimation;