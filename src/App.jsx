import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

import Button from 'components/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Button />
      </div>
    );
  }
}

export default hot(App);
