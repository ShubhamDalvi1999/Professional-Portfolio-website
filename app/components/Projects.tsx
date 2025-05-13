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
        <h3 className={`text-xl font-bold mb-2 ${delay === 2 ? 'text-black' : ''}`}>{title}</h3>
        <p className={`mb-4 ${delay === 2 ? 'text-neutral-800' : 'text-text-dim'}`}>{description}</p>
        <div className="mt-auto flex gap-3">
          <Link
            href="/projects"
            className={`ml-auto flex items-center gap-1 text-sm ${delay === 2 ? 'text-neutral-900' : 'text-accent'} hover:text-white transition-colors`}
          >
            <svg aria-label="Details arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
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
    "bg-[#6e3d2c] border border-[#6e3d2c]",
    "bg-[#e5c8a2] border border-[#e5c8a2]",
    "bg-[#2c1a12] border border-[#2c1a12]",
    "bg-[#a87145] border border-[#a87145]",
    "bg-[#472918] border border-[#472918]",
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
              description={project.shortDescription || `${project.description.substring(0, 100)}...`}
              gradient={cardColors[index % cardColors.length]}
              delay={index + 1}
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