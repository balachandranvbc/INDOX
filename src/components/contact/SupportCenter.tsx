import React from 'react';
import { HelpCircle } from 'lucide-react';
import { useFAQs } from './hooks/useFAQs';

const SupportCenter = () => {
  const faqs = useFAQs();

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <HelpCircle className="w-6 h-6 text-purple-500" />
        <h3 className="text-2xl font-bold text-white">Support Center</h3>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group"
          >
            <summary className="flex justify-between items-center cursor-pointer text-white font-semibold mb-2 marker:text-purple-500">
              {faq.question}
            </summary>
            <p className="text-gray-400 pl-6 mt-2">{faq.answer}</p>
          </details>
        ))}
      </div>

      <a
        href="#"
        className="block mt-6 text-center text-purple-500 hover:text-purple-400 transition-colors"
      >
        View All FAQs
      </a>
    </div>
  );
};

export default SupportCenter;