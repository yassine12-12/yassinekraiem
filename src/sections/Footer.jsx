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


      <p className="text-white-500">© 2025 Yassine Kraiem. All rights reserved.</p>
    </footer>
  );
};

export default Footer;


