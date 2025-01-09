import { Twitter, MessageSquare, MessageCircle, Instagram, Linkedin } from 'lucide-react';
import { SocialLink } from '../types';

export const useSocialLinks = (): SocialLink[] => {
  return [
    {
      platform: 'X',
      handle: '@INDOX_Official',
      link: ' https://x.com/indox_crypto?s=21',
      icon: Twitter
    },
    {
      platform: 'Instagram ',
      handle: 'INDO X Community',
      link: 'https://www.instagram.com/indox_crypto?igsh=c2t3aTRhZjdydmk1&utm_source=qr',
      icon: Instagram
    },
    {
      platform: 'Linkedin',
      handle: 'INDO X Global',
      link: 'https://www.linkedin.com/company/indo-x/',
      icon: Linkedin
    }
  ];
};