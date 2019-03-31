import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { Component } from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import Header from "./pages/header/header";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch />
      </Router>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
