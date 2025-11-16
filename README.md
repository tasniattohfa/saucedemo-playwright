# saucedemo-playwright

this is a sample automation project using **playwright** with **javascript**.

it automates the following scenario on the public demo website [https://www.saucedemo.com](https://www.saucedemo.com):

**scenario:**

1. user logs in with valid credentials  
2. adds one product to the cart  
3. verifies the product name in the cart  
4. logs out

## project structure
saucedemo-playwright/
│
├─ tests/
│ └─ saucedemo.spec.js # main test file
├─ package.json
├─ package-lock.json
├─ playwright.config.js
├─ .gitignore
└─ ss_of_test_passing.png # screenshot of passing test


---

## Prerequisites

- Node.js installed ([https://nodejs.org](https://nodejs.org))  
- npm (comes with Node.js)  
- git installed ([https://git-scm.com](https://git-scm.com))  

---

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/tasniattohfa/saucedemo-playwright.git
cd saucedemo-playwright

2. Install dependencies:

npm install
npx playwright install

3. Run tests:

npx playwright test

4. Run tests with browser UI:

npx playwright test --headed


