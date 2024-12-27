import { BlogPost } from '../types';

export const useBlogPosts = (): BlogPost[] => {
  // In a real application, this would fetch from an API
  return [
    {
      title: 'INDO X Partners with Leading DeFi Protocol',
      excerpt: 'Exciting new partnership announcement that will bring enhanced liquidity and trading options to our users.',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000',
      link: '#',
      category: 'Partnership'
    },
    {
      title: 'Q1 2024 Development Update',
      excerpt: 'Check out our latest progress on the roadmap and upcoming features for the INDO X ecosystem.',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1642790551116-18e150f248e5?auto=format&fit=crop&q=80&w=2000',
      link: '#',
      category: 'Development'
    },
    {
      title: 'Community Governance Proposal Results',
      excerpt: 'Results from our latest community voting session and what changes will be implemented.',
      date: 'March 5, 2024',
      link: '#',
      category: 'Governance'
    }
  ];
};