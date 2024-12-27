import React from 'react';
import { Download, FileText } from 'lucide-react';
import { useWhitepaperVersions } from './hooks/useWhitepaperVersions';

const DownloadSection = () => {
  const versions = useWhitepaperVersions();

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <FileText className="w-6 h-6 text-purple-500" />
        <h3 className="text-2xl font-bold text-white">Download Whitepaper</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {versions.map((version, index) => (
          <a
            key={index}
            href={version.link}
            className="flex items-center justify-between bg-black/30 p-4 rounded-lg hover:bg-purple-500/10 transition-colors group"
          >
            <div>
              <div className="text-white font-semibold mb-1">{version.language}</div>
              <div className="text-gray-400 text-sm">Version {version.version}</div>
            </div>
            <Download className="w-5 h-5 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default DownloadSection;