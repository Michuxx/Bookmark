import React from "react";
import "./header.scss";
import Logo from "./logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
