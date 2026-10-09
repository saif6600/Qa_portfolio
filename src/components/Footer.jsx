import { links } from '../data/skills';

export default function Footer() {
  return (
    <footer className="footer">
      <p><b>Saif Ali — QA Engineer</b></p>
      <p className="muted">Manual Testing • Automation Testing • JavaScript • Playwright</p>
      <p><a href={links.github}>GitHub</a> · <a href={links.linkedin}>LinkedIn</a> · <a href={links.email}>Email</a> · <a href={links.resume}>Resume</a></p>
      <p className="muted small">© 2026 Saif Ali. All rights reserved.</p>
    </footer>
  );
}
