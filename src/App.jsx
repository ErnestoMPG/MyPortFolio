import Sidebar from './components/Sidebar.jsx';
import Section from './components/Section.jsx';
import { skills } from './data/portfolio.js';

export default function App() {
  return (
    <div id="top" className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <Sidebar />
      <main id="main" className="main-content">
        <header className="hero">
          <p className="eyebrow"><span aria-hidden="true">✦</span> Engineering with curiosity</p>
          <h1>Ernesto M.<br /><span>Perez Garcia.</span></h1>
          <p className="hero-role">Systems Engineer <span>&</span> Software Developer</p>
          <p className="hero-copy">Building reliable systems and software, guided by a curiosity for how things work—from the details on the ground to the universe above.</p>
          <div className="hero-actions"><a className="button button-primary" href="#experience">Explore my experience <span aria-hidden="true">↗</span></a><a className="button button-secondary" href="#contact">Get in touch <span aria-hidden="true">→</span></a></div>
          <div className="hero-orbit" aria-hidden="true"><span>EP</span></div>
        </header>

        <Section id="about" number="01" title="About">
          <p className="lead">A systems perspective, with an eye for the details.</p>
          <p>I’m a systems engineer and software developer with a background in testing, automation, cybersecurity, and technical problem-solving. I enjoy working across disciplines to understand complex systems and help make them more reliable.</p>
          <p>My studies in computer science and astronomy have shaped both my technical approach and my curiosity about the bigger picture.</p>
        </Section>

        <Section id="experience" number="02" title="Experience">
          <div className="experience-grid">
            <article className="experience-card"><p className="item-kicker">Current role</p><h3>Systems Engineer</h3><p>Collaborating across teams to support system development and testing.</p><ul><li>Coordinate work and track tasks using agile workflows.</li><li>Maintain virtual environments that support development and testing.</li></ul></article>
            <article className="experience-card"><p className="item-kicker">Previous experience</p><h3>Automation & Software Support</h3><p>Developed Python and Excel VBA automation for production workflows.</p><ul><li>Built validation checks and safe abort paths into automated processes.</li><li>Investigated failures and verified fixes using logs and controlled test inputs.</li></ul></article>
            <article className="experience-card"><p className="item-kicker">University of Florida</p><h3>Information Technology & Cybersecurity Intern</h3><p>Supported vulnerability assessments and technical communication.</p><ul><li>Documented findings and assisted with tracking.</li><li>Built a metrics webpage and maintained technical web content.</li></ul></article>
          </div>
        </Section>

        <Section id="projects" number="03" title="Selected projects">
          <div className="placeholder"><span aria-hidden="true">✧</span><div><h3>Projects coming soon</h3><p>Selected work and case studies will be added here after review.</p></div></div>
        </Section>

        <Section id="skills" number="04" title="Skills">
          <div className="card-grid">{skills.map((skill) => <article className="card" key={skill.title}><h3>{skill.title}</h3><p>{skill.items}</p></article>)}</div>
        </Section>

        <Section id="education" number="05" title="Education">
          <article className="education-card"><p className="item-kicker">University of Florida · May 2026</p><h3>Bachelor of Science in Computer Science</h3><h3>Bachelor of Arts in Astronomy & Astrophysics</h3><p>Minor in Physics</p><p className="astronomy-note"><span aria-hidden="true">✦</span> My astronomy background reflects a lasting curiosity about the universe.</p></article>
        </Section>

        <Section id="contact" number="06" title="Contact">
          <p className="lead">Let’s connect.</p><p>Public contact details and a résumé link will be added here after review.</p><p className="status-note">Contact information coming soon.</p>
        </Section>
        <footer className="footer">Ernesto M. Perez Garcia <span>·</span> Built with React</footer>
      </main>
    </div>
  );
}