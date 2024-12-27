import React from 'react';
import { ArrowRight, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-purple-900/50" />
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-blockchain-technology-background-99029-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
          Revolutionizing Crypto with{' '}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            INDO X
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join the future of decentralized finance with INDO X. Experience seamless transactions,
          innovative DeFi solutions, and a thriving community-driven ecosystem.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            <Rocket size={24} />
            Buy INDO X
          </button>
          <button className="border border-purple-500 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-500/10 transition-colors">
            Learn More
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat label="Total Supply" value="10B" />
            <Stat label="Market Cap" value="$XXM" />
            <Stat label="Holders" value="10K+" />
            <Stat label="Exchanges" value="5+" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="text-center">
    <p className="text-2xl font-bold text-white">{value}</p>
    <p className="text-gray-400 text-sm">{label}</p>
  </div>
);

export default Hero;