import React from 'react';
import { Target, Zap } from 'lucide-react';

const Vision = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
            Vision & Mission
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            INDO X was created with a vision to democratize finance and bridge the gap between traditional and decentralized finance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-purple-500/20">
            <Target className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Our Vision</h3>
            <p className="text-gray-400">
              To become the leading decentralized platform that empowers users worldwide with accessible, secure, and innovative financial solutions.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-purple-500/20">
            <Zap className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
            <p className="text-gray-400">
              To build a comprehensive ecosystem that enables seamless crypto transactions, DeFi solutions, and community-driven governance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;