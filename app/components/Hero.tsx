'use client';

import Image from 'next/image';
import Particles from './Particles';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-end overflow-hidden pt-12">
      {/* Background image */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black mt-[80px]">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/images/homepage-background.png"
              alt="Cosmic background"
              fill
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              className="object-cover"
              style={{
                objectPosition: "28% center"
              }}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
      </div>
      
      <Particles count={40} />
      
      {/* Social media links */}
      <motion.div 
        className="absolute top-8 right-8 z-20 flex space-x-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Link 
          href="https://github.com/ShubhamDalvi1999"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/40 backdrop-blur-sm hover:bg-accent/20 border border-accent/30 transition-all duration-300 hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </Link>
        <Link 
          href="https://www.linkedin.com/in/shubham-dalvi-21603316b/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/40 backdrop-blur-sm hover:bg-accent/20 border border-accent/30 transition-all duration-300 hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </Link>
      </motion.div>
    </section>
  );
} 