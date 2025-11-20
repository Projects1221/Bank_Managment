import React, { useState } from "react";
import api from "./api/axios.js";
import "../Style/RegisterUser.css";
import { useNavigate } from "react-router-dom";

export default function RegisterUser() {
  let [data, setData] = useState({
    username:"",
    email: "",
    password: "",
    role:"CUSTOMER"
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
      const response = await api.post("/api/register", data);
        console.log(response.status);
        if(response.status==201){
            alert("Registration Successful!");
            navigate("/");
        }else{
            alert("Something went wrong!"+response.status);
        }
    } catch (error) {
      console.error("Error:", error);
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form className="p-4 rounded shadow-lg bg-white text-start " onSubmit={handleSubmit}>
        
        <h3 className="text-center mb-4 fw-bold text-primary">
          Sign Up
        </h3>
          <div className="form-group mb-3">
          <label htmlFor="name" className="ml-5 fw-semibold">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Enter username"
            onChange={handleChange}
            required
          />
        </div>

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
    <button type="button" onClick={ ()=>{navigate("/")}}  className="me-3 btn btn-secondary w-50">
        Login
    </button>
    <button  type="submit" className=" ms-3 btn btn-success w-50">
          Sign Up
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
