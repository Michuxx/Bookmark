import React from "react";
import dots from "/bg-dots.svg";
import Button from "./content-items/Button";

const Card = ({ img, browserName, version }) => {
  return (
    <div className="card-container">
      <img src={img} alt="browser-logo" className="browser-logo" />
      <h3>Add to {browserName}</h3>
      <p>Minimum version {version}</p>
      <img src={dots} alt="dots" className="dots" />
      <Button type="blue">Add & install Extension</Button>
    </div>
  );
};

export default Card;
