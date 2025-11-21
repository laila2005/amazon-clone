# 👥 Team Collaboration Guide

## Team Structure (4 People)

### 🎨 Person 1: UI/Styling Specialist

**Role**: Make the website look beautiful and responsive

**Skills Needed**:
- CSS (you already know!)
- TailwindCSS (easy to learn)
- Responsive design

**Responsibilities**:
- Style all components
- Make website responsive (mobile, tablet, desktop)
- Fix layout issues
- Add animations and transitions
- Ensure consistent design

**Files to Work On**:
```
src/
├── index.css                    # Global styles
├── App.css                      # App-wide styles
├── components/
│   ├── Navbar.css              # Navbar styles
│   ├── heroSlider.css          # Slider styles
│   ├── ProductFilter.css       # Filter styles
│   ├── footer-responsive.css   # Footer responsive
│   └── *.css                   # All CSS files
└── pages/
    └── *.module.css            # Page-specific styles
```

**Weekly Tasks Example**:
- [ ] Week 1: Style navbar and make it responsive
- [ ] Week 2: Style product cards and grid layout
- [ ] Week 3: Style cart page and checkout
- [ ] Week 4: Add animations and polish
- [ ] Week 5: Fix mobile view issues

**Learning Resources**:
- TailwindCSS: https://tailwindcss.com/docs
- CSS Flexbox: https://flexboxfroggy.com/
- CSS Grid: https://cssgridgarden.com/

---

### 🧩 Person 2: Components Developer

**Role**: Build reusable UI components

**Skills Needed**:
- Basic React
- Props
- JSX
- Component composition

**Responsibilities**:
- Create new components
- Make components reusable
- Handle component props
- Ensure components work together

**Files to Work On**:
```
src/components/
├── ProductCart.jsx              # Product card
├── Button.jsx                   # Reusable button
├── Input.jsx                    # Reusable input
├── Rating.jsx                   # Star rating
├── Loading.jsx                  # Loading spinner
├── Modal.jsx                    # Modal dialog
├── Dropdown.jsx                 # Dropdown menu
└── ui/                          # UI components folder
```

**Weekly Tasks Example**:
- [ ] Week 1: Create Button and Input components
- [ ] Week 2: Build ProductCard component
- [ ] Week 3: Create Rating and Review components
- [ ] Week 4: Build Modal and Dropdown
- [ ] Week 5: Create Loading states

**Component Checklist**:
- [ ] Accepts props correctly
- [ ] Has default props
- [ ] Handles edge cases
- [ ] Styled properly
- [ ] Documented with comments

---

### 📄 Person 3: Pages Developer

**Role**: Build full page layouts

**Skills Needed**:
- React components
- React Router
- State management
- Combining components

**Responsibilities**:
- Create page layouts
- Connect components together
- Handle page-specific logic
- Implement routing

**Files to Work On**:
```
src/pages/
├── HomePage.jsx                 # Landing page
├── ProductsPage.jsx             # All products
├── ProductDetailPage.jsx        # Product details
├── CartPage.jsx                 # Shopping cart
├── LoginPage.jsx                # Login form
├── SignupPage.jsx               # Registration
├── CheckoutPage.jsx             # Checkout
└── ProfilePage.jsx              # User profile
```

**Weekly Tasks Example**:
- [ ] Week 1: Build HomePage layout
- [ ] Week 2: Create ProductsPage with filters
- [ ] Week 3: Build ProductDetailPage
- [ ] Week 4: Create CartPage
- [ ] Week 5: Build CheckoutPage

**Page Checklist**:
- [ ] Uses correct layout (MainLayout/AuthLayout)
- [ ] Fetches required data
- [ ] Handles loading states
- [ ] Handles errors
- [ ] Mobile responsive

---

### ⚙️ Person 4: State, Logic & Integration

**Role**: Manage application state, logic, and ensure everything works together

**Skills Needed**:
- JavaScript
- React hooks
- Context API
- API calls
- State management
- Git
- Debugging
- Testing

**Responsibilities**:
- Implement cart functionality
- Handle user authentication
- Fetch data from APIs
- Manage global state
- Handle form validation
- Test all features
- Fix integration bugs
- Merge branches
- Code review

**Files to Work On**:
```
src/
├── context/
│   ├── CartContext.jsx          # Cart state
│   ├── UserProvider.jsx         # User state
│   └── ProductContext.jsx       # Product state
├── api/
│   ├── productApi.js            # Product API
│   ├── authApi.js               # Auth API
│   └── cartApi.js               # Cart API
├── redux/
│   ├── store.js                 # Redux store
│   └── slices/                  # State slices
└── utils/
    ├── validation.js            # Form validation
    └── helpers.js               # Helper functions
```

**Also responsible for**:
- All files (testing and reviewing)
- `README.md`
- Documentation files
- Bug fixes across codebase

**Weekly Tasks Example**:
- [ ] Week 1: Implement cart add/remove logic + Set up Git workflow
- [ ] Week 2: Build user authentication + Test homepage
- [ ] Week 3: Create product filtering logic + Test cart
- [ ] Week 4: Implement search functionality + Test authentication
- [ ] Week 5: Add form validation + Final testing and deployment

**Checklist**:
- [ ] Functions are pure (no side effects)
- [ ] Error handling implemented
- [ ] Edge cases covered
- [ ] State updates correctly
- [ ] localStorage working
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Cart add/remove works
- [ ] Filters work
- [ ] Forms validate
- [ ] Mobile responsive
- [ ] No console errors

---

## Git Workflow

### Branch Strategy

```bash
main (Master branch)
  ├── dev (Development branch)
  │   ├── feature/navbar
  │   ├── feature/cart
  │   ├── feature/products-page
  │   ├── feature/styling
  │   └── feature/authentication
```

### Creating a Branch

```bash
# 1. Make sure you're on main/Master
git checkout Master

# 2. Pull latest changes
git pull origin Master

# 3. Create your feature branch
git checkout -b feature/your-feature-name

# Examples:
git checkout -b feature/navbar-styling
git checkout -b feature/cart-logic
git checkout -b feature/product-filters
```

### Working on Your Branch

```bash
# 1. Make changes to files

# 2. Check what changed
git status

# 3. Add files to staging
git add .
# Or add specific files
git add src/components/Navbar.jsx

# 4. Commit with descriptive message
git commit -m "Add responsive navbar styling"

# 5. Push to GitHub
git push origin feature/your-feature-name
```

### Merging Your Work

```bash
# 1. Make sure your branch is up to date
git checkout Master
git pull origin Master
git checkout feature/your-feature-name
git merge Master

# 2. Resolve any conflicts

# 3. Push your branch
git push origin feature/your-feature-name

# 4. Create Pull Request on GitHub

# 5. Wait for code review

# 6. After approval, merge to Master
```

### Commit Message Guidelines

**Good commit messages**:
```bash
git commit -m "Add product filter sidebar component"
git commit -m "Fix navbar responsive design on mobile"
git commit -m "Implement cart add/remove functionality"
git commit -m "Update ProductCard styling with hover effects"
```

**Bad commit messages**:
```bash
git commit -m "update"
git commit -m "fix"
git commit -m "changes"
git commit -m "asdf"
```

**Format**:
```
[Type]: [Short description]

Types:
- Add: New feature
- Fix: Bug fix
- Update: Modify existing feature
- Remove: Delete code
- Refactor: Improve code structure
- Style: CSS/styling changes
- Docs: Documentation changes
```

---

## Communication

### Daily Standup (15 minutes)

**Time**: Every morning at 10:00 AM

**Format**: Each person answers 3 questions:
1. What did you do yesterday?
2. What will you do today?
3. Any blockers?

**Example**:
```
Person 1 (Styling):
- Yesterday: Styled navbar and made it responsive
- Today: Will style product cards
- Blockers: Need product card component from Person 2

Person 2 (Components):
- Yesterday: Created Button and Input components
- Today: Will build ProductCard component
- Blockers: None
```

### Weekly Sprint Planning (1 hour)

**Time**: Every Monday at 2:00 PM

**Agenda**:
1. Review last week's progress
2. Demo completed features
3. Assign tasks for this week
4. Discuss challenges
5. Set goals

### Communication Channels

**Slack/Discord Channels**:
```
#general          - General discussion
#frontend         - Frontend-specific
#backend          - Backend-specific (if applicable)
#bugs             - Bug reports
#help             - Ask for help
#random           - Off-topic
```

**When to use each**:
- **Quick questions**: Slack/Discord
- **Bug reports**: GitHub Issues
- **Feature requests**: GitHub Issues
- **Code review**: GitHub Pull Requests
- **Documentation**: Google Docs

---

## Code Review Process

### Before Submitting PR

**Checklist**:
- [ ] Code works locally
- [ ] No console errors
- [ ] Follows project style
- [ ] Comments added for complex logic
- [ ] Tested on mobile
- [ ] Git commit messages are clear

### Creating Pull Request

1. Go to GitHub repository
2. Click "Pull Requests"
3. Click "New Pull Request"
4. Select your branch
5. Fill out PR template:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How to test these changes

## Screenshots
(if applicable)

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added
- [ ] No new warnings
- [ ] Works on mobile
```

### Reviewing Code

**As a Reviewer**:
1. Pull the branch locally
2. Test the changes
3. Check code quality
4. Leave comments
5. Approve or request changes

**What to Look For**:
- Does it work?
- Is it readable?
- Are there edge cases?
- Is it consistent with project style?
- Are there any security issues?

**Comment Examples**:
```
✅ Good: "Great work! The component is clean and reusable."

✅ Good: "Consider adding error handling here in case the API fails."

✅ Good: "This could be simplified using array.filter() instead of a loop."

❌ Bad: "This is wrong."

❌ Bad: "I don't like this."
```

---

## Task Management

### Using Trello/Jira

**Board Columns**:
```
To Do → In Progress → Review → Testing → Done
```

**Card Template**:
```
Title: Add product filter sidebar

Description:
Create a sidebar component that allows users to filter products by:
- Category
- Price range
- Rating

Assignee: Person 2
Priority: High
Due Date: Friday
Labels: component, frontend

Checklist:
- [ ] Create FilterSidebar component
- [ ] Add category checkboxes
- [ ] Add price range slider
- [ ] Add rating filter
- [ ] Style component
- [ ] Test on mobile
```

### Priority Levels

- **P0 (Critical)**: Blocks other work, fix immediately
- **P1 (High)**: Important feature, do this week
- **P2 (Medium)**: Nice to have, do when possible
- **P3 (Low)**: Future enhancement

---

## Meetings

### Weekly Schedule

**Monday**:
- 10:00 AM: Daily Standup (15 min)
- 2:00 PM: Sprint Planning (1 hour)

**Tuesday - Thursday**:
- 10:00 AM: Daily Standup (15 min)

**Friday**:
- 10:00 AM: Daily Standup (15 min)
- 3:00 PM: Sprint Review & Retro (1 hour)

### Sprint Review & Retrospective

**Sprint Review (30 min)**:
- Demo completed features
- Show progress to stakeholders
- Get feedback

**Retrospective (30 min)**:
- What went well?
- What didn't go well?
- What can we improve?

**Format**:
```
What went well:
- Completed navbar feature
- Good communication
- Fixed all bugs

What didn't go well:
- Merge conflicts
- Missed deadline on cart page

Action items:
- Merge main branch daily to avoid conflicts
- Break down tasks into smaller pieces
```

---

## Conflict Resolution

### Merge Conflicts

**When they happen**:
- Two people edit the same file
- Changes overlap

**How to resolve**:
```bash
# 1. Pull latest changes
git pull origin Master

# 2. Git will show conflicts
# Look for markers in files:
<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> Master

# 3. Edit file to keep correct code

# 4. Remove conflict markers

# 5. Add and commit
git add .
git commit -m "Resolve merge conflict"
git push
```

### Disagreements

**Process**:
1. Discuss calmly
2. Present your reasoning
3. Listen to others
4. Try both approaches if needed
5. Vote if necessary
6. Accept team decision

---

## Best Practices

### Code Style

**Naming Conventions**:
```javascript
// Components: PascalCase
function ProductCard() {}

// Variables: camelCase
const productList = [];

// Constants: UPPER_SNAKE_CASE
const API_BASE_URL = "https://api.example.com";

// CSS classes: kebab-case
.product-card {}
```

**File Organization**:
```javascript
// 1. Imports
import React from 'react';
import { useState } from 'react';

// 2. Constants
const MAX_ITEMS = 10;

// 3. Component
function MyComponent() {
  // 3a. Hooks
  const [state, setState] = useState();
  
  // 3b. Functions
  const handleClick = () => {};
  
  // 3c. Render
  return <div>...</div>;
}

// 4. Export
export default MyComponent;
```

### Comments

**When to comment**:
```javascript
// ✅ Good: Explain WHY
// Calculate discount based on user tier
const discount = userTier === 'premium' ? 0.2 : 0.1;

// ✅ Good: Explain complex logic
// Use binary search for better performance on large arrays
const index = binarySearch(array, target);

// ❌ Bad: State the obvious
// Set count to 0
const count = 0;
```

### Error Handling

```javascript
// ✅ Good: Handle errors
try {
  const data = await fetchProducts();
  setProducts(data);
} catch (error) {
  console.error('Failed to fetch products:', error);
  setError('Failed to load products. Please try again.');
}

// ❌ Bad: Ignore errors
const data = await fetchProducts();
setProducts(data);
```

---

## Deployment

### Before Deployment

**Checklist**:
- [ ] All features working
- [ ] All tests passing
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Cross-browser tested
- [ ] Performance optimized
- [ ] Security checked

### Build for Production

```bash
# 1. Build the app
npm run build

# 2. Test production build locally
npm run preview

# 3. Deploy to hosting
# (Netlify, Vercel, etc.)
```

---

## Resources

### Learning

- **React Docs**: https://react.dev/
- **TailwindCSS**: https://tailwindcss.com/
- **MDN Web Docs**: https://developer.mozilla.org/
- **JavaScript.info**: https://javascript.info/

### Tools

- **VS Code**: Code editor
- **Git**: Version control
- **Chrome DevTools**: Debugging
- **React DevTools**: React debugging
- **Postman**: API testing

### Help

- **Stack Overflow**: Q&A
- **GitHub Issues**: Project-specific
- **Discord/Slack**: Team chat
- **Google**: Everything else!
