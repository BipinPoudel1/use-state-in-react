import React, { useState } from "react";

const App = () => {
  const state = useState();
  let [count, setCount] = useState(0);

  const Incrementer = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={Incrementer}>Click Me</button>
    </>
  );
};

export default App;
