import React from "react";
import { images } from "../../../assets";
import "./styles.scss";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { LandingPageConstants } from "../../../constants/LandingPage/LandingPageConstants";

function Promotion() {
  return (
    <div className="container">
      <div className="firstCol">
        <div className="promotion-header">
          <h1>Lowest Prices</h1>
          <h1>Best Quality Shopping</h1>
        </div>
        <div className="features">
          {LandingPageConstants.features.map((item, index) => {
            const isLastItem = index === LandingPageConstants.features.length - 1;
            return (
                <div key={index} className={`singleFeature${!isLastItem ? ' separator' : ''}`}>
                    <item.icon size={'42px'} />
                    <p>{item.name}</p>
                </div>)
          })}
        </div>
        <div className="appButton">
          <IoLogoGooglePlaystore size={"50px"} />
          <p>Download Shoppe App</p>
        </div>
      </div>
      <img src={images.image2} />
    </div>
  );
}

export default Promotion;
