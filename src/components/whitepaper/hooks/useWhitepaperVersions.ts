import { WhitepaperVersion } from '../types';

export const useWhitepaperVersions = (): WhitepaperVersion[] => {
  return [
    {
      language: 'English',
      version: '1.0.0',
      link: 'https://drive.google.com/uc?export=download&id=1zR6x2nPHK_RMGzVe6BS_9BE0L5y3-S2X', // Direct download link for Google Drive
      size: '2.5 MB'
    },
    {
      language: 'Chinese',
      version: '1.0.0',
      link: 'https://drive.google.com/uc?export=download&id=1sWPoYUXQ1aFRIJ791vB1Oxu9-go4CALQ', // Direct download link for Google Drive
      size: '2.5 MB'
    },
    {
      language: 'Korean',
      version: '1.0.0',
      link: 'https://drive.google.com/uc?export=download&id=1-TssDjKAbHZ1gkdFer2pcZ8_Y0Dh_u4X', // Direct download link for Google Drive
      size: '2.5 MB'
    },
  ];
};
