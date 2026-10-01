import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// Import the separate design styling sheet layout configuration
import "../Register.css";

export default function Register() {
  const navigate = useNavigate();
  
  // State management system tracking user data parameters locally
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User Registration Payload Forwarded Successfully:", formData);
    
    // Redirect standard pointer remapped targeting the Login system endpoint view
    navigate("/login"); 
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 style={{ textAlign: "center", marginBottom: "8px", color: "#1e293b" }}>User Registration</h2>
        <p style={{ textAlign: "center", color: "#64748b", marginBottom: "24px", fontSize: "14px" }}>
          Please enter your details to create an account.
        </p>
        
        <form onSubmit={handleRegister}>
          {/* Field group structure mapping placeholder sample texts */}
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="John" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input 
              type="text" 
              name="lastName" 
              placeholder="Smith" 
              value={formData.lastName} 
              onChange={handleChange} 
              required 
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="name@example.com" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="••••••••" 
              value={formData.password} 
              onChange={handleChange} 
              required 
              className="form-input"
            />
          </div>

          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>

        <p style={{ marginTop: "20px", textAlign: "center", fontSize: "14px", color: "#64748b" }}>
        Already have an account?{" "}
        <Link to="/login" className="login-link">
        Login here
        </Link>
        </p>

      </div>
    </div>
  );
}
