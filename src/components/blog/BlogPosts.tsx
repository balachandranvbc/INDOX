import React from 'react';
import { ArrowRight } from 'lucide-react';
import BlogCard from './BlogCard';
import { useBlogPosts } from './hooks/useBlogPosts';

const BlogPosts = () => {
  const posts = useBlogPosts();

  return (
    <div className="space-y-8">
      {posts.map((post, index) => (
        <BlogCard key={index} post={post} />
      ))}
      
      <button className="w-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 text-white px-6 py-4 rounded-xl flex items-center justify-center gap-2 hover:from-purple-900/30 hover:to-blue-900/30 transition-colors">
        View All Posts
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default BlogPosts;