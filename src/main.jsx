import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'  // Import reset CSS first to override default styles
import './index.css'
import './App.css'  // Import App CSS with global fixes
import './components/responsive.css'
import './components/navbarFix.css'  // Import the navbar fix CSS
import './components/navbarGapFix.css'  // Import specific fix for navbar gap
import './components/navImprovements.css'  // Import navbar visual improvements
import './components/browserFix.css'  // Import browser-specific fixes
import './components/mobileNavFix.css'  // Import mobile-specific fixes
import './components/gap-fix.css'  // Direct fix for vertical gaps on mobile
import './components/mobile-browser-hacks.css'  // Browser-specific mobile fixes
import './components/position-fix.css'  // Precise positioning fixes for elements
import './components/body-overflow-fix.css'  // Body overflow and scroll fixes
import './components/ios-safari-fix.css'  // iOS Safari specific fixes
import './components/secnav-fix.css'  // Fix to ensure categories navbar is visible
import './components/categories-fix.css'  // Direct styling fixes for categories navbar
import './components/navbar-responsive-fix.css'  // Responsive fixes for navbar and categories
import './components/mobile-categories-fix.css'  // Mobile-specific fixes for categories navbar
import './components/navbar-sticky-fix.css'  // Comprehensive fix for navbar white space and sticky issues
import './components/mobile-navbar-enhancements.css'  // Additional mobile navbar enhancements
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
