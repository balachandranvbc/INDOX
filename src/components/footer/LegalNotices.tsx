import React from 'react';

const LegalNotices = () => {
  return (
    <div className="pt-8 mt-8 border-t border-purple-500/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()} INDO X. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm">
          <a
            href="/terms"
            className="text-gray-400 hover:text-purple-500 transition-colors"
          >
            Terms & Conditions
          </a>
          <a
            href="/privacy"
            className="text-gray-400 hover:text-purple-500 transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default LegalNotices;