import React, { useState } from "react";

function App() {
  const [state, user] = useState(0);
  function increase() {
    user(state + 1);
  }
  function decrease() {
    user(state - 1);
  }

  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
