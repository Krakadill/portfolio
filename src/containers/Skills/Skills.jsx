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
            <p>HTML</p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>
            <p>REACT JS</p>
            <p>TAILWIND CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
