# 🛠️ Common Tasks & How-To Guide

## Table of Contents
1. [Adding a New Page](#adding-a-new-page)
2. [Creating a Component](#creating-a-component)
3. [Styling with TailwindCSS](#styling-with-tailwindcss)
4. [Fetching Data from API](#fetching-data-from-api)
5. [Adding to Cart](#adding-to-cart)
6. [Form Handling](#form-handling)
7. [Navigation](#navigation)
8. [Adding Images](#adding-images)
9. [Making Components Responsive](#making-components-responsive)
10. [Debugging Common Issues](#debugging-common-issues)

---

## Adding a New Page

### Step 1: Create Page File

Create new file in `src/pages/`:

```jsx
// src/pages/AboutPage.jsx
import React from 'react';

export default function AboutPage() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>Welcome to our Amazon clone!</p>
    </div>
  );
}
```

### Step 2: Add Route

Edit `src/routes/AppRoutes.jsx`:

```jsx
import AboutPage from '../pages/AboutPage';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Existing routes... */}
      
      {/* Add new route */}
      <Route 
        path="/about" 
        element={<MainLayout><AboutPage /></MainLayout>} 
      />
    </Routes>
  );
}
```

### Step 3: Add Navigation Link

In `Navbar.jsx` or any component:

```jsx
import { Link } from 'react-router-dom';

<Link to="/about">About</Link>
```

### Complete Example

```jsx
// src/pages/ContactPage.jsx
import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input 
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <textarea 
          placeholder="Message"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
```

---

## Creating a Component

### Step 1: Create Component File

```jsx
// src/components/Button.jsx
import React from 'react';

export default function Button({ 
  text, 
  onClick, 
  variant = 'primary',
  disabled = false 
}) {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
```

### Step 2: Add Styles

```css
/* src/components/Button.css */
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.btn-primary {
  background-color: #ff9900;
  color: white;
}

.btn-secondary {
  background-color: #232f3e;
  color: white;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### Step 3: Use Component

```jsx
import Button from './components/Button';

function MyPage() {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  
  return (
    <div>
      <Button text="Click Me" onClick={handleClick} />
      <Button text="Secondary" onClick={handleClick} variant="secondary" />
      <Button text="Disabled" onClick={handleClick} disabled={true} />
    </div>
  );
}
```

### More Complex Component Example

```jsx
// src/components/ProductCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

export default function ProductCard({ 
  id, 
  title, 
  price, 
  image, 
  rating 
}) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };
  
  const handleAddToCart = (e) => {
    e.stopPropagation(); // Don't trigger card click
    addToCart({ id, title, price, image });
  };
  
  return (
    <div className="product-card" onClick={handleCardClick}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div className="price">${price}</div>
      <div className="rating">
        ⭐ {rating.rate} ({rating.count} reviews)
      </div>
      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
```

---

## Styling with TailwindCSS

### Basic Classes

```jsx
// Container
<div className="container mx-auto px-4">
  Content
</div>

// Flexbox
<div className="flex justify-between items-center">
  <div>Left</div>
  <div>Right</div>
</div>

// Grid
<div className="grid grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

// Text
<h1 className="text-3xl font-bold text-gray-800">
  Heading
</h1>

// Colors
<div className="bg-blue-500 text-white">
  Blue background, white text
</div>

// Spacing
<div className="p-4 m-2">
  Padding 4, Margin 2
</div>

// Rounded corners
<div className="rounded-lg">
  Rounded
</div>

// Shadow
<div className="shadow-md">
  With shadow
</div>
```

### Responsive Design

```jsx
// Mobile first approach
<div className="
  text-sm          // Small text on mobile
  md:text-base     // Base text on medium screens
  lg:text-lg       // Large text on large screens
">
  Responsive text
</div>

// Grid columns
<div className="
  grid
  grid-cols-1      // 1 column on mobile
  md:grid-cols-2   // 2 columns on tablet
  lg:grid-cols-4   // 4 columns on desktop
  gap-4
">
  {products.map(product => (
    <ProductCard key={product.id} {...product} />
  ))}
</div>

// Hide/Show
<div className="
  hidden           // Hidden on mobile
  md:block         // Visible on medium+
">
  Desktop only
</div>
```

### Hover Effects

```jsx
<button className="
  bg-blue-500
  hover:bg-blue-600    // Darker on hover
  transition           // Smooth transition
  duration-300         // 300ms
">
  Hover me
</button>

<div className="
  transform
  hover:scale-105      // Slightly bigger on hover
  transition
">
  Hover to scale
</div>
```

### Complete Example

```jsx
function ProductCard({ title, price, image }) {
  return (
    <div className="
      bg-white
      rounded-lg
      shadow-md
      overflow-hidden
      hover:shadow-xl
      transition
      duration-300
      cursor-pointer
    ">
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-2xl font-bold text-blue-600">
          ${price}
        </p>
        <button className="
          w-full
          mt-4
          bg-yellow-500
          hover:bg-yellow-600
          text-white
          font-semibold
          py-2
          px-4
          rounded
          transition
        ">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
```

---

## Fetching Data from API

### Basic Fetch

```jsx
import { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchProducts();
  }, []); // Empty array = run once
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
}
```

### Using API Functions

```jsx
// src/api/productApi.js
export const getProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  return response.json();
};

// In component
import { getProducts } from '../api/productApi';

function ProductList() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();
      setProducts(data);
    }
    loadProducts();
  }, []);
  
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
```

### Fetch with Parameters

```jsx
// Get single product
const getProduct = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  return response.json();
};

// In component
const { id } = useParams();
const [product, setProduct] = useState(null);

useEffect(() => {
  async function loadProduct() {
    const data = await getProduct(id);
    setProduct(data);
  }
  loadProduct();
}, [id]);
```

### POST Request

```jsx
const createProduct = async (productData) => {
  const response = await fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(productData)
  });
  return response.json();
};

// In component
const handleSubmit = async (e) => {
  e.preventDefault();
  const newProduct = {
    title: 'New Product',
    price: 99.99,
    description: 'Product description'
  };
  const result = await createProduct(newProduct);
  console.log('Created:', result);
};
```

---

## Adding to Cart

### Using Cart Context

```jsx
import { useCart } from '../context/CartContext';

function ProductDetail() {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = {
    id: 1,
    title: 'Product Name',
    price: 99.99,
    image: 'url'
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert('Added to cart!');
  };
  
  return (
    <div>
      <h1>{product.title}</h1>
      <p>${product.price}</p>
      
      <input 
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        min="1"
      />
      
      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
```

### Display Cart Count

```jsx
import { useCart } from '../context/CartContext';

function Navbar() {
  const { totalItems } = useCart();
  
  return (
    <nav>
      <Link to="/cart">
        Cart ({totalItems})
      </Link>
    </nav>
  );
}
```

### Cart Page

```jsx
import { useCart } from '../context/CartContext';

function CartPage() {
  const { 
    cart, 
    totalAmount, 
    removeFromCart, 
    updateQuantity 
  } = useCart();
  
  if (cart.length === 0) {
    return <p>Your cart is empty</p>;
  }
  
  return (
    <div>
      <h1>Shopping Cart</h1>
      
      {cart.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
            -
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            +
          </button>
          
          <p>Subtotal: ${item.price * item.quantity}</p>
          
          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}
      
      <h2>Total: ${totalAmount}</h2>
      <button>Proceed to Checkout</button>
    </div>
  );
}
```

---

## Form Handling

### Basic Form

```jsx
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      
      <input 
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      
      <textarea 
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        required
      />
      
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Form with Validation

```jsx
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  
  const validate = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Submit form
    console.log('Valid!', { email, password });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      
      <div>
        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      
      <button type="submit">Login</button>
    </form>
  );
}
```

---

## Navigation

### Link Component

```jsx
import { Link } from 'react-router-dom';

// Basic link
<Link to="/about">About</Link>

// Link with state
<Link to="/product/1" state={{ from: 'homepage' }}>
  Product
</Link>

// External link
<a href="https://google.com" target="_blank" rel="noopener noreferrer">
  Google
</a>
```

### Programmatic Navigation

```jsx
import { useNavigate } from 'react-router-dom';

function Component() {
  const navigate = useNavigate();
  
  const goToCart = () => {
    navigate('/cart');
  };
  
  const goBack = () => {
    navigate(-1); // Go back one page
  };
  
  const goHome = () => {
    navigate('/', { replace: true }); // Replace history
  };
  
  return (
    <div>
      <button onClick={goToCart}>Go to Cart</button>
      <button onClick={goBack}>Go Back</button>
      <button onClick={goHome}>Go Home</button>
    </div>
  );
}
```

### Get URL Parameters

```jsx
import { useParams, useSearchParams } from 'react-router-dom';

function ProductDetail() {
  // Path parameter: /product/:id
  const { id } = useParams();
  
  // Query parameter: /products?category=electronics
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  
  return (
    <div>
      <p>Product ID: {id}</p>
      <p>Category: {category}</p>
    </div>
  );
}
```

---

## Adding Images

### Import and Use

```jsx
import logo from '../assets/logo.png';

function Header() {
  return (
    <img src={logo} alt="Logo" />
  );
}
```

### From Public Folder

```jsx
// Image in public/images/product.jpg
<img src="/images/product.jpg" alt="Product" />
```

### From URL

```jsx
<img src="https://example.com/image.jpg" alt="Product" />
```

### With Fallback

```jsx
function ProductImage({ src, alt }) {
  const [imgSrc, setImgSrc] = useState(src);
  
  const handleError = () => {
    setImgSrc('/images/placeholder.jpg'); // Fallback image
  };
  
  return (
    <img 
      src={imgSrc} 
      alt={alt}
      onError={handleError}
    />
  );
}
```

---

## Making Components Responsive

### Mobile First Approach

```jsx
// Start with mobile styles, add larger breakpoints
<div className="
  w-full           // Full width on mobile
  md:w-1/2         // Half width on tablet
  lg:w-1/3         // Third width on desktop
  p-4              // Padding 4 on all
  md:p-6           // Padding 6 on tablet+
">
  Content
</div>
```

### Responsive Grid

```jsx
<div className="
  grid
  grid-cols-1      // 1 column on mobile
  sm:grid-cols-2   // 2 columns on small
  md:grid-cols-3   // 3 columns on medium
  lg:grid-cols-4   // 4 columns on large
  gap-4
">
  {products.map(product => (
    <ProductCard key={product.id} {...product} />
  ))}
</div>
```

### Hide/Show Elements

```jsx
// Show on mobile only
<div className="block md:hidden">
  Mobile menu
</div>

// Show on desktop only
<div className="hidden md:block">
  Desktop menu
</div>
```

### Responsive Text

```jsx
<h1 className="
  text-2xl         // 24px on mobile
  md:text-4xl      // 36px on tablet
  lg:text-6xl      // 60px on desktop
  font-bold
">
  Heading
</h1>
```

---

## Debugging Common Issues

### Console Logging

```jsx
function Component() {
  const [data, setData] = useState([]);
  
  // Log when component renders
  console.log('Component rendered', data);
  
  useEffect(() => {
    console.log('Effect ran');
  }, []);
  
  const handleClick = () => {
    console.log('Button clicked');
  };
  
  return <button onClick={handleClick}>Click</button>;
}
```

### React DevTools

1. Install React DevTools browser extension
2. Open browser DevTools (F12)
3. Go to "Components" tab
4. Inspect component props and state

### Common Errors

**Error: "Cannot read property of undefined"**
```jsx
// ❌ Problem
<p>{product.title}</p>  // product might be null

// ✅ Solution
<p>{product?.title}</p>  // Optional chaining

// Or
{product && <p>{product.title}</p>}
```

**Error: "Each child should have a unique key"**
```jsx
// ❌ Problem
{items.map(item => <div>{item.name}</div>)}

// ✅ Solution
{items.map(item => <div key={item.id}>{item.name}</div>)}
```

**Error: "Too many re-renders"**
```jsx
// ❌ Problem
<button onClick={handleClick()}>Click</button>  // Calls immediately

// ✅ Solution
<button onClick={handleClick}>Click</button>  // Passes function
<button onClick={() => handleClick()}>Click</button>  // Arrow function
```

### Network Debugging

```jsx
// Check API calls in Network tab
async function fetchData() {
  console.log('Fetching...');
  const response = await fetch(url);
  console.log('Response:', response);
  const data = await response.json();
  console.log('Data:', data);
  return data;
}
```
