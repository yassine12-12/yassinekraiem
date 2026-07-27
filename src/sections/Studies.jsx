import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { studiedata } from '../constants/index.js';

const Studies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="c-space my-20 scroll-mt-20" id="studies" ref={ref}>
      {/* Section Title */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl font-bold text-white mb-4">Educational Background</h2>
        <div className="w-20 h-1 bg-white mx-auto"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Academic journey from high school to advanced computational engineering
        </p>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/20"></div>

          {studiedata.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative flex items-start mb-12 last:mb-0"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Timeline Dot */}
              <div className="flex-shrink-0 w-16 h-16 relative z-10">
                <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-10 h-10 object-contain rounded-full"
                  />
                </div>
                <div className="absolute -inset-2 bg-white/20 rounded-full animate-pulse"></div>
              </div>

              {/* Content Card */}
              <motion.div
                className="ml-8 flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{item.name}</h3>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 mb-4">
                      <span className="text-lg font-semibold text-gray-300">{item.pos}</span>
                      <div className="hidden lg:block w-1 h-1 bg-gray-500 rounded-full"></div>
                      <span className="text-sm text-gray-400 font-medium bg-white/10 px-3 py-1 rounded-full">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-lg">
                  {item.title}
                </p>

                {/* Achievement Badge */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm text-gray-400">
                      {index === 0 ? 'Current' : 'Completed'}
                    </span>
                  </div>
                  
                  {/* Degree Type Badge */}
                  <span className="px-3 py-1 bg-white/10 border border-white/20 text-white text-xs rounded-full font-medium">
                    {item.pos.includes('Master') ? 'Master\'s Degree' : 
                     item.pos.includes('Bachelor') ? 'Bachelor\'s Degree' : 
                     item.pos.includes('Language') ? 'Language Certification' : 
                     'High School Diploma'}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Current Focus */}
        <motion.div
          className="text-center mt-16 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Industrial AI Solutions</h3>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            Applying <strong className="text-white">Artificial Intelligence and Data Science</strong> to real
            industrial and engineering problems — from LLM-powered automation to computer vision on the factory floor.
          </p>
          <div className="flex justify-center flex-wrap gap-3">
            {['Industrial AI', 'Agentic AI', 'Computer Vision', 'Automation', 'Engineering Simulation'].map((focus, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-full text-sm font-medium"
              >
                {focus}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Studies;
