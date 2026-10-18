import {allTasks} from './workspaces.js';
import {marketplaceAction} from './marketplace.js';
export function validateAddress(f){
 const place=/^[\p{L}][\p{L}\s.'’-]{1,79}$/u;
 if(!place.test(String(f.name||'').trim()))return 'Enter a recipient name using letters.';
 if(!/^\+?[0-9 ()-]{10,18}$/.test(String(f.phone||'')))return 'Enter a valid phone number.';
 if(!/[\p{L}]/u.test(String(f.address||''))||String(f.address||'').trim().length<6)return 'Enter a street address with a street name.';
 if(!place.test(String(f.city||'').trim()))return 'Enter a valid city name using letters.';
 if(!place.test(String(f.state||'').trim()))return 'Enter a valid state name using letters.';
 if(f.country!=='Nigeria')return 'Choose a supported country.';
 if(!['delivery','pickup'].includes(f.method))return 'Choose a delivery method.';
 return '';
}
export function submitWork(s,summary){
 const task=allTasks(s).find(t=>t.id===s.selectedTask);
 if(!task||task.status!=='IN_PROGRESS')return 'This task cannot be submitted in its current state.';
 if(task.id===s.task.id&&s.blocker.status==='OPEN')return 'Resolve the blocker before submitting.';
 if(summary.trim().length<12)return 'Add a completion summary of at least 12 characters.';
 task.submission=summary.trim();task.submissions++;task.status='PENDING_REVIEW';s.events.push({actor:task.assignee,action:'Task submitted for review',object:task.id,time:`Step ${++s.step}`});s.notifications.unshift({to:task.reviewer,message:`Review requested for ${task.id}`,read:false});return '';
}
export function completePayment(s,go){
 if(!s.cart.length)return 'Your cart is empty.';
 if(!s.addressSaved||validateAddress(s.address))return 'Save valid delivery details before payment.';
 let message='';const before=s.orders.length;
 marketplaceAction('marketplace-place',s,go,m=>message=m);
 if(s.orders.length>before){s.orders.at(-1).address={...s.address};s.paymentError='';s.addressSaved=false;}
 return message;
}
