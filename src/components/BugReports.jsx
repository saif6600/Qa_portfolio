import { useState } from 'react';
import Section from './Section';
import { bugs } from '../data/bugs';
import { StatusBadge } from './ManualTesting';

const STATUSES = ['All', 'Open', 'In Progress', 'Fixed'];

export default function BugReports() {
  const [filter, setFilter] = useState('All');
  const list = filter === 'All' ? bugs : bugs.filter((b) => b.status === filter);
  return (
    <Section id="bugs" title="Bug Report Examples" subtitle="Sample reports written for portfolio purposes.">
      <div className="row" role="group" aria-label="Filter bugs by status">
        {STATUSES.map((s) => <button key={s} className={`btn sm ${filter === s ? 'primary' : ''}`} aria-pressed={filter === s} onClick={() => setFilter(s)}>{s}</button>)}
      </div>
      <div className="grid gap">
        {list.map((b) => (
          <article className="card" key={b.id}>
            <div className="row between"><b>{b.id}</b><StatusBadge value={b.status} /></div>
            <h3>{b.title}</h3>
            <p className="small"><span className="tag">Severity: {b.severity}</span> <span className="tag">Priority: {b.priority}</span></p>
            <p className="muted small">Environment: {b.env}</p>
            <ol className="small">{b.steps.map((s) => <li key={s}>{s}</li>)}</ol>
            <p><b>Expected:</b> {b.expected}</p>
            <p><b>Actual:</b> {b.actual}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
