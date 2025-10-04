import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  // Increased number of stars for a denser universe
  const numStars = 200; 

  const stars = Array.from({ length: numStars }, (_, i) => {
    const size = Math.random() * 2 + 1; // Star size between 1px and 3px
    const xStart = Math.random() * 100; // Starting x-position
    const yStart = Math.random() * 100; // Starting y-position
    const xEnd = xStart + (Math.random() - 0.5) * 20; // End x-position, slight drift
    const yEnd = yStart + (Math.random() - 0.5) * 20; // End y-position, slight drift
    const delay = Math.random() * 10;   // Random animation delay
    const duration = Math.random() * 5 + 5; // Animation duration between 5s and 10s

    return (
      <motion.div
        key={i}
        className="absolute rounded-full bg-white"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${yStart}%`,
          left: `${xStart}%`,
          boxShadow: `0 0 ${size * 2}px ${size * 1}px #fff`
        }}
        initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
        animate={{ 
          opacity: [0, 1, 0.5, 1, 0], // Blinking effect
          scale: [0.5, 1, 0.8, 1.2, 0.5], // Subtle size variation
          x: [0, xEnd - xStart, 0], // Horizontal drift and return
          y: [0, yEnd - yStart, 0], // Vertical drift and return
        }}
        transition={{
          duration: duration,
          delay: delay,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    );
  });

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#0f021f]">
      {/* Universe Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {stars}
      </div>
      
      {/* Existing Moving Grid Background (with z-index for layering) */}
      <div className="absolute inset-0 opacity-20 z-10">
        <div className="absolute inset-0 
          bg-[linear-gradient(to_right,#9333ea_1px,transparent_1px),
          linear-gradient(to_bottom,#9333ea_1px,transparent_1px)] 
          bg-[size:80px_80px] animate-move">
        </div>
      </div>

      {/* Existing Animated Blobs (with higher z-index for layering) */}
      <div className="absolute w-[700px] h-[700px] bg-violet-700 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob z-20"></div>
      <div className="absolute w-[600px] h-[600px] bg-fuchsia-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000 z-20"></div>
      <div className="absolute w-[500px] h-[500px] bg-indigo-700 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000 z-20"></div>
      <div className="absolute w-[200px] h-[200px] bg-purple-500 rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-blob animation-delay-6000 z-20"></div>
      <div className="absolute w-[150px] h-[150px] bg-pink-500 rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-blob animation-delay-8000 z-20"></div>

      {/* Main Content (with the highest z-index) */}
      <div className="relative z-30 flex flex-col items-center justify-center min-h-screen px-4 md:px-[10vw] lg:px-[15vw]">
        <Navbar />

        {/* WRAP EACH COMPONENT IN A SECTION WITH AN ID */}
        <section id="about" className="w-full pt-24 -mt-24">
          <About />
        </section>

        <section id="skills" className="w-full pt-24 -mt-24">
          <Skills />
        </section>

        <section id="experience" className="w-full pt-24 -mt-24">
          <Experience />
        </section>

        <section id="work" className="w-full pt-24 -mt-24">
          <Work />
        </section>

        <section id="education" className="w-full pt-24 -mt-24">
          <Education />
        </section>

        <section id="contact" className="w-full pt-24 -mt-24">
          <Contact />
        </section>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;