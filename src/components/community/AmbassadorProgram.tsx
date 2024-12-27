import React from 'react';
import { Users, Award, Target, Rocket } from 'lucide-react';

const AmbassadorProgram = () => {
  const benefits = [
    {
      icon: <Award className="w-5 h-5" />,
      title: 'Exclusive Rewards',
      description: 'Earn INDO X tokens for community contributions'
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Early Access',
      description: 'Be the first to test new features and products'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Direct Communication',
      description: 'Regular meetings with the core team'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <Users className="w-6 h-6 text-purple-500" />
        <h3 className="text-2xl font-bold text-white">Ambassador Program</h3>
      </div>

      <p className="text-gray-400 mb-8">
        Join our ambassador program to help grow the INDO X ecosystem while earning
        rewards and gaining exclusive benefits.
      </p>

      <div className="grid gap-6 mb-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="text-purple-500">{benefit.icon}</div>
            <div>
              <h4 className="text-white font-semibold mb-1">{benefit.title}</h4>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
        <Rocket className="w-5 h-5" />
        Apply Now
      </button>
    </div>
  );
};

export default AmbassadorProgram;