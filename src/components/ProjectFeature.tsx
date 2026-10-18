import {Link} from 'react-router-dom';
import type {Project} from '../content/projects';
export function ProjectFeature({project}:{project:Project}){
 return <article className={`portfolio-feature portfolio-feature--${project.visual}`}>
  <div className="portfolio-feature-copy"><div className="feature-index"><span>{project.number}</span><span className="feature-rule"/><small>{project.category}</small></div>
   <h3>{project.title}</h3><p className="feature-definition">{project.visual==='operations'?'A company workspace for goals, teams, projects, assigned tasks and auditable approvals.':'An online marketplace where customers shop across sellers through one checkout.'}</p><p className="feature-problem">{project.visual==='operations'?'Problem: fragmented updates, unclear responsibilities and difficult-to-trace decisions.':'Problem: one convenient purchase must remain correct across stock, payments and separate vendor orders.'}</p><div className="portfolio-feature-tags"><span>{project.visual==='operations'?'TEAMWORK':'COMMERCE'}</span><span>{project.visual==='operations'?'AUDITABILITY':'ORDER INTEGRITY'}</span></div>
   <Link className="feature-case-link" to={`/work/${project.slug}`}>Read the case study ↗</Link>
  </div>
  <div className="portfolio-feature-art"><Link to={`/work/${project.slug}`} aria-label={`Explore ${project.title} case study`}><iframe title={`${project.title} populated demo`} src={project.demoPath.replace('#','?embed=1#')} loading="lazy" tabIndex={-1} aria-hidden="true"/></Link><span>ILLUSTRATIVE PREVIEW / NOT A LIVE SCREENSHOT</span></div>
 </article>
}

