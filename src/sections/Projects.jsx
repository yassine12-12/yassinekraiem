import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { Leva, useControls } from 'leva';
import { myProjects } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';

const Projects = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });



  // Categorize projects
  const mechanicalProjects = myProjects.filter((project) => project.category === 'mechanical');
  const computerScienceProjects = myProjects.filter((project) => project.category === 'computer-science');
  const renderMechanicalProjects = (projects) =>
    projects.map((project, index) => (
      <div
        key={index}
        className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 border border-black-300 rounded-xl min-h-[550px]"
      >
        <div className="absolute top-0 right-0">
          <img
            src={project.spotlight}
            alt="spotlight"
            className="w-full h-96 object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-5 text-white-600 my-5 flex-grow">
          <p className="text-white text-2xl font-semibold">{project.title}</p>
          <p>{project.desc}</p>
          <p>{project.subdesc}</p>
        </div>

        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2 mt-5">
          <p className="text-white text-lg font-semibold">Technologies Used:</p>
          <ul className="flex gap-2 flex-wrap">
            {project.technologies.map((tech, index) => (
              <li
                key={index}
                className="px-3 py-1 bg-gray-700 text-white text-sm rounded-lg shadow"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <Canvas className="w-full h-80 mt-5">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={project.position || [0, 0, 10]} />
            <HeroCamera isMobile={isMobile}>
              {project.model && (
                <project.model
                  position={project.position || [0, 0, 0]} // Dynamically imported position
                  rotation={project.rotation || [0, 0, 0]} // Dynamically imported rotation
                  scale={project.scale || 0.02}
                />
              )}
            </HeroCamera>
            <ambientLight intensity={1.8} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls enableZoom enableRotate enablePan />
          </Suspense>
        </Canvas>
        <div className="flex justify-end mt-auto">
  {project.href ? (
    <a
      className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-white-300 hover:underline transition duration-200"
      href={project.href}
      target="_blank"
      rel="noreferrer"
    >
      <p>Check Project Documentation</p>
      <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
    </a>
  ) : (
    <p className="text-white-600 text-sm italic">Link not available</p>
  )}
</div>


      </div>
    ));


  const renderComputerScienceProjects = (projects) =>
    projects.map((project, index) => (
      <div
        key={index}
        className="flex flex-col justify-between gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 border border-black-300 rounded-xl h-auto"
      >
        <div className="absolute top-0 right-0">
          <img
            src={project.spotlight}
            alt="spotlight"
            className="w-full h-60 object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-5 text-white-600 my-5 flex-grow">
          <p className="text-white text-2xl font-semibold">{project.title}</p>
          <p>{project.desc}</p>
          <p>{project.subdesc}</p>
        </div>

        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2 mt-5">
          <p className="text-white text-lg font-semibold">Technologies Used:</p>
          <ul className="flex gap-2 flex-wrap">
            {project.technologies.map((tech, index) => (
              <li
                key={index}
                className="px-3 py-1 bg-gray-700 text-white text-sm rounded-lg shadow"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end mt-auto">
          {project.href ? (
            <a
              className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-white-300 hover:underline transition duration-200 "
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Check GitHub Repository</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          ) : (
            <p className="text-white-600 text-sm italic">Link not available</p>
          )}
        </div>


      </div>
    ));

  return (
    <section className="c-space my-20 scroll-mt-20" id="projects">
      {/* Mechanical Engineering Projects */}
      <div>
        <h2 className="text-3xl font-bold text-white my-10">Mechanical Engineering Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 items-stretch">
          {renderMechanicalProjects(mechanicalProjects)}
        </div>
      </div>

      {/* Computer Science Projects */}
      <div>
        <h2 className="text-3xl font-bold text-white my-10">Computer Science Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 items-stretch">
          {renderComputerScienceProjects(computerScienceProjects)}
        </div>
      </div>

      <Leva />
    </section>
  );



};

export default Projects; 