'use client';

import { useProjects, ProjectsProvider } from '@/app/context/ProjectsContext';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function SearchBarContent() {
  try {
    const { searchQuery, setSearchQuery, filteredProjects } = useProjects();
    const [isFocused, setIsFocused] = useState(false);
    const [hasTyped, setHasTyped] = useState(false);

    useEffect(() => {
      setHasTyped(searchQuery.length > 0);
    }, [searchQuery]);

    const handleClear = () => {
      setSearchQuery('');
    };

    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-2xl mx-auto"
      >
        <div className={`relative transition-all duration-300 ${isFocused ? 'scale-105' : ''}`}>
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full p-4 rounded-lg text-sm focus:outline-none bg-[#121620] border border-[#2E3440] hover:border-accent-1 focus:border-accent-1 transition-all duration-300 text-white placeholder-[#8490A2] shadow-sm"
            style={{
              boxShadow: isFocused ? '0 0 0 2px rgba(124, 93, 250, 0.1)' : 'none'
            }}
            aria-label="Search projects"
          />
          
          {hasTyped ? (
            <button 
              onClick={handleClear}
              className="absolute right-12 top-1/2 transform -translate-y-1/2 text-[#8490A2] hover:text-accent-1 p-1"
              aria-label="Clear search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </button>
          ) : null}
          
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#8490A2]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
        
        {hasTyped && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-2 text-sm text-[#A0A8B3]"
          >
            Found {filteredProjects.length} result{filteredProjects.length !== 1 ? 's' : ''} for "{searchQuery}"
          </motion.div>
        )}
      </motion.div>
    );
  } catch (error) {
    console.error("Error in SearchBarContent:", error);
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-full p-4 rounded-lg text-sm bg-[#121620] border border-[#2E3440]">
          <span className="text-white">Search functionality unavailable</span>
        </div>
      </div>
    );
  }
}

// Since we're already inside a ProjectsProvider from ClientProjectsWrapper, 
// we don't need to wrap this component with its own provider
export default function SimpleSearchBarProject() {
  // Use state to ensure client-side rendering
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null;
  }
  
  return <SearchBarContent />;
} 