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

Local domain/renderer tests and the production build pass. The expanded browser journey is committed, but the initial PR #4 GitHub Actions attempt failed before runner allocation (empty steps; no browser execution or screenshots). Browser/visual verification remains pending; do not interpret the local tests as visual approval.

## Social sharing cover

The initial HTML includes Open Graph and Twitter large-image metadata, pointing to `public/social/engineering-ledger.png` on the Render portfolio domain. The 1200 × 630 PNG and editable SVG use the actual bridge component. `node scripts/generate-sharing-cover.mjs` regenerates the SVG; rasterize it to PNG after artwork changes. Static route shells retain the image metadata and set their own `og:url` so crawlers do not need JavaScript.

The cover has been rendered and visually inspected locally. Its metadata and PNG dimensions are tested. Actual platform unfurling can only be confirmed after deployment and may depend on platform caches. This check does not replace the pending application browser/layout review.
