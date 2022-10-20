import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import FirstEp from "./components/FirstEp/FirstEp";
import World from "./components/World/World";

export default function App() {
  const [species, setSpecies] = useState();

  return (
    <div className="App">
      <Routes>
        <Route path="/firstEp" element={<FirstEp setSpecies={setSpecies} />} />
        <Route path="/worldMap" element={<World />} />
      </Routes>
    </div>
  );
}
