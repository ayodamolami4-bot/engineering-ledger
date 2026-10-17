import test from 'node:test';
import assert from 'node:assert/strict';
import {manageosFixture,marketplaceFixture,escapeHtml,formatMoney} from '../public/previews/data/fixtures.js';
import {manageosAction,manageosRender} from '../public/previews/modules/manageos.js';
import {marketplaceAction,marketplaceRender} from '../public/previews/modules/marketplace.js';

test('ManageOS demo: cannot bypass review; submission and approval leave audit evidence',()=>{
 const s=manageosFixture();let screen='work';let announcement='';
 const goto=x=>screen=x, announce=x=>announcement=x;
 manageosAction('manageos-approve',s,goto,announce);
 assert.equal(s.task.status,'IN_PROGRESS','Cannot approve without a submission');
 manageosAction('manageos-submit',s,goto,announce);
 assert.equal(s.task.status,'PENDING_REVIEW');assert.equal(screen,'review');
 assert.match(announcement,/sample/i);
 manageosAction('manageos-submit',s,goto,announce);
 assert.equal(s.events.filter(x=>x.action==='Task submitted for review').length,1,'Repeated submission has no duplicate effect in demo');
 manageosAction('manageos-approve',s,goto,announce);
 assert.equal(s.task.status,'APPROVED');assert.equal(screen,'audit');
 assert.equal(s.events.filter(x=>x.action==='Task submission approved').length,1);
 assert.match(manageosRender('audit',s),/Task submission approved/);
});

test('Marketplace demo: one parent order, independent vendor sub-orders, simulated only',()=>{
 const s=marketplaceFixture();let screen='',announcement='';
 const goto=x=>screen=x,announce=x=>announcement=x;
 const before=s.orders.length;
 marketplaceAction('add-SKU-A',s,goto,announce);
 marketplaceAction('add-SKU-B',s,goto,announce);
 assert.equal(s.cart.length,2);
 marketplaceAction('marketplace-place',s,goto,announce);
 assert.equal(s.orders.length,before+1);assert.equal(s.cart.length,0);
 assert.equal(screen,'orders');assert.match(announcement,/sample memory/);
 const order=s.orders.at(-1);assert.equal(order.suborders.length,2);
 assert.deepEqual(order.suborders.map(x=>x.vendor),['Stationery Lab','Desk & Co.']);
 const a=order.suborders[0];const b=order.suborders[1];
 marketplaceAction(`advance-${order.id}-${a.id}`,s,goto,announce);
 assert.equal(a.status,'PROCESSING');assert.equal(b.status,'PENDING_FULFILLMENT');
 assert.match(marketplaceRender('orders',s),/ORD-DEMO/);
});

test('Demo data escaping and sample labels',()=>{
 assert.equal(escapeHtml('<b>"hello" & stuff</b>'),'&lt;b&gt;&quot;hello&quot; &amp; stuff&lt;/b&gt;');
 assert.match(formatMoney(25000),/₦/);
 assert.match(manageosFixture().company,/sample/i);
 assert.match(marketplaceFixture().orders[0].payment,/sample/i);
});
