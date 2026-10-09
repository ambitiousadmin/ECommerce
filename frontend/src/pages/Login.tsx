import { useState } from "react";
import { Link } from "react-router-dom";
import type { ChangeEvent, FormEvent } from "react";
import "../Register.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage(`Login form submitted for ${username}`);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2
          style={{
            textAlign: "center",
            marginBottom: "8px",
            color: "#1e293b",
          }}
        >
          User Login
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "24px",
            fontSize: "14px",
          }}
        >
          Please enter your login details.
        </p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setUsername(e.target.value);
                setMessage("");
              }}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
                setMessage("");
              }}
              required
              className="form-input"
            />
          </div>

          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>

        {message && (
          <p
            style={{
              textAlign: "center",
              color: "green",
              marginTop: "16px",
              fontSize: "14px",
            }}
          >
            {message}
          </p>
        )}

        <p
          style={{
            marginTop: "20px",
            textAlign: "center",
            fontSize: "14px",
            color: "#64748b",
          }}
        >
          Don't have an account?{" "}
          <Link to="/register" className="login-link">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}