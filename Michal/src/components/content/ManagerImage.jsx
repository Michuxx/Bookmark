import React from "react";
import "./manager.scss";

const ManagerImage = ({ image, direction }) => {
  const styleMap = {
    left: "left-image-background",
    right: "right-image-background",
  };

  const imageBackgroundStyle = styleMap[direction];
  return (
    <div className="manager-image-wrapper">
      <div className={imageBackgroundStyle}></div>
      <div className="manager-image">
        <img src={image} alt="illustration" className="image-tab1" />
      </div>
    </div>
  );
};

export default ManagerImage;
