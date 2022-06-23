import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { getWindowSize } from '../../hooks/GetWindowSize';

type Props = {
  children?: ReactNode;
};

const blackBox: Variants = {
  initial: {
    y: '0',
  },

  animate: {
    y: '-100%',
    transition: {
      duration: 1,
      ease: [0.87, 0, 0.13, 1],
    },
  },

  exit: {
    y: '0',
    transition: {
      duration: 1,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const Animation = () => {
  const { width, height } = getWindowSize();
  return (
    <motion.div
      style={{
        width: width + 'px',
        height: height + 'px',
        position: 'absolute',
        background: '#000',
        zIndex: '9999',
        top: '0',
        left: '0',
      }}
      variants={blackBox}
      initial="initial"
      animate="animate"
      exit="exit"
    ></motion.div>
  );
};

export default Animation;
