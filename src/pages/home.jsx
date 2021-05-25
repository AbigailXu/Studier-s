import React, { Component } from "react";
import UnderConstruction from "../images/page_under_construction.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          className="page-under-construction"
          src={UnderConstruction}
          alt="page under construction"
        />
      </div>
    );
  }
}

export default Home;
