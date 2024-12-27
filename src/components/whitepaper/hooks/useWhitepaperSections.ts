import { Code, Coins, Network, Shield } from 'lucide-react';
import { WhitepaperSectionType } from '../types';

export const useWhitepaperSections = (): WhitepaperSectionType[] => {
  return [
    {
      icon: Network,
      title: 'Technical Architecture',
      description: 'Detailed breakdown of INDO X\'s blockchain infrastructure, smart contracts, and cross-chain capabilities.'
    },
    {
      icon: Coins,
      title: 'Tokenomics & Economics',
      description: 'Comprehensive analysis of token distribution, vesting schedules, and economic incentives.'
    },
    {
      icon: Shield,
      title: 'Security & Audits',
      description: 'In-depth coverage of our security measures, audit results, and risk mitigation strategies.'
    },
    {
      icon: Code,
      title: 'Development Roadmap',
      description: 'Detailed timeline of past achievements and future development milestones.'
    }
  ];
};