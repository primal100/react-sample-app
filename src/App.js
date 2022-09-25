import logo from './logo.svg';
import './App.css';
import {HelloWorld} from "react-sample-library"
import {GoodbyePlanet} from "react-sample-library";

function App() {
  return (
    <div className="App">
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
          <HelloWorld text="Indeed"/>
          <GoodbyePlanet></GoodbyePlanet>
        </a>
      </header>
    </div>
  );
}

export default App;
