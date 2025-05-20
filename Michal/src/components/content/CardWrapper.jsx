import React from "react";
import Card from "./Card";
import "./card.scss";
import chrome from "/logo-chrome.svg";
import opera from "/logo-opera.svg";
import firefox from "/logo-firefox.svg";

const CardWrapper = () => {
  return (
    <div className="card-wrapper">
      <Card img={chrome} browserName="Chrome" version="62"></Card>
      <Card img={firefox} browserName="Firefox" version="55"></Card>
      <Card img={opera} browserName="Opera" version="46"></Card>
    </div>
  );
};

export default CardWrapper;
