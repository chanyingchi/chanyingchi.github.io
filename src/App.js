import "./App.css";
import NavBar from "./NavBar";
import Home from "./home/Home";
import Publications from "./publications/Publications";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <div id="home" className="App-section">
          <Home />
        </div>
        <div id="news" className="App-section">
          <div className="App-section-left">News</div>
          <div className="App-section-right">News TODO</div>
        </div>

        <div id="publications" className="App-section">
          <div className="App-section-left"><h1>Publications</h1></div>
          <div className="App-section-right"><Publications /></div>
        </div>

        <div id="multimedia" className="App-section">
          <div className="App-section-left">multimedia</div>
          <div className="App-section-right">multimedia TODO</div>
        </div>

        <div id="contact" className="App-section">
          <div className="App-section-left">contact</div>
          <div className="App-section-right">contact TODO</div>
        </div>
      </div>

      <Footer />
    </>
  );
}
