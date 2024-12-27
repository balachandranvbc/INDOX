export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SocialLink {
  platform: string;
  handle: string;
  link: string;
  icon: any;
}