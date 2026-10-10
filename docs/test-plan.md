# One-page test plan (draft)
Objective: Check key WholeCart buyer workflows, access control, product pricing, ordering and APIs.
Scope: Login, catalogue, search/filter, product detail, piece/case, cart, checkout, slots, orders, invoices, statements and seller/operator flows subject to design spec.
Approach: Manual exploratory and boundary tests, Playwright UI/API regression, one-user k6 connectivity smoke after load authorization.
Test data: buyer1/2/3, seller1/2/3, operator; known catalogue SKU-0477. Avoid assuming shared inventory is static.
Environment: Assigned WholeCart URL; Chromium, Node.js 20+; Swagger API docs.
Entry: App accessible, valid accounts, design spec reviewed. Exit: Critical scenarios executed, blocking issues documented, report and recommendation complete.
Risks: Missing full brief/spec, stateful shared cart, unknown API response schema, same-day delivery rules, permission boundaries.
Evidence: Playwright HTML report, trace/screenshot on failure, manual screenshots, k6 output.
