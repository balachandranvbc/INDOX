import React from 'react';
import { Wallet } from 'lucide-react';

const BuyButtons = () => {
  const buyOptions = [
    {
      name: 'Buy on Raydium',
      link: '#',
      primary: true
    },
    {
      name: 'Buy on Orca',
      link: '#',
      primary: false
    },
    {
      name: 'Buy on Jupiter',
      link: '#',
      primary: false
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-8">
      <h3 className="text-2xl font-bold text-white mb-6">Quick Buy Options</h3>
      
      <div className="grid gap-4">
        {buyOptions.map((option, index) => (
          <a
            key={index}
            href={option.link}
            className={`
              flex items-center justify-center gap-2 px-6 py-3 rounded-lg
              transition-all transform hover:scale-[1.02]
              ${option.primary
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                : 'bg-purple-500/10 text-purple-500 hover:bg-purple-500/20'
              }
            `}
          >
            {option.primary && <Wallet className="w-5 h-5" />}
            {option.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default BuyButtons;