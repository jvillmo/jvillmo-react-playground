import React, { useState } from "React";

export default () => {
  const { counter, counterSetter } = useState(0);

  return <h1>{counter}</h1>;
};
