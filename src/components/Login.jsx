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
    <div className="max-w-sm mx-auto mt-20 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-2">Signin to your PopX account</h2>
      <p className="text-sm text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <label className="block text-sm font-medium mb-1">Email Address</label>
      <input
        type="email"
        placeholder="Enter email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg mb-4"
      />

      <label className="block text-sm font-medium mb-1">Password</label>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg mb-6"
      />

      <button
        className="w-full h-12 bg-gray-300 text-black rounded-lg font-medium"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;