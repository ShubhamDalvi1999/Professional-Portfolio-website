'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md py-4`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-section flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/" className="text-xl sm:text-2xl font-mono text-accent">
            data<span className="text-white">_engineer</span>
          </Link>
        </motion.div>

        <nav>
          <ul className="flex items-center">
            {['Skills', 'Projects', 'Experience'].map((item, index) => (
              <motion.li 
                key={item}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * (index + 1) }}
                className="hidden sm:block mx-1 md:mx-4"
              >
                <Link 
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-300 hover:text-accent transition-colors text-sm md:text-base uppercase tracking-wide font-medium"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="ml-2 sm:ml-4"
            >
              <Link 
                href="#contact" 
                className="py-1 px-3 sm:py-2 sm:px-6 rounded-full border border-white/70 bg-transparent text-white text-sm md:text-base uppercase tracking-wide hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                Contact Me
              </Link>
            </motion.li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
} 