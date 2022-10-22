import DataContext from "../context/DataContext";
import { useContext } from "react";

const FirstEp = () => {
  const { display } = useContext(DataContext);
  return display;
};

export default FirstEp;
