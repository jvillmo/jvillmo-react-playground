import React, { useState, useEffect } from "react";

export default () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("mounted or updated");

    return () => {
      console.log("umounted (free memory - garbage collector etc....)");
    };
  });

  console.log(counter);
  return (
    <>
      <h1>Counter ->,{counter}</h1>
      <button
        onClick={e => {
          setCounter(counter + 1);
        }}
      >
        INC
      </button>
    </>
  );
};
