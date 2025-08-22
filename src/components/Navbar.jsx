import React, { useState } from "react";
import { Link } from "react-router-dom";
import amazonLogo from "../assets/Amazon.png";
import vectorSearch from "../assets/Vector-search.png";
import cartIcon from "../assets/Vector.png";
import "./Navbar.css"; 
import { useCart } from "../context/CartContext";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  
  // Categories for the secondary navbar
  const categories = [
    "All",
    "Amazon mini TV",
    "Sell",
    "Best Sellers",
    "Today's Deals",
    "Mobiles",
    "Customer Service",
    "Prime",
    "Electronics",
    "Fashion",
    "New Releases",
    "Home & Kitchen",
    "Amazon Pay",
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        {/* Amazon Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={amazonLogo} alt="Amazon" className="logo-image" />
          </Link>
        </div>

        {/* Location */}
        <div className="navbar-location">
          <div className="location-top">
            Delivering to Surat 394210
          </div>
          <div className="location-bottom">
            <span className="location-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="10" r="3"/>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              </svg>
            </span>
            Update location
          </div>
        </div>

        {/* Search Bar */}
        <div className="navbar-search">
          <div className="search-category">
            <select className="category-select">
              <option>All</option>
              <option>Electronics</option>
              <option>Fashion</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Search Amazon.in"
            className="search-input"
          />
          <button className="search-button">
            <img src={vectorSearch} alt="search" className="search-icon" />
          </button>
        </div>

        {/* Language */}
        <div className="navbar-language">
          <img width="24" height="24" src="https://img.icons8.com/color/48/india.png" alt="india" className="flag-icon" />
          <span className="lang-text">EN</span>
          <span className="dropdown-arrow">▼</span>
        </div>

        {/* Account */}
        <div className="navbar-account">
          <div className="account-top">Hello, sign in</div>
          <div className="account-bottom">Account & Lists ▼</div>
        </div>

        {/* Orders */}
        <div className="navbar-orders">
          <div className="orders-top">Returns</div>
          <div className="orders-bottom">& Orders</div>
        </div>

        {/* Cart */}
        <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="navbar-cart">
            <div className="cart-icon-container" style={{ position: 'relative' }}>
              <img src={cartIcon} alt="cart" className="cart-icon" />
              {totalItems > 0 && (
                <span 
                  style={{ 
                    position: 'absolute', 
                    top: '-10px', 
                    right: '-10px', 
                    background: '#f08804', 
                    color: 'white',
                    borderRadius: '50%', 
                    width: '20px', 
                    height: '20px', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}
                >
                  {totalItems}
                </span>
              )}
            </div>
            <span className="cart-text">Cart</span>
          </div>
        </Link>

        {/* Mobile menu hamburger icon */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className="hamburger-icon">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </span>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-item">
          <div className="mobile-menu-header">Hello, sign in</div>
          <div className="mobile-menu-content">Account & Lists</div>
        </div>
        <div className="mobile-menu-item">
          <div className="mobile-menu-content">Returns & Orders</div>
        </div>
        <div className="mobile-menu-item">
          <div className="mobile-menu-content">Prime</div>
        </div>
        <div className="mobile-menu-item location">
          <div className="mobile-menu-content">
            <span className="location-icon-mobile">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="10" r="3"/>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              </svg>
            </span>
            Update location
          </div>
        </div>
      </div>
      
      {/* Categories Navigation Bar */}
      <div className="categories-navbar">
        {categories.map((item, index) => (
          <Link
            key={item}
            to={item === "All" ? "/products" : `/products?category=${item.toLowerCase().replace(/\s+/g, '-')}`}
            className={`category-item ${index === 0 ? 'category-item-first' : ''}`}
          >
            {item}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Navbar;