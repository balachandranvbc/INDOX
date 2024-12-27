import React from 'react';
import { Building2, ExternalLink } from 'lucide-react';

const ExchangeList = () => {
  const exchanges = [
    {
      name: 'Raydium',
      type: 'DEX',
      pair: 'INDO X/SOL',
      link: '#',
      volume: '$1.2M'
    },
    {
      name: 'Orca',
      type: 'DEX',
      pair: 'INDO X/USDC',
      link: '#',
      volume: '$800K'
    },
    {
      name: 'Jupiter',
      type: 'Aggregator',
      pair: 'Multiple',
      link: '#',
      volume: '$500K'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <Building2 className="w-6 h-6 text-purple-500" />
        <h3 className="text-2xl font-bold text-white">Supported Exchanges</h3>
      </div>

      <div className="space-y-4">
        {exchanges.map((exchange, index) => (
          <a
            key={index}
            href={exchange.link}
            className="block bg-black/30 rounded-lg p-4 hover:bg-purple-500/10 transition-colors group"
          >
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="text-white font-semibold">{exchange.name}</span>
                <span className="text-purple-500 text-sm ml-2">({exchange.type})</span>
              </div>
              <ExternalLink className="w-4 h-4 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Pair: {exchange.pair}</span>
              <span className="text-gray-400">24h Vol: {exchange.volume}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExchangeList;