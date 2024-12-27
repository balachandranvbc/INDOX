import React from 'react';
import TokenSupply from './TokenSupply';
import VestingSchedule from './VestingSchedule';
import BurnMechanism from './BurnMechanism';
import LiquidityPools from './LiquidityPools';

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-16">
          Tokenomics
        </h2>
        
        <div className="grid gap-8">
          <TokenSupply />
          <div className="grid md:grid-cols-2 gap-8">
            <VestingSchedule />
            <BurnMechanism />
          </div>
          <LiquidityPools />
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;