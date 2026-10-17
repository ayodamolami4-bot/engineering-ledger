import {Link} from 'react-router-dom';
import type {Project} from '../content/projects';
export function ProjectFeature({project}:{project:Project}){
 return <article className={`portfolio-feature portfolio-feature--${project.visual}`}>
  <div className="portfolio-feature-copy"><div className="feature-index"><span>{project.number}</span><span className="feature-rule"/><small>{project.category}</small></div>
   <h3>{project.title}</h3><p>{project.subtitle}</p><div className="portfolio-feature-tags"><span>{project.visual==='operations'?'TEAMWORK':'COMMERCE'}</span><span>{project.visual==='operations'?'AUDITABILITY':'ORDER INTEGRITY'}</span></div>
   <Link className="feature-case-link" to={`/work/${project.slug}`}>Read the case study ↗</Link>
  </div>
  <div className="portfolio-feature-art"><Link to={`/work/${project.slug}`} aria-label={`Explore ${project.title} case study`}><img src={project.previewScreenshot} loading="lazy" decoding="async" alt={`${project.title} guided-preview interface populated with fictional records`} /></Link><span>ILLUSTRATIVE PREVIEW / NOT A LIVE SCREENSHOT</span></div>
 </article>
}
