import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    );
  }
}

export default hot(App);
