import React from 'react';
import { MessageSquare, ExternalLink } from 'lucide-react';

const ForumDiscussions = () => {
  const platforms = [
    {
      name: 'INDO X Forum',
      description: 'Official discussion board for governance proposals and community ideas',
      link: '#'
    },
    {
      name: 'Discord',
      description: 'Real-time chat and community engagement',
      link: '#'
    },
    {
      name: 'Telegram',
      description: 'News updates and international communities',
      link: '#'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <MessageSquare className="w-6 h-6 text-purple-500" />
        <h3 className="text-2xl font-bold text-white">Forum & Discussions</h3>
      </div>

      <p className="text-gray-400 mb-8">
        Join our vibrant community across multiple platforms to discuss ideas,
        share feedback, and stay updated on the latest developments.
      </p>

      <div className="grid gap-4">
        {platforms.map((platform, index) => (
          <a
            key={index}
            href={platform.link}
            className="group bg-black/30 rounded-lg p-4 hover:bg-purple-500/10 transition-colors"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-semibold">{platform.name}</span>
              <ExternalLink className="w-4 h-4 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-gray-400 text-sm">{platform.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ForumDiscussions;