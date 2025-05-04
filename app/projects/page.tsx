import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Metadata } from 'next';
import './projects.css';
import dynamic from 'next/dynamic';

// Import client component with no SSR to ensure proper client-side rendering
const ClientProjectsWrapper = dynamic(
  () => import('../components/ClientProjectsWrapper'),
  { ssr: false }
);

// Create a combined component for both search bar and projects grid
const ProjectsContent = dynamic(
  () => import('@/app/components/ProjectsContent'),
  { ssr: false }
);

export const metadata: Metadata = {
  title: 'Projects | Portfolio',
  description: 'Browse all my projects with search and filter functionality',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen projects-page">
      <NavBar />
      <div className="container-section py-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-accent-1">Projects</span></h1>
          <p className="text-text-secondary max-w-2xl mx-auto mb-8">
            Browse my portfolio of data engineering, AI, and machine learning projects
          </p>
        </div>
        <ProjectsContent />
      </div>
      <Footer />
    </main>
  );
} 