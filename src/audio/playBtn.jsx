import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useAudio = (music) => {
  const [audio] = useState(new Audio(music));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);
  
  useEffect(() => {
    playing ? audio.play() : audio.pause();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    // audio.addEventListener("ended", () => {
    //     audio.currentTime = 0;
    //     toggle();
    // });
    return () => {
    audio.removeEventListener("ended", () => setPlaying(false));
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  return [playing, toggle];
};

const PlayBtn = ({ music }) => {
  const [playing, toggle] = useAudio(music);
  const iconClass = playing ? "stop-circle" : "play-circle";
  return (
    <span>
      <FontAwesomeIcon className="play-btn" icon={["far", iconClass]} onClick={toggle} />
    </span>
  );
};

export default PlayBtn;
