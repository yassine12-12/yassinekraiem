import { gsap } from 'gsap';
import { useEffect, useState } from 'react';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { Leva, useControls } from 'leva';
import { myProjects, calculateSizes } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { Hubwerkseinheit } from '../components/Hubwerkseinheit.jsx';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import { HackerRoom } from '../components/HackerRoom.jsx';
import { Tisch } from '../components/Tisch.jsx';

const Projects = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const projectCount = myProjects.length;

  const { positionX, positionY, positionZ, rotationX, rotationY, rotationZ, scale } = useControls({
    positionX: { value: 0, min: -10, max: 10, step: 0.1 },
    positionY: { value: 0, min: -10, max: 10, step: 0.1 },
    positionZ: { value: 0, min: -10, max: 10, step: 0.1 },
    rotationX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotationY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotationZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    scale: { value: 0.01, min: 0.01, max: 10, step: 0.01 },
  });

  useEffect(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' }
    );
  }, [selectedProjectIndex]);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      else return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
    });
  };

  const currentProject = myProjects[selectedProjectIndex];


  return (
    <section className="c-space my-20">
      <p className="head-text">My Selected Work</p>

      <div className="grid  grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
          </div>

          
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer">
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
          <Leva />

            <Canvas className='w-full h-full'>
              <Suspense fallback={<CanvasLoader />}>
                {/* Leva Panel Hidden */}

                {/* Position the camera further back */}
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />

                {/* HeroCamera Wrapper for Tisch */}
                <HeroCamera isMobile={isMobile}>
                   {/* Dynamically Render the Model */}
                {currentProject.model && (
                  <currentProject.model
                 
                    position={[positionX, positionY, positionZ]}
                   rotation={[rotationX, rotationY, rotationZ]}
                   scale={0.020}/>
                )}
                  
                  
                </HeroCamera>

                {/* Lights */}
                <ambientLight intensity={1.8} />
                <directionalLight position={[10, 10, 10]} intensity={1} />

                {/* OrbitControls for mouse interaction */}
                <OrbitControls enableZoom={true} enableRotate={true} enablePan={true} />
              </Suspense>
            </Canvas>

        </div>

        
      </div>
    </section>
  );
};

export default Projects;