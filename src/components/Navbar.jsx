import { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { links } from '../data/skills';

const items = ['home', 'about', 'skills', 'manual', 'automation', 'explorer', 'bugs', 'journey', 'contact'];
const labels = { home: 'Home', about: 'About', skills: 'Skills', manual: 'Testing', automation: 'Automation', explorer: 'Test Cases', bugs: 'Bugs', journey: 'Experience', contact: 'Contact' };

export async function openResume(setNote) {
  try {
    const res = await fetch(links.resume, { method: 'HEAD' });
    if (res.ok && (res.headers.get('content-type') || '').includes('pdf')) return window.open(links.resume, '_blank');
  } catch { /* fall through */ }
  setNote('Resume is not uploaded yet. Add resume.pdf to the /public folder.');
}

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [note, setNote] = useState('');

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' });
    items.forEach((id) => document.getElementById(id) && obs.observe(document.getElementById(id)));
    return () => obs.disconnect();
  }, []);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="logo">Saif<span>Ali</span></a>
        <nav aria-label="Primary" className={open ? 'menu open' : 'menu'}>
          {items.map((id) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>{labels[id]}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle dark/light mode">{theme === 'dark' ? <FaSun /> : <FaMoon />}</button>
          <button className="btn primary sm" onClick={() => openResume(setNote)}>Download Resume</button>
          <button className="icon-btn burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <FaTimes /> : <FaBars />}</button>
        </div>
      </div>
      {note && <p className="note" role="status" onClick={() => setNote('')}>{note}</p>}
    </header>
  );
}
