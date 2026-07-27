import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
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
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const glowVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.4, 0.7, 0.4],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  return (
    <motion.section
      className="min-h-screen w-full flex flex-col relative overflow-hidden"
      id="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background: engineering blueprint grid + ambient glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />
        <motion.div
          className="absolute top-24 left-[8%] w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-24 right-[10%] w-80 h-80 bg-orange-500/5 rounded-full blur-[100px]"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="relative z-10 w-full mx-auto flex flex-col justify-center items-center min-h-screen c-space gap-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-14 lg:gap-20 w-full max-w-6xl">
          {/* Left: Text content */}
          <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left flex-1">
            {/* Eyebrow: the actual career throughline */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-[0.15em] text-cyan-300/90 uppercase"
            >
              <span>Mechanical Engineer</span>
              <span className="text-white/30">&rarr;</span>
              <span>AI / Data Science Engineer</span>
            </motion.div>

            {/* Name + thesis */}
            <motion.div variants={fadeUp} className="relative">
              <motion.div
                className="absolute -inset-x-4 -inset-y-2 bg-cyan-500/10 blur-2xl"
                variants={glowVariants}
                animate="pulse"
              />
              <h1 className="relative text-5xl md:text-7xl font-black text-white font-generalsans leading-[1.05]">
                Yassine Kraiem
              </h1>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl text-white/80 font-generalsans font-semibold max-w-xl leading-snug"
            >
              I build AI systems for the physical world &mdash; computer vision and
              automation for factories, not just demos.
            </motion.p>

            {/* Current role chip */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              AI/Data Science Engineer at Innomotics (Siemens) &middot; Berlin
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mt-2">
              <motion.button
                className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-white hover:bg-white/5 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Profile photo, framed like a CV detection box */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              className="absolute -inset-6 bg-cyan-500/10 blur-3xl rounded-full"
              variants={glowVariants}
              animate="pulse"
            />

            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Detection-box corner brackets */}
              {[
                'top-0 left-0 border-t-2 border-l-2 rounded-tl-xl',
                'top-0 right-0 border-t-2 border-r-2 rounded-tr-xl',
                'bottom-0 left-0 border-b-2 border-l-2 rounded-bl-xl',
                'bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl',
              ].map((pos) => (
                <div
                  key={pos}
                  className={`absolute w-8 h-8 md:w-10 md:h-10 border-cyan-400/70 ${pos}`}
                />
              ))}

              <div className="absolute inset-3 rounded-full overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/assets/yassine.jpg"
                  alt="Yassine Kraiem"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-black/80 backdrop-blur-sm border border-cyan-400/30 text-cyan-300 text-[11px] font-mono tracking-wide whitespace-nowrap">
                yassine.kraiem
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
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
      </div>
    </motion.section>
  );
};

export default Hero;
