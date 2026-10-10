# Questions and assumptions
1. What are the exact business rules for same-day delivery slots? Screenshot indicates morning slots unavailable and afternoon/evening orders before 10:00.
2. What are the expected roles and permissions for buyer1-3, seller1-3 and operator?
3. What is the exact API login response token key and required cart request body? Confirm in Swagger.
4. Does product case pricing include a discount? Screenshot shows 6 x 365 = 2190 while case price is 2014.80, so do not assume simple multiplication.
5. Are taxes included in delivery fee and excluded from product list prices?
6. What load level and duration are explicitly permitted by the brief?
7. Can test orders be cancelled or reset to avoid changing shared test data?
Assumption: Until the specification confirms otherwise, do not label observed behavior a defect solely based on intuition.
