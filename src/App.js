import React from "react";
import { useState, useEffect } from "react";

export default function App() {
  let defaultHealth = 100;
  const [health, setHealth] = useState(defaultHealth);
  const lifeStyle = document.querySelector(":root").style;

  useEffect(() => {
    lifeStyle.setProperty("--health", defaultHealth + "px");
    console.log(defaultHealth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reduceLife = (factor) => {
    const damaged = health - factor;
    if (damaged <= defaultHealth * 0.6) {
      lifeStyle.setProperty("--health-color", "red");
    }
    lifeStyle.setProperty("--health", damaged + "px");
    setHealth(damaged);
  };

  const cureLife = () => {
    lifeStyle.setProperty("--health-color", "greenyellow");
    lifeStyle.setProperty("--health", defaultHealth + "px");
    setHealth(defaultHealth);
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>Welcome to your new World!</h1>
      {health > 0 ? <div className="health-bar"></div> : <p>Is dead</p>}
      <p>Click Attack to attack</p>
      <button onClick={() => reduceLife(10)}>Attack</button>
      <button onClick={cureLife}>Cure</button>
      <button onClick={() => reduceLife(80)}> Use Magic</button>
    </div>
  );
}
