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
  bullets,
  githubLinks 
}: { 
  position: string; 
  techStack?: string;
  company: string; 
  period: string; 
  bullets: string[];
  githubLinks?: { label: string; url: string; }[];
}) => (
  <div className="mb-8 cosmic-glow">
    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
      <h4 className="text-white text-lg md:text-xl font-semibold">{position}</h4>
      <span className="text-accent text-sm md:text-base">{period}</span>
    </div>
    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
      <h5 className="text-text-dim text-base md:text-lg">{company}</h5>
      {techStack && (
        <span className="text-text-dim text-sm md:text-base">{techStack}</span>
      )}
    </div>
    <div className="space-y-2">
      {bullets.map((bullet, index) => (
        <BulletPoint key={index}>{bullet}</BulletPoint>
      ))}
    </div>
    {githubLinks && githubLinks.length > 0 && (
      <div className="mt-4 flex flex-wrap gap-2">
        {githubLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-white transition-colors duration-300 group"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="group-hover:scale-110 transition-transform duration-300"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            {link.label}
          </a>
        ))}
      </div>
    )}
  </div>
);

export default function Experience() {
  const timelineData = [
    {
      title: "Founding Data & AI Engineer",
      content: (
        <ExperienceBlock
          position="Founding Data & AI Engineer"
          company="SkillSwap (StartUp) - Ireland"
          period="Aug 2024 — Present"
          techStack="Snowflake, Python, AI"
          bullets={[
            "Led the team responsible for the data warehousing platform using Snowflake, dbt, analyzing customer usage trends, and revenue KPI reporting. Collaborated with the client to define key business requirements and applied data analysis techniques to improve customer experience and reduce churn.",
            "Designed and launched a token-based rewards and wallet system for SkillSwap, driving gamification and personalized incentives that increased user engagement by 40% and created a scalable foundation for monetization.",
            "Developing a scalable recommendation system to enable a personalized learning experience powered by content-based and collaborative filtering, using statistical processing techniques to evaluate similarity measures.",
            "Implemented AI-driven assignment evaluations using RAG, OpenAI, which evaluated documents in 20 seconds.",
            "Implemented and hardened a production-grade authentication system with Python, PostgreSQL, React and TypeScript. Integrated OAuth 2.0, JWT with rotating refresh tokens, and RBAC rules, ensuring secure authorization, compliance, and a seamless user experience.",
            "Designed authorization with RBAC and scope-based policies to ensure that only the courses a user is enrolled in are correctly rendered and accessible, enabling seamless and secure user experiences"
          ]}
        />
      )
    },
    {
      title: "Data Engineer",
      content: (
        <ExperienceBlock
          position="Data Engineer"
          company="Accenture"
          period="Aug 2022 — Aug 2024"
          techStack="Databricks, PySpark, Azure"
          bullets={[
            "Led teams on Azure data warehouse builds using medallion architecture, ADF and optimized PySpark transformations on Databricks, resulting in a 50% reduction in ticket resolution time for a Gen AI companion project.",
            "Engineered high-performance pipelines leveraging medallion architecture principles and addressed critical bottlenecks like hot-partitions, indexing, and query optimizations identified during initial assessments.",
            "Developed and implemented comprehensive System testing procedures for 5+ ETL pipelines.",
            "Integrated Unity Catalog (metadata management) for access control and data governance across data layers.",
            "Set up CI/CD with Azure DevOps to deploy production-grade Databricks workflows and alerts to monitor jobs.",
            "Processed 10+ years of structured/unstructured data to power GenAI chat companion with Reinforcement Learning.",
            "Delivered a QA analytics solution using Apache NiFi to ingest test results and defect logs into AWS and built an AWS QuickSight dashboard (pass/fail trends, defect leakage, cycle time) with row-level security, improving real-time visibility and reducing test triage time by 35%."
          ]}
        />
      )
    },
    {
      title: "Data Engineer Associate",
      content: (
        <ExperienceBlock
          position="Data Engineer Associate"
          company="Accenture"
          period="Jun 2021 — Aug 2022"
          techStack="Oracle, Python, API"
          bullets={[
            "Migrated large volumes of legacy data to Azure SQL Server using Informatica, performing efficient data extraction and leveraging SQL for data transformation, ensuring accuracy and consistency.",
            "Monitored and scheduled Airflow pipelines, generating key reporting data and ensuring robust data management for email alerts on pipeline failures and successes, leading to a 30% reduction in manual intervention.",
            "Designed and delivered RESTful APIs using Flask, upgraded endpoints per API contracts, integrated third-party services and reduced production errors by 25% through Postman testing, and ensured code quality.",
            "Drove delivery in a 3-person squad across 10+ agile projects, led API design reviews with the React/TypeScript team, executed zero-downtime DB migrations with Alembic, and coordinated staged rollouts to 600 stores, contributing to 242% growth post-pilot."
          ]}
        />
      )
    }
  ];

  return (
    <section id="experience" className="relative min-h-screen flex items-center justify-center py-20">
      <Particles />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience
          </h2>
          <p className="text-text-dim text-lg md:text-xl max-w-3xl mx-auto">
            My professional journey in data engineering, software development, and analytics
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
} 