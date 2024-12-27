import React from 'react';
import { LucideIcon } from 'lucide-react';
import { WhitepaperSectionType } from './types';

const WhitepaperSection = ({ icon: Icon, title, description }: WhitepaperSectionType) => {
  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-purple-500" />
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default WhitepaperSection;