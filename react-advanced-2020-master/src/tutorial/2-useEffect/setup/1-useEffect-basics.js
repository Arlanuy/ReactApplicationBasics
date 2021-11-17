import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  //you can have many other useEffect
  useEffect(() => {
    console.log('call useEffect');
    if (value >= 1) {  
      document.title = `New Messages(${value})`;
    }
    }, [value]) //only runs on initial render when you have this empty array
  console.log('render component');
  return (<>
  <h1>{value}</h1>
  <button className="btn" onClick={() => setValue(value + 1)}>click me</button>
  </>
    
    );
};

export default UseEffectBasics;
