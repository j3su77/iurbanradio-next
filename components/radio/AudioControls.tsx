import React, { FC } from "react";
import { IoPlaySharp as Play } from "react-icons/io5";
import { FaPause as Pause } from "react-icons/fa";

import SpinnerLineRadio from "./SpinnerLineRadio";

interface Props {
  isPlaying: boolean;
  isLoading: boolean;
  onPlayPauseClick: (res: boolean) => void;
}

const AudioControls: FC<Props> = ({
  isPlaying,
  onPlayPauseClick,
  isLoading,
}) => {
  return (
    <>
      {isLoading ? (
        <div className="button-player-loading loading">
          <SpinnerLineRadio />
        </div>
      ) : isPlaying ? (
        <button
          type="button"
          className="pause"
          onClick={() => onPlayPauseClick(false)}
          aria-label="Pause"
        >
          <Pause />
        </button>
      ) : (
        <button
          type="button"
          className="play fadeIn"
          onClick={() => onPlayPauseClick(true)}
          aria-label="Play"
        >
          <Play />
        </button>
      )}
    </>
  );
};

export default AudioControls;
