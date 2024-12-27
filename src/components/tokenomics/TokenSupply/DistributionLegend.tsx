import React from 'react';
import { motion } from 'framer-motion';
import { TokenDistribution } from './types';

interface DistributionLegendProps {
  distribution: TokenDistribution[];
}

const DistributionLegend: React.FC<DistributionLegendProps> = ({ distribution }) => {
  return (
    <div className="space-y-4">
      {distribution.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-center gap-4"
        >
          <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`} />
          <div>
            <div className="text-white font-semibold">{item.label}</div>
            <div className="text-gray-400">{item.value}B Tokens</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default DistributionLegend;