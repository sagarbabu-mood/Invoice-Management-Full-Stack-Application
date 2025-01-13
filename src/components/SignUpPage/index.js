import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const SignUp = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const isEmailTaken = existingUsers.some(
      (user) => user.email === formData.email
    );

    if (isEmailTaken) {
      alert("Email already in use.");
    } else {
      const newUser = { email: formData.email, password: formData.password };
      localStorage.setItem(
        "users",
        JSON.stringify([...existingUsers, newUser])
      );
      alert("Signup successful! You can now login.");
      navigate("/login");
    }
  };

  return (
    <div className="signup">
      <h1 className="signup-heading">Sign Up</h1>
      <form onSubmit={handleSignUp}>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

/* import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = existingUsers.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (validUser) {
      alert("Login successful!");
      localStorage.setItem("currentUser", JSON.stringify(validUser)); // Store logged-in user details
      navigate("/home"); // Navigate to the home page
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
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

export default Login;*/
