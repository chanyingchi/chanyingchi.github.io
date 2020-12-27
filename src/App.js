import "./App.css";
import NavBar from "./NavBar";
import Home from "./home/Home";
import News from "./news/News";
import Publications from "./publications/Publications";
import Multimedia from "./multimedia/Multimedia";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <div id="home" className="App-section">
          <div className="App-section-content">
            <Home />
          </div>
        </div>
        <div id="news" className="App-section">
          <div className="App-section-grey" />
          <div className="App-section-content">
            <div className="App-section-left">
              <h1>News</h1>
            </div>
            <div className="App-section-right">
              <News />
            </div>
          </div>
        </div>

        <div id="publications" className="App-section">
          <div className="App-section-content">
            <Publications />
          </div>
        </div>

        <div id="multimedia" className="App-section">
          <div className="App-section-grey" />
          <div className="App-section-content">
            <div className="App-section-left">
              <h1>Multimedia</h1>
            </div>
            <Multimedia />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
