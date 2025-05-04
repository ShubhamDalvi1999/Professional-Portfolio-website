'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Project, projects, getAllCategories, getAllTechnologies } from '@/lib/data/projects';

interface ProjectsContextType {
  allProjects: Project[];
  filteredProjects: Project[];
  categories: string[];
  technologies: string[];
  selectedCategories: string[];
  selectedTechnologies: string[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  toggleCategoryFilter: (category: string) => void;
  toggleTechnologyFilter: (technology: string) => void;
  clearFilters: () => void;
}

// Create context with default values to avoid undefined errors
const defaultContextValue: ProjectsContextType = {
  allProjects: [],
  filteredProjects: [],
  categories: [],
  technologies: [],
  selectedCategories: [],
  selectedTechnologies: [],
  searchQuery: '',
  setSearchQuery: () => {},
  toggleCategoryFilter: () => {},
  toggleTechnologyFilter: () => {},
  clearFilters: () => {},
};

const ProjectsContext = createContext<ProjectsContextType>(defaultContextValue);

export function useProjects() {
  const context = useContext(ProjectsContext);
  return context;
}

interface ProjectsProviderProps {
  children: ReactNode;
}

export function ProjectsProvider({ children }: ProjectsProviderProps) {
  const [allProjects, setAllProjects] = useState<Project[]>(projects);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [categories, setCategories] = useState<string[]>([]);
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Initialize categories and technologies
  useEffect(() => {
    setCategories(getAllCategories());
    setTechnologies(getAllTechnologies());
  }, []);

  // Filter projects based on selected filters and search query
  useEffect(() => {
    let filtered = [...allProjects];

    // Apply category filters (OR logic within categories)
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(project => 
        selectedCategories.includes(project.category)
      );
    }

    // Apply technology filters (AND logic across technologies)
    if (selectedTechnologies.length > 0) {
      filtered = filtered.filter(project => 
        selectedTechnologies.every(tech => project.technologies.includes(tech))
      );
    }

    // Apply search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        project => 
          project.title.toLowerCase().includes(query) || 
          project.description.toLowerCase().includes(query) ||
          (project.shortDescription && project.shortDescription.toLowerCase().includes(query))
      );
    }

    setFilteredProjects(filtered);
  }, [allProjects, selectedCategories, selectedTechnologies, searchQuery]);

  const toggleCategoryFilter = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const toggleTechnologyFilter = (technology: string) => {
    setSelectedTechnologies(prev => 
      prev.includes(technology) 
        ? prev.filter(t => t !== technology) 
        : [...prev, technology]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedTechnologies([]);
    setSearchQuery('');
  };

  const value = {
    allProjects,
    filteredProjects,
    categories,
    technologies,
    selectedCategories,
    selectedTechnologies,
    searchQuery,
    setSearchQuery,
    toggleCategoryFilter,
    toggleTechnologyFilter,
    clearFilters,
  };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
} 