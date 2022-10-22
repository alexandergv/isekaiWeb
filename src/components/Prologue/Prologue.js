import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";
import World from "../World/World";
const Prologue = () => {
  const [text, setText] = useState(0);
  const { setSpecies, setDisplay } = useContext(DataContext);

  const texts = [
    "En tu mundo anterior te quisieron robar y te moriste por no querer dar tus cosas.",
    "Y como te moriste joven, virgen y sin dinero, se te dará otra oportunidad.",
    "Bienvenido a tu nuevo mundo.",
    "¿En que criatura quieres renacer?",
  ];

  useEffect(() => {
    const nextDialog = (e) => {
      if (e.keyCode === 13 && text < texts.length - 1) setText(text + 1);
    };

    document.addEventListener("keydown", nextDialog);

    return function cleanup() {
      document.removeEventListener("keydown", nextDialog);
    };
  }, [text]);

  return (
    <>
      <div className="dialog-text">
        <p onClick={() => setText(text + 1)}>{texts[text]}</p>
      </div>
      {text === texts.length - 1 && (
        <div className="species-choice-grid">
          <div className="species-choice" onClick={() => setSpecies(0)}>
            Gallo
          </div>
          <div
            className="species-choice"
            onClick={() => {
              setSpecies(1);
              setDisplay(<World />);
            }}
          >
            Humano
          </div>
          <div className="species-choice" onClick={() => setSpecies(2)}>
            Raton
          </div>
        </div>
      )}
    </>
  );
};
export default Prologue;
