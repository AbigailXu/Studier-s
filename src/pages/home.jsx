import React, { Component } from "react";
import BG1 from "../images/background1.png";
import area3 from "../images/3.png";
import "../styles/common.css";
import "../styles/cover.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <img className="bg" src={BG1} alt="background" />
        <img
          onClick={() => window.open("https://github.com/AbigailXu/Studier-s")}
          className="area3"
          src={area3}
          alt="background"
        />
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <div className="cover-s1">
            <h1>Studier's</h1>
            <h3>- integral learning toolkit -</h3>
          </div>
          <div className="cover-s2">
            <h1>[ Currently avaliable features ]</h1>
            
            <h4>- Tasks management</h4>
            <h4>- Playing lofi music for a relaxing learning</h4>
          </div>
          <div className="cover-s3">
            <h3>
              Studier's is still under development, more features will be added.
            </h3>
          </div>
          <div className="cover-footer">
            <p>
            &copy; Copyright 2021, Abigail Xu
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
