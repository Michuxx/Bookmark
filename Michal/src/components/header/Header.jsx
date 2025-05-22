import React from "react";
import "./header.scss";
import Logo from "./logo";
import Navbar from "./Navbar";
import ExtendedNavbar from "./ExtendedNavbar";
import "./navbar.scss";

const Header = () => {
  return (
    <header>
      <Logo color="black" />
      <Navbar />
      <ExtendedNavbar />
    </header>
  );
};

export default Header;
