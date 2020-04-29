import React, { Component } from "react";
import "./Styles/style.less";
import Navigation from "./Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader";
import { Mainreact } from "./Pages/Mainreact";
import { Hooks } from "./Pages/Hooks";
import { Jsxcontent } from "./Pages/Jsxcontent";
import { Exercise } from "./Pages/Exercise";
import { Exercise2 } from "./Pages/Exercise2";
import { Exercise4 } from "./Pages/Exercise4.js";
import Fetch from "./Pages/Fetch";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Navigation selected="react" />
            <Mainreact />
          </Route>
          <Route path="/jsxcontent">
            <Navigation selected="jsx" />
            <Jsxcontent />
          </Route>
          <Route path="/hooks">
            <Navigation selected="hooks" />
            <Hooks />
          </Route>
          <Route path="/exercise">
            <Navigation selected="exercise" />
            <Exercise />
          </Route>
          <Route path="/exercise2">
            <Navigation selected="exercise2" />
            <Exercise2 />
          </Route>
          <Route path="/exercise4">
            <Navigation selected="exercise4" />
            <Exercise4 />
          </Route>
          <Route path="/fetch">
            <Navigation selected="fetch" />
            <Fetch />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default hot(module)(App);
