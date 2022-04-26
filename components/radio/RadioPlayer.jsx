import { useState, useRef, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import $ from "jquery";

import AudioControls from "./AudioControls";
import LinesBars from "./LinesBars";
import { MarqueeText } from "./MarqueeText";

export const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const radiocontrol = useRef();

  var height = 0;

  useEffect(() => {
    if (isPlaying) {
      setIsLoading(true);
      radiocontrol.current.audio.current.src =
        process.env.NEXT_PUBLIC_RADIO_URL +
        "?noCache=" +
        Math.floor(Math.random() * 1000000);
      radiocontrol.current.audio.current.play();
    } else {
      radiocontrol.current.audio.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying) {
      isPaused();
      setIsPlaying(false);
    }
  }, [isPlaying]);

  const onLoaded = () => setIsLoading(false);

  const isRealPlaying = () => {
    setIsPlaying(true);

    $(".wave").each(function () {
      height = $(this).height();
      $(this).css("height", height);
    });
    $(".wave").removeClass("no-animation");
    $(".radio-lid").removeClass("slide-bottom");
    $(".radio-lid").addClass("slide-top");
  };

  const isPaused = () => {
    setIsPlaying(false);
    $(".wave").each(function () {
      height = $(this).height();
      $(this).css("height", height);
    });
    $(".wave").addClass("no-animation");
    $(".radio-lid").removeClass("slide-top");
    $(".radio-lid").addClass("slide-bottom");
  };

  return (
    <div className="container_radio">
      <div className="radio-container" style={{ position: "relative" }}>
        <div className="radio-body">
          {!isPlaying ? (
            <span className="radio-body-msg fadeIn">
              lo mejor de la radio online
            </span>
          ) : (
            isLoading && <span className="radio-body-msg fadeIn">cargando</span>
          )}
          <LinesBars />

          <div className="button-player">
            <div className="audio-controls">
              <MarqueeText isPlaying={isPlaying} isLoading={isLoading} />
              <div className="radio-lid slide-bottom" />
              <AudioControls
                isPlaying={isPlaying}
                onPlayPauseClick={setIsPlaying}
                isLoading={isLoading}
              />
              <AudioPlayer
                style={{ display: "none" }}
                preload="metadata"
                // Try other props!
                ref={radiocontrol}
                onPlaying={isRealPlaying}
                onLoadedMetaData={onLoaded}
                onPause={isPaused}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
