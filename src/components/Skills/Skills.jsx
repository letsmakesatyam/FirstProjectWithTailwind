import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { SkillsInfo } from '../../constants'; // Assuming this file exists

// AsteroidBackground component
const AsteroidBackground = () => {
  const numAsteroids = 30; // Number of asteroids

  const asteroids = Array.from({ length: numAsteroids }, (_, i) => {
    const size = Math.random() * 5 + 2; // Asteroid size between 2px and 7px
    const startX = Math.random() * 100; // Starting x-position (0-100%)
    const delay = Math.random() * 5;    // Random animation delay

    return (
      <motion.div
        key={i}
        className="absolute bg-slate-500 rounded-full"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `-${size}px`, // Start just above the viewport
          left: `${startX}%`,
          boxShadow: `0 0 ${size * 1.5}px ${size * 0.5}px #fff`,
        }}
        initial={{ y: 0, opacity: 0.8 }}
        animate={{
          y: '120vh', // Animate down the screen
          opacity: 0,
        }}
        transition={{
          duration: Math.random() * 5 + 5, // Duration between 5s and 10s
          delay: delay,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear", // Consistent, straight movement
        }}
      />
    );
  });

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {asteroids}
    </div>
  );
};

const Skills = () => {
  // Tilt component options for a consistent and clean effect
  const tiltOptions = {
    glareEnable: true,
    glareMaxOpacity: 0.4,
    glareColor: '#67e8f9', // A light cyan color
    glarePosition: 'all',
    glareBorderRadius: '8px',
    scale: 1.05,
  };

  return (
    <section id="skills" className="relative bg-black text-white py-16 md:py-24">
      <AsteroidBackground /> {/* Use the new AsteroidBackground component */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h1>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
            A collection of my technical skills and expertise honed through various projects and learning experiences.
          </p>
        </div>

        {SkillsInfo.map((category) => (
          <div key={category.title} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-cyan-400 border-b-2 border-cyan-800 pb-2 max-w-sm mx-auto">
              {category.title}
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.skills.map((skill) => (
                // Each skill is now wrapped with the Tilt component
                <Tilt key={skill.name} {...tiltOptions}>
                  <div
                    className="h-full flex flex-col items-center justify-center p-4 bg-neutral-900 rounded-lg shadow-md
                               border border-transparent hover:border-cyan-500 hover:shadow-cyan-500/30 transition-colors duration-300"
                  >
                    <img src={skill.logo} alt={`${skill.name} logo`} className="w-14 h-14 md:w-16 md:h-16 object-contain mb-3" />
                    <p className="text-sm md:text-base font-medium text-neutral-200">{skill.name}</p>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;