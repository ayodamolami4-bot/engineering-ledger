import test from 'node:test';
import assert from 'node:assert/strict';
import {manageosFixture,marketplaceFixture} from '../public/previews/data/fixtures.js';
import {submitWork,validateAddress,completePayment} from '../public/previews/modules/flows.js';
import {workspaceAction,manageosRender,marketplaceRender} from '../public/previews/modules/workspaces.js';
import {marketplaceAction} from '../public/previews/modules/marketplace.js';
const quiet=()=>{};
test('Task submission, rejection, resubmission and approval retain evidence and update notifications',()=>{
 const s=manageosFixture();s.selectedTask='TSK-106';const t=s.tasks.find(t=>t.id===s.selectedTask);
 assert.match(submitWork(s,'short'),/12 characters/);assert.equal(t.status,'IN_PROGRESS');
 assert.equal(submitWork(s,'Escalation paths documented and reviewed with the support team.'),'');
 workspaceAction('task-reject',s,quiet,quiet);assert.equal(t.status,'IN_PROGRESS');
 assert.equal(submitWork(s,'Revised handoff matrix with named owners and response targets.'),'');
 workspaceAction('task-approve',s,quiet,quiet);workspaceAction('task-approve',s,quiet,quiet);
 assert.equal(t.status,'APPROVED');assert.equal(t.submissions,2);assert.equal(t.reviews.length,2);
 assert.equal(s.events.filter(e=>e.object===t.id&&e.action==='Task submission approved').length,1);
 assert.match(manageosRender('work',s),/Revised handoff matrix/);assert.ok(s.notifications.some(n=>n.message.includes(t.id)));
});
test('Checkout validates address, creates one parent order, preserves vendor ownership and reduces stock once',()=>{
 const s=marketplaceFixture();marketplaceAction('add-SKU-A',s,quiet,quiet);marketplaceAction('add-SKU-B',s,quiet,quiet);
 const count=s.orders.length,stock=s.products[0].stock;
 assert.match(completePayment(s,quiet),/delivery/);assert.equal(s.orders.length,count);
 assert.match(validateAddress({...s.address,city:'12345'}),/city/);assert.match(validateAddress({...s.address,state:'2'}),/state/);
 assert.match(validateAddress({...s.address,address:'123456'}),/street/);
 assert.equal(validateAddress(s.address),'');s.addressSaved=true;completePayment(s,quiet);completePayment(s,quiet);
 assert.equal(s.orders.length,count+1);assert.equal(s.products[0].stock,stock-1);assert.equal(s.orders.at(-1).suborders.length,2);
 assert.equal(s.orders.at(-1).address.city,'Ikeja');assert.equal(s.cart.length,0);
});
test('Demo fixtures are independent and submitted content is escaped',()=>{
 const a=manageosFixture(),b=manageosFixture();a.selectedTask='TSK-106';submitWork(a,'<script>alert("unsafe")</script>');
 assert.equal(b.tasks[1].status,'IN_PROGRESS');assert.doesNotMatch(manageosRender('work',a),/<script>/);
 const m=marketplaceFixture();m.query='"/><script>bad</script>';assert.doesNotMatch(marketplaceRender('catalog',m),/<script>/);
});
