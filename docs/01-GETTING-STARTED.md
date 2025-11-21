# 🚀 Getting Started - Amazon Clone Project

## 📖 Introduction

Welcome to the Amazon Clone project! This guide is for developers who are new to web development and only know HTML and CSS. We'll explain everything from scratch.

## 🤔 What is React?

### Simple Explanation
Remember how in HTML, you write repetitive code? React lets you create **reusable components** (like building blocks) for your website.

**Traditional HTML (Repetitive):**
```html
<div class="product">
  <h2>Laptop</h2>
  <p>Price: $999</p>
</div>
<div class="product">
  <h2>Phone</h2>
  <p>Price: $699</p>
</div>
```

**React (Reusable Component):**
```jsx
function ProductCard({ name, price }) {
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
    </div>
  );
}

<ProductCard name="Laptop" price={999} />
<ProductCard name="Phone" price={699} />
```

### Key Benefits:
1. **Reusability**: Write once, use everywhere
2. **Dynamic**: Content updates automatically
3. **Component-Based**: Break website into small pieces
4. **Fast**: Only updates changed parts

## 🏗️ What is a Framework?

Think of building a house:
- **Without Framework**: Make every brick yourself
- **With Framework**: Get pre-made bricks and tools, just assemble!

### Frameworks Used in This Project:

1. **React** - Build user interfaces
2. **React Router** - Navigate between pages
3. **Redux Toolkit** - Manage application data
4. **TailwindCSS** - Style components quickly
5. **Vite** - Fast development server
6. **Framer Motion** - Smooth animations

## 🎯 What Does This Application Do?

This e-commerce website lets users:
- Browse products
- Search and filter
- View product details
- Add items to cart
- Login/Signup
- Works on mobile and desktop

## 🚀 How to Run the Project

### Prerequisites:

1. **Node.js** (v18+) - Download from https://nodejs.org/
2. **npm** - Comes with Node.js
3. **Git** - Download from https://git-scm.com/

### Installation Steps:

```bash
# 1. Navigate to project folder
cd d:\amazon-clone

# 2. Install dependencies (takes 2-5 minutes)
npm install

# 3. Start development server
npm run dev

# 4. Open browser and go to:
# http://localhost:5173/
```

### Other Commands:

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Check code quality
npm run lint
```

### Making Changes:
1. Edit any file in `src/` folder
2. Save the file
3. Browser automatically refreshes!

## 📁 Project Structure Overview

```
amazon-clone/
├── src/
│   ├── api/              # Fetch data from server
│   ├── assets/           # Images, icons
│   ├── components/       # Reusable UI pieces
│   ├── context/          # Global state
│   ├── pages/            # Full page components
│   ├── redux/            # State management
│   ├── routes/           # Page routing
│   ├── App.jsx           # Main app
│   └── main.jsx          # Entry point
├── index.html            # HTML template
├── package.json          # Dependencies
└── vite.config.js        # Build config
```

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.1.1 | UI library |
| Vite | 7.1.2 | Build tool |
| React Router | 7.8.1 | Navigation |
| TailwindCSS | 4.1.12 | Styling |
| Redux Toolkit | 2.8.2 | State management |
| Framer Motion | 12.23.12 | Animations |
| React Query | 5.85.2 | Data fetching |

## 📚 Next Steps

1. Read `02-PROJECT-STRUCTURE.md` - Understand file organization
2. Read `03-KEY-CONCEPTS.md` - Learn React basics
3. Read `04-FILE-EXPLANATIONS.md` - Detailed file breakdown
4. Read `05-TEAM-COLLABORATION.md` - How to work together
