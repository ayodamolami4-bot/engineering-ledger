import type {Project} from '../content/projects';

/** Live-rendered sample walkthrough, intentionally independent of either production application. */
export function ProjectPreview({project}:{project:Project}) {
 const embeddedDemo=project.demoPath.replace('#','?embed=1#');
 return <section className="guided-preview-section" id="preview" aria-labelledby="preview-title">
   <div className="guided-preview-heading">
    <div><p className="eyebrow">EXPLORABLE PRODUCT EXPERIENCE / FICTIONAL DATA</p>
     <h2 id="preview-title">See the experience before reading the implementation.</h2>
     <p>Begin with the team member or customer experience, then inspect how the workflows connect to permissions, orders and traceable records. This interactive sample isn't the production application.</p>
    </div>
    <a className="btn btn-primary" href={project.demoPath}>Explore the full product tour ↗</a>
   </div>
   <a href={project.demoPath} className="guided-preview-media" aria-label={`Launch ${project.title} guided product experience`}>
    <iframe title={`${project.title} sample workspace preview, illustrative data`} loading="lazy" src={embeddedDemo} tabIndex={-1} aria-hidden="true"/>
    <span className="preview-overlay">Open the interactive experience <span aria-hidden="true">↗</span></span>
   </a>
   <p className="preview-disclaimer">This embedded screen runs the actual portfolio walkthrough, using fabricated sample records. It is NOT a screenshot of an authenticated production account. Neither application or its database is affected.</p>
   <div className="demo-choices">
    <div><strong>Try the experience</strong><span>Customer or employee first, then deeper workflows</span><a href={project.demoPath}>Start now →</a></div>
    <div><strong>Engineering case study</strong><span>Architecture, decisions and tested behavior</span><a href="#architecture">Read the case study →</a></div>
    <div><strong>Production application</strong><span>Real deployed product; sign-in may be needed</span><a href={project.liveUrl} target="_blank" rel="noreferrer">Open live product ↗</a></div>
   </div>
 </section>;
}
