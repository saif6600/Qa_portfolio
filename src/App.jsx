import { lazy, Suspense, useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ManualTesting from './components/ManualTesting';
import Automation from './components/Automation';
import TestCaseExplorer from './components/TestCaseExplorer';
import BugReports from './components/BugReports';
import TestingProcess from './components/TestingProcess';
import Resume from './components/Resume';
const Dashboard = lazy(() => import('./components/Dashboard'));
const ApiTesting = lazy(() => import('./components/ApiTesting'));
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch { /* ignore */ }
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Navbar theme={theme} toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero /><About /><Skills /><TestingProcess /><ManualTesting /><Automation />
        <Suspense fallback={<p className="container muted">Loading…</p>}><ApiTesting /></Suspense>
        <TestCaseExplorer /><BugReports />
        <Suspense fallback={<p className="container muted">Loading…</p>}><Dashboard /></Suspense>
        <Experience /><Resume /><Contact />
      </main>
      <Footer />
      {showTop && <button className="icon-btn top" aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><FaArrowUp /></button>}
    </>
  );
}
