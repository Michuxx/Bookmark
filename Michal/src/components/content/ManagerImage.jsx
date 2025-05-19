import React from "react";
import "./manager.scss";

const ManagerImage = ({ image, direction }) => {
  const classMap = {
    left: {
      wrapper: "manager-left-image-wrapper",
      background: "image-background-left",
      container: "manager-image-left",
      img: "image-tab-left",
    },
    right: {
      wrapper: "manager-right-image-wrapper",
      background: "image-background-right",
      container: "manager-image-right",
      img: "image-tab-right",
    },
  };

  const classes = classMap[direction];

  return (
    <div className={classes.wrapper}>
      <div className={classes.background}></div>
      <div className={classes.container}>
        <img src={image} alt="illustration" className={classes.img} />
      </div>
    </div>
  );
};

export default ManagerImage;
