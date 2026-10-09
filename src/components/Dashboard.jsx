import Section from './Section';
import { metrics } from '../data/skills';

const bars = [['Passed', metrics.passed, 'ok'], ['Failed', metrics.failed, 'bad'], ['Blocked', metrics.blocked, 'warn'], ['Automation', metrics.automated, 'ok'], ['Manual', metrics.manual, 'blue']];

export default function Dashboard() {
  return (
    <Section id="dashboard" title="Testing Metrics — Portfolio Demo" subtitle="Sample Portfolio Metrics — not production or company data.">
      <div className="card">
        <p><b>Total Test Cases: {metrics.total}</b></p>
        {bars.map(([label, value, tone]) => (
          <div className="bar-row" key={label}>
            <span>{label}</span>
            <div className="bar" role="img" aria-label={`${label}: ${value} of ${metrics.total}`}><i className={`fill ${tone}`} style={{ width: `${(value / metrics.total) * 100}%` }} /></div>
            <b>{value}</b>
          </div>
        ))}
      </div>
    </Section>
  );
}
