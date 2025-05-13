import { Logos3 } from "../../components/ui/logos3"

// Data Engineering logos
const dataEngineeringLogos = [
  {
    id: "databricks-1",
    description: "Databricks",
    image: "/images/skills/databrick.jpg",
    className: "w-full h-full object-contain",
  },
  {
    id: "spark-1",
    description: "Apache Spark",
    image: "/images/skills/spark.png",
    className: "w-full h-full object-contain",
  },
  {
    id: "glue-1",
    description: "AWS Glue",
    image: "/images/skills/glue.png",
    className: "w-full h-full object-contain",
  },
  {
    id: "snowflake-1",
    description: "Snowflake",
    image: "/images/skills/snowflake.png",
    className: "w-full h-full object-contain",
  },
  {
    id: "redshift-1",
    description: "AWS Redshift",
    image: "/images/skills/redshift.png",
    className: "w-full h-full object-contain",
  },
  {
    id: "dbt-1",
    description: "dbt",
    image: "/images/skills/dbt.png",
    className: "w-full h-full object-contain",
  },
  {
    id: "delta-lake",
    description: "Delta Lake",
    image: "/images/skills/delta-lake.png",
    className: "w-full h-full object-contain",
  },
  {
    id: "kafka-1",
    description: "Apache Kafka",
    image: "/images/skills/kafka.png",
    className: "w-full h-full object-contain",
  }
];

// AI & ML logos
const aiMlLogos = [
  {
    id: "python-1",
    description: "Python",
    image: "/images/skills/python.png",
    className: "w-full h-full object-contain",
  },
  {
    id: "pandas-1",
    description: "Pandas",
    image: "/images/skills/pandas.png",
    className: "w-full h-full object-contain",
  },
  {
    id: "powerbi-1",
    description: "Power BI",
    image: "/images/skills/power bi.png",
    className: "w-full h-full object-contain",
  },
  {
    id: "llm-1",
    description: "Large Language Models",
    image: "/images/skills/llm.png",
    className: "w-full h-full object-contain",
  },
  {
    id: "langchain-1",
    description: "LangChain",
    image: "/images/skills/langchain.jpg",
    className: "w-full h-full object-contain",
  },
  {
    id: "rag-1",
    description: "Retrieval Augmented Generation",
    image: "/images/skills/rag.png",
    className: "w-full h-full object-contain",
  }
];

// Cloud & DevOps logos
const cloudDevOpsLogos = [
  {
    id: "aws-1",
    description: "Amazon Web Services",
    image: "/images/skills/AWS.png",
    className: "w-full h-full object-contain",
  },
  {
    id: "azure-1",
    description: "Microsoft Azure",
    image: "/images/skills/azure.png",
    className: "w-full h-full object-contain",
  },
  {
    id: "docker-1",
    description: "Docker",
    image: "/images/skills/docker.png",
    className: "w-full h-full object-contain",
  },
  {
    id: "lambda-1",
    description: "AWS Lambda",
    image: "/images/skills/lambda.jpg",
    className: "w-full h-full object-contain",
  },
  {
    id: "dynamodb-1",
    description: "AWS DynamoDB",
    image: "/images/skills/dynamo-db.png",
    className: "w-full h-full object-contain",
  },
  {
    id: "mongodb-1",
    description: "MongoDB",
    image: "/images/skills/mongodb.svg",
    className: "w-full h-full object-contain",
  }
];

// Web Development logos
const webDevLogos = [
  {
    id: "react-1",
    description: "React.js",
    image: "/images/skills/react-js.png",
    className: "w-full h-full object-contain",
  },
  {
    id: "nextjs-1",
    description: "Next.js",
    image: "/images/skills/next-js.svg",
    className: "w-full h-full object-contain",
  },
  {
    id: "fastapi-1",
    description: "FastAPI",
    image: "/images/skills/FastAPI.png",
    className: "w-full h-full object-contain",
  },
  {
    id: "flask-1",
    description: "Flask",
    image: "/images/skills/Flask.png",
    className: "w-full h-full object-contain",
  },
  {
    id: "restful-1",
    description: "RESTful APIs",
    image: "/images/skills/restful-api.png",
    className: "w-full h-full object-contain",
  }
];

// Demo data for each category
export const dataEngineeringDemo = {
  heading: "Data Engineering",
  logos: dataEngineeringLogos,
};

export const aiMlDemo = {
  heading: "AI & Machine Learning",
  logos: aiMlLogos,
};

export const cloudDevOpsDemo = {
  heading: "Cloud & DevOps",
  logos: cloudDevOpsLogos,
};

export const webDevDemo = {
  heading: "Web Development",
  logos: webDevLogos,
};

function Logos3Demo() {
  return <Logos3 {...dataEngineeringDemo} />;
}

export { Logos3Demo }; 