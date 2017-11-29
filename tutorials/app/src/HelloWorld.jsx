import React, {Component} from "react";
import Routing from "./Routing";
export default class HelloWorld extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="column column-100">
             <Routing />
          </div>
        </div>
      </div>
    );
  }
}
