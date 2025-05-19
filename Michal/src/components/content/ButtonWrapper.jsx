import React from "react";
import Button from "./content-items/Button";

const ButtonWrapper = () => {
  return (
    <div className="manager-button-wrapper">
      <Button type="blue">Get It on Chrome</Button>
      <Button type="white">Get It on Firefox</Button>
    </div>
  );
};

export default ButtonWrapper;
