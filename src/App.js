import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { StopWatch } from "./StopWatch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <StopWatch />
        </header>
      </div>
    );
  }
}

export default App;
