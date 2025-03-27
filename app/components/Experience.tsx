'use client';

import React from 'react';
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
  company, 
  period, 
  bullets 
}: { 
  position: string; 
  company: string; 
  period: string; 
  bullets: string[] 
}) => (
  <div className="mb-8 cosmic-glow">
    <h4 className="text-white text-lg md:text-xl font-bold mb-1">{position}</h4>
    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mb-4">
      <span className="text-amber-400 font-medium">{company}</span>
      <span className="hidden md:block text-text-dim opacity-60">•</span>
      <span className="text-text-dim text-sm md:text-base italic">{period}</span>
    </div>
    <div className="mt-4">
      {bullets.map((bullet, index) => (
        <BulletPoint key={index}>{bullet}</BulletPoint>
      ))}
    </div>
  </div>
);

export default function Experience() {
  const experienceData = [
    {
      title: "2024",
      content: (
        <ExperienceBlock
          position="Data Engineer Python - Pipeline Design – Snowflake"
          company="SkillSwap (StartUp)"
          period="Aug 2024 — Present"
          bullets={[
            "Engineered a scalable, cloud-based data pipeline to power a personalized course recommendation system for an ed-tech platform, leveraging microservices and Kubernetes for scaling services.",
            "Contributed to schema design decisions and data modeling for the platform, considering future scale and reliability.",
            "Pioneered event-driven data ingestion via API Gateway, Lambda, and DynamoDB, enabling real-time personalization for 5,000+ platform users and resulting in higher course completion rates.",
            "Designed and integrated Snowflake into the existing system for customer usage trend analysis, retention checks, and revenue reporting."
          ]}
        />
      ),
    },
    {
      title: "2022-2024",
      content: (
        <ExperienceBlock
          position="Data Engineer Azure - Pyspark – SQL"
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
          position="Data Engineer Associate Azure - CICD - Migration"
          company="Accenture"
          period="June 2021 — Aug 2022"
          bullets={[
            "Migrated large volumes of legacy data to Azure SQL Server using Informatica, performing efficient data extraction and leveraging SQL for data transformation ensuring accuracy and consistency.",
            "Monitored and scheduled Airflow pipelines, generating key reporting data and ensuring robust data management for email alerts on pipeline failures and successes.",
            "Developed and tested Flask-based REST API endpoints, using Postman, identifying and resolving integration issues, which led to a 25% reduction in production errors. Conducted peer reviews of code written by other developers.",
            "Led a team of 2 on 10+ agile projects, driving growth of about 242% in post-pilot deployments for 600 stores."
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