import React from "react";
import { useState } from "react";

export default function App() {
  let defaultHealth = 100;
  const [health, setHealth] = useState(defaultHealth);
  const life = document.querySelector(":root");

  const reduceLife = (factor) => {
    life.style.setProperty("--health", health - factor + "px");
    if (health <= defaultHealth * 0.4) {
      life.style.setProperty("--health-color", "red");
    }
    setHealth(health - factor);
  };

  const cureLife = () => {
    life.style.setProperty("--health-color", "greenyellow");
    life.style.setProperty("--health", "100px");
    setHealth(defaultHealth);
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
