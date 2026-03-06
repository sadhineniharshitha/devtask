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
    if (Object.keys(errors).length === 0) {
      // ✅ Navigate to Account Settings after success
      navigate("/account-settings");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-2">Create Your Account</h2>
      <p className="text-sm text-gray-600 mb-6">Let’s get you started with PopX</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <input type="text" name="name" placeholder="Full Name"
          value={formData.name} onChange={handleChange}
          className={`w-full p-3 border rounded-lg ${errors.name ? "border-red-500" : formData.name ? "border-green-500" : "border-gray-300"}`} />
        {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

        {/* Email */}
        <input type="text" name="email" placeholder="Email Address"
          value={formData.email} onChange={handleChange}
          className={`w-full p-3 border rounded-lg ${errors.email ? "border-red-500" : formData.email ? "border-green-500" : "border-gray-300"}`} />
        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

        {/* Phone */}
        <input type="text" name="phone" placeholder="Phone Number"
          value={formData.phone} onChange={handleChange}
          className={`w-full p-3 border rounded-lg ${errors.phone ? "border-red-500" : formData.phone ? "border-green-500" : "border-gray-300"}`} />
        {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}

        {/* Password */}
        <div className="relative">
          <input type={showPassword ? "text" : "password"} name="password" placeholder="Password"
            value={formData.password} onChange={handleChange}
            className={`w-full p-3 border rounded-lg ${errors.password ? "border-red-500" : formData.password ? "border-green-500" : "border-gray-300"}`} />
          <button type="button" onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-sm text-purple-700 underline">
            {showPassword ? "Hide" : "Show"}
          </button>
          {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
          {formData.password && (
            <p className={`text-sm mt-1 ${passwordStrength === "Weak" ? "text-red-600" : passwordStrength === "Medium" ? "text-yellow-600" : "text-green-600"}`}>
              Strength: {passwordStrength}
            </p>
          )}
        </div>

        {/* Company Name */}
        <input type="text" name="company" placeholder="Company Name"
          value={formData.company} onChange={handleChange}
          className={`w-full p-3 border rounded-lg ${errors.company ? "border-red-500" : formData.company ? "border-green-500" : "border-gray-300"}`} />
        {errors.company && <p className="text-red-600 text-sm">{errors.company}</p>}

        {/* Agency */}
        <input type="text" name="agency" placeholder="Are you an Agency? (Yes/No)"
          value={formData.agency} onChange={handleChange}
          className={`w-full p-3 border rounded-lg ${errors.agency ? "border-red-500" : formData.agency ? "border-green-500" : "border-gray-300"}`} />
        {errors.agency && <p className="text-red-600 text-sm">{errors.agency}</p>}

        {/* Submit */}
        <button type="submit" className="w-full h-12 bg-purple-700 text-white rounded-lg font-medium">
          Create Account
        </button>
      </form>

      <p className="text-sm text-gray-600 mt-4 text-center">
        Already registered? <a href="/login" className="text-purple-700 underline">Login</a>
      </p>
    </div>
  );
}

export default CreateAccount;