import React from "react";
import "./manager.scss";
import Headline from "./content-items/Headline";
import Description from "./content-items/Description";

const ManagerInfo = ({ children, headline, description, type }) => {
  return (
    <div className="manager-info-wrapper">
      <Headline type={type}>{headline}</Headline>
      <Description type={type}>{description}</Description>
      {children}
    </div>
  );
};

export default ManagerInfo;
