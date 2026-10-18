import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
test('Editorial navigation has a back action, real stack, authored essays and subtle hexagons',()=>{
 assert.match(read('src/components/SiteShell.tsx'),/goBack/);
 assert.match(read('src/pages/About.tsx'),/Kubernetes/);
 assert.match(read('src/pages/About.tsx'),/Jenkins/);
 assert.match(read('src/pages/About.tsx'),/JUnit 5/);
 assert.match(read('src/pages/Home.tsx'),/BridgeStudy/);
 assert.match(read('src/styles/editorial.css'),/hex-surface::before/);
 const notePage=read('src/pages/Note.tsx');
 assert.ok(!notePage.includes('Further reading'));
 assert.ok(!notePage.includes('n.source.url'));
 const essays=read('src/content/noteEssays.ts');
 assert.match(notePage,/What this record is/);
});


test('The static route shell script exists so deep links do not require a Render rewrite',()=>{
 assert.match(read('package.json'),/emit-route-shells/);
 const source=read('scripts/emit-route-shells.mjs');
 assert.match(source,/join\(folder, 'index.html'\)/);
 assert.match(source,/work\/\$\{slug\}/);
 assert.match(source,/notes\/\$\{slug\}/);
});

