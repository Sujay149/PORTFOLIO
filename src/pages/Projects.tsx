import React, { useState, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "NueroHUB",
      description: "Neurodiversity refers to the natural variation in how people think, learn, and process information. It includes conditions like autism, ADHD, dyslexia, and more, recognizing them as differences rather than deficits. Embracing neurodiversity fosters inclusivity, enabling individuals to leverage their unique strengths.",
      image: "https://tse3.mm.bing.net/th?id=OIP.jCB1NFLKYf5ItGOFwNYOAQHaCi&pid=Api&P=0&h=180",
      tags: ["React", "Tailwind", "Firebase", "Typescript", "API"],
      url: "https://signup-1499.web.app/",
      github: "https://github.com/Sujay149/NUEROHUB",
    },
    {
      id: 2,
      title: "CraveFinder",
      description: "The Recipe Project is a user-friendly web application where anyone can find and learn new recipes with ease.It offers a vast collection of recipes from various cuisines, each with detailed instructions and ingredients.Users can explore dishes based on categories, ingredients, or dietary preferences.Step-by-step guidance helps users learn how to cook even if they're beginners. The platform encourages discovering new meals and experimenting with cooking styles.",
      image: "https://tse2.mm.bing.net/th?id=OIP.YMhyA2_dAkOnJqRpYqey9gHaHa&pid=Api&P=0&h=180",
      tags: ["Typescript", "Recat", "Node", ],
      url: "crave-finder.vercel.app",
      github: "https://github.com/Sujay149/CraveFinder",
    },
    {
      id: 3,
      title: "ReDestiny",
      description: "A smart and intuitive URL shortener that empowers users to redirect, transform, and manage their destination links effortlessly — featuring secure login, personalized dashboards, custom short domains, and real-time control over where your links lead.",
      image: "data:image/png;base64,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",
      tags: ["React.js", "Tailwind CSS", "Bootstrap", "Material UI", "MongoDB", "Node.js"],
      url: "redestiny.vercel.app",
      github: "https://github.com/Sujay149/ReDestiny",
    },
    {
      id: 4,
      title: "Research & Startup Management System",
      description: "The Research & Startup Management System is a centralized platform designed to streamline the management of research, intellectual property rights (IPR), innovation projects, and startups in Gujarat. It enables efficient data handling, collaboration, and resource allocation for researchers, innovators, and entrepreneurs.",
      image: "/images/sih.png",
      tags: ["React.js", "Tailwind CSS", "Bootstrap", "Material UI", "MongoDB", "Node.js"],
      url: "innovation.vercel.app",
      github: "https://github.com/Sujay149/FINALSIH",
    }
  ];

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4 w-full max-w-7xl">
        {/* Header Section */}
        <header className="text-center w-full mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight mb-6">
            Things I've made trying to put my dent in the universe.
          </h1>
          <p className="text-gray-600 text-start text-lg">
            I've worked on many projects over the years but these are the ones that I'm most
            proud of. Some are open-source, so if you see something interesting,
            check out the code and contribute if you have ideas for improvements.
          </p>
        </header>

        {/* Projects Grid */}
        <section 
          ref={ref}
          className={`w-full transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white p-6 rounded-lg hover:shadow-md transition-all duration-300 flex flex-col hover:bg-gray-50" // Removed border-gray-100
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-16 h-16 object-cover rounded-lg mb-4"
                />

                {/* Project Title and Description */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-col gap-2 mt-auto">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-teal-500 text-sm hover:underline"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      {project.url.replace(/^https?:\/\//, "").split('/')[0]}
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-teal-500 text-sm hover:underline"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
