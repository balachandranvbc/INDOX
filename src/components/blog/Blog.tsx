import React from 'react';
import BlogPosts from './BlogPosts';
import MediaCoverage from './MediaCoverage';
import NewsletterSignup from './NewsletterSignup';

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-16">
          Latest Updates
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BlogPosts />
          </div>
          <div className="space-y-8">
            <MediaCoverage />
            <NewsletterSignup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;