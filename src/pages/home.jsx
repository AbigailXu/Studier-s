import React, { Component } from "react";
import BG1 from "../images/background1.png";
import area3 from "../images/3.png";
import "../styles/common.css"

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          className="bg"
          src={BG1}
          alt="background"
        />
        <img
          onClick={()=>window.open("https://github.com/AbigailXu/Studier-s")}
          className="area3"
          src={area3}
          alt="background"
        />
      </div>
    );
  }
}

export default Home;
