# Sample test specifications
## TC01 Valid buyer login
Precondition: Buyer account exists. Steps: Open /login; enter buyer1 and assigned password; click Log in. Expected: Redirect to authenticated catalogue with Log out visible. Status: Not run.
## TC04 Search by product name
Precondition: Buyer logged in. Steps: Enter Banana Chips in catalogue search; click Search. Expected: Matching Chef's Banana Chips product appears. Status: Not run.
## TC09 Add product to cart
Precondition: Buyer logged in and product in stock. Steps: Open Chef's Banana Chips; choose case and quantity 1; click Add to cart. Expected: Cart contains one case at the displayed case price. Status: Not run.
## TC13 Checkout calculation
Precondition: Cart contains one case of Chef's Banana Chips. Steps: Open checkout; record net, tax, delivery and total. Expected: Displayed total equals net + tax + delivery with valid rounding. Screenshot example: 2014.80 + 362.66 + 118.00 = 2495.46. Status: Not run.
## TC15 Invalid delivery slot
Precondition: Checkout open. Steps: Choose a restricted same-day slot and try to place order. Expected: Request rejected with meaningful error, no order created. Status: Not run.
