/**
 * Original editorial illustration: a construction drawing of two connected
 * engineering responsibilities. Not a fake production screenshot or a bridge.
 */
export function SystemStudy() {
 const gridX = Array.from({length:13}, (_,i)=>44+i*49);
 const gridY = Array.from({length:9}, (_,i)=>34+i*45);
 return <figure className="systems-study">
   <svg viewBox="0 0 700 460" role="img" aria-label="An engineering drawing connecting the user experience to work and commerce system boundaries, with a traced decision record">
    <defs>
     <pattern id="sketch-dots" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="8" cy="8" r=".5" fill="#668076" opacity=".35"/></pattern>
     <marker id="sketch-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10" fill="none" stroke="#b45742" strokeWidth="1.5"/></marker>
    </defs>
    <rect width="700" height="460" fill="url(#sketch-dots)" opacity=".9"/>
    <g fill="none" stroke="#93a79b" opacity=".28" strokeWidth=".8">{gridX.map(x=><path key={x} d={`M${x} 10V450`}/>)}{gridY.map(y=><path key={y} d={`M8 ${y}H693`}/>)}</g>
    <g fontFamily="monospace" fill="#b45742" fontSize="11" letterSpacing="2"><text x="28" y="31">STRUCTURAL STUDY / 01</text><text x="480" y="431">FORM FOLLOWS WORKFLOW</text></g>
    <g stroke="#1b3036" fill="#faf9f4" strokeWidth="1.4">
     <rect x="63" y="89" width="253" height="220" rx="5"/>
     <rect x="365" y="129" width="272" height="197" rx="5"/>
    </g>
    <g fill="#e2eae4" opacity=".9"><rect x="64" y="89" width="251" height="37" rx="5"/><rect x="366" y="129" width="270" height="37" rx="5"/></g>
    <g stroke="#536e66" fill="none" strokeWidth="1.1"><path d="M63 126h253M365 166h272M115 127v182"/><path d="M76 151h27M76 169h23M76 188h25M76 210h20M76 232h22M76 250h24"/></g>
    <g fontFamily="monospace" fill="#1b3036" fontSize="12"><text x="77" y="112">01 / WORK</text><text x="380" y="153">02 / COMMERCE</text></g>
    <g stroke="#819d8f" strokeWidth="1" fill="none">
      <rect x="133" y="143" width="161" height="46" rx="3"/>
      <rect x="133" y="199" width="161" height="47" rx="3"/>
      <rect x="133" y="256" width="161" height="36" rx="3"/>
      <rect x="382" y="184" width="71" height="70" rx="3"/>
      <rect x="464" y="184" width="71" height="70" rx="3"/>
      <rect x="546" y="184" width="74" height="70" rx="3"/>
      <path d="M382 271h239M382 284h160M382 300h119" opacity=".6"/>
    </g>
    <g fill="#dcece4"><rect x="137" y="147" width="152" height="38"/><rect x="137" y="203" width="152" height="39"/></g>
    <g fill="#b45742"><circle cx="152" cy="166" r="5"/><circle cx="152" cy="224" r="5"/><path d="M399 202h38l-4 35h-30zM483 207h31l8 25h-39zM569 199l24 0 13 38h-49z" opacity=".75"/></g>
    <g fill="#1b3036" fontFamily="monospace" fontSize="11"><text x="164" y="166">Assigned work</text><text x="164" y="224">Review required</text><text x="147" y="279">Audit event ✓</text></g>
    <g fill="none" stroke="#b45742" strokeWidth="1.6" strokeDasharray="4 5" markerEnd="url(#sketch-arrow)"><path d="M207 309C230 365 369 379 412 329"/><path d="M318 179C344 155 347 155 362 179"/></g>
    <g fill="none" stroke="#b45742" strokeWidth="1.25"><path d="M65 73l-17 15 17 0"/><path d="M638 338l27-12-7 23"/></g>
    <g fill="#8ba69a" stroke="#1b3036" strokeWidth="1.1" opacity=".76">
     <polygon points="337,43 358,55 358,79 337,91 316,79 316,55"/><polygon points="374,43 395,55 395,79 374,91 353,79 353,55" fill="none"/>
    </g>
    <g fontFamily="Georgia,serif" fontStyle="italic" fill="#374a4d" fontSize="18"><text x="64" y="351">Responsibility stays visible.</text><text x="391" y="382">One order, separate sellers.</text></g>
    <g stroke="#8d9e92" strokeWidth=".9" fill="none" opacity=".5"><path d="M35 58L310 58M392 79L655 79M340 99v258M49 328h283M370 345h276"/></g>
   </svg>
   <figcaption>Two products. One principle: make responsibility and state understandable.</figcaption>
 </figure>;
}
