import test from 'node:test';
import assert from 'node:assert/strict';
import {marketplaceFixture} from '../public/previews/data/fixtures.js';
import {marketplaceAction,marketplaceRender} from '../public/previews/modules/marketplace.js';

test('Sample storefront search, category and sorting are functional rather than ornamental',()=>{
 const s=marketplaceFixture();
 const rerender=()=>marketplaceRender('catalog',s);
 assert.match(rerender(),/aria-label="Search marketplace"/);
 assert.match(rerender(),/id="sample-shop-sort"/);
 assert.match(rerender(),/data-action="filter-Electronics"/);
 marketplaceAction('filter-Electronics',s,()=>{},()=>{});
 assert.equal(s.category,'Electronics');
 assert.match(rerender(),/Compact wireless keyboard/);
 assert.doesNotMatch(rerender(),/Desk task lamp/);
 s.query='zz-no-product-matches';
 assert.match(rerender(),/No sample products match/);
 s.query='';s.category='All';s.sort='price-asc';
 const rendered=rerender();
 assert.ok(rendered.indexOf('Spiral work notebook')<rendered.indexOf('Compact wireless keyboard'));
 assert.match(rendered,/<img src="https:\/\/images.unsplash.com\//);
});

test('Real product case-study screenshots are identified as previews, not production pages',()=>{
 const s=marketplaceFixture();
 const html=marketplaceRender('product',s);
 assert.match(html,/Compact wireless keyboard/);
 assert.match(html,/fictional|sample|illustrative/i);
});

