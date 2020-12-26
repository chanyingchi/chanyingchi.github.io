import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";

import LINKS from './links';

function App() {
  const onNavSelect = (key) => console.log(key);
  return (
    <div className="App">
      <NavBar onSelect={onNavSelect} />
      <div id="home" className="App-section">
        <div id="home" className="App-home-left">
          <img src={logo} className="personal-image" alt="logo" />
          <p>
            Ying-Chi (Ginny) Chan
          </p>
          <a
            className="App-link"
            href={LINKS.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
          >
            Google scholar
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
