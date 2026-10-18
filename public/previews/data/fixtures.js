// Deliberately fictional and self-contained. These are not copied from live accounts.
function baseManageosFixture(){return {
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
function baseMarketplaceFixture(){return {
 products:[
  {id:'SKU-A',name:'Compact mechanical keyboard',vendor:'Stationery Lab',price:48500,stock:12,icon:'⌨',category:'Electronics'},
  {id:'SKU-B',name:'Adjustable laptop stand',vendor:'Desk & Co.',price:32500,stock:8,icon:'▱',category:'Office'},
  {id:'SKU-C',name:'Canvas work notebook',vendor:'Stationery Lab',price:7900,stock:15,icon:'▤',category:'Stationery'},
  {id:'SKU-D',name:'Desk task lamp',vendor:'Desk & Co.',price:26900,stock:6,icon:'◕',category:'Home & living'}
 ],
 cart:[],wishlist:[],category:'All',query:'',sort:'featured',selectedProduct:'SKU-A',orders:[
 {id:'ORD-DEMO-1042',total:81000,payment:'Confirmed (sample)',status:'CONFIRMED',lines:[{product:'Compact mechanical keyboard',qty:1,vendor:'Stationery Lab',price:48500},{product:'Adjustable laptop stand',qty:1,vendor:'Desk & Co.',price:32500}],suborders:[{id:'SUB-A',vendor:'Stationery Lab',status:'PENDING_FULFILLMENT'},{id:'SUB-B',vendor:'Desk & Co.',status:'PROCESSING'}]},
 {id:'ORD-DEMO-1041',total:26900,payment:'Unsettled (sample)',status:'PENDING_PAYMENT',lines:[{product:'Desk task lamp',qty:1,vendor:'Desk & Co.',price:26900}],suborders:[{id:'SUB-C',vendor:'Desk & Co.',status:'PENDING_PAYMENT'}]}
 ],vendorApplications:[{name:'Fieldwork Supplies',owner:'Reni Bello',status:'PENDING'}],payments:[{reference:'PAY-DEMO-1041',orderId:'ORD-DEMO-1041',status:'UNSETTLED',attempts:1}],events:[{action:'Sample workspace initialized',object:'Demo products, orders and vendors'}],nextOrder:1043,message:''
};}
export const formatMoney=amount=>new Intl.NumberFormat('en-NG',{style:'currency',currency:'NGN',maximumFractionDigits:0}).format(amount);
export const escapeHtml=value=>String(value).replace(/[&<>"']/g,s=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));

export function manageosFixture(){
 const s=baseManageosFixture();
 s.selectedTask=null;s.taskFilter='All';s.openFile=null;
 s.people.push({name:'Reni Bello',role:'EMPLOYEE',unit:'Finance'},{name:'Chidi Nwosu',role:'EMPLOYEE',unit:'Customer Success'},{name:'Bisi Lawal',role:'OWNER',unit:'Leadership'});
 s.units=s.units.map(u=>({...u,members:s.people.filter(p=>p.unit===u.name).length}));
 s.tasks=[
 {id:'TSK-105',title:'Validate reporting ownership',project:'Quarterly reporting',assignee:'Reni Bello',reviewer:'Tomi Eze',status:'PENDING_REVIEW',submission:'Validated the reporting schema against each department and confirmed all ownership assignments.',description:'Validate report definitions and document accountable owners for the quarterly reporting cycle.',submissions:1,reviews:[]},
 {id:'TSK-106',title:'Map the support escalation path',project:'Support escalation redesign',assignee:'Chidi Nwosu',reviewer:'Amina Yusuf',status:'IN_PROGRESS',description:'Document first response, escalation ownership and handoff expectations for the support team.',submissions:0,reviews:[]},
 {id:'TSK-107',title:'Review partner source documents',project:'Partner onboarding refresh',assignee:'Maya Okon',reviewer:'Daniel Adeyemi',status:'APPROVED',submission:'Source documents reviewed and ownership confirmed with the partner team.',submissions:1,reviews:['APPROVED']},
 {id:'TSK-108',title:'Prepare quarterly reporting checklist',project:'Quarterly reporting',assignee:'Reni Bello',reviewer:'Tomi Eze',status:'IN_PROGRESS',description:'Prepare a reusable close checklist with source files and due dates.',submissions:0,reviews:[]},
 {id:'TSK-109',title:'Agree customer response targets',project:'Support escalation redesign',assignee:'Chidi Nwosu',reviewer:'Amina Yusuf',status:'APPROVED',submission:'Response targets agreed with customer success and operations.',submissions:1,reviews:['APPROVED']}];
 s.discussions=[{author:'Daniel Adeyemi',text:'Please confirm the policy owner before submitting the onboarding guide.'},{author:'Maya Okon',text:'The draft is ready. I have raised the wording dependency as a blocker.'},{author:'Amina Yusuf',text:'Customer success will review the first partner handoff after publication.'}];
 s.files=[{name:'Partner onboarding brief.txt',owner:'Daniel Adeyemi',project:'Partner onboarding refresh',body:'Northstar Operations — fictional planning brief. Objective: improve partner onboarding. Milestones: review source documents, publish the guide, confirm adoption. Maya owns the guide; Daniel reviews it. Policy wording must be resolved before submission.'},{name:'Quarterly reporting checklist.txt',owner:'Tomi Eze',project:'Quarterly reporting',body:'Fictional reporting checklist: confirm department ownership; reconcile source figures; review exceptions; request approval; record the decision and archive supporting evidence.'}];
 return s;
}
export function marketplaceFixture(){const s=baseMarketplaceFixture();
 s.products.push(...[
 ['SKU-E','Everyday running shoes','Lagos Active',38500,18,'Fashion'],['SKU-F','Minimal everyday watch','Fieldwork Supplies',29700,9,'Fashion'],['SKU-G','Botanical fragrance','Palm & Petal',18500,14,'Beauty'],['SKU-H','Fresh produce basket','Green Basket',12500,21,'Groceries'],['SKU-I','Training essentials kit','Lagos Active',24000,7,'Sports'],['SKU-J','Wireless over-ear headphones','Stationery Lab',65000,11,'Electronics'],['SKU-K','Linen accent chair','Desk & Co.',145000,4,'Home & living'],['SKU-L','Everyday commuter backpack','Fieldwork Supplies',28000,13,'Fashion']
 ].map(([id,name,vendor,price,stock,category])=>({id,name,vendor,price,stock,category})));
 s.address={name:'Maya Okon',phone:'08000000000',address:'12 Example Street',city:'Ikeja',state:'Lagos',country:'Nigeria',method:'delivery'};
 s.addressSaved=false;s.paymentError='';s.selectedVendor='Stationery Lab';return s;
}
