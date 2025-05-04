'use client';

import React, { useState, useEffect } from 'react';
import { ProjectsProvider } from '@/app/context/ProjectsContext';
import ProjectsGrid from '@/app/components/ProjectsGrid';
import ProjectsSearch from '@/app/components/ProjectsSearch';

export default function ClientProjectsWrapper() {
  // Use a state to ensure client-side rendering is complete
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render on client-side
  if (!isMounted) {
    return null;
  }

  return (
    <ProjectsProvider>
      <div className="md:grid md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <ProjectsSearch />
        </div>
        <div className="md:col-span-3">
          <ProjectsGrid />
        </div>
      </div>
    </ProjectsProvider>
  );
} 