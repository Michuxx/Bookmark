import React from "react";
import "../../../buttons.scss";

const Button = ({ children, type }) => {
  const styleMap = {
    blue: "blue-button",
    white: "white-button",
    red: "red-button",
  };

  const buttonStyle = styleMap[type];

  return <button className={buttonStyle}>{children}</button>;
};

export default Button;
