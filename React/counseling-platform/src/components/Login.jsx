/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./Login.css"; // For styling
import axios from "axios";  

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between login and sign-up
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is already logged in
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setIsLoggedIn(true);
      setMessage(`Welcome back, ${JSON.parse(loggedInUser).email}!`);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset messages
    setError("");
    setMessage("");

    if (isSignUp) {
      // Sign Up validation
      if (!email || !password || !confirmPassword) {
        setError("Please fill in all fields.");
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      // Simulated Sign Up API Call (Replace with actual API integration)
      const newUser = { email, password };
      localStorage.setItem("user", JSON.stringify(newUser)); // Save user data
      setMessage("Account created successfully! Please log in.");
      setIsSignUp(false);
    } else {
      // Login validation
      if (!email || !password) {
        setError("Please enter both email and password.");
        return;
      }

      // Simulated Login API Call (Replace with actual API integration)
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        setIsLoggedIn(true);
        setMessage("Login successful!");
      } else {
        setError("Invalid email or password.");
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("user"); // Remove user from storage
    setMessage("You have successfully logged out.");
  };

  if (isLoggedIn) {
    return (
      <div className="login">
        <h2>Welcome!</h2>
        <p>{message}</p>
        <button className="submit-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="login">
      <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Input */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Confirm Password Input (only for Sign Up) */}
        {isSignUp && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
        )}

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          {isSignUp ? "Sign Up" : "Login"}
        </button>

        {/* Toggle Login/Sign Up */}
        <p className="toggle">
          {isSignUp ? (
            <>
              Already have an account?{" "}
              <button
                type="button"
                className="toggle-btn"
                onClick={() => setIsSignUp(false)}
              >
                Log In
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button
                type="button"
                className="toggle-btn"
                onClick={() => setIsSignUp(true)}
              >
                Sign Up
              </button>
            </>
          )}
        </p>

        {/* Error or Success Message */}
        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
