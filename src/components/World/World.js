import { useState, useEffect, useContext } from "react";
import FloatingBox from "../FloatingBox/FloatingBox";
import DataContext from "../context/DataContext";
import Battle from "../Battle/Battle";

const World = () => {
  const messages = [
    "Ahora decide donde renacer.",
    "Aunque por ahora solo puedes ir al bosque.",
  ];
  const [message, setMessage] = useState(0);
  const [onDialog, setOnDialog] = useState(true);
  const { setDisplay } = useContext(DataContext);

  useEffect(() => {
    const nextDialog = (e) => {
      if (e.keyCode === 13) setMessage(message + 1);
    };
    if (!messages[message]) {
      setOnDialog(false);
    }
    document.addEventListener("keydown", nextDialog);

    return function cleanUp() {
      document.removeEventListener("keydown", nextDialog);
    };
  }, [message]);

  return (
    <div className="worldMap">
      <button
        disabled={onDialog}
        onClick={() => setDisplay(<Battle />)}
        className="place-togo bosque"
      >
        Bosque
      </button>
      {messages[message] && <FloatingBox message={messages[message]} />}{" "}
    </div>
  );
};

export default World;
