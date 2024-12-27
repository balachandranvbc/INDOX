import React from 'react';
import { PieChart, Flame, Coins } from 'lucide-react';

const TokenSupply = () => {
  const data = [
    { label: 'Market', value: 7, color: 'from-purple-500 to-blue-500' },
    { label: 'Liquidity & Ecosystem', value: 2, color: 'from-blue-500 to-cyan-500' },
    { label: 'Burn Reserve', value: 1, color: 'from-red-500 to-orange-500' }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <PieChart className="w-6 h-6 text-purple-500" />
        <h3 className="text-2xl font-bold text-white">Token Supply Distribution</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          {/* Simulated pie chart with CSS */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-2xl font-bold text-white">10B</div>
          </div>
          {data.map((segment, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-gradient-to-r ${segment.color}`}
              style={{
                clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos(index * 2 * Math.PI / 3)}% ${50 + 50 * Math.sin(index * 2 * Math.PI / 3)}%, ${50 + 50 * Math.cos((index + 1) * 2 * Math.PI / 3)}% ${50 + 50 * Math.sin((index + 1) * 2 * Math.PI / 3)}%)`
              }}
            />
          ))}
        </div>
        
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`} />
              <div>
                <div className="text-white font-semibold">{item.label}</div>
                <div className="text-gray-400">{item.value}B Tokens</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TokenSupply;