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
      title: "Data Engineer",
      content: (
        <ExperienceBlock
          position="Data Engineer"
          company="TechCorp Solutions"
          period="2023 - Present"
          techStack="Python, Apache Spark, Airflow, AWS, Snowflake, DBT"
          bullets={[
            "Built end-to-end data pipelines reducing processing time by 60%",
            "Implemented real-time streaming solutions using Apache Kafka",
            "Designed and optimized data warehouse architecture",
            "Automated data quality checks and monitoring systems"
          ]}
          githubLinks={[
            { label: "Real-time Azure Pipeline", url: "https://github.com/ShubhamDalvi1999/Realitime-Streaming-Data-Processing-Azure-EventHubs" },
            { label: "Snowflake DBT Pipeline", url: "https://github.com/ShubhamDalvi1999/Snowflake-DBT-Airflow-Data-Pipeline" },
            { label: "AWS Snowflake ETL", url: "https://github.com/ShubhamDalvi1999/AWS-Snowflake-Power-BI-ETL-Data-Engineering-Project" }
          ]}
        />
      )
    },
    {
      title: "Software Engineer",
      content: (
        <ExperienceBlock
          position="Software Engineer"
          company="InnovateTech"
          period="2022 - 2023"
          techStack="FastAPI, React, PostgreSQL, Docker, Kubernetes"
          bullets={[
            "Developed microservices architecture for scalable applications",
            "Built RESTful APIs with FastAPI and PostgreSQL",
            "Implemented authentication and authorization systems",
            "Deployed applications using Docker and Kubernetes"
          ]}
          githubLinks={[
            { label: "Social Network API", url: "https://github.com/ShubhamDalvi1999/Fast-API-Social-Media-Prototype" },
            { label: "Authentication App", url: "https://github.com/ShubhamDalvi1999/Fast-API-Authentication-app" },
            { label: "Pokemon API", url: "https://github.com/ShubhamDalvi1999/Pokemon-API" }
          ]}
        />
      )
    },
    {
      title: "Data Analyst",
      content: (
        <ExperienceBlock
          position="Data Analyst"
          company="DataInsights Inc"
          period="2021 - 2022"
          techStack="Python, Pandas, Power BI, SQL, Machine Learning"
          bullets={[
            "Created interactive dashboards and reports using Power BI",
            "Performed data analysis and statistical modeling",
            "Developed predictive models for business insights",
            "Automated reporting processes using Python scripts"
          ]}
          githubLinks={[
            { label: "Stock Portfolio Analysis", url: "https://github.com/ShubhamDalvi1999/Stock_Portfolio_Analysis_POWER_BI" },
            { label: "Digital Wellbeing Dashboard", url: "https://github.com/ShubhamDalvi1999/Digital_Wellbeing_Power_BI" },
            { label: "Customer Demographics Analysis", url: "https://github.com/ShubhamDalvi1999/Customer-Persona-and-Demographics-Analysis" }
          ]}
        />
      )
    },
    {
      title: "Junior Developer",
      content: (
        <ExperienceBlock
          position="Junior Developer"
          company="StartUp Ventures"
          period="2020 - 2021"
          techStack="Flutter, Dart, Firebase, Python, Django"
          bullets={[
            "Developed cross-platform mobile applications using Flutter",
            "Built web applications with Django and Python",
            "Integrated third-party APIs and services",
            "Collaborated with design and product teams"
          ]}
          githubLinks={[
            { label: "House Rental App", url: "https://github.com/ShubhamDalvi1999/House_Rental_App_in_Flutter" },
            { label: "Flutter Login Page", url: "https://github.com/ShubhamDalvi1999/FlutterLoginPage" },
            { label: "Django HTML Rendering", url: "https://github.com/ShubhamDalvi1999/HtmlRenderingDjango" }
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

        <div className="max-w-4xl mx-auto">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
} 