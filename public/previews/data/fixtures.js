// Deliberately fictional and self-contained. These are not copied from live accounts.
export function manageosFixture(){return {
 company:'Northstar Operations (sample)',
 units:[{name:'Operations',lead:'Daniel Adeyemi',members:5},{name:'Finance',lead:'Tomi Eze',members:3},{name:'Customer Success',lead:'Amina Yusuf',members:4}],
 people:[{name:'Maya Okon',role:'EMPLOYEE',unit:'Operations'},{name:'Daniel Adeyemi',role:'MANAGER',unit:'Operations'},{name:'Tomi Eze',role:'TEAM_LEAD',unit:'Finance'},{name:'Amina Yusuf',role:'TEAM_LEAD',unit:'Customer Success'}],
 goals:[{id:'GOAL-01',name:'Improve partner onboarding',owner:'Operations',state:'In progress'},{id:'GOAL-02',name:'Strengthen reporting consistency',owner:'Leadership',state:'In progress'},{id:'GOAL-03',name:'Reduce support handoff delays',owner:'Customer Success',state:'In progress'}],
 projects:[{id:'PRJ-01',name:'Partner onboarding refresh',unit:'Operations',goal:'GOAL-01',state:'On track',milestones:['Review source documents','Publish onboarding guide','Confirm adoption']},{id:'PRJ-02',name:'Quarterly reporting',unit:'Finance',goal:'GOAL-02',state:'Review',milestones:['Agree reporting schema','Validate ownership']},{id:'PRJ-03',name:'Support escalation redesign',unit:'Customer Success',goal:'GOAL-03',state:'Planning',milestones:['Map escalation path','Pilot handoff']}],
 task:{id:'TSK-104',title:'Publish partner onboarding guide',project:'Partner onboarding refresh',assignee:'Maya Okon',reviewer:'Daniel Adeyemi',status:'IN_PROGRESS',submissions:0,reviews:[]},
 blocker:{id:'BLK-07',title:'Waiting for final policy wording',owner:'Daniel Adeyemi',status:'OPEN'},
 updates:[{author:'Maya Okon',text:'Draft reviewed with partner team',scope:'Partner onboarding refresh'},{author:'Tomi Eze',text:'Finance report schema agreed',scope:'Quarterly reporting'}],
 requests:[{subject:'Policy owner confirmation',owner:'Daniel Adeyemi',status:'PENDING'}],
 events:[{actor:'System',action:'Sample workspace initialized',object:'Demo data',time:'Step 0'},{actor:'Daniel Adeyemi',action:'Task assigned',object:'TSK-104 · Maya Okon',time:'Step 0'}],
 notifications:[{to:'Maya Okon',message:'Task assigned: onboarding guide',read:false}],step:0
};}
export function marketplaceFixture(){return {
 products:[
  {id:'SKU-A',name:'Compact mechanical keyboard',vendor:'Stationery Lab',price:48500,stock:12,icon:'⌨'},
  {id:'SKU-B',name:'Adjustable laptop stand',vendor:'Desk & Co.',price:32500,stock:8,icon:'▱'},
  {id:'SKU-C',name:'Canvas work notebook',vendor:'Stationery Lab',price:7900,stock:15,icon:'▤'},
  {id:'SKU-D',name:'Desk task lamp',vendor:'Desk & Co.',price:26900,stock:6,icon:'◕'}
 ],
 cart:[],wishlist:[],orders:[
 {id:'ORD-DEMO-1042',total:81000,payment:'Confirmed (sample)',status:'CONFIRMED',lines:[{product:'Compact mechanical keyboard',qty:1,vendor:'Stationery Lab',price:48500},{product:'Adjustable laptop stand',qty:1,vendor:'Desk & Co.',price:32500}],suborders:[{id:'SUB-A',vendor:'Stationery Lab',status:'PENDING_FULFILLMENT'},{id:'SUB-B',vendor:'Desk & Co.',status:'PROCESSING'}]},
 {id:'ORD-DEMO-1041',total:26900,payment:'Unsettled (sample)',status:'PENDING_PAYMENT',lines:[{product:'Desk task lamp',qty:1,vendor:'Desk & Co.',price:26900}],suborders:[{id:'SUB-C',vendor:'Desk & Co.',status:'PENDING_PAYMENT'}]}
 ],vendorApplications:[{name:'Fieldwork Supplies',owner:'Reni Bello',status:'PENDING'}],payments:[{reference:'PAY-DEMO-1041',orderId:'ORD-DEMO-1041',status:'UNSETTLED',attempts:1}],events:[{action:'Sample workspace initialized',object:'Demo products, orders and vendors'}],nextOrder:1043,message:''
};}
export const formatMoney=amount=>new Intl.NumberFormat('en-NG',{style:'currency',currency:'NGN',maximumFractionDigits:0}).format(amount);
export const escapeHtml=value=>String(value).replace(/[&<>"']/g,s=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
