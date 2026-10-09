import { useState } from 'react';
import { FaCopy, FaGithub } from 'react-icons/fa';
import Section from './Section';
import { codeSample, frameworkTree, frameworkFeatures, repoUrl } from '../data/skills';

export default function Automation() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(codeSample); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch { setCopied(false); }
  };
  return (
    <Section id="automation" title="Web Application Automation Framework" subtitle="JavaScript • Playwright • Node.js">
      <div className="two">
        <div>
          <ul className="chips">{frameworkFeatures.map((f) => <li key={f}>{f}</li>)}</ul>
          <pre className="code" aria-label="Project structure"><code>{frameworkTree}</code></pre>
          <a className="btn" href={repoUrl} target="_blank" rel="noreferrer"><FaGithub /> View GitHub Repository</a>
        </div>
        <div>
          <div className="code-head"><span>login.spec.js</span><button className="btn sm" onClick={copy}><FaCopy /> {copied ? 'Copied!' : 'Copy Code'}</button></div>
          <pre className="code"><code>{codeSample}</code></pre>
          <ul className="chips alt">{['Browser Automation', 'Locator Strategy', 'Assertions', 'URL Validation', 'Reusable Tests'].map((f) => <li key={f}>✓ {f}</li>)}</ul>
        </div>
      </div>
    </Section>
  );
}
