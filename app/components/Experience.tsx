'use client';

import type React from 'react';
import { Timeline } from './ui/timeline';
import { motion } from 'framer-motion';
import Particles from './Particles';

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-2 mb-2">
    <span className="text-amber-500 shrink-0 mt-0.5">▹</span>
    <p className="text-text-dim text-sm md:text-base">{children}</p>
  </div>
);

const ExperienceBlock = ({ 
  position, 
  techStack,
  company, 
  period, 
  bullets 
}: { 
  position: string; 
  techStack?: string;
  company: string; 
  period: string; 
  bullets: string[] 
}) => (
  <div className="mb-8 cosmic-glow">
    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
      <h4 className="text-white text-lg md:text-xl font-bold">{position}</h4>
      {techStack && (
        <span className="text-text-dim text-sm md:text-base font-medium md:text-right mt-1 md:mt-0">{techStack}</span>
      )}
    </div>
    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mb-4">
      <span className="text-amber-400 font-medium">{company}</span>
    </div>
    <div className="mt-4">
      {bullets.map((bullet) => (
        <BulletPoint key={bullet}>{bullet}</BulletPoint>
      ))}
    </div>
  </div>
);

export default function Experience() {
  const experienceData = [
    {
      title: "2024-Present",
      content: (
        <ExperienceBlock
          position="Founding Data Engineer"
          techStack="Snowflake - Python - Kafka"
          company="SkillSwap (StartUp)"
          period="Aug 2024 — Present"
          bullets={[
            "Lead design and integration of Snowflake data warehousing with DBT as transformation layer into the existing system for customer usage trend analysis and revenue reporting.",
            "Engineered and prototyped a scalable, cloud-native data pipeline to support a personalized learning experience on an ed-tech platform, utilizing Retrieval-Augmented Generation (RAG) and GenAI-based recommendation systems.",
            "Pioneered event-driven data ingestion via API Gateway, Lambda, and DynamoDB, enabling real-time personalization for 5,000+ platform users and resulting in higher course completion rates.",
            "Working on building a fraud detection system for payments on the platform using Kafka 4.0 with Kraft mode"
          ]}
        />
      ),
    },
    {
      title: "2022-2024",
      content: (
        <ExperienceBlock
          position="Data Engineer"
          techStack="Azure - PySpark - SQL"
          company="Accenture"
          period="Aug 2022 — Aug 2024"
          bullets={[
            "Led Azure data warehouse builds using medallion architecture and optimized PySpark transformations.",
            "Engineered high-performance pipelines leveraging medallion architecture principles and addressed critical bottlenecks like hot-partitions, indexing and query optimizations identified during initial assessments.",
            "Embedded data masking and Great Expectations checks in ETL pipelines to improve data quality assurance.",
            "Integrated Unity Catalog for fine-grained access control and data governance across all data layers.",
            "Set up CI/CD with Azure DevOps to deploy production-grade Databricks workflows and alerts to monitor jobs.",
            "Processed 10+ years of structured/unstructured data to power GenAI chat companion with Reinforcement Learning."
          ]}
        />
      ),
    },
    {
      title: "2021-2022",
      content: (
        <ExperienceBlock
          position="Data Engineer Associate"
          techStack="Azure - CICD - Migration"
          company="Accenture"
          period="June 2021 — Aug 2022"
          bullets={[
            "Migrated large volumes of legacy data to Azure SQL Server using Informatica, performing efficient data extraction and leveraging SQL for data transformation ensuring accuracy and consistency.",
            "Monitored and scheduled Airflow pipelines, generating key reporting data and ensuring robust data management for email alerts on pipeline failures and successes.",
            "Developed and tested Flask-based REST API endpoints, using Postman, identifying and resolving integration issues, which led to a 25% reduction in production errors. Conducted peer reviews of code written by other developers.",
            "Led a team of 2 on 10+ API development projects, driving growth of about 242% in post-pilot deployments for 600+ stores."
          ]}
        />
      ),
    },
  ];

  return (
    <section id="experience" className="relative overflow-hidden bg-gradient-to-b from-black/90 to-primary/90 py-8">
      <div className="absolute inset-0 z-0 opacity-30">
        <Particles count={15} />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <Timeline data={experienceData} />
      </motion.div>
    </section>
  );
} 