'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: string;
  delay: number;
}

function SkillCard({ title, skills, icon, delay }: SkillCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="cosmic-card glow-effect h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: delay * 0.2, duration: 0.5 }}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="text-2xl text-accent mr-3">{icon}</div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        
        <ul className="space-y-2 mb-6 flex-grow">
          {skills.map((skill, index) => (
            <motion.li 
              key={index}
              className="flex items-center text-text-dim"
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: delay * 0.2 + 0.1 * index, duration: 0.3 }}
            >
              <span className="text-accent mr-2">•</span>
              {skill}
            </motion.li>
          ))}
        </ul>
        
        <motion.button
          className="btn-primary self-start mt-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay * 0.2 + 0.5, duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const skills = [
    {
      title: "Data Engineering",
      icon: "📊",
      skills: ["Spark", "Databricks", "Azure", "Snowflake", "Airflow", "Kafka"],
    },
    {
      title: "AI/Machine Learning",
      icon: "🧠",
      skills: ["LLMs", "RAG", "Embeddings", "GenAI Pipelines", "ML Ops", "PyTorch"],
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: ["CI/CD", "Terraform", "Unity Catalog", "Monitoring", "Docker", "Kubernetes"],
    }
  ];
  
  return (
    <section id="skills" className="py-24 relative">
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
            Technical <span className="text-accent">Expertise</span>
          </motion.h2>
          <motion.p 
            className="text-text-dim max-w-2xl mx-auto"
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Specialized in building robust data pipelines and AI-powered solutions
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              icon={skill.icon}
              skills={skill.skills}
              delay={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 