import React, { useState } from "react";
import "./Signup.css";
import logoimg from "../../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    isAuthor: false,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, isAuthor } = formData;

    if (!name || !email || !phone || !password) {
      setErrorMessage("Please fill in all fields.");
      setTimeout(() => setErrorMessage(""), 5000);
      return;
    }

    try {
      const response = await ApiService.registerUser({
        name,
        email,
        phone,
        password,
        isAuthor,
      });

      if (response.statusCode === 200) {
        setFormData({ name: "", email: "", phone: "", password: "", isAuthor: false });
        setSuccessMessage("User registered successfully");
        setTimeout(() => {
          setSuccessMessage("");
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || error.message);
      setTimeout(() => setErrorMessage(""), 5000);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <img src={logoimg} alt="Logo" />
        <h2 style={{ textAlign: "center" }}>Create your account</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor="phone">
          Phone:
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>Are you an author?</label>
        <div className="radio-buttons">
          <label>
            <input
              type="radio"
              name="isAuthor"
              value={true}
              onChange={(e) => setFormData({ ...formData, isAuthor: e.target.value === "true" })}
              required
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="isAuthor"
              value={false}
              onChange={(e) => setFormData({ ...formData, isAuthor: e.target.value === "true" })}
            />
            No
          </label>
        </div>
        <div className="signup-butt">
          <button type="submit">Sign Up</button>
        </div>
        <div className="login-butt">
          <Link to="/login">Already have an account? Login</Link>
        </div>
        <div className="back-butt">
          <Link to="/">Go back to home</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
