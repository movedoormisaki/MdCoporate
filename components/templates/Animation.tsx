import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { getWindowSize } from '../../hooks/GetWindowSize';

type Props = {
  children?: ReactNode;
};

const blackBox: Variants = {
  initial: {
    opacity: 1,
  },

  animate: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },

  exit: {
    opacity: 1,
  },
};

const Animation = () => {
  const { width, height } = getWindowSize();
  return (
    <motion.div
      style={{
        width: width + 'px',
        height: height + 'px',
        position: 'fixed',
        background: '#000',
        zIndex: '9999',
        top: '0',
        left: '0',
        pointerEvents: 'none',
      }}
      variants={blackBox}
      initial="initial"
      animate="animate"
      exit="exit"
    ></motion.div>
  );
};

export default Animation;
