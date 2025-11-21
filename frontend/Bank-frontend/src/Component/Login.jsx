import React, { useState } from "react";
import api from "./api/axios.js";
import "../Style/Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {

  let [data, setData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/api/login", data);

      const role = response.data.role;

      localStorage.token=response.data.token;
      localStorage.role = response.data.role;

      if (role === "ROLE_ADMIN") {
        navigate("/admin");
      } else if (role === "ROLE_CUSTOMER" || role === "ROLE_customer") {
        navigate("/user");
      } else {
        alert("Unknown role!");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form className="p-4 rounded shadow-lg bg-white text-start" onSubmit={handleSubmit}>
        
        <h3 className="text-center mb-4 fw-bold text-primary">
          Login
        </h3>

        <div className="form-group mb-3">
          <label htmlFor="email" className="ml-5 fw-semibold">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password" className="fw-semibold">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
            required
          />
          <div className="w-100 text-center">
            <small className="form-text text-muted">
              We'll never share your email and password.
            </small>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center">
     <button type="button" onClick={()=>{navigate("/register")}} className=" me-3 btn btn-success w-50">
          Sign Up
    </button>
    <button type="submit" className="ms-3 btn btn-secondary w-50">
        Login
    </button>
</div>

        <p className="text-center mt-3 mb-3">
          <a href="#" className="text-decoration-none text-primary">
            Forgot password?
          </a>
        </p>
      </form>
    </div>
  );
}
