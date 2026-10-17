import {useMemo,useState} from 'react';
import {fieldNotes} from '../content/notes';
import {PatternCard} from '../components/PatternCard';

const categories = ['All','ARCHITECTURE','DATA SYSTEMS','QUALITY','RELIABILITY','SECURITY','PRODUCTION','PRODUCT & COST'] as const;

export default function FieldNotes(){
 const [selected,setSelected]=useState<string>('All');
 const visible=useMemo(()=>selected==='All'?fieldNotes:fieldNotes.filter(note=>note.category===selected),[selected]);
 return <section className="section wrap page-top">
  <p className="eyebrow">ENGINEERING LEDGER / FIELD NOTES</p>
  <h1 className="page-title">The thinking behind dependable systems.</h1>
  <p className="page-deck">Technical investigations into boundaries, data correctness, reliability and the economics of operating software. Each note starts with a problem, not a technology to install.</p>
  <p className="evidence-note">Each article distinguishes project-connected implementation from independent design research. Examples are educational, not claims that every pattern is deployed.</p>
  <div className="note-filters" aria-label="Filter engineering topics">{categories.map(c=><button key={c} type="button" aria-pressed={selected===c} onClick={()=>setSelected(c)}>{c==='All'?'All subjects':c.toLowerCase()}</button>)}</div>
  <p className="note-count" role="status">{visible.length} {visible.length===1?'note':'notes'} in this collection</p>
  <div className="pattern-grid pattern-grid--all">{visible.map(n=><PatternCard key={n.slug} note={n}/>)}</div>
 </section>;
}
