import { useState } from 'react';
import Section from './Section';
import { journey, repos } from '../data/projects';
import { links } from '../data/skills';
import { FaGithub } from 'react-icons/fa';

const TYPES = ['All', 'Manual', 'Automation', 'API'];

export default function Experience() {
  const [type, setType] = useState('All');
  const shown = type === 'All' ? repos : repos.filter((r) => r.type === type);
  return (
    <Section id="journey" title="QA Journey">
      <ol className="timeline">{journey.map((j) => <li key={j}>{j}</li>)}</ol>
      <h3 className="gap">QA Automation on GitHub</h3>
      <div className="row" role="group" aria-label="Filter projects">{TYPES.map((t) => <button key={t} className={`btn sm ${type === t ? 'primary' : ''}`} aria-pressed={type === t} onClick={() => setType(t)}>{t}</button>)}</div>
      <div className="grid">
        {shown.map((r) => (
          <article className="card" key={r.name}>
            <h3>{r.name}</h3><p className="muted">{r.desc}</p><p className="tag">{r.tech}</p>
            <a className="btn sm" href={r.url} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
          </article>
        ))}
      </div>
      <p className="muted small gap">Replace placeholder URLs in <code>src/data/projects.js</code> and <code>src/data/skills.js</code> ({links.github}).</p>
    </Section>
  );
}
