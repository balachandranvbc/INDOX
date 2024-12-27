import React from 'react';
import { Droplets } from 'lucide-react';

const LiquidityPools = () => {
  const pools = [
    {
      pair: 'INDO X/USDT',
      platform: 'UniSwap V3',
      liquidity: '$2.5M',
      rewards: '0.3%'
    },
    {
      pair: 'INDO X/ETH',
      platform: 'SushiSwap',
      liquidity: '$1.8M',
      rewards: '0.25%'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <Droplets className="w-6 h-6 text-purple-500" />
        <h3 className="text-2xl font-bold text-white">Liquidity Pools</h3>
      </div>

      <div className="space-y-6">
        <p className="text-gray-400">
          Participate in our liquidity pools to earn rewards and support the INDO X ecosystem:
        </p>

        <div className="grid gap-4">
          {pools.map((pool, index) => (
            <div key={index} className="bg-black/30 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-semibold">{pool.pair}</span>
                <span className="text-purple-500">{pool.platform}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Liquidity: {pool.liquidity}</span>
                <span className="text-gray-400">Rewards: {pool.rewards}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
          <h4 className="text-white font-semibold mb-2">How to Participate</h4>
          <ol className="list-decimal list-inside text-gray-400 space-y-2">
            <li>Connect your wallet</li>
            <li>Choose a liquidity pool</li>
            <li>Deposit your tokens</li>
            <li>Earn rewards automatically</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default LiquidityPools;