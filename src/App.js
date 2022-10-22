import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./components/context/DataContext";
import FirstEp from "./components/FirstEp/FirstEp";
import World from "./components/World/World";

export default function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path="/" element={<FirstEp />} />
        </Routes>
      </DataProvider>
    </div>
  );
}
