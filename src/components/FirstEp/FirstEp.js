import { useEffect, useState } from "react";

const FirstEp = () => {
  const [text, setText] = useState(0);

  const texts = [
    "En tu mundo anterior te quisieron robar y te moriste por no querer dar tus cosas.",
    "Y como te moriste joven, virgen y sin dinero, se te dará otra oportunidad.",
  ];

  useEffect(() => {
    const nextDialog = (e) => {
      if (e.keyCode === 13) setText(text + 1);
    };

    document.addEventListener("keydown", nextDialog);

    return function cleanup() {
      document.removeEventListener("keydown", nextDialog);
    };
  }, [text]);

  return (
    <div autoFocus className="dialog-text">
      <p onClick={() => setText(text + 1)}>{texts[text]} </p>
    </div>
  );
};

export default FirstEp;
