import { useRef, useState } from 'react';
import { navigation } from '../data/portfolio.js';

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);

  function handleKeyDown(event) {
    if (event.key === 'Escape' && menuOpen) {
      setMenuOpen(false);
      menuButton.current?.focus();
    }
  }

  return (
    <aside className="sidebar" onKeyDown={handleKeyDown}>
      <a className="brand" href="#top" aria-label="Ernesto Perez Garcia, back to top">
        <span className="monogram" aria-hidden="true">EP</span>
        <span><strong>Ernesto M.</strong><small>Perez Garcia</small></span>
      </a>
      <button ref={menuButton} className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="section-navigation" onClick={() => setMenuOpen((open) => !open)}>
        {menuOpen ? 'Close menu' : 'Menu'} <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
      </button>
      <p className="sidebar-label">Systems Engineer<br />& Software Developer</p>
      <nav id="section-navigation" className={menuOpen ? 'section-navigation is-open' : 'section-navigation'} aria-label="Portfolio sections">
        <ul className="nav-list">
          {navigation.map(([id, label], index) => (
            <li key={id}><a href={`#${id}`} onClick={() => setMenuOpen(false)}><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{label}</a></li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}