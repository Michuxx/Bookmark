import React from "react";
import "./manager.scss";
import Headline from "./content-items/Headline";
import Description from "./content-items/Description";

const ManagerInfo = ({ children, headline, description }) => {
  return (
    <div className="manager-info-wrapper">
      <Headline>{headline}</Headline>
      <Description>{description}</Description>
      {children}
    </div>
  );
};

export default ManagerInfo;
