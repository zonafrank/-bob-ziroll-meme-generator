import React from "react";
import trollFace from "../images/troll_face.png";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img className="logo-img" src={trollFace} alt="logo" />
        <span className="logo-text">Meme Generator</span>
      </div>
      <div className="nav-title">React Course - Project 3</div>
    </nav>
  );
};

export default Navbar;
