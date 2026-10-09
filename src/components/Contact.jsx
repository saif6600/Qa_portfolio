import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import Section from './Section';
import { links } from '../data/skills';

const empty = { name: '', email: '', subject: '', message: '' };
const validate = (v) => {
  const e = {};
  if (!v.name.trim()) e.name = 'Name is required';
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email';
  if (!v.subject.trim()) e.subject = 'Subject is required';
  if (v.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
  return e;
};

export default function Contact() {
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const change = (e) => setV({ ...v, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const found = validate(v);
    setErrors(found);
    setDone(false);
    if (!Object.keys(found).length) { setDone(true); setV(empty); }
  };
  return (
    <Section id="contact" title="Let's Connect" subtitle="This form is a frontend-only demo: no message is actually sent. Use the buttons below to reach me.">
      <form className="card form" onSubmit={submit} noValidate>
        {['name', 'email', 'subject'].map((f) => (
          <label key={f}>{f[0].toUpperCase() + f.slice(1)}
            <input className="input" name={f} value={v[f]} onChange={change} aria-invalid={!!errors[f]} />
            {errors[f] && <span className="err" role="alert">{errors[f]}</span>}
          </label>
        ))}
        <label>Message
          <textarea className="input" rows="4" name="message" value={v.message} onChange={change} aria-invalid={!!errors.message} />
          {errors.message && <span className="err" role="alert">{errors.message}</span>}
        </label>
        <button className="btn primary" type="submit">Send Message</button>
        {done && <p className="ok" role="status">Demo form submitted successfully. (No backend: nothing was sent.)</p>}
      </form>
      <div className="row gap">
        <a className="btn" href={links.email}><FaEnvelope /> Email Me</a>
        <a className="btn" href={links.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
        <a className="btn" href={links.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
      </div>
    </Section>
  );
}
