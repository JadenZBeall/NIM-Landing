# NIM Change Log
**Ohana Belle Press | Narrative Intelligence Method**
Repository: JadenZBeall/NIM-Landing

All repository changes are logged here in sequential order. Each entry corresponds to one Change Order. Do not edit past entries.

---

## CO-001 | Repository Governance Initialization

**Status:** Complete
**Date:** June 2026
**Branch:** main
**Commit Hash:** [to be filled in after upload]

**Summary:**
Established project governance documentation. No functional files were modified.

**Files Added:**
- `docs/NIM_Project_Constitution.md` — Governing document for all future development. Contains immutable philosophy, locked decisions, architecture spec, brand identity reference, session protocol, and change order authority rules.
- `docs/NIM_Change_Log.md` — This file. Sequential log of all repository change orders.
- `docs/NIM_Product_Specification.md` — Service tier definitions, copy specification, deliverables, and conversion flow documentation.

**Files Modified:**
None.

**Issues Discovered During Audit (pre-CO-001):**
The following issues were identified during the repository and live-site audit that preceded this change order. They are logged here for tracking. None were addressed in CO-001.

| # | Issue | Severity | Files Affected |
|---|---|---|---|
| 1 | "Start Here" CTA anchors link to `#start` which does not exist as an element ID | High | index.html |
| 2 | Header logo (4226.png) and footer mark (4220.jpg) missing from repo | High | index.html |
| 3 | nim-intake-form.html submit handler is client-side only; no data is transmitted on submission | High | nim-intake-form.html |
| 4 | payment.html routes to retired PayPal links, not Stripe | High | payment.html |
| 5 | No Hurston Proof section on live page | High | index.html |
| 6 | No pricing visible anywhere on live page | High | index.html |
| 7 | payment.html uses retired application-model language ("Apply," "Application Accepted") | Medium | payment.html |
| 8 | nim-intake-form.html uses retired application-model language ("Apply," "Confirm & Pay") | Medium | nim-intake-form.html |
| 9 | Tier III description in payment.html and nim-intake-form.html references video walkthrough (retired) | Medium | payment.html, nim-intake-form.html |
| 10 | confirmed.html absent from repo | Medium | (missing file) |
| 11 | favicon.png absent from repo | Low | (missing file) |
| 12 | 4223.webp absent from repo | Low | (missing file) |
| 13 | Netlify form detection not configured on any page | Medium | nim-intake-form.html |
| 14 | payment.html and nim-intake-form.html not linked from index.html | High | index.html |

---

*Entries below this line will be added as future Change Orders are executed.*
