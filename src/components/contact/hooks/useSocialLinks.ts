import { Twitter, MessageSquare, MessageCircle } from 'lucide-react';
import { SocialLink } from '../types';

export const useSocialLinks = (): SocialLink[] => {
  return [
    {
      platform: 'Twitter',
      handle: '@INDOX_Official',
      link: '#',
      icon: Twitter
    },
    {
      platform: 'Discord',
      handle: 'INDO X Community',
      link: '#',
      icon: MessageSquare
    },
    {
      platform: 'Telegram',
      handle: 'INDO X Global',
      link: '#',
      icon: MessageCircle
    }
  ];
};