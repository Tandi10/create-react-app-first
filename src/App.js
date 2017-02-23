import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FOOTER from './footer.js';
import HEADER from './header/header.js';
class App extends Component {
  render() {
    return (
      <div className="App-logo">
        <HEADER></HEADER>
        <div className="App-header">

          <h2>Welcome to React Dydy Forever</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <FOOTER></FOOTER>
      </div>
    );
  }
}

export default App;
