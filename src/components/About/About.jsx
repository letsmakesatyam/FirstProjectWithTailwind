import React, { useState, useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import ProfileImage from "../../assets/profile2.png";

const About = () => {
  const skills = [
    "Fullstack Developer",
    "Pixel Perfect Coder",
    "UI/UX Designer",
    "React Enthusiast",
    "Tailwind CSS Expert",
  ];

  const colors = ["#00f7ff", "#8245ec", "#ff5c8a", "#f0e130", "#ff6f00"];

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const skillIndexRef = useRef(0);
  const charIndexRef = useRef(0);

  useEffect(() => {
    const typingSpeed = 150;
    const pauseTime = 3000;

    const interval = setInterval(() => {
      const currentSkill = skills[skillIndexRef.current];

      if (!isDeleting) {
        setDisplayedText(currentSkill.slice(0, charIndexRef.current + 1));
        charIndexRef.current += 1;

        if (charIndexRef.current === currentSkill.length) {
          setIsDeleting(true);
        }
      } else {
        setDisplayedText(currentSkill.slice(0, charIndexRef.current - 1));
        charIndexRef.current -= 1;

        if (charIndexRef.current === 0) {
          skillIndexRef.current = (skillIndexRef.current + 1) % skills.length;
          setCurrentColor(colors[skillIndexRef.current % colors.length]);
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [isDeleting]);

  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-[7vw] md:px-[10vw] lg:px-[15vw] relative z-10 py-20 md:py-0 mt-16 md:mt-0"
    >
      {/* Text Content Section - Top on mobile, Left on desktop */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 md:space-y-8 order-1 md:pr-10 lg:pr-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Hey, I am
        </h2>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#8245ec] flex flex-col md:flex-row md:space-x-4">
          <span>Satyam</span>
          <span>Revgade</span>
        </h1>

        <h3
          className="text-xl md:text-2xl lg:text-3xl font-medium min-h-[2rem]"
          style={{ color: currentColor }}
        >
          {displayedText}
          <span className="animate-blink">|</span>
        </h3>

        {/* Image Section - Middle on mobile, Right on desktop */}
        <div className="flex-1 flex justify-center my-8 md:my-0 md:order-2 md:hidden">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.4}
            glareColor="#8245ec"
            glarePosition="all"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-[#8245ec] shadow-xl"
          >
            <img
              src={ProfileImage}
              alt="Satyam Revgade"
              className="w-full h-full object-cover rounded-full"
            />
          </Tilt>
        </div>

        {/* Introduction Paragraph */}
        <p className="text-white/70 text-md md:text-lg lg:text-xl max-w-md lg:max-w-lg leading-relaxed">
          Crafting seamless digital experiences with a mix of coding, design,
          and creativity. Passionate about building interactive, pixel-perfect
          applications.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 mt-4 md:mt-6">
          <button className="bg-[#8245ec] text-white px-6 py-3 rounded-lg hover:bg-[#9d5cf5] transition duration-300 transform hover:scale-105">
            Hire Me
          </button>
          <button className="bg-transparent border-2 border-[#8245ec] text-white px-6 py-3 rounded-lg hover:bg-[#8245ec] hover:text-white transition duration-300 transform hover:scale-105">
            Resume
          </button>
        </div>
      </div>

      {/* Image Section - Hidden on mobile (shown above in text section), Visible on desktop */}
      <div className="flex-1 flex justify-center mb-8 md:mb-0 order-2 hidden md:flex">
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.4}
          glareColor="#8245ec"
          glarePosition="all"
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-[#8245ec] shadow-xl"
        >
          <img
            src={ProfileImage}
            alt="Satyam Revgade"
            className="w-full h-full object-cover rounded-full"
          />
        </Tilt>
      </div>
    </section>
  );
};

export default About;