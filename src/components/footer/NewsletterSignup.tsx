import React, { useState } from 'react';
import { Send } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div>
      <h3 className="text-white font-bold mb-4">Stay Updated</h3>
      <p className="text-gray-400 mb-4">
        Subscribe to our newsletter for the latest updates and announcements.
      </p>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full bg-black/30 text-white px-4 py-2 rounded-lg border border-purple-500/20 focus:outline-none focus:border-purple-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        >
          Subscribe
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;