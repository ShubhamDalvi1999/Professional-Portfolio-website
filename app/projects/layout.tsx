'use client';

import { ProjectsProvider } from '@/app/context/ProjectsContext';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProjectsProvider>
      {children}
    </ProjectsProvider>
  );
} 