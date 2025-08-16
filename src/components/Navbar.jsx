import React from 'react';

function Navbar() {
  return (
    <nav style={{
      width: '100vw',
      background: '#131921',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
      height: '60px',
      position: 'relative',
      zIndex: 10
    }}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" style={{ height: '36px', marginRight: '32px' }} />
      <div style={{ marginRight: '32px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>Home</div>
      <div style={{ marginRight: '32px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>Shop</div>
      <div style={{ marginRight: '32px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>Deals</div>
      <div style={{ flex: 1 }}>
        <input type="text" placeholder="Search Amazon" style={{ width: '60%', padding: '8px', borderRadius: '4px', border: 'none', fontSize: '1rem' }} />
      </div>
      <div style={{ marginRight: '32px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>Sign In</div>
      <div style={{ fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>Cart 🛒</div>
    </nav>
  );
}

export default Navbar;
