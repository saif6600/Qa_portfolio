import { FaCheckCircle } from 'react-icons/fa';
import { metrics } from '../data/skills';

const badges = ['Manual Testing', 'JavaScript', 'Playwright', 'API Testing', 'SQL', 'Git & GitHub'];

export default function Hero() {
  return (
    <section id="home" className="container hero">
      <div>
        <h1>QA Engineer <span className="grad">| Manual Testing | Automation Testing</span></h1>
        <p className="muted lead">I design, execute, and automate reliable software tests to improve product quality, detect defects early, and deliver better user experiences.</p>
        <ul className="badges">{badges.map((b) => <li key={b}><FaCheckCircle aria-hidden /> {b}</li>)}</ul>
        <div className="row">
          <a className="btn primary" href="#manual">View QA Projects</a>
          <a className="btn" href="#contact">Get in Touch</a>
        </div>
      </div>
      <aside className="card glass" aria-label="Portfolio demo metrics">
        <span className="tag">Portfolio Demo Metrics</span>
        <div className="mini-grid">
          <div><h3>Test Execution</h3><p className="ok">Passed: 92</p><p className="bad">Failed: 5</p><p className="warn">Blocked: 3</p></div>
          <div><h3>Automation</h3><p><b>245</b> Tests</p><p className="ok">94% Pass Rate</p></div>
          <div><h3>Defects</h3><p><b>18</b> Found</p><p className="ok">15 Fixed</p></div>
        </div>
        <p className="muted small">Sample data for illustration only (full set: {metrics.total} cases).</p>
      </aside>
    </section>
  );
}
