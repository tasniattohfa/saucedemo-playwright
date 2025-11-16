# saucedemo-playwright

this is a sample automation project using **playwright** with **javascript**.

it automates the following scenario on the public demo website [https://www.saucedemo.com](https://www.saucedemo.com):

**scenario:**

1. user logs in with valid credentials  
2. adds one product to the cart  
3. verifies the product name in the cart  
4. logs out

## Prerequisites

- Node.js installed ([https://nodejs.org](https://nodejs.org))  
- npm (comes with Node.js)  
- git installed ([https://git-scm.com](https://git-scm.com))  

---

## Setup Instructions


```bash
git clone https://github.com/tasniattohfa/saucedemo-playwright.git
cd saucedemo-playwright
npm install
npx playwright install
npx playwright test
npx playwright test --headed  



