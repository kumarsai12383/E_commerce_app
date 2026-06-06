# E_commerce

Comprehensive single-page e-commerce React app built with Vite and Tailwind CSS.

## Project Summary

- **Purpose:** Demo e-commerce storefront showcasing product listing, details, cart, and order flows.
- **Framework:** React + Vite
- **Routing:** react-router-dom
- **Styling:** Tailwind CSS

## Tech stack & dependencies

- Node.js (v16+ recommended)
- React 19
- Vite
- Tailwind CSS
- react-router-dom
- react-icons

Key dependencies (from `package.json`):

- `react` ^19.2.6
- `react-dom` ^19.2.6
- `react-router-dom` ^7.16.0
- `tailwindcss` ^4.3.0
- `react-icons` ^5.6.0

Dev dependencies / tools:

- `vite` ^8.x
- ESLint and related plugins

## Scripts

Available npm scripts (from `package.json`):

- `npm run dev` — start development server (Vite)
- `npm run build` — produce production build
- `npm run preview` — locally preview production build
- `npm run lint` — run ESLint

## Quick start

1. Install dependencies:

```
npm install
```

2. Run dev server:

```
npm run dev
```

3. Build for production:

```
npm run build
```

4. Preview production build locally:

```
npm run preview
```

## Project structure

Top-level layout (src/):

- `src/`
  - `api.js` — helper to fetch products from remote API
  - `main.jsx` — app entry, mounts React app
  - `App.jsx` — top-level routes, Context providers
  - `products.js` — (local product data helper)
  - `cartContext/`
    - `CartContext.jsx` — React Context for cart state
    - `orderContext.jsx` — React Context for orders state
  - `components/` — UI components (NavBar, ProductCard, CartItem, Footer, loader, popups)
  - `pages/` — Route pages (Home, Products, ProductDetails, Cart, Checkout/Orders and addresses)

Exact file list (root):

- `index.html`, `vite.config.js`, `package.json`, `src/` (see above)

## Routing & Pages

- `/` — Home
- `/products` — All products
- `/product/:producttitle` — Product details
- `/Category/:categoryname` — Category view
- `/cart` — Cart view
- `/checkout` — Checkout / Buy all
- `/orders` — Orders
- `/product/order/:orderId` — Single order page

## State Management

- `CartContext` (in `src/cartContext/CartContext.jsx`) stores the cart array and setter and is provided at the app root.
- `OrderContext` (in `src/cartContext/orderContext.jsx`) stores orders and setter.
- `App.jsx` wires both providers and passes `cart`/`orders` state using `useState`.

## API

- `src/api.js` exposes `FetchProducts()` which fetches product data from:

  `https://e-commerce-data-gf9q.onrender.com/products`

  It returns an array of product objects or an empty array on error.

## Components Overview

- `NavBar` — navigation, cart link
- `ProductCard` — product preview used in listings
- `ProductDetails` page — detailed product view + add-to-cart
- `CartItem` — single item UI in cart
- `footer` — site footer
- Popups: `addtoCartpopup`, `paymentPopUp` — UI feedback modals

## Development notes & conventions

- Project uses Vite dev server; keep `.env` values in a `.env` file if needed.
- ESLint is included; run `npm run lint` and follow lint rules.
- Tailwind CSS is configured — ensure `postcss`/`tailwind.config.js` exist if you extend styles.

## Deployment

- Build with `npm run build` and deploy the `dist/` output to any static host (Netlify, Vercel, Render, GitHub Pages).

## Contributing

- Fork the repo, create a feature branch, and open a PR with a concise description.



