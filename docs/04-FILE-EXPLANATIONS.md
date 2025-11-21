# 📄 Detailed File Explanations

## Core Files

### main.jsx - Application Entry Point

**Location**: `src/main.jsx`

**Purpose**: The first file that runs when app starts

**What it does**:
1. Imports React
2. Imports global CSS
3. Creates root element
4. Renders App component
5. Wraps app with Redux Provider

**Code breakdown**:
```jsx
import { StrictMode } from 'react'           // Helps catch bugs
import { createRoot } from 'react-dom/client' // React 19 rendering
import { Provider } from 'react-redux'        // Makes Redux available
import './reset.css'                          // Reset browser defaults
import './index.css'                          // Global styles
import './App.css'                            // App-specific styles
import App from './App.jsx'                   // Main App component
import { store } from './redux/store'         // Redux store

// Find the root element in index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>                    // Development mode checks
    <Provider store={store}>      // Redux wrapper
      <App />                     // Your entire app
    </Provider>
  </StrictMode>,
)
```

**When to modify**:
- Adding global CSS files
- Changing Redux configuration
- Adding global providers

---

### App.jsx - Main Application Component

**Location**: `src/App.jsx`

**Purpose**: Root component that sets up routing and context

**What it does**:
1. Sets up React Router
2. Wraps app with UserProvider (authentication)
3. Wraps app with CartProvider (shopping cart)
4. Renders all routes

**Code breakdown**:
```jsx
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserProvider";

export default function App() {
  return (
    <Router>                    // Enables routing
      <UserProvider>            // User authentication state
        <CartProvider>          // Shopping cart state
          <AppRoutes />         // All page routes
        </CartProvider>
      </UserProvider>
    </Router>
  );
}
```

**Provider Order Matters**:
- Router must be outermost (enables routing everywhere)
- UserProvider before CartProvider (cart might need user data)
- CartProvider wraps routes (routes need cart data)

**When to modify**:
- Adding new global context providers
- Changing routing setup
- Adding global error boundaries

---

## API Files

### productApi.js - Product Data Fetching

**Location**: `src/api/productApi.js`

**Purpose**: Functions to fetch data from FakeStore API

**Key Functions**:

#### 1. getProducts()
```javascript
export const getProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
```

**What it does**:
- Fetches all products from API
- Returns array of products
- Handles errors

**Usage**:
```jsx
import { getProducts } from './api/productApi';

const products = await getProducts();
```

#### 2. getSingleProduct(id)
```javascript
export const getSingleProduct = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();
  return product;
};
```

**What it does**:
- Fetches one product by ID
- Returns single product object

**Usage**:
```jsx
const product = await getSingleProduct(5);
```

#### 3. getCategories()
```javascript
export const getCategories = async () => {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  const categories = await response.json();
  return categories;
};
```

**What it does**:
- Fetches all product categories
- Returns array of category names

#### 4. getProductsByCategory(category)
```javascript
export const getProductsByCategory = async (category) => {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const products = await response.json();
  return products;
};
```

**What it does**:
- Filters products by category
- Returns filtered array

**When to modify**:
- Changing API endpoint
- Adding new API functions
- Modifying error handling
- Adding request headers

---

## Context Files

### CartContext.jsx - Shopping Cart State

**Location**: `src/context/CartContext.jsx`

**Purpose**: Manages shopping cart globally

**State Structure**:
```javascript
{
  items: [
    {
      id: 1,
      title: "Product Name",
      price: 99.99,
      image: "url",
      quantity: 2
    }
  ],
  totalItems: 2,
  totalAmount: 199.98
}
```

**Key Functions**:

#### 1. addToCart(product, quantity)
```javascript
const addToCart = (product, quantity = 1) => {
  dispatch({
    type: 'ADD_TO_CART',
    payload: { ...product, quantity }
  });
};
```

**What it does**:
- Adds product to cart
- If product exists, increases quantity
- Updates totals
- Saves to localStorage

**Usage**:
```jsx
const { addToCart } = useCart();
addToCart(product, 1);
```

#### 2. removeFromCart(productId)
```javascript
const removeFromCart = (productId) => {
  dispatch({
    type: 'REMOVE_FROM_CART',
    payload: productId
  });
};
```

**What it does**:
- Removes product completely
- Updates totals
- Saves to localStorage

#### 3. updateQuantity(productId, quantity)
```javascript
const updateQuantity = (productId, quantity) => {
  dispatch({
    type: 'UPDATE_QUANTITY',
    payload: { id: productId, quantity }
  });
};
```

**What it does**:
- Changes product quantity
- If quantity = 0, removes product
- Updates totals

#### 4. clearCart()
```javascript
const clearCart = () => {
  dispatch({ type: 'CLEAR_CART' });
};
```

**What it does**:
- Empties entire cart
- Resets totals to 0

**Reducer Logic**:
```javascript
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if product exists
      // If yes, increase quantity
      // If no, add new item
      // Calculate new totals
      return newState;
      
    case 'REMOVE_FROM_CART':
      // Filter out product
      // Calculate new totals
      return newState;
      
    case 'UPDATE_QUANTITY':
      // Update product quantity
      // Calculate new totals
      return newState;
      
    case 'CLEAR_CART':
      return initialState;
      
    default:
      return state;
  }
};
```

**localStorage Integration**:
```javascript
// Load cart on app start
const loadState = () => {
  const saved = localStorage.getItem('amazonCloneCart');
  return saved ? JSON.parse(saved) : initialState;
};

// Save cart whenever it changes
useEffect(() => {
  localStorage.setItem('amazonCloneCart', JSON.stringify(state));
}, [state]);
```

**Custom Hook**:
```javascript
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
```

**Usage in Components**:
```jsx
import { useCart } from '../context/CartContext';

function MyComponent() {
  const { 
    cart,           // Array of cart items
    totalItems,     // Total number of items
    totalAmount,    // Total price
    addToCart,      // Function to add
    removeFromCart, // Function to remove
    updateQuantity, // Function to update
    clearCart       // Function to clear
  } = useCart();
  
  return (
    <div>
      <p>Cart: {totalItems} items</p>
      <p>Total: ${totalAmount}</p>
    </div>
  );
}
```

---

### UserProvider.jsx - User Authentication State

**Location**: `src/context/UserProvider.jsx`

**Purpose**: Manages user authentication globally

**State Structure**:
```javascript
{
  user: {
    id: 1,
    name: "John Doe",
    email: "john@example.com"
  },
  isAuthenticated: true
}
```

**Key Functions**:
- `login(email, password)` - Log user in
- `logout()` - Log user out
- `signup(userData)` - Register new user

**Usage**:
```jsx
import { useUser } from '../context/useUser';

function MyComponent() {
  const { user, isAuthenticated, login, logout } = useUser();
  
  if (!isAuthenticated) {
    return <p>Please login</p>;
  }
  
  return <p>Welcome, {user.name}!</p>;
}
```

---

## Route Files

### AppRoutes.jsx - Route Definitions

**Location**: `src/routes/AppRoutes.jsx`

**Purpose**: Maps URLs to page components

**Route Structure**:
```jsx
<Routes>
  {/* Main pages with Navbar & Footer */}
  <Route 
    path="/" 
    element={<MainLayout><HomePage /></MainLayout>} 
  />
  
  <Route 
    path="/cart" 
    element={<MainLayout><CartPage /></MainLayout>} 
  />
  
  <Route 
    path="/products" 
    element={<MainLayout><ProductsPage /></MainLayout>} 
  />
  
  <Route 
    path="/product/:id" 
    element={<MainLayout><ProductDetailPage /></MainLayout>} 
  />
  
  {/* Auth pages without Navbar & Footer */}
  <Route 
    path="/login" 
    element={<AuthLayout><LoginPage /></AuthLayout>} 
  />
  
  <Route 
    path="/signup" 
    element={<AuthLayout><SignupPage /></AuthLayout>} 
  />
</Routes>
```

**URL Parameters**:
```jsx
// Route with parameter
<Route path="/product/:id" element={<ProductDetailPage />} />

// Access in component
function ProductDetailPage() {
  const { id } = useParams();  // Gets :id from URL
  // URL: /product/5 → id = "5"
}
```

**When to modify**:
- Adding new pages
- Changing URLs
- Adding protected routes (require login)
- Adding 404 page

---

## Page Files

### HomePage.jsx

**Location**: `src/pages/HomePage.jsx`

**URL**: `/`

**Purpose**: Main landing page

**Components Used**:
```jsx
<HeroSlider />      // Main banner
<Cards />           // Category cards
<Slideshow />       // Product carousel 1
<Section4Cards />   // Featured products
<Slideshow3 />      // Product carousel 2
```

**Structure**:
```jsx
export default function HomePage() {
  return (
    <div className="main-content">
      <HeroSlider />
      <Cards />
      <Slideshow />
      <Section4Cards />
      <Slideshow3 />
    </div>
  );
}
```

**When to modify**:
- Changing homepage layout
- Adding new sections
- Reordering components

---

### ProductsPage.jsx

**Location**: `src/pages/ProductsPage.jsx`

**URL**: `/products`

**Purpose**: Display all products with filters

**State**:
```jsx
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [filters, setFilters] = useState({
  category: '',
  minPrice: 0,
  maxPrice: 1000,
  rating: 0
});
```

**Features**:
- Fetch all products
- Filter by category
- Filter by price range
- Filter by rating
- Display in grid

**Structure**:
```jsx
<div className="products-page">
  <ProductFilterSidebar 
    filters={filters}
    onFilterChange={handleFilterChange}
  />
  
  <div className="products-grid">
    {loading ? (
      <p>Loading...</p>
    ) : (
      filteredProducts.map(product => (
        <ProductCart key={product.id} {...product} />
      ))
    )}
  </div>
</div>
```

**When to modify**:
- Adding new filters
- Changing grid layout
- Adding pagination
- Adding sorting

---

### ProductDetailPage.jsx

**Location**: `src/pages/ProductDetailPage.jsx`

**URL**: `/product/:id`

**Purpose**: Show single product details

**How it works**:
```jsx
export default function ProductDetailPage() {
  const { id } = useParams();  // Get ID from URL
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  useEffect(() => {
    // Fetch product by ID
    async function loadProduct() {
      const data = await getSingleProduct(id);
      setProduct(data);
    }
    loadProduct();
  }, [id]);
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  return (
    <div className="product-detail">
      <img src={product.image} />
      <h1>{product.title}</h1>
      <p>${product.price}</p>
      <p>{product.description}</p>
      
      <input 
        type="number" 
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      
      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
```

**When to modify**:
- Changing layout
- Adding product reviews
- Adding related products
- Adding image zoom

---

### CartPage.jsx

**Location**: `src/pages/CartPage.jsx`

**URL**: `/cart`

**Purpose**: Display shopping cart

**Features**:
- Show all cart items
- Update quantity (+/-)
- Remove items
- Show subtotals
- Show total
- Checkout button

**Structure**:
```jsx
export default function CartPage() {
  const { cart, totalItems, totalAmount, removeFromCart, updateQuantity } = useCart();
  
  if (cart.length === 0) {
    return <p>Your cart is empty</p>;
  }
  
  return (
    <div className="cart-page">
      <h1>Shopping Cart ({totalItems} items)</h1>
      
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} />
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          
          <div className="quantity-controls">
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
              -
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              +
            </button>
          </div>
          
          <p>Subtotal: ${item.price * item.quantity}</p>
          
          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}
      
      <div className="cart-total">
        <h2>Total: ${totalAmount}</h2>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
}
```

**When to modify**:
- Changing cart layout
- Adding coupon codes
- Adding shipping calculator
- Improving mobile view

---

### LoginPage.jsx

**Location**: `src/pages/LoginPage.jsx`

**URL**: `/login`

**Purpose**: User login form

**Structure**:
```jsx
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useUser();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await login(email, password);
      navigate('/');  // Redirect to homepage
    } catch (err) {
      setError('Invalid credentials');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      
      {error && <p className="error">{error}</p>}
      
      <input 
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      
      <input 
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      
      <button type="submit">Login</button>
      
      <p>
        Don't have an account? 
        <Link to="/signup">Sign up</Link>
      </p>
    </form>
  );
}
```

---

### SignupPage.jsx

**Location**: `src/pages/SignupPage.jsx`

**URL**: `/signup`

**Purpose**: User registration form

**Form Fields**:
- Name
- Email
- Password
- Confirm Password

**Validation**:
- Email format
- Password length (min 8 characters)
- Passwords match

---

## Component Files

### Navbar.jsx

**Location**: `src/components/Navbar.jsx`

**Purpose**: Top navigation bar

**Features**:
- Logo (links to home)
- Search bar
- Cart icon with item count
- Login/Signup links
- Categories dropdown

**Structure**:
```jsx
export default function Navbar() {
  const { totalItems } = useCart();
  const { user, isAuthenticated } = useUser();
  
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Amazon" />
      </Link>
      
      <div className="search-bar">
        <input type="text" placeholder="Search products" />
        <button>Search</button>
      </div>
      
      <Link to="/cart">
        <span>Cart ({totalItems})</span>
      </Link>
      
      {isAuthenticated ? (
        <span>Hello, {user.name}</span>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}
```

---

### ProductCart.jsx

**Location**: `src/components/ProductCart.jsx`

**Purpose**: Single product card

**Props**:
```jsx
{
  id: number,
  title: string,
  price: number,
  image: string,
  rating: { rate: number, count: number }
}
```

**Structure**:
```jsx
export default function ProductCart({ id, title, price, image, rating }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/product/${id}`);
  };
  
  const handleAddToCart = (e) => {
    e.stopPropagation();  // Don't trigger card click
    addToCart({ id, title, price, image });
  };
  
  return (
    <div className="product-card" onClick={handleClick}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <div className="rating">
        ⭐ {rating.rate} ({rating.count})
      </div>
      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
```

---

## Layout Components

### MainLayout.jsx

**Location**: `src/components/MainLayout.jsx`

**Purpose**: Wrapper for main pages (with navbar & footer)

**Structure**:
```jsx
export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
```

**Usage**:
```jsx
<MainLayout>
  <HomePage />
</MainLayout>
```

---

### AuthLayout.jsx

**Location**: `src/components/AuthLayout.jsx`

**Purpose**: Wrapper for auth pages (no navbar/footer)

**Structure**:
```jsx
export default function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <div className="auth-container">
        {children}
      </div>
    </div>
  );
}
```

**Usage**:
```jsx
<AuthLayout>
  <LoginPage />
</AuthLayout>
```
