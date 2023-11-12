import React from "react";
import "./Kitchen.css";
 const Kitchen = () => {
  return (
    <div className="kitchen">
      <div className="div">
        <img className="rectangle" alt="Rectangle" src="rectangle-22.svg" />
        <div className="overlap-group">
          <div className="text-wrapper">Kitchen</div>
          <div className="overlap">
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="ellipse" />
            <div className="text-wrapper-2">+</div>
            <div className="text-wrapper-3">My Devices</div>
            <div className="refrigerator">
              {" "}
              <br />
              Refrigerator
            </div>
            <div className="rectangle-4" />
            <div className="text-wrapper-4">Light bulb</div>
            <img className="iconmonstr-light" alt="Iconmonstr light" src="iconmonstr-light-bulb-19-1.svg" />
            <div className="text-wrapper-5">3 Device</div>
            <div className="text-wrapper-6">1 Device</div>
            <div className="ellipse-2" />
            <div className="ellipse-3" />
            <img className="image-removebg" alt="Image removebg" src="image-removebg-preview-42-1.png" />
            <div className="rectangle-5" />
            <div className="text-wrapper-7">Thermostat</div>
            <div className="text-wrapper-8">1 Device</div>
            <div className="ellipse-4" />
            <img className="img" alt="Image removebg" src="image-removebg-preview-36-1.png" />
            <div className="rectangle-6" />
            <div className="text-wrapper-9">Exhaust Fan</div>
            <div className="text-wrapper-10">1 Device</div>
            <div className="ellipse-5" />
            <img className="image-removebg-2" alt="Image removebg" src="image-removebg-preview-41-1.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kitchen