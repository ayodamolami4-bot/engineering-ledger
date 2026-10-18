# Portfolio verification — 18 October 2026

Application revision corresponding to the supplied source replacements: `399d0e6182e1da4a530487f0bf492bc7d589959b`. This record adds documentation without changing the verified application files.

## Executed checks

- Local automated tests: 15 passed.
- Type-check, Vite production build and 18 static route shells: passed.
- Full browser journey: passed on the user’s Windows computer, Node.js 22.20.0, Playwright Chromium. The user supplied the final console result.
- Journey scope: identity boundaries, feedback/review/resubmission, notification deep links, text attachment download, invitations, mixed-store coupons and checkout, payment replay, store-specific fulfilment, delivered-product review moderation, same-account seller approval/product creation.
- Responsive assertions: 390px/768px document bounds, one-line category labels, navigation height below 240px, old confirmation cleanup.
- Visual inspection: all 21 final screenshots listed below, including the bridge/home page at phone, tablet and desktop widths.

## Visual findings

The final captures confirm the corrections from the first review: category headings remain horizontal, seller/admin navigation fits its content at the tablet breakpoint, and prior confirmations do not carry into other perspectives. Overview headings, navigation controls and sort controls remain readable at the captured sizes. No remaining blocking clipping or overlap was found in the reviewed views.

## Evidence inventory

Input archive: `ledger-final-review.zip`.

Archive SHA-256: `68b9422cf598e34fdc41ee8ecb1980297bb7bdc190a1f71ba293924c1ecc46a3`.

| Screenshot | Dimensions | SHA-256 |
| --- | --- | --- |
| home-390.png | 390 × 5278 | `7195bf7f3c401914721de33ea74c7329ae94ad8555f8893f4cfe2ba662785c9e` |
| home-768.png | 768 × 4213 | `afa2f72758dabce4abb5644f64bf88090e32d81ae12e569f5ae618f3dd38635c` |
| home-desktop.png | 1440 × 3190 | `5b4dec3a7d28c37a1cb5b97dce927dcfcc558e00d75923fb32255c746f432c14` |
| manageos-employee-submitted.png | 1440 × 1673 | `b3a3dfd39274d8096e6d25e609c87df7103325b9e6529e1f176013cb97c15261` |
| manageos-owner.png | 1440 × 2295 | `9a74bb0007165a1f40d6a58b72b778b6393604ec126b7f04d77184b41528b2f3` |
| manageos-person-0-390.png | 390 × 2501 | `c35169df3740e59adb7e730700144896ee70922e09c6f9e91bc38444a415a849` |
| manageos-person-0-768.png | 768 × 1741 | `3c259a7e218a2faefacd7a8c2cc17d15419db128f798a5ab21a15b200c79af9a` |
| manageos-person-1-390.png | 390 × 2874 | `949a97194cc75465d8380dda56f17c3cacd098a2e81e4426401f79fcb395112b` |
| manageos-person-1-768.png | 768 × 2164 | `0378dbf1d306d04eed1022d50167faa808bdd3b7f886fb9422650278c380410c` |
| manageos-reviewer.png | 1440 × 2217 | `f631d6fbc599dbaf44a07eee90564af9bf032676fbb4761d7c7f12c1ace2bdaf` |
| manageos-unit-manager.png | 1440 × 1636 | `23f81dc237e754adeb6906db4cbd2999c54c91692d946829344f0519f81e2238` |
| marketplace-admin-1-390.png | 390 × 1964 | `9b04d314191998db103c9fc6e383fa0080f1ce14582164b353cef8452ea98ba1` |
| marketplace-admin-1-768.png | 768 × 1629 | `d3587ae07e6bacaa3033f1c56086d052d036c76aa0ae430d0940bbf7e57e74d3` |
| marketplace-admin.png | 1440 × 1570 | `fe804149adee1ee9289a214eb0e9e3911de5fee2e1097b78b580a4c14ab0b16e` |
| marketplace-customer-1-390.png | 390 × 3778 | `3477af244556b97f45154dd6c7fecac32c08e0feefd474dddc128c5f9e907421` |
| marketplace-customer-1-768.png | 768 × 2784 | `3b03f479266c2380eae327cb13b0df5b8c410024da71340b628ca396f1003bce` |
| marketplace-customer.png | 1440 × 2417 | `20d43dc8bf04c9c9ce0062806a3229b910902f0f4a149aead86529ce089e7d8c` |
| marketplace-order.png | 1440 × 1814 | `8b3681f63f027259e2045fc201e9eddb1bccf609d76adf948474d83deecc76e8` |
| marketplace-seller-0-390.png | 390 × 2498 | `9cb3dce7e87d63e5e4a74ccd36b64f3807280e5843c6bb338c710c0bf0bbe626` |
| marketplace-seller-0-768.png | 768 × 1980 | `d447211bb986c18382f80b19a564fb6e20108de4cfc6c002abb2bac4e1a3c1fc` |
| marketplace-seller.png | 1440 × 1570 | `707096bd08988dd60c1dea03b1670ad379cdc5051a9719da7c74f6799b6a8503` |

## Verification limits

The browser result covers Chromium on Windows and the listed scripted journeys/captured views. It is not a claim that every production backend behavior or other browser engine was exercised. All demonstrated records and uploads remain isolated, fictional, and tab-local.

GitHub Actions did not execute tests because its account billing/spending restriction prevents job startup. Local results are recorded explicitly instead of presenting the blocked hosted check as passing. Live deployment and external sharing-card unfurling await the merge/deployment step.
