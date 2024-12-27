import React from 'react';
import { MessageCircle } from 'lucide-react';

const ContactHeader = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
        Contact & Support
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Have questions or need assistance? Our team is here to help. Reach out through any of our
        support channels or fill out the contact form below.
      </p>
    </div>
  );
};

export default ContactHeader;