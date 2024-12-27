import React from 'react';
import { motion } from 'framer-motion';
import { TokenDistribution } from './types';

interface PieChartDisplayProps {
  distribution: TokenDistribution[];
}

const PieChartDisplay: React.FC<PieChartDisplayProps> = ({ distribution }) => {
  const total = distribution.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;

  return (
    <div className="relative aspect-square">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white"
        >
          10B
        </motion.div>
      </div>
      {distribution.map((segment, index) => {
        const angle = (segment.value / total) * 360;
        const startAngle = currentAngle;
        currentAngle += angle;

        return (
          <motion.div
            key={index}
            className={`absolute inset-0 bg-gradient-to-r ${segment.color}`}
            initial={{ opacity: 0, rotate: startAngle }}
            animate={{ 
              opacity: 1,
              rotate: startAngle,
              background: `conic-gradient(from ${startAngle}deg, currentColor ${angle}deg, transparent ${angle}deg)`
            }}
            transition={{ 
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeOut"
            }}
            style={{
              clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos(startAngle * Math.PI / 180)}% ${50 + 50 * Math.sin(startAngle * Math.PI / 180)}%, ${50 + 50 * Math.cos((startAngle + angle) * Math.PI / 180)}% ${50 + 50 * Math.sin((startAngle + angle) * Math.PI / 180)}%)`
            }}
          />
        );
      })}
    </div>
  );
};

export default PieChartDisplay;