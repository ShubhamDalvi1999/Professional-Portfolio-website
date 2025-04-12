'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-24 relative bg-black">
      <div className="container-section">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get In <span className="text-accent">Touch</span>
          </motion.h2>
          <motion.p 
            className="text-text-dim max-w-2xl mx-auto"
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a project idea or just want to connect? Reach out directly through any of these channels.
          </motion.p>
        </motion.div>
        
        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="bg-secondary/70 border border-accent/30 rounded-lg p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Email */}
            <div className="mb-8">
              <div className="inline-block bg-accent/20 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
              <a 
                href="mailto:shubhamdworkmail@gmail.com" 
                className="text-accent hover:underline transition-all"
              >
                shubhamdworkmail@gmail.com
              </a>
            </div>

            {/* Connect Icons */}
            <div className="pt-4 border-t border-accent/10">
              <h3 className="text-xl font-bold mb-4 text-white">Connect With Me</h3>
              <div className="flex justify-center space-x-6">
                <Link 
                  href="https://github.com/ShubhamDalvi1999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary/80 group-hover:bg-accent/20 border border-accent/30 transition-colors duration-300 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </div>
                  <span className="text-text-dim group-hover:text-accent transition-colors">GitHub</span>
                </Link>
                
                <Link 
                  href="https://www.linkedin.com/in/shubham-dalvi-21603316b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary/80 group-hover:bg-accent/20 border border-accent/30 transition-colors duration-300 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <span className="text-text-dim group-hover:text-accent transition-colors">LinkedIn</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 