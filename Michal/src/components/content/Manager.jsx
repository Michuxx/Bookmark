import React from "react";
import ManagerImage from "./ManagerImage";
import ManagerInfo from "./ManagerInfo";
import ButtonWrapper from "./ButtonWrapper";
import imageTab1 from "/illustration-hero.svg";
import imageTab2 from "/illustration-features-tab-1.svg";
import "./manager.scss";
import ChapterWrapper from "./ChapterWrapper";
import CardWrapper from "./CardWrapper";
import FaqWrapper from "./FaqWrapper";

const Manager = () => {
  return (
    <div className="manager-wrapper">
      <div className="info-section">
        <ManagerImage image={imageTab1} direction="right" />
        <ManagerInfo
          headline="A simple Bookmark Manager"
          description="A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free"
        >
          <ButtonWrapper />
        </ManagerInfo>
      </div>
      <div className="space"></div>
      <ManagerInfo
        headline="Feauters"
        description="Our aim is to make it quick and easy for oyu to access your favourite websites. 
        Your bookmarks sync between your devices so you can access them on the go."
        type="features"
      ></ManagerInfo>
      <ChapterWrapper />
      <ManagerImage image={imageTab2} direction="left" />
      <ManagerInfo
        headline="Bookmark in one click"
        description="Organize your bookmarks however you like. Our simple drag-and-pop interface gives 
        your complete control over how you manage your favourite sites"
      ></ManagerInfo>
      <div className="space"></div>
      <ManagerInfo
        headline="Download the extension"
        description="We've got more browsers in the pipeline.
      Please do let us know if you've got a favourite you'd like us to prioritize."
      ></ManagerInfo>
      <CardWrapper />
      <div className="space"></div>
      <ManagerInfo
        headline="Frequently Asked Questions"
        description="Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."
      ></ManagerInfo>
      <FaqWrapper />
    </div>
  );
};

export default Manager;
