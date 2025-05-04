export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  category: string;
  technologies: string[];
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "comprehensive-data-platform",
    title: "Comprehensive Enterprise Data Platform",
    shortDescription: "End-to-end data platform integrating ingestion, processing, ML, and analytics",
    description: "Built a comprehensive enterprise data platform that spans the entire data lifecycle, from data ingestion and ETL to machine learning model deployment and BI reporting. This cross-functional platform combines data engineering, MLOps, and DevOps practices to provide a seamless experience for data scientists, analysts, and business stakeholders. Implemented CI/CD pipelines for data workflows and ML models, with robust monitoring and governance capabilities.",
    category: "Data Engineering",
    technologies: ["Apache Spark", "Airflow", "Kubernetes", "Python", "TensorFlow", "MLflow", "Terraform", "AWS", "Docker", "PostgreSQL", "Redis", "Grafana"],
    featured: true,
    links: {
      github: "https://github.com/username/comprehensive-data-platform"
    }
  },
  {
    id: "airflow-dbt-pipeline",
    title: "Financial Data Pipeline with Airflow & DBT",
    shortDescription: "Reduced manual analysis time by 80% for CFTC and EU price data",
    description: "Used Apache Airflow, DBT, and PostgreSQL to implement a weekly pipeline ingesting and transforming CFTC and EU price data, cutting manual analysis time by 80% improving data reliability through automated quality checks.",
    category: "Data Engineering",
    technologies: ["Apache Airflow", "DBT", "PostgreSQL", "Python"],
    featured: true,
    links: {
      github: "https://github.com/username/airflow-dbt-pipeline"
    }
  },
  {
    id: "gen-ai-assignment-evaluator",
    title: "Generative AI Assignment Evaluation System",
    shortDescription: "Reduced manual grading time by 70% with personalized feedback",
    description: "Devised a Generative AI and RAG-based assignment evaluation system that delivers personalized feedback to students, reducing manual grading time by 70%.",
    category: "AI/ML",
    technologies: ["Python", "LangChain", "RAG", "LLMs", "NLP"],
    featured: true,
    links: {
      github: "https://github.com/username/Gen_Al_Assignment_Evaluator"
    }
  },
  {
    id: "snowflake-data-warehouse",
    title: "Snowflake Real-time Data Warehouse",
    shortDescription: "Built near real-time data pipeline leveraging AWS and API data",
    description: "Created a Snowflake data warehouse using a near real-time data pipeline leveraging AWS and API data. The solution enabled faster analytics and reporting for business stakeholders.",
    category: "Data Engineering",
    technologies: ["Snowflake", "AWS", "Python", "API Integration", "ETL"],
    featured: true,
    links: {
      github: "https://github.com/username/AWS-Snowflake-Power-BI-ETL-Data-Engineering-Project"
    }
  },
  {
    id: "social-network-fastapi",
    title: "Social Network API with FastAPI",
    shortDescription: "Full-featured social media backend with authentication and interaction features",
    description: "A social network application built with FastAPI, featuring user authentication, posts, likes, retweets, and following functionality. Includes JWT token-based authentication, post management with CRUD operations, and social interactions like likes, retweets, and following other users.",
    category: "Software Engineering",
    technologies: ["FastAPI", "SQLAlchemy", "Pydantic", "SQLite", "JWT", "Uvicorn", "Python"],
    featured: true,
    links: {
      github: "https://github.com/username/social-network-fastapi"
    }
  },
  {
    id: "modern-ecommerce-platform",
    title: "Modern E-commerce Platform",
    shortDescription: "Scalable e-commerce solution with microservices architecture",
    description: "Designed and implemented a modern e-commerce platform using a microservices architecture. The platform features product management, shopping cart functionality, secure payment processing, order management, and user accounts. Built with a responsive React frontend and Node.js backend services, using MongoDB for persistence and Redis for caching.",
    category: "Software Engineering",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redis", "Docker", "Stripe API", "JWT", "REST API"],
    featured: true,
    links: {
      github: "https://github.com/username/modern-ecommerce-platform"
    }
  },
  {
    id: "stock-market-dashboard",
    title: "Stock Market Analysis Dashboard",
    shortDescription: "Real-time market trend analysis with pattern detection using Spark and Plotly",
    description: "This project implements a real-time stock market analysis dashboard using Apache Spark for data processing and Plotly Dash for interactive visualization. The system analyzes market trends, detects build-up patterns (Long/Short), and provides actionable insights through an intuitive interface with interactive price and open interest analysis.",
    category: "Data Engineering",
    technologies: ["Apache Spark", "Plotly Dash", "Python", "PySpark", "Data Visualization"],
    featured: true,
    links: {
      github: "https://github.com/username/stock-market-dashboard"
    }
  },
  {
    id: "entsoe-data-processing",
    title: "ENTSO-E XML Time Series Data Processing",
    shortDescription: "Parsed and analyzed large-scale electricity load data with Python and Pandas",
    description: "Built a robust Python pipeline to ingest, parse, clean, and explore large-scale electricity load time series data published by ENTSO-E in XML format. Leveraging the standard library's xml.etree module together with Pandas, Matplotlib, and Seaborn, this project demonstrates end-to-end handling of half-hourly load measurements over a full year—without any database dependency.",
    category: "Data Engineering",
    technologies: ["Python", "Pandas", "XML", "Matplotlib", "Seaborn"],
    featured: true,
    links: {
      github: "https://github.com/username/entsoe-data-processing"
    }
  },
  {
    id: "ecommerce-mlops-pipeline",
    title: "E-commerce Customer Satisfaction MLOps Pipeline",
    shortDescription: "End-to-end prediction pipeline with ZenML and MLflow for Brazilian E-commerce dataset",
    description: "This end-to-end MLOps pipeline predicts a customer's satisfaction score on their next order using the Brazilian E-commerce Public Dataset. Built with ZenML, it orchestrates data ingestion, cleaning, model training, evaluation, and continuous deployment—all tracked and versioned via MLflow. A Streamlit app then pulls from the live model endpoint to serve real-time predictions.",
    category: "MLOps",
    technologies: ["ZenML", "MLflow", "Python", "Streamlit", "CI/CD", "Machine Learning"],
    featured: true,
    links: {
      github: "https://github.com/username/ecommerce-mlops-pipeline"
    }
  },
  {
    id: "azure-etl-project",
    title: "Azure End-to-End ETL Solution",
    shortDescription: "Integrated real-time and batch data from 8 distinct sources",
    description: "Designed an end-to-end ETL project on Azure, integrating real-time and batch data from 8 distinct sources. This comprehensive solution processed and transformed data for analytics and reporting.",
    category: "Data Engineering",
    technologies: ["Azure", "Data Factory", "Python", "SQL", "Databricks"],
    featured: true,
    links: {
      github: "https://github.com/username/azure-etl-project"
    }
  },
  {
    id: "store-analytics-automation",
    title: "Automated Store Analytics Reports",
    shortDescription: "Streamlined data processing and email delivery with Airflow",
    description: "Scheduled and automated store analytics reports using Airflow streamlining data processing and email delivery. This solution eliminated manual report generation and ensured consistent, timely delivery to stakeholders.",
    category: "Data Engineering",
    technologies: ["Apache Airflow", "Python", "SQL", "Pandas", "Data Visualization"],
    featured: true,
    links: {
      github: "https://github.com/username/store-analytics-automation"
    }
  },
  {
    id: "kafka-fraud-detection",
    title: "Real-time Fraud Detection System",
    shortDescription: "Built with Python, Kafka, and Redis for financial transaction monitoring",
    description: "A real-time fraud detection system built with Python, Kafka, and Redis. This system processes financial transactions, detects potential fraudulent activities, and generates alerts.",
    category: "Data Engineering",
    technologies: ["Kafka", "Python", "Redis", "Machine Learning"],
    featured: true,
    links: {
      github: "https://github.com/username/Kafka_fraud_detection_python"
    }
  },
  {
    id: "cloud-infrastructure-automation",
    title: "Cloud Infrastructure Automation Framework",
    shortDescription: "IaC solution with Terraform, Ansible, and GitOps workflow",
    description: "Created a comprehensive cloud infrastructure automation framework using Infrastructure as Code (IaC) principles. The solution leverages Terraform for provisioning, Ansible for configuration management, and implements GitOps workflows with CI/CD pipelines. The framework supports multi-environment deployments (dev, staging, production) with consistent infrastructure patterns and security best practices.",
    category: "DevOps",
    technologies: ["Terraform", "Ansible", "GitHub Actions", "AWS", "Docker", "Kubernetes", "Prometheus", "Grafana", "Vault"],
    featured: true,
    links: {
      github: "https://github.com/username/cloud-infrastructure-automation"
    }
  },
  {
    id: "playwright-browser-automation",
    title: "Playwright Browser Automation Tool",
    shortDescription: "Python-based browser automation framework for web testing",
    description: "Developed a comprehensive browser automation framework using Playwright and Python. This tool enables automated testing, web scraping, and UI verification across different browsers.",
    category: "DevOps",
    technologies: ["Python", "Playwright", "Browser Automation", "Testing"],
    links: {
      github: "https://github.com/username/Playwrite-Browser-automation-MCP"
    }
  },
  {
    id: "aws-snowflake-power-bi",
    title: "AWS-Snowflake-Power BI ETL Pipeline",
    shortDescription: "End-to-end ETL solution with visualization capabilities",
    description: "Comprehensive ETL data engineering project integrating AWS services with Snowflake data warehouse and Power BI for visualization. This solution provides end-to-end data processing from ingestion to insights.",
    category: "Data Engineering",
    technologies: ["AWS", "Snowflake", "Power BI", "Python", "ETL"],
    links: {
      github: "https://github.com/username/AWS-Snowflake-Power-BI-ETL-Data-Engineering-Project"
    }
  },
  {
    id: "azure-medallion-architecture",
    title: "Azure Data Pipeline with Medallion Architecture",
    shortDescription: "Formula 1 data processing using Bronze, Silver, and Gold layers",
    description: "Implementation of an end-to-end data processing pipeline for Formula 1 data using Azure Databricks and other Azure services. By following the modern data lakehouse architecture with Bronze, Silver, and Gold layers, the solution handles raw data ingestion, cleansing, transformation, and analytics-ready dataset creation for insights. The architecture integrates Azure Data Lake Storage Gen2, Azure Key Vault, and Azure SQL Database, alongside Delta Lake for scalable, secure, and reliable data processing.",
    category: "Data Engineering",
    technologies: ["Azure Databricks", "Delta Lake", "Azure Data Lake", "Azure Key Vault", "Azure SQL Database"],
    links: {
      github: "https://github.com/username/azure-medallion-architecture"
    }
  }
];

// Helper function to get all unique categories
export function getAllCategories(): string[] {
  const categoriesSet = new Set(projects.map(project => project.category));
  return Array.from(categoriesSet);
}

// Helper function to get all unique technologies
export function getAllTechnologies(): string[] {
  const technologiesSet = new Set<string>();
  projects.forEach(project => {
    project.technologies.forEach(tech => {
      technologiesSet.add(tech);
    });
  });
  return Array.from(technologiesSet);
}

// Helper function to get featured projects
export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
} 