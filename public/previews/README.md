# The Engineering Ledger — recruiter guided-preview prototype

**Status:** self-contained functional prototype, *not* production product screenshots or a complete portfolio site.

## Included

- ManageOS guided flow: sample company overview → task submission → review approval → audit record.
- Marketplace guided flow: product catalog → simulated checkout → one customer order / multiple vendor sub-orders → vendor fulfilment updates.
- Fictional data fixtures in `data/fixtures.js`; resets per page load and on the Reset button.
- Responsive, accessible shell in the approved paper/ink/copper/celadon editorial styling with a restrained hexagonal design motif.
- No API requests, account access, payment requests, tracking, credentials, remote assets, or external dependencies.

## Run

From this directory:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. ES modules need an HTTP server; double-clicking `index.html` may fail due to browser file restrictions.

## Important boundaries

These two guided flows are **illustrative scenarios**. Their data, timestamps, names, statuses and monetary amounts are fictional. Their simplified frontend state does **not** model server-side security, concurrency, actual payment processing, authorization, tenant isolation, persistence, or a production audit implementation. Project case studies may link to verified repository evidence, but should not describe this preview as proof that the product itself performs a particular action.

## Integration path

Move `data/fixtures.js` and `modules` logic into typed fixtures and isolated React components when implementing the final React + TypeScript + Vite portfolio. Keep demo state separate from all live application configuration and credentials. No production repositories have been changed.

## Authentic screenshots

Take genuine application screenshots only after an authenticated browser session has been authorized. This prototype must never be passed off as a screenshot of the production frontend.
