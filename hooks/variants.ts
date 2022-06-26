import { Variants } from 'framer-motion';

export const easing = [0.6, -0.05, 0.01, 0.99];

export const animationContainer: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
      easing,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.075, 0.82, 0.165, 1],
    },
  },
};

export const childFadeInUpContainer: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      duration: 1,
      stiffness: 100,
    },
  },
};

export const childFadeInUpItems: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const childFadeContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      type: 'spring',
      duration: 1.5,
      stiffness: 100,
    },
  },
};

export const childFadeItems: Variants = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const titleSlide: Variants = {
  hidden: {
    x: -100,
  },
  show: {
    x: 0,
    transition: {
      duration: 0.5,
      stiffness: 100,
    },
  },
};

export const parentDraw = {
  hidden: {},
  visible: {},
};

export const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { ease: 'easeInOut', duration: 3 },
    },
  },
};

export const blackBox = {
  initial: {
    y: '0',
  },

  animate: {
    y: '-100%',
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },

  finish: {
    y: '0',
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export const childFadeInUpWorksContainer: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
      stiffness: 100,
    },
  },
};

export const childFadeInUpWorksItems: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};
