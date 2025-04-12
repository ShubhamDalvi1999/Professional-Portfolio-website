'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Particles from './Particles';

export default function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const [placeholder, setPlaceholder] = useState('Ask anything about my portfolio...');
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
        const text = 'Ask anything about my portfolio...';
        
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
    <section className="relative py-12 md:py-16 bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Particles count={30} />
      </div>
      
      <div className="container mx-auto relative z-10 max-w-6xl px-4">
        <motion.div
          ref={ref}
          className="text-center w-full mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="relative w-full max-w-sm sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            onClick={handleSearchClick}
          >
            <div className="relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={placeholder}
                className="w-full bg-black/80 backdrop-blur-md text-white text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wide border border-black/50 rounded-full py-3 sm:py-4 md:py-5 lg:py-6 px-4 sm:px-6 md:px-8 pr-10 sm:pr-12 md:pr-14 focus:outline-none focus:border-accent/30 focus:ring-1 focus:ring-accent/30 transition-all duration-300"
              />
              <motion.div 
                className="absolute right-3 sm:right-4 md:right-6 p-1 sm:p-2"
                whileHover={{ scale: 1.1 }}
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" stroke="rgba(245, 158, 11, 0.5)" strokeWidth="1.5"/>
                  <path d="M10 16L14 12L10 8" stroke="rgba(245, 158, 11, 0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 