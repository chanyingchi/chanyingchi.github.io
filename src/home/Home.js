import ProfilePic from "./profile_pic.jpg";
import { MDBIcon } from "mdbreact";
import "./Home.css";

import LINKS, { EMAIL, NAME } from "../links";

export default function Home() {
  return (
    <>
      <div className="App-section-left">
        <img src={ProfilePic} className="personal-image" alt="personal" />
        <h2>{NAME}</h2>

        <a
          className="App-link email"
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
        <p className="App-paragraph">
          I am an ecologist with a strong interest in animal movement and
          migration. My research aims at understanding the decision-making
          process in animal movement and the causes and consequences of
          variation in movement and migratory behaviour. I am specialised in
          analysing tracking data in combination with ground observations and
          environmental covariates. I have led and organised field expeditions
          in Australia and China in satellite tagging of birds, foraging
          behavioural observations, bird counting, resighting of colour-banded
          birds and prey sampling.
        </p>
        <p className="App-paragraph">
          Currently I am a postdoctoral researcher at the <b>Swiss Ornithological Institute</b> at Sempach within the <a
            href="https://www.vogelwarte.ch/en/projects/ecological-research/mechanisms-of-population-dynamics-in-red-kites"
            target="_blank"
            rel="noreferrer"
          >
            Red Kite
          </a> and <a
            href="https://www.vogelwarte.ch/en/projects/ecological-research/survival-rate,-range-use-and-dispersal-of-little-owls"
            target="_blank"
            rel="noreferrer"
          >
            Little Owl
          </a> projects.
        </p>
        <div className="paragraph-section">
          <div className="App-paragraph">
            <h3>Interests</h3>
            <ul>
              <li>Animal movement</li>
              <li>Animal migration</li>
              <li>Conservation biology</li>
              <li>Biologging</li>
              <li>Foraging ecology</li>
              <li>Data visualisation</li>
            </ul>
          </div>
          <div className="App-paragraph">
            <h3>Education</h3>
            <ul className="education">
              <li>
                <MDBIcon icon="graduation-cap" /> PhD University of Groningen
              </li>
              <li>
                <MDBIcon icon="graduation-cap" /> MSc Ecology and Evolution (cum
                laude), University of Groningen
              </li>
              <li>
                <MDBIcon icon="graduation-cap" /> BSc Environmental Life Science
                (First Class Honours), University of Hong Kong
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
