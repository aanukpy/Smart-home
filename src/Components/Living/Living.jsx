import React from "react";
import { Link } from "react-router-dom";
import "./Living.css";

 const LivingRoom = () => {
  return (
    <div className="macbook-pro">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Living Room</div>
          <div className="overlap-group">
            <div className="rectangle" />
            <div className="group" />
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="speaker"> Speaker</div>
            <div className="fan">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fan</div>
            <img className="image-removebg" alt="Image removebg" src="image-removebg-preview-34-1.png" />
            <div className="ellipse" />
            <div className="text-wrapper-2">+</div>
            <div className="text-wrapper-3">My Devices</div>
            <img className="iconmonstr-light" alt="Iconmonstr light" src="iconmonstr-light-bulb-19-1.svg" />
            <div className="text-wrapper-4">1 Device</div>
            <div className="text-wrapper-5">1 Device</div>
            <div className="overlap-wrapper">
              <div className="overlap-2">
                <div className="group-2">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-6">Smart TV</div>
                    <div className="text-wrapper-7">1 Device</div>
                  </div>
                  <div className="ellipse-2" />
                </div>
                <img className="iconmonstr" alt="Iconmonstr" src="iconmonstr-television-8-1.svg" />
              </div>
            </div>
            <div className="frame">
              <div className="ellipse-3" />
              <div className="text-wrapper-8"> bulb</div>
              <div className="text-wrapper-9">3 Device</div>
            </div>
            <div className="ellipse-4" />
            <div className="ellipse-5" />
            <Link to="/light">
        <img className="iconmonstr-light" alt="Iconmonstr light" src="iconmonstr-light-bulb-19-1.svg" />
      </Link>
          </div>
        </div>
        <img className="rectangle-4" alt="Rectangle" src="rectangle-22.svg" />
      </div>
    </div>
  );
};
export default LivingRoom