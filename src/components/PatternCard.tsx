import {Link} from 'react-router-dom';
import {HexNumber} from './HexMesh';
import type {FieldNote} from '../content/notes';
export function PatternCard({note}:{note:FieldNote}) {return <Link className="pattern-card" to={`/notes/${note.slug}`}><HexNumber value={note.number}/><span className="pattern-cat">{note.category}</span><strong>{note.title}</strong><span className="pattern-excerpt">{note.deck}</span><span className="pattern-read">Read field note ↗</span></Link>}
