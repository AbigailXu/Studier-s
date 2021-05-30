import React, { Component } from "react";
import MusicCard from "./musicCard";

// image
import ChillHopMusic_LofiHipHop from "../images/ChillHopMusic-LofiHipHop.png";

// sound
import happy_lofi from "../musics/Happy Lofi.mp3";

class Bgm extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <MusicCard
            music={happy_lofi}
            image={ChillHopMusic_LofiHipHop}
            title="Happy Lofi"
            text="YouTube. (2021). Happy Lofi. YouTube. https://www.youtube.com/watch?v=uHFxYL3WtBs&amp;list=PLr8Sd_4ImWaYLmtSsjBpzJuNshTNuQwGs&amp;index=1. "
          />
          
        </div>
      </div>
    );
  }
  handlePlay = (sound) => {};
}

export default Bgm;
