import { useMemo, useState } from 'react';
import Section from './Section';
import { testCases, modules } from '../data/testCases';

export default function TestCaseExplorer() {
  const [mod, setMod] = useState('Login');
  const [q, setQ] = useState('');
  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    return testCases.filter((t) => (term ? [t.id, t.scenario, t.steps, t.type].some((v) => v.toLowerCase().includes(term)) : t.module === mod));
  }, [mod, q]);
  return (
    <Section id="explorer" title="Test Case Library" subtitle="Pick a module, or search across all modules.">
      <div className="row" role="tablist" aria-label="Modules">
        {modules.map((m) => <button key={m} role="tab" aria-selected={!q && mod === m} className={`btn sm ${!q && mod === m ? 'primary' : ''}`} onClick={() => { setMod(m); setQ(''); }}>{m}</button>)}
      </div>
      <input className="input gap" type="search" placeholder="Search test cases…" aria-label="Search test cases" value={q} onChange={(e) => setQ(e.target.value)} />
      <div className="grid">
        {list.map((t) => (
          <article className="card" key={t.id}>
            <span className="tag">{t.type}</span>
            <h3>{t.scenario}</h3>
            <p className="muted small">{t.id} · {t.module}</p>
            <p><b>Steps:</b> {t.steps}</p>
            <p><b>Expected:</b> {t.expected}</p>
          </article>
        ))}
        {!list.length && <p className="muted">No test cases match your search.</p>}
      </div>
    </Section>
  );
}
