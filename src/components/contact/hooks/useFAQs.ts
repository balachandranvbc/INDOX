import { FAQ } from '../types';

export const useFAQs = (): FAQ[] => {
  return [
    {
      question: 'How do I buy INDO X tokens?',
      answer: 'You can purchase INDO X tokens through our supported exchanges or directly through our platform using the Buy section.'
    },
    {
      question: 'What wallets are supported?',
      answer: 'We currently support Phantom Wallet and other Solana-compatible wallets.'
    },
    {
      question: 'How can I stake my tokens?',
      answer: 'Token staking will be available in Q2 2024. Stay tuned for announcements.'
    }
  ];
};