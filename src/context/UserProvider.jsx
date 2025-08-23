import React, { useState, useEffect } from 'react';
import UserContext from './UserContext';

// Create a provider for components to consume and subscribe to changes
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // On initial load, check if user is logged in
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = (user) => {
    setCurrentUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  // Check if user is logged in
  const isLoggedIn = () => {
    return currentUser !== null;
  };

  // Value to be provided by the context
  const value = {
    currentUser,
    login,
    logout,
    isLoggedIn,
    loading
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
