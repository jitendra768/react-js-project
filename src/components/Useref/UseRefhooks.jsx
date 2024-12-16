// useRef is a React Hook that lets you reference a value that’s not needed for rendering.
// Manipulating the DOM with a ref

import React, { useEffect, useRef } from "react";

const UseRefhooks = () => {
  const countvalue = useRef(0);
  const divRefrence = useRef();
  const refFocus = useRef();

  const handleClick = () => {
    countvalue.current++;
    console.log(countvalue.current);
  };

  useEffect(() => {
    const divref = divRefrence.current;
    console.log(divref);
  }, []);

  useEffect(()=>{
   refFocus.current.focus();
  },[])
  return (
    <div>
      <h1>Useref Hook</h1>
      <button onClick={handleClick}>Click me</button>
      <div ref={divRefrence} className="hello">
        Hello world
      </div>
      <input ref={refFocus} type="text" placeholder="enter something"/>
    </div>
  );
};

export default UseRefhooks;
