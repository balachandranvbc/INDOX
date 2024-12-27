import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from './types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl overflow-hidden hover:from-purple-900/30 hover:to-blue-900/30 transition-colors">
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 text-purple-500 text-sm mb-3">
          <Calendar className="w-4 h-4" />
          {post.date}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
        <p className="text-gray-400 mb-4">{post.excerpt}</p>
        <a
          href={post.link}
          className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors"
        >
          Read More
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
};

export default BlogCard;