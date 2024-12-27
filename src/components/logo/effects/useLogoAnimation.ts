import { AnimationProps } from 'framer-motion';

export const useLogoAnimation = (): AnimationProps => ({
  animate: {
    rotateY: [0, 360],
    scale: [1, 1.05, 1],
    filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)']
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  }
});