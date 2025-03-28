'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Particles from './Particles';
import { Logos3 } from './ui/logos3';
import { 
  dataEngineeringDemo, 
  aiMlDemo, 
  cloudDevOpsDemo, 
  webDevDemo 
} from './blocks/logos3-demo';

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <div className="overflow-hidden" id="skills">
      <div className="bg-gradient-to-b from-black/90 to-primary/90 py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-center tracking-tighter mb-10 text-white">
              Technical Skills
            </h2>
            <div className="w-full flex flex-col space-y-12">
              <Logos3 {...dataEngineeringDemo} />
              <Logos3 {...aiMlDemo} />
              <Logos3 {...cloudDevOpsDemo} />
              <Logos3 {...webDevDemo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 