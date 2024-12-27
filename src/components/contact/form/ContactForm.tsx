import React from 'react';
import { Send } from 'lucide-react';
import { useContactForm } from '../hooks/useContactForm';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormTextArea from './FormTextArea';
import { ContactFormData } from '../types';

const ContactForm = () => {
  const { formData, handleChange, handleSubmit, isSubmitting } = useContactForm();

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-8">
      <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormInput
            id="name"
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <FormInput
            id="email"
            name="email"
            type="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <FormSelect
          id="subject"
          name="subject"
          label="Subject"
          value={formData.subject}
          onChange={handleChange}
          options={[
            { value: '', label: 'Select a subject' },
            { value: 'support', label: 'Technical Support' },
            { value: 'partnership', label: 'Partnership Inquiry' },
            { value: 'feedback', label: 'Feedback' },
            { value: 'other', label: 'Other' }
          ]}
        />

        <FormTextArea
          id="message"
          name="message"
          label="Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : (
            <>
              Send Message
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;