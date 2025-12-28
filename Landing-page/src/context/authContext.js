import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create axios instance with base URL
const API = axios.create({
  baseURL: 'http://localhost:5000/api/auth'
});

// Create the context
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  // State to store user data
  const [user, setUser] = useState(null);
  
  // State to store authentication token
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  
  // State to track loading
  const [loading, setLoading] = useState(true);
  
  // State to store errors
  const [error, setError] = useState(null);

  // Check if user is logged in on app load
  useEffect(() => {
    const checkLoggedIn = async () => {
      const storedToken = localStorage.getItem('token');
      
      if (storedToken) {
        try {
          // Get user profile using stored token
          const response = await API.get('/profile', {
            headers: {
              Authorization: `Bearer ${storedToken}`
            }
          });
          
          setUser(response.data.user);
          setToken(storedToken);
        } catch (err) {
          // Token is invalid or expired
          localStorage.removeItem('token');
          setToken(null);
          setUser(null);
        }
      }
      
      setLoading(false);
    };

    checkLoggedIn();
  }, []);

  // Register function
  const register = async (fullName, email, password, confirmPassword) => {
    try {
      setError(null);
      setLoading(true);

      const response = await API.post('/register', {
        fullName,
        email,
        password,
        confirmPassword
      });

      // Save token to localStorage
      localStorage.setItem('token', response.data.token);
      
      // Update state
      setToken(response.data.token);
      setUser(response.data.user);
      setLoading(false);

      return { success: true, message: response.data.message };
      
    } catch (err) {
      setLoading(false);
      const errorMessage = err.response?.data?.message || 'Registration failed';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      setError(null);
      setLoading(true);

      const response = await API.post('/login', {
        email,
        password
      });

      // Save token to localStorage
      localStorage.setItem('token', response.data.token);
      
      // Update state
      setToken(response.data.token);
      setUser(response.data.user);
      setLoading(false);

      return { success: true, message: response.data.message };
      
    } catch (err) {
      setLoading(false);
      const errorMessage = err.response?.data?.message || 'Login failed';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setError(null);
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    return !!token && !!user;
  };

  // Context value - everything we want to share
  const value = {
    user,
    token,
    loading,
    error,
    register,
    login,
    logout,
    isAuthenticated
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};