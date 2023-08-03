import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="hero" id="home">
      <div className="hero__container">
        <h1 className="hero__header">
          Welcome To <br /> My Personal Protfolio
        </h1>
        <p className="hero__paragraph">
          Hi there! I'm a Front-end Web Developer and this is my portfolio
          website, where you can see my projects and learn about my
          skills.
        </p>
        <button className="hero__button">
          <a href="projects">Learn More</a>
        </button>
      </div>
    </div>
  );
};

export default Header;
