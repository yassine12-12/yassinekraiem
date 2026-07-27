import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Button from '../components/Button.jsx';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 1.2, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.5, ease: 'easeOut' },
    },
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.8, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      className="min-h-screen w-full flex flex-col relative overflow-hidden"
      id="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full blur-xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-20 h-20 bg-white/5 rounded-full blur-xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x * 0.1}px ${mousePosition.y * 0.1}px, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
      </div>

      <motion.div
        className="relative z-10 w-full mx-auto flex flex-col justify-center items-center min-h-screen c-space gap-8"
        variants={titleVariants}
      >
        {/* Two-column layout: text left, photo right */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-20 w-full max-w-6xl">

          {/* Left: Text content */}
          <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left flex-1">
            {/* Main Title */}
            <motion.div className="relative" variants={titleVariants}>
              <motion.div
                className="absolute inset-0 bg-white/10 blur-2xl opacity-30"
                variants={glowVariants}
                animate="pulse"
              />
              <motion.h1
                className="relative text-6xl md:text-8xl lg:text-9xl font-black text-white font-generalsans leading-none"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                YASSINE
              </motion.h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div className="space-y-3" variants={subtitleVariants}>
              <motion.h2
                className="text-2xl md:text-4xl font-bold text-white font-generalsans"
                variants={floatingVariants}
                animate="float"
              >
                AI/Data Science Engineer
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed"
                variants={taglineVariants}
              >
                Building intelligent solutions with cutting-edge technology and innovative design
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.button
                className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Profile photo */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Outer glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white/10 blur-2xl"
              variants={glowVariants}
              animate="pulse"
            />
            {/* Rotating dashed border */}
            <motion.div
              className="absolute -inset-3 rounded-full border-2 border-dashed border-white/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            {/* Photo */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img
                src="/assets/yassine.jpg"
                alt="Yassine Kraiem"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
