import React from "react";
import { useState } from "react";

export default function App() {
  const [health, setHealth] = useState(100);

  const reduceLife = (factor) => {
    let life = document.querySelector(":root");
    life.style.setProperty("--health", health - factor + "px");
    setHealth(health - factor);
  };

  const cureLife = () => {
    let life = document.querySelector(":root");
    life.style.setProperty("--health", 100 + "px");
    setHealth(100);
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>Hello StackBlitz!</h1>
      {health > 0 ? <div className="health-bar"></div> : <p>Is dead</p>}
      <p>Start editing to see some magic happen</p>
      <button onClick={() => reduceLife(10)}>Attack</button>
      <button onClick={cureLife}>Cure</button>
    </div>
  );
}
