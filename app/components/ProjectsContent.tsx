'use client';

import React, { useState, useEffect } from 'react';
import { ProjectsProvider } from '@/app/context/ProjectsContext';
import ProjectsGrid from '@/app/components/ProjectsGrid';
import ProjectsSearch from '@/app/components/ProjectsSearch';
import SimpleSearchBarProject from '@/app/components/SimpleSearchBarProject';

// Define props and state interfaces for ErrorBoundary
interface ErrorBoundaryProps {
  children: React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// Simple error boundary to catch any errors in the projects components
class CustomErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Error in ProjectsContent:", error, errorInfo);
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div className="py-16 text-center">
          <h3 className="text-xl font-bold mb-2">Unable to load projects</h3>
          <p className="mb-4">Please try refreshing the page</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-accent-1 text-white rounded-lg"
          >
            Refresh
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function ProjectsContent() {
  // Use a state to ensure client-side rendering is complete
  const [isMounted, setIsMounted] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render on client-side
  if (!isMounted) {
    return null;
  }

  const handleError = (error: Error): void => {
    console.error("Error caught in ProjectsContent:", error);
    setHasError(true);
  };

  return (
    <CustomErrorBoundary onError={(error) => handleError(error)}>
      <ProjectsProvider>
        <div className="mb-8">
          <SimpleSearchBarProject />
        </div>
        <div className="md:grid md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <ProjectsSearch />
          </div>
          <div className="md:col-span-3">
            <ProjectsGrid />
          </div>
        </div>
      </ProjectsProvider>
    </CustomErrorBoundary>
  );
} 