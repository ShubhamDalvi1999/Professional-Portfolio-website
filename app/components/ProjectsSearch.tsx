'use client';

import { useState } from 'react';
import { useProjects } from '@/app/context/ProjectsContext';
import { motion } from 'framer-motion';

export default function ProjectsSearch() {
  try {
    const { 
      categories,
      technologies,
      selectedCategories,
      selectedTechnologies,
      searchQuery,
      toggleCategoryFilter,
      toggleTechnologyFilter,
      clearFilters,
    } = useProjects();

    const [showCategories, setShowCategories] = useState(true);
    const [showTechnologies, setShowTechnologies] = useState(true);

    return (
      <div className="projects-search">
        {/* Filters */}
        <div className="mb-6">
          {/* Categories collapsible section */}
          <div className="mb-4">
            <button 
              onClick={() => setShowCategories(!showCategories)}
              className="flex w-full items-center justify-between p-3 rounded-lg text-sm bg-bg-card"
            >
              <div className="flex items-center gap-2">
                <span>Categories</span>
                {selectedCategories.length > 0 && (
                  <span className="inline-flex justify-center items-center h-5 w-5 rounded-full text-xs font-semibold text-accent-2">
                    {selectedCategories.length}
                  </span>
                )}
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${showCategories ? 'rotate-180' : ''}`}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            
            {showCategories && (
              <div className="mt-2 p-3 rounded-lg bg-bg-card">
                <div className="max-h-60 overflow-y-auto">
                  {categories.map((category) => (
                    <div 
                      key={category}
                      className="flex items-center p-2 rounded cursor-pointer hover:bg-bg-card-hover"
                      onClick={() => toggleCategoryFilter(category)}
                    >
                      <div className={`flex h-5 w-5 items-center justify-center rounded border mr-2 ${selectedCategories.includes(category) ? 'bg-accent-1 border-accent-1' : 'border-gray-600'}`}>
                        {selectedCategories.includes(category) && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--bg-page)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        )}
                      </div>
                      <span className="text-sm">{category}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Technologies collapsible section */}
          <div className="mb-4">
            <button 
              onClick={() => setShowTechnologies(!showTechnologies)}
              className="flex w-full items-center justify-between p-3 rounded-lg text-sm bg-bg-card"
            >
              <div className="flex items-center gap-2">
                <span>Technologies</span>
                {selectedTechnologies.length > 0 && (
                  <span className="inline-flex justify-center items-center h-5 w-5 rounded-full text-xs font-semibold text-accent-3">
                    {selectedTechnologies.length}
                  </span>
                )}
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${showTechnologies ? 'rotate-180' : ''}`}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            
            {showTechnologies && (
              <div className="mt-2 p-3 rounded-lg bg-bg-card">
                <div className="max-h-60 overflow-y-auto">
                  {technologies.map((technology) => (
                    <div 
                      key={technology}
                      className="flex items-center p-2 rounded cursor-pointer hover:bg-bg-card-hover"
                      onClick={() => toggleTechnologyFilter(technology)}
                    >
                      <div className={`flex h-5 w-5 items-center justify-center rounded border mr-2 ${selectedTechnologies.includes(technology) ? 'bg-accent-1 border-accent-1' : 'border-gray-600'}`}>
                        {selectedTechnologies.includes(technology) && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--bg-page)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        )}
                      </div>
                      <span className="text-sm">{technology}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {(selectedCategories.length > 0 || selectedTechnologies.length > 0 || searchQuery) && (
            <button 
              onClick={clearFilters}
              className="w-full p-3 rounded-lg text-sm bg-bg-card clear-btn"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in ProjectsSearch:", error);
    return null; // Return null to prevent UI breaking if there's an error
  }
} 