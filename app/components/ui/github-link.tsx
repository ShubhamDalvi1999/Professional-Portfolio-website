"use client";

import { motion } from "framer-motion";
import React from "react";

interface GitHubLinkProps {
  label: string;
  url: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline" | "ghost";
  className?: string;
}

export const GitHubLink = ({ 
  label, 
  url, 
  size = "md", 
  variant = "default",
  className = ""
}: GitHubLinkProps) => {
  const sizeClasses = {
    sm: "text-xs gap-1",
    md: "text-sm gap-2",
    lg: "text-base gap-2"
  };

  const variantClasses = {
    default: "text-accent hover:text-white transition-colors duration-300",
    outline: "text-accent border border-accent/30 px-3 py-1 rounded-md hover:bg-accent/10 hover:border-accent/50 transition-all duration-300",
    ghost: "text-text-dim hover:text-accent transition-colors duration-300"
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18
  };

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center ${sizeClasses[size]} ${variantClasses[variant]} group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={iconSizes[size]} 
        height={iconSizes[size]} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="group-hover:rotate-12 transition-transform duration-300"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
      {label}
    </motion.a>
  );
};
