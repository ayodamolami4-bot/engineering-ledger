// Deliberately fictional, self-contained sample data. Never copied from production.
export function manageosFixture() {
  return {
    company: 'Northstar Operations (sample)',
    goals: [{ id:'GOAL-01', name:'Improve partner onboarding', owner:'Operations', state:'In progress' },{ id:'GOAL-02', name:'Strengthen reporting consistency', owner:'Leadership', state:'In progress'}],
    projects:[{id:'PRJ-01',name:'Partner onboarding refresh',unit:'Operations',goal:'GOAL-01',state:'On track'}, {id:'PRJ-02',name:'Quarterly reporting',unit:'Finance',goal:'GOAL-02',state:'Review'}],
    task: {id:'TSK-104', title:'Publish partner onboarding guide', project:'Partner onboarding refresh', assignee:'Maya Okon', reviewer:'Daniel Adeyemi',status:'IN_PROGRESS'},
    events:[{actor:'System',action:'Sample workspace initialized',object:'Demo data',time:'Step 0'},{actor:'Daniel Adeyemi',action:'Task assigned',object:'TSK-104 · Maya Okon',time:'Step 0'}],
    step:0
  };
}
export function marketplaceFixture() {
  return {
    products: [
      {id:'SKU-A',name:'Compact mechanical keyboard',vendor:'Stationery Lab',price:48500,stock:12,icon:'⌨'},
      {id:'SKU-B',name:'Adjustable laptop stand',vendor:'Desk & Co.',price:32500,stock:8,icon:'▱'},
    ],
    cart:[],
    orders:[{id:'ORD-DEMO-1042', total:81000, payment:'Confirmed (sample)', status:'CONFIRMED', lines:[{product:'Compact mechanical keyboard',qty:1,vendor:'Stationery Lab',price:48500},{product:'Adjustable laptop stand',qty:1,vendor:'Desk & Co.',price:32500}],suborders:[{id:'SUB-A',vendor:'Stationery Lab',status:'PENDING_FULFILLMENT'},{id:'SUB-B',vendor:'Desk & Co.',status:'PROCESSING'}]}],
    nextOrder:1043,
    message:'',
  };
}
export const formatMoney = amount => new Intl.NumberFormat('en-NG',{style:'currency',currency:'NGN',maximumFractionDigits:0}).format(amount);
export const escapeHtml = value => String(value).replace(/[&<>"']/g, s=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
