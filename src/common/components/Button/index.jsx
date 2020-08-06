import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    // throw new Error('I crashed!');
    console.log('[Button]constructor');
  }

  static getDerivedStateFromProps() {
    console.log('[Button]getDerivedStateFromProps');
    return null;
  }

  static getDerivedStateFromError() {
    console.log('[Button]getDerivedStateFromError');
    return null;
  }

  componentDidMount() {
    console.log('[Button]componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('[Button]shouldComponentUpdate');
  }

  componentDidUpdate() {
    console.log('[Button]componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('[Button]componentWillUnmount');
  }

  getSnapshotBeforeUpdate() {
    console.log('[Button]getSnapshotBeforeUpdate');
  }

  componentDidCatch() {
    console.log('[Button]componentDidCatch');
  }

  render() {
    console.log('[Button]render');
    return <button type="submit">Common Button</button>;
  }
}

export default Button;
