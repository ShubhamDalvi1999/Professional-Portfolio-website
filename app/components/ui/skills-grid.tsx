"use client";
import React from "react";
import { LayoutGrid } from "./layout-grid";

// Define skill category content components
const DataEngineeringContent = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Data Engineering
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Building scalable data pipelines and infrastructure to transform, process, and store large volumes of data.
        Skills include Databricks, Spark, Snowflake, and AWS Glue.
      </p>
    </div>
  );
};

const AiMlContent = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        AI & Machine Learning
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Developing intelligent systems using machine learning, natural language processing, and deep learning techniques.
        Experience with LLMs, LangChain, Python, and RAG systems.
      </p>
    </div>
  );
};

const CloudDevOpsContent = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Cloud & DevOps
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Designing and implementing cloud infrastructure with AWS and Azure. Expertise in Docker, Lambda, and DynamoDB.
        Creating serverless architectures and CI/CD pipelines.
      </p>
    </div>
  );
};

const WebDevContent = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Web Development
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Building modern web applications using React.js, Next.js, and RESTful APIs.
        Creating responsive, interactive interfaces with strong focus on performance.
      </p>
    </div>
  );
};

// Using SVG images where available
const skillCards = [
  {
    id: 1,
    content: <DataEngineeringContent />,
    className: "md:col-span-2 min-h-[250px]",
    thumbnail: "/images/skills/databrick.jpg",
  },
  {
    id: 2,
    content: <AiMlContent />,
    className: "col-span-1 min-h-[250px]",
    thumbnail: "/images/skills/llm.png",
  },
  {
    id: 3,
    content: <CloudDevOpsContent />,
    className: "col-span-1 min-h-[250px]",
    thumbnail: "/images/skills/docker.png",
  },
  {
    id: 4,
    content: <WebDevContent />,
    className: "md:col-span-2 min-h-[250px]",
    thumbnail: "/images/skills/next-js.png",
  },
];

export function SkillsGrid() {
  return (
    <div className="h-full min-h-[800px] w-full py-6">
      <LayoutGrid cards={skillCards} />
    </div>
  );
} 