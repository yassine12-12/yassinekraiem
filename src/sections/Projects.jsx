import { myProjects } from '../constants/index.js';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Model3DViewer from '../components/Model3DViewer';
import PDFViewer from '../components/PDFViewer';
import ErrorBoundary from '../components/ErrorBoundary';
import { useWebGLSupport } from '../hooks/useWebGLSupport';

const Model3DFallback = () => (
  <div className="h-full w-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-orange-500/10 to-red-500/10 text-center px-6">
    <p className="text-orange-300 text-sm font-medium">3D preview unavailable in this browser</p>
    <p className="text-gray-400 text-xs">See the project details and documentation below</p>
  </div>
);

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const webglSupported = useWebGLSupport();

  const computerScienceProjects = myProjects.filter((project) => project.category === 'computer-science');
  const mechanicalProjects = myProjects.filter((project) => project.category === 'mechanical');
  
  const [selectedModel, setSelectedModel] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [isPDFViewerOpen, setIsPDFViewerOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  // Handle ESC key to close viewers
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsViewerOpen(false);
        setSelectedModel(null);
        setIsPDFViewerOpen(false);
        setSelectedPDF(null);
      }
    };
    
    if (isViewerOpen || isPDFViewerOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isViewerOpen, isPDFViewerOpen]);

  const openModelViewer = (project) => {
    setSelectedModel(project);
    setIsViewerOpen(true);
  };

  const closeModelViewer = () => {
    setIsViewerOpen(false);
    setSelectedModel(null);
  };

  const openPDFViewer = (project) => {
    setSelectedPDF(project);
    setIsPDFViewerOpen(true);
  };

  const closePDFViewer = () => {
    setIsPDFViewerOpen(false);
    setSelectedPDF(null);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const filteredProjects = () => {
    switch (activeCategory) {
      case 'cs':
        return computerScienceProjects;
      case 'mechanical':
        return mechanicalProjects;
      default:
        return [...computerScienceProjects, ...mechanicalProjects];
    }
  };

  return (
    <section className="c-space my-20" id="projects" ref={ref}>
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl font-bold text-white mb-6">Featured Projects</h2>
        <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Explore my portfolio showcasing expertise in AI, machine learning, computer vision, and mechanical engineering
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        className="flex justify-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="flex bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2">
          {[
            { key: 'all', label: 'All Projects' },
            { key: 'cs', label: 'AI & Data Science' },
            { key: 'mechanical', label: 'Mechanical Engineering' }
          ].map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.key
                  ? 'bg-white text-black'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects().map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:scale-[1.02] ${
                project.category === 'computer-science'
                  ? 'bg-white/5 border-white/10 hover:border-white/30'
                  : 'bg-gradient-to-br from-orange-500/5 to-red-500/5 border-orange-500/20 hover:border-orange-400/50'
              }`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Project Header - Only for 3D Models */}
              {project.model && (
                <div className="relative">
                  {webglSupported ? (
                    <div
                      className="h-64 w-full cursor-pointer relative group/model overflow-hidden"
                      onClick={() => openModelViewer(project)}
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover/model:bg-black/40 transition-all duration-300 z-10">
                        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-2 rounded-lg border border-orange-400/50">
                          <span className="text-orange-400 font-medium text-xs">Click to explore in 3D</span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/model:opacity-100 transition-all duration-300">
                          <div className="bg-orange-500/90 text-white px-6 py-3 rounded-xl font-semibold">
                            View 3D Model
                          </div>
                        </div>
                      </div>

                      <ErrorBoundary fallback={<Model3DFallback />}>
                        <Canvas camera={{ position: [0, 0, 30], fov: 45 }}>
                          <Suspense fallback={null}>
                            <OrbitControls
                              enablePan={false}
                              enableZoom={false}
                              enableRotate={true}
                              autoRotate={true}
                              autoRotateSpeed={1}
                              target={[0, 0, 0]}
                            />
                            <ambientLight intensity={1.2} />
                            <directionalLight position={[10, 10, 5]} intensity={2} />
                            <directionalLight position={[-10, -10, -5]} intensity={1} />
                            <project.model
                              position={project.position || [0, 0, 0]}
                              rotation={project.rotation || [0, 0, 0]}
                              scale={project.scale || 0.02}
                            />
                          </Suspense>
                        </Canvas>
                      </ErrorBoundary>
                    </div>
                  ) : (
                    <div className="h-64 w-full">
                      <Model3DFallback />
                    </div>
                  )}

                  {/* Category Badge for Mechanical Projects */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/90 text-white">
                      Mechanical Engineering
                    </span>
                  </div>
                </div>
              )}

              {/* Project Header - Screenshot/GIF for CS Projects */}
              {!project.model && project.image && (
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      project.imagePosition === 'top' ? 'object-top' : 'object-center'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/10" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-black">
                      AI & Data Science
                    </span>
                  </div>
                </div>
              )}

              {/* Project Content */}
              <div className="p-8">
                {/* Category Badge for CS Projects without a header image */}
                {!project.model && !project.image && (
                  <div className="mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-black">
                      AI & Data Science
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.desc}
                </p>
                
                <p className="text-gray-400 text-sm italic mb-6">
                  {project.subdesc}
                </p>

                {/* Technologies */}
                {project.technologies && (
                  <div className="mb-6">
                    <p className="text-white text-sm font-medium mb-3">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors duration-200 ${
                            project.category === 'computer-science'
                              ? 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                              : 'bg-orange-500/20 border border-orange-400/30 text-orange-300 hover:bg-orange-500/30'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t border-white/10">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                        project.category === 'computer-science'
                          ? 'bg-white/10 text-white hover:bg-white/20'
                          : 'bg-orange-500/20 text-orange-300 hover:bg-orange-500/30'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </motion.a>
                  )}
                  
                  {project.href && project.category === 'mechanical' && (
                    <motion.button
                      onClick={() => openPDFViewer(project)}
                      className="flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-300 hover:bg-orange-500/30 rounded-lg font-medium text-sm transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Documentation
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* 3D Model Viewer Modal */}
      <Model3DViewer
        model={selectedModel?.model}
        isOpen={isViewerOpen}
        onClose={closeModelViewer}
        title={selectedModel?.title}
      />

      {/* PDF Viewer Modal */}
      <PDFViewer
        pdfUrl={selectedPDF?.href}
        title={selectedPDF?.title}
        isOpen={isPDFViewerOpen}
        onClose={closePDFViewer}
      />
    </section>
  );
};

export default Projects;
