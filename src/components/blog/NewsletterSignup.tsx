import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <Mail className="w-6 h-6 text-purple-500" />
        <h3 className="text-xl font-bold text-white">Newsletter</h3>
      </div>

      <p className="text-gray-400 mb-6">
        Stay updated with the latest news and announcements from INDO X.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full bg-black/30 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        >
          <Send className="w-4 h-4" />
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;