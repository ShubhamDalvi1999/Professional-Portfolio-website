'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ThreeDPhotoCarousel } from './ui/3d-carousel';
import Particles from './Particles';
import { useEffect, useState } from 'react';

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // State for lazy loading carousels
  const [showDataEngineering, setShowDataEngineering] = useState(false);
  const [showAiMl, setShowAiMl] = useState(false);
  const [showCloud, setShowCloud] = useState(false);

  // Configure intersection observers for each carousel
  const { ref: dataEngineeringRef, inView: dataEngineeringInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: aiMlRef, inView: aiMlInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: cloudRef, inView: cloudInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Load carousels when they come into view
  useEffect(() => {
    if (dataEngineeringInView) {
      setTimeout(() => setShowDataEngineering(true), 100);
    }
  }, [dataEngineeringInView]);

  useEffect(() => {
    if (aiMlInView) {
      setTimeout(() => setShowAiMl(true), 100);
    }
  }, [aiMlInView]);

  useEffect(() => {
    if (cloudInView) {
      setTimeout(() => setShowCloud(true), 100);
    }
  }, [cloudInView]);
  
  // Define carousel items for each skill category with correct filenames
  const dataEngineeringSkills = [
    `/images/skills/databricks.png`,
    `/images/skills/spark.png`,
    `/images/skills/glue.png`,
    `/images/skills/snowflake.png`,
    `/images/skills/redshift.png`,
    `/images/skills/azure.jpg`,
  ];
  
  const aiMlSkills = [
    `/images/skills/python.png`, 
    `/images/skills/powerbi.jpg`,
    `/images/skills/databricks.png`,
    `/images/skills/spark.png`,
    `/images/skills/azure.jpg`,
    `/images/skills/snowflake.png`,
  ];
  
  const cloudSkills = [
    `/images/skills/azure.jpg`,
    `/images/skills/databricks.png`,
    `/images/skills/glue.png`,
    `/images/skills/python.png`,
    `/images/skills/redshift.png`,
    `/images/skills/spark.png`,
  ];
  
  return (
    <section id="skills" className="py-28 relative bg-gradient-to-b from-black/90 to-primary/90 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <Particles count={25} />
      </div>
      
      <div className="container-fluid mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Technical <span className="text-accent">Expertise</span>
          </motion.h2>
          <motion.p 
            className="text-text-dim max-w-2xl mx-auto text-lg"
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Specialized in building robust data pipelines and AI-powered solutions
          </motion.p>
        </motion.div>
        
        <div className="space-y-36">
          <motion.div
            ref={dataEngineeringRef}
            initial={{ opacity: 0, y: 30 }}
            animate={dataEngineeringInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="skill-carousel-container min-h-[400px]"
          >
            {showDataEngineering && (
              <ThreeDPhotoCarousel 
                cards={dataEngineeringSkills} 
                category="Data Engineering" 
              />
            )}
          </motion.div>
          
          <motion.div
            ref={aiMlRef}
            initial={{ opacity: 0, y: 30 }}
            animate={aiMlInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="skill-carousel-container min-h-[400px]"
          >
            {showAiMl && (
              <ThreeDPhotoCarousel 
                cards={aiMlSkills} 
                category="AI & Machine Learning" 
              />
            )}
          </motion.div>
          
          <motion.div
            ref={cloudRef}
            initial={{ opacity: 0, y: 30 }}
            animate={cloudInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="skill-carousel-container min-h-[400px]"
          >
            {showCloud && (
              <ThreeDPhotoCarousel 
                cards={cloudSkills} 
                category="Cloud & DevOps" 
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 