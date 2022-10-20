import React from "react";
import { Route, Routes } from "react-router-dom";
import FirstEp from "./components/FirstEp/FirstEp";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/firstEp" element={<FirstEp />} />
      </Routes>
    </div>
  );
}
