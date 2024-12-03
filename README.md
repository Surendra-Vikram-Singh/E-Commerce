# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# E-Commerce Web Application

A simple and responsive e-commerce web application built with **React** and **TypeScript**. This app allows users to browse products, view detailed product information, and manage a shopping cart.

---

## Features

### User Features:

- **Product Listing**:

  - Display a grid of products with essential details (name, price, thumbnail).
  - Support for filtering and sorting using API calls.
  - Filters persist across page refresh and URL sharing.

- **Product Detail Page**:

  - Show detailed product information.
  - Add products to the cart with a single click.

- **Shopping Cart**:
  - View all added items with quantities.
  - Remove items from the cart.
  - Display total cart value and item count.
  - Persistent cart state using `localStorage`.

### Developer Features:

- Built with **React**, **TypeScript**, and **React Router**.
- Responsive design for desktop and mobile screens.
- API integration using **Axios**.
- End-to-end testing with **Cypress**.
- Accessibility and semantic HTML support.

---

## Technologies Used

| Technology   | Purpose                    |
| ------------ | -------------------------- |
| React        | Component-based UI library |
| TypeScript   | Static typing              |
| Axios        | API handling               |
| React Router | Routing                    |
| Cypress      | End-to-end testing         |
| FakeStoreAPI | Sample product data        |

---

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Surendra-Vikram-Singh/E-Commerce.git
   cd E-Commerce

   ```

2. **Install Dependencies**:
   npm install

3. **Run the Development Server**:
   npm run dev

4. **Run Cypress Tests**:
   npx cypress open
5. **Run the tests in the Cypress interface**:
   npx cypress run

6. **File Structure**:
   ecommerce-app/
   ├── src/  
   │ ├── api/ # Centralized API calls
   │ │ ├── api.ts  
   │ ├── components/ # Reusable UI components
   │ │ ├── Navbar.tsx  
   │ │ ├── ProductCard.tsx
   │ │ ├── CartItem.tsx  
   │ ├── pages/ # Page components
   │ │ ├── HomePage.tsx  
   │ │ ├── ProductDetailPage.tsx
   │ │ ├── CartPage.tsx  
   │ ├── App.tsx # Root application component
   │ ├── index.tsx # App entry point
   ├── cypress/ # End-to-end testing setup
   │ ├── e2e/
   │ │ ├── app.spec.js # Test cases
   ├── public/ # Public static files
   ├── README.md # Documentation
   ├── Cypress.config.js # Cypress Configuration
   ├── package.json # Project dependencies
   ├── tsconfig.json # TypeScript configuration

7. **Cypress Test Coverage**

   **Scenarios Tested:**

   **Home Page**:
   Verifies products load correctly.
   Tests filtering and sorting functionality.

   **Product Detail Page**:
   Ensures navigation to the page.
   Verifies the product information is accurate.
   Tests the "Add to Cart" button.

   **Shopping Cart**:
   Ensures items are added to the cart correctly.
   Tests the remove functionality.
   Verifies the total updates accurately.
