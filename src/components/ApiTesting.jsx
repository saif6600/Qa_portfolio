import { useState } from 'react';
import Section from './Section';

const methods = {
  GET: { path: '/users', expect: '200 OK', note: 'Fetch a list of users.' },
  POST: { path: '/users', expect: '201 Created', note: 'Create a user with a valid body.' },
  PUT: { path: '/users/1', expect: '200 OK', note: 'Replace the full user record.' },
  PATCH: { path: '/users/1', expect: '200 OK', note: 'Update selected fields only.' },
  DELETE: { path: '/users/1', expect: '204 No Content', note: 'Remove the user.' },
};
const validate = ['Status Code', 'Response Time', 'Headers', 'Response Body', 'Required Fields'];
const cards = ['API Functional Testing', 'Negative Testing', 'Schema Validation', 'Authentication', 'Response Validation'];

export default function ApiTesting() {
  const [m, setM] = useState('GET');
  const sel = methods[m];
  return (
    <Section id="api" title="REST API Testing" subtitle="Illustrative examples of how I design API checks.">
      <div className="row" role="tablist" aria-label="HTTP methods">
        {Object.keys(methods).map((k) => <button key={k} role="tab" aria-selected={m === k} className={`btn sm ${m === k ? 'primary' : ''}`} onClick={() => setM(k)}>{k}</button>)}
      </div>
      <div className="card gap">
        <p><code>{m} {sel.path}</code> — {sel.note}</p>
        <p>Expected: <b className="ok">{sel.expect}</b></p>
        <ul className="chips alt">{validate.map((v) => <li key={v}>✓ {v}</li>)}</ul>
      </div>
      <div className="grid">{cards.map((c) => <div className="card" key={c}><h3>{c}</h3></div>)}</div>
    </Section>
  );
}
