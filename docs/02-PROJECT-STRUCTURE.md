# 📁 Project Structure Guide

## Complete Directory Tree

```
amazon-clone/
│
├── public/                          # Static files
│
├── src/                             # Source code (YOUR WORK HERE)
│   │
│   ├── api/                         # API calls
│   │   └── productApi.js            # Fetch products from server
│   │
│   ├── assets/                      # Images, logos, icons
│   │   ├── images/                  # General images
│   │   └── section4/                # Section-specific images
│   │
│   ├── components/                  # Reusable UI components
│   │   ├── Navbar.jsx               # Top navigation
│   │   ├── footer.jsx               # Bottom footer
│   │   ├── Cards.jsx                # Product cards grid
│   │   ├── HeroSlider.jsx           # Main banner slider
│   │   ├── ProductCart.jsx          # Single product card
│   │   ├── ProductFilter.jsx        # Filter controls
│   │   ├── ProductFilterSidebar.jsx # Filter sidebar
│   │   ├── Section4Cards.jsx        # Homepage section
│   │   ├── Slideshow.jsx            # Product carousel
│   │   ├── Slideshow3.jsx           # Another carousel
│   │   ├── MainLayout.jsx           # Main page wrapper
│   │   ├── AuthLayout.jsx           # Auth page wrapper
│   │   ├── CartNotification.jsx     # Cart popup
│   │   └── ui/                      # UI components
│   │
│   ├── context/                     # Global state
│   │   ├── CartContext.jsx          # Shopping cart state
│   │   ├── UserProvider.jsx         # User auth state
│   │   ├── UserContext.jsx          # User context
│   │   └── useUser.js               # User hook
│   │
│   ├── pages/                       # Full page components
│   │   ├── HomePage.jsx             # Landing page (/)
│   │   ├── CartPage.jsx             # Cart page (/cart)
│   │   ├── ProductsPage.jsx         # All products (/products)
│   │   ├── ProductDetailPage.jsx    # Product details (/product/:id)
│   │   ├── LoginPage.jsx            # Login form (/login)
│   │   ├── SignupPage.jsx           # Signup form (/signup)
│   │   └── CheckoutPage.jsx         # Checkout (not implemented)
│   │
│   ├── redux/                       # Redux state management
│   │   ├── store.js                 # Redux store config
│   │   └── slices/                  # State slices
│   │
│   ├── routes/                      # Application routing
│   │   └── AppRoutes.jsx            # All route definitions
│   │
│   ├── styles/                      # Global styles
│   │
│   ├── utils/                       # Helper functions
│   │
│   ├── App.jsx                      # Main App component
│   ├── App.css                      # App styles
│   ├── main.jsx                     # Entry point
│   ├── index.css                    # Global CSS
│   └── reset.css                    # CSS reset
│
├── index.html                       # HTML template
├── package.json                     # Project dependencies
├── vite.config.js                   # Vite configuration
├── tailwind.config.js              # TailwindCSS config
├── eslint.config.js                # Code linting rules
└── README.md                        # Project readme
```

## Directory Explanations

### 📂 src/api/
**Purpose**: Functions to communicate with external servers

**Files**:
- `productApi.js` - Fetch products, categories, search

**When to work here**: 
- Adding new API endpoints
- Changing data source
- Handling API errors

---

### 📂 src/assets/
**Purpose**: Store images, logos, icons

**Organization**:
- `images/` - General images
- `section4/` - Section-specific images
- Root - Logos, main images

**When to work here**:
- Adding new images
- Organizing assets
- Optimizing images

---

### 📂 src/components/
**Purpose**: Reusable UI pieces (building blocks)

**Key Components**:

#### Layout Components:
- `MainLayout.jsx` - Navbar + Content + Footer
- `AuthLayout.jsx` - Just content (for login/signup)

#### Navigation:
- `Navbar.jsx` - Top navigation bar
- `footer.jsx` - Bottom footer

#### Product Display:
- `ProductCart.jsx` - Single product card
- `Cards.jsx` - Grid of category cards
- `Section4Cards.jsx` - Homepage section
- `HeroSlider.jsx` - Main banner
- `Slideshow.jsx` - Product carousel

#### Functionality:
- `ProductFilter.jsx` - Filter controls
- `ProductFilterSidebar.jsx` - Filter sidebar
- `CartNotification.jsx` - Cart popup notification

**When to work here**:
- Creating new reusable components
- Styling existing components
- Adding new features to components

---

### 📂 src/context/
**Purpose**: Share data across entire app (global state)

**Files**:
- `CartContext.jsx` - Shopping cart state & functions
- `UserProvider.jsx` - User authentication state
- `UserContext.jsx` - User context definition
- `useUser.js` - Custom hook for user data

**What is Context?**
Instead of passing data through many components, context makes it available everywhere.

**When to work here**:
- Modifying cart logic
- Changing user authentication
- Adding new global state

---

### 📂 src/pages/
**Purpose**: Full page components for each route

**Pages**:

| File | URL | Description |
|------|-----|-------------|
| `HomePage.jsx` | `/` | Landing page |
| `ProductsPage.jsx` | `/products` | All products with filters |
| `ProductDetailPage.jsx` | `/product/:id` | Single product details |
| `CartPage.jsx` | `/cart` | Shopping cart |
| `LoginPage.jsx` | `/login` | Login form |
| `SignupPage.jsx` | `/signup` | Registration form |
| `CheckoutPage.jsx` | `/checkout` | Checkout (not done) |

**When to work here**:
- Creating new pages
- Modifying page layouts
- Adding page-specific features

---

### 📂 src/redux/
**Purpose**: Advanced state management (alternative to Context)

**Files**:
- `store.js` - Redux store configuration
- `slices/` - State slices (pieces of state)

**When to use Redux vs Context?**
- **Context**: Simple state (cart, user)
- **Redux**: Complex state with many actions

**When to work here**:
- Adding complex state logic
- Managing multiple related states
- Need time-travel debugging

---

### 📂 src/routes/
**Purpose**: Define which URL shows which page

**Files**:
- `AppRoutes.jsx` - All route definitions

**Example**:
```jsx
<Route path="/" element={<HomePage />} />
<Route path="/cart" element={<CartPage />} />
```

**When to work here**:
- Adding new pages
- Changing URLs
- Adding route protection (auth required)

---

### 📂 src/styles/
**Purpose**: Global CSS styles

**When to work here**:
- Adding global styles
- Creating CSS variables
- Defining animations

---

### 📂 src/utils/
**Purpose**: Helper functions used across app

**Examples**:
- Format currency
- Validate email
- Calculate discounts
- Date formatting

**When to work here**:
- Adding utility functions
- Reusable logic

---

## Root Files Explained

### package.json
**Purpose**: Lists all project dependencies and scripts

**Key sections**:
```json
{
  "scripts": {
    "dev": "vite",           // Start dev server
    "build": "vite build",   // Build for production
    "preview": "vite preview" // Preview build
  },
  "dependencies": {
    // Libraries your app needs
  },
  "devDependencies": {
    // Tools for development only
  }
}
```

### index.html
**Purpose**: Main HTML file (entry point)

**Key parts**:
```html
<div id="root"></div>  <!-- React mounts here -->
<script src="/src/main.jsx"></script>  <!-- Loads React -->
```

### vite.config.js
**Purpose**: Configure Vite build tool

**What it does**:
- Set up React plugin
- Configure build options
- Define aliases

### tailwind.config.js
**Purpose**: Configure TailwindCSS

**What it does**:
- Define custom colors
- Add custom utilities
- Configure responsive breakpoints

### eslint.config.js
**Purpose**: Code quality rules

**What it does**:
- Catch common errors
- Enforce code style
- Suggest improvements

## File Naming Conventions

### Components:
- **PascalCase**: `ProductCard.jsx`, `Navbar.jsx`
- Capital first letter
- `.jsx` extension

### Utilities:
- **camelCase**: `formatPrice.js`, `validateEmail.js`
- Lowercase first letter
- `.js` extension

### Styles:
- **kebab-case**: `navbar-styles.css`, `product-card.css`
- All lowercase with hyphens
- `.css` extension

### Constants:
- **UPPER_SNAKE_CASE**: `API_BASE_URL`, `MAX_ITEMS`
- All uppercase with underscores

## Where to Start?

### For Beginners:

1. **Start with Components** (`src/components/`)
   - Easy to understand
   - Visual feedback
   - Small, focused files

2. **Then Pages** (`src/pages/`)
   - See how components combine
   - Understand routing
   - Full features

3. **Then Context** (`src/context/`)
   - Learn state management
   - Understand data flow

4. **Finally API** (`src/api/`)
   - Learn data fetching
   - Handle async operations

### For Styling:

1. **Global Styles** (`src/index.css`, `src/App.css`)
2. **Component Styles** (CSS files in `src/components/`)
3. **TailwindCSS** (classes in JSX files)

### For Logic:

1. **Context** (`src/context/`) - Global state
2. **Utils** (`src/utils/`) - Helper functions
3. **API** (`src/api/`) - Data fetching
4. **Redux** (`src/redux/`) - Advanced state

## Quick Reference

### Need to...

**Add a new page?**
1. Create file in `src/pages/`
2. Add route in `src/routes/AppRoutes.jsx`

**Create reusable component?**
1. Create file in `src/components/`
2. Import and use in pages

**Add image?**
1. Put in `src/assets/`
2. Import: `import logo from './assets/logo.png'`

**Fetch data?**
1. Add function to `src/api/productApi.js`
2. Call in component with `useEffect`

**Add global state?**
1. Create context in `src/context/`
2. Wrap app in provider
3. Use with custom hook

**Style component?**
1. Use TailwindCSS classes
2. Or create CSS file
3. Or use inline styles
