import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { DataProvider } from "./components/context/DataContext";
import FirstEp from "./components/FirstEp/FirstEp";

export default function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path="*" element={<FirstEp />} />
        </Routes>
      </DataProvider>
    </div>
  );
}
