import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";
const Login = () => {
  return (
    <div class="main">
      <div className="left">
        <p class="centered-text">Welcome to K-SWIFT</p>
      </div>
      <div className="right">
        <p class="sign" align="center">
          Sign In{" "}
        </p>
        <form class="form1">
          <input
            class="un "
            type="text"
            align="center"
            placeholder="Username"
          />
          <input
            class="pass"
            type="password"
            align="center"
            placeholder="Password"
          />

          <Link to="/industry" style={{ textDecoration: "none" }}>
            <a class="submit" align="center">
              Sign in
            </a>
          </Link>

          <p class="forgot" align="center">
            <a href="#">Forgot Password?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
