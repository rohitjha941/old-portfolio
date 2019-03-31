import React, { Component } from "react";
import { Element } from "react-scroll";
import "./contact.scss";
export default class Contact extends Component {
  render() {
    return (
      <>
        <Element name="contact" className="contact">
          <h1>Say Hello</h1>

          <div className="contact_array">
            <div className="contact_offline">
              <h3>
                For any enquiries, or just to say hello, get in touch!
              </h3>
              <div className="contact_unit">
                <a href="mailto:rjha@ph.iitr.ac.in">
                  <i class="fas fa-envelope" />
                  &nbsp;rjha@ph.iitr.ac.in
                </a>
              </div>
              <div className="contact_unit">
                <i class="fas fa-phone" /> &nbsp;(+91) 7587 369029
              </div>
            </div>

            <div className="contact_social">
              <h3>Social Links</h3>

              <div className="contact_unit">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/rohitjha941/"
                >
                  <i class="fab fa-github" /> Github
                </a>
              </div>

              <div className="contact_unit">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.linkedin.com/in/rohitjha941"
                >
                  <i class="fab fa-linkedin-in" /> Linkedin
                </a>
              </div>

              <div className="contact_unit">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/rohit.jha.37201"
                >
                  <i class="fab fa-facebook" /> Facebook
                </a>
              </div>
            </div>
          </div>
        </Element>

        <div className = "credits">
        Crafted with <i class="fas fa-mug-hot"></i> by Me
        
        </div>
      </>
    );
  }
}
