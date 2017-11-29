import React, {Component} from "react";

import {BrowserRouter as Router, HashRouter,  Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

export default class Routing extends Component {
  render() {
    return(
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </HashRouter>
    );
  }
}
