
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="c-space my-20 scroll-mt-20" id="work" ref={ref}>
      {/* Section Title */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl font-bold text-white mb-4">Work Experience</h2>
        <div className="w-20 h-1 bg-white mx-auto"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Professional journey building intelligent solutions and engineering expertise
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

          {workExperiences.map((item, index) => (
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
                <h3 className="text-2xl font-bold text-white mb-4">{item.name}</h3>

                <div className="space-y-6">
                  {item.positions.map((position, posIndex) => (
                    <div
                      key={posIndex}
                      className={posIndex > 0 ? 'pt-6 border-t border-white/10' : ''}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 mb-3">
                        <span className="text-lg font-semibold text-gray-300">{position.pos}</span>
                        <div className="hidden lg:block w-1 h-1 bg-gray-500 rounded-full"></div>
                        <span className="text-sm text-gray-400 font-medium bg-white/10 px-3 py-1 rounded-full">
                          {position.duration}
                        </span>
                      </div>

                      {position.bullets ? (
                        <ul className="space-y-2">
                          {position.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex} className="flex items-start gap-3 text-gray-300 leading-relaxed text-lg">
                              <span className="mt-3 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {position.title}
                        </p>
                      )}

                      {/* Skills/Technologies used - if available */}
                      {position.technologies && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {position.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-white/10 border border-white/20 text-white text-xs rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;
