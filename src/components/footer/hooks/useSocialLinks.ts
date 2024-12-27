import { Twitter, MessageSquare, MessageCircle, Linkedin } from 'lucide-react';

export const useSocialLinks = () => {
  return [
    {
      label: 'Twitter',
      href: 'https://twitter.com/INDOX',
      icon: Twitter
    },
    {
      label: 'Telegram',
      href: 'https://t.me/INDOX',
      icon: MessageCircle
    },
    {
      label: 'Discord',
      href: 'https://discord.gg/INDOX',
      icon: MessageSquare
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/company/INDOX',
      icon: Linkedin
    }
  ];
};