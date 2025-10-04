import { myProjects } from '../constants/index.js';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';
import Model3DViewer from '../components/Model3DViewer';
import PDFViewer from '../components/PDFViewer';

const Projects = () => {
  const computerScienceProjects = myProjects.filter((project) => project.category === 'computer-science');
  const mechanicalProjects = myProjects.filter((project) => project.category === 'mechanical');
  
  const [selectedModel, setSelectedModel] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [isPDFViewerOpen, setIsPDFViewerOpen] = useState(false);

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

  return (
    <section className="c-space my-20" id="projects">
      <div className="text-center mb-12">
        <p className="head-text mb-4">Featured <span className="text-neon_gradient">Projects</span></p>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Explore my diverse portfolio showcasing expertise in AI, machine learning, computer vision, and mechanical engineering
        </p>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-8 text-center text-neon_gradient">Computer Science & AI Projects</h3>
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-8">
          {computerScienceProjects.map((project, index) => (
            <div
              key={index}
              className="card-glow flex flex-col gap-5 relative p-6 shadow-2xl border border-gray-500/30 rounded-xl min-h-[400px] hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-[1.02]"
            >
              <div className="absolute top-0 right-0 opacity-70">
                <img
                  src={project.spotlight}
                  alt="spotlight"
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>

              <div className="relative z-10 flex flex-col gap-5 flex-grow">
                <p className="text-white text-xl font-semibold">
                  {project.title}
                </p>
                
                <p className="text-gray-300">
                  {project.desc}
                </p>
                
                <p className="text-gray-400 text-sm italic">
                  {project.subdesc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  <p className="text-cyan-300 text-sm font-semibold mb-2 w-full">Technologies:</p>
                  {project.technologies?.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 text-xs rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex justify-between items-center mt-auto pt-4 border-t border-gray-600/30">
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-gray-300 text-sm hover:underline transition-colors duration-300"
                    >
                       <svg className="inline-block w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                       </svg>
                       Check Project Repo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-8 text-center text-orange-400">Mechanical Engineering Projects</h3>
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-8">
          {mechanicalProjects.map((project, index) => (
            <div
              key={index}
              className="card-glow flex flex-col gap-5 relative p-6 shadow-2xl border border-gray-500/30 rounded-xl min-h-[800px] hover:border-orange-400/50 transition-all duration-500 transform hover:scale-[1.02]"
            >
              {project.model && (
                <div 
                  className="h-96 w-full mb-4 rounded-xl overflow-hidden bg-black/20 cursor-pointer relative group"
                  onClick={() => openModelViewer(project)}
                >
                  {/* Click overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-10">
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-md border border-orange-400/50">
                      <span className="text-orange-400 font-medium text-xs">Click to explore in 3D</span>
                    </div>
                  </div>
                  
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
                </div>
              )}

              <div className="absolute top-0 right-0 opacity-70">
                <img
                  src={project.spotlight}
                  alt="spotlight"
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>

              <div className="relative z-10 flex flex-col gap-5 flex-grow">
                <p className="text-white text-xl font-semibold">
                  {project.title}
                </p>
                
                <p className="text-gray-300">
                  {project.desc}
                </p>
                
                <p className="text-gray-400 text-sm italic">
                  {project.subdesc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  <p className="text-orange-300 text-sm font-semibold mb-2 w-full">Technologies:</p>
                  {project.technologies?.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 text-orange-300 text-xs rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex justify-between items-center mt-auto pt-4 border-t border-gray-600/30">
                <div className="flex gap-2">
                  {project.href && (
                    <button
                      onClick={() => openPDFViewer(project)}
                      className="text-orange-400 hover:text-orange-300 text-sm hover:underline transition-colors duration-300 cursor-pointer"
                    >
                       Project Documentation
                    </button>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-gray-300 text-sm hover:underline transition-colors duration-300"
                    >
                       GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
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
