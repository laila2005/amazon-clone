import React from "react";
import amazonLogo from "../assets/Amazon.png";
import vectorSearch from "../assets/Vector-search.png";
import cartIcon from "../assets/Vector.png";

function Navbar() {
  return (
    <nav
      style={{
        width: "100vw",
        background: "rgba(19, 25, 33, 1)",
        color: "white",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "0 12px",
        minHeight: "60px",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Amazon Logo */}
      <div style={{ display: "flex", alignItems: "center", marginRight: "32px" }}>
        <img
          src={amazonLogo}
          alt="Amazon"
          style={{ height: "36px", width: "auto", marginRight: "8px", cursor: "pointer", objectFit: "contain", display: "block" }}
        />
      </div>

      {/* Location */}
      <div style={{ marginRight: "32px", fontSize: "0.9rem", cursor: "pointer" }}>
        <div style={{
          fontFamily: "Lato, sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "15.82px",
          lineHeight: "100%",
          letterSpacing: "0%",
          color: "rgba(192, 204, 204, 1)",
          borderRadius: "4px",
          padding: "2px 8px",
          marginTop: "2px"
        }}>
          Delivering to Surat 394210
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          fontFamily: "Lato, sans-serif",
          fontWeight: 700,
          fontStyle: "bold",
          fontSize: "18.08px",
          lineHeight: "100%",
          letterSpacing: "0%",
          color: "#fff",
          borderRadius: "4px",
          padding: "2px 8px",
          marginTop: "4px"
        }}>
          <span style={{ marginRight: "6px", display: "flex", alignItems: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
          </span>
          Update location
        </div>
      </div>

      {/* Search Bar */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", maxWidth: "400px", marginRight: "20px" }}>
  <div style={{ display: "flex", alignItems: "center", background: "#D3D3D3", borderRadius: "20px 0 0 20px", height: "40px", padding: "0 0px", position: "relative", zIndex: 1 }}>
          <select
            style={{
              height: "40px",
              minWidth: "50px",
              maxWidth: "60px",
              border: "none",
              outline: "none",
              background: "#D3D3D3",
              fontSize: "0.95rem",
              color: "#000",
              appearance: "none",
              paddingLeft: "8px",
              textAlign: "left",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2210%22 height=%228%22 viewBox=%220 0 10 8%22%3E%3Cpath d=%22M0 0l5 8 5-8z%22 fill=%22%23000%22/%3E%3C/svg%3E')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "30px center",
            }}
          >
            <option>All </option>
            <option>Electronics </option>
            <option>Fashion </option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search Amazon.in"
          style={{
            flex: 1,
            height: "40px",
            border: "none",
            outline: "none",
            padding: "0 12px",
            fontSize: "1rem",
            background: "#FFF",
            color: "#000",
            textAlign: "left",
          }}
        />
        <button
          style={{
            height: "40px",
            width: "45px",
            background: "#FEBD69",
            border: "none",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "0px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "-12px",
            zIndex: 2,
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          }}
        >
          <img src={vectorSearch} alt="search" style={{ width: "22px", height: "22px", display: "block" }} />
        </button>
      </div>

      {/* Language */}
      <div style={{ marginRight: "32px", cursor: "pointer", display: "flex", alignItems: "center" }}>
        <img width="24" height="24" src="https://img.icons8.com/color/48/india.png" alt="india" style={{ marginRight: "5px" }} />
        <span style={{ fontWeight: 500, fontSize: "1rem", marginRight: "4px" }}>EN</span>
        <span style={{ fontSize: "1rem" }}>▼</span>
      </div>

      {/* Account */}
      <div style={{ marginRight: "32px", cursor: "pointer" }}>
        <div style={{ fontSize: "0.7rem" }}>Hello, sign in</div>
        <div style={{ fontWeight: "bold" }}>Account & Lists ▼</div>
      </div>

      {/* Orders */}
      <div style={{ marginRight: "32px", cursor: "pointer" }}>
        <div style={{ fontSize: "0.7rem" }}>Returns</div>
        <div style={{ fontWeight: "bold" }}>& Orders</div>
      </div>

      {/* Cart */}
      <div style={{ fontWeight: "bold", cursor: "pointer", display: "flex", alignItems: "center" }}>
        <img src={cartIcon} alt="cart" style={{ width: "32px", height: "auto", marginRight: "8px", display: "block" }} />
        Cart
      </div>
    </nav>
  );
}

export default Navbar;