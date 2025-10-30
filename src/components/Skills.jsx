import React from "react";
import "../components/Style/index.css";
import "../components/Style/skills.css";

function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="container skills-inner">
        <h4 id="skills-heading">Skills</h4>

        <div className="skills-container">
          <div className="tech-stack" aria-label="Technical skills and tools">
            <h5>Tech Stack</h5>
            <div className="tech-stack-categories">
              <div className="tech-card">
                <strong>Languages</strong>
                <ul className="skills-list">
                  <li>C#</li>
                  <li>Python</li>
                  <li>MicroPython</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>HTML/CSS</li>
                </ul>
              </div>

              <div className="tech-card">
                <strong>Frameworks & Libraries</strong>
                <ul className="skills-list">
                  <li>React</li>
                  <li>React Native</li>
                  <li>ASP.NET</li>
                </ul>
              </div>

              <div className="tech-card">
                <strong>Tools & Platforms</strong>
                <ul className="skills-list">
                  <li>Xcode</li>
                </ul>
              </div>

              <div className="tech-card">
                <strong>Other Technologies</strong>
                <ul className="skills-list">
                  <li>REST API</li>
                  <li>Raspberry Pi</li>
                  <li>Git</li>
                  <li>Postman</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>

          <aside className="languages-spoken" aria-label="Languages spoken">
            <h5>Languages I Speak</h5>
            <ul className="languages-list">
              <li>English</li>
              <li>Swedish</li>
              <li>Turkish</li>
              <li>German</li>
              <li>Danish</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Skills;