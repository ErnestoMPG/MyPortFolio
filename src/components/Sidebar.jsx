import { navigation } from '../data/portfolio.js';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <a className="brand" href="#top" aria-label="Ernesto Perez Garcia, back to top">
        <span className="monogram" aria-hidden="true">EP</span>
        <span><strong>Ernesto M.</strong><small>Perez Garcia</small></span>
      </a>
      <p className="sidebar-label">Systems Engineer<br />& Software Developer</p>
      <nav aria-label="Portfolio sections">
        <ul className="nav-list">
          {navigation.map(([id, label], index) => (
            <li key={id}><a href={`#${id}`}><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{label}</a></li>
          ))}
        </ul>
      </nav>
      <p className="sidebar-footer">Built with curiosity <span aria-hidden="true">✦</span></p>
    </aside>
  );
}