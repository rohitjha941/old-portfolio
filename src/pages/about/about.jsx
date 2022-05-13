import React, { Component } from "react";
import "./about.scss";
import Heading from "../../components/heading/heading";
import { defaults } from "gh-pages";

function About() {
  return (
    <div className="about">
      <div className="about-desc">
        <div className="about-head">About Me</div>I am a pre-final year
        student at IIT Roorkee. I am interested in the field of Back-End,
        Containers & Cloud as Code & I love working on projects which
        simplifies lives. I've worked with various diverse web, cloud and
        server technologies.
        <br />
        <br />
        <br />
        <div className="about-head">Connect</div>
        <div>
          <a className="about-connect-link" href="mailto:rjha@ph.iitr.ac.in">
            <i class="fas fa-envelope" /> rjha@ph.iitr.ac.in
          </a>

          <a
            target="_blank"
            className="about-connect-link"
            rel="noopener noreferrer"
            href="https://github.com/rohitjha941/"
          >
            <i class="fab fa-github" /> Github
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.linkedin.com/in/rohitjha941"
            className="about-connect-link"
          >
            <i class="fab fa-linkedin-in" /> Linkedin
          </a>
        </div>
      </div>

      <div className="about-skills">
        <div className="about-head">Skills</div>
        <Heading>Languages</Heading>

        <div className="about-desc">
          C++, Fortran, JavaScript, Python, PHP
        </div>

        <br />
        <Heading>FrontEnd</Heading>
        <div className="about-desc">
          React, Redux, AngularJS, jQuery, VueJs
        </div>

        <br />
        <Heading>BackEnd</Heading>
        <div className="about-desc">Django, Django Rest, Laravel</div>

        <br />
        <Heading>Operating Systems</Heading>
        <div className="about-desc">Windows, Ubuntu, Fedora</div>

        <br />
        <Heading>DevOps</Heading>
        <div className="about-desc">
          Infrastructure as a Code, Terraform, GitLab-CI, AWS, Azure,
          Container Orchestration
        </div>

        <br />
        <Heading>Databases</Heading>
        <div className="about-desc">MySQL, Postgresql</div>
      </div>
    </div>
  );
}

export default About;