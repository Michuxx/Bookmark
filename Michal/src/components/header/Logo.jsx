import React from "react";
import logo from "/logo-bookmark.svg";
import "./header.scss";

const Logo = () => {
  return (
    <div className="logo-image">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
