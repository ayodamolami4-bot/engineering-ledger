import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
test('Social crawlers receive a large raster cover without running JavaScript',()=>{
 const html=readFileSync('index.html','utf8');
 assert.match(html,/<meta name="twitter:card" content="summary_large_image"/);
 assert.match(html,/<meta property="og:image" content="https:\/\/engineering-ledger.onrender.com\/social\/engineering-ledger.png"/);
 assert.match(html,/<meta property="og:image:alt" content="[^"]+"/);
 const png=readFileSync('public/social/engineering-ledger.png');assert.equal(png.subarray(1,4).toString(),'PNG');assert.equal(png.readUInt32BE(16),1200);assert.equal(png.readUInt32BE(20),630);assert.ok(png.length<2000000);
});
