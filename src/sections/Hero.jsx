import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import Button from '../components/Button.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const wavingHandVariants = {
    hidden: { rotate: 0 },
    visible: {
      rotate: [0, 10, -10, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.section
      className="w-full flex flex-col relative"
      id="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3"
        variants={textVariants}
      >
        <motion.p
          className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans"
          variants={textVariants}
          whileHover={{ scale: 1.05 }}
        >
          Hi, I am Yassine{' '}
          <motion.span
            className="waving-hand"
            variants={wavingHandVariants}
            initial="hidden"
            animate="visible"
          >
            👋
          </motion.span>
        </motion.p>
        <motion.p
          className="hero_tag text-gray_gradient"
          variants={textVariants}
          whileHover={{ scale: 1.05, color: '#FFFFFF' }}
        >
          a Mechanical Engineer with a passion for web development.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
