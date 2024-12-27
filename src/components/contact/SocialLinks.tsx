import React from 'react';
import { Twitter, MessageSquare, MessageCircle } from 'lucide-react';
import { useSocialLinks } from './hooks/useSocialLinks';

const SocialLinks = () => {
  const socialLinks = useSocialLinks();

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-8">
      <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>

      <div className="grid gap-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-black/30 p-4 rounded-lg hover:bg-purple-500/10 transition-colors group"
          >
            <social.icon className="w-6 h-6 text-purple-500" />
            <div>
              <div className="text-white font-semibold">{social.platform}</div>
              <div className="text-gray-400 text-sm">{social.handle}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;