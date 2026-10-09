import { useState } from 'react';
import Section from './Section';
import { testCases, coverage } from '../data/testCases';

const FILTERS = ['All', 'PASS', 'FAIL', 'BLOCKED'];
const types = ['Functional', 'Regression', 'Smoke', 'Sanity', 'UI', 'Negative Testing', 'Cross-browser'];

export const StatusBadge = ({ value }) => <span className={`status s-${value.toLowerCase().replace(' ', '')}`}>{value}</span>;

export default function ManualTesting() {
  const [filter, setFilter] = useState('All');
  const rows = filter === 'All' ? testCases : testCases.filter((t) => t.status === filter);
  return (
    <Section id="manual" title="E-Commerce Web Application — Manual Testing" subtitle="Performed end-to-end manual testing of an e-commerce application covering functional, UI, usability, validation, negative and regression scenarios.">
      <ul className="chips">{types.map((t) => <li key={t}>{t}</li>)}</ul>
      <h3 className="gap">Test Coverage</h3>
      <ul className="chips alt">{coverage.map((t) => <li key={t}>{t}</li>)}</ul>
      <div className="row gap" role="group" aria-label="Filter test cases by status">
        {FILTERS.map((f) => <button key={f} className={`btn sm ${filter === f ? 'primary' : ''}`} aria-pressed={filter === f} onClick={() => setFilter(f)}>{f === 'All' ? f : f[0] + f.slice(1).toLowerCase()}</button>)}
      </div>
      <div className="table-wrap">
        <table>
          <thead><tr>{['Test Case ID', 'Module', 'Test Scenario', 'Test Steps', 'Expected Result', 'Actual Result', 'Status', 'Priority'].map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
          <tbody>{rows.map((t) => (
            <tr key={t.id}><td>{t.id}</td><td>{t.module}</td><td>{t.scenario}</td><td>{t.steps}</td><td>{t.expected}</td><td>{t.actual}</td><td><StatusBadge value={t.status} /></td><td>{t.priority}</td></tr>
          ))}</tbody>
        </table>
      </div>
    </Section>
  );
}
