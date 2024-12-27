import React from 'react';
import { Flame } from 'lucide-react';

const BurnMechanism = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <Flame className="w-6 h-6 text-purple-500" />
        <h3 className="text-2xl font-bold text-white">Burn Mechanism</h3>
      </div>

      <div className="space-y-6">
        <p className="text-gray-400">
          INDO X implements a systematic token burning mechanism to create 
          deflationary pressure and increase token value over time:
        </p>

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm">1</span>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Transaction Burns</h4>
              <p className="text-gray-400">0.1% of each transaction is automatically burned</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm">2</span>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Quarterly Burns</h4>
              <p className="text-gray-400">Strategic burns based on market performance and community voting</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm">3</span>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Buyback & Burn</h4>
              <p className="text-gray-400">10% of platform fees are used to buy back and burn tokens</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurnMechanism;