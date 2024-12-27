import React from 'react';
import { Wallet, ShoppingCart, Palette, Building2 } from 'lucide-react';

const UseCases = () => {
  const cases = [
    {
      icon: <Wallet className="w-8 h-8" />,
      title: 'DeFi Integration',
      description: 'Seamlessly integrate with leading DeFi protocols for lending, borrowing, and yield farming.'
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Payment Solutions',
      description: 'Fast and secure payment processing for merchants and consumers worldwide.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'NFT Ecosystem',
      description: 'Create, trade, and collect unique digital assets in our NFT marketplace.'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Cross-Chain Bridge',
      description: 'Connect with multiple blockchains for enhanced interoperability and liquidity.'
    }
  ];

  return (
    <div className="py-16 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-12">
          Use Cases
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-colors"
            >
              <div className="text-purple-500 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCases;