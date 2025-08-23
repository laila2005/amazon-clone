import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/AuthPages.css';
import amazonLogo from '../assets/Group 1.png';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setError('');

    // Simple validation
    if (!name || !email || !password) {
      setError('Please fill in all required fields');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if email already exists
    if (users.some(user => user.email === email)) {
      setError('Email already in use');
      return;
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      mobile,
      password
    };

    // Add new user to users array
    users.push(newUser);
    
    // Save updated users array to localStorage
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto-login the user (store user info without password)
    localStorage.setItem('currentUser', JSON.stringify({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email
    }));
    
    // Redirect to home page after successful signup
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="auth-logo">
        <img src={amazonLogo} alt="Amazon Logo" />
      </div>
      
      <div className="auth-card">
        <h1>Create Account</h1>
        
        {error && <div className="auth-error">{error}</div>}
        
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Your name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              placeholder="First and last name"
            />
          </div>
          
          <div className="form-group">
            <label>Mobile numbers</label>
            <input 
              type="text" 
              value={mobile} 
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
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
              placeholder="At least 6 characters"
            />
            <div className="password-info">
              Passwords must be at least 6 characters.
            </div>
          </div>
          
          <button type="submit" className="auth-button">Verify mobile number</button>
        </form>
        
        <div className="auth-agreement">
          By creating an account or logging in, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
        </div>
        
        <div className="auth-login-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
      </div>
      
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

export default SignupPage;
