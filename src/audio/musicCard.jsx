import React, { Component } from 'react';
import PlayBtn from "./playBtn"
import MusicCitation from "./musicCite"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class MusicCard extends Component {
  state = {};
  render() {
    return (
      <div className="col">
        <div className="card">
          <img src={this.props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              <PlayBtn music={this.props.music} />
              &nbsp; {this.props.title}  &nbsp;
              <MusicCitation text={this.props.text}/>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default MusicCard;
