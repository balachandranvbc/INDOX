import React from 'react';
import { Newspaper, ExternalLink } from 'lucide-react';
import { useMediaCoverage } from './hooks/useMediaCoverage';

const MediaCoverage = () => {
  const coverage = useMediaCoverage();

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <Newspaper className="w-6 h-6 text-purple-500" />
        <h3 className="text-xl font-bold text-white">Media Coverage</h3>
      </div>

      <div className="space-y-4">
        {coverage.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-black/30 rounded-lg p-4 hover:bg-purple-500/10 transition-colors group"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-semibold">{item.source}</span>
              <ExternalLink className="w-4 h-4 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-gray-400 text-sm">{item.title}</p>
            <div className="text-purple-500 text-xs mt-2">{item.date}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MediaCoverage;