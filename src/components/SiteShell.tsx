import {site} from '../content/site';
import {useEffect,useState} from 'react';
import {Link,NavLink,Outlet,useLocation} from 'react-router-dom';
import {HexMesh} from './HexMesh';
const links=[{to:'/work',label:'Work'},{to:'/notes',label:'Field Notes'},{to:'/about',label:'About'},{to:'/contact',label:'Contact'}];
export function SiteShell(){
 const [open,setOpen]=useState(false); const loc=useLocation();
 useEffect(()=>{setOpen(false);window.scrollTo({top:0,behavior:'auto'});},[loc.pathname]);
 useEffect(()=>{function onKey(e:KeyboardEvent){if(e.key==='Escape')setOpen(false);}window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey);},[]);
 return <>
 <a className="skip-link" href="#main">Skip to main content</a>
 <header className="site-header wrap"><Link to="/" className="wordmark" aria-label={`${site.name} — home`}><strong>AA</strong><span>The Engineering Ledger</span></Link>
 <button className="mobile-toggle" type="button" aria-controls="main-nav" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?'Close':'Menu'}<span aria-hidden="true">{open?'×':'☰'}</span></button>
 <nav id="main-nav" aria-label="Main navigation" className={open?'main-nav is-open':'main-nav'}>{links.map(l=><NavLink key={l.to} to={l.to} className={({isActive})=>isActive?'active':''}>{l.label}</NavLink>)}<a className="resume-link" href={site.resume} download>Resume ↓</a></nav>
 </header>
 <main id="main"><Outlet/></main>
 <footer className="site-footer"><div className="wrap footer-inner"><div><Link to="/" className="footer-title">The Engineering Ledger</Link><p>Systems, products, and the decisions behind them.</p></div><div className="footer-links"><a href={`mailto:${site.email}`}>Email</a><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a></div><small>© {new Date().getFullYear()} {site.name}.</small></div><HexMesh variant="small"/></footer>
 </>;
}
