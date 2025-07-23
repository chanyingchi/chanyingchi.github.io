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
          I am an ecologist with a background in movement ecology, birds and coastal systems. 
          I am specialised in analysing movement data of individuals, and combining movement with 
          behavioural observations and environmental covariates to draw inferences in why and how animals move. 
          I am very interested in researching how movement data can be applied in wildlife and habitat conservation.
          I am interested in Bayesian methods to combine movement, counts and demographic data 
          to understand species distributions, movements, survival and reproduction.
          I have led and organised field expeditions
          in Australia and China in satellite tagging of birds, foraging
          behavioural observations, bird counting, resighting of colour-banded
          birds and prey sampling.
        </p>
        <p className="App-paragraph">
          Since July 2025 I have started a new job as an Assistant Professor in the <a
            href="https://www.ntu.edu.sg/ase"
            target="_blank"
            rel="noreferrer"
          >
           <b>Asian School of the Environment, Nanyang Technological University, Singapore</b></a>
          . My lab focuses on movement ecology of animals in Southeast Asia. If you are interested in joining my lab or collaborate, please feel free to reach out.
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
