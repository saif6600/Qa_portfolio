import Section from './Section';
import { lifecycle } from '../data/skills';

const cards = ['Manual Testing', 'Automation Testing', 'API Testing', 'Database Testing', 'Agile / Scrum'];

export default function About() {
  return (
    <Section id="about" title="About Me">
      <p className="muted lead">I am a QA Engineer focused on Manual Testing and Test Automation. I enjoy analyzing requirements, designing comprehensive test cases, identifying defects, and building reliable automation scripts using JavaScript and Playwright.</p>
      <p className="muted lead">My testing approach combines strong manual testing fundamentals with automation to improve regression coverage, reduce repetitive testing, and increase confidence in software releases.</p>
      <div className="grid">{cards.map((c) => <div className="card" key={c}><h3>{c}</h3></div>)}</div>
      <h3 className="gap">QA Mindset</h3>
      <ol className="flow">{lifecycle.map((s) => <li key={s}>{s}</li>)}</ol>
    </Section>
  );
}
