import React, { Component } from "react";
import { Element } from "react-scroll";
import "./home.scss";
export default class Home extends Component {
  render() {
    return (
      <Element name="home" className="home">
        <div className="overlay">
          <span />
        </div>
        <div>
          <div className="home_name">I am Rohit Jha</div>
          <div className="home_det">Software Developer | Web Developer | DevOps</div>
        </div>
      </Element>
    );
  }
}
