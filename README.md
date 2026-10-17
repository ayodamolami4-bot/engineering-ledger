# The Engineering Ledger

A portfolio for Product Engineer / Full-Stack Software Engineer Ayodamola Adesina. Its content and previews are deliberately separate from the real ManageOS and Marketplace applications.

## Local setup

Requires Node.js 20.19+ or 22.12+ and an npm connection:

```bash
npm install
npm run dev
npm run typecheck
npm test
npm run build
```

Build output: `dist/`. Deployment: prefer a **Render static site** in the existing Render account (not a sleeping free web service). The repository includes `render.yaml` for a static build, `dist` publishing, and SPA fallback. Cloudflare Pages is also an option. The GitHub Actions workflow tests and builds on every pull request and main-branch push.

## Architecture

- `src/content/projects.ts` — one typed project registry that drives the project list and case-study routes.
- `src/content/site.ts` — a single source for public identity, contact and resume URLs.
- `src/content/notes.ts` — filtered engineering field-note catalogue; patterns are categorized and labeled as implemented or researched.
- `src/components` — reusable site navigation, project features, hexagonal graphics and pattern cards.
- `src/pages` — page-specific compositions, no duplicated project data.
- `src/styles/global.css` — shared design tokens and responsive styles.
- `public/previews` — **independent, static** guided demos using fictional records and browser-tab-only state. They make no real payments and never call production backends.
- `public/documents` — resume PDF. Verify personal contact information before publishing publicly.

### Add a project later

1. Add a new complete `Project` entry to `src/content/projects.ts` with a unique slug. The reusable case-study page and project cards update automatically.
2. Add real, sanitized product screenshots when available and fill `previewScreenshot` with a genuine sample-preview image in the meantime. Always label sample images as such.
3. Provide a `demoPath` that resolves to a sample-data demo, or adapt the card to hide the preview action until a real walkthrough exists. Do not leave dead links.
4. Run `npm run build` and check desktop/mobile and all links.

## Evidence and publication rules

- **The preview is not the live product.** All sample records are fictional and independently simulated.
- Business benefits are *potential mechanisms*, not independently measured savings.
- Notes labelled research / design analysis do not imply the pattern was deployed.
- Use actual, sanitized product screenshots when capture becomes available. Do not substitute AI-generated product UIs as evidence.
- Source code is preparatory until dependencies are installed and a successful build and browser check are completed.
- Deployment and new GitHub repository creation are separate tasks; this package does not claim they are completed.

## Verification and publication status

- `npm test` runs Node.js unit tests against the self-contained sample workflows (including the audit event and parent/sub-order states).
- The project source was checked for TypeScript/TSX parser errors using a locally available TypeScript compiler. That is **not** the same as a full type-check or successful Vite build.
- Full `npm install`, type-check and Vite build need a normal networked Node.js environment or the GitHub Actions CI workflow once this code is pushed.
- Authenticated production screenshots still require an authorized interactive browser session in each application. No credentials or customer records should be extracted into the portfolio.
- Live production apps and their databases must remain separate from sample-data previews.
- The ManageOS source repository is private and is intentionally not linked to the public project card. Marketplace backend is a public repository.

## Publishing checklist

1. Create an empty private GitHub repository named `engineering-ledger`; no existing production repo should be repurposed.
2. Push the source from this directory. Do not commit `node_modules`, generated `dist`, or any private product data.
3. Allow CI to install dependencies, execute tests and run the Vite production build. Resolve any failures before publishing.
4. Connect `engineering-ledger` in Render as a **static site**, not a web service. Use `npm install --no-audit --no-fund && npm run build` and publish `dist`, and configure `/*` → `/index.html` rewrite.
5. Review public contact/resume details, link targets, text contrast, navigation, mobile layout and accessible motion. Replace sample-preview images with production screenshots only if captured from authorized clean test accounts and explicitly labeled as genuine.
6. Publish when approved; the generated Render static URL does not require purchasing a domain or keeping a backend awake.
