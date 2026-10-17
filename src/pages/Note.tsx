import {Link,useParams} from 'react-router-dom';
import {fieldNotes,getNote} from '../content/notes';
import {noteEssays} from '../content/noteEssays';
export default function Note(){
 const {slug}=useParams();const n=getNote(slug||'');const essay=slug?noteEssays[slug]:undefined;
 if(!n||!essay)return <section className="section wrap"><h1>Note not found.</h1><Link to="/notes">← All field notes</Link></section>;
 const index=fieldNotes.findIndex(x=>x.slug===n.slug);const next=fieldNotes[(index+1)%fieldNotes.length];
 const wordCount=[essay.opening,...essay.sections.flatMap(x=>x.paragraphs)].join(' ').split(/\s+/).length;
 const minutes=Math.max(3,Math.ceil(wordCount/195));
 return <article className="article-page wrap page-top note-publication">
  <p className="eyebrow">FIELD NOTE / {n.number} / {n.category}</p><h1 className="page-title">{n.title}</h1><p className="note-lede">{essay.opening}</p>
  <div className="note-quickfacts"><span><strong>ENGINEERING LEDGER</strong> / {n.number}</span><span>{minutes} MIN READ</span><span>{n.status.toUpperCase()}</span></div>
  <div className="note-layout"><nav className="note-sidebar" aria-label="Within this field note"><strong>THE RECORD</strong>{essay.sections.map((s,i)=><a href={`#record-${i+1}`} key={s.title}>{String(i+1).padStart(2,'0')} / {s.title}</a>)}<Link to="/notes">← All Field Notes</Link></nav>
   <div className="note-essay"><p className="note-claim-tag">{essay.lens}</p>{essay.sections.map((s,i)=><section id={`record-${i+1}`} key={s.title}>
    <p className="eyebrow">{String(i+1).padStart(2,'0')} / THE ANALYSIS</p><h2>{s.title}</h2>{s.paragraphs.map((p,j)=><p key={j}>{p}</p>)}
    {s.illustration&&<aside className="note-example"><small>{s.illustration.label}</small><p>{s.illustration.text}</p></aside>}
    {s.code&&<pre className="note-code"><code>{s.code}</code></pre>}
   </section>)}
   <section><p className="eyebrow">EDITORIAL TRANSPARENCY</p><h2>What this record is—and isn't.</h2><p>This is my engineering analysis. Where it connects to project code, that connection is identified above. Other mechanisms and examples are evaluated or illustrative, not claims that every technology is deployed in a featured product.</p></section>
   <div className="note-next"><Link to="/notes">← Back to the index</Link><Link to={`/notes/${next.slug}`}>Next: {next.title} →</Link></div></div>
  </div>
 </article>;
}
