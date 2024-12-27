import React from 'react';
import { Wallet, ArrowRight, ShieldCheck, Coins } from 'lucide-react';

const StepByStep = () => {
  const steps = [
    {
      icon: <Wallet className="w-6 h-6" />,
      title: 'Set Up Your Wallet',
      description: 'Download and install Phantom Wallet from the official website',
      action: 'Download Phantom',
      link: 'https://phantom.app'
    },
    {
      icon: <Coins className="w-6 h-6" />,
      title: 'Get SOL',
      description: 'Purchase SOL from any major exchange or swap platform',
      action: 'Buy SOL',
      link: '#'
    },
    {
      icon: <ArrowRight className="w-6 h-6" />,
      title: 'Transfer to Wallet',
      description: 'Send SOL to your Phantom wallet address',
      action: 'View Guide',
      link: '#'
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Swap for INDO X',
      description: 'Use supported DEX to swap SOL for INDO X tokens',
      action: 'Start Trading',
      link: '#'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-8">
      <h3 className="text-2xl font-bold text-white mb-8">How to Buy INDO X</h3>
      
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                {step.icon}
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-purple-500">Step {index + 1}</span>
                <h4 className="text-lg font-semibold text-white">{step.title}</h4>
              </div>
              <p className="text-gray-400 mb-3">{step.description}</p>
              <a
                href={step.link}
                className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors"
              >
                {step.action}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepByStep;