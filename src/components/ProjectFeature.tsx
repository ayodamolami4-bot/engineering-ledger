import {Link} from 'react-router-dom';
import type {Project} from '../content/projects';
export function ProjectFeature({project}:{project:Project}) {return <article className={`project-feature project-feature--${project.visual}`}>
 <div className="feature-head"><span>RECORD / {project.number}</span><span>{project.year}</span></div>
 <div className="feature-body"><div className="feature-text"><p className="eyebrow">{project.category}</p><h3>{project.title}</h3><p>{project.subtitle}</p><div className="project-card-actions"><Link className="pill-button" to={`/work/${project.slug}`}>Read case study <span aria-hidden="true">↗</span></Link><a className="project-card-demo-link" href={project.demoPath}>Try sample demo →</a></div></div>
 <div className="feature-diagram" aria-label={`${project.title} conceptual workflow diagram; not a production screenshot`}>
 {project.visual==='operations'?<div className="workflow-visual"><div className="diagram-badge">GOALS</div><span>↓</span><div className="diagram-badge">PROJECTS & WORK</div><span>↓</span><div className="diagram-badge diagram-badge--em">REVIEW + AUDIT</div><small>Operational workflow / conceptual map</small></div>:<div className="workflow-visual"><div className="diagram-badge">CUSTOMER CHECKOUT</div><span>↓</span><div className="diagram-branch"><div className="diagram-badge">VENDOR A</div><div className="diagram-badge">VENDOR B</div></div><span>↓</span><div className="diagram-badge diagram-badge--em">ORDER + PAYMENT STATE</div><small>Order model / conceptual map</small></div>}
 </div></div></article>}
