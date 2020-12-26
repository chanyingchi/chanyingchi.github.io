import ProfilePic from "./profile_pic.jpg";
import { MDBIcon } from "mdbreact";
import "./Home.css";

import LINKS, { EMAIL, NAME } from "../links";

export default function Home() {
  return (
    <>
      <div className="App-section-left">
        <img src={ProfilePic} className="personal-image" alt="personal" />
        <p>{NAME}</p>

        <a
          className="App-link"
          href={`mailto:${EMAIL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {EMAIL}
        </a>

        {Object.keys(LINKS).map((key) => (
          <a
            key={key}
            className="App-link"
            href={LINKS[key]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {key}
          </a>
        ))}
      </div>
      <div className="App-section-right">
        <p className="App-paragraph">Introduction</p>
        <div className="paragraph-section">
          <div className="App-paragraph">
            <h3>Interests</h3>
            TODO
          </div>
          <div className="App-paragraph">
            <h3>Education</h3>
            <ul>
              <li>
                <MDBIcon icon="graduation-cap" /> TODO
              </li>
              <li>
                <MDBIcon icon="graduation-cap" /> TODO2
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
