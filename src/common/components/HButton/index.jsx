import React, { useState, useEffect } from 'react';

const HButton = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('[HButton] useEffect');
    document.title = `Clicked ${count} times`;
  });

  console.log('[Hbutton] Before return/render');

  return (
    <div>
      <button type="submit" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>Clicked {count} times</p>
    </div>
  );
};

export default HButton;
