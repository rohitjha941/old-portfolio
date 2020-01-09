import React, { Component } from "react";
import "./projects.scss";
import Rethink from "../../static/projects/rethink.png";
import Esummit from "../../static/projects/esummit.png";
import Srishti from "../../static/projects/srishti.png";
export default class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <div className="projects_unit">
          <img className="project_image" src={Rethink} alt="Rethink Portal" />

          <div className="project_details">
            <div className="project_title">Tinkering Lab</div>

            <div className="project_description">
              Rethink Portal is the official portal of Tinkering Lab. It helps
              in the dissemination of information such as Events, Achievement,
              Projects, etc. It also enables users to create a project, get
              approval for the project, submit report & get an item issued from
              the lab.
            </div>

            <div className="project_links">
              <button> Visit</button>
              <button> Code </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
