import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';

const MainLayout = ({ children }) => {
  return (
    <div style={{ 
      margin: 0, 
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      {/* Navbar fixed at the top */}
      <Navbar />
      
      {/* Main content that takes up available space */}
      <div style={{ flex: 1 }}>
        {children}
      </div>
      
      {/* Footer fixed at the bottom */}
      <Footer />
    </div>
  );
};

export default MainLayout;
