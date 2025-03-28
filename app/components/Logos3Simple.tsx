"use client"

import React from "react"
import Image from "next/image"

// Data Engineering logos
const dataEngineeringLogos = [
  {
    src: "/images/skills/databricks.png",
    alt: "Databricks",
    width: 80,
    height: 80,
    category: "Data Engineering"
  },
  {
    src: "/images/skills/spark.png",
    alt: "Apache Spark",
    width: 80,
    height: 80,
    category: "Data Engineering"
  },
  {
    src: "/images/skills/glue.png",
    alt: "AWS Glue",
    width: 80,
    height: 80,
    category: "Data Engineering"
  },
  {
    src: "/images/skills/snowflake.png",
    alt: "Snowflake",
    width: 80,
    height: 80,
    category: "Data Engineering"
  },
  {
    src: "/images/skills/redshift.png",
    alt: "AWS Redshift",
    width: 80,
    height: 80,
    category: "Data Engineering"
  },
  {
    src: "/images/skills/azure.jpg",
    alt: "Microsoft Azure",
    width: 80,
    height: 80,
    category: "Data Engineering"
  },
]

// AI & ML logos
const aiMlLogos = [
  {
    src: "/images/skills/python.png",
    alt: "Python",
    width: 80,
    height: 80,
    category: "AI & Machine Learning"
  },
  {
    src: "/images/skills/powerbi.jpg",
    alt: "Power BI",
    width: 80,
    height: 80,
    category: "AI & Machine Learning"
  },
  {
    src: "/images/skills/databricks.png",
    alt: "Databricks",
    width: 80,
    height: 80,
    category: "AI & Machine Learning"
  },
  {
    src: "/images/skills/spark.png",
    alt: "Apache Spark",
    width: 80,
    height: 80,
    category: "AI & Machine Learning"
  },
  {
    src: "/images/skills/azure.jpg",
    alt: "Microsoft Azure",
    width: 80,
    height: 80,
    category: "AI & Machine Learning"
  },
  {
    src: "/images/skills/snowflake.png",
    alt: "Snowflake",
    width: 80,
    height: 80,
    category: "AI & Machine Learning"
  },
]

// Cloud & DevOps logos
const cloudDevOpsLogos = [
  {
    src: "/images/skills/azure.jpg",
    alt: "Microsoft Azure",
    width: 80,
    height: 80,
    category: "Cloud & DevOps"
  },
  {
    src: "/images/skills/databricks.png",
    alt: "Databricks",
    width: 80,
    height: 80,
    category: "Cloud & DevOps"
  },
  {
    src: "/images/skills/glue.png",
    alt: "AWS Glue",
    width: 80,
    height: 80,
    category: "Cloud & DevOps"
  },
  {
    src: "/images/skills/python.png",
    alt: "Python",
    width: 80,
    height: 80,
    category: "Cloud & DevOps"
  },
  {
    src: "/images/skills/redshift.png",
    alt: "AWS Redshift",
    width: 80,
    height: 80,
    category: "Cloud & DevOps"
  },
  {
    src: "/images/skills/spark.png",
    alt: "Apache Spark",
    width: 80,
    height: 80,
    category: "Cloud & DevOps"
  },
]

// Combine all logos
const allLogos = [...dataEngineeringLogos, ...aiMlLogos, ...cloudDevOpsLogos];

export function Logos3Simple() {
  return (
    <div className="py-12 space-y-16">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Technology Stack
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-gray-300">
            The tools and technologies I work with
          </p>
        </div>

        {/* Data Engineering Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-6 text-accent">Data Engineering</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {dataEngineeringLogos.map((logo, index) => (
              <div 
                key={`data-${index}`} 
                className="relative flex items-center justify-center w-24 h-24 bg-background/10 rounded-lg backdrop-blur p-3 shadow-cosmic-glow hover:shadow-cosmic-glow-hover transition-all duration-300 border border-primary/20"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain w-16 h-16 filter transition-all duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* AI & ML Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-6 text-accent">AI & Machine Learning</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {aiMlLogos.map((logo, index) => (
              <div 
                key={`ai-${index}`} 
                className="relative flex items-center justify-center w-24 h-24 bg-background/10 rounded-lg backdrop-blur p-3 shadow-cosmic-glow hover:shadow-cosmic-glow-hover transition-all duration-300 border border-primary/20"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain w-16 h-16 filter transition-all duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Cloud & DevOps Section */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-6 text-accent">Cloud & DevOps</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {cloudDevOpsLogos.map((logo, index) => (
              <div 
                key={`cloud-${index}`} 
                className="relative flex items-center justify-center w-24 h-24 bg-background/10 rounded-lg backdrop-blur p-3 shadow-cosmic-glow hover:shadow-cosmic-glow-hover transition-all duration-300 border border-primary/20"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain w-16 h-16 filter transition-all duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 