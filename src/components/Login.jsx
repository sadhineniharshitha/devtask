import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      navigate("/account-settings");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <>
      <div className="login-container">
        <h2 className="login-title">Signin to your PopX account</h2>
        <p className="login-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <label className="login-label">Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />

        <label className="login-label">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>

      {/* Inline CSS styles */}
      <style>{`
        .login-container {
          max-width: 400px;
          margin: 5rem auto;
          padding: 1.5rem;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .login-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .login-text {
          font-size: 0.9rem;
          color: #555;
          margin-bottom: 1.5rem;
        }

        .login-label {
          display: block;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        .login-input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }

        .login-btn {
          width: 100%;
          height: 48px;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          background: #e5e7eb; /* light gray */
          color: #000;
        }

        .login-btn:hover {
          background: #d1d5db; /* darker gray on hover */
        }
      `}</style>
    </>
  );
}

export default Login;