import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const OnhandleLogin = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = existingUsers.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (validUser) {
      onLogin();
      alert("Login successful!");

      localStorage.setItem("currentUser", JSON.stringify(validUser));
      navigate("/home");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={OnhandleLogin}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
