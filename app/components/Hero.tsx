'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Particles from './Particles';

export default function Hero() {
  const [inputValue, setInputValue] = useState('');
  const [placeholder, setPlaceholder] = useState('Ask me about my skills...');
  const [isTyping, setIsTyping] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inView) {
      const typingAnimation = async () => {
        setIsTyping(true);
        setPlaceholder('');
        const text = 'Ask me about my skills...';
        
        for (let i = 0; i < text.length; i++) {
          setPlaceholder(prev => prev + text[i]);
          await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        setTimeout(() => {
          setIsTyping(false);
        }, 500);
      };
      
      typingAnimation();
    }
  }, [inView]);

  const handleSearchClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/homepage-background.png"
          alt="Cosmic background"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/90" />
      </div>
      
      <Particles count={30} />
      
      <div className="container-section relative z-10">
        <motion.div
          ref={ref}
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Build with <span className="text-accent">Data</span>. <br />
            Engineer with <span className="bg-gradient-to-r from-accent to-accent-alt text-transparent bg-clip-text">AI</span>.
          </motion.h1>
          
          <motion.p 
            className="text-text-dim text-xl mb-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Building the future of data-driven intelligence
          </motion.p>
          
          <motion.div 
            className="relative max-w-2xl mx-auto glow-effect"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            onClick={handleSearchClick}
          >
            <div className="relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={placeholder}
                className="w-full bg-black/50 backdrop-blur-md text-white border border-gray-700 rounded-full py-4 px-6 pr-12 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
              />
              <div className="absolute right-4 flex items-center">
                <div className={`h-3 w-3 rounded-full ${isTyping ? 'bg-accent animate-pulse' : 'bg-gray-600'}`}></div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-8 flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a href="#skills" className="btn-primary">
              Explore Skills
            </a>
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 