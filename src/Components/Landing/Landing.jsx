import React from "react";

import "./Landing.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="div">
        <div className="about-features">
          About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Features&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Devices&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact
        </div>
        <img className="image" alt="Image" src="https://www.eetimes.com/wp-content/uploads/Fig-1-wireless-combo-synaptics.png?w=640&resize=640%2C541" />
        <p className="welcome-to-ezyliv">
          Welcome to EzyLiv, the digital haven that places the power of your entire home right at your fingertips!
          Imagine a world where every light, thermostat, appliance, and security feature in your home responds to your
          desires with a single touch. EzyLiv makes this extraordinary vision a simple reality, giving you the ultimate
          control over your living space.With EzyLiv, you&#39;re just one click away from making your daily routines
          more efficient, secure, and energy-saving.
        </p>
        <img className="iconmonstr-check" alt="Iconmonstr check" src="iconmonstr-check-mark-7-2.svg" />
        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
            <div className="group-2" />
            <img className="group-3" alt="Group" src="group.png" />
            <img className="group-4" alt="Group" src="image.png" />
          </div>
        </div>
        <div className="component">
          <group
            className="group-15"
            img="./group15.png"
            line="image.svg"
            line1="line-26-2.svg"
            line2="line-27-2.svg"
          />
        </div>
        <div className="group-5">
          <div className="overlap">
            <p className="smart-living-one">
              <span className="span">“Smart living,&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="text-wrapper-2">&nbsp;</span>
              <span className="text-wrapper-3">One Touch</span>
              <span className="span"> Away”</span>
            </p>
            <p className="ezyliv">
              <span className="span">ezyl</span>
              <span className="text-wrapper-3">i</span>
              <span className="span">v</span>
            </p>
            <div className="group-wrapper">
              <group
                className="group-15"
                img="line-25-3.svg"
                line="line-24-2.svg"
                line1="line-26-3.svg"
                line2="line-27-3.svg"
              />
            </div>
          </div>
          <div className="free-to-join">
            <div className="overlap-group-3">
              <div className="rectangle" />
              <div className="text-wrapper-4">FREE TO JOIN</div>
            </div>
          </div>
          <div className="div-wrapper">
          < div className="text-wrapper-5 btn">Login</div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
