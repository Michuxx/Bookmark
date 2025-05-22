import React from "react";
import Button from "../content/content-items/Button";

const ExtendedNavbar = () => {
  return (
    <div className="extended-navbar-wrapper">
      <p>FEATURES</p>
      <p>PRICING</p>
      <p>CONTACT</p>
      <Button type="red">LOGIN</Button>
    </div>
  );
};

export default ExtendedNavbar;
