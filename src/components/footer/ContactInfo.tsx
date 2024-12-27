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
        <a
          href="tel:+1234567890"
          className="flex items-center gap-2 text-gray-400 hover:text-purple-500 transition-colors"
        >
          <Phone className="w-4 h-4" />
          +1 (234) 567-890
        </a>
        <div className="flex items-start gap-2 text-gray-400">
          <MapPin className="w-4 h-4 mt-1" />
          <address className="not-italic">
            123 Blockchain Street<br />
            Crypto Valley, CV 12345<br />
            Singapore
          </address>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;