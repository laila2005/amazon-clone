# 🎓 Key React Concepts for Beginners

## Table of Contents
1. [Components](#1-components)
2. [Props](#2-props)
3. [State](#3-state)
4. [Hooks](#4-hooks)
5. [JSX](#5-jsx)
6. [Event Handling](#6-event-handling)
7. [Conditional Rendering](#7-conditional-rendering)
8. [Lists and Keys](#8-lists-and-keys)
9. [API Calls](#9-api-calls)
10. [localStorage](#10-localstorage)

---

## 1. Components

### What are Components?
Reusable pieces of UI code. Like LEGO blocks!

### Types of Components:

#### Function Components (Modern):
```jsx
function Welcome() {
  return <h1>Hello!</h1>;
}
```

#### With Props:
```jsx
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage
<Welcome name="John" />
```

### Real Example from Project:

```jsx
// ProductCard component
function ProductCard({ title, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

// Use it multiple times
<ProductCard title="Laptop" price={999} image="laptop.jpg" />
<ProductCard title="Phone" price={699} image="phone.jpg" />
<ProductCard title="Tablet" price={499} image="tablet.jpg" />
```

### Benefits:
- ✅ Write once, use everywhere
- ✅ Easy to maintain
- ✅ Easy to test
- ✅ Organized code

---

## 2. Props

### What are Props?
Data passed from parent to child component. Like function parameters!

### Basic Example:

```jsx
// Parent component
function App() {
  return <Greeting name="Alice" age={25} />;
}

// Child component receives props
function Greeting({ name, age }) {
  return (
    <div>
      <p>Hello, {name}!</p>
      <p>You are {age} years old.</p>
    </div>
  );
}
```

### Props are Read-Only:

```jsx
// ❌ WRONG - Cannot modify props
function Greeting({ name }) {
  name = "Bob";  // ERROR!
  return <p>Hello, {name}</p>;
}

// ✅ CORRECT - Use state for changes
function Greeting({ initialName }) {
  const [name, setName] = useState(initialName);
  return <p>Hello, {name}</p>;
}
```

### Default Props:

```jsx
function Button({ text = "Click Me", color = "blue" }) {
  return <button className={color}>{text}</button>;
}

// Uses defaults
<Button />  // "Click Me" button

// Override defaults
<Button text="Submit" color="green" />
```

### Props in Our Project:

```jsx
// In ProductsPage.jsx
<ProductCart 
  id={product.id}
  title={product.title}
  price={product.price}
  image={product.image}
  rating={product.rating}
/>
```

---

## 3. State

### What is State?
Data that can change over time. When state changes, component re-renders!

### useState Hook:

```jsx
import { useState } from 'react';

function Counter() {
  // [currentValue, functionToUpdateIt] = useState(initialValue)
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

### Multiple State Variables:

```jsx
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  
  return (
    <form>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
      />
    </form>
  );
}
```

### State with Objects:

```jsx
function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });
  
  const updateName = (newName) => {
    setUser({
      ...user,        // Keep other properties
      name: newName   // Update only name
    });
  };
  
  return <div>{user.name}</div>;
}
```

### State in Our Project:

```jsx
// In CartContext.jsx
const [state, dispatch] = useReducer(cartReducer, initialState);

// In ProductsPage.jsx
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [filters, setFilters] = useState({
  category: '',
  minPrice: 0,
  maxPrice: 1000
});
```

---

## 4. Hooks

### What are Hooks?
Special functions that let you use React features.

### Common Hooks:

#### 1. useState - Manage State
```jsx
const [value, setValue] = useState(initialValue);
```

#### 2. useEffect - Side Effects
```jsx
import { useEffect } from 'react';

function Component() {
  useEffect(() => {
    // Code runs after render
    console.log('Component rendered!');
    
    // Cleanup function (optional)
    return () => {
      console.log('Component unmounted!');
    };
  }, []); // Dependencies array
  
  return <div>Hello</div>;
}
```

**Dependency Array**:
```jsx
// Run once on mount
useEffect(() => {
  fetchData();
}, []);

// Run when 'count' changes
useEffect(() => {
  console.log('Count changed:', count);
}, [count]);

// Run on every render (avoid!)
useEffect(() => {
  console.log('Rendered');
});
```

#### 3. useContext - Access Global State
```jsx
import { useContext } from 'react';
import { CartContext } from './CartContext';

function Component() {
  const { cart, addToCart } = useContext(CartContext);
  
  return <div>Cart has {cart.length} items</div>;
}

// Or use custom hook
import { useCart } from './CartContext';

function Component() {
  const { cart, addToCart } = useCart();
  return <div>Cart has {cart.length} items</div>;
}
```

#### 4. useParams - Get URL Parameters
```jsx
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();  // From /product/:id
  
  return <div>Product ID: {id}</div>;
}
```

#### 5. useNavigate - Navigate Programmatically
```jsx
import { useNavigate } from 'react-router-dom';

function Component() {
  const navigate = useNavigate();
  
  const goToCart = () => {
    navigate('/cart');
  };
  
  return <button onClick={goToCart}>Go to Cart</button>;
}
```

#### 6. useReducer - Complex State Logic
```jsx
import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

### Hooks in Our Project:

```jsx
// CartContext.jsx
const [state, dispatch] = useReducer(cartReducer, loadState());

useEffect(() => {
  localStorage.setItem('amazonCloneCart', JSON.stringify(state));
}, [state]);

// ProductDetailPage.jsx
const { id } = useParams();
const navigate = useNavigate();
const { addToCart } = useCart();
```

---

## 5. JSX

### What is JSX?
JavaScript + XML. Looks like HTML but it's JavaScript!

### Key Differences from HTML:

```jsx
// HTML
<div class="container"></div>

// JSX
<div className="container"></div>

// HTML
<label for="name"></label>

// JSX
<label htmlFor="name"></label>

// HTML
<input disabled>

// JSX
<input disabled={true} />
```

### Embedding JavaScript:

```jsx
function Greeting() {
  const name = "Alice";
  const age = 25;
  
  return (
    <div>
      <p>Hello, {name}!</p>
      <p>You are {age} years old.</p>
      <p>Next year you'll be {age + 1}!</p>
    </div>
  );
}
```

### Expressions in JSX:

```jsx
function Component() {
  const isLoggedIn = true;
  const items = [1, 2, 3];
  
  return (
    <div>
      {/* Ternary operator */}
      {isLoggedIn ? <p>Welcome!</p> : <p>Please login</p>}
      
      {/* Logical AND */}
      {isLoggedIn && <p>You are logged in</p>}
      
      {/* Function call */}
      {items.map(item => <p key={item}>{item}</p>)}
      
      {/* Math */}
      <p>Total: {10 + 20}</p>
    </div>
  );
}
```

### Inline Styles:

```jsx
function Component() {
  const styles = {
    color: 'blue',
    fontSize: '20px',
    backgroundColor: 'lightgray'
  };
  
  return (
    <div style={styles}>
      Styled text
    </div>
  );
}
```

### Comments in JSX:

```jsx
function Component() {
  return (
    <div>
      {/* This is a comment */}
      <p>Hello</p>
      
      {/* 
        Multi-line
        comment
      */}
    </div>
  );
}
```

---

## 6. Event Handling

### Common Events:

```jsx
function EventExamples() {
  // Click event
  const handleClick = () => {
    console.log('Clicked!');
  };
  
  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page reload
    console.log('Form submitted!');
  };
  
  // Input change
  const handleChange = (e) => {
    console.log('Input value:', e.target.value);
  };
  
  // Mouse events
  const handleMouseEnter = () => {
    console.log('Mouse entered!');
  };
  
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      
      <div onMouseEnter={handleMouseEnter}>
        Hover me
      </div>
    </div>
  );
}
```

### Passing Arguments:

```jsx
function Component() {
  const handleClick = (id) => {
    console.log('Clicked item:', id);
  };
  
  return (
    <div>
      {/* Method 1: Arrow function */}
      <button onClick={() => handleClick(1)}>Item 1</button>
      
      {/* Method 2: bind */}
      <button onClick={handleClick.bind(null, 2)}>Item 2</button>
    </div>
  );
}
```

### Events in Our Project:

```jsx
// ProductCart.jsx
<button onClick={() => addToCart(product)}>
  Add to Cart
</button>

// CartPage.jsx
<button onClick={() => removeFromCart(item.id)}>
  Remove
</button>

<button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
  +
</button>
```

---

## 7. Conditional Rendering

### Method 1: && Operator

```jsx
function Component({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn && <p>Welcome back!</p>}
    </div>
  );
}
```

### Method 2: Ternary Operator

```jsx
function Component({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome back!</p>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
}
```

### Method 3: If Statement

```jsx
function Component({ isLoggedIn }) {
  if (isLoggedIn) {
    return <p>Welcome back!</p>;
  }
  return <p>Please login</p>;
}
```

### Method 4: Switch Statement

```jsx
function Component({ status }) {
  switch (status) {
    case 'loading':
      return <p>Loading...</p>;
    case 'error':
      return <p>Error occurred!</p>;
    case 'success':
      return <p>Success!</p>;
    default:
      return <p>Unknown status</p>;
  }
}
```

### In Our Project:

```jsx
// ProductsPage.jsx
{loading ? (
  <p>Loading products...</p>
) : (
  <div className="products-grid">
    {products.map(product => (
      <ProductCart key={product.id} {...product} />
    ))}
  </div>
)}

// CartPage.jsx
{cart.length === 0 ? (
  <p>Your cart is empty</p>
) : (
  <div>
    {cart.map(item => (
      <CartItem key={item.id} {...item} />
    ))}
  </div>
)}
```

---

## 8. Lists and Keys

### Rendering Lists:

```jsx
function ProductList() {
  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 699 },
    { id: 3, name: 'Tablet', price: 499 }
  ];
  
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}
```

### Why Keys are Important:

```jsx
// ❌ BAD - Using index as key
{products.map((product, index) => (
  <div key={index}>...</div>
))}

// ✅ GOOD - Using unique ID
{products.map(product => (
  <div key={product.id}>...</div>
))}
```

### Keys Help React:
- Identify which items changed
- Improve performance
- Maintain component state

### In Our Project:

```jsx
// ProductsPage.jsx
{products.map(product => (
  <ProductCart 
    key={product.id}  // Unique key!
    {...product}
  />
))}

// CartPage.jsx
{cart.map(item => (
  <CartItem 
    key={item.id}
    {...item}
  />
))}
```

---

## 9. API Calls

### Using Fetch:

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
        const response = await fetch('https://api.example.com/products');
        
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
  }, []); // Run once on mount
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```

### In Our Project:

```jsx
// productApi.js
export const getProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// ProductsPage.jsx
useEffect(() => {
  async function loadProducts() {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  }
  loadProducts();
}, []);
```

---

## 10. localStorage

### What is localStorage?
Browser storage that persists data even after page refresh.

### Basic Operations:

```jsx
// Save data
localStorage.setItem('key', 'value');

// Save object (must stringify)
const user = { name: 'Alice', age: 25 };
localStorage.setItem('user', JSON.stringify(user));

// Get data
const value = localStorage.getItem('key');

// Get object (must parse)
const userString = localStorage.getItem('user');
const user = JSON.parse(userString);

// Remove item
localStorage.removeItem('key');

// Clear all
localStorage.clear();
```

### In React Component:

```jsx
function Component() {
  const [data, setData] = useState(() => {
    // Load from localStorage on mount
    const saved = localStorage.getItem('myData');
    return saved ? JSON.parse(saved) : [];
  });
  
  useEffect(() => {
    // Save to localStorage when data changes
    localStorage.setItem('myData', JSON.stringify(data));
  }, [data]);
  
  return <div>...</div>;
}
```

### In Our Project:

```jsx
// CartContext.jsx
const loadState = () => {
  try {
    const savedState = localStorage.getItem('amazonCloneCart');
    if (savedState) {
      return JSON.parse(savedState);
    }
    return initialState;
  } catch (error) {
    console.error('Error loading cart:', error);
    return initialState;
  }
};

useEffect(() => {
  try {
    localStorage.setItem('amazonCloneCart', JSON.stringify(state));
  } catch (error) {
    console.error('Error saving cart:', error);
  }
}, [state]);
```

---

## Quick Reference Cheat Sheet

```jsx
// Component
function MyComponent({ prop1, prop2 }) {
  // State
  const [state, setState] = useState(initialValue);
  
  // Effect
  useEffect(() => {
    // Side effects
  }, [dependencies]);
  
  // Event handler
  const handleClick = () => {
    setState(newValue);
  };
  
  // Render
  return (
    <div className="my-class">
      {/* Conditional */}
      {condition && <p>Show this</p>}
      
      {/* List */}
      {items.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
      
      {/* Event */}
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
```
