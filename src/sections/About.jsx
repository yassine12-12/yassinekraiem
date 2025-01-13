import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

import Button from '../components/Button.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { Tisch } from '../components/Tisch.jsx';

const About = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <section className="c-space my-20 scroll-mt-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

        {/* Grid section 1 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I’m Yassine Kraiem</p>
              <p className="grid-subtext">
                I am a mechanical engineer and web developer with a passion for innovation and problem-solving.
                My expertise spans creating dynamic, responsive web applications and engineering robust solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Grid section 2 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container flex flex-col items-center justify-center h-full">
            <div className="w-full sm:h-[276px] h-fit grid grid-cols-2 gap-4 justify-center items-center">
              <img alt="French" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg" className="h-16" />
              <img alt="English" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" className="h-16" />
              <img alt="German" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg" className="h-16" />
              <img alt="Arabic" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/SA.svg" className="h-16" />
            </div>
            <div>
              <p className="grid-headtext">Languages I Speak</p>
              <p className="grid-subtext">
                I am fluent in multiple languages, enabling seamless communication in diverse environments.
                <strong>French</strong> and <strong>Arabic</strong> are my native languages, complemented by proficiency in <strong>English</strong> and <strong>German</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">

              
            </div>

            <div>
              <p className="grid-headtext">Flexible Communication & Collaboration</p>
              <p className="grid-subtext">
                Based in Berlin, Germany, I am open to collaborating across time zones and working remotely worldwide.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* Grid section 4 */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
              
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I thrive on solving challenges and building impactful solutions through code. Programming is not just a skill—it’s my craft and passion.
              </p>
            </div>
          </div>
        </div>

        {/* Grid section 5 */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container">
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  kraiem_y@hotmail.fr
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
