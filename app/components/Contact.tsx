'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
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
            Have a project idea or just want to connect? Drop me a message.
          </motion.p>
        </motion.div>
        
        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <motion.div 
              className="bg-secondary/50 border border-accent/20 rounded-lg p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-accent text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-2">Thank you for reaching out!</h3>
              <p className="text-text-dim">Your message has been sent successfully. I'll get back to you soon.</p>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div>
                <label htmlFor="name" className="block text-text mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-text mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-text mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-secondary border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                />
              </div>
              
              <motion.button
                type="submit"
                className="btn-primary w-full py-3"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : "Send Message"}
              </motion.button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
} 