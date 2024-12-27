import { LucideIcon } from 'lucide-react';

export interface WhitepaperSectionType {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface WhitepaperVersion {
  language: string;
  version: string;
  link: string;
  size?: string;
}