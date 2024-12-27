import React from 'react';
import { PieChart } from 'lucide-react';
import PieChartDisplay from './PieChartDisplay';
import DistributionLegend from './DistributionLegend';
import { useTokenDistribution } from './hooks/useTokenDistribution';

const TokenSupply = () => {
  const distribution = useTokenDistribution();

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <PieChart className="w-6 h-6 text-purple-500" />
        <h3 className="text-2xl font-bold text-white">Token Supply Distribution</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <PieChartDisplay distribution={distribution} />
        <DistributionLegend distribution={distribution} />
      </div>
    </div>
  );
};

export default TokenSupply;