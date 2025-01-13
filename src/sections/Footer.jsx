import { useState } from 'react';

const Footer = () => {
  // State to track hovered icon
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Function to handle hover effects
  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/yassine12-12" target="_blank" rel="noopener noreferrer">
          <div
            className={`social-icon ${hoveredIcon === 'github' ? 'scale-110' : ''}`}
            onMouseEnter={() => handleMouseEnter('github')}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="/assets/github.svg"
              alt="github"
              className={`w-1/2 h-1/2 ${hoveredIcon === 'github' ? 'transition-transform duration-300' : ''}`}
            />
          </div>
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <div
            className={`social-icon ${hoveredIcon === 'twitter' ? 'scale-110' : ''}`}
            onMouseEnter={() => handleMouseEnter('twitter')}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="/assets/twitter.svg"
              alt="twitter"
              className={`w-1/2 h-1/2 ${hoveredIcon === 'twitter' ? 'transition-transform duration-300' : ''}`}
            />
          </div>
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <div
            className={`social-icon ${hoveredIcon === 'instagram' ? 'scale-110' : ''}`}
            onMouseEnter={() => handleMouseEnter('instagram')}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="/assets/instagram.svg"
              alt="instagram"
              className={`w-1/2 h-1/2 ${hoveredIcon === 'instagram' ? 'transition-transform duration-300' : ''}`}
            />
          </div>
        </a>
      </div>

      <p className="text-white-500">© 2024 Yassine Kraiem. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
