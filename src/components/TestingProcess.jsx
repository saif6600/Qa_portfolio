import { FaClipboardList, FaProjectDiagram, FaListAlt, FaDatabase, FaPlay, FaBug, FaRedo, FaSyncAlt, FaRobot, FaFileAlt } from 'react-icons/fa';
import Section from './Section';

const stages = [
  [FaClipboardList, 'Requirement', 'Understand and clarify what must be built.'],
  [FaProjectDiagram, 'Test Scenario', 'Identify what needs to be tested.'],
  [FaListAlt, 'Test Case', 'Write detailed steps and expected results.'],
  [FaDatabase, 'Test Data', 'Prepare valid, invalid and boundary data.'],
  [FaPlay, 'Test Execution', 'Run tests and record actual results.'],
  [FaBug, 'Bug Reporting', 'Log clear, reproducible defects.'],
  [FaRedo, 'Retesting', 'Verify fixes on the failed cases.'],
  [FaSyncAlt, 'Regression', 'Confirm existing features still work.'],
  [FaRobot, 'Automation', 'Automate stable, repetitive checks.'],
  [FaFileAlt, 'Test Report', 'Summarize coverage, results and risks.'],
];

export default function TestingProcess() {
  return (
    <Section id="process" title="Testing Process" subtitle="How I move from requirement to release confidence.">
      <ol className="grid process">
        {stages.map(([Icon, title, text], i) => (
          <li className="card" key={title}><Icon aria-hidden className="ok" /> <b>{i + 1}. {title}</b><p className="muted small">{text}</p></li>
        ))}
      </ol>
    </Section>
  );
}
