import {useMemo,useState} from 'react';
import {Link} from 'react-router-dom';
import {fieldNotes} from '../content/notes';
import {PatternCard} from '../components/PatternCard';
const categories = ['All','ARCHITECTURE','DATA SYSTEMS','QUALITY','RELIABILITY','SECURITY','PRODUCTION','PRODUCT & COST'] as const;
export default function FieldNotes(){const [selected,setSelected]=useState<string>('All');const visible=useMemo(()=>selected==='All'?fieldNotes:fieldNotes.filter(n=>n.category===selected),[selected]);
 return <section className="section wrap page-top fieldnotes-page"><div className="fieldnotes-lead"><p className="eyebrow">ENGINEERING LEDGER / THE FIELD NOTES</p>
  <h1 className="page-title">Notes from the decisions that matter.</h1>
  <p className="page-deck">Working through real engineering questions, one constraint at a time. These are long-form records with examples, trade-offs and failure analysis—not a dictionary of patterns.</p>
  <p className="evidence-note">When a note examines something not deployed in my projects, I say so. Project evidence and design analysis aren't interchangeable.</p></div>
  <div className="note-filters" aria-label="Filter engineering topics">{categories.map(c=><button key={c} type="button" aria-pressed={selected===c} onClick={()=>setSelected(c)}>{c==='All'?'All subjects':c.toLowerCase()}</button>)}</div>
  <p className="note-count" role="status">{visible.length} authored {visible.length===1?'record':'records'} in this collection</p>
  <div className="pattern-grid pattern-grid--all">{visible.map(n=><PatternCard key={n.slug} note={n}/>)}</div>
  <div className="note-next"><Link to="/">← Back to the front page</Link><Link to="/work">Project case studies →</Link></div>
 </section>}
