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

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#0f021f]">
      {/* Moving Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 
          bg-[linear-gradient(to_right,#9333ea_1px,transparent_1px),
              linear-gradient(to_bottom,#9333ea_1px,transparent_1px)] 
          bg-[size:80px_80px] animate-move">
        </div>
      </div>

      {/* Animated Blobs */}
      <div className="absolute w-[700px] h-[700px] bg-violet-700 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute w-[600px] h-[600px] bg-fuchsia-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute w-[500px] h-[500px] bg-indigo-700 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      <div className="absolute w-[200px] h-[200px] bg-purple-500 rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-blob animation-delay-6000"></div>
      <div className="absolute w-[150px] h-[150px] bg-pink-500 rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-blob animation-delay-8000"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-[10vw] lg:px-[15vw]">
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