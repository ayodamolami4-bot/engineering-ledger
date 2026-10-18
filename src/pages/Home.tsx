import {Link} from 'react-router-dom';
import {site} from '../content/site';
import {projects} from '../content/projects';
import {ProjectFeature} from '../components/ProjectFeature';
import {BridgeStudy} from '../components/BridgeStudy';
import {fieldNotes} from '../content/notes';
const selected=['transactions','system-boundaries','testing-strategy','auditability'];
const topics=selected.map(slug=>fieldNotes.find(n=>n.slug===slug)!);
export default function Home(){return <div className="ledger-home">
 <section className="editorial-hero hex-surface">
  <div className="wrap editorial-hero-grid"><div className="editorial-hero-copy">
   <p className="eyebrow">PRODUCT ENGINEER / FULL-STACK SOFTWARE ENGINEER</p>
   <h1>Good software is<br/>built on <em>good decisions.</em></h1>
   <p className="hero-deck">I'm {site.name}. I build software for real operational problems—where the right decisions make systems useful, reliable and easier to change.</p>
   <div className="button-row"><Link className="btn btn-primary" to="/work">View my work <span aria-hidden="true">→</span></Link><Link className="text-link" to="/about">Meet the engineer ↗</Link></div>
   <p className="hero-aside">01 / Systems matter. The people using them matter more.</p>
  </div><BridgeStudy/></div>
  <div className="wrap editorial-hero-bottom"><span>ENGINEERING LEDGER / FIELD EDITION</span><span>PRODUCT · ARCHITECTURE · OPERATIONS</span><span>2026 — LAGOS</span></div>
 </section>
 <section className="wrap editorial-section home-projects" id="selected-work">
  <header className="editorial-section-header"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>Software in context.</h2></div><p>The work is the evidence. Start with what each product solves; explore the implementation when you want more.</p></header>
  <div className="feature-grid">{projects.map(p=><ProjectFeature project={p} key={p.slug}/>)}</div>
  <div className="section-tail"><span>TWO REAL PRODUCTS. DIFFERENT PROBLEMS. DECISIONS MADE EXPLICIT.</span><Link to="/work">Explore the work →</Link></div>
 </section>
 <section className="editorial-index hex-surface"><div className="wrap">
  <header className="editorial-section-header"><div><p className="eyebrow">02 / THE ENGINEERING INDEX</p><h2>Ideas tested against reality.</h2></div><p>Not a glossary of buzzwords. Written records of decisions, failure paths, trade-offs and the conditions that would make a different design worthwhile.</p></header>
  <div className="editorial-hex-grid">{topics.map((n,i)=><Link className="editorial-hex-topic" to={`/notes/${n.slug}`} key={n.slug}>
   <span className="editorial-hex-symbol" aria-hidden="true">{['▥','⌘','◇','≡'][i]}</span><strong>{n.title}</strong><small>{n.category.toLowerCase()}</small><span className="topic-arrow">↗</span>
  </Link>)}</div>
  <div className="section-tail"><span>DATA / ARCHITECTURE / QUALITY / ACCOUNTABILITY / OPERATIONS</span><Link to="/notes">Explore all field notes →</Link></div>
 </div></section>
 <section className="wrap editorial-section engineer-home"><div className="engineer-intro">
  <div><p className="eyebrow">03 / THE ENGINEER</p><h2>Thinking in systems.<br/><em>Building for people.</em></h2><p>I'm interested in the intersection of product reasoning and engineering depth: understanding who does the work, what goes wrong when systems fail, and what a business can actually afford to maintain.</p><Link className="text-link" to="/about">More about me and my stack →</Link></div>
  <div className="engineer-margin"><div className="engineer-monogram" aria-label="AA monogram">A<span>/</span>A</div><p className="eyebrow">WHAT DRIVES MY WORK</p><p>Understand the cost of a decision. Protect the important constraints. Make the result clear to the people who depend on it.</p><div className="engineer-stamp">TECHNICAL / PRODUCT / RELIABILITY</div></div>
 </div></section>
 <section className="closing-note"><div className="wrap closing-note-grid"><div><p className="eyebrow">04 / GET IN TOUCH</p><h2>Let's talk about the work.</h2><p>Open to engineering roles, product collaboration and thoughtful technical conversations.</p></div><div className="closing-links"><a href={`mailto:${site.email}`}>Email <span>↗</span></a><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span>↗</span></a><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub <span>↗</span></a><a href={site.resume} download>Resume <span>↓</span></a></div></div></section>
 </div>}

