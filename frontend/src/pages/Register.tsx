import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// Import the shared Loader component from the components folder
import Loader from "../components/Loader";
// Import the styling file for colors, 3D card layout, and animations
import "../Register.css";

export default function Register() {
  const navigate = useNavigate();
  
  // This state controls whether the full-screen loading spinner is visible or hidden
  const [loading, setLoading] = useState(false);

  // This state stores the values entered by the user in the input fields
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  // This function updates the formData state dynamically whenever the user types inside the fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // This function runs when the user clicks the Register button to submit the form
  const handleRegister = (e: any) => {
    e.preventDefault();
    
    // Step A: Immediately show the 3D blurred loading animation spinner on screen
    setLoading(true);
    
    // SECURITY FIX: We only log name and email for local testing and debugging.
    // The password is completely removed (excluded) here to stop it from leaking in the browser dev tools console.
    const { name, lastName, email } = formData;
    console.log("User Registration Data Submitted Safely:", { name, lastName, email });
    
    // Step B: Set a 2-second delay timer to simulate a real database loading process
    setTimeout(() => {
      setLoading(false); // Hide the loading screen after 2 seconds are over
      navigate("/login"); // Move the user directly to the peer team's Login page view
    }, 2000);
  };

  return (
    <div className="register-container">
      {/* Renders the global overlay loader and passes the active loading state variable */}
      <Loader isLoading={loading} />

      {/* Main 3D animated registration form wrapper block */}
      <div className="register-card">
        <h2 style={{ textAlign: "center", marginBottom: "8px", color: "#1e293b" }}>User Registration</h2>
        <p style={{ textAlign: "center", color: "#64748b", marginBottom: "24px", fontSize: "14px" }}>
          Please enter your details to create an account.
        </p>
        
        <form onSubmit={handleRegister}>
          {/* Input field for Name with clear placeholder hint */}
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

          {/* Input field for Last Name with clear placeholder hint */}
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

          {/* Input field for Email with format placeholder hint */}
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

          {/* Input field for Password with secure dots placeholder hint */}
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

          {/* Main submit action button trigger */}
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>

        {/* Redirect link option for users who already have a profile account */}
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

