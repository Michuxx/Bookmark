import React from "react";
import LogoSVG from "../../assets/logo-bookmark.svg?react";

import "./header.scss";

const Logo = ({ color }) => {
  let textColor = "";
  switch (color) {
    case "white":
      textColor = "#FFF";
      break;
    case "black":
      textColor = "black";
      break;
  }

  return (
    <div className="logo-image">
      <LogoSVG style={{ color: textColor }} />
    </div>
  );
};

export default Logo;
