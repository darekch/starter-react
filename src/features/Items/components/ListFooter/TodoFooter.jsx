import React, { useContext } from 'react';

import MyContext from '../../context/ItemsContext';

const Footer = () => {
  const color = useContext(MyContext);
  return <p>Context value: {color}</p>;
};

export default Footer;
