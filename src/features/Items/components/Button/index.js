import React, { Component } from 'react';

import MyContext from '../../context/ItemsContext';

class Button extends Component {
  constructor(props) {
    super(props);
    // throw new Error('I crashed!');
    console.log('[ItemButton]constructor');
  }

  static getDerivedStateFromProps() {
    console.log('[ItemButton]getDerivedStateFromProps');
    return null;
  }

  static getDerivedStateFromError() {
    console.log('[ItemButton]getDerivedStateFromError');
    return null;
  }

  componentDidMount() {
    console.log('[ItemButton]componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('[ItemButton]shouldComponentUpdate');
  }

  componentDidUpdate() {
    console.log('[ItemButton]componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('[ItemButton]componentWillUnmount');
  }

  getSnapshotBeforeUpdate() {
    console.log('[ItemButton]getSnapshotBeforeUpdate');
  }

  componentDidCatch() {
    console.log('[ItemButton]componentDidCatch');
  }

  render() {
    console.log('[ItemButton]render');
    return (
      <MyContext.Consumer>
        {color => (
          <button type="submit" style={{ color }}>
            Button
          </button>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Button;
