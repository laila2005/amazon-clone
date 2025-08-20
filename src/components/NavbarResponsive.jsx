import React, { useState, useEffect } from "react";
import amazonLogo from "../assets/Amazon.png";
import vectorSearch from "../assets/Vector-search.png";
import cartIcon from "../assets/Vector.png";
import styles from "./NavbarResponsive.module.css";

function NavbarResponsive() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to detect when to shrink navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Close mobile menu when window is resized to desktop size
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    // Close mobile menu when clicking outside
    const handleClickOutside = (event) => {
      const mobileMenuButton = document.querySelector(`.${styles.mobileMenuButton}`);
      const mobileMenu = document.querySelector(`.${styles.mobileMenu}`);
      
      if (menuOpen && 
          mobileMenuButton && !mobileMenuButton.contains(event.target) && 
          mobileMenu && !mobileMenu.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div style={{ width: "100%", height: "0px", margin: "0", padding: "0" }} />
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} 
           style={{ 
             margin: "0", 
             padding: "0 12px", 
             position: "fixed", 
             top: "0", 
             left: "0", 
             right: "0",
             boxSizing: "border-box" 
           }}>
        {/* Mobile Menu Button */}
        <div 
          className={styles.mobileMenuButton}
          onClick={toggleMenu}
        >
          <div className={styles.hamburger}>
            <div 
              className={styles.hamburgerLine} 
              style={{
                transform: menuOpen ? "rotate(45deg) translate(5px, 6px)" : "none"
              }}
            />
            <div 
              className={styles.hamburgerLine}
              style={{
                opacity: menuOpen ? 0 : 1
              }}
            />
            <div 
              className={styles.hamburgerLine}
              style={{
                transform: menuOpen ? "rotate(-45deg) translate(5px, -6px)" : "none"
              }}
            />
          </div>
        </div>

        {/* Amazon Logo */}
        <div className={styles.logo}>
          <img
            src={amazonLogo}
            alt="Amazon"
            className={styles.logoImage}
          />
        </div>

        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <div className={styles.selectContainer}>
            <select className={styles.categorySelect}>
              <option>All </option>
              <option>Electronics </option>
              <option>Fashion </option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Search Amazon.in"
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
            <img src={vectorSearch} alt="search" className={styles.searchIcon} />
          </button>
        </div>

        <div className={styles.navigationGroup}>
          {/* Language */}
          <div className={styles.languageContainer}>
            <img 
              width="24" 
              height="24" 
              src="https://img.icons8.com/color/48/india.png" 
              alt="india" 
              className={styles.flagIcon} 
            />
            <span style={{ fontWeight: 500, fontSize: "1rem", marginRight: "4px" }}>EN</span>
            <span style={{ fontSize: "1rem" }}>▼</span>
          </div>

          {/* Account */}
          <div className={styles.accountContainer}>
            <div className={styles.accountHeader}>Hello, sign in</div>
            <div className={styles.accountMain}>Account & Lists ▼</div>
          </div>

          {/* Orders */}
          <div className={styles.ordersContainer}>
            <div className={styles.ordersHeader}>Returns</div>
            <div className={styles.ordersMain}>& Orders</div>
          </div>

          {/* Cart */}
          <div className={styles.cartContainer}>
            <img src={cartIcon} alt="cart" className={styles.cartIcon} />
            <span className={styles.cartText}>Cart</span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuItem}>
            <div className={styles.mobileHeader}>Hello, sign in</div>
            <div className={styles.mobileMain}>Account & Lists</div>
          </div>

          <div className={`${styles.mobileMenuItem} ${styles.mobileMenuFlex}`}>
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#fff" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={styles.mobileLocationIcon}
            >
              <circle cx="12" cy="10" r="3"/>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            </svg>
            <div className={styles.mobileMain}>Update location</div>
          </div>

          <div className={styles.mobileMenuItem}>
            <div className={styles.mobileMain}>Returns & Orders</div>
          </div>

          <div className={`${styles.mobileMenuItem} ${styles.mobileMenuFlex}`}>
            <img 
              width="24" 
              height="24" 
              src="https://img.icons8.com/color/48/india.png" 
              alt="india" 
              className={styles.mobileLocationIcon} 
            />
            <div className={styles.mobileMain}>EN</div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavbarResponsive;
