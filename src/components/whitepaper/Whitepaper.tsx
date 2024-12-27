import React from 'react';
import WhitepaperHeader from './WhitepaperHeader';
import WhitepaperContent from './WhitepaperContent';
import DownloadSection from './DownloadSection';

const Whitepaper = () => {
  return (
    <section id="whitepaper" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WhitepaperHeader />
        <WhitepaperContent />
        <DownloadSection />
      </div>
    </section>
  );
};

export default Whitepaper;