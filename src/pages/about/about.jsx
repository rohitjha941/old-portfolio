import React, { Component } from "react";
import "./about.scss";
import { Element } from "react-scroll";
import Resume from "../../static/resume.pdf"

export default class About extends Component {
  render() {
    return (
      <Element className="about" name="about">
        <h1>About Me</h1>
        <div className="about_desc">
          I am a sophomore at IIT Roorkee, studying B. Tech. Engineering
          Physics. I have a keen interest in Programming. My areas of interests
          include Back-End, Containers & Cloud as Code. I love to play with tech
          around me.
        </div>

        <h1 style={{ paddingTop: "4rem" }}>I can work on</h1>

        <div className="work_array">
          <div className="work_unit">
            <div className="work_title">Front-End</div>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript</li>
              <li>ReactJs</li>
              <li>Angular 7</li>
            </ul>
          </div>

          <div className="work_unit">
            <div className="work_title">Back-End</div>
            <ul>
              <li>Django</li>
              <li>Django Rest Framework</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>PHP</li>
            </ul>
          </div>

          <div className="work_unit">
            <div className="work_title">DevOps</div>
            <ul>
              <li>Ubuntu Server</li>
              <li>Nginx</li>
              <li>Gunicorn</li>
              <li>Docker (+ Compose)</li>
              <li>Windows Server with IIS</li>
            </ul>
          </div>
        </div>

        <div className = "about_resume">
          <a target = "_blank" rel="noopener noreferrer" href = {Resume}> Resume </a>
        
        </div>
      </Element>
    );
  }
}
