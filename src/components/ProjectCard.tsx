
import React from 'react';
import { Project } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  isAnimated: boolean;
  index: number;
  onOpenDetails: (project: Project) => void;
}

const ProjectCard = ({ project, isAnimated, index, onOpenDetails }: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "grid grid-cols-1 lg:grid-cols-3 gap-8 transform transition-all duration-500",
        isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="lg:col-span-1">
        <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto"
          />
        </div>
      </div>
      
      <div className="lg:col-span-2 flex flex-col">
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-5">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-auto">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              <span>{project.url.replace(/^https?:\/\/(www\.)?/, '')}</span>
            </a>
          )}
          
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="h-4 w-4 mr-1" />
              <span>View Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
