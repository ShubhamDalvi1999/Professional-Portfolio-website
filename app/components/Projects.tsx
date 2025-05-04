'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { getFeaturedProjects, Project } from '@/lib/data/projects';

interface ProjectCardProps {
  title: string;
  description: string;
  gradient: string;
  delay: number;
  technologies?: string[];
  githubLink?: string;
}

function ProjectCard({ title, description, gradient, delay, technologies, githubLink }: ProjectCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="rounded-xl overflow-hidden glow-effect"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: delay * 0.2, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className={`p-6 h-full flex flex-col ${gradient}`}>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-text-dim mb-4">{description}</p>
        
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 rounded-full bg-black/50 border border-border/50">
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-full bg-black/50 border border-border/50">
                +{technologies.length - 3} more
              </span>
            )}
          </div>
        )}
        
        <div className="mt-auto flex gap-3">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-text-dim hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </a>
          )}
          
          <Link
            href={`/projects`}
            className="ml-auto flex items-center gap-1 text-sm text-accent hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
            Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Get only featured projects
  const featuredProjects = getFeaturedProjects();

  const cardColors = [
    "bg-gradient-to-br from-amber-950/80 to-amber-900/40 border border-amber-800/30",
    "bg-gradient-to-br from-amber-900/50 to-amber-800/40 border border-amber-700/30",
    "bg-gradient-to-br from-amber-800/50 to-amber-700/40 border border-amber-600/30",
    "bg-gradient-to-br from-amber-700/50 to-amber-600/40 border border-amber-500/30",
  ];

  return (
    <section id="projects" className="py-24 relative bg-black">
      <div className="container-section">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Featured <span className="text-accent">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-text-dim max-w-2xl mx-auto"
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Solving complex data challenges with innovative engineering
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.slice(0, 6).map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.shortDescription || project.description.substring(0, 100) + '...'}
              gradient={cardColors[index % cardColors.length]}
              delay={index + 1}
              technologies={project.technologies}
              githubLink={project.links?.github}
            />
          ))}
        </div>
        
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/projects" className="btn-primary inline-flex items-center gap-2">
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 