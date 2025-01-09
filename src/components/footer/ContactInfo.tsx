import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-white font-bold mb-4">Contact Us</h3>
      <div className="space-y-3">
        <a
          href="mailto:contact@indox.com"
          className="flex items-center gap-2 text-gray-400 hover:text-purple-500 transition-colors"
        >
          <Mail className="w-4 h-4" />
          contact@indox.com
        </a>
        
        
      </div>
    </div>
  );
};

export default ContactInfo;