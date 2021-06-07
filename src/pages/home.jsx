import React, { Component } from "react";
import { Link } from 'react-router-dom';
import BG1 from "../images/background1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import area3 from "../images/3.png";
import "../styles/common.css";
import "../styles/cover.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <img
          onClick={() => window.open("https://github.com/AbigailXu/Studier-s")}
          className="area3"
          src={area3}
          alt="background"
        /> */}
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <div className="bg-container">
            <img className="bg" src={BG1} alt="background" />
          </div>
          <div className="cover-s1">
            <h1>Studier's</h1>
            <h4>integrated learning toolkit</h4>
            <button onClick={()=>this.props.history.push('/tasks/main')} 
            className="badge rounded-pill start">Get Started</button>
          </div>
          <div className="cover-s2">
            <h1>[ Current Features ]</h1>

            <h4>- Tasks management</h4>
            <h4>- Playing lofi music for a relaxing learning</h4>
          </div>
        </div>
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <div className="cover-s3">
            <div className="media-containers">
              <h4 className="media-container-1">
                <FontAwesomeIcon
                  onClick={() =>
                    window.open("https://github.com/AbigailXu/Studier-s")
                  }
                  className="media-icon"
                  icon={["fab", "github"]}
                />
                <div>Frontend</div>
                <div>Source Code</div>
              </h4>
              <h4 className="media-container-2">
                <FontAwesomeIcon
                  onClick={() =>
                    window.open("https://github.com/AbigailXu/Studier-s-backend")
                  }
                  className="media-icon"
                  icon={["fab", "github"]}
                />
                <div>Backend</div>
                <div>Source Code</div>
              </h4>
            </div>
            {/* <h3>
              Studier's is still under development, more features will be added.
            </h3> */}
          </div>
          <div className="cover-footer">
            <p>&copy; Copyright 2021, Abigail Xu</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
