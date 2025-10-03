import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect to add background when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setOpen(false); // close mobile menu if open
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-[#050414] bg-opacity-70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer font-mono">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Satyam</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Revgade</span>
          <span className="text-[#8245ec]">&gt;</span>
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
            className="text-white focus:outline-none"
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
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
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
