import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';
export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="div">
        <div className="text-wrapper">Hello Maria!</div>
        <div className="text-wrapper-2">Your Home is Locked</div>
        <div className="overlap">
          <div className="rectangle" />
          <div className="text-wrapper-3">Active Devices</div>
          <div className="ellipse" />
          <img className="whatsapp-image" alt="Whatsapp image" src="" />
       
          <div className="text-wrapper-4">14</div>
        </div>
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="ellipse" />
          <div className="text-wrapper-5">Usage,kwh</div>
          <img className="iconmonstr-flash" alt="Iconmonstr flash" src="iconmonstr-flash-thin-1.svg" />
          <div className="text-wrapper-6">325</div>
        </div>
        <div className="overlap-2">
          <div className="rectangle-2" />
          <div className="text-wrapper-7">Temperature</div>
          <div className="ellipse-2" />
          <img className="iconmonstr-weather" alt="Iconmonstr weather" src="iconmonstr-weather-136-1.svg" />
          <div className="text-wrapper-8">23</div>
          <div className="ellipse-3" />
        </div>
        <div className="image-wrapper">
          <img className="image" alt="Image" src={"./images/maria.png"} />
        </div>
        <div className="overlap-group-2">
          <div className="text-wrapper-9">Manage Room</div>
          <div className="overlap-3">
            <div className="rectangle-3" />
            <div className="text-wrapper-10">   <Link className="custom-link" to="/kitchen">Kitchen</Link ></div>
            <div className="element-devices-active">
              3 Devices
              <br />
              &nbsp;&nbsp; Active
            </div>
            <div className="ellipse-4" />
          </div>
          <div className="overlap-4">
            <div className="rectangle-4" />
            <div className="text-wrapper-11">  <Link className="custom-link" to="/living-room">Living Room</Link ></div>
            <div className="element-devices-active-2">
              3 Devices
              <br />
              &nbsp;&nbsp; Active
            </div>
            <div className="ellipse-5" />
          </div>
          <div className="iconmonstr-angel">
            <img className="vector" alt="Vector" src="vector.svg" />
          </div>
          <div className="overlap-5">
            <div className="rectangle-5" />
            <div className="text-wrapper-12"> <Link className="custom-link" to="/bathroom">Bath Room</Link ></div>
            <div className="element-devices-active-3">
              2 Devices
              <br />
              &nbsp;&nbsp; Active
            </div>
            <div className="ellipse-6" />
          </div>
        </div>
        <img className="img" alt="Rectangle" src="rectangle-22.svg" />
        <div className="overlap-6">
          <img className="iconmonstr-angel-2" alt="Iconmonstr angel" src="iconmonstr-angel-down-circle-thin-3.svg" />
          <img className="rectangle-6" alt="Rectangle" src={'./'} />
          <div className="text-wrapper-13">Secure,Manage,Thrive</div>
          <div className="rectangle-7" />
          <p className="manage-security">
            <span className="span">Manage Security!</span>
            <span className="text-wrapper-14">&nbsp;</span>
          </p>
        </div>
      </div>
    </div>
  );
};
