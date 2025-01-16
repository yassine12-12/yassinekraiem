import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const About = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('kraiem_y@hotmail.fr');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20 scroll-mt-20" id="about">
      <p className="text-white text-2xl font-semibold mb-8">About Me</p>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 h-full">
        {/* Grid section 1: Introduction */}
        <div className="col-span-1 shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 rounded-lg bg-black-200 border border-black-300 bg-opacity-20 backdrop-blur-md hover:shadow-2xl hover:shadow-purple-600/50 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-gray-100 mb-4">Hi, I'm Yassine Kraiem</h3>
          <p className="text-gray-300 leading-relaxed">

            A driven Mechanical Engineer and Web Developer with a passion for innovation. I specialize in combining technical expertise with creative problem-solving to deliver impactful solutions.
          </p>
          
        </div>

        {/* Grid section 2: Languages */}
        <div className="col-span-1 shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 rounded-lg bg-black-200 border border-black-300  bg-opacity-20 backdrop-blur-md hover:shadow-2xl hover:shadow-green-600/50 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-gray-100 mb-4">Languages</h3>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-300">
              <img
                alt="French"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"
                className="inline-block h-6 mr-3 rounded-full"
              />
              French: Native Proficiency
            </li>
            <li className="flex items-center text-gray-300">
              <img
                alt="Arabic"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/TN.svg"
                className="inline-block h-6 mr-3 rounded-full"
              />
              Arabic: Native Proficiency
            </li>
            <li className="flex items-center text-gray-300">
              <img
                alt="English"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
                className="inline-block h-6 mr-3 rounded-full"
              />
              English: Fluent
            </li>
            <li className="flex items-center text-gray-300">
              <img
                alt="German"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg"
                className="inline-block h-6 mr-3 rounded-full"
              />
              German: Fluent
            </li>
          </ul>
        </div>

        {/* Grid section 3: Flexible Location */}
        <div className="col-span-1 shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 rounded-lg bg-black-200 border border-black-300 bg-opacity-20 backdrop-blur-md hover:shadow-2xl hover:shadow-yellow-500/50 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-gray-100 mb-4">Location</h3>
          <p className="text-gray-300 leading-relaxed">
            Based in Berlin, Germany, I thrive in multicultural environments and enjoy collaborating with diverse teams. I’m open to global opportunities and willing to travel for impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
