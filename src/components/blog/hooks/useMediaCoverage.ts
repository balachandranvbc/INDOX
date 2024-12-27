import { MediaItem } from '../types';

export const useMediaCoverage = (): MediaItem[] => {
  // In a real application, this would fetch from an API
  return [
    {
      source: 'CryptoNews',
      title: 'INDO X: The Rising Star in DeFi',
      date: 'March 12, 2024',
      link: '#'
    },
    {
      source: 'BlockchainDaily',
      title: 'Top 10 Most Promising Crypto Projects in 2024',
      date: 'March 8, 2024',
      link: '#'
    },
    {
      source: 'DeFi Insider',
      title: 'INDO X Revolutionizes Cross-Chain Trading',
      date: 'March 1, 2024',
      link: '#'
    }
  ];
};