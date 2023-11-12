import React from "react";
import "./Login.css";

 const LogIn = () => {
  return (
    <div className="log-in">
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />
          <p className="welcome-back-homie">
            <span className="text-wrapper">Welcome Back </span>
            <span className="span">Homie</span>
            <span className="text-wrapper-2">!</span>
          </p>
          <div className="take-me-in">
            <div className="overlap-group">
              <div className="rectangle-2" />
              <div className="text-wrapper-3">Take me in!</div>
            </div>
          </div>
          <p className="new-to-ezyliv-sign">
            <span className="text-wrapper">New to ezyliv? </span>
            <span className="span">Sign up</span>
          </p>
          <div className="ezyliv">
            <p className="p">
              <span className="text-wrapper">ezyl</span>
              <span className="span">i</span>
              <span className="text-wrapper">v</span>
            </p>
            <img className="frame" alt="Frame" src="frame.svg" />
          </div>
          <div className="enter-data">
            <img className="line" alt="Line" src="line-1.svg" />
            <img className="img" alt="Line" src="line-2.svg" />
            <div className="text-wrapper-4">username</div>
            <div className="text-wrapper-5">password</div>
            <div className="text-wrapper-6">forgot password?</div>
            <img className="vector" alt="Vector" src="vector.svg" />
          </div>
        </div>
        <img className="home" alt="Home" src="home-1.png" />
      </div>
    </div>
  );
};
export default LogIn
