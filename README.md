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
The Playwright tests were run locally against the assigned environment on 10 October 2026.
Result of the latest run: [X] of 10 tests passed ([6] API, [4] UI). [Name any failing test and why.]

The application was tested manually by me. The defects found are in
docs/bug-report.docx and docs/defect-log.csv, with screenshots.

Limitations:
- The automated suite covers the login, catalogue, cart and checkout basics only.
  It does not automate the defects found manually (refunds, invoices, statements,
  minimum order, logistics export).
- Tests that add to the cart can affect each other. Use a clean cart or reset it
  when running repeatedly.
- API access control was deliberately not tested.
- The load test (k6) was not run.

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
