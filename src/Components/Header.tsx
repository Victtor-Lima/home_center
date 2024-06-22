import React from "react";
import NavCategs from "./NavCategs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <NavCategs />
    </header>
  );
};

export default Header;
