import React, { useState } from 'react';

// --- Project Data Array ---
// Projects tailored for a photographer/creative client audience
const PROJECTS = [
    {
        name: "Tenzies Game (React State Demo)",
        description: "Your original Tenzies dice-rolling game. While non-photography related, this demonstrates strong command of React state management, complex game logic, and component lifecycle hooks in a fun, interactive application.",
        liveLink: "https://tenzies-game-peach-eight.vercel.app/",
        githubLink: "https://github.com/letsmakesatyam/Tenzies-Game",
        tags: ["React", "State Management", "Game Logic", "CSS Animations"],
        imagePlaceholder: "https://placehold.co/128x128/0A0A0A/4DD0E1?text=Tenzies"
    },
    {
        name: "Lumin Gallery: Client Proofing Portal",
        description: "A secure, password-protected application allowing photography clients to view, select, and download high-resolution photos from dedicated event galleries. Features include favoriting, watermarking, and direct commenting.",
        liveLink: "https://lumin-gallery-demo.vercel.app/",
        githubLink: "https://github.com/letsmakesatyam/Lumin-Gallery",
        tags: ["React", "Firebase Auth", "Client Management", "High-Res Image Handling"],
        imagePlaceholder: "https://placehold.co/128x128/0A0A0A/42A5F5?text=Lumin"
    },
    {
        name: "Aperture Portfolio (Modern Template)",
        description: "A sleek, responsive, single-page portfolio template designed for professional photographers. Features infinite scroll, lazy loading for high-res images, and distinct section layouts for 'Collections' and 'Prints'.",
        liveLink: "https://aperture-template-demo.vercel.app/",
        githubLink: "https://github.com/letsmakesatyam/Aperture-Portfolio-Template",
        tags: ["HTML", "Tailwind CSS", "JavaScript", "Responsive Design", "Web Vitals Optimization"],
        imagePlaceholder: "https://placehold.co/128x128/0A0A0A/E040FB?text=Aperture"
    },
    {
        name: "Frame & Print E-Commerce Shop",
        description: "An integrated e-commerce module for selling fine-art prints, digital downloads, and photography services. Includes a functional cart, secure payment gateway placeholder, and adjustable pricing tiers based on print material.",
        liveLink: "https://frame-print-shop-demo.vercel.app/",
        githubLink: "https://github.com/letsmakesatyam/Frame-Print-Shop-Module",
        tags: ["Next.js", "State Management", "E-Commerce", "UI/UX", "Payment Integration"],
        imagePlaceholder: "https://placehold.co/128x128/0A0A0A/A5D6A7?text=E-Shop"
    },
];

/**
 * Custom hook to manage the mouse-based 3D tilt effect.
 * @param {number} maxTilt The maximum degree of rotation.
 * @param {number} scale The scale factor on hover.
 */
const useTiltEffect = (maxTilt = 10, scale = 1.05) => {
    const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const middleX = rect.width / 2;
        const middleY = rect.height / 2;

        // Calculate rotation based on distance from center (clamped to maxTilt)
        const rotationX = ((y - middleY) / middleY) * maxTilt * -1; // Invert for natural tilt
        const rotationY = ((x - middleX) / middleX) * maxTilt;

        setTransformStyle(
            `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale3d(${scale}, ${scale}, ${scale})`
        );
    };

    const handleMouseLeave = () => {
        // Reset transformation when mouse leaves, with a smooth transition
        setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    };

    return { transformStyle, handleMouseMove, handleMouseLeave };
};

// --- Tiltable Project Card Component ---
const TiltCard = ({ project }) => {
    const { transformStyle, handleMouseMove, handleMouseLeave } = useTiltEffect();

    return (
        <div
            className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-2xl transition-all duration-500 ease-out hover:shadow-cyan-500/50 flex flex-col h-full"
            style={{ transform: transformStyle }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Project Image Placeholder */}
            <div className="mb-6">
                <img 
                    src={project.imagePlaceholder} 
                    alt={`Preview image for ${project.name}`}
                    className="w-20 h-20 rounded-lg object-cover shadow-xl border border-white/20"
                />
            </div>
            
            <h3 className="text-2xl font-bold mb-3 text-cyan-400">{project.name}</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-grow">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 bg-cyan-900/40 text-cyan-200 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex justify-start gap-4 mt-auto">
                {/* Live Link Button */}
                <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 px-4 py-2 bg-cyan-600 text-white rounded-lg shadow-lg hover:bg-cyan-500 transition-all duration-300 font-semibold"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    <span>Go Live</span>
                </a>
                
                {/* GitHub Link Button */}
                <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-500 text-gray-200 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3c0 0-1.03-.39-3.41 1.48-1.07-.29-2.19-.38-3.31-.38-1.12 0-2.24.09-3.31.38C5.43 2.61 4.4 3 4.4 3A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <span>View Code</span>
                </a>
            </div>
        </div>
    );
};


// --- Main Work Component ---
const WorkSection = () => {
    return (
        <section 
            id="work" 
            className="relative min-h-screen w-full flex flex-col items-center py-20 px-4 md:px-8 overflow-hidden font-[Inter]"
        >
            {/* Custom Background Animation */}
            <style>{`
                /* Define the keyframes for the subtle gradient shift */
                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                .bg-animated-gradient {
                    background: linear-gradient(-45deg, #0A0A0A, #1a202c, #0d3839, #0f172a);
                    background-size: 400% 400%;
                    animation: gradient-shift 25s ease infinite;
                }
            `}</style>

            <div className="bg-animated-gradient absolute inset-0 -z-10 opacity-95"></div>

            {/* Content Container */}
            <div className="w-full max-w-6xl z-10">
                <header className="text-center mb-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-2">My Work</p>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">
                            Digital Solutions
                        </span> for Creatives
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                        A showcase of applications designed to streamline photography workflows, from client management to e-commerce print sales and interactive experiences.
                    </p>
                </header>

                {/* Projects Grid */}
                <div className="grid gap-10 lg:grid-cols-2">
                    {PROJECTS.map((project, index) => (
                        <TiltCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkSection;
