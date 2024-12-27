import React from 'react';
import { FileText } from 'lucide-react';

const WhitepaperHeader = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
        INDO X Whitepaper
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Dive deep into the technical architecture, tokenomics, and vision of INDO X. Our comprehensive
        whitepaper outlines our approach to revolutionizing decentralized finance.
      </p>
    </div>
  );
};

export default WhitepaperHeader;