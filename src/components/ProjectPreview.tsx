import type {Project} from '../content/projects';

/** Only the standalone sample-data walkthrough is embedded here. Never production credentials or data. */
export function ProjectPreview({project}:{project:Project}) {
 return <section className="guided-preview-section" id="preview" aria-labelledby="preview-title">
   <div className="guided-preview-heading">
    <div><p className="eyebrow">GUIDED PRODUCT WALKTHROUGH / SAMPLE DATA</p>
     <h2 id="preview-title">Understand the workflow in two minutes.</h2>
     <p>Explore a populated, deliberately limited interaction that illustrates the product's core responsibility. No sign-in, production data, or backend wake-up required.</p>
    </div>
    <a className="btn btn-primary" href={project.demoPath}>Launch interactive preview ↗</a>
   </div>
   <a href={project.demoPath} className="guided-preview-media" aria-label={`Open ${project.title} interactive sample-data demonstration`}>
    <img loading="lazy" decoding="async" src={project.previewScreenshot} alt={`${project.title} fictional sample-data demonstration screen`} />
    <span className="preview-overlay">Explore sample workflow <span aria-hidden="true">↗</span></span>
   </a>
   <p className="preview-disclaimer">{project.previewScene} All preview actions remain in the browser and do not affect the live applications.</p>
   <div className="demo-choices">
    <div><strong>Guided preview</strong><span>Immediate, sample-data interaction</span><a href={project.demoPath}>Start now →</a></div>
    <div><strong>Engineering record</strong><span>Architecture, decisions and tests</span><a href="#architecture">Explore evidence →</a></div>
    <div><strong>Live product</strong><span>Authentic application; free hosting may wake slowly</span><a href={project.liveUrl} target="_blank" rel="noreferrer">Open live app ↗</a></div>
   </div>
 </section>
}