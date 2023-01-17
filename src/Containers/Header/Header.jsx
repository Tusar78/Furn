import React from "react";
import { Slider } from "../../Components";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="hero custom-container">
        <Slider />
      </div>
    </header>
  );
};

export default Header;
