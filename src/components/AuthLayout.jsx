import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div style={{ 
      margin: 0, 
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      justifyContent: 'center',
      backgroundColor: '#fff'
    }}>
      {children}
    </div>
  );
};

export default AuthLayout;
