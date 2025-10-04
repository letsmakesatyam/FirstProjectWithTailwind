import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // UPDATED CLICK HANDLER
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setOpen(false); // close mobile menu if open

    // Find the element with the corresponding ID
    const section = document.getElementById(sectionId);
    
    // If the element exists, scroll to it smoothly
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  const showBackground = isScrolled || isOpen;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        showBackground ? "bg-[#050414] bg-opacity-70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Animated Logo */}
        <div className="text-lg font-semibold cursor-pointer font-mono group">
          <span className="text-[#8245ec] group-hover:scale-110 transition-transform duration-300">&lt;</span>
          <span className="text-white group-hover:text-[#8245ec] transition-all duration-300 group-hover:scale-105">Satyam</span>
          <span className="text-[#8245ec] group-hover:scale-110 transition-transform duration-300">/</span>
          <span className="text-white group-hover:text-[#8245ec] transition-all duration-300 group-hover:scale-105">Revgade</span>
          <span className="text-[#8245ec] group-hover:scale-110 transition-transform duration-300">&gt;</span>
        </div>

        {/* Desktop Menu + Social Icons */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-white font-medium">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-4 ml-6">
            <a
              href="https://github.com/letsmakesatyam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#8245ec] transition-colors duration-300 text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/deepincoding/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#8245ec] transition-colors duration-300 text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!isOpen)}
            className="text-white focus:outline-none text-xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 pb-5 text-white font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] list-none ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button 
                onClick={() => handleMenuItemClick(item.id)}
                className="w-full text-left py-2"
              >
                {item.label}
              </button>
            </li>
          ))}

          {/* Social Icons Mobile */}
          <div className="flex space-x-4 pt-3">
            <a
              href="https://github.com/letsmakesatyam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#8245ec] transition-colors duration-300 text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/deepincoding/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#8245ec] transition-colors duration-300 text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;