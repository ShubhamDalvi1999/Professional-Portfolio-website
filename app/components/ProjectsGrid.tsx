'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GitHubLink } from './ui/github-link';
import { useProjects } from '@/app/context/ProjectsContext';

export default function ProjectsGrid() {
  try {
    const { filteredProjects } = useProjects();

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
            />
          ))
        ) : (
          <div className="col-span-3 py-16 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-2">No projects found</h3>
              <p className="mb-4">Try adjusting your search criteria or clearing the filters</p>
            </motion.div>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error in ProjectsGrid:", error);
    return (
      <div className="col-span-3 py-16 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-2">Unable to load projects</h3>
          <p className="mb-4">Please try refreshing the page</p>
        </motion.div>
      </div>
    );
  }
}

interface ProjectCardProps {
  project: any;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: index * 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="rounded-xl overflow-hidden group project-card"
      variants={container}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.02 }}
      layout
    >
      <div className="p-6 h-full flex flex-col">
        <motion.h3 variants={item} className="text-xl font-bold mb-2">
          {project.title}
        </motion.h3>
        
        <motion.p variants={item} className="mb-4">
          {project.shortDescription || project.description.substring(0, 120) + '...'}
        </motion.p>
        
        <motion.div variants={item} className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 5).map((tech: string) => (
            <span key={tech} className="text-xs px-2 py-1 rounded-full tech-tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-xs px-2 py-1 rounded-full bg-black/50 border border-border/50">
              +{project.technologies.length - 5} more
            </span>
          )}
        </motion.div>
        
        <div className="mt-auto flex gap-3">
          {project.links?.github && (
            <motion.div variants={item}>
              <GitHubLink
                label="GitHub"
                url={project.links.github}
                variant="ghost"
                size="sm"
              />
            </motion.div>
          )}
          
          {project.links?.live && (
            <motion.a
              variants={item}
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm github-link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Live Demo
            </motion.a>
          )}
          
          <motion.button
            variants={item}
            className="ml-auto flex items-center gap-1 text-sm details-btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
            Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
} 