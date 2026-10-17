import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('Cloudflare beacon is present once on the portfolio and standalone recruiter demo', () => {
  function tokenFor(path) {
    const html = read(path);
    const beaconSrc = 'https://static.cloudflareinsights.com/beacon.min.js';
    assert.equal(html.split(beaconSrc).length - 1, 1, `Expected one beacon in ${path}`);
    const configAttribute = html.match(/data-cf-beacon='([^']+)'/);
    assert.ok(configAttribute, `Expected Cloudflare configuration in ${path}`);
    const token = JSON.parse(configAttribute[1]).token;
    assert.match(token, /^[a-f0-9]{32}$/);
    return token;
  }

  assert.equal(tokenFor('index.html'), tokenFor('public/previews/index.html'));
});

test('Contact identities are clickable and use centrally configured URLs', () => {
  const contact = read('src/pages/Contact.tsx');
  const details = read('src/content/site.ts');
  assert.match(details, /email: '[^']+@[^']+'/);
  assert.ok(details.includes("linkedin: 'https://www.linkedin.com/in/"));
  assert.ok(details.includes("github: 'https://github.com/"));
  assert.ok(contact.includes('className="contact-identity" href={`mailto:${site.email}`}'));
  assert.ok(contact.includes('href={site.linkedin}'));
  assert.ok(contact.includes('href={site.github}'));
  assert.equal(contact.split('className="contact-identity"').length - 1, 3);
});
