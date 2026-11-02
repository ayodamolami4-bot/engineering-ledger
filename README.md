# The Engineering Ledger

The public portfolio of **Ayodamola Adesina**, a full-stack/product engineer working across React, Node.js, Java/Spring Boot and PostgreSQL.

**Portfolio:** https://engineering-ledger.onrender.com  
**Projects:** [ManageOS](https://manageos.onrender.com) · [Multi-Vendor Marketplace](https://marketplace-frontend-sir8.onrender.com)  
**Source:** [ManageOS](https://github.com/ayodamolami4-bot/ManageOS) · [Marketplace backend](https://github.com/ayodamolami4-bot/marketplace-backend)

## What this portfolio demonstrates

- **ManageOS:** company-scoped authorization, roles, project and review workflows, activity records and audit access; React, Node.js/Express, PostgreSQL.
- **Marketplace:** one customer order with vendor-specific sub-orders, transactional stock handling, payment verification and recovery paths; React, Java/Spring Boot, PostgreSQL.
- **Engineering notes:** documented trade-offs. Each note distinguishes an implemented connection from research or design analysis.

> Public screenshots and guided previews are **independent sample-data walkthroughs**. They are not proof of a real paid transaction or a live company workspace. Review source code and test evidence separately. Business outcomes described are hypotheses to measure, **not verified customer impact**.

## Repository structure

| Path | Responsibility |
|---|---|
| `src/content/projects.ts` | Typed registry of cases, decisions, links and workflows |
| `src/content/site.ts` | Public contact information and resume path |
| `src/content/notes.ts` | Engineering notes and evidence labels |
| `src/pages` | Route-specific portfolio content |
| `src/components` | Reusable navigation, visual and case-study components |
| `public/previews` | Fictional, isolated walkthroughs — no production writes |
| `public/documents` | Published resume asset |
| `src/styles/global.css` | Shared styles |

## Run and verify

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run typecheck
npm test
npm run build
npm run dev
```

Check the production site and both live applications manually in a fresh browser session; backend services on free hosting may have a cold start. A successful static build alone does not validate authenticated production paths.

## Evidence hygiene

1. **Implemented** is not interchangeable with **researched** or **proposed**. Keep the distinction explicit.
2. Do not use AI-generated UI illustrations as real production screenshots.
3. Label any fictional orders, audit events, members or organizations as sample data.
4. Avoid invented performance metrics, fabricated customers or claimed revenue.
5. Update old links, resume text and project scope before sharing this portfolio with recruiters.
6. Only describe automation, infrastructure or security controls when implementation and verification are available in the corresponding source repository.

## Publication state

The portfolio and applications have public URLs. This README intentionally does **not** claim a fresh production smoke test, CI result or completed authenticated walkthrough for the current commit. Review the GitHub Actions run and live browser state for those facts.

**Outstanding evidence work:** attach current, sanitized application screenshots; verify demo paths and project links in desktop/mobile browsers; synchronize the published resume PDF with the latest verified CV; collect CI and test links. None of these items should be marked complete until checked.

## Collaboration

Issues and PRs with reproducible engineering observations, failing tests and small scoped fixes are welcome. Please never commit customer information, credentials or live payment records.
