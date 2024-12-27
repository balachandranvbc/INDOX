import React from 'react';
import { useQuickLinks } from './hooks/useQuickLinks';

const QuickLinks = () => {
  const links = useQuickLinks();
  
  return (
    <div>
      <h3 className="text-white font-bold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;