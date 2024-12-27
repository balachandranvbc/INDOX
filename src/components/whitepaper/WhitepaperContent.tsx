import React from 'react';
import { useWhitepaperSections } from './hooks/useWhitepaperSections';
import WhitepaperSection from './WhitepaperSection';

const WhitepaperContent = () => {
  const sections = useWhitepaperSections();

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      {sections.map((section, index) => (
        <WhitepaperSection key={index} {...section} />
      ))}
    </div>
  );
};

export default WhitepaperContent;