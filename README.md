# Paradise Nursery Shopping Application

A responsive plant shop built with React, Vite, React Router, Redux Toolkit, and plain CSS. Browse houseplants, add products to a cart, change quantities, remove items, and view automatically calculated totals.

## Features

- Landing page with a garden-inspired hero and **Get Started** button
- About Us page
- Plant catalogue grouped into three categories, with six unique plants per category
- Add-to-cart buttons that disable after an item is added
- Shared navigation bar and live cart quantity indicator
- Redux Toolkit cart slice for adding, incrementing, decrementing, and deleting items
- Cart subtotal per product and grand total
- Checkout message and continue-shopping link
- Responsive layout for desktop and mobile

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
paradise-nursery/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── app/
    │   └── store.js
    ├── data/
    │   └── plants.js
    ├── features/cart/
    │   └── CartSlice.jsx
    └── components/
        ├── Navbar.jsx
        ├── AboutUs.jsx
        ├── ProductList.jsx
        └── CartItem.jsx
```

## Assignment file URLs

After pushing this project to your own GitHub repository, replace `YOUR-USERNAME` with your GitHub username and `YOUR-REPO` with your repository name:

1. `https://github.com/YOUR-USERNAME/YOUR-REPO/blob/main/README.md`
2. `https://github.com/YOUR-USERNAME/YOUR-REPO/blob/main/src/components/AboutUs.jsx`
3. `https://github.com/YOUR-USERNAME/YOUR-REPO/blob/main/src/App.css`
4. `https://github.com/YOUR-USERNAME/YOUR-REPO/blob/main/src/App.jsx`
5. `https://github.com/YOUR-USERNAME/YOUR-REPO/blob/main/src/features/cart/CartSlice.jsx`
6. `https://github.com/YOUR-USERNAME/YOUR-REPO/blob/main/src/components/ProductList.jsx`
7. `https://github.com/YOUR-USERNAME/YOUR-REPO/blob/main/src/components/CartItem.jsx`

These are URL templates, not live repository links until you upload the files to GitHub.

## Notes

Plant photos load from Unsplash and therefore require an internet connection. Product data, prices, cart behavior, and page layout are included locally in the project.
