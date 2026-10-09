export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section container">
      <h2>{title}</h2>
      {subtitle && <p className="muted sub">{subtitle}</p>}
      {children}
    </section>
  );
}
