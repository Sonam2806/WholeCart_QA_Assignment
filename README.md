# WholeCart Marketplace QA Assessment

Simple JavaScript Playwright + k6 assessment starter, structured for a junior-to-mid QA engineer.

## Setup
1. Install Node.js 20+.
2. Run `npm install`.
3. Run `npx playwright install chromium`.
4. Run `npm test` for UI + API; `npm run test:ui` and `npm run test:api` run separately.
5. Install k6 separately, then run `npm run load` **only after confirming the permitted load-test limits**.

Configuration: `BASE_URL` (defaults to the assigned environment), `QA_USER` (defaults to buyer1), and `QA_PASSWORD` (defaults to the assignment test password).

## Status and limitations
**NOT EXECUTED / NOT VERIFIED.** The code is based on screenshots and the assignment email, not on a live test run. Browser selectors, authentication response structure, endpoint response schemas, and UI transitions must be validated locally against the Swagger and app. The assignment explicitly prohibits AI agents from operating the application. Please run the tests yourself and record results honestly. Tests that mutate the cart may affect each other; use a dedicated test account/reset cart when running repeatedly.

This is a working project scaffold, **not** a claim of full coverage or a passing test suite. The brief, design spec, and release notes are not supplied in full. Add tests and update documents after reviewing those sources.

## Submission checklist
- [ ] Read the full brief, specification, release notes and AI usage policy
- [ ] Review all buyer, seller and operator permissions
- [ ] Run tests and fix environment-specific selectors/response assertions
- [ ] Validate cart updates, deletes, stock, tax, delivery slots and order placement
- [ ] Add invoice, statement, seller and operator test cases
- [ ] Collect defect screenshots and actual test results
- [ ] Run only authorized load volume and record measurements
- [ ] Record a 5-minute walkthrough in your own voice
- [ ] Include AI sessions and publish the repository

See `docs/` for the test plan, test matrix, defect log, assumptions, and release report templates.
