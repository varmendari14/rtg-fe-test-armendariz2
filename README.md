## Rooms To Go Engineering: React Take Home Assignment

#### How to Run
---
- run `npm i`
- run `node server.js`
- in a Separate terminal/command line window run `npm start` (make sure node server.js is still running)
- http://localhost:3000 (should pop up automatically if a browser is open)


#### Expectation
---
This at-home coding challenge is an opportunity for you to write some clean code that shows us how you use data structures to solve algorithmic problems.
- Write code as if you were shipping it: Assume you are going to be code reviewed, articulate a test plan, etc.
- We expect this solution to be written with React.
- Use your preferred IDE or editor and whatever tooling you're comfortable with.
- Feel free to use whatever references you'd like, including Google.
- Your solution does not have to persist data between runs.
- When you’re finished, make sure your code is committed to the repo with instructions on how to run it.
- Your solution should be self-contained and not assume other software is already installed (npm install is ok).
- Got an idea for a cool feature to add? Do it! We love seeing your creative side.


#### Problem Statement
---
Create a simple single page shopping cart web app.

Managing the shopping cart requires adding and removing products to the cart, calculating subtotals, shipping, taxes, and applying discounts.

Specifically we would like to see these elements represented in the cart:
- PRODUCT NAME
- PRODUCT PRICE
- PRODUCT QUANTITY
- SUBTOTAL (does not include TAX or SHIPPING COST)
- TAX (@10%)
- SHIPPING COST ($50 + 2%) - ($5 * TOTAL QUANTITY) 
- TOTAL COST

We will NOT evaluate UI interface so much as the behavior and state management.  It should be usable, but it does not need to be pretty.  This is to test your ability to use and manage React.  However, you should be prepared to discuss the UI and what style changes could improve the interface.

The interface should allow a user to;
- ADD an item to the shopping cart.
- REMOVE items from the shopping cart.
- UPDATE the quantity of items in the cart.
- SHOW the Subtotal.
- SHOW the Tax amount.
- SHOW the Delivery amount.
- SHOW the Total.


#### SUBMISSION
---
- Clone this repository.  Do NOT fork it.
- Create the Cart as assigned/outlined above.
- Gatsby, React, and Foundation Grid have already been included.
- You can assume the cart will not need to handle more than 10 of each product.
- Add documentation needed to install any packages, run the tests and code to this README or replace this README with one of your own with information on how to install and run code and tests.
- Add your code to a github repository, share it with us or make it public, AND let us know (inviting someone to join a github project does not send a notification)


#### Good luck!
