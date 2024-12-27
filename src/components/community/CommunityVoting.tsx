import React from 'react';
import { Vote, CheckCircle } from 'lucide-react';

const CommunityVoting = () => {
  const features = [
    {
      title: 'Proposal Creation',
      description: 'Any holder with 100,000+ INDO X tokens can create governance proposals'
    },
    {
      title: 'Voting Power',
      description: '1 INDO X = 1 Vote, with quadratic voting to ensure fairness'
    },
    {
      title: 'Execution',
      description: 'Proposals with >50% approval are automatically executed via smart contracts'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <Vote className="w-6 h-6 text-purple-500" />
        <h3 className="text-2xl font-bold text-white">Community Voting</h3>
      </div>

      <p className="text-gray-400 mb-8">
        INDO X implements a decentralized governance model where token holders
        directly influence the project's future through transparent voting.
      </p>

      <div className="space-y-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4">
            <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
            <div>
              <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityVoting;