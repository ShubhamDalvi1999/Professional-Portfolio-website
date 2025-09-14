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

export const projects = [
  // Featured Projects (keeping current ones but with real links)
  {
    id: "comprehensive-data-platform",
    title: "Comprehensive Data Platform",
    shortDescription: "End-to-end data engineering solution with modern architecture",
    description: "A comprehensive data platform that demonstrates modern data engineering practices including data ingestion, processing, storage, and analytics. This project showcases the complete data lifecycle from raw data to actionable insights.",
    category: "Data Engineering",
    technologies: ["Python", "Apache Spark", "Kafka", "PostgreSQL", "Docker", "Kubernetes"],
    featured: true,
    links: {
      github: "https://github.com/ShubhamDalvi1999/Data-Transformation-using-DBT"
    }
  },
  {
    id: "airflow-dbt-pipeline",
    title: "Airflow DBT Data Pipeline",
    shortDescription: "Automated data transformation pipeline with Airflow and DBT",
    description: "Built a robust data transformation pipeline using Apache Airflow for orchestration and DBT for data modeling. This solution automates the entire data transformation process from raw data to analytics-ready datasets.",
    category: "Data Engineering",
    technologies: ["Apache Airflow", "DBT", "PostgreSQL", "Python", "Docker"],
    featured: true,
    links: {
      github: "https://github.com/ShubhamDalvi1999/Snowflake-DBT-Airflow-Data-Pipeline"
    }
  },
  {
    id: "gen-ai-assignment-evaluator",
    title: "Gen AI Assignment Evaluator",
    shortDescription: "AI-powered assignment evaluation system using LLMs",
    description: "Developed an intelligent assignment evaluation system leveraging Large Language Models (LLMs) to automatically assess and provide feedback on student submissions. The system uses advanced NLP techniques for comprehensive evaluation.",
    category: "AI/ML",
    technologies: ["Python", "LangChain", "OpenAI API", "FastAPI", "React", "PostgreSQL"],
    featured: true,
    links: {
      github: "https://github.com/ShubhamDalvi1999/Local-Gen-AI-recommendation-System"
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
      github: "https://github.com/ShubhamDalvi1999/AWS-Snowflake-Power-BI-ETL-Data-Engineering-Project"
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
      github: "https://github.com/ShubhamDalvi1999/Fast-API-Social-Media-Prototype"
    }
  },
  {
    id: "real-time-azure-streaming-pipeline",
    title: "Real-Time Streaming Data Pipeline with Azure",
    shortDescription: "End-to-end real-time data streaming pipeline using Azure Event Hubs, Databricks, and Delta Lake.",
    description: "This project demonstrates an end-to-end real-time data streaming pipeline on Azure. It simulates weather data, ingests it via Event Hubs, processes it in Databricks using the medallion architecture, and stores results in Delta Lake for analytics and Power BI visualization.",
    category: "Data Engineering",
    technologies: ["Azure", "Event Hubs", "Databricks", "Delta Lake", "Python", "PySpark", "Power BI"],
    featured: true,
    links: {
      github: "https://github.com/ShubhamDalvi1999/Realitime-Streaming-Data-Processing-Azure-EventHubs"
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
      github: "https://github.com/ShubhamDalvi1999/Stock_Market_Analysis"
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
      github: "https://github.com/ShubhamDalvi1999/daft-ie-data-analysis"
    }
  },
  {
    id: "mlops-sentiment-analysis",
    title: "MLOps Sentiment Analysis Platform",
    shortDescription: "A comprehensive, production-ready MLOps platform for YouTube comment sentiment analysis",
    description: "A comprehensive, production-ready MLOps platform for YouTube comment sentiment analysis, featuring automated model training, A/B testing, monitoring, and deployment capabilities. This project demonstrates MLOps maturity level 2-3 with complete data versioning, experiment tracking, model lifecycle management, and real-time monitoring. Built with Docker-based microservices architecture, it includes automated training pipelines, quality gates, rollback capabilities, and comprehensive health monitoring.",
    category: "MLOps",
    technologies: ["Python", "MLflow", "DVC", "Docker", "Flask", "LightGBM", "A/B Testing", "Monitoring"],
    featured: true,
    links: {
      github: "https://github.com/ShubhamDalvi1999/MLOps-Sentiment-Analysis"
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
      github: "https://github.com/ShubhamDalvi1999/Databricks-Data-Pipeline"
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
      github: "https://github.com/ShubhamDalvi1999/Text_File_To_CSV_Pyspark_ETL"
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
      github: "https://github.com/ShubhamDalvi1999/Confluent_Apache_Kafka_Project"
    }
  },

  // Additional Projects (for /projects endpoint)
  {
    id: "cloud-infrastructure-automation",
    title: "Cloud Infrastructure Automation Framework",
    shortDescription: "IaC solution with Terraform, Ansible, and GitOps workflow",
    description: "Created a comprehensive cloud infrastructure automation framework using Infrastructure as Code (IaC) principles. The solution leverages Terraform for provisioning, Ansible for configuration management, and implements GitOps workflows with CI/CD pipelines. The framework supports multi-environment deployments (dev, staging, production) with consistent infrastructure patterns and security best practices.",
    category: "DevOps",
    technologies: ["Terraform", "Ansible", "GitHub Actions", "AWS", "Docker", "Kubernetes", "Prometheus", "Grafana", "Vault"],
    featured: false,
    links: {
      github: "https://github.com/ShubhamDalvi1999/SpringBoot-BoardGame-AWS-DevOps-Pipeline"
    }
  },
  {
    id: "playwright-browser-automation",
    title: "Playwright Browser Automation Tool",
    shortDescription: "Python-based browser automation framework for web testing",
    description: "Developed a comprehensive browser automation framework using Playwright and Python. This tool enables automated testing, web scraping, and UI verification across different browsers.",
    category: "DevOps",
    technologies: ["Python", "Playwright", "Browser Automation", "Testing"],
    featured: false,
    links: {
      github: "https://github.com/ShubhamDalvi1999/Playwrite-Browser-automation-MCP"
    }
  },
  {
    id: "azure-medallion-architecture",
    title: "Azure Data Pipeline with Medallion Architecture",
    shortDescription: "Formula 1 data processing using Bronze, Silver, and Gold layers",
    description: "Implementation of an end-to-end data processing pipeline for Formula 1 data using Azure Databricks and other Azure services. By following the modern data lakehouse architecture with Bronze, Silver, and Gold layers, the solution handles raw data ingestion, cleansing, transformation, and analytics-ready dataset creation for insights. The architecture integrates Azure Data Lake Storage Gen2, Azure Key Vault, and Azure SQL Database, alongside Delta Lake for scalable, secure, and reliable data processing.",
    category: "Data Engineering",
    technologies: ["Azure Databricks", "Delta Lake", "Azure Data Lake", "Azure Key Vault", "Azure SQL Database"],
    featured: false,
    links: {
      github: "https://github.com/ShubhamDalvi1999/Real_Time_Game_Data_Analysis"
    }
  },
  {
    id: "fastapi-authentication-app",
    title: "FastAPI Authentication Application",
    shortDescription: "Secure authentication system with JWT tokens and user management",
    description: "A comprehensive authentication system built with FastAPI featuring JWT token-based authentication, user registration, login/logout functionality, and secure password handling. Includes role-based access control and session management.",
    category: "Software Engineering",
    technologies: ["FastAPI", "Python", "JWT", "SQLAlchemy", "PostgreSQL", "Pydantic"],
    featured: false,
    links: {
      github: "https://github.com/ShubhamDalvi1999/Fast-API-Authentication-app"
    }
  },
  {
    id: "openai-api-comparison",
    title: "OpenAI API Comparison Tool",
    shortDescription: "Interactive comparison tool for different OpenAI API models",
    description: "A web application that allows users to compare responses from different OpenAI API models side-by-side. Features real-time model switching, response comparison, and performance metrics.",
    category: "AI/ML",
    technologies: ["TypeScript", "React", "Next.js", "OpenAI API", "Tailwind CSS"],
    featured: false,
    links: {
      github: "https://github.com/ShubhamDalvi1999/OpenAI-API-Comparison"
    }
  },
  {
    id: "pokemon-api",
    title: "Pokemon API Service",
    shortDescription: "RESTful API for Pokemon data with caching and rate limiting",
    description: "A comprehensive RESTful API service for Pokemon data featuring caching mechanisms, rate limiting, and comprehensive documentation. Built with FastAPI and includes data validation and error handling.",
    category: "Software Engineering",
    technologies: ["FastAPI", "Python", "Redis", "PostgreSQL", "Docker"],
    featured: false,
    links: {
      github: "https://github.com/ShubhamDalvi1999/Pokemon-API"
    }
  },
  {
    id: "stock-portfolio-analysis",
    title: "Stock Portfolio Analysis Dashboard",
    shortDescription: "Power BI dashboard for comprehensive stock portfolio analysis",
    description: "A comprehensive Power BI dashboard for stock portfolio analysis featuring real-time data visualization, performance metrics, risk analysis, and portfolio optimization recommendations.",
    category: "Data Visualization",
    technologies: ["Power BI", "DAX", "SQL", "Python", "Data Analysis"],
    featured: false,
    links: {
      github: "https://github.com/ShubhamDalvi1999/Stock_Portfolio_Analysis_POWER_BI"
    }
  },
  {
    id: "digital-wellbeing-dashboard",
    title: "Digital Wellbeing Analytics Dashboard",
    shortDescription: "Power BI dashboard for digital wellbeing metrics and insights",
    description: "A Power BI dashboard focused on digital wellbeing analytics, providing insights into screen time, app usage patterns, and recommendations for better digital habits.",
    category: "Data Visualization",
    technologies: ["Power BI", "DAX", "Data Analysis", "Visualization"],
    featured: false,
    links: {
      github: "https://github.com/ShubhamDalvi1999/Digital_Wellbeing_Power_BI"
    }
  },
  {
    id: "traffic-analysis-match-days",
    title: "Traffic Analysis on Match Days",
    shortDescription: "Data analysis project for traffic patterns during sports events",
    description: "Comprehensive analysis of traffic patterns during major sports events using data science techniques. Includes predictive modeling and visualization of traffic flow patterns.",
    category: "Data Science",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    featured: false,
    links: {
      github: "https://github.com/ShubhamDalvi1999/Traffic_Analysis_On_Match_Days"
    }
  },
  {
    id: "async-sync-fastapi-experiment",
    title: "Async and Sync FastAPI Experiment",
    shortDescription: "Performance comparison between async and sync operations in FastAPI",
    description: "An experimental project comparing the performance characteristics of asynchronous and synchronous operations in FastAPI applications. Includes benchmarking and optimization strategies.",
    category: "Software Engineering",
    technologies: ["FastAPI", "Python", "AsyncIO", "Performance Testing", "JavaScript"],
    featured: false,
    links: {
      github: "https://github.com/ShubhamDalvi1999/Async-and-Sync-FastAPI-Experiment"
    }
  },
  {
    id: "summarizer-langchain",
    title: "Text Summarizer with LangChain",
    shortDescription: "AI-powered text summarization using LangChain framework",
    description: "A text summarization application built with LangChain framework, featuring multiple summarization strategies and customizable output formats.",
    category: "AI/ML",
    technologies: ["Python", "LangChain", "OpenAI API", "NLP", "Text Processing"],
    featured: false,
    links: {
      github: "https://github.com/ShubhamDalvi1999/Summarizer-Langchain"
    }
  },
  {
    id: "google-adk-productivity-agent",
    title: "Google ADK Productivity Agent",
    shortDescription: "AI-powered productivity agent using Google ADK",
    description: "An intelligent productivity agent built using Google ADK (Android Development Kit) for task automation and productivity enhancement.",
    category: "AI/ML",
    technologies: ["Python", "Google ADK", "Android", "Automation", "Productivity"],
    featured: false,
    links: {
      github: "https://github.com/ShubhamDalvi1999/Google-ADK-Productivity-Agent"
    }
  },
  {
    id: "flutter-house-rental-app",
    title: "House Rental App in Flutter",
    shortDescription: "Cross-platform mobile application for house rentals",
    description: "A comprehensive Flutter application for house rentals featuring user authentication, property listings, search functionality, and booking management.",
    category: "Mobile Development",
    technologies: ["Flutter", "Dart", "Firebase", "Mobile Development"],
    featured: false,
    links: {
      github: "https://github.com/ShubhamDalvi1999/House_Rental_App_in_Flutter"
    }
  },
  {
    id: "flutter-login-page",
    title: "Flutter Login Page",
    shortDescription: "Modern login interface built with Flutter",
    description: "A modern and responsive login page built with Flutter, featuring clean UI design and smooth animations.",
    category: "Mobile Development",
    technologies: ["Flutter", "Dart", "UI/UX", "Mobile Development"],
    featured: false,
    links: {
      github: "https://github.com/ShubhamDalvi1999/FlutterLoginPage"
    }
  },
  {
    id: "django-html-rendering",
    title: "Django HTML Rendering",
    shortDescription: "Django application demonstrating HTML rendering techniques",
    description: "A Django application showcasing various HTML rendering techniques and template management strategies.",
    category: "Web Development",
    technologies: ["Django", "Python", "HTML", "CSS", "Web Development"],
    featured: false,
    links: {
      github: "https://github.com/ShubhamDalvi1999/HtmlRenderingDjango"
    }
  },
  {
    id: "low-level-design",
    title: "Low Level Design Practice",
    shortDescription: "Practice and evolution of software design patterns",
    description: "A collection of low-level design implementations and practice problems focusing on software design patterns and object-oriented programming principles.",
    category: "Software Engineering",
    technologies: ["Python", "Design Patterns", "OOP", "Software Architecture"],
    featured: false,
    links: {
      github: "https://github.com/ShubhamDalvi1999/LLD"
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