import React from "react";
import imageTab1 from "/illustration-features-tab-1.svg";
import "./manager.scss";

const ManagerImage = () => {
  return (
    <div className="manager-image-wrapper">
      <div className="right-image-background"></div>
      <div className="manager-image">
        <img src={imageTab1} alt="illustration-1" className="image-tab1" />
      </div>
    </div>
  );
};

export default ManagerImage;
