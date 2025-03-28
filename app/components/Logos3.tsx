"use client"

import React from "react"
import Image from "next/image"

import { CarouselAutoScroll, CarouselAutoScrollItem } from "./ui/carousel-auto-scroll"

const logos = [
  {
    src: "/images/tech/python.svg",
    alt: "Python",
    width: 80,
    height: 80,
  },
  {
    src: "/images/tech/react.svg",
    alt: "React",
    width: 80,
    height: 80,
  },
  {
    src: "/images/tech/typescript.svg",
    alt: "TypeScript",
    width: 80,
    height: 80,
  },
  {
    src: "/images/tech/docker.svg",
    alt: "Docker",
    width: 80,
    height: 80,
  },
  {
    src: "/images/tech/aws.svg",
    alt: "AWS",
    width: 80,
    height: 80,
  },
  {
    src: "/images/tech/postgresql.svg",
    alt: "PostgreSQL",
    width: 80,
    height: 80,
  },
  {
    src: "/images/tech/nodejs.svg",
    alt: "Node.js",
    width: 80,
    height: 80,
  },
  {
    src: "/images/tech/tensorflow.svg",
    alt: "TensorFlow",
    width: 80,
    height: 80,
  },
  {
    src: "/images/tech/spark.svg",
    alt: "Apache Spark",
    width: 80,
    height: 80,
  },
  {
    src: "/images/tech/kafka.svg",
    alt: "Apache Kafka",
    width: 80,
    height: 80,
  },
  {
    src: "/images/tech/airflow.svg",
    alt: "Apache Airflow",
    width: 80,
    height: 80,
  },
  {
    src: "/images/tech/kubernetes.svg",
    alt: "Kubernetes",
    width: 80,
    height: 80,
  },
]

export function Logos3() {
  return (
    <div className="py-12 space-y-8">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Technology Stack
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-gray-300">
            The tools and technologies I work with
          </p>
        </div>
        <div className="mt-8">
          <CarouselAutoScroll className="py-4">
            {logos.map((logo, index) => (
              <CarouselAutoScrollItem key={index} className="flex items-center justify-center h-24 px-6 sm:px-8">
                <div className="relative flex items-center justify-center w-20 h-20 bg-background/10 rounded-lg backdrop-blur p-2 shadow-cosmic-glow hover:shadow-cosmic-glow-hover transition-all duration-300 border border-primary/20">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain w-16 h-16 dark:invert-0 filter transition-all duration-300 hover:scale-110"
                  />
                </div>
              </CarouselAutoScrollItem>
            ))}
          </CarouselAutoScroll>
        </div>
      </div>
    </div>
  )
} 