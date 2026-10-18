# Independent product demonstrations

These demos live only in engineering-ledger/public/previews. They do not import production API clients, use production credentials, or mutate either application database. Fictional state is newly created in memory on page load and reset.

## Source inspected before implementation

- ManageOS main `2cf6668b1095b8c74078cba3fff60f61b0c88bc6`: frontend/src/layouts/AppLayout.jsx and AppLayout.css; pages/app/Overview.jsx and Overview.css; Projects.jsx; Work.jsx; components/TaskWorkflowPanel.jsx.
- marketplace-frontend main `526913ae9b9296a5181d61ab2407595a9edbc560`: Navbar.jsx/css; customer/products/Products.jsx/css; ProductDetails.jsx; cart/Cart.jsx/css; payments/Payment.jsx/css; Orders.jsx; VendorLayout.jsx/css; AdminLayout.jsx/css.

Original CSS copies are in app-styles with adapter overrides in adapters.css. Product layout markup is adapted in views/operations.js and views/commerce.js. React authentication and API code are deliberately not imported into the standalone demo.

## State and transitions

- data/fixtures.js owns fictional records and produces independent fixtures.
- domain/operations.js normalizes the fictional company, binds commands to the selected person, and enforces project/unit scope before state transitions.
- domain/commerce.js connects account facets, store-scoped inventory/orders/coupons, customer purchases, payment simulations and administrator decisions.
- views/ contains the source-inspired application shells, role-specific navigation, forms and record views.
- main.js binds identity switches, forms, navigation and local file/photo reads to domain commands. It does not send form data to an API or save browser storage.

The demo simulates user-visible workflows; it does not reproduce server-side authorization, database locks or Paystack verification. Existing aggregate analytics remains in the outer demo document. Product photography is fetched from Unsplash, with distinct image URLs per product; these illustrative images are not live inventory.

## Validation

`npm test` checks connected records, validation, escaped content, stock changes, duplicate protections and fixture independence. `npm run build` type-checks and emits production routes. GitHub Actions runs scripts/browser-journeys.mjs against the built site, including 1440px, 768px and 390px views, and uploads screenshots.

The portfolio hero uses an original SVG bridge perspective study. It is a conceptual architectural illustration, not an engineering drawing suitable for construction.

## Perspective and experience contract

| Experience | Identity and scope | Connected workflow |
| --- | --- | --- |
| ManageOS Owner | Bisi, company-wide | Goals, hierarchy, invitations/access, project leadership, audit |
| Company Manager | Daniel, all units | Planning, assignment, dependencies and review; cannot grant Manager access |
| Scoped Manager | Kemi, Operations only | Operations projects and decisions; no company audit or unrelated project mutation |
| Team Lead | Tomi in Finance / Amina in Customer Success | Their project delivery, assignments and review |
| Employee | Maya / Reni / Chidi | Visible project context, own work evidence, requests, discussions and files |
| Customer | Maya or any seller's customer facet | Personal cart/wishlist/address, vendor coupon, COD or simulated payment, order timeline and delivered-item reviews |
| Seller | Daniel at Stationery Lab / Amina at Desk & Co. | Own products/photos/inventory, coupons, order portions and financial totals |
| Applicant | Reni, same existing customer account | Submit application, receive decision, gain Seller Center on approval |
| Administrator | Tomi | Vendor applications, account suspension, categories and purchased-review moderation |

Guided handoffs switch identity explicitly. Free navigation remains available. Notification links carry the actual record ID. Work review keeps every submission and feedback round, with successful review completing the task. Seller fulfilment cannot alter another store's portion. Coupon totals discount only eligible store lines. Checkout reserves stock once; delayed/failed callbacks retain the reservation and repeated successful reconciliation is idempotent. Courier arrival is labelled as a demo event, separate from seller fulfilment.

## Deliberate simulation boundaries

No real invitations, authentication, payments, payouts or courier requests are sent. Attachments are plain text up to 200 KB; product photos are local raster images up to 1 MB. All state and local uploads disappear on reset/reload. This demonstrates user-visible permission behavior, not production-grade server authorization or concurrency. Payment callbacks and courier arrival are simulation controls rather than invented customer permissions. Product photography remains illustrative.

## Verification for the perspective revision

The 15 local domain/renderer/metadata tests and production build pass. The user ran the complete browser journey successfully on Windows with Node.js 22.20.0 on 2026-10-18, including the final category-label geometry, compact navigation and confirmation-cleanup assertions.

All 21 screenshots in the final `ledger-final-review.zip` were inspected: the portfolio home at 1440px, 768px and 390px; ManageOS owner, scoped manager, employee and reviewer views; Marketplace customer, seller and administrator views; and order tracking. The first review's vertical category heading, oversized tablet navigation and stale cross-context confirmations are corrected in the final captures. The bridge is visible within the mobile/tablet layout. No blocking clipping or overlap was found in these captured views. See `VERIFICATION_2026-10-18.md` for the evidence inventory and test scope.

GitHub-hosted verification remains blocked by the account billing/spending restriction confirmed in the job annotation. The passing browser evidence comes from the user's local Windows run. Deployment and actual social-platform unfurling are separate post-merge checks.

## Social sharing cover

The initial HTML includes Open Graph and Twitter large-image metadata, pointing to `public/social/engineering-ledger.png` on the Render portfolio domain. The 1200 × 630 PNG and editable SVG use the actual bridge component. `node scripts/generate-sharing-cover.mjs` regenerates the SVG; rasterize it to PNG after artwork changes. Static route shells retain the image metadata and set their own `og:url` so crawlers do not need JavaScript.

The cover has been rendered and visually inspected locally. Its metadata and PNG dimensions are tested. Actual platform unfurling can only be confirmed after deployment and may depend on platform caches. This check does not replace the pending application browser/layout review.

## Browser checks without GitHub Actions

The PR #4 job annotation confirms that GitHub hosted Actions is blocked by account billing/spending limits. The separate Ubuntu migration annotation is informational. No test steps ran; this is not a browser test result.

On a local computer, open this repository on `codex/role-based-project-experiences` with Node.js 22 or later, then run:

```sh
npm ci
npx playwright install chromium
npm run test:browser
```

`test:browser` builds the portfolio, starts a loopback-only preview on an available port, runs the same desktop/mobile journeys, writes screenshots to `test-artifacts`, and stops the preview. It works from PowerShell or a Unix shell. Linux machines may need `npx playwright install --with-deps chromium` instead. The first browser download needs an internet connection. This route does not use GitHub Actions minutes or change account billing. Upload the screenshots with the console result for visual review before merging.
