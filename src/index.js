import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { Component } from "react";
import { Switch, BrowserRouter as Router,  Route } from "react-router-dom";
import Header from "./pages/header/header";
import Home from "./pages/home/home";
import Projects from "./pages/projects/project"
export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch >
          <Route path = "/"  exact = {true} component = {Home} />
          <Route path = "/projects" component = {Projects} />
        </Switch>
      </Router>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
