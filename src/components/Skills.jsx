import Section from './Section';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <Section id="skills" title="QA Skills">
      <div className="grid">
        {Object.entries(skills).map(([cat, list]) => (
          <article className="card" key={cat}>
            <h3>{cat}</h3>
            <ul className="chips">{list.map((s) => <li key={s}>{s}</li>)}</ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
