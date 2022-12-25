import React from "react";
import styles from "./about.module.scss";
import Heading from "../../components/heading/heading";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.about_desc}>
        <div className={styles.about_head}>About Me</div>I am a pre-final year
        student at IIT Roorkee. I am interested in the field of Back-End,
        Containers & Cloud as Code & I love working on projects which
        simplifies lives. I've worked with various diverse web, cloud and
        server technologies.
        <br />
        <br />
        <br />
        <div className={styles.about_head}>Connect</div>
        <div>
          <a className={styles.about_connect_link} href="mailto:me+porfolio@rjha.dev">
            me@rjha.dev
          </a>

          <a
            target="_blank"
            className={styles.about_connect_link}
            rel="noopener noreferrer"
            href="https://github.com/rohitjha941/"
          >
            Github
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.linkedin.com/in/rohitjha941"
            className={styles.about_connect_link}
          >
            Linkedin
          </a >
        </div >
      </div >


      <div className={styles.about_skills}>
        < div className={styles.about_head}>Skills</div>
        <Heading>Languages</Heading>

        <div className={styles.about_desc}>
          C++, Fortran, JavaScript, Python, PHP
        </div >

        <br />
        <Heading>FrontEnd</Heading>
        <div className={styles.about_desc}>
          React, Redux, AngularJS, jQuery, VueJs
        </div >

        <br />
        <Heading>BackEnd</Heading>
        <div className={styles.about_desc}>Django, Django Rest, Laravel</div>

        < br />
        <Heading>Operating Systems</Heading>
        <div className={styles.about_desc}>Windows, Ubuntu, Fedora</div>

        < br />
        <Heading>DevOps</Heading>
        <div className={styles.about_desc}>
          Infrastructure as a Code, Terraform, GitLab - CI, AWS, Azure,
          Container Orchestration
        </div >

        <br />
        <Heading>Databases</Heading>
        <div className={styles.about_desc}>MySQL, Postgresql</div>
      </div >

    </div>
  );
}

export default About;