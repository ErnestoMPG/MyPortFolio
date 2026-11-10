export default function Section({ id, number, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="section-heading">
        <span className="section-number" aria-hidden="true">{number} /</span>
        <h2 id={`${id}-title`}>{title}</h2>
      </div>
      {children}
    </section>
  );
}