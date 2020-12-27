import YouTube from "react-youtube";

import MULTIMEDIA from "./data";
import "./Multimedia.css";

const UrlMultimedia = ({ media }) => (
  <a href={media.url} target="_blank" rel="noreferrer">
    <div className="App-paragraph media">
      <div className="media-left">
        <img className="media-image" src={media.image} alt={media.title} />
      </div>
      <div className="media-right">
        <h4 className="media-title">{media.title}</h4>
        <p className="media-text">{media.text}</p>
      </div>
    </div>
  </a>
);

const YouTubeMultimedia = ({ media }) => (
  <div className="App-paragraph media">
    <div className="media-left">
      <YouTube
        videoId={media.youtube}
        opts={{
          height: "195",
          width: "320",
        }}
      />
    </div>
    <div className="media-right">
      <h4 className="media-title">{media.title}</h4>
      <p className="media-text">{media.text}</p>
    </div>
  </div>
);

export default function Multimedia() {
  return MULTIMEDIA.map((media) =>
    media.url ? (
      <UrlMultimedia key={media.title} media={media} />
    ) : (
      <YouTubeMultimedia key={media.title} media={media} />
    )
  );
}
