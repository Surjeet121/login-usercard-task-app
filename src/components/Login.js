import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginStyle.css";

const Login = () => {
  const navigate = useNavigate();


  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });


  const { email, password } = userData;

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("All fields are required !! ");
    } else if (email !== "demo@coralmango.com") {
      alert("Invalid Credentials!");
    } else if (password !== "demo123") {
      alert("Invalid Credentials!");
    } else {
      setUserData({ email: "", password: "" });
      navigate("/user-table");
    }
  };

  return (
    <div className="login__container">
      <h1> Login Page !</h1>
      <form onSubmit={handleSubmit}>
        <ul className="login-form-content">
          <li>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
          </li>
          <li>
            <input type="submit" value="Submit" />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Login;
