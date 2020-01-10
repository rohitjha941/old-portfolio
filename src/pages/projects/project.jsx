import React, { Component } from "react";
import "./projects.scss";
import Rethink from "../../static/projects/rethink.png";
import Esummit from "../../static/projects/esummit.png";
import Radio from "../../static/projects/radio.png";
import Srishti from "../../static/projects/srishti.png";
// import HorizontalScroll from "react-scroll-horizontal";
export default class Projects extends Component {
  render() {
    return (
      <div reverseScroll={true} className="projects">
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
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://tinkeringlab.iitr.ac.in/"
              >
                <button> Visit</button>
              </a>
              {/* b<button> Code </button> */}
            </div>
          </div>
        </div>
        <div className="projects_unit">
          <img className="project_image" src={Radio} alt="College Radio" />
          <div className="project_details">
            <div className="project_title">College Radio </div>

            <div className="project_description">
            College Radio allows simultaneous live viewing of videos in real-time, akin to facebook’s watch party. It also allows real-time changes in track and queues.  Synchronization is achieved using WebSockets.
            </div>

            <div className="project_links">
              {/*
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://esummit.in/"
              >
                <button> Visit</button>
              </a>
            */}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/rohitjha941/radio"
              >
                <button> Code </button>
              </a>
            </div>
          </div>
        </div>

        <div className="projects_unit">
          <img className="project_image" src={Srishti} alt="Srishti Website" />
          <div className="project_details">
            <div className="project_title">Srishti Website </div>

            <div className="project_description">
            Srishti is the Annual Technical Exhibition of IIT Roorkee that aims towards integrating all realms of technical activities conducted within the R-land. Srishti has inspired the brilliant minds of our institute to come up with creative ideas and practical innovations
            </div>

            <div className="project_links">

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://srishti.iitr.ac.in/"
              >
                <button> Visit</button>
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/rohitjha941/srishti"
              >
                <button> Code </button>
              </a>
            </div>
          </div>
        </div>


        <div className="projects_unit">
          <img className="project_image" src={Esummit} alt="E-Summit Website" />
          <div className="project_details">
            <div className="project_title">E-Summit Website </div>

            <div className="project_description">
              E-Summit IIT Roorkee brings a platform to celebrate the history
              and the spirit of entrepreneurship; and to inspire the leaders and
              roblem solvers of today and tomorrow. This 2-day extravaganza will
              see students and budding enthusiasts on a common stage.
            </div>

            <div className="project_links">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://esummit.in/"
              >
                <button> Visit</button>
              </a>
              {/* b<button> Code </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
