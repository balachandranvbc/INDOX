import React from 'react';
import CommunityVoting from './CommunityVoting';
import ForumDiscussions from './ForumDiscussions';
import AmbassadorProgram from './AmbassadorProgram';

const Community = () => {
  return (
    <section id="community" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-16">
          Community & Governance
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CommunityVoting />
          <ForumDiscussions />
          <AmbassadorProgram />
        </div>
      </div>
    </section>
  );
};

export default Community;