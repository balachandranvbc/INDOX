import { TokenDistribution } from '../types';

export const useTokenDistribution = (): TokenDistribution[] => {
  return [
    {
      label: 'Market',
      value: 7,
      color: 'from-purple-500 to-blue-500'
    },
    {
      label: 'Liquidity & Ecosystem',
      value: 2,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      label: 'Burn Reserve',
      value: 1,
      color: 'from-red-500 to-orange-500'
    }
  ];
};