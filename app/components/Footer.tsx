'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: "Blog", href: "#blog" },
    { name: "Resume", href: "#resume" },
    { name: "Github", href: "https://github.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-black py-12 relative">
      <div className="container-section">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <Link href="/" className="text-xl font-mono text-accent">
              data<span className="text-white">_engineer</span>
            </Link>
            <p className="text-text-dim mt-2 text-sm">
              Building innovative data & AI solutions
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul className="flex flex-wrap justify-center gap-8">
              {footerLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    className="text-text-dim hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-amber-900/20 mt-8 pt-8 text-center text-text-dim text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>© {currentYear} Data Engineer Portfolio. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
} 