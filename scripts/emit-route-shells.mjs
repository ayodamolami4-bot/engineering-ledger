/**
 * Render static sites created outside a Blueprint do not automatically consume
 * render.yaml's `routes` rule. Emit a real index.html at every known editorial
 * route so visiting or refreshing a case study never depends on SPA rewrites.
 * Keep the normal SPA router for in-app navigation.
 */
import {readFileSync, mkdirSync, writeFileSync, existsSync} from 'node:fs';
import {join} from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
if (!existsSync(join(dist, 'index.html'))) throw new Error('Run Vite build before generating route shells.');
const html = readFileSync(join(dist, 'index.html'), 'utf8');
const projectsSource = readFileSync(join(root, 'src/content/projects.ts'), 'utf8');
const notesSource = readFileSync(join(root, 'src/content/notes.ts'), 'utf8');
const projectSlugs = [...projectsSource.matchAll(/\bslug:\s*'([a-z0-9-]+)'/g)].map(m => m[1]);
const noteSlugs = [...notesSource.matchAll(/\bslug:\s*'([a-z0-9-]+)'/g)].map(m => m[1]);
const routes = [
  'work', 'notes', 'about', 'contact',
  ...projectSlugs.map(slug => `work/${slug}`),
  ...noteSlugs.map(slug => `notes/${slug}`),
];
if (projectSlugs.length < 2 || noteSlugs.length < 4) throw new Error('Unexpected route registry; refusing to publish incomplete page shells.');
for (const route of routes) {
  const folder = join(dist, ...route.split('/'));
  mkdirSync(folder, {recursive:true});
  writeFileSync(join(folder, 'index.html'), html.replace('property="og:url" content="https://engineering-ledger.onrender.com/"', `property="og:url" content="https://engineering-ledger.onrender.com/${route}/"`));
}
console.log(`Generated ${routes.length} static route entry points to support deep links on Render.`);

