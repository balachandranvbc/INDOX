import React from 'react';
import ContactHeader from './ContactHeader';
import ContactForm from './ContactForm';
import SupportCenter from './SupportCenter';
import SocialLinks from './SocialLinks';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactHeader />
        <div className="grid lg:grid-cols-2 gap-8">
          <ContactForm />
          <div className="space-y-8">
            <SupportCenter />
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;