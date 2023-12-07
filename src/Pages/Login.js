import React from "react";
import "../Pages/Style/Login.css";
import person_img from "./Asets/person.png";
import password_img from "./Asets/password.png";
import arrow_img from "./Asets/arrow.png"
const Login = () => {
  return (
    <div className="login-container">
      <div className="login">
        
        <div className="login-header">
          <div className="circle">
            <img src={arrow_img} alt=""/> 
          </div>
          <label>Login</label>
        </div>
        <div className="login-body">
          <div className="login-form">
            <div className="login-form-img">
              <img src={person_img} alt="" />
            </div>
            <input type="text" placeholder="Username"></input>
          </div>
        </div>
        <div className="login-body">
          <div className="login-form">
            <div className="login-form-img">
              <img src={password_img} alt="" />
            </div>
            <input type="password" placeholder="Password"></input>
          </div>
        </div>
        <div className="login-forgotpassword">
          forgot Password? <span>Click Here!</span>
        </div>
        <div className="login-button-cover">
          <div
            className="login-button"
            // onClick={() => setAction("Login")}
          >
            Log In
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
