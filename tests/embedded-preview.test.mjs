import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const text = path => readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
test('Case studies embed the current sample UI, not stale screenshot assets',()=>{
 assert.match(text('src/components/ProjectPreview.tsx'),/iframe title=/);
 assert.match(text('src/components/ProjectPreview.tsx'),/embed=1/);
 assert.doesNotMatch(text('src/components/ProjectPreview.tsx'),/project\.previewScreenshot/);
 assert.match(text('public/previews/index.html'),/classList\.toggle/);
});
