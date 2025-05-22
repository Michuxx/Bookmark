import React from "react";
import facebookIcon from "/icon-facebook.svg";
import twitterIcon from "/icon-twitter.svg";

const FooterIcons = () => {
  return (
    <div className="footer-icons">
      <img src={facebookIcon} alt="facebook" />
      <img src={twitterIcon} alt="twitter" />
    </div>
  );
};

export default FooterIcons;
