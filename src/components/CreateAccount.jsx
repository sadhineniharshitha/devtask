import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    company: "",
    agency: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  const regex = {
    name: /^[A-Za-z\s]{3,30}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[6-9]\d{9}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    company: /^.{2,50}$/,
    agency: /^(yes|no)$/i,
  };

  const checkPasswordStrength = (value) => {
    if (value.length < 6) return "Weak";
    if (value.length >= 6 && /[A-Z]/.test(value) && /\d/.test(value)) return "Medium";
    if (value.length >= 8 && /[A-Z]/.test(value) && /\d/.test(value) && /[@$!%*?&]/.test(value)) return "Strong";
    return "Weak";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      setPasswordStrength(checkPasswordStrength(value));
    }

    if (!regex[name].test(value)) {
      setErrors((prev) => ({ ...prev, [name]: `Invalid ${name}` }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emptyFields = Object.keys(formData).filter(
      (key) => !formData[key].trim()
    );

    if (emptyFields.length > 0) {
      alert("Please fill all fields before submitting");
      return;
    }

    if (Object.keys(errors).length > 0) {
      alert("Please fix the errors before submitting");
      return;
    }

    // ✅ Pass formData to AccountSettings
    navigate("/account-settings", { state: formData });
  };

  return (
    <>
      <div className="create-container">
        <h2 className="create-title">Create Your Account</h2>
        <p className="create-text">Let’s get you started with PopX</p>

        <form onSubmit={handleSubmit} className="create-form">
          <input type="text" name="name" placeholder="Full Name"
            value={formData.name} onChange={handleChange}
            className={`create-input ${errors.name ? "error" : formData.name ? "success" : ""}`} />
          {errors.name && <p className="error-text">{errors.name}</p>}

          <input type="text" name="email" placeholder="Email Address"
            value={formData.email} onChange={handleChange}
            className={`create-input ${errors.email ? "error" : formData.email ? "success" : ""}`} />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <input type="text" name="phone" placeholder="Phone Number"
            value={formData.phone} onChange={handleChange}
            className={`create-input ${errors.phone ? "error" : formData.phone ? "success" : ""}`} />
          {errors.phone && <p className="error-text">{errors.phone}</p>}

          <div className="password-wrapper">
            <input type={showPassword ? "text" : "password"} name="password" placeholder="Password"
              value={formData.password} onChange={handleChange}
              className={`create-input ${errors.password ? "error" : formData.password ? "success" : ""}`} />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="toggle-btn">
              {showPassword ? "Hide" : "Show"}
            </button>
            {errors.password && <p className="error-text">{errors.password}</p>}
            {formData.password && (
              <p className={`strength-text ${passwordStrength.toLowerCase()}`}>
                Strength: {passwordStrength}
              </p>
            )}
          </div>

          <input type="text" name="company" placeholder="Company Name"
            value={formData.company} onChange={handleChange}
            className={`create-input ${errors.company ? "error" : formData.company ? "success" : ""}`} />
          {errors.company && <p className="error-text">{errors.company}</p>}

          <input type="text" name="agency" placeholder="Are you an Agency? (Yes/No)"
            value={formData.agency} onChange={handleChange}
            className={`create-input ${errors.agency ? "error" : formData.agency ? "success" : ""}`} />
          {errors.agency && <p className="error-text">{errors.agency}</p>}

          <button type="submit" className="submit-btn">Create Account</button>
        </form>

        <p className="login-link">
          Already registered? <a href="/login">Login</a>
        </p>
      </div>
      <style>{`
  .create-container {
    max-width: 500px;
    margin: 2.5rem auto;
    padding: 1.5rem;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  .create-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .create-text {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 1.5rem;
  }

  .create-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .create-input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 0.95rem;
  }

  .create-input.success {
    border-color: #22c55e; /* green */
  }

  .create-input.error {
    border-color: #ef4444; /* red */
  }

  .error-text {
    font-size: 0.85rem;
    color: #ef4444;
  }

  .password-wrapper {
    position: relative;
  }

  .toggle-btn {
    position: absolute;
    right: 12px;
    top: 12px;
    font-size: 0.85rem;
    color: #6b21a8;
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: underline;
  }

  .strength-text {
    font-size: 0.85rem;
    margin-top: 0.25rem;
  }

  .strength-text.weak {
    color: #ef4444;
  }

  .strength-text.medium {
    color: #eab308;
  }

  .strength-text.strong {
    color: #22c55e;
  }

  .submit-btn {
    width: 100%;
    height: 48px;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    background: #6b21a8;
    color: #fff;
  }

  .login-link {
    font-size: 0.9rem;
    color: #555;
    margin-top: 1rem;
    text-align: center;
  }

  .login-link a {
    color: #6b21a8;
    text-decoration: underline;
  }
`}</style>
    </>
  );
}

export default CreateAccount;