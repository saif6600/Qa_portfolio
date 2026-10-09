import { useState } from 'react';
import Section from './Section';
import { openResume } from './Navbar';
import { links } from '../data/skills';

export default function Resume() {
  const [note, setNote] = useState('');
  return (
    <Section id="resume" title="Resume" subtitle="Download my QA Engineer resume to explore my testing skills, projects, tools, and technical experience.">
      <div className="row">
        <a className="btn primary" href={links.resume} download onClick={async (e) => { e.preventDefault(); setNote(''); const r = await fetch(links.resume, { method: 'HEAD' }).catch(() => null); if (r && r.ok && (r.headers.get('content-type') || '').includes('pdf')) { const a = document.createElement('a'); a.href = links.resume; a.download = 'Saif-Ali-Resume.pdf'; a.click(); } else setNote('Resume is not uploaded yet. Add resume.pdf to the /public folder.'); }}>Download Resume</a>
        <button className="btn" onClick={() => openResume(setNote)}>View Resume</button>
      </div>
      {note && <p className="warn" role="status">{note}</p>}
    </Section>
  );
}
