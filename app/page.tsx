import NavBar from './components/NavBar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <NavBar />
      <Hero />
      <SearchBar />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
} 