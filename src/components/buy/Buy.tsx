import React from 'react';
import StepByStep from './StepByStep';
import ExchangeList from './ExchangeList';
import BuyButtons from './BuyButtons';

const Buy = () => {
  return (
    <section id="buy" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-16">
          How to Buy INDO X
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <StepByStep />
          </div>
          <div className="space-y-8">
            <BuyButtons />
            <ExchangeList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buy;