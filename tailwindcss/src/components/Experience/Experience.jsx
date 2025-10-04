import React, { useEffect } from 'react';
// NOTE: External packages like 'react-parallax-tilt' or 'framer-motion' are avoided 
// to ensure compilation success. Scroll-based animation is implemented using 
// native Intersection Observer API in useEffect.

// NOTE: Placeholder URLs are used below for logos. Replace these URLs with your actual organization logo images.
const experiences = [
    {
      id: 0,
      img: "https://placehold.co/80x80/059669/ffffff?text=WVD", // Webverse Digital
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
        id: 5,
        img: "https://placehold.co/80x80/7e22ce/ffffff?text=PHOTOG", 
        role: "Portfolio Website Specialist (Freelance)",
        company: "Photographer Clients",
        date: "2024 - Present",
        desc: "Specialized in developing high-impact portfolio websites for professional photographers, focusing on high-resolution image galleries, responsive design, and SEO optimization to enhance their online presence and client acquisition.",
        skills: ["React JS", "Next Js", "Tailwind CSS", "Image Optimization", "UI/UX Design", "SEO"],
    },
    {
      id: 1,
      img: "https://placehold.co/80x80/2563eb/ffffff?text=AGC", 
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 3,
      img: "https://placehold.co/80x80/d97706/ffffff?text=FREE", 
      role: "Freelance Web Designer & Developer",
      company: "Various Clients",
      date: "2023 - Present",
      desc: "Successfully delivered custom web solutions for multiple clients, focusing on modern, responsive portfolio and informational websites using cutting-edge technologies. Managed project lifecycle from concept to deployment, ensuring high client satisfaction.",
      skills: ["React JS", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "UI/UX Design", "Figma"],
    },
    {
      id: 6,
      img: "https://placehold.co/80x80/4338ca/ffffff?text=NXTWATE", 
      role: "Fullstack Software Engineer",
      company: "NxtWate Tech",
      date: "Q3 2021 - Q2 2023",
      desc: "Collaborated effectively across multiple agile teams to build and ship amazing, highly scalable full-stack products. Focused on optimizing backend services (Node/Express) and refining frontends (React), driving key features from concept to deployment.",
      skills: ["Node JS", "Express JS", "React JS", "PostgreSQL", "AWS", "CI/CD", "Team Collaboration"],
    },
    {
      id: 4,
      img: "https://placehold.co/80x80/ef4444/ffffff?text=LMS", 
      role: "Full-Stack Project Developer",
      company: "Personal Project (Library System)",
      date: "June 2022 - Aug 2022",
      desc: "Designed and implemented a full-stack Library Management System (LMS). The system included user authentication, book catalog management, and loan tracking functionality. Used Node.js/Express for the API and MongoDB for data persistence.",
      skills: ["Node JS", "Express JS", "MongoDB", "React JS", "Authentication", "REST APIs", "Mongoose"],
    },
    {
      id: 2,
      img: "https://placehold.co/80x80/9333ea/ffffff?text=NS", 
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
];


// Individual Experience Card Component
const ExperienceCard = ({ experience, index }) => {
    // Determine if the card should be aligned to the right (true for odd indices)
    const isRightAligned = index % 2 !== 0;
    
    // Ref to attach to the element for the observer
    const cardRef = React.useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-reveal');
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            },
            { threshold: 0.2 } // Trigger when 20% of the item is visible
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);


    // Base card styling with added CSS class for hover effect
    const cardClasses = "bg-gray-900 border border-gray-700/50 rounded-xl p-6 shadow-2xl w-full relative h-full card-3d-hover transition duration-300";

    return (
        // Full-width timeline row: uses flex to control left/right positioning on desktop
        <div 
            ref={cardRef} 
            className={`relative mb-16 md:mb-10 flex ${isRightAligned ? 'flex-row-reverse' : 'flex-row'} opacity-0 translate-y-10 transition-transform duration-1000 ease-out`}
        >
            
            {/* Empty space/placeholder on desktop (Left half for right-aligned card, Right half for left-aligned card) */}
            <div className={`hidden md:block w-1/2 ${isRightAligned ? 'pr-8' : 'pl-8'}`} />
            
            {/* Content Card (Half width on desktop, Full width on mobile) */}
            <div className={`w-full md:w-1/2 relative ${isRightAligned ? 'md:pr-8' : 'md:pl-8'}`}>
                
                {/* Mobile offset div - adds margin-left on small screens to prevent overlap */}
                <div className="ml-12 md:ml-0"> 
                    {/* Applied the tilt CSS class directly to the card content for the hover effect */}
                    <div className={cardClasses}>
                            
                        {/* Centered Logo for Visual Anchor */}
                        <img 
                            src={experience.img} 
                            alt={experience.company} 
                            className="w-24 h-24 object-cover rounded-full border-4 border-gray-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.10] z-0 pointer-events-none transition duration-500" 
                        />

                        {/* Text Content */}
                        <div className="relative z-10">
                            <div className={`flex justify-between items-start mb-2 ${isRightAligned ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                <div className={`${isRightAligned ? 'md:text-right' : 'md:text-left'}`}>
                                    <h3 className="text-2xl font-bold text-white leading-tight">{experience.role}</h3>
                                    <p className="text-lg text-cyan-400 font-medium">{experience.company}</p>
                                </div>
                                <p className="text-sm font-semibold text-gray-400 md:text-md flex-shrink-0 mt-1 md:mt-0">{experience.date}</p>
                            </div>
                            
                            {/* Description with colored border (always left-aligned for readability) */}
                            <p className="text-gray-300 mb-4 border-l-4 border-cyan-500 pl-3 italic text-left">{experience.desc}</p>
                            
                            {/* Skills Badges (always left-aligned for readability) */}
                            <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-700/50 text-left">
                                <span className="text-sm font-bold text-gray-400 mr-1">Tech Stack:</span>
                                {experience.skills.map((skill, skillIndex) => (
                                    <span 
                                        key={skillIndex} 
                                        className="text-xs font-medium px-3 py-1 bg-cyan-900/50 text-cyan-200 rounded-full border border-cyan-700/50"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Timeline Animated Sphere (Dot) */}
            <div className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-cyan-500/20 border-2 border-cyan-400 z-30 transition-all flex items-center justify-center animate-slow-ping
                // Mobile: left-[6px] centers the 32px dot on the 22px main line 
                left-[6px] md:left-1/2 md:-translate-x-1/2 
            `}>
                <div className="w-3 h-3 rounded-full bg-cyan-200 shadow-lg shadow-cyan-400/50"></div>
            </div>

        </div>
    );
};


const Experience = () => {
    return(
        // Ensure the section takes full available width and minimum height
        <section id="experience" className="min-h-screen pt-24 pb-16 relative w-full overflow-hidden font-inter">
            {/* Background Animation Effect and Overlay (Takes full width due to inset-0 w-full) */}
            <div className="absolute inset-0 bg-gray-950 opacity-90 backdrop-blur-sm z-0 w-full"></div>
            <div className="absolute inset-0 z-0 opacity-20 w-full">
                {/* Subtle gradient animation */}
                <div className="animate-gradient bg-gradient-to-r from-cyan-900 via-gray-900 to-indigo-900 h-full w-full opacity-50"></div>
            </div>
            <style jsx>{`
                /* Keyframes for a slow, subtle background shift */
                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                    background-size: 400% 400%;
                    animation: gradient-shift 15s ease infinite;
                }
                /* Custom Keyframes for slow, dramatic ping/pulse effect on timeline dot */
                @keyframes slow-ping {
                    0% {
                        transform: scale(0.8);
                        opacity: 0.6;
                    }
                    50% {
                        transform: scale(1.1);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(0.8);
                        opacity: 0.6;
                    }
                }
                .animate-slow-ping {
                    animation: slow-ping 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                /* CSS 3D Tilt Effect replacement */
                .card-3d-hover {
                    transform-style: preserve-3d;
                    perspective: 1000px; 
                    will-change: transform, box-shadow; 
                    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out; 
                }
                .card-3d-hover:hover {
                    /* Applying a subtle 3D shift */
                    transform: rotateX(1deg) rotateY(-2deg) translateZ(10px) scale(1.01); 
                    /* Subtle glow on hover */
                    box-shadow: 0 15px 30px -5px rgba(6, 182, 212, 0.4); 
                }
                /* Scroll Reveal Animation Trigger */
                .animate-reveal {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
            `}</style>


            {/* Main Content Container: max-w-7xl now provides a wider layout */}
            <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                
                {/* Header - EDITED FOR UNDERLINE AND SIZE */}
                <header className="text-center mb-16">
                    <h1 className="text-6xl font-extrabold text-white mb-3">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">
                            Experiences
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6">
                        A detailed look at my development journey, key roles, and specialized projects.
                    </p>
                    {/* Proper Underline/Divider */}
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 mx-auto rounded-full"></div>
                </header>

                {/* Timeline Container */}
                <div className="relative">
                    {/* The main vertical timeline line (centered on desktop, left on mobile) 
                        Positioned at left-[22px] for mobile to leave a margin for the cards.
                    */}
                    <div className="absolute left-[22px] md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 md:w-1 bg-cyan-500/30 z-10"></div>

                    {/* Experience List */}
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={exp.id} experience={exp} index={index} />
                    ))}
                </div>

                <div className="text-center mt-16">
                    <p className="text-gray-500 italic text-sm">
                        *Entries marked as 'Freelance' or 'Personal Project' highlight specialized skills and project structure.*
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Experience;
