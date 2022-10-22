import { createContext, useState } from "react";
import Prologue from "../Prologue/Prologue";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [display, setDisplay] = useState(<Prologue />);
  const [species, setSpecies] = useState(0);

  return (
    <DataContext.Provider value={{ display, setDisplay, species, setSpecies }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
