import {Link,useParams} from 'react-router-dom';
import {getProject} from '../content/projects';
import {ProjectPreview} from '../components/ProjectPreview';

export default function CaseStudy(){
 const {slug}=useParams();
 const p=getProject(slug||'');
 if(!p)return <section className="wrap section"><h1>Project not found.</h1><Link to="/work">Back to work</Link></section>;
 return <article className="case-study wrap page-top">
  <Link to="/work" className="back-link">← Selected work</Link>
  <header className="case-intro">
   <div><p className="eyebrow">CASE STUDY / {p.number} / {p.category}</p><h1 className="page-title">{p.title}</h1>
    <p className="case-subtitle">{p.subtitle}</p><p className="case-summary">{p.summary}</p>
    <div className="button-row"><a className="btn btn-primary" href={p.demoPath}>Explore the product tour ↗</a><a className="btn btn-outline" href={p.liveUrl} target="_blank" rel="noopener noreferrer">Open live application ↗</a><a className="text-link" href="#problem">Read the engineering story ↓</a></div>
    <p className="preview-note">Fast walkthrough with fictional sample data. The live application remains separate.</p>
   </div>
   <aside className="case-facts"><span>MY ROLE</span><strong>{p.role}</strong><span>YEAR</span><strong>{p.year}</strong><span>CORE STACK</span><p>{p.stack.join(' · ')}</p>{p.githubUrl?<a href={p.githubUrl} target="_blank" rel="noreferrer">Explore public backend code ↗</a>:<p>Production source is private; implementation is described below.</p>}</aside>
  </header>
  <div className="reader-summary" aria-label="Two-minute overview">
    <p className="eyebrow">THE SHORT VERSION</p>
    <div><h2>What is it?</h2><p>{p.productApproach}</p></div>
    <div><h2>Why does it matter?</h2><p>{p.businessProblem}</p></div>
    <div><h2>What did I do?</h2><p>{p.role}. The technical record below describes the contribution, design decisions and verification.</p></div>
  </div>
  <section className="case-visual-overview hex-surface" aria-label="Architecture overview">
   <div><p className="eyebrow">THE PRODUCT / AT A GLANCE</p><h2>One clear experience.<br/><em>Several careful boundaries.</em></h2><p>{p.visual==='operations'?'A company objective passes through project and task ownership to an explicit review and traceable audit event.':'One customer checkout keeps order and payment context together while vendors manage fulfilment independently.'}</p></div>
   <div className="case-visual-path">{(p.visual==='operations'?['Goal & unit','Project & task','Submission & review','Company audit']:['Customer cart','Parent order','Vendor sub-orders','Payment recovery']).map((label,i)=><div key={label}><span>{String(i+1).padStart(2,'0')}</span><strong>{label}</strong></div>)}</div>
  </section>
  <ProjectPreview project={p}/>
  <div className="article-grid"><aside className="contents-list"><strong>IN THIS RECORD</strong>
   <a href="#problem">01 / Real-world problem</a><a href="#approach">02 / Workflow</a><a href="#value">03 / Business value</a>
   <a href="#architecture">04 / Architecture</a><a href="#decisions">05 / Decisions</a><a href="#evidence">06 / Verification</a><a href="#evolution">07 / Evolution</a>
  </aside>
  <div className="article-body">
   <section id="problem"><p className="eyebrow">01 / BUSINESS CONTEXT</p><h2>The problem worth solving.</h2><p>{p.businessProblem}</p>
    <div className="scenario-note"><span>ILLUSTRATIVE SCENARIO</span><p>{p.practicalScenario}</p></div></section>
   <section id="approach"><p className="eyebrow">02 / WORKFLOW</p><h2>Follow the responsibility.</h2><p>{p.productApproach}</p>
    <ol className="workflow-steps">{p.workflow.map(step=><li key={step}>{step}</li>)}</ol></section>
   <section id="value"><p className="eyebrow">03 / EXPECTED BUSINESS VALUE</p><h2>Value is a mechanism, not a slogan.</h2><ul>{p.intendedValue.map(x=><li key={x}>{x}</li>)}</ul>
    <h3>What I would measure</h3><ul>{p.outcomesToMeasure.map(x=><li key={x}>{x}</li>)}</ul>
    <p className="evidence-note">These are proposed evaluation measures and potential operational benefits. No unverified customer ROI or outcome is claimed.</p></section>
   <section id="architecture"><p className="eyebrow">04 / SYSTEM CONTEXT</p><h2>Architecture by responsibility.</h2>
    <div className="architecture-list">{p.architecture.map((a,i)=><div className="architecture-entry" key={a.label}><span className="architecture-num">{String(i+1).padStart(2,'0')}</span><div><strong>{a.label}</strong><p>{a.description}</p></div></div>)}</div></section>
   <section id="decisions"><p className="eyebrow">05 / ENGINEERING DECISIONS</p><h2>Choices with consequences.</h2>
    <p>Open a decision record to see the constraint, chosen mechanism and its cost.</p>
    <div className="decisions-list">{p.decisions.map(d=><details className="decision-record" key={d.id}><summary><span>{d.id}</span><strong>{d.title}</strong><span aria-hidden="true">+</span></summary><div className="decision-content"><h4>The problem</h4><p>{d.problem}</p><h4>The approach</h4><p>{d.approach}</p><h4>The trade-off</h4><p>{d.tradeOff}</p></div></details>)}</div></section>
   <section id="evidence"><p className="eyebrow">06 / VERIFICATION</p><h2>Evidence over adjectives.</h2><ul>{p.verification.map(v=><li key={v}>{v}</li>)}</ul><p className="evidence-note">Implemented and tested features are distinct from independently measured production performance. The walkthrough simulates product interactions; it does not reproduce backend authorization or payment behavior.</p></section>
   <section id="evolution"><p className="eyebrow">07 / ARCHITECTURE EVOLUTION</p><h2>What would change at scale?</h2><p>{p.scaleOutlook}</p><Link className="text-link" to="/notes">Read the engineering field notes →</Link></section>
  </div></div>
 </article>
}