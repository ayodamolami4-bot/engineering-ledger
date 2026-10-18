export class DemoError extends Error {}
export const requireThat=(condition,message)=>{if(!condition)throw new DemoError(message);};
export const text=(value,label,min=2,max=1000)=>{const v=String(value??'').trim();requireThat(v.length>=min&&v.length<=max,`${label} must contain ${min}–${max} characters.`);return v;};
export const integer=(value,label,min=0,max=100000000)=>{const n=Number(value);requireThat(Number.isInteger(n)&&n>=min&&n<=max,`${label} must be a whole number from ${min} to ${max}.`);return n;};
export const id=(s,prefix)=>`${prefix}-${++s.sequence}`;
export const stamp=()=>new Date().toISOString();
export const find=(records,key,label='Record')=>{const value=records.find(x=>x.id===key);requireThat(value,`${label} was not found.`);return value;};
