import React from "react";
import "./manager.scss";
import Headline from "./content-items/Headline";
import Description from "./content-items/Description";
import Button from "./content-items/Button";

const ManagerInfo = () => {
  return (
    <div className="manager-info-wrapper">
      <Headline>A simple Bookmark Manager</Headline>
      <Description>
        A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free
      </Description>
      <div className="manager-button-wrapper">
        <Button type="blue">Get It on Chrome</Button>
        <Button type="white">Get It on Firefox</Button>
      </div>
    </div>
  );
};

export default ManagerInfo;
