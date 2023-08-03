import React from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/orvela-white-transparent-background.png";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#projects">Projects</a>
          </p>
          <p>
            <a href="#skills">Skills</a>
          </p>
          <p>
            <a href="#about">About</a>
          </p>
        </div>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </p>
              <p>
                <a href="#projects" onClick={() => setToggleMenu(false)}>
                  Projects
                </a>
              </p>
              <p>
                <a href="#skills" onClick={() => setToggleMenu(false)}>
                  Skills
                </a>
              </p>
              <p>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
