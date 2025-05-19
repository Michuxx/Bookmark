import React from "react";
import ManagerImage from "./ManagerImage";
import ManagerInfo from "./ManagerInfo";
import ButtonWrapper from "./ButtonWrapper";
import imageTab1 from "/illustration-features-tab-1.svg";
import "./manager.scss";

const Manager = () => {
  return (
    <div className="manager-wrapper">
      <ManagerImage image={imageTab1} direction="right" />
      <ManagerInfo
        headline="A simple Bookmark Manager"
        description="A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free"
      >
        <ButtonWrapper />
      </ManagerInfo>
      <div className="space"></div>
      <ManagerInfo
        headline="Feauters"
        description="Our aim is to make it quick and easy for oyu to access your favourite websites. 
        Your bookmarks sync between your devices so you can access them on the go."
      ></ManagerInfo>
    </div>
  );
};

export default Manager;
