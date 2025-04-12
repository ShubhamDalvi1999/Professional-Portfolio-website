"use client";
import React from "react";
import { LayoutGrid } from "./layout-grid";
import Image from "next/image";

// Create skill description components for each category
const DataEngineeringSkills = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Data Engineering
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Building scalable data pipelines and infrastructure to transform, process, and store large volumes of data. Skills include Databricks, Spark, Snowflake, and AWS Glue.
      </p>
    </div>
  );
};

const AIMLSkills = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        AI & Machine Learning
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Developing intelligent systems using machine learning, natural language processing, and deep learning techniques. Experience with Python, LLMs, LangChain, and RAG systems.
      </p>
    </div>
  );
};

const CloudDevOpsSkills = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Cloud & DevOps
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Designing and implementing cloud infrastructure with deployment automation and containerization. Proficient with AWS, Azure, Docker, and serverless architectures.
      </p>
    </div>
  );
};

const WebDevSkills = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Web Development
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Creating modern web applications with responsive interfaces and efficient backend services. Experience with React, Next.js, FastAPI, and Flask.
      </p>
    </div>
  );
};

// Skills data for the grid
export const skillCards = [
  {
    id: 1,
    content: <DataEngineeringSkills />,
    className: "md:col-span-2 min-h-[300px]",
    thumbnail: "/images/skills/databricks.svg",
  },
  {
    id: 2,
    content: <AIMLSkills />,
    className: "col-span-1 min-h-[300px]",
    thumbnail: "/images/skills/llm.svg",
  },
  {
    id: 3,
    content: <CloudDevOpsSkills />,
    className: "col-span-1 min-h-[300px]",
    thumbnail: "/images/skills/AWS.svg",
  },
  {
    id: 4,
    content: <WebDevSkills />,
    className: "md:col-span-2 min-h-[300px]",
    thumbnail: "/images/skills/next-js.svg",
  },
];

export function SkillsGridDemo() {
  return (
    <div className="w-full">
      <LayoutGrid cards={skillCards} />
    </div>
  );
} 