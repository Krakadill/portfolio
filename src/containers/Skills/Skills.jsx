import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <div className="skills__header">
          <h1>Skills</h1>
        </div>
        <div className="skills__content-container">
          <div className="skills__content">
            <p>
              I have worked with many programing languages, which are necessary
              for front-end web developing and amongst them the most in demand
              programing langeages: React and Tailwind.
            </p>
          </div>
          <div className="skills__list">
            <p>
              <a href="https://en.wikipedia.org/wiki/HTML" target="blank">
                HTML
              </a>
            </p>
            <p>
              <a href="https://en.wikipedia.org/wiki/CSS" target="blank">
                CSS
              </a>
            </p>
            <p>
              <a href="https://en.wikipedia.org/wiki/JavaScript" target="blank">
                JAVASCRIPT
              </a>
            </p>
            <p>
              <a
                href="https://en.wikipedia.org/wiki/React_(software)"
                target="blank"
              >
                REACT JS
              </a>
            </p>
            <p>
              <a
                href="https://en.wikipedia.org/wiki/Tailwind_CSS"
                target="blank"
              >
                TAILWIND CSS
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
