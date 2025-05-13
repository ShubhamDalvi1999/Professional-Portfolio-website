'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { SkillsGridDemo } from './ui/skills-grid-demo';
import { cn } from '@/lib/utils';

// Define types
type Skill = {
  name: string;
  image: string;
};

type SkillCategory = {
  id: string;
  title: string;
  skills: Skill[];
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function SkillsCategories() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold text-center tracking-tighter mb-12 text-white">
        Technical Skills
      </h2>
      
      <motion.div 
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="space-y-16"
      >
        {/* Interactive skills grid showcasing main skill categories */}
        <div className="pb-4">
          <SkillsGridDemo />
        </div>
        
        {/* Detailed skills sections - keep these but with updated styling */}
        <DetailedSkillsSection />
      </motion.div>
    </div>
  );
}

// This component will display the detailed skills sections under the grid
function DetailedSkillsSection() {
  // Define skill categories with their respective skills
  const skillCategories: SkillCategory[] = [
    {
      id: 'data-engineering',
      title: 'Data Engineering',
      skills: [
        // Core Platforms & Engines
        { name: 'Databricks', image: '/images/skills/databrick.jpg' },
        { name: 'Apache Spark', image: '/images/skills/apache-spark.png' },
        { name: 'PySpark', image: '/images/skills/pyspark.jpg' },
        { name: 'Flink', image: '/images/skills/flink.png' },
        { name: 'DLT', image: '/images/skills/DLT.png' },
        { name: 'Airflow', image: '/images/skills/airflow.png' },
        // Data Storage & Warehousing
        { name: 'Snowflake', image: '/images/skills/snowflake.png' },
        { name: 'Delta Lake', image: '/images/skills/delta-lake.png' },
        { name: 'Apache Iceberg', image: '/images/skills/Apache_Iceberg.png' },
        // ETL & Transformation
        { name: 'AWS Glue', image: '/images/skills/glue.png' },
        { name: 'DBT', image: '/images/skills/dbt.png' },
        // Streaming & Messaging
        { name: 'Apache Kafka', image: '/images/skills/kafka.png' },
        // Analytics & Visualization
        { name: 'PowerBI', image: '/images/skills/power bi.png' },
      ]
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      skills: [
        // Languages & Libraries
        { name: 'Python', image: '/images/skills/python.png' },
        { name: 'Pandas', image: '/images/skills/pandas.png' },
        // ML/AI Frameworks & Models
        { name: 'Large Language Models', image: '/images/skills/llm.png' },
        { name: 'Transformers', image: '/images/skills/transformers.png' },
        { name: 'LangChain', image: '/images/skills/langchain.jpg' },
        { name: 'RAG', image: '/images/skills/rag.png' },
        // Graph & Data Science
        { name: 'Neo4j', image: '/images/skills/neo4j.jpg' },
        { name: 'Clustering', image: '/images/skills/clustering.png' },
        { name: 'Regression ML', image: '/images/skills/regression-ML.png' },
        // Visualization & Analytics
        { name: 'PowerBI', image: '/images/skills/power bi.png' },
      ]
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      skills: [
        // Cloud Providers
        { name: 'AWS', image: '/images/skills/AWS.png' },
        { name: 'Azure', image: '/images/skills/azure.png' },
        // Containers & Orchestration
        { name: 'Docker', image: '/images/skills/docker.png' },
        { name: 'Kubernetes', image: '/images/skills/Kubernetes.png' },
        // Serverless & Databases
        { name: 'AWS Lambda', image: '/images/skills/lambda.jpg' },
        { name: 'DynamoDB', image: '/images/skills/dynamo-db.png' },
        { name: 'MongoDB', image: '/images/skills/mongodb.svg' },
        { name: 'PostgreSQL', image: '/images/skills/Postgresql.png' },
        // Collaboration
        { name: 'GitHub', image: '/images/skills/git-hub-logo.jpg' },
      ]
    },
    {
      id: 'web-development',
      title: 'Web Development',
      skills: [
        // Frontend Frameworks
        { name: 'React.js', image: '/images/skills/react-js.png' },
        { name: 'Next.js', image: '/images/skills/next-js.png' },
        // Backend Frameworks
        { name: 'FastAPI', image: '/images/skills/FastAPI.png' },
        { name: 'Flask', image: '/images/skills/Flask.png' },
        // API Design
        { name: 'RESTful APIs', image: '/images/skills/restul-api.jpg' },
      ]
    }
  ];

  return (
    <div className="space-y-20">
      <h3 className="text-2xl font-semibold text-center text-accent mb-8">
        Detailed Skill Breakdown
      </h3>
      {skillCategories.map((category, index) => (
        <CategorySection 
          key={category.id} 
          category={category}
          index={index}
        />
      ))}
    </div>
  );
}

interface CategorySectionProps {
  category: SkillCategory;
  index: number;
}

function CategorySection({ category, index }: CategorySectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const isEven = index % 2 === 0;
  const layoutClass = isEven ? 'md:flex-row' : 'md:flex-row-reverse';
  
  return (
    <div ref={ref} className="container mx-auto px-4 mb-8">
      <div className={`flex flex-col ${layoutClass} gap-6 items-center`}>
        <motion.div 
          className="md:w-1/3 text-center md:text-left"
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-accent">
            {category.title}
          </h3>
          <div className="h-1 w-20 bg-accent mx-auto md:mx-0 mb-4"></div>
          <p className="text-text-dim text-lg">
            {getDescriptionForCategory(category.id)}
          </p>
        </motion.div>
        
        <motion.div 
          className="md:w-2/3"
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SkillsGrid skills={category.skills} isVisible={inView} categoryId={category.id} />
        </motion.div>
      </div>
    </div>
  );
}

interface SkillsGridProps {
  skills: Skill[];
  isVisible: boolean;
  categoryId: string;
}

function SkillsGrid({ skills, isVisible, categoryId }: SkillsGridProps) {
  const [selected, setSelected] = useState<Skill | null>(null);
  const [lastSelected, setLastSelected] = useState<Skill | null>(null);

  const handleClick = (skill: Skill) => {
    setLastSelected(selected);
    setSelected(skill);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-1 relative">
      {skills.map((skill, i) => (
        <div key={i} className="min-h-[120px]">
          <motion.div
            onClick={() => handleClick(skill)}
            layoutId={`skill-${categoryId}-${skill.name}`}
            className={cn(
              "relative overflow-hidden",
              selected?.name === skill.name
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.name === skill.name
                ? "z-40 bg-background/30 rounded-xl h-full w-full"
                : "bg-background/30 rounded-xl h-full w-full"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            {selected?.name === skill.name && (
              <SelectedSkill skill={skill} />
            )}
            <SkillImage skill={skill} categoryId={categoryId} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.name ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.name ? 0.3 : 0 }}
      />
    </div>
  );
}

const SkillImage = ({ skill, categoryId }: { skill: Skill, categoryId: string }) => {
  return (
    <motion.div
      layoutId={`image-${categoryId}-${skill.name}`}
      className="relative h-full w-full flex flex-col items-center justify-center p-2"
    >
      <div className="relative h-16 w-20 mb-1">
        <Image
          src={skill.image}
          alt={skill.name}
          fill
          className="object-contain"
        />
      </div>
      <p className="text-xs text-white text-center font-medium">{skill.name}</p>
    </motion.div>
  );
};

const SelectedSkill = ({ skill }: { skill: Skill }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70] text-center"
      >
        <p className="font-bold text-2xl text-white mb-2">
          {skill.name}
        </p>
        <p className="text-sm text-neutral-200">
          {getSkillDescription(skill.name)}
        </p>
      </motion.div>
    </div>
  );
};

// Helper function to get descriptions for each category
function getDescriptionForCategory(categoryId: string): string {
  switch (categoryId) {
    case 'data-engineering':
      return 'Building scalable data pipelines and infrastructure to transform, process, and store large volumes of data.';
    case 'ai-ml':
      return 'Developing intelligent systems using machine learning, natural language processing, and deep learning techniques.';
    case 'cloud-devops':
      return 'Designing and implementing cloud infrastructure with deployment automation and containerization.';
    case 'web-development':
      return 'Creating modern web applications with responsive interfaces and efficient backend services.';
    default:
      return '';
  }
}

// Helper function for individual skill descriptions
function getSkillDescription(skillName: string): string {
  const descriptions: Record<string, string> = {
    'Databricks': 'Unified analytics platform for big data processing and machine learning.',
    'Apache Spark': 'Fast engine for large-scale data processing and analytics.',
    'Snowflake': 'Cloud data platform for storage, processing, and analytics workloads.',
    'AWS Glue': 'Serverless data integration service for ETL workflows.',
    'DBT': 'Data transformation tool for analytics engineering workflows.',
    'Apache Kafka': 'Distributed event streaming platform for high-throughput data pipelines.',
    'Airflow': 'Platform to programmatically author, schedule, and monitor workflows.',
    'Delta Lake': 'Open-source storage layer that brings reliability to data lakes.',
    'Apache Iceberg': 'Open table format for huge analytic datasets.',
    'DLT': 'Data transformation tool for analytics engineering workflows.',
    'PostgreSQL': 'Open-source relational database management system.',
    'PySpark': 'Python API for Apache Spark.',
    'Flink': 'Distributed stream data flow engine for big data processing.',
    'Python': 'Programming language for data science, ML, and application development.',
    'Large Language Models': 'AI models that understand and generate human language.',
    'LangChain': 'Framework for developing applications powered by language models.',
    'Pandas': 'Data analysis and manipulation library for Python.',
    'PowerBI': 'Business analytics service for interactive visualizations.',
    'RAG': 'Retrieval-Augmented Generation combining search with generative AI.',
    'Neo4j': 'Graph database for storing and querying data.',
    'Docker': 'Platform for developing, shipping, and running applications in containers.',
    'AWS Lambda': 'Serverless compute service for running code without provisioning servers.',
    'DynamoDB': 'Fast and flexible NoSQL database service for any scale.',
    'MongoDB': 'Document database for modern application development.',
    'AWS': 'Comprehensive cloud computing platform and services.',
    'Azure': "Microsoft's cloud computing service for building, testing, deploying, and managing applications.",
    'Kubernetes': 'Open-source platform for managing containerized workloads and services.',
    'React.js': 'JavaScript library for building user interfaces.',
    'Next.js': 'React framework for production-ready applications.',
    'FastAPI': 'Modern, fast web framework for building APIs with Python.',
    'Flask': 'Lightweight WSGI web application framework in Python.',
    'RESTful APIs': 'Architectural style for designing networked applications.',
    'Clustering': 'Technique used to group similar data points together.',
    'Regression ML': 'Type of machine learning used for predicting continuous outcomes.',
    'Transformers': 'AI models used for natural language processing and generation.',
    'GitHub': 'Platform for version control and collaboration.',
  };
  
  return descriptions[skillName] || 'Advanced technology skill for modern software development.';
} 