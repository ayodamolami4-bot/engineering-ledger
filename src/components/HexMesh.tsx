export function HexMesh({variant='hero'}:{variant?:'hero'|'small'}) {
  const polys=[[100,12],[181,12],[263,12],[140,79],[222,79],[304,79],[60,79]];
  return <svg className={`hex-mesh hex-mesh--${variant}`} viewBox="0 0 430 250" aria-hidden="true" focusable="false"><g fill="none" stroke="currentColor" strokeWidth="1.15">{polys.map(([x,y],i)=><polygon key={i} points={`${x},${y} ${x+34},${y+20} ${x+34},${y+60} ${x},${y+80} ${x-34},${y+60} ${x-34},${y+20}`} />)}</g><polygon className="hex-accent" points="140,79 174,99 174,139 140,159 106,139 106,99" strokeWidth="1.2"/></svg>
}
export function HexNumber({value}:{value:string}) {return <span className="hex-number" aria-label={`Issue ${value}`}><span>{value}</span></span>}
