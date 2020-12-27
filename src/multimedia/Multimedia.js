import React, { useState } from "react";
import YouTube from "react-youtube";
import { MDBModal } from "mdbreact";

import MULTIMEDIA from "./data";
import "./Multimedia.css";
import CloseIcon from "./close.svg";

const UrlMultimedia = ({ media }) => (
  <a className="Media" href={media.url} target="_blank" rel="noreferrer">
    <div className="Media-left">
      <img className="Media-image" src={media.image} alt={media.title} />
    </div>
    <div className="App-paragraph Media-right">
      <h4 className="Media-title">{media.title}</h4>
      <p className="Media-text">{media.text}</p>
    </div>
  </a>
);

const BIG_SCREEN_WIDTH_LIMIT = 800;

const YouTubeMultimedia = ({ media }) => {
  const [modalShown, setModalShown] = useState(false);
  const toggle = () => setModalShown((s) => !s);

  return (
    <>
      <div className="Media">
        <div className="Media-left">
          <YouTube
            videoId={media.youtube}
            opts={{
              height: "195",
              width: "320",
            }}
            onPlay={({ target }) => {
              if (window.innerWidth >= BIG_SCREEN_WIDTH_LIMIT) {
                target.stopVideo();
                setModalShown(true);
              }
            }}
          />
        </div>
        <div className="App-paragraph Media-right">
          <h4 className="Media-title">{media.title}</h4>
          <p className="Media-text">{media.text}</p>
        </div>
      </div>

      <MDBModal
        className="Youtube-modal"
        autoFocus
        centered
        size="fluid"
        isOpen={modalShown}
        toggle={toggle}
      >
        <div className="Youtube-video">
          <YouTube
            videoId={media.youtube}
            opts={{
              height: "600",
              width: BIG_SCREEN_WIDTH_LIMIT,
              playerVars: {
                autoplay: 1,
              },
            }}
            onEnd={() => setModalShown(false)}
          />
          <button
            className="Youtube-close"
            onClick={() => setModalShown(false)}
          >
            <img src={CloseIcon} alt="close" />
          </button>
        </div>
      </MDBModal>
    </>
  );
};

export default function Multimedia() {
  return MULTIMEDIA.map((media) =>
    media.url ? (
      <UrlMultimedia key={media.title} media={media} />
    ) : (
      <YouTubeMultimedia key={media.title} media={media} />
    )
  );
}
