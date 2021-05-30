import React, { Component } from "react";
import Bgm from "../audio/bgm"
//AIzaSyAI8fqxPps4wDvPS5w1gV_YuBBRwH1mEwY

class Music extends Component {
  state = {};
  render() {
    return (
      <div className="contents">
        <h1>Music</h1>
        <Bgm/>
      </div>
    );
  }
}

export default Music;
