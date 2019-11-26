import React, { Component } from "react";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
import "./home.scss";
export default class Home extends Component {
  render() {
    return (
      <Element name="home" className="home">
        <div className="overlay">
          <span />
        </div>
        <div>
          <div className="home_name">
          Hello! I'm Rohit 
          <br />
          I'm a Developer
          </div>
 
 
        </div>
      </Element>
    );
  }
}
