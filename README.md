# 🛒 Amazon Clone - E-commerce Website

A fully functional e-commerce website clone built with React, featuring product browsing, shopping cart, user authentication, and responsive design.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser at http://localhost:5173/
```

## 📚 Complete Documentation

**New to the project? Start here!**

We've created comprehensive documentation for developers of all skill levels, especially those who only know HTML and CSS.

### 📖 [Read Full Documentation](./docs/README.md)

The documentation includes:

1. **[Getting Started](./docs/01-GETTING-STARTED.md)** - What is React? How to run the project?
2. **[Project Structure](./docs/02-PROJECT-STRUCTURE.md)** - Understanding the codebase
3. **[Key Concepts](./docs/03-KEY-CONCEPTS.md)** - React fundamentals explained
4. **[File Explanations](./docs/04-FILE-EXPLANATIONS.md)** - Detailed file breakdowns
5. **[Team Collaboration](./docs/05-TEAM-COLLABORATION.md)** - How to work together
6. **[Common Tasks](./docs/06-COMMON-TASKS.md)** - Practical how-to guides

## ✨ Features

- 🏠 **Homepage** with hero slider and product categories
- 🛍️ **Product Browsing** with filters (category, price, rating)
- 🔍 **Product Details** page with full information
- 🛒 **Shopping Cart** with add/remove/update functionality
- 👤 **User Authentication** (Login/Signup)
- 📱 **Responsive Design** (Mobile, Tablet, Desktop)
- 💾 **Persistent Cart** using localStorage
- 🎨 **Modern UI** with TailwindCSS

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.1.1 | UI Library |
| Vite | 7.1.2 | Build Tool |
| React Router | 7.8.1 | Navigation |
| TailwindCSS | 4.1.12 | Styling |
| Redux Toolkit | 2.8.2 | State Management |
| Framer Motion | 12.23.12 | Animations |
| React Query | 5.85.2 | Data Fetching |

## 📁 Project Structure

```
amazon-clone/
├── docs/                    # 📚 Complete documentation
├── src/
│   ├── api/                # API calls
│   ├── assets/             # Images & icons
│   ├── components/         # Reusable components
│   ├── context/            # Global state (Cart, User)
│   ├── pages/              # Page components
│   ├── redux/              # Redux state
│   ├── routes/             # Routing configuration
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
├── index.html              # HTML template
└── package.json            # Dependencies
```

## 🎯 Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🌐 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with products |
| Products | `/products` | All products with filters |
| Product Detail | `/product/:id` | Single product details |
| Cart | `/cart` | Shopping cart |
| Login | `/login` | User login |
| Signup | `/signup` | User registration |

## 🎨 Key Components

- **Navbar** - Top navigation with search and cart
- **Footer** - Bottom footer with links
- **ProductCard** - Reusable product card
- **HeroSlider** - Main banner carousel
- **ProductFilter** - Filter sidebar
- **CartNotification** - Cart popup

## 🔧 Configuration Files

- `vite.config.js` - Vite configuration
- `tailwind.config.js` - TailwindCSS configuration
- `eslint.config.js` - ESLint rules
- `package.json` - Dependencies and scripts

## 👥 Team Roles

Perfect for teams of 4 people:

1. **UI/Styling Specialist** - CSS, TailwindCSS, responsive design
2. **Components Developer** - Building reusable components
3. **Pages Developer** - Creating full page layouts
4. **State, Logic & Integration** - State management, API calls, testing, deployment

See [Team Collaboration Guide](./docs/05-TEAM-COLLABORATION.md) for details.

## 📖 Learning Resources

- [React Documentation](https://react.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [React Router Documentation](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)

## 🐛 Troubleshooting

**Project won't start?**
```bash
rm -rf node_modules
npm install
npm run dev
```

**Port already in use?**
- Kill process on port 5173
- Or change port in `vite.config.js`

**Changes not showing?**
- Hard refresh (Ctrl + Shift + R)
- Clear browser cache
- Restart dev server

## 📝 Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "Add: your feature description"

# Push to GitHub
git push origin feature/your-feature

# Create Pull Request on GitHub
```

## 🎓 For Beginners

**Never used React before?** No problem!

1. Read our [Getting Started Guide](./docs/01-GETTING-STARTED.md)
2. Learn [Key Concepts](./docs/03-KEY-CONCEPTS.md)
3. Follow [Common Tasks](./docs/06-COMMON-TASKS.md)

We explain everything from scratch, assuming you only know HTML and CSS!

## 📞 Getting Help

- **Team Chat**: Slack/Discord
- **Issues**: GitHub Issues
- **Documentation**: `docs/` folder
- **Stack Overflow**: For general questions

## 🙏 Contributing

1. Read the [Team Collaboration Guide](./docs/05-TEAM-COLLABORATION.md)
2. Pick a task from your role
3. Create a feature branch
4. Make your changes
5. Submit a Pull Request
6. Wait for code review

## 📄 License

This project is for educational purposes.

## 🎉 Acknowledgments

- FakeStore API for product data
- React team for amazing documentation
- TailwindCSS for beautiful styling
- All team members for their contributions

---

**Ready to start?** 👉 [Read the Full Documentation](./docs/README.md)

Happy Coding! 🚀
