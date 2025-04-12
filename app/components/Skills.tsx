'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillsCategories from './SkillsCategories';

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section className="overflow-hidden" id="skills">
      <div className="bg-gradient-to-b from-black/90 to-primary/90 py-12">
        <div className="container mx-auto px-4">
          <div ref={ref} className="flex flex-col items-center">
            <SkillsCategories />
          </div>
        </div>
      </div>
    </section>
  );
} 