import React, { Component } from "react";
import { Element } from "react-scroll";
import "./projects.scss";
import Rethink from "../../static/projects/rethink.png";
export default class Projects extends Component {
  render() {
    return (
      <Element name="projects" className="projects">
        <h1>Projects</h1>

        <div className="project_unit">
          <div className="project_header">
            <h2> Rethink Portal</h2>
            <div className="project_link">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://tinkeringlab.iitr.ac.in"
              >
                Click Here to Visit
              </a>
            </div>
          </div>
          <div className="project_details">
            <div className="project_image">
              <img src={Rethink} alt="Tikering Lab" />
            </div>

            <div className="project_details_array">
              <h3>Tech Stack</h3>

              <div className="project_details_stack">
                <span>Front-End: </span>
                <span> HTML5, CSS3, JavaScript, React, React-Redux </span>
              </div>

              <div className="project_details_stack">
                <span>Backend-End:</span>
                <span> Django, Django Rest Framework, MySQL </span>
              </div>

              <div className="project_details_stack">
                <span>DevOps: </span>
                <span>Ubuntu Server, Nginx, Gunicorn</span>
              </div>
              <br />
              <br />
              <h3>About</h3>
              <div className="project_details_description">
                Tinkering Lab is a technical facility, where students can learn,
                develop, conceptualize and experiment with different innovative
                ideas. Students use this lab as a platform to build, innovate
                and tinker by converting creative ideas into fine engineered
                products. The lab is equipped with state-of-the-art tools and
                technologies such as 3D printers, Laser Etching Machine, Fume
                Hood, Electronics, Wood Carving Machine, CNC, Vertical Machining
                Centre, chemicals, power and hand tools. 
                <br />
                <br />
                Rethink Portal is the official portal of Tinkering Lab. It helps
                in the dissemination of information such as Events, Achievement,
                Projects, etc. It also enables users to create a project, get
                approval for the project, submit report & get an item issued
                from the lab.
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}