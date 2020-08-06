import React, { Component } from 'react';

import MyContext from '../../context/ItemsContext';

class FooterClass extends Component {
  render() {
    const value = this.context;
    return <p>Context value by contextType: {value}</p>;
  }
}

FooterClass.contextType = MyContext;

export default FooterClass;
