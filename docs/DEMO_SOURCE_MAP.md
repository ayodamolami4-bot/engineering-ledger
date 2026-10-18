# Independent product demonstrations

These demos live only in engineering-ledger/public/previews. They do not import production API clients, use production credentials, or mutate either application database. Fictional state is newly created in memory on page load and reset.

## Source inspected before implementation

- ManageOS main `2cf6668b1095b8c74078cba3fff60f61b0c88bc6`: frontend/src/layouts/AppLayout.jsx and AppLayout.css; pages/app/Overview.jsx and Overview.css; Projects.jsx; Work.jsx; components/TaskWorkflowPanel.jsx.
- marketplace-frontend main `526913ae9b9296a5181d61ab2407595a9edbc560`: Navbar.jsx/css; customer/products/Products.jsx/css; ProductDetails.jsx; cart/Cart.jsx/css; payments/Payment.jsx/css; Orders.jsx; VendorLayout.jsx/css; AdminLayout.jsx/css.

Original CSS copies are in app-styles with adapter overrides in adapters.css. Product layout markup is adapted in modules/workspaces.js. React authentication and API code are deliberately not imported into the standalone demo.

## State and transitions

- data/fixtures.js owns fictional records and produces independent fixtures.
- modules/flows.js validates delivery, applies work submissions, and coordinates the checkout boundary.
- modules/manageos.js owns existing blocker/review/audit transitions.
- modules/marketplace.js owns cart/stock/order/payment-reconciliation/fulfilment transitions.
- main.js binds forms and navigation to these transitions. It does not send form data to an API or save browser storage.

The demo simulates user-visible workflows; it does not reproduce server-side authorization, database locks or Paystack verification. Existing aggregate analytics remains in the outer demo document. Product photography is fetched from Unsplash, with distinct image URLs per product; these illustrative images are not live inventory.

## Validation

`npm test` checks connected records, validation, escaped content, stock changes, duplicate protections and fixture independence. `npm run build` type-checks and emits production routes. GitHub Actions runs scripts/browser-journeys.mjs against the built site, including 1440px and 390px views, and uploads screenshots.

The portfolio hero uses an original SVG bridge perspective study. It is a conceptual architectural illustration, not an engineering drawing suitable for construction.
