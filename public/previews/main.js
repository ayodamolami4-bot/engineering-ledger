import {manageosFixture,marketplaceFixture} from './data/fixtures.js';
import {manageosScreens,manageosRender,manageosAction,manageosStories} from './modules/manageos.js';
import {marketplaceScreens,marketplaceRender,marketplaceAction,marketplaceStories} from './modules/marketplace.js';
import {workspaceAction,allTasks} from './modules/workspaces.js';
import {validateAddress,submitWork,completePayment} from './modules/flows.js';
const s={product:'manageos',screen:{manageos:'overview',marketplace:'catalog'},manageos:manageosFixture(),marketplace:marketplaceFixture()};
const $=id=>document.getElementById(id);
let noticeTimer;
function announce(message){$('announcer').textContent=message;clearTimeout(noticeTimer);$('announcer').classList.add('visible');noticeTimer=setTimeout(()=>$('announcer').classList.remove('visible'),5000);}
function setProduct(product){if(!['manageos','marketplace'].includes(product))return;s.product=product;render();}
function setScreen(screen){if(!(s.product==='manageos'?manageosScreens:marketplaceScreens).some(x=>x.id===screen))return;s.screen[s.product]=screen;render();}
function render(){
 const manageos=s.product==='manageos',current=s.screen[s.product];
 document.body.dataset.product=s.product;
 $('back-to-study').href=manageos?'/work/manageos':'/work/marketplace';$('return-to-study').href=$('back-to-study').href;
 $('demo-title').textContent=manageos?'ManageOS':'Marketplace';
 $('demo-description').textContent=manageos?'Northstar Operations — populated company workspace':'Browse the storefront, place a simulated order, then follow seller fulfilment.';
 for(const tab of document.querySelectorAll('[data-product]'))tab.setAttribute('aria-selected',String(tab.dataset.product===s.product));
 $('demo-root').innerHTML=manageos?manageosRender(current,s.manageos):marketplaceRender(current,s.marketplace);
 const [heading,body]=(manageos?manageosStories:marketplaceStories)[current];$('story-title').textContent=heading;$('story-body').textContent=body;
 document.querySelectorAll('[data-route]').forEach(x=>x.classList.toggle('active',x.dataset.route===s.product));
}
document.addEventListener('click',event=>{
 const product=event.target.closest('[data-product]');if(product){location.hash=product.dataset.product;setProduct(product.dataset.product);return;}
 const screen=event.target.closest('[data-screen]');if(screen){if(screen.dataset.screen==='work')s.manageos.selectedTask=null;setScreen(screen.dataset.screen);return;}
 const act=event.target.closest('[data-action]');if(!act)return;
 const action=act.dataset.action;
 if(s.product==='manageos'){
  if(!workspaceAction(action,s.manageos,setScreen,announce))manageosAction(action,s.manageos,setScreen,announce);
 }else{
  const m=s.marketplace;
  if(action.startsWith('decrease-')){const line=m.cart.find(l=>l.id===action.slice(9));if(line&&line.quantity>1)line.quantity--;}
  else if(action==='payment-failure'){m.paymentError='Payment was not completed. Your cart is unchanged. Try again when ready.';announce(m.paymentError);}
  else if(action==='payment-success'){const message=completePayment(m,setScreen);announce(message);}
  else{marketplaceAction(action,m,setScreen,announce);if(action.startsWith('filter-')){m.query='';s.screen.marketplace='catalog';}}
 }
 render();
});
document.addEventListener('change',event=>{if(event.target.id==='sample-shop-sort'){s.marketplace.sort=event.target.value;render();}});
document.addEventListener('submit',event=>{
 const form=event.target.closest('[data-form]');if(!form)return;event.preventDefault();const fields=Object.fromEntries(new FormData(form));
 if(form.dataset.form==='search'){s.marketplace.query=String(fields.query).trim();s.screen.marketplace='catalog';}
 if(form.dataset.form==='delivery'){
  const error=validateAddress(fields);if(error){$('form-error').textContent=error;return;}
  s.marketplace.address=fields;s.marketplace.addressSaved=true;s.screen.marketplace='payment';
 }
 if(form.dataset.form==='submission'){
  const result=submitWork(s.manageos,String(fields.summary));if(result){announce(result);return;}
  announce('Work submitted for review');
 }
 if(form.dataset.form==='discussion'){const message=String(fields.message).trim();if(!message)return;s.manageos.discussions.push({author:'Daniel Adeyemi',text:message});announce('Reply posted');}
 render();
});
$('reset-demo').addEventListener('click',()=>{if(s.product==='manageos'){s.manageos=manageosFixture();s.screen.manageos='overview';}else{s.marketplace=marketplaceFixture();s.screen.marketplace='catalog';}announce('Demo sample restored');render();});
function applyHash(){const product=location.hash.slice(1);if(['manageos','marketplace'].includes(product))setProduct(product);}
window.addEventListener('hashchange',applyHash);applyHash();render();
