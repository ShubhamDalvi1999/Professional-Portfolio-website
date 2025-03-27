'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProjectCardProps {
  title: string;
  description: string;
  gradient: string;
  delay: number;
}

function ProjectCard({ title, description, gradient, delay }: ProjectCardProps) {
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
        <p className="text-text-dim mb-6">{description}</p>
        <motion.button 
          className="btn-primary self-start mt-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Real-Time Streaming with Kafka & Flink",
      description: "Reduced latency by 60% in course recommendation engine",
      gradient: "bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-800/30",
    },
    {
      title: "Enterprise LLM RAG Pipeline",
      description: "Improved answer accuracy by 45% for internal knowledge system",
      gradient: "bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-800/30",
    },
    {
      title: "ML Feature Store Platform",
      description: "Decreased model training time by 75% through optimized feature access",
      gradient: "bg-gradient-to-br from-pink-900/50 to-red-900/50 border border-pink-800/30",
    },
    {
      title: "Multi-Modal AI Data Processor",
      description: "Automated document understanding system with 93% accuracy",
      gradient: "bg-gradient-to-br from-red-900/50 to-orange-900/50 border border-red-800/30",
    },
    {
      title: "Data Mesh Architecture",
      description: "Designed domain-driven data platform reducing time-to-insight by 80%",
      gradient: "bg-gradient-to-br from-orange-900/50 to-yellow-900/50 border border-orange-800/30",
    },
    {
      title: "Automated MLOps Pipeline",
      description: "Cut deployment time from 2 weeks to 1 hour with full CI/CD integration",
      gradient: "bg-gradient-to-br from-teal-900/50 to-blue-900/50 border border-teal-800/30",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
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
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              gradient={project.gradient}
              delay={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 