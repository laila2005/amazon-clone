import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/AuthPages.css';
import amazonLogo from '../assets/Group 1.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Simple validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      // Store logged in user info in localStorage (don't store password in session)
      localStorage.setItem('currentUser', JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email
      }));
      
      // Redirect to home page after successful login
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-logo">
        <img src={amazonLogo} alt="Amazon Logo" />
      </div>
      
      <div className="auth-card">
        <h1>Sign in</h1>
        
        {error && <div className="auth-error">{error}</div>}
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email or mobile phone number</label>
            <input 
              type="text" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button type="submit" className="auth-button">Continue</button>
        </form>
        
        <div className="auth-agreement">
          By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
        </div>
        
        <div className="auth-help">
          <details>
            <summary>Need help?</summary>
            <a href="#">Forgot Password</a>
            <a href="#">Other issues with Sign-In</a>
          </details>
        </div>
      </div>
      
      <div className="auth-divider">
        <span>New to Amazon?</span>
      </div>
      
      <Link to="/signup" className="secondary-button">
        Create your Amazon account
      </Link>
      
      <div className="auth-footer">
        <div className="auth-footer-links">
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Help</a>
        </div>
        <div className="auth-footer-copyright">
          © 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
