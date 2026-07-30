import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const About = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skills = [
    "Generative AI", "Agentic AI", "MCP", "RAG",
    "Computer Vision", "YOLOv8", "PyTorch",
    "Kubernetes", "Python", "FastAPI", "Industrial AI",
  ];

  return (
    <section className="c-space my-20 scroll-mt-20" id="about" ref={ref}>
      {/* Section Title */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl font-bold text-white mb-4">About Me</h2>
        <div className="w-20 h-1 bg-white mx-auto"></div>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          
          {/* Left Column - Bio */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            variants={itemVariants}
          >
            <div className="space-y-6">
              <motion.h3 
                className="text-4xl font-bold text-white leading-tight"
                variants={itemVariants}
              >
                I'm Yassine Kraiem
              </motion.h3>
              
              <motion.div 
                className="space-y-4 text-lg text-gray-300 leading-relaxed"
                variants={itemVariants}
              >
                <p>
                  A passionate <span className="text-white font-semibold">AI/Data Science Engineer</span> currently pursuing my Master's in 
                  <span className="text-white font-semibold"> Computational Engineering Science</span> with specialization in Artificial Intelligence.
                </p>
                
                <p>
                  I bridge the gap between theoretical AI and practical engineering solutions, 
                  creating intelligent systems that solve real-world industrial challenges.
                </p>
                
                <p>
                  My expertise spans agentic AI, machine learning, computer vision, and engineering design,
                  with a focus on developing innovative automation solutions.
                </p>
              </motion.div>
            </div>

            {/* Skills Cloud */}
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <h4 className="text-xl font-semibold text-white">Core Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.1 * index + 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Quick Facts */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            {/* Education */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Education</h4>
              <div className="space-y-3 text-gray-300">
                <div>
                  <p className="font-medium text-white">Master's Degree</p>
                  <p className="text-sm">Computational Engineering Science</p>
                  <p className="text-sm">Specialization: Artificial Intelligence</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Location</h4>
              <div className="space-y-2 text-gray-300">
                <p>Berlin, Germany</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm">Available for opportunities</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Languages</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"
                      className="w-5 h-4 object-cover rounded-sm"
                      alt="French"
                    />
                    <span className="text-gray-300">French</span>
                  </div>
                  <span className="text-white text-sm">Native</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://purecatamphetamine.github.io/country-flag-icons/3x2/TN.svg"
                      className="w-5 h-4 object-cover rounded-sm"
                      alt="Arabic"
                    />
                    <span className="text-gray-300">Arabic</span>
                  </div>
                  <span className="text-white text-sm">Native</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
                      className="w-5 h-4 object-cover rounded-sm"
                      alt="English"
                    />
                    <span className="text-gray-300">English</span>
                  </div>
                  <span className="text-white text-sm">Fluent</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg"
                      className="w-5 h-4 object-cover rounded-sm"
                      alt="German"
                    />
                    <span className="text-gray-300">German</span>
                  </div>
                  <span className="text-white text-sm">Fluent</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;