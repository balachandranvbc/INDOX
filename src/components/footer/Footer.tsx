import React from 'react';
import QuickLinks from './QuickLinks';
import SocialLinks from './SocialLinks';
import ContactInfo from './ContactInfo';
import NewsletterSignup from './NewsletterSignup';
import LegalNotices from './LegalNotices';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <QuickLinks />
          <SocialLinks />
          <ContactInfo />
          <NewsletterSignup />
        </div>
        <LegalNotices />
      </div>
    </footer>
  );
};

export default Footer;