/** An original architectural line study; an illustration of engineering judgement, not a product screenshot. */
export function BridgeStudy(){
 const deck=[0,1,2,3,4,5,6].map(n=>n*5);
 return <div className="bridge-study">
  <div className="bridge-note bridge-note--a">Understand<br/>the problem <span>↘</span></div>
  <svg viewBox="0 0 680 420" role="img" aria-label="Architectural pencil-style line study of a cable-stayed bridge, with engineering guidelines and intersecting construction lines">
   <defs><pattern id="paper-grain" patternUnits="userSpaceOnUse" width="28" height="28"><circle cx="4" cy="6" r=".45" fill="#768177" opacity=".5"/><circle cx="19" cy="22" r=".6" fill="#768177" opacity=".25"/></pattern></defs>
   <rect width="680" height="420" fill="url(#paper-grain)" opacity=".45"/>
   <g stroke="#7c8982" strokeWidth=".7" opacity=".33" fill="none">
    {Array.from({length:11},(_,i)=><path key={'v'+i} d={`M${95+i*40} 25L${108+i*40} 352`}/>)}
    {Array.from({length:8},(_,i)=><path key={'h'+i} d={`M50 ${68+i*35}L626 ${75+i*35}`}/>)}
    <path d="M42 360L645 70M76 42L626 358M142 360L607 42"/>
   </g>
   <g stroke="#21363d" strokeLinecap="round" fill="none">
    <path strokeWidth="2.5" d="M60 311L621 311"/><path strokeWidth="1.1" d="M49 317L627 317M71 323L618 323"/>
    {deck.map((d,i)=><path key={'beam'+i} strokeWidth=".8" opacity=".65" d={`M${75+d*2} 312l6 15M${545-d*2} 311l-6 15`}/>)}
    <path strokeWidth="2" d="M215 313L292 80L307 80L371 313M292 80L292 49L307 49L307 80"/>
    <path strokeWidth="1" opacity=".8" d="M221 313L298 83M362 312L301 83M301 81L301 45"/>
    {Array.from({length:9},(_,i)=><g key={'cable'+i} strokeWidth={i%2?.9:1.35} opacity={i%2?.52:.82}><path d={`M${295-i*0.9} 82 L${66+i*19} 311`}/><path d={`M${303+i*.7} 82 L${602-i*20} 311`}/></g>)}
    <path strokeWidth="1.1" d="M45 339L631 339M50 344L631 344"/>
    <path strokeWidth="1" opacity=".5" d="M80 316L195 367M557 312L605 365M280 50l-14 250M318 49l26 259"/>
    <path strokeWidth="1" strokeDasharray="4 6" opacity=".55" d="M300 31L300 363M48 311L646 311"/>
    <path strokeWidth="1.3" d="M200 310l-24 49M391 311l19 48"/>
   </g>
   <g fill="#21363d" fontFamily="Georgia,serif" fontSize="12" opacity=".75"><text x="68" y="382">STRUCTURAL STUDY / 01</text><text x="480" y="383">FORM FOLLOWS LOAD</text></g>
  </svg>
  <div className="bridge-note bridge-note--b">Choose the<br/>simplest solution<br/>that works <span>↙</span></div>
  <div className="bridge-note bridge-note--c">Design for change <span>↗</span></div>
  <p className="bridge-caption">An engineering study in constraints, connections and deliberate choices.</p>
 </div>;
}
