import React from 'react';
import { useSocialLinks } from './hooks/useSocialLinks';

const SocialLinks = () => {
  const socialLinks = useSocialLinks();

  return (
    <div>
      <h3 className="text-white font-bold mb-4">Connect With Us</h3>
      <div className="flex flex-wrap gap-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 transition-colors"
            aria-label={social.label}
          >
            <social.icon className="w-6 h-6" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;