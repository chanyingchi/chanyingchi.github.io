import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";

function App() {
  const onNavSelect = (key) => console.log(key);
  return (
    <div className="App">
      <NavBar onSelect={onNavSelect} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
