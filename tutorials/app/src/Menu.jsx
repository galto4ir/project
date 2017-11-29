import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class MyComponent extends Component {

  render() {
    return (
      <div>
        <Link to="/" className="button" style={{marginRight: "10px"}}>Нүүр</Link>
        <Link to="/contact" className="button">Холбоо барих</Link>
      </div>
    );
  }

}
